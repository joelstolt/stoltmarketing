CREATE TABLE IF NOT EXISTS kvota_form_outbox(
 id TEXT PRIMARY KEY,request_hash TEXT NOT NULL,payload TEXT NOT NULL,mail_payload TEXT NOT NULL,
 state TEXT NOT NULL DEFAULT 'pending',lead_id TEXT,
 mail_state TEXT NOT NULL DEFAULT 'pending',mail_provider_id TEXT,
 mail_attempts INTEGER NOT NULL DEFAULT 0,mail_first_attempt_at TEXT,
 lease TEXT,lease_until TEXT,last_error TEXT,created_at TEXT NOT NULL,updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS kvota_form_hash ON kvota_form_outbox(request_hash,created_at);
CREATE INDEX IF NOT EXISTS kvota_form_due ON kvota_form_outbox(state,mail_state);
