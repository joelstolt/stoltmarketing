// Wrapper runt OpenNext-workern. Skarpa domänen (custom domain genom zonen)
// edge-cachar svar enligt s-maxage=31536000 som OpenNext sätter på prerendrad
// HTML - efter en deploy kan kanten då servera årsgammal HTML tills manuell
// purge. Hashade byggfiler och bilder får behålla långa cache-headers; allt
// annat (HTML, RSC-payloads, robots, sitemap) ska alltid revalideras mot
// workern.
import handler from "./.open-next/worker.js";
export { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from "./.open-next/worker.js";

const STATISK = /\.(css|js|mjs|png|jpe?g|webp|avif|gif|svg|ico|woff2?|ttf|otf|mp4|webm|pdf)$/i;

export default {
  async fetch(request, env, ctx) {
    const res = await handler.fetch(request, env, ctx);
    const { pathname } = new URL(request.url);
    if (pathname.startsWith("/_next/static/") || STATISK.test(pathname)) {
      return res;
    }
    const ut = new Response(res.body, res);
    ut.headers.set("cache-control", "public, max-age=0, must-revalidate");
    // Preview-workrar (PREVIEW_NOINDEX=1 i wrangler-configen) får aldrig indexeras.
    if (env?.PREVIEW_NOINDEX === "1") ut.headers.set("x-robots-tag", "noindex, nofollow");
    return ut;
  },

  /* Sajtvakten: daglig cron.
     1. Prenumeranter vars månadsrapport är due får full rapport via egna API:t.
     2. Övriga får en lätt hälsokoll: svarar sajten inte alls två dagar i rad
        skickas ett akutlarm (max ett per vecka per prenumerant). Larmet är
        Sajtvaktens starkaste bevis: någon vakar faktiskt. */
  async scheduled(event, env, ctx) {
    ctx.waitUntil(korSajtvakten(env));
  },
};

async function korSajtvakten(env) {
  if (!env?.DB) return;
  const self = env.SELF_URL || "https://stolt-nydesign.joel-d77.workers.dev";

  // 1. Månadsrapporter som är due (max 20 per dygn, resten tas nästa körning)
  try {
    const due = await env.DB.prepare(
      "SELECT id FROM subscribers WHERE active = 1 AND (next_report_at IS NULL OR next_report_at <= datetime('now')) LIMIT 20"
    ).all();
    for (const row of due.results || []) {
      try {
        await fetch(`${self}/api/sajtkoll/rapport`, {
          method: "POST",
          headers: { "content-type": "application/json", "x-cron-secret": env.CRON_SECRET || "" },
          body: JSON.stringify({ subscriberId: row.id }),
        });
      } catch {}
    }
  } catch {}

  // 2. Daglig hälsokoll + akutlarm
  try {
    const alla = await env.DB.prepare(
      "SELECT id, email, name, url, token, baseline, last_alert_at FROM subscribers WHERE active = 1 LIMIT 200"
    ).all();
    for (const s of alla.results || []) {
      try {
        let nere = false;
        try {
          const r = await fetch(s.url, {
            headers: { "User-Agent": "Mozilla/5.0 (Sajtvakten halsokoll)" },
            signal: AbortSignal.timeout(12000),
            redirect: "follow",
          });
          nere = r.status >= 500;
        } catch {
          nere = true;
        }
        const bas = s.baseline ? JSON.parse(s.baseline) : {};
        const varNere = bas._halsa === "nere";
        const nyHalsa = nere ? "nere" : "uppe";
        if (bas._halsa !== nyHalsa) {
          bas._halsa = nyHalsa;
          await env.DB.prepare("UPDATE subscribers SET baseline = ?1 WHERE id = ?2")
            .bind(JSON.stringify(bas), s.id)
            .run();
        }
        // Larma först när sajten varit nere TVÅ kontroller i rad (inga falsklarm
        // på enstaka hickor), max ett larm per 7 dagar.
        const larmSpärr = s.last_alert_at && Date.now() - new Date(s.last_alert_at + "Z").getTime() < 7 * 864e5;
        if (nere && varNere && !larmSpärr && env.RESEND_API_KEY) {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
            body: JSON.stringify({
              from: "Sajtvakten - Stolt Marketing <kontakt@stoltmarketing.se>",
              to: [s.email],
              reply_to: "joel@stoltmarketing.se",
              subject: `Akut: ${s.url.replace(/^https?:\/\//, "")} svarar inte`,
              html: `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;color:#1A1611;">
                <p style="font-size:20px;font-weight:bold;margin:0 0 12px;">stolt<span style="color:#DFA616;">.</span> <span style="font-size:12px;color:#6b6b6b;font-weight:normal;letter-spacing:2px;">SAJTVAKTEN</span></p>
                <p style="font-size:15px;">${s.name ? s.name + ", din" : "Din"} sajt <strong>${s.url.replace(/^https?:\/\//, "")}</strong> har inte svarat vid v&aring;ra tv&aring; senaste kontroller. Det kan betyda att den ligger nere f&ouml;r bes&ouml;kare just nu.</p>
                <p style="font-size:15px;">Kolla med ditt webbhotell, eller svara p&aring; det h&auml;r mejlet s&aring; tittar jag direkt. 076-686 74 06 fungerar ocks&aring;.</p>
                <p style="font-size:12px;color:#9b9b9b;">Du f&aring;r detta f&ouml;r att Sajtvakten bevakar din sajt. <a href="${self}/api/sajtkoll/avsluta?t=${s.token}" style="color:#6b6b6b;">Avsluta bevakningen</a>.</p>
              </div>`,
            }),
          });
          await env.DB.prepare("UPDATE subscribers SET last_alert_at = datetime('now') WHERE id = ?1")
            .bind(s.id)
            .run();
        }
      } catch {}
    }
  } catch {}
}

