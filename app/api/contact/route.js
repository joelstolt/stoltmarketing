// ============================================================
// POST /api/contact
// Sends contact / booking / chat form leads via Resend
// Spam-härdad: origin-allowlist, rate limit per IP, honeypot (hp_field),
// fältkap och enkel heuristik. Avvisade anrop får SAMMA svar som ett lyckat utskick
// (tyst avvisning) så att bottar inte kan lära sig vad som filtreras.
// ============================================================

import { rateLimited, clientIp } from "@/lib/rate-limit";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import {saveKvotaForm,deliverKvotaForms} from "@/lib/kvota-outbox";

const TO = "joel@stoltmarketing.se";
const FROM = "Stolt Marketing <kontakt@stoltmarketing.se>";

const ALLOWED_ORIGINS = [
  "https://stoltmarketing.se",
  "https://www.stoltmarketing.se",
];

// Identiskt med svaret vid riktigt utskick, skiljer sig inte utåt.
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

    // Rate limit (5/min/IP, CONTACT_LIMIT i wrangler.jsonc): Origin går att
    // förfalska utanför webbläsaren, så utan tak kan ett skript skicka
    // obegränsat via vår Resend-nyckel. 429 så klienten ser vad som hände.
    if (await rateLimited("CONTACT_LIMIT", clientIp(req))) {
      return Response.json(
        { error: "För många försök på kort tid. Vänta en minut och testa igen." },
        { status: 429 }
      );
    }

    const data = await req.json();
    const { name, email, message } = data;

    // 2) Honeypot, dolt fält som människor aldrig ser, bara bottar fyller i.
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

    // Fältkap: skyddar Resend-anropet och mejlets storlek. Klienterna skickar
    // aldrig i närheten av det här, så bara skript slår i taket.
    const MAX = { name: 200, email: 254, company: 200, service: 200, message: 5000, _subject: 200, chatHistory: 20000 };
    for (const [falt, tak] of Object.entries(MAX)) {
      if (data[falt] != null && String(data[falt]).length > tak) {
        return Response.json({ error: "Too long" }, { status: 400 });
      }
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+$/.test(email)) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY saknas");
      return Response.json({ error: "Server misconfigured" }, { status: 500 });
    }

    // Build the subject + rows from whichever fields are present
    const subject =
      data._subject || `Ny förfrågan från ${name}${data.company ? `, ${data.company}` : ""}`;

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

    // Save first. Delivery and AI may continue safely after this request ends.
    const {env,ctx}=getCloudflareContext();
    const reference=await saveKvotaForm(env,data,{from:FROM,to:TO,reply_to:email,subject,html:html+'<p><a href="https://app.kvota.se/kundkontakt">Öppna Kundkontakt i Kvota</a> och välj Stolt Marketing för att läsa svarsförslaget och förbereda en offert.</p>'});
    ctx.waitUntil(deliverKvotaForms(env));

    // Annonskonverteringen till Kontrollrummets kö, som sweeperns uppladdare
    // tömmer mot Google Ads varje timme. Kontot mäter offline import, alltså
    // registreras ingenting alls om det här steget saknas. Sajten är kakfri,
    // så klick-id:t är enda kopplingen tillbaka till annonsen.
    //
    // Får aldrig fälla formuläret: förfrågan är redan sparad här, och ett
    // lead är värt oändligt mycket mer än en mätpunkt.
    if (data.klickId && process.env.KONVERTERING_TOKEN) {
      try {
        await fetch("https://api.dash.stoltmarketing.se/api/konvertering", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.KONVERTERING_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            map_id: "stolt-lead",
            klick_id: data.klickId,
            // Samma värdeskala som lib/track.js: ett lead är värt 1 000 kr i
            // budgivningen, ett avtal 15 000. Här rapporteras leadet.
            value_ore: 100000,
            currency: "SEK",
            occurred_at: new Date().toISOString(),
          }),
        });
      } catch (e) {
        console.error("Konverteringsköet svarade inte:", e);
      }
    }

    return Response.json({ ok: true, success: true, reference });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ error: "Din förfrågan kunde inte sparas. Försök igen om en liten stund." }, { status: 500 });
  }
}
