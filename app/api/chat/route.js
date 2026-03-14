import { chatConfig } from "@/lib/chat-config";

// ============================================================
// POST /api/chat
// Streams Claude response + sends Slack notification
// ============================================================

export async function POST(req) {
  try {
    const { messages, conversationId, isFirstMessage } = await req.json();

    if (!messages || !messages.length) {
      return Response.json({ error: "No messages" }, { status: 400 });
    }

    // --- Slack notification (fire-and-forget on first message) ---
    if (isFirstMessage && chatConfig.slackNotify && process.env.SLACK_WEBHOOK_URL) {
      const userMsg = messages[messages.length - 1]?.content || "";
      notifySlack(userMsg, conversationId).catch(() => {});
    }

    // --- Stream from Claude ---
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
        system: chatConfig.systemPrompt,
        stream: true,
        messages: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Claude API error:", err);
      return Response.json(
        { error: "AI service unavailable" },
        { status: 502 }
      );
    }

    // --- Transform SSE stream to text stream ---
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
                if (
                  event.type === "content_block_delta" &&
                  event.delta?.type === "text_delta"
                ) {
                  controller.enqueue(encoder.encode(event.delta.text));
                }
              } catch {
                // skip malformed JSON
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
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return Response.json({ error: "Internal error" }, { status: 500 });
  }
}

// ============================================================
// Slack Webhook
// ============================================================

async function notifySlack(message, conversationId) {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;

  const truncated =
    message.length > 200 ? message.slice(0, 200) + "…" : message;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: `💬 Nytt chattmeddelande — ${chatConfig.siteName}`,
            emoji: true,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Besökare skriver:*\n>${truncated}`,
          },
        },
        {
          type: "context",
          elements: [
            {
              type: "mrkdwn",
              text: `🌐 ${chatConfig.siteUrl} · ID: \`${conversationId || "–"}\``,
            },
          ],
        },
      ],
    }),
  });
}
