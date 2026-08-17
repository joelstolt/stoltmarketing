import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { buildSajtvaktPdf } from "./sajtvakt-pdf";

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

/* ── Mejl-HTML: tabellbaserad layout som håller i Gmail/Outlook/Apple Mail.
   Mörkt hero-kort med varumärket, ljus kropp med statuschips per kontroll.
   Sajtens mörka tema hör inte hemma i brödtexten: mörk text på ljust. ── */
function renderEmail({ resultat, name, diff, unsubUrl, synlighet }) {
  const host = resultat.url.replace(/^https?:\/\//, "");
  const scoreFarg = resultat.score >= 85 ? "#2EA043" : resultat.score >= 60 ? "#D4A72C" : "#E5534B";
  const chip = (c) => {
    const bg = c.pass ? "#DCFCE7" : c.warn ? "#FEF3C7" : "#FEE2E2";
    const fg = c.pass ? "#166534" : c.warn ? "#854D0E" : "#991B1B";
    const txt = c.pass ? "OK" : c.warn ? "SE ÖVER" : "ÅTGÄRDA";
    return `<span style="display:inline-block;background:${bg};color:${fg};font-size:10px;font-weight:700;letter-spacing:0.06em;padding:3px 9px;border-radius:20px;">${txt}</span>`;
  };

  const rows = resultat.checks
    .map(
      (c, i) => `<tr>
        <td style="padding:13px 0 12px;border-top:${i ? "1px solid #EFECE4" : "none"};vertical-align:top;">
          <div style="font-size:13.5px;font-weight:600;color:#1A1611;">${esc(c.label)}
            <span style="font-weight:400;color:#8A857A;">&nbsp;·&nbsp;${esc(c.value)}</span></div>
          <div style="font-size:12.5px;color:#6E6A60;line-height:1.55;margin-top:3px;">${esc(c.detail)}</div>
        </td>
        <td style="padding:13px 0 12px 12px;border-top:${i ? "1px solid #EFECE4" : "none"};vertical-align:top;text-align:right;white-space:nowrap;">${chip(c)}</td>
      </tr>`
    )
    .join("");

  const attGora = resultat.checks
    .filter((c) => !c.pass)
    .slice(0, 3)
    .map(
      (c, i) => `<tr><td style="padding:7px 12px 7px 0;vertical-align:top;font-family:Georgia,serif;font-size:17px;font-weight:700;color:#DFA616;">${i + 1}</td>
      <td style="padding:9px 0 7px;font-size:13.5px;color:#1A1611;line-height:1.6;">${esc(c.detail)}</td></tr>`
    )
    .join("");

  const sektion = (titel) =>
    `<div style="font-size:11px;font-weight:700;letter-spacing:0.18em;color:#9B958A;margin:28px 0 10px;">${titel}</div>`;

  const diffBlock = diff && diff.length
    ? sektion("FÖRÄNDRINGAR SEDAN FÖRRA RAPPORTEN") +
      `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">${diff
        .map((d) => `<tr><td style="padding:4px 8px 4px 0;color:#DFA616;font-weight:700;">·</td><td style="padding:4px 0;font-size:13.5px;color:#1A1611;line-height:1.6;">${d}</td></tr>`)
        .join("")}</table>`
    : "";

  const synBlock = synlighet
    ? `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin:24px 0 0;"><tr>
        <td style="background:#FBF6E8;border:1px solid #EADFC4;border-radius:10px;padding:16px 18px;">
          <div style="font-size:13px;font-weight:700;color:#1A1611;margin-bottom:4px;">Syns ni när kunder frågar AI?</div>
          <div style="font-size:13px;color:#4A463D;line-height:1.6;">När vi bad en AI-assistent rekommendera ${esc(synlighet.bransch)} i ${esc(synlighet.ort)} ${
        synlighet.namnd
          ? "fanns ni med bland förslagen. Bra utgångsläge att bygga vidare på."
          : "nämndes ni inte bland förslagen. Allt fler kunder frågar AI i stället för att googla, och det går att jobba med."
      } Ögonblicksbild från en enda AI-modell, inte en fullständig mätning.</div>
        </td></tr></table>`
    : "";

  return `<!doctype html><html lang="sv"><body style="margin:0;padding:0;background:#F2EFE7;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background:#F2EFE7;"><tr><td align="center" style="padding:28px 14px;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;max-width:620px;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

    <tr><td style="background:#0F0D08;border-radius:14px 14px 0 0;padding:30px 32px 26px;">
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;"><tr>
        <td style="font-size:20px;font-weight:800;color:#F2C230;font-family:Georgia,serif;">stolt<span style="color:#F2ECDD;">.</span>
          <span style="font-family:-apple-system,'Segoe UI',Roboto,sans-serif;font-size:10px;font-weight:600;color:#A19A87;letter-spacing:0.3em;">&nbsp;SAJTVAKTEN</span></td>
        <td align="right" style="font-size:11px;color:#7B7462;">${new Date().toLocaleDateString("sv-SE")}</td>
      </tr></table>
      <div style="font-size:13px;color:#A19A87;margin:24px 0 2px;">${name ? esc(name) + ", här" : "Här"} är rapporten för</div>
      <div style="font-size:19px;font-weight:700;color:#F2ECDD;">${esc(host)}</div>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:18px;"><tr>
        <td style="vertical-align:baseline;font-size:54px;line-height:1;font-weight:800;color:${scoreFarg};font-family:Georgia,serif;">${resultat.score}</td>
        <td style="vertical-align:baseline;padding-left:8px;font-size:13px;color:#A19A87;">av 100</td>
      </tr></table>
      <div style="font-size:14px;font-style:italic;color:#F2ECDD;margin-top:10px;font-family:Georgia,serif;">${esc(resultat.verdict)}</div>
      ${resultat.intro ? `<div style="font-size:14px;color:#D9D2C0;margin-top:14px;line-height:1.65;">${esc(resultat.intro)}</div>` : ""}
    </td></tr>

    <tr><td style="background:#FFFFFF;border-radius:0 0 14px 14px;padding:26px 32px 30px;">
      ${resultat.ai ? `<div style="background:#F7F3E8;border-radius:10px;padding:15px 17px;font-size:13.5px;color:#1A1611;line-height:1.65;">${esc(resultat.ai)}</div><div style="font-size:10.5px;color:#B0AB9F;margin:6px 2px 0;">Sammanfattning framtagen automatiskt ur mätvärdena.</div>` : ""}
      ${synBlock}
      ${diffBlock}
      ${attGora ? sektion("BÖRJA HÄR") + `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">${attGora}</table>` : ""}
      ${sektion("ALLA " + resultat.total + " KONTROLLER")}
      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">${rows}</table>

      <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin-top:28px;"><tr><td align="center" style="background:#0F0D08;border-radius:12px;padding:22px 24px;">
        <div style="font-size:15px;font-weight:700;color:#F2ECDD;margin-bottom:4px;">Vill du att det här blir fixat?</div>
        <div style="font-size:12.5px;color:#A19A87;margin-bottom:14px;">Kostnadsfri genomgång med Joel: 15 till 20 minuter, ärlig bedömning, inga förpliktelser.</div>
        <table role="presentation" cellpadding="0" cellspacing="0" align="center"><tr>
          <td style="background:#F2C230;border-radius:24px;">
            <a href="https://www.stoltmarketing.se/boka" style="display:inline-block;padding:12px 26px;font-size:12px;font-weight:700;letter-spacing:0.1em;color:#191405;text-decoration:none;">BOKA GENOMGÅNG</a>
          </td></tr></table>
        <div style="font-size:11.5px;color:#7B7462;margin-top:12px;">eller ring 076-686 74 06 · svar inom 24 h på vardagar</div>
      </td></tr></table>

      <div style="font-size:11px;color:#B0AB9F;line-height:1.7;margin-top:22px;">
        Hela rapporten ligger även som PDF-bilaga, lätt att spara eller skicka vidare.
        Mätningen läser sajten som en besökare och rapporterar bara det den bevisat.
        ${unsubUrl ? `Du får detta för att Sajtvakten bevakar din sajt. <a href="${unsubUrl}" style="color:#8A857A;">Avsluta bevakningen</a> när du vill.` : ""}
      </div>
    </td></tr>

    <tr><td style="padding:16px 8px;text-align:center;font-size:11px;color:#A9A499;">
      Sajtvakten från Stolt Marketing · Hässleholm · <a href="https://www.stoltmarketing.se/sajtkoll" style="color:#8A857A;">stoltmarketing.se/sajtkoll</a>
    </td></tr>
  </table>
  </td></tr></table></body></html>`;
}

async function sendMail(apiKey, { to, subject, html, replyTo, attachments }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [to], subject, html, ...(replyTo ? { reply_to: replyTo } : {}), ...(attachments ? { attachments } : {}) }),
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
    let pdf = null;
    try {
      pdf = await buildSajtvaktPdf({ resultat, name: sub.name, diff, datum: new Date().toLocaleDateString("sv-SE") });
    } catch {}
    const mail = await sendMail(resendKey, {
      to: sub.email,
      subject: `Sajtvakten: månadsrapport för ${sub.url.replace(/^https?:\/\//, "")} (${resultat.score} av 100)`,
      html: renderEmail({ resultat, name: sub.name, diff, unsubUrl, synlighet }),
      replyTo: JOEL,
      attachments: pdf ? [{ filename: `sajtvakten-${sub.url.replace(/^https?:\/\//, "").replace(/[^a-z0-9.-]/gi, "_")}.pdf`, content: pdf }] : undefined,
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
  let pdf = null;
  try {
    pdf = await buildSajtvaktPdf({ resultat, name, diff: null, datum: new Date().toLocaleDateString("sv-SE") });
  } catch {}
  const mail = await sendMail(resendKey, {
    to: String(email),
    subject: `Rapporten för ${resultat.url.replace(/^https?:\/\//, "")}: ${resultat.score} av 100`,
    html: renderEmail({ resultat, name, diff: null, unsubUrl, synlighet }),
    replyTo: JOEL,
    attachments: pdf ? [{ filename: `sajtvakten-${resultat.url.replace(/^https?:\/\//, "").replace(/[^a-z0-9.-]/gi, "_")}.pdf`, content: pdf }] : undefined,
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
      <p>Sajt: <a href="${esc(resultat.url)}">${esc(resultat.url)}</a><br>Poäng: ${resultat.score} av 100<br>Bevakning: ${bevaka ? "JA, månadsrapport aktiv" : "nej"}${resultat.kalla ? `<br>Källa: ${esc(resultat.kalla)}` : ""}</p>
      <p>${esc(resultat.verdict)}</p>
    </div>`,
    replyTo: String(email),
  });

  return NextResponse.json({ ok: true, mailId: mail.id, bevakar: !!bevaka });
}
