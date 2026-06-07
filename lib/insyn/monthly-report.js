/**
 * Bygger månadsrapport-HTML för alla kunder i CLIENTS.
 * Kör Umami-fetch + AI-analys per kund. Returnerar HTML + metadata.
 * Skickar inte mejl — det gör Joel manuellt tills automation är på.
 */

import { CLIENTS } from "./clients";
import { getReport, getRange } from "../umami";
import { getInsights } from "../ai-insights";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.stoltmarketing.se";

function fmt(n) {
  if (n === null || n === undefined) return "—";
  return new Intl.NumberFormat("sv-SE").format(Math.round(n));
}

function fmtDuration(seconds) {
  if (!seconds || seconds <= 0) return "—";
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  if (min === 0) return `${sec}s`;
  return `${min}m ${sec}s`;
}

function escapeHTML(s) {
  if (s == null) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function lastMonthKey() {
  const now = new Date();
  const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

async function buildClientReport(slug, client, rangeKey) {
  const range = getRange(rangeKey);
  try {
    const report = await getReport(client.websiteId, range);
    const insights = await getInsights({ client, range, report });
    return { slug, client, range, report, insights, ok: true };
  } catch (e) {
    return { slug, client, range, ok: false, error: e.message };
  }
}

function buildEmailHTML({ reports, range }) {
  const cards = reports
    .map((r) => {
      if (!r.ok) {
        return `
          <div style="background:#FEF2F2;border:1px solid #FECACA;border-radius:12px;padding:20px;margin-bottom:20px;">
            <div style="font-size:11px;letter-spacing:1px;text-transform:uppercase;color:#991B1B;font-weight:700;">Fel</div>
            <div style="font-size:18px;font-weight:700;color:#7F1D1D;margin-top:4px;">${escapeHTML(r.client.name)}</div>
            <div style="color:#991B1B;font-size:14px;margin-top:8px;">${escapeHTML(r.error)}</div>
          </div>`;
      }

      const s = r.report.stats;
      const visits = s.visits || 0;
      const bounceRate = visits > 0 ? Math.round((s.bounces / visits) * 100) : 0;
      const avgSession = visits > 0 ? s.totaltime / visits : 0;
      const insynUrl = `${BASE_URL}/insyn/${r.slug}?range=${range.key}`;
      const pdfUrl = `${BASE_URL}/api/insyn/${r.slug}/report?range=${range.key}`;
      const insights = r.insights;

      const kpiCell = (label, value) => `
        <td style="padding:10px 12px;border:1px solid #E5E5E0;background:#FAFAF8;">
          <div style="font-size:10px;letter-spacing:0.6px;text-transform:uppercase;color:#6B7280;font-weight:700;margin-bottom:3px;">${label}</div>
          <div style="font-size:18px;font-weight:700;color:#0C0F1A;">${value}</div>
        </td>`;

      const insightsBlock =
        insights && !insights.error
          ? `
          <div style="background:#0C0F1A;border-radius:12px;padding:20px;margin-top:18px;color:#FFFFFF;">
            <div style="font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#93C5FD;font-weight:700;">AI Analys</div>
            <div style="font-size:14px;color:#E5E7EB;margin-top:8px;line-height:1.6;">${escapeHTML(insights.summary || "")}</div>
            ${
              insights.observations && insights.observations.length > 0
                ? `
              <div style="font-size:10px;letter-spacing:0.6px;text-transform:uppercase;color:#9CA3AF;font-weight:700;margin-top:14px;margin-bottom:6px;">Vad vi ser i datat</div>
              <ul style="margin:0;padding-left:18px;color:#E5E7EB;font-size:13px;line-height:1.6;">
                ${insights.observations.map((o) => `<li>${escapeHTML(o)}</li>`).join("")}
              </ul>`
                : ""
            }
            ${
              insights.recommendations && insights.recommendations.length > 0
                ? `
              <div style="font-size:10px;letter-spacing:0.6px;text-transform:uppercase;color:#9CA3AF;font-weight:700;margin-top:14px;margin-bottom:8px;">3 rekommendationer</div>
              ${insights.recommendations
                .slice(0, 3)
                .map(
                  (rec, i) => `
                <div style="background:rgba(255,255,255,0.06);border-radius:8px;padding:12px;margin-top:8px;">
                  <div style="font-size:12px;font-weight:700;color:#93C5FD;">#${i + 1}</div>
                  <div style="font-size:14px;font-weight:700;color:#FFFFFF;margin-top:3px;">${escapeHTML(rec.title)}</div>
                  <div style="font-size:9px;letter-spacing:0.5px;text-transform:uppercase;color:#9CA3AF;font-weight:700;margin-top:8px;">Varför</div>
                  <div style="font-size:13px;color:#E5E7EB;margin-top:2px;line-height:1.5;">${escapeHTML(rec.why)}</div>
                  <div style="font-size:9px;letter-spacing:0.5px;text-transform:uppercase;color:#9CA3AF;font-weight:700;margin-top:6px;">Hur</div>
                  <div style="font-size:13px;color:#E5E7EB;margin-top:2px;line-height:1.5;">${escapeHTML(rec.how)}</div>
                </div>`
                )
                .join("")}`
                : ""
            }
          </div>`
          : insights?.error
          ? `<div style="color:#9CA3AF;font-size:13px;margin-top:14px;font-style:italic;">AI: ${escapeHTML(insights.error)}</div>`
          : "";

      return `
        <div style="background:#FFFFFF;border:1px solid #E5E5E0;border-radius:14px;padding:24px;margin-bottom:24px;">
          <div>
            <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6B7280;font-weight:700;">Kund</div>
            <div style="font-size:22px;font-weight:700;color:#0C0F1A;line-height:1.2;margin-top:2px;">${escapeHTML(r.client.name)}</div>
            <div style="font-size:13px;color:#6B7280;margin-top:2px;">${escapeHTML(r.client.domain)}</div>
          </div>

          <table style="width:100%;border-collapse:collapse;margin-top:16px;table-layout:fixed;">
            <tr>
              ${kpiCell("Besökare", fmt(s.visitors))}
              ${kpiCell("Sidvisningar", fmt(s.pageviews))}
              ${kpiCell("Besök", fmt(visits))}
              ${kpiCell("Avvisning", `${bounceRate}%`)}
              ${kpiCell("Snitt", fmtDuration(avgSession))}
            </tr>
          </table>

          ${insightsBlock}

          <div style="margin-top:20px;padding-top:16px;border-top:1px solid #E5E5E0;">
            <a href="${insynUrl}" style="display:inline-block;padding:10px 18px;background:#0C0F1A;color:#FFFFFF;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600;margin-right:8px;">Öppna kundvy</a>
            <a href="${pdfUrl}" style="display:inline-block;padding:10px 18px;background:#FFFFFF;color:#0C0F1A;border:1px solid #E5E5E0;text-decoration:none;border-radius:8px;font-size:13px;font-weight:600;">Ladda ner PDF</a>
          </div>
        </div>`;
    })
    .join("");

  return `<!DOCTYPE html>
<html lang="sv"><head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#FAFAF8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#3B3F4A;">
  <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
    <div style="margin-bottom:32px;">
      <div style="font-size:11px;letter-spacing:1.8px;text-transform:uppercase;color:#6B7280;font-weight:700;">Månadsrapport · Stolt Marketing</div>
      <h1 style="font-size:30px;font-weight:800;color:#0C0F1A;margin:4px 0 0 0;line-height:1.2;">${range.label}</h1>
      <div style="font-size:14px;color:#6B7280;margin-top:6px;">AI-genererade insikter och nyckeltal för dina ${reports.length} aktiva kund${reports.length === 1 ? "" : "er"}.</div>
    </div>
    ${cards}
    <div style="margin-top:32px;padding-top:24px;border-top:1px solid #E5E5E0;font-size:11px;color:#9CA3AF;text-align:center;">
      Genererad ${new Date().toLocaleDateString("sv-SE", { year: "numeric", month: "long", day: "numeric", timeZone: "Europe/Stockholm" })} · Data via Umami · Insikter via Claude
    </div>
  </div>
</body></html>`;
}

/**
 * Kör hela flödet: bygg rapport för alla kunder. Returnerar HTML + metadata.
 * Skickar INGET mejl — det gör Joel manuellt tills cron är på.
 */
export async function buildMonthlyReport({ rangeKey } = {}) {
  const targetRange = rangeKey || lastMonthKey();
  const range = getRange(targetRange);

  const reports = [];
  for (const [slug, client] of Object.entries(CLIENTS)) {
    const r = await buildClientReport(slug, client, targetRange);
    reports.push(r);
  }

  const html = buildEmailHTML({ reports, range });
  const subject = `Månadsrapport ${range.label} — ${reports.length} kund${reports.length === 1 ? "" : "er"}`;

  return {
    ok: true,
    subject,
    range,
    html,
    reports: reports.map((r) => ({
      slug: r.slug,
      name: r.client.name,
      domain: r.client.domain,
      ok: r.ok,
      error: r.error,
    })),
  };
}
