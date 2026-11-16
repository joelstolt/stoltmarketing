// Prov för lib/crm-outbox.js mot en SQLite i minnet och ett falskt CRM. Inget lämnar datorn.
// Kör: node scripts/test-crm-outbox.mjs
import { DatabaseSync } from "node:sqlite";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { backoffMs, contactLead, CRM_LEADS_URL, deliverCrmLeads, sajtkollLead, saveCrmLead } from "../lib/crm-outbox.js";

const sql = new DatabaseSync(":memory:");
sql.exec(readFileSync("db/crm-outbox.sql", "utf8"));
class Statement {
  constructor(query, args = []) { this.query = query; this.args = args; }
  bind(...args) { return new Statement(this.query, args); }
  async first() { return sql.prepare(this.query).get(...this.args) || null; }
  async all() { return { results: sql.prepare(this.query).all(...this.args) }; }
  async run() { return { meta: { changes: Number(sql.prepare(this.query).run(...this.args).changes) } }; }
}
const DB = { prepare: (q) => new Statement(q) };
const row = (id) => sql.prepare("SELECT * FROM crm_outbox WHERE id=?").get(id);
const checks = [];
const T0 = Date.parse("2026-11-16T12:00:00Z");

// Mappningen från formulären.
const kontakt = contactLead({ name: "Saga Maria Svensson", email: " Saga@Bageriet.SE ", service: "Ny hemsida", message: "Före jul, tack.", _subject: "Boka samtal" }, "ref-1");
assert.deepEqual(kontakt, {
  company_name: "Saga Maria Svensson", first_name: "Saga", last_name: "Maria Svensson", email: "saga@bageriet.se",
  message: "Tjänst: Ny hemsida\n\nFöre jul, tack.", source: "stoltmarketing.se: Boka samtal", page_url: "https://www.stoltmarketing.se",
  follow_up_task: true, external_id: "kontakt:ref-1",
});
assert.equal(contactLead({ name: "Ola", email: "ola@x.se", company: "Olas Måleri AB", message: "Hej" }, "r").company_name, "Olas Måleri AB");
checks.push("Kontaktformuläret blir lead med uppgift, företaget efter fältet eller personen, aldrig e-postdomänen");
const koll = sajtkollLead({ resultId: "abc123", email: "Kalle@Gmail.com", name: "", bevaka: true, resultat: { url: "https://www.kalles-bygg.se/om-oss", score: 41 } });
assert.equal(koll.company_name, "kalles-bygg.se");
assert.equal(koll.follow_up_task, undefined);
assert.equal(koll.first_name, undefined);
assert.equal(koll.message, "Beställde sajtkollens rapport för https://www.kalles-bygg.se/om-oss: 41 av 100. Vill ha månadsbevakning.");
assert.equal(koll.external_id, "sajtkoll:abc123");
checks.push("Sajtkollen blir kontakt med källan Sajtkoll, företaget efter sajten, ingen uppgift");

// Sparas en gång.
await saveCrmLead({ DB }, kontakt, T0);
await saveCrmLead({ DB }, kontakt, T0);
assert.equal(sql.prepare("SELECT count(*) n FROM crm_outbox").get().n, 1);
checks.push("Samma id sparas en gång");

// Utan nyckel: inget skickas, raden väntar.
let calls = [];
const fake = (answers) => async (url, init) => { calls.push({ url, init }); const a = answers.shift(); if (a instanceof Error) throw a; return Response.json(a.body, { status: a.status }); };
assert.equal((await deliverCrmLeads({ DB }, fake([]), T0)).skipped, "STOLT_CRM_API_KEY");
assert.equal(calls.length, 0);
assert.equal(row("kontakt:ref-1").state, "pending");
checks.push("Utan nyckel väntar leadet i kön");

// CRM:et svarar 500, sedan nätverksfel, sedan 201.
const env = { DB, STOLT_CRM_API_KEY: "test-nyckel", RESEND_API_KEY: "test-resend" };
await deliverCrmLeads(env, fake([{ status: 500, body: { error: "Internt fel." } }]), T0);
assert.equal(row("kontakt:ref-1").attempts, 1);
assert.equal(row("kontakt:ref-1").next_attempt_at, new Date(T0 + 60_000).toISOString());
assert.equal(calls[0].url, CRM_LEADS_URL);
assert.equal(calls[0].init.headers.Authorization, "Bearer test-nyckel");
assert.deepEqual(JSON.parse(calls[0].init.body), kontakt);
calls = [];
await deliverCrmLeads(env, fake([]), T0 + 30_000);
assert.equal(calls.length, 0);
await deliverCrmLeads(env, fake([new Error("timeout")]), T0 + 61_000);
assert.equal(row("kontakt:ref-1").attempts, 2);
assert.equal(row("kontakt:ref-1").last_error, "nätverksfel eller timeout");
assert.equal(backoffMs(2), 120_000);
assert.equal(backoffMs(20), 3_600_000);
await deliverCrmLeads(env, fake([{ status: 201, body: { id: "sub-1", company_id: "c" } }]), T0 + 61_000 + 121_000);
assert.equal(row("kontakt:ref-1").state, "sent");
assert.equal(row("kontakt:ref-1").crm_id, "sub-1");
calls = [];
await deliverCrmLeads(env, fake([]), T0 + 3_600_000);
assert.equal(calls.length, 0);
checks.push("500 och timeout tas om med växande paus, 201 markerar skickat, skickat skickas aldrig igen");

// 400: ger upp och mejlar Joel en gång.
const fel = { ...kontakt, external_id: "kontakt:ref-2" };
await saveCrmLead(env, fel, T0);
calls = [];
await deliverCrmLeads(env, fake([{ status: 400, body: { error: "Ogiltig kropp.", details: ["email: ogiltig"] } }]), T0);
assert.equal(row("kontakt:ref-2").state, "failed");
assert.equal(row("kontakt:ref-2").last_error, "HTTP 400: Ogiltig kropp. (email: ogiltig)");
calls = [];
await deliverCrmLeads(env, fake([{ status: 200, body: { id: "mejl-1" } }]), T0 + 60_000);
assert.equal(calls.length, 1);
assert.equal(calls[0].url, "https://api.resend.com/emails");
assert.equal(calls[0].init.headers["Idempotency-Key"], "stolt-crm-alert/kontakt:ref-2");
const larm = JSON.parse(calls[0].init.body);
assert.deepEqual(larm.to, ["joel@stoltmarketing.se"]);
assert.match(larm.text, /CRM:et avvisade det \(HTTP 400/);
assert.match(larm.text, /Före jul, tack\./);
assert.ok(row("kontakt:ref-2").alerted_at);
calls = [];
await deliverCrmLeads(env, fake([]), T0 + 120_000);
assert.equal(calls.length, 0);
checks.push("400 ger upp direkt, Joel får ett mejl med leadet en gång");

// Ett dygn utan lyckat försök: mejl och slut på försök.
const gammal = { ...koll, external_id: "sajtkoll:old" };
await saveCrmLead(env, gammal, T0);
calls = [];
await deliverCrmLeads({ DB, RESEND_API_KEY: "test-resend" }, fake([{ status: 200, body: { id: "mejl-2" } }]), T0 + 24 * 3600_000 + 1);
assert.equal(calls.length, 1);
assert.match(JSON.parse(calls[0].init.body).text, /inget lyckat försök på ett dygn \(ingen nyckel satt\)/);
assert.equal(row("sajtkoll:old").state, "failed");
checks.push("Ett dygn utan lyckat försök mejlas till Joel och tas inte om");

// Larmet misslyckas: tas om nästa minut.
const tredje = { ...kontakt, external_id: "kontakt:ref-3" };
await saveCrmLead(env, tredje, T0);
sql.prepare("UPDATE crm_outbox SET state='failed', last_error='HTTP 401' WHERE id='kontakt:ref-3'").run();
await deliverCrmLeads(env, fake([{ status: 500, body: {} }]), T0);
assert.equal(row("kontakt:ref-3").alerted_at, null);
calls = [];
await deliverCrmLeads(env, fake([{ status: 200, body: { id: "mejl-3" } }]), T0 + 60_000);
assert.ok(row("kontakt:ref-3").alerted_at);
checks.push("Ett larm som Resend inte tar emot försöks igen");

sql.close();
console.log(`${checks.length} kontroller av CRM-kön gick igenom:\n- ${checks.join("\n- ")}`);
