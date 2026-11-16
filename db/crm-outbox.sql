-- Kö för leads till Stolt Marketings CRM (crm.stoltmarketing.se, POST /api/v1/leads).
-- id är CRM:ets external_id, så att ett omförsök efter timeout aldrig blir två leads.
-- state: pending (ska skickas), sent (CRM:et tog emot), failed (ger inte upp tyst: Joel har fått ett mejl).
CREATE TABLE IF NOT EXISTS crm_outbox(
 id TEXT PRIMARY KEY,
 payload TEXT NOT NULL,
 state TEXT NOT NULL DEFAULT 'pending',
 attempts INTEGER NOT NULL DEFAULT 0,
 next_attempt_at TEXT NOT NULL,
 lease TEXT,
 lease_until TEXT,
 crm_id TEXT,
 last_error TEXT,
 alerted_at TEXT,
 created_at TEXT NOT NULL,
 updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS crm_outbox_due ON crm_outbox(state,next_attempt_at);
