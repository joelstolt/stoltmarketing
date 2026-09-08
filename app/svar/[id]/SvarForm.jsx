"use client";

import { useState } from "react";

export default function SvarForm({ id, status, amne, text, till, skickatAt }) {
  const [amneV, setAmne] = useState(amne || "");
  const [textV, setText] = useState(text || "");
  const [lage, setLage] = useState(status); // utkast | skickat | avfardat
  const [jobbar, setJobbar] = useState(false);
  const [fel, setFel] = useState("");
  const [nar, setNar] = useState(skickatAt || "");

  async function skicka(action) {
    if (action === "skicka" && !confirm(`Skicka svaret till ${till}?`)) return;
    setJobbar(true);
    setFel("");
    try {
      const res = await fetch("/api/svar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action, amne: amneV, text: textV }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(j.error || `Fel ${res.status}`);
      setLage(action === "skicka" ? "skickat" : "avfardat");
      setNar(j.skickat_at || new Date().toISOString());
    } catch (e) {
      setFel(e.message || "Något gick fel");
    } finally {
      setJobbar(false);
    }
  }

  if (lage === "skickat") {
    return (
      <section className="svar-form">
        <p className="svar-status">Skickat till {till} {nar ? new Date(nar).toLocaleString("sv-SE", { timeZone: "Europe/Stockholm" }) : ""}. En kopia ligger i din inkorg.</p>
        <label>Ämne</label>
        <input value={amneV} readOnly />
        <label>Skickad text</label>
        <textarea value={textV} readOnly />
      </section>
    );
  }
  if (lage === "avfardat") {
    return (
      <section className="svar-form">
        <p className="svar-status">Avfärdat, inget skickat.</p>
      </section>
    );
  }

  return (
    <section className="svar-form">
      <label htmlFor="amne">Ämne</label>
      <input id="amne" value={amneV} onChange={(e) => setAmne(e.target.value)} maxLength={200} />
      <label htmlFor="text">Svar till {till}</label>
      <textarea id="text" value={textV} onChange={(e) => setText(e.target.value)} maxLength={8000} />
      <div className="svar-knappar">
        <button type="button" className="svar-primar" disabled={jobbar || !textV.trim() || !amneV.trim()} onClick={() => skicka("skicka")}>
          {jobbar ? "Skickar..." : "Skicka svaret"}
        </button>
        <button type="button" className="svar-sekundar" disabled={jobbar} onClick={() => skicka("avfarda")}>
          Avfärda, skicka inget
        </button>
        {fel ? <span className="svar-fel">{fel}</span> : null}
      </div>
    </section>
  );
}
