"use client";

import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui";
import { CITIES, CITY_PROOF } from "@/lib/local/data";

/** Verkliga lokala case per ort. Renderas inte om staden saknar case. */
export default function CityProof({ city }) {
  const items = CITY_PROOF[city];
  const c = CITIES[city];
  if (!items?.length || !c) return null;

  return (
    <section className="py-16 sm:py-24 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={`Gjort i ${c.name}-trakten`}
          title="Inte en mall. Ett uppdrag nära er."
        />
        <div className={`mt-10 grid gap-5 ${items.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : items.length === 1 ? "max-w-[520px]" : "sm:grid-cols-2"}`}>
          {items.map((item, i) => (
            <Reveal key={item.href} delay={0.06 + i * 0.06}>
              <a
                href={item.href}
                className="block h-full bg-surface rounded-[10px] border border-border p-6 hover:border-primary/20 transition-colors group"
              >
                <div
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 10.5,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#F2C230",
                  }}
                >
                  {item.tag}
                </div>
                <h3 className="mt-2 font-heading font-700 text-[18px] text-heading group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-body">{item.line}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-600 text-primary">
                  Se caset
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
