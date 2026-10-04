"use client";

import { useEffect, useId, useRef, useState } from "react";
import { trackConversion } from "@/lib/track";
import { klickId } from "@/lib/klickid";

export default function InquiryForm({ service = "Kontakt", initialMessage = "", submitLabel = "Skicka meddelande", eventName = "lead-kontaktformular" }) {
  const id = useId();
  const loadedAt = useRef(Date.now());
  const resultRef = useRef(null);
  const [data, setData] = useState({ name: "", email: "", message: initialMessage, hp_field: "" });
  const [sending, setSending] = useState(false);
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");
  useEffect(() => { setData((prev) => ({ ...prev, message: prev.message || initialMessage })); }, [initialMessage]);
  useEffect(() => { if (reference) resultRef.current?.focus(); }, [reference]);
  const change = (event) => setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  async function submit(event) {
    event.preventDefault();
    if (sending) return;
    if (data.hp_field) { setReference("mottaget"); return; }
    setError(""); setSending(true);
    try {
      // Allow browser autofill without tripping the API's minimum form time.
      const remaining = 3000 - (Date.now() - loadedAt.current);
      if (remaining > 0) await new Promise((resolve) => setTimeout(resolve, remaining));
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, signal: AbortSignal.timeout(20000), body: JSON.stringify({ ...data, service, klickId: klickId(), _elapsedMs: Date.now() - loadedAt.current, _subject: `${service}: ${data.name}`.slice(0, 200) }) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.reference) throw new Error(response.status === 429 ? "Du har gjort flera försök. Vänta en minut och försök igen." : "Meddelandet kunde inte bekräftas. Dina uppgifter finns kvar så att du kan försöka igen.");
      setReference(result.reference);
      trackConversion(eventName, "lead");
    } catch (err) {
      setError(err.name === "TimeoutError" ? "Det tog för lång tid att få svar. Försök igen eller mejla Joel direkt." : err.name === "TypeError" ? "Det gick inte att nå servern. Kontrollera din anslutning och försök igen." : err.message);
    } finally { setSending(false); }
  }
  if (reference) return <div ref={resultRef} tabIndex={-1} role="status" className="py-8"><h3 className="text-[28px] mb-3">Ditt meddelande är mottaget</h3><p>Jag återkommer personligen, normalt samma arbetsdag. Skickar du på kvällen eller helgen får du svar nästa arbetsdag.</p><p className="text-[14px] text-muted mt-4">Du behöver inte skicka igen. Du kan också nå mig på <a href="mailto:joel@stoltmarketing.se" className="underline">joel@stoltmarketing.se</a>.</p></div>;
  return <form onSubmit={submit} aria-busy={sending} className="space-y-5">
    <p className="text-[13px] text-muted">Alla tre fält behövs för att jag ska kunna svara.</p>
    <div className="grid sm:grid-cols-2 gap-5">
      <label className="form-field" htmlFor={`${id}-name`}>Namn<input id={`${id}-name`} name="name" autoComplete="name" maxLength={200} required value={data.name} onChange={change} /></label>
      <label className="form-field" htmlFor={`${id}-email`}>E-post<input id={`${id}-email`} name="email" type="email" autoComplete="email" inputMode="email" maxLength={254} required value={data.email} onChange={change} /></label>
    </div>
    <label className="form-field" htmlFor={`${id}-message`}>Vad vill du ha hjälp med?<textarea id={`${id}-message`} name="message" rows={5} maxLength={5000} required value={data.message} onChange={change} placeholder="Berätta kort. Lägg gärna till företagets namn eller webbadress." /></label>
    <input name="hp_field" value={data.hp_field} onChange={change} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute left-[-9999px] w-px h-px" />
    {error && <div role="alert" className="border border-red-400/50 bg-red-950/20 rounded-lg p-4 text-[15px]"><p>{error}</p><a href="mailto:joel@stoltmarketing.se" className="underline mt-2 inline-block">Mejla joel@stoltmarketing.se</a></div>}
    <p className="text-[13px] text-muted">Jag använder uppgifterna för att hantera din förfrågan. <a href="/integritet" className="underline">Så behandlas personuppgifterna</a>.</p>
    <button type="submit" disabled={sending} className="premium-btn w-full sm:w-auto justify-center disabled:opacity-60">{sending ? "Skickar..." : submitLabel}</button>
  </form>;
}
