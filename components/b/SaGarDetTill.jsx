"use client";

import { useEffect, useRef } from "react";

/*
 * Mekanismen bakom rutan för förfrågningar: de 30 gratis dagarna, som en
 * riktig sekvens med dagnummer. Solen vandrar över de tre stegen medan sektionen scrollas
 * (CSS animation-timeline där det finns, annars ett litet scroll-script
 * för Safari). Det enda numrerade på startsidan är det här, för det är
 * det enda som faktiskt är en ordning.
 */

const PAPER = "#F2ECDD";
const GUL = "#F2C230";
const LINE = "rgba(242,236,221,0.14)";
const DIM = "rgba(242,236,221,0.72)";

const steg = [
  {
    dag: "Dag 1",
    titel: "Jag lägger in rutan.",
    text: "På varje sida av din hemsida. Jag ställer in din mobil och era öppettider, och du provar själv att skriva, så du ser hur det ser ut för kunden.",
  },
  {
    dag: "Dag 1 till 30",
    titel: "Förfrågningarna kommer till dig.",
    text: "Ett SMS när något kommer in och ett förslag på svar att skicka. Månaden kostar ingenting.",
  },
  {
    dag: "Dag 30",
    titel: "Du bestämmer.",
    text: "Vi tittar tillsammans på vad som kommit in. Vill du fortsätta är det 495 kr i månaden. Vill du inte tar jag bort rutan, och det har inte kostat något.",
  },
];

export default function SaGarDetTill() {
  const faltRef = useRef(null);
  const solRef = useRef(null);

  useEffect(() => {
    const falt = faltRef.current;
    const sol = solRef.current;
    if (!falt || !sol) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof CSS !== "undefined" && CSS.supports && CSS.supports("animation-timeline: view()")) return;

    let raf = 0;
    const uppdatera = () => {
      raf = 0;
      const r = falt.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      sol.style.left = `calc(${4 + 92 * p}% - ${(36 * p).toFixed(1)}px)`;
      sol.style.transform = `translateY(${(16 - 24 * Math.sin(Math.PI * p)).toFixed(1)}px)`;
      sol.style.opacity = "1";
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(uppdatera);
    };
    uppdatera();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="sa-gar-det-till" style={{ maxWidth: 1120, margin: "0 auto", padding: "8vh 24px 10vh" }}>
      <div className="sec-rule" style={{ marginBottom: 34 }}>
        <h2 className="sec-label" style={{ margin: 0, letterSpacing: "0.22em" }}>Så kommer du igång</h2>
        <span className="sec-eng" aria-hidden="true">30 dagar</span>
      </div>
      <p className="font-heading" style={{ fontWeight: 400, fontVariationSettings: '"opsz" 120', fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: PAPER, margin: "0 0 12px", maxWidth: "18ch" }}>
        En månad där risken är <em style={{ fontStyle: "italic", color: GUL }}>min</em>.
      </p>

      <div ref={faltRef} className="process-falt b-steg" style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px 40px", borderTop: `1px solid ${LINE}`, paddingTop: 34 }}>
        <div ref={solRef} aria-hidden="true" className="process-sol" />
        <ol style={{ display: "contents", margin: 0, padding: 0, listStyle: "none" }}>
          {steg.map((s) => (
            <li key={s.dag} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span className="font-heading" style={{ fontStyle: "italic", fontWeight: 360, fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 1, color: GUL, fontVariationSettings: '"opsz" 144' }}>{s.dag}</span>
              <h3 className="font-heading" style={{ margin: 0, fontWeight: 540, fontSize: 21, lineHeight: 1.3, color: PAPER }}>{s.titel}</h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: DIM, maxWidth: "36ch" }}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <p style={{ margin: "34px 0 0", fontFamily: "var(--font-ui)", fontSize: 12.5, letterSpacing: "0.06em", color: DIM }}>
        12 månader, sedan månadsvis. Du äger sajten, innehållet och domänen från dag ett.
      </p>
    </section>
  );
}
