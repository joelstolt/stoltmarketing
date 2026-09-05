"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/*
 * Kundmotorn: tre tal ur Umami över kundsajterna, senaste 30 dagarna,
 * och de tre starkaste casen med egna tal. Talen ligger i SSR-HTML
 * (ögonblicksbilden), byts mot live-tal från /api/kundmotor efter
 * laddning och räknas upp en gång när sektionen kommer i bild.
 */

const PAPER = "#F2ECDD";
const GUL = "#F2C230";
const BG2 = "#161309";
const LINE = "rgba(242,236,221,0.14)";
const DIM = "rgba(242,236,221,0.7)";

const fmt = (n) => new Intl.NumberFormat("sv-SE").format(Math.round(n));

function Tal({ value, aktiv }) {
  const [visat, setVisat] = useState(value);
  const startat = useRef(false);

  useEffect(() => {
    if (!aktiv || startat.current) return;
    startat.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisat(value);
      return;
    }
    const t0 = performance.now();
    const dur = 1400;
    let raf = 0;
    const steg = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVisat(value * e);
      if (p < 1) raf = requestAnimationFrame(steg);
    };
    raf = requestAnimationFrame(steg);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aktiv]);

  // Nytt live-tal efter att uppräkningen redan kört: visa direkt.
  useEffect(() => {
    if (startat.current) setVisat(value);
  }, [value]);

  return <span>{fmt(visat)}</span>;
}

export default function Kundmotor({ data }) {
  const ref = useRef(null);
  const [aktiv, setAktiv] = useState(false);
  const [tid, setTid] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setAktiv(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setAktiv(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Klockslaget renderas först på klienten (server och besökare har olika tidszon).
  useEffect(() => {
    try {
      const d = new Date(data.updatedAt);
      setTid(
        new Intl.DateTimeFormat("sv-SE", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Stockholm" }).format(d)
      );
    } catch {
      setTid("");
    }
  }, [data.updatedAt]);

  const tal = [
    { v: data.visitors, l: "besökare" },
    { v: data.pageviews, l: "sidvisningar" },
    { v: data.leads, l: "förfrågningar, samtal och mejlklick" },
  ];

  return (
    <section ref={ref} id="kundmotor" style={{ maxWidth: 1120, margin: "0 auto", padding: "6vh 24px 10vh" }}>
      <div className="sec-rule" style={{ marginBottom: 34 }}>
        <h2 className="sec-label" style={{ margin: 0, letterSpacing: "0.22em" }}>Mätt, inte påstått</h2>
        <span className="sec-eng" aria-hidden="true">kundsajterna just nu</span>
      </div>

      <p className="font-heading" style={{ fontWeight: 400, fontVariationSettings: '"opsz" 120', fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: PAPER, margin: "0 0 34px", maxWidth: "20ch" }}>
        Så här går det för sajterna jag <em style={{ fontStyle: "italic", color: GUL }}>byggt</em>.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}>
        {tal.map((t) => (
          <div key={t.l} style={{ borderTop: `2px solid ${GUL}`, paddingTop: 18 }}>
            <div className="font-heading" style={{ fontWeight: 340, fontVariationSettings: '"opsz" 144', fontSize: "clamp(50px, 6.6vw, 88px)", lineHeight: 1, color: PAPER, fontVariantNumeric: "tabular-nums" }}>
              <Tal value={t.v} aktiv={aktiv} />
            </div>
            <div style={{ marginTop: 10, fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: DIM, lineHeight: 1.5 }}>{t.l}</div>
          </div>
        ))}
      </div>

      <p style={{ margin: "22px 0 0", fontFamily: "var(--font-ui)", fontSize: 12.5, letterSpacing: "0.04em", color: DIM }}>
        Senaste {data.dagar} dagarna · {data.sajter} sajter i drift
        {tid ? ` · uppdaterat ${tid}` : ""}
      </p>

      <div style={{ marginTop: 34, borderTop: `1px solid ${LINE}` }}>
        {data.rows.map((r) => {
          const inner = (
            <>
              <span className="b-km-namn">
                <span className="font-heading" style={{ fontWeight: 520, fontVariationSettings: '"opsz" 100', fontSize: "clamp(19px, 2.2vw, 24px)", color: PAPER }}>{r.name}</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, letterSpacing: "0.16em", textTransform: "uppercase", color: DIM, marginLeft: 12 }}>{r.ort}</span>
              </span>
              <span className="b-km-tal" style={{ fontFamily: "var(--font-ui)", fontSize: 14, fontWeight: 600, color: GUL, fontVariantNumeric: "tabular-nums" }}>
                {r.offert} {r.offert === 1 ? "offertförfrågan" : "offertförfrågningar"}
                {r.samtal > 0 ? <span style={{ color: DIM, fontWeight: 500 }}> · {r.samtal} samtal</span> : null}
              </span>
              {r.href ? <ArrowUpRight size={18} style={{ color: GUL, flexShrink: 0 }} aria-hidden="true" /> : <span />}
            </>
          );
          const style = { display: "grid", gridTemplateColumns: "1fr auto 18px", alignItems: "baseline", gap: 18, padding: "18px 4px", borderBottom: `1px solid ${LINE}`, textDecoration: "none", color: "inherit" };
          return r.href ? (
            <a key={r.slug} href={r.href} className="b-km-rad" style={style}>{inner}</a>
          ) : (
            <div key={r.slug} className="b-km-rad" style={style}>{inner}</div>
          );
        })}
      </div>
      <style>{`
        .b-km-rad:hover .b-km-namn > span:first-child { color: ${GUL}; }
        @media (max-width: 640px) {
          .b-km-rad { grid-template-columns: 1fr 18px !important; }
          .b-km-tal { grid-column: 1 / 2; }
          .b-km-namn > span:last-child { display: block; margin-left: 0 !important; margin-top: 4px; }
        }
      `}</style>

      <p style={{ margin: "18px 0 0", fontSize: 14, lineHeight: 1.65, color: DIM, maxWidth: "62ch" }}>
        Samma mätning som kunderna får i sin månadsrapport, hämtad varje timme. Inga kakor, ingen Google Analytics. Formulär, bokningar och klick på ring och mejla räknas. Nyhetsbrev räknas inte.
      </p>
    </section>
  );
}
