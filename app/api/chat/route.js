import { chatConfig } from "@/lib/chat-config";
import { SNAPSHOT } from "@/lib/kundmotor";
import { rateLimited, clientIp } from "@/lib/rate-limit";

// ============================================================
// POST /api/chat
// Strömmar Claude-svar till chattwidgeten.
//
// Härdning (chatten kostar pengar per anrop): origin-allowlist, rate limit
// per IP, tak på antal och längd på meddelanden. Systemprompten får
// kundmotorns live-tal (samma som startsidan) och, om besökaren just kört
// sajtkollen, resultatet av den, så svaren handlar om deras sajt.
// ============================================================

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const ALLOWED_ORIGINS = [
  "https://stoltmarketing.se",
  "https://www.stoltmarketing.se",
  "http://localhost:3000",
];

// Rate limit: 12/min/IP via CHAT_LIMIT-bindingen (se lib/rate-limit.js för
// varför en Map i modulen inte räckte).

async function liveTal() {
  try {
    const self = process.env.SELF_URL || "https://www.stoltmarketing.se";
    const r = await fetch(`${self}/api/kundmotor`, { signal: AbortSignal.timeout(2500) });
    if (r.ok) {
      const d = await r.json();
      if (typeof d.leads === "number" && Array.isArray(d.rows)) return d;
    }
  } catch {}
  return SNAPSHOT;
}

export async function POST(req) {
  try {
    const origin = req.headers.get("origin") || "";
    const referer = req.headers.get("referer") || "";
    const originOk =
      ALLOWED_ORIGINS.includes(origin) ||
      (!origin && ALLOWED_ORIGINS.some((o) => referer === o || referer.startsWith(`${o}/`)));
    if (!originOk) return Response.json({ error: "Ogiltig begäran." }, { status: 403 });

    if (await rateLimited("CHAT_LIMIT", clientIp(req))) {
      return Response.json({ error: "För många frågor på kort tid. Vänta en minut." }, { status: 429 });
    }

    const body = await req.json().catch(() => ({}));
    const { messages, context } = body;
    if (!Array.isArray(messages) || !messages.length || messages.length > 30) {
      return Response.json({ error: "No messages" }, { status: 400 });
    }
    const rena = messages
      .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));
    if (!rena.length || rena[rena.length - 1].role !== "user") {
      return Response.json({ error: "No messages" }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json({ error: "AI service unavailable" }, { status: 502 });
    }

    const km = await liveTal();
    const rader = (km.rows || [])
      .map((r) => `${r.name} (${r.ort}): ${r.offert} offertförfrågningar och ${r.samtal} samtal`)
      .join("; ");
    let system =
      `${chatConfig.systemPrompt}\n\nLIVE-TAL (ur Umami, senaste ${km.dagar} dagarna, ${km.sajter} kundsajter i drift): ` +
      `${km.visitors} besökare, ${km.pageviews} sidvisningar, ${km.leads} förfrågningar, samtal och mejlklick. Per case: ${rader}.`;
    if (typeof context === "string" && context.trim()) {
      system += `\n\nBESÖKARENS EGEN SAJTKOLL JUST NU (mätt av vår motor, referera till den när det passar): ${context.slice(0, 900)}`;
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: chatConfig.model,
        max_tokens: chatConfig.maxTokens,
        system,
        stream: true,
        messages: rena,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Claude API error:", err);
      return Response.json({ error: "AI service unavailable" }, { status: 502 });
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body.getReader();
        let buffer = "";
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";
            for (const line of lines) {
              if (!line.startsWith("data: ")) continue;
              const data = line.slice(6).trim();
              if (data === "[DONE]") continue;
              try {
                const event = JSON.parse(data);
                if (event.type === "content_block_delta" && event.delta?.type === "text_delta") {
                  controller.enqueue(encoder.encode(event.delta.text));
                }
              } catch {
                // hoppa över trasig rad
              }
            }
          }
        } catch (err) {
          console.error("Stream error:", err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return Response.json({ error: "Internal error" }, { status: 500 });
  }
}
