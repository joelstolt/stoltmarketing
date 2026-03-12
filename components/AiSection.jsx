"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Zap, MessageSquare, FileText, Bot } from "lucide-react";

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

const aiFeatures = [
  {
    icon: FileText,
    title: "Automatiserade offerter & dokument",
    desc: "Från röstinspelning till färdig PDF på under en minut. Sparar timmar varje vecka.",
  },
  {
    icon: Bot,
    title: "AI-chatbotar för kundtjänst",
    desc: "Svara kunder dygnet runt med en chatbot som faktiskt förstår ditt företag.",
  },
  {
    icon: Zap,
    title: "Smarta arbetsflöden",
    desc: "Automatisera repetitiva uppgifter som fakturering, uppföljning och rapportering.",
  },
  {
    icon: MessageSquare,
    title: "AI-drivet innehåll",
    desc: "Generera produkttexter, blogginlägg och marknadsföringsmaterial snabbare.",
  },
];

export default function AiSection() {
  return (
    <section
      id="ai"
      className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
    >
      {/* Subtle gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #FAFAF8 0%, #EEF2FF 50%, #FAFAF8 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,420px] gap-12 lg:gap-20 items-start">
          {/* Left: Text */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-white/70 border border-primary/10 backdrop-blur-sm uppercase">
                AI & Automation
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-5 font-heading font-800 text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading">
                AI är inte framtiden.{" "}
                <span className="text-primary">Det är nu.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[520px]">
                Medan andra pratar om AI bygger jag det. Jag har utvecklat en
                egen AI-driven SaaS-produkt, implementerat chatbotar och byggt
                automatiserade flöden som sparar timmar åt småföretagare varje
                vecka.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-4 text-[16px] leading-relaxed text-body max-w-[520px]">
                Det handlar inte om teknik för teknikens skull. Det handlar om
                att ge ditt företag en orättvis fördel — automatisera det
                tråkiga, frigör tid för det som faktiskt växer din verksamhet.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {aiFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="flex gap-3.5 p-4 rounded-[14px] bg-white/60 border border-black/[0.04] backdrop-blur-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon size={17} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-[14px] font-600 text-heading">
                        {f.title}
                      </div>
                      <div className="text-[13px] text-muted mt-1 leading-relaxed">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Kvota proof card */}
          <Reveal delay={0.15}>
            <div className="bg-white/[0.72] backdrop-blur-xl rounded-[20px] border border-white/80 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="text-[12px] font-700 text-primary uppercase tracking-wider mb-4">
                Byggt med AI
              </div>
              <h3 className="font-heading font-700 text-[22px] text-heading tracking-tight">
                Kvota.se
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">
                AI-driven offertgenerator för svenska hantverkare. Från
                röstinspelning till färdig PDF-offert på under en minut.
              </p>

              <div className="mt-5 bg-heading/[0.03] rounded-[12px] p-4 font-mono text-[13px] leading-loose">
                <div className="text-muted">// Resultat</div>
                <div>
                  <span className="text-primary">offertTid</span>
                  <span className="text-muted">: </span>
                  <span className="text-amber-600">"45 sekunder"</span>
                </div>
                <div>
                  <span className="text-primary">format</span>
                  <span className="text-muted">: </span>
                  <span className="text-amber-600">"PDF + E-post"</span>
                </div>
                <div>
                  <span className="text-primary">aiModell</span>
                  <span className="text-muted">: </span>
                  <span className="text-amber-600">"Claude Sonnet"</span>
                </div>
                <div>
                  <span className="text-primary">status</span>
                  <span className="text-muted">: </span>
                  <span className="text-emerald-600">"Lanserad ✓"</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-black/[0.05] flex flex-wrap gap-2">
                {["Next.js", "Claude AI", "jsPDF", "Resend"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-600 text-muted bg-heading/[0.03] px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
