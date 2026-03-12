"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const cases = [
  {
    client: "AcadeMedia",
    type: "E-handel · WooCommerce",
    desc: "Bygger och utvecklar e-handelslösningar i WooCommerce åt ett av Sveriges största utbildningsföretag. Fullskalig plattform med komplexa produktflöden, betalningslösningar och integration mot befintliga system.",
    tag: "Pågående uppdrag",
    tagColor: "green",
    metrics: [
      { label: "Plattform", value: "WooCommerce" },
      { label: "Typ", value: "Enterprise" },
    ],
  },
  {
    client: "Kvota.se",
    type: "SaaS-produkt · Next.js + AI",
    desc: "Byggde en AI-driven offertgenerator för svenska hantverkare — från idé till lanserad produkt. Next.js-frontend, Claude AI-integration, PDF-generering och e-postutskick.",
    tag: "Eget projekt",
    tagColor: "blue",
    metrics: [
      { label: "Stack", value: "Next.js + AI" },
      { label: "Tid till MVP", value: "3 veckor" },
    ],
  },
  {
    client: "Småföretag i hela Sverige",
    type: "Webb · SEO · Strategi",
    desc: "Löpande uppdrag med allt från nya webbplatser och WooCommerce-butiker till SEO-optimering och digital strategi. Fokus på mätbara resultat och långsiktiga kundrelationer.",
    tag: "70+ projekt",
    tagColor: "gray",
    metrics: [
      { label: "Bransch", value: "Blandat" },
      { label: "Fokus", value: "Resultat" },
    ],
  },
];

export default function Cases() {
  return (
    <section
      id="case"
      className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
    >
      {/* Subtle bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #FAFAF8 0%, #F4F4F1 50%, #FAFAF8 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase">
            Projekt & Resultat
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-5 font-heading font-800 text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading max-w-[600px]">
            Uppdrag som talar för sig själva.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[520px]">
            Från enterprise-uppdrag till lokala småföretag — varje projekt får
            samma engagemang och kvalitetsnivå.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.08 + 0.12}>
              <div className="h-full bg-surface rounded-[20px] border border-border p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[12px] font-600 text-primary">
                    {c.type}
                  </span>
                  <span
                    className={`text-[11px] font-600 px-2.5 py-1 rounded-full ${
                      c.tagColor === "green"
                        ? "text-emerald-700 bg-emerald-500/8"
                        : c.tagColor === "blue"
                        ? "text-primary bg-primary/6"
                        : "text-muted bg-heading/[0.04]"
                    }`}
                  >
                    {c.tag}
                  </span>
                </div>

                <h3 className="font-heading font-700 text-[20px] text-heading tracking-tight">
                  {c.client}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-body flex-1">
                  {c.desc}
                </p>

                <div className="mt-5 pt-4 border-t border-border-light flex gap-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-[11px] text-muted uppercase tracking-wider font-500">
                        {m.label}
                      </div>
                      <div className="text-[14px] font-600 text-heading mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
