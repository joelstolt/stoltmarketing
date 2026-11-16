import { randomUUID } from "node:crypto";

// Leads från sajten till Stolt Marketings CRM (beslut 41 i CRM:ets DECISIONS.md).
// Förfrågan sparas först i D1 (db/crm-outbox.sql) och skickas sedan, direkt och av
// minutjobbet i worker-with-headers.mjs, så att ett avbrott i CRM:et aldrig tappar ett lead.
// Radens id är CRM:ets external_id: ett omförsök efter timeout svarar med samma lead.
// Fel som inte går över (400, 401, 403) och leads som inte kommit fram på ett dygn mejlas
// till Joel. Kvota och mejlet till Joel från formuläret påverkas inte av något här.

export const CRM_LEADS_URL = "https://crm.stoltmarketing.se/api/v1/leads";
const ALERT_TO = "joel@stoltmarketing.se";
const ALERT_FROM = "Stolt Marketing <kontakt@stoltmarketing.se>";
const GIVE_UP_MS = 24 * 3600_000;
const PERMANENT = new Set([400, 401, 403, 404, 413, 422]);

const iso = (ms) => new Date(ms).toISOString();

/** Väntetid före försök nummer n+1: 1, 2, 4, 8 ... minuter, högst en timme. */
export function backoffMs(attempts) {
  return Math.min(60, 2 ** Math.max(0, attempts - 1)) * 60_000;
}

/** Delar "Saga Maria Svensson" i förnamn och resten. */
export function splitName(name) {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return {};
  return { first_name: parts[0].slice(0, 100), ...(parts.length > 1 ? { last_name: parts.slice(1).join(" ").slice(0, 100) } : {}) };
}

/** Kontaktformuläret (app/api/contact): ett lead som ska besvaras, med uppgift i CRM:et. */
export function contactLead(data, reference) {
  const name = String(data.name || "").trim();
  const company = String(data.company || "").trim();
  const message = [
    data.service ? `Tjänst: ${String(data.service).trim()}` : "",
    String(data.message || "").trim(),
    data.chatHistory ? `Chatthistorik:\n${String(data.chatHistory).trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n\n")
    .slice(0, 5000);
  return {
    // Utan företag döps leadet efter personen, inte efter e-postdomänen (två gmail-leads blir annars ett företag).
    company_name: (company || name || String(data.email)).slice(0, 200),
    ...splitName(name),
    email: String(data.email).trim().toLowerCase(),
    ...(message ? { message } : {}),
    source: `stoltmarketing.se: ${String(data._subject || "kontaktformuläret").slice(0, 90)}`,
    page_url: "https://www.stoltmarketing.se",
    follow_up_task: true,
    external_id: `kontakt:${reference}`.slice(0, 100),
  };
}

/** Sajtkollens beställda rapport (app/api/sajtkoll/rapport): kontakt med källa, ingen uppgift. */
export function sajtkollLead({ resultId, email, name, bevaka, resultat }) {
  const host = String(resultat.url).replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/.*$/, "");
  return {
    company_name: host.slice(0, 200),
    ...splitName(name),
    email: String(email).trim().toLowerCase(),
    website: String(resultat.url).slice(0, 300),
    message: `Beställde sajtkollens rapport för ${resultat.url}: ${resultat.score} av 100.${bevaka ? " Vill ha månadsbevakning." : ""}`,
    source: "Sajtkoll",
    page_url: "https://www.stoltmarketing.se/sajtkoll",
    external_id: `sajtkoll:${resultId}`.slice(0, 100),
  };
}

/** Sparar ett lead i kön. Samma id igen gör ingenting. */
export async function saveCrmLead(env, lead, now = Date.now()) {
  if (!env?.DB) throw new Error("CRM_OUTBOX_UNAVAILABLE");
  await env.DB.prepare(
    "INSERT OR IGNORE INTO crm_outbox(id,payload,next_attempt_at,created_at,updated_at) VALUES(?1,?2,?3,?3,?3)",
  )
    .bind(lead.external_id, JSON.stringify(lead), iso(now))
    .run();
  return lead.external_id;
}

async function alert(env, transport, row, reason) {
  if (!env.RESEND_API_KEY) return false;
  const lead = JSON.parse(row.payload);
  const lines = [
    `Ett lead från sajten kom inte fram till CRM:et: ${reason}`,
    "",
    `Namn: ${[lead.first_name, lead.last_name].filter(Boolean).join(" ") || "-"}`,
    `E-post: ${lead.email || "-"}`,
    `Företag: ${lead.company_name || "-"}`,
    `Källa: ${lead.source || "-"}`,
    `Inskickat: ${row.created_at}`,
    "",
    lead.message ? `Meddelande:\n${lead.message}` : "",
    "",
    "Förfrågan finns kvar i sajtens kö (D1 sajtvakten, tabellen crm_outbox) och i ditt formulärmejl. Lägg in leadet för hand i CRM:et om det behövs.",
  ];
  const res = await transport("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `stolt-crm-alert/${row.id}`,
    },
    body: JSON.stringify({ from: ALERT_FROM, to: [ALERT_TO], subject: `Lead kom inte fram till CRM:et: ${lead.email || row.id}`, text: lines.join("\n") }),
    signal: AbortSignal.timeout(12000),
  });
  return res.ok;
}

/** Skickar det som väntar (högst 5 per körning). Kör av minutjobbet och direkt efter att något sparats. */
export async function deliverCrmLeads(env, transport = fetch, now = Date.now()) {
  if (!env?.DB) return { skipped: "DB" };
  await env.DB.prepare("DELETE FROM crm_outbox WHERE state='sent' AND updated_at<?1").bind(iso(now - 30 * 86400_000)).run();
  const result = { sent: 0, retry: 0, failed: 0, alerted: 0 };

  // Misslyckade och för gamla som Joel inte fått veta om än.
  const untold = await env.DB.prepare(
    "SELECT * FROM crm_outbox WHERE alerted_at IS NULL AND (state='failed' OR (state='pending' AND created_at<?1)) LIMIT 5",
  )
    .bind(iso(now - GIVE_UP_MS))
    .all();
  for (const row of untold.results || []) {
    const reason = row.state === "failed" ? `CRM:et avvisade det (${row.last_error}).` : `inget lyckat försök på ett dygn (${row.last_error || "ingen nyckel satt"}).`;
    try {
      if (await alert(env, transport, row, reason)) {
        await env.DB.prepare("UPDATE crm_outbox SET alerted_at=?1, state='failed', updated_at=?1 WHERE id=?2").bind(iso(now), row.id).run();
        result.alerted += 1;
      }
    } catch {
      // Larmet tas om nästa minut.
    }
  }

  if (!env.STOLT_CRM_API_KEY) return { ...result, skipped: "STOLT_CRM_API_KEY" };
  const due = await env.DB.prepare(
    "SELECT id FROM crm_outbox WHERE state='pending' AND next_attempt_at<=?1 AND (lease_until IS NULL OR lease_until<?1) ORDER BY created_at LIMIT 5",
  )
    .bind(iso(now))
    .all();
  for (const item of due.results || []) {
    const lease = randomUUID();
    const row = await env.DB.prepare(
      "UPDATE crm_outbox SET lease=?1, lease_until=?2, updated_at=?3 WHERE id=?4 AND state='pending' AND (lease_until IS NULL OR lease_until<?3) RETURNING *",
    )
      .bind(lease, iso(now + 90_000), iso(now), item.id)
      .first();
    if (!row) continue;
    let status = 0;
    let body = {};
    try {
      const res = await transport(CRM_LEADS_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${env.STOLT_CRM_API_KEY}`, "Content-Type": "application/json" },
        body: row.payload,
        signal: AbortSignal.timeout(12000),
        redirect: "manual",
      });
      status = res.status;
      body = await res.json().catch(() => ({}));
    } catch {
      status = 0;
    }
    const attempts = row.attempts + 1;
    if ((status === 200 || status === 201) && typeof body.id === "string") {
      await env.DB.prepare("UPDATE crm_outbox SET state='sent', crm_id=?1, attempts=?2, last_error=NULL, lease=NULL, lease_until=NULL, updated_at=?3 WHERE id=?4 AND lease=?5")
        .bind(body.id, attempts, iso(now), row.id, lease)
        .run();
      result.sent += 1;
    } else if (PERMANENT.has(status)) {
      const error = `HTTP ${status}${body.error ? `: ${body.error}` : ""}${Array.isArray(body.details) ? ` (${body.details.join("; ")})` : ""}`.slice(0, 500);
      await env.DB.prepare("UPDATE crm_outbox SET state='failed', attempts=?1, last_error=?2, lease=NULL, lease_until=NULL, updated_at=?3 WHERE id=?4 AND lease=?5")
        .bind(attempts, error, iso(now), row.id, lease)
        .run();
      result.failed += 1;
    } else {
      await env.DB.prepare("UPDATE crm_outbox SET attempts=?1, next_attempt_at=?2, last_error=?3, lease=NULL, lease_until=NULL, updated_at=?4 WHERE id=?5 AND lease=?6")
        .bind(attempts, iso(now + backoffMs(attempts)), status ? `HTTP ${status}` : "nätverksfel eller timeout", iso(now), row.id, lease)
        .run();
      result.retry += 1;
    }
  }
  return result;
}
