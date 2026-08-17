import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Sajtvaktens rapport-route. Två lägen:
 *
 * 1. PUBLIKT (formuläret på /sajtkoll): tar emot {resultId, email, name, bevaka},
 *    hämtar resultatet ur D1 (serverns sanning, aldrig klientens JSON), skickar
 *    rapporten som mejl via Resend + lead-notis till Joel. Vid bevaka=true
 *    registreras en prenumerant med avslutstoken.
 *
 * 2. CRON (header x-cron-secret): {subscriberId} kör månadsrapporten: färsk scan
 *    via egna API:t, diff mot baseline, mejl med förändringar, ny baseline.
 *
 * Ärlighetsregler ärvs från motorn: mejlet innehåller bara uppmätta värden,
 * AI-avsnitten är märkta som AI-frågor och lovar ingenting.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const FROM = "Sajtvakten - Stolt Marketing <kontakt@stoltmarketing.se>";
const JOEL = "joel@stoltmarketing.se";

const ALLOWED_ORIGINS = [
  "https://www.stoltmarketing.se",
  "https://stoltmarketing.se",
  "https://stolt-nydesign.joel-d77.workers.dev",
  "http://localhost:3000",
];

const RATE_LIMIT = { windowMs: 60_000, max: 3 };
const hits = new Map();
function rateLimited(key) {
  const now = Date.now();
  const bucket = (hits.get(key) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  bucket.push(now);
  hits.set(key, bucket);
  if (hits.size > 5000) hits.clear();
  return bucket.length > RATE_LIMIT.max;
}

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ── AI-synlighetsfrågan: extraherar bransch+ort ur titeln och provar om
   företaget dyker upp när en AI ombeds rekommendera. Ögonblicksbild av EN
   modell, aldrig mer än så, och mejlet säger det. ── */
async function aiSynlighet(apiKey, resultat) {
  if (!apiKey) return null;
  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "x-api-key": apiKey, "anthropic-version": "2023-06-01", "content-type": "application/json" },
      signal: AbortSignal.timeout(9000),
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        messages: [
          {
            role: "user",
            content: `Sajt: ${resultat.url}\nTitel i mätningen: hämtad från sajten.\n\nSteg 1: Avgör utifrån domännamnet och adressen om detta är ett företag med tydlig bransch och svensk ort. Om det INTE går att avgöra säkert, svara exakt: {"ok":false}\n\nSteg 2: Om det går: låtsas att en användare frågar dig "vilka ${""}företag inom branschen i orten rekommenderar du?" och lista de 3-5 namn du faktiskt skulle nämna, utan att titta på sajten ovan.\n\nSvara ENDAST med JSON: {"ok":true,"bransch":"...","ort":"...","foretag":"företagsnamnet från domänen","rekommenderade":["...","..."]} eller {"ok":false}`,
          },
        ],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const text = (data.content?.[0]?.text || "").trim();
    const m = text.match(/\{[\s\S]*\}/);
    if (!m) return null;
    const j = JSON.parse(m[0]);
    if (!j.ok || !j.bransch || !j.ort || !Array.isArray(j.rekommenderade)) return null;
    const host = new URL(resultat.url).hostname.replace(/^www\./, "").split(".")[0].toLowerCase();
    const namnTraff = j.rekommenderade.some(
      (r) => String(r).toLowerCase().includes(host) || (j.foretag && String(r).toLowerCase().includes(String(j.foretag).toLowerCase()))
    );
    return { bransch: j.bransch, ort: j.ort, namnd: namnTraff };
  } catch {
    return null;
  }
}

/* ── Mejl-HTML: ljus botten, mörk text. Sajtens mörka tema hör inte hemma i
   inkorgen. ── */
function renderEmail({ resultat, name, diff, unsubUrl, synlighet }) {
  const farg = (c) => (c.pass ? "#1a7f37" : c.warn ? "#b58900" : "#c0392b");
  const symbol = (c) => (c.pass ? "&#10003;" : c.warn ? "&#9888;" : "&#10007;");
  const rows = resultat.checks
    .map(
      (c) => `<tr>
        <td style="padding:8px 10px 8px 0;color:${farg(c)};font-weight:bold;white-space:nowrap;vertical-align:top;">${symbol(c)}</td>
        <td style="padding:8px 12px 8px 0;color:#1A1611;vertical-align:top;"><strong>${esc(c.label)}</strong><br>
          <span style="color:#6b6b6b;font-size:13px;">${esc(c.detail)}</span></td>
        <td style="padding:8px 0;color:#1A1611;white-space:nowrap;vertical-align:top;">${esc(c.value)}</td>
      </tr>`
    )
    .join("");

  const attGora = resultat.checks
    .filter((c) => !c.pass)
    .slice(0, 3)
    .map((c) => `<li style="margin:0 0 8px;">${esc(c.detail)}</li>`)
    .join("");

  const diffBlock = diff && diff.length
    ? `<h3 style="font-size:15px;color:#1A1611;margin:24px 0 8px;">F&ouml;r&auml;ndringar sedan f&ouml;rra rapporten</h3>
       <ul style="margin:0;padding-left:18px;color:#1A1611;font-size:14px;">${diff
         .map((d) => `<li style="margin:0 0 6px;">${esc(d)}</li>`)
         .join("")}</ul>`
    : "";

  const synBlock = synlighet
    ? `<div style="margin:24px 0;padding:14px 16px;background:#FBF6E8;border:1px solid #E6DEC9;border-radius:8px;">
        <strong style="color:#1A1611;font-size:14px;">Syns ni n&auml;r kunder fr&aring;gar AI?</strong><br>
        <span style="color:#1A1611;font-size:14px;">N&auml;r vi bad en AI-assistent rekommendera ${esc(synlighet.bransch)} i ${esc(synlighet.ort)} ${
        synlighet.namnd
          ? "fanns ni med bland f&ouml;rslagen. Bra utg&aring;ngsl&auml;ge att bygga vidare p&aring;."
          : "n&auml;mndes ni inte bland f&ouml;rslagen. Allt fler kunder fr&aring;gar AI i st&auml;llet f&ouml;r att googla, och det g&aring;r att jobba med."
      } Detta &auml;r en &ouml;gonblicksbild fr&aring;n en enda AI-modell, inte en fullst&auml;ndig m&auml;tning.</span>
      </div>`
    : "";

  return `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;color:#1A1611;">
    <p style="font-size:20px;font-weight:bold;margin:0 0 4px;">stolt<span style="color:#DFA616;">.</span> <span style="font-size:12px;color:#6b6b6b;font-weight:normal;letter-spacing:2px;">SAJTVAKTEN</span></p>
    <h2 style="font-size:19px;margin:16px 0 4px;">${name ? esc(name) + ", h" : "H"}&auml;r &auml;r rapporten f&ouml;r ${esc(resultat.url.replace(/^https?:\/\//, ""))}</h2>
    <p style="font-size:40px;font-weight:bold;margin:8px 0 0;">${resultat.score}<span style="font-size:16px;color:#6b6b6b;font-weight:normal;"> av 100</span></p>
    <p style="font-size:15px;color:#1A1611;margin:4px 0 16px;font-style:italic;">${esc(resultat.verdict)}</p>
    ${resultat.ai ? `<p style="font-size:14px;color:#1A1611;background:#F7F3E8;border-radius:8px;padding:12px 14px;margin:0 0 8px;">${esc(resultat.ai)}</p><p style="font-size:11px;color:#9b9b9b;margin:0 0 16px;">Sammanfattning framtagen automatiskt ur m&auml;tv&auml;rdena.</p>` : ""}
    ${synBlock}
    ${diffBlock}
    ${attGora ? `<h3 style="font-size:15px;margin:24px 0 8px;">B&ouml;rja h&auml;r</h3><ol style="margin:0;padding-left:18px;font-size:14px;">${attGora}</ol>` : ""}
    <h3 style="font-size:15px;margin:24px 0 4px;">Alla ${resultat.total} kontroller</h3>
    <table style="border-collapse:collapse;font-size:14px;width:100%;">${rows}</table>
    <div style="margin:28px 0;">
      <a href="https://www.stoltmarketing.se/boka" style="display:inline-block;background:#1A1611;color:#FAF5EC;text-decoration:none;font-size:14px;font-weight:bold;padding:12px 22px;border-radius:24px;">Vill du att vi fixar det h&auml;r? Boka kostnadsfri genomg&aring;ng</a>
    </div>
    <p style="font-size:12px;color:#9b9b9b;">Det vi hittar kan vi fixa: granskning, &aring;tg&auml;rder till fast pris eller helt ny sajt d&auml;r allt ing&aring;r. Svar inom 24 timmar p&aring; vardagar. 076-686 74 06.</p>
    ${unsubUrl ? `<p style="font-size:12px;color:#9b9b9b;">Du f&aring;r detta f&ouml;r att du bevakar din sajt med Sajtvakten. <a href="${unsubUrl}" style="color:#6b6b6b;">Avsluta bevakningen</a> n&auml;r du vill.</p>` : ""}
  </div>`;
}

async function sendMail(apiKey, { to, subject, html, replyTo }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [to], subject, html, ...(replyTo ? { reply_to: replyTo } : {}) }),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, id: data.id || null };
}

/* Diff mot baseline: bara faktiska förändringar, uttryckta i klartext. */
function bygglDiff(nu, bas) {
  if (!bas) return [];
  const ut = [];
  if (nu.score !== bas.score) {
    ut.push(`Totalpo&auml;ngen gick fr&aring;n ${bas.score} till ${nu.score}.`);
  }
  const basMap = Object.fromEntries((bas.checks || []).map((c) => [c.id, c]));
  for (const c of nu.checks) {
    const f = basMap[c.id];
    if (!f) continue;
    if (f.pass && !c.pass) ut.push(`${c.label}: var ok, &auml;r nu ett problem (${c.value}).`);
    if (!f.pass && c.pass) ut.push(`${c.label}: &aring;tg&auml;rdat sedan sist. Bra jobbat.`);
    if (c.id === "weight" && f.value !== c.value) ut.push(`Sidvikten &auml;ndrades fr&aring;n ${f.value} till ${c.value}.`);
  }
  return ut.slice(0, 6);
}

export async function POST(req) {
  const { env } = getCloudflareContext();
  const resendKey = process.env.RESEND_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const self = new URL(req.url).origin;
  const cronSecret = req.headers.get("x-cron-secret");
  const isCron = cronSecret && env?.CRON_SECRET && cronSecret === env.CRON_SECRET;

  if (!isCron) {
    const origin = req.headers.get("origin") || "";
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json({ error: "Ogiltig begäran." }, { status: 403 });
    }
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "okänd";
    if (rateLimited(ip)) {
      return NextResponse.json({ error: "Vänta en stund innan du beställer en rapport till." }, { status: 429 });
    }
  }

  const body = await req.json().catch(() => ({}));

  /* ── CRON-LÄGE: månadsrapport för en prenumerant ── */
  if (isCron && body.subscriberId) {
    const sub = await env.DB.prepare("SELECT * FROM subscribers WHERE id = ?1 AND active = 1")
      .bind(body.subscriberId)
      .first();
    if (!sub) return NextResponse.json({ error: "okänd prenumerant" }, { status: 404 });

    const scan = await fetch(`${self}/api/sajtkoll`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "User-Agent": "Sajtvakten-cron" },
      body: JSON.stringify({ url: sub.url }),
    });
    if (!scan.ok) return NextResponse.json({ error: "scan misslyckades", status: scan.status }, { status: 502 });
    const resultat = await scan.json();

    const baseline = sub.baseline ? JSON.parse(sub.baseline) : null;
    const diff = bygglDiff(resultat, baseline);
    const synlighet = await aiSynlighet(anthropicKey, resultat);
    const unsubUrl = `${self}/api/sajtkoll/avsluta?t=${sub.token}`;
    const mail = await sendMail(resendKey, {
      to: sub.email,
      subject: `Sajtvakten: månadsrapport för ${sub.url.replace(/^https?:\/\//, "")} (${resultat.score} av 100)`,
      html: renderEmail({ resultat, name: sub.name, diff, unsubUrl, synlighet }),
      replyTo: JOEL,
    });

    await env.DB.prepare(
      "UPDATE subscribers SET baseline = ?1, last_report_at = datetime('now'), next_report_at = datetime('now', '+1 month') WHERE id = ?2"
    )
      .bind(JSON.stringify(resultat), sub.id)
      .run();

    return NextResponse.json({ ok: mail.ok, mailId: mail.id });
  }

  /* ── PUBLIKT LÄGE ── */
  const { resultId, email, name, bevaka, hp_field } = body;
  if (hp_field) return NextResponse.json({ ok: true });
  if (!resultId || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email))) {
    return NextResponse.json({ error: "Fyll i en riktig e-postadress." }, { status: 400 });
  }
  if (!env?.DB || !resendKey) {
    return NextResponse.json({ error: "Rapporten är inte tillgänglig just nu." }, { status: 503 });
  }

  const row = await env.DB.prepare("SELECT data FROM results WHERE id = ?1").bind(String(resultId)).first();
  if (!row) return NextResponse.json({ error: "Resultatet har gått ut. Kör mätningen igen." }, { status: 404 });
  const resultat = JSON.parse(row.data);

  let unsubUrl = null;
  if (bevaka) {
    const subId = crypto.randomUUID().replace(/-/g, "").slice(0, 12);
    const token = crypto.randomUUID().replace(/-/g, "");
    await env.DB.prepare(
      `INSERT INTO subscribers (id, email, name, url, token, baseline, last_report_at, next_report_at)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, datetime('now'), datetime('now', '+1 month'))
       ON CONFLICT(email, url) DO UPDATE SET active = 1, name = ?3, baseline = ?6, next_report_at = datetime('now', '+1 month')`
    )
      .bind(subId, String(email).toLowerCase(), name ? String(name).slice(0, 80) : null, resultat.url, token, JSON.stringify(resultat))
      .run();
    const tokenRow = await env.DB.prepare("SELECT token FROM subscribers WHERE email = ?1 AND url = ?2")
      .bind(String(email).toLowerCase(), resultat.url)
      .first();
    unsubUrl = `${self}/api/sajtkoll/avsluta?t=${tokenRow?.token || token}`;
  }

  const synlighet = await aiSynlighet(anthropicKey, resultat);
  const mail = await sendMail(resendKey, {
    to: String(email),
    subject: `Rapporten för ${resultat.url.replace(/^https?:\/\//, "")}: ${resultat.score} av 100`,
    html: renderEmail({ resultat, name, diff: null, unsubUrl, synlighet }),
    replyTo: JOEL,
  });
  if (!mail.ok) {
    return NextResponse.json({ error: "Mejlet kunde inte skickas. Testa igen om en stund." }, { status: 502 });
  }

  /* Lead-notis till Joel: vem, vilken sajt, vilket resultat, bevakar de. */
  await sendMail(resendKey, {
    to: JOEL,
    subject: `Sajtvakten-lead: ${String(email)} (${resultat.url.replace(/^https?:\/\//, "")}, ${resultat.score}/100${bevaka ? ", BEVAKAR" : ""})`,
    html: `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:14px;color:#1A1611;">
      <p><strong>${esc(name || "Utan namn")}</strong> &lt;${esc(email)}&gt; beställde rapporten.</p>
      <p>Sajt: <a href="${esc(resultat.url)}">${esc(resultat.url)}</a><br>Poäng: ${resultat.score} av 100<br>Bevakning: ${bevaka ? "JA, månadsrapport aktiv" : "nej"}</p>
      <p>${esc(resultat.verdict)}</p>
    </div>`,
    replyTo: String(email),
  });

  return NextResponse.json({ ok: true, mailId: mail.id, bevakar: !!bevaka });
}
