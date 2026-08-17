import { getCloudflareContext } from "@opennextjs/cloudflare";

/** Avsluta Sajtvakten-bevakningen via token-länken i mejlet. Ett klick, klart. */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const sida = (rubrik, text) => new Response(
  `<!doctype html><html lang="sv"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${rubrik}</title></head>
  <body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#0F0D08;color:#F2ECDD;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:24px;">
  <div style="max-width:420px;text-align:center;">
    <p style="font-size:22px;font-weight:bold;margin:0 0 8px;">stolt<span style="color:#F2C230;">.</span></p>
    <h1 style="font-size:22px;margin:0 0 10px;">${rubrik}</h1>
    <p style="font-size:15px;color:rgba(242,236,221,0.7);line-height:1.6;">${text}</p>
    <p style="margin-top:24px;"><a href="https://www.stoltmarketing.se/sajtkoll" style="color:#F2C230;">Till sajtkollen</a></p>
  </div></body></html>`,
  { headers: { "content-type": "text/html; charset=utf-8" } }
);

export async function GET(req) {
  const token = new URL(req.url).searchParams.get("t");
  if (!token) return sida("Något saknas", "Länken är ofullständig. Använd avslutslänken i mejlet.");
  const { env } = getCloudflareContext();
  if (!env?.DB) return sida("Tillfälligt fel", "Testa länken igen om en stund.");
  const r = await env.DB.prepare("UPDATE subscribers SET active = 0 WHERE token = ?1").bind(token).run();
  if (r.meta?.changes > 0) {
    return sida("Bevakningen är avslutad", "Du får inga fler månadsrapporter. Du kan starta bevakningen igen när som helst genom att köra en ny mätning.");
  }
  return sida("Redan avslutad", "Den här bevakningen är redan avslutad eller så har länken använts tidigare.");
}
