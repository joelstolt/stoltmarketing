"use client";

import { useState } from "react";

/*
  Före/efter-reglaget för kundcase: dra handtaget från WordPress-läget till
  Stolt-läget och se de uppmätta siffrorna ticka mellan verkliga värden.
  Tar exakt samma rader som mätvärdestabellen ({label, before, after, delta})
  så inga siffror kan glida isär från faktan. Range-input i botten = full
  tangentbords- och skärmläsartillgänglighet gratis.
*/

function tolka(s) {
  const m = String(s).match(/-?[\d\s]+(?:,\d+)?/);
  if (!m) return null;
  const num = parseFloat(m[0].replace(/\s/g, "").replace(",", "."));
  const efter = String(s).slice(m.index + m[0].length).trim();
  const dec = (m[0].match(/,(\d+)/) || [, ""])[1].length;
  return { num, unit: efter, dec };
}

function formatera(v, dec) {
  return v.toLocaleString("sv-SE", {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec,
  });
}

export default function ForeEfter({ rader, fran = "WordPress då", till = "Med Stolt" }) {
  const [p, setP] = useState(12);
  const t = p / 100;
  const klar = p > 85;

  return (
    <div
      className="bg-surface rounded-[14px] border border-border p-6 sm:p-8"
      style={{ borderColor: klar ? "rgba(242,194,48,0.4)" : undefined, transition: "border-color 0.4s" }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <span
          className="text-[12px] font-600 uppercase tracking-[0.14em]"
          style={{ fontFamily: "var(--font-ui)", color: t < 0.5 ? "var(--color-heading)" : "var(--color-muted)", transition: "color 0.3s" }}
        >
          {fran}
        </span>
        <span
          className="text-[12px] font-600 uppercase tracking-[0.14em]"
          style={{ fontFamily: "var(--font-ui)", color: t >= 0.5 ? "var(--color-accent)" : "var(--color-muted)", transition: "color 0.3s" }}
        >
          {till}
        </span>
      </div>

      {/* Reglaget */}
      <div className="relative mt-4" style={{ height: 34 }}>
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2" style={{ height: 3, borderRadius: 3, background: "rgba(242,236,221,0.12)" }} />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2"
          style={{ height: 3, borderRadius: 3, width: `${p}%`, background: "var(--color-accent)", opacity: 0.85 }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={p}
          onChange={(e) => setP(Number(e.target.value))}
          aria-label={`Dra mellan ${fran} och ${till}`}
          className="fore-efter-range absolute inset-0 w-full"
        />
      </div>

      {/* Siffrorna som tickar */}
      <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-4">
        {rader.map((r) => {
          const a = tolka(r.before);
          const b = tolka(r.after);
          if (!a || !b) return null;
          const dec = Math.max(a.dec, b.dec);
          const varde = a.num + (b.num - a.num) * t;
          return (
            <div key={r.label} className="flex items-baseline justify-between gap-3 border-b border-border-light pb-3">
              <span className="text-[13.5px] text-body">{r.label}</span>
              <span className="whitespace-nowrap">
                <span
                  className="font-heading font-700 text-[19px] tabular-nums"
                  style={{ color: t >= 0.5 ? "var(--color-accent)" : "var(--color-heading)", transition: "color 0.3s" }}
                >
                  {formatera(varde, dec)}
                  {b.unit ? ` ${b.unit}` : ""}
                </span>
                <span
                  className="ml-2 text-[11.5px] font-700 px-2 py-0.5 rounded-full align-middle"
                  style={{
                    background: "rgba(242,194,48,0.14)",
                    color: "var(--color-accent)",
                    opacity: klar ? 1 : 0,
                    transition: "opacity 0.4s",
                  }}
                >
                  {r.delta}
                </span>
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-4 mb-0 text-[12.5px] text-muted" style={{ fontFamily: "var(--font-ui)", letterSpacing: "0.04em" }}>
        Dra i reglaget. Siffrorna är uppmätta, inte uppskattade.
      </p>
    </div>
  );
}
