// ============================================================
// POST /api/contact
// Sends contact / booking / chat form leads via Resend
// Spam-härdad: origin-allowlist, honeypot (hp_field) och enkel
// heuristik. Avvisade anrop får SAMMA svar som ett lyckat utskick
// (tyst avvisning) så att bottar inte kan lära sig vad som filtreras.
// ============================================================

const TO = "joel@stoltmarketing.se";
const FROM = "Stolt Marketing <kontakt@stoltmarketing.se>";

const ALLOWED_ORIGINS = [
  "https://stoltmarketing.se",
  "https://www.stoltmarketing.se",
];

// Identiskt med svaret vid riktigt utskick — skiljer sig inte utåt.
const okSvar = () => Response.json({ ok: true, success: true });

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export async function POST(req) {
  try {
    // 1) Origin/Referer-allowlist. Browser-POSTs från sajten skickar alltid
    // Origin; saknas den godtas en Referer från sajten. Allt annat avvisas tyst.
    const origin = req.headers.get("origin") || "";
    const referer = req.headers.get("referer") || "";
    const originOk =
      ALLOWED_ORIGINS.includes(origin) ||
      (!origin &&
        ALLOWED_ORIGINS.some((o) => referer === o || referer.startsWith(`${o}/`)));
    if (!originOk) return okSvar();

    const data = await req.json();
    const { name, email, message } = data;

    // 2) Honeypot — dolt fält som människor aldrig ser, bara bottar fyller i.
    if (data.hp_field) return okSvar();

    // 3) Heuristik: länkspam (fler än 2 URL:er i meddelandet) och omänskligt
    // snabba submits. Klienten skickar _elapsedMs = tid från sidladdning till
    // submit (mätt med samma klocka, så ingen klockskev kan fälla riktiga
    // användare). Saknas fältet hoppas tidskollen över.
    const urlCount = (String(message ?? "").match(/https?:\/\//gi) || []).length;
    if (urlCount > 2) return okSvar();
    if (typeof data._elapsedMs === "number" && data._elapsedMs < 3000) {
      return okSvar();
    }

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY saknas");
      return Response.json({ error: "Server misconfigured" }, { status: 500 });
    }

    // Build the subject + rows from whichever fields are present
    const subject =
      data._subject || `Ny förfrågan från ${name}${data.company ? ` — ${data.company}` : ""}`;

    const rows = [
      ["Namn", name],
      ["E-post", email],
      ["Företag", data.company],
      ["Tjänst", data.service],
      ["Meddelande", message],
    ]
      .filter(([, v]) => v)
      .map(
        ([label, v]) =>
          `<tr><td style="padding:6px 12px 6px 0;color:#6b6b6b;vertical-align:top;white-space:nowrap;">${esc(
            label
          )}</td><td style="padding:6px 0;color:#1A1611;">${esc(v).replace(/\n/g, "<br>")}</td></tr>`
      )
      .join("");

    const chatBlock = data.chatHistory
      ? `<h3 style="margin:24px 0 8px;font-size:14px;color:#6b6b6b;">Chatthistorik</h3>
         <pre style="white-space:pre-wrap;font-family:inherit;font-size:13px;color:#1A1611;background:#FAF7EE;border:1px solid #E6DEC9;border-radius:8px;padding:12px;">${esc(
           data.chatHistory
         )}</pre>`
      : "";

    const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;">
      <h2 style="font-size:18px;color:#1A1611;margin:0 0 16px;">${esc(subject)}</h2>
      <table style="border-collapse:collapse;font-size:14px;">${rows}</table>
      ${chatBlock}
    </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return Response.json({ error: "Failed to send" }, { status: 502 });
    }

    return Response.json({ ok: true, success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ error: "Internal error" }, { status: 500 });
  }
}
