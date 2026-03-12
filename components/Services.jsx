"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Cpu, Search, ArrowRight, Check } from "lucide-react";

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

const services = [
  {
    icon: Globe,
    title: "Webbplatser & E-handel",
    desc: "Moderna, snabba webbplatser och skräddarsydda WooCommerce-lösningar. Jag bygger allt från företagssajter till fullskaliga e-handelsplattformar — med samma teknik som driver Sveriges största bolag.",
    items: [
      "Next.js, React & WordPress",
      "WooCommerce & e-handel",
      "Responsiv design & prestanda",
      "Konverteringsoptimering",
    ],
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "Jag hjälper dig implementera AI-verktyg och automatiserade arbetsflöden som faktiskt sparar tid och pengar. Inte buzzwords — utan konkreta lösningar som förändrar din vardag.",
    items: [
      "AI-chatbotar & kundtjänst",
      "Automatiserade offerter & dokument",
      "Smarta arbetsflöden",
      "Processeffektivisering",
    ],
  },
  {
    icon: Search,
    title: "SEO & Synlighet",
    desc: "Det spelar ingen roll hur bra din sajt är om ingen hittar den. Jag ser till att du syns på Google — med teknisk SEO, innehållsstrategi och lokal optimering som driver relevanta besökare.",
    items: [
      "Teknisk SEO-audit",
      "Sökordsanalys & strategi",
      "Lokal SEO & Google Maps",
      "Core Web Vitals & prestanda",
    ],
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase">
            Tjänster
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-5 font-heading font-800 text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading max-w-[700px]">
            Allt du behöver för att växa digitalt — från en och samma konsult.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[560px]">
            Ingen byrå-overhead, ingen bortkastad tid. Du jobbar direkt med mig
            och får snabba resultat inom webb, SEO och AI.
          </p>
        </Reveal>

        <div className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08 + 0.12}>
              <div className="h-full bg-surface rounded-[20px] border border-border p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-[12px] bg-primary/6 group-hover:bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300">
                  <s.icon size={20} className="text-primary" />
                </div>

                <h3 className="font-heading font-700 text-[20px] text-heading tracking-tight">
                  {s.title}
                </h3>

                <p className="mt-3 text-[14px] leading-relaxed text-body">
                  {s.desc}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[14px] text-body"
                    >
                      <Check
                        size={14}
                        className="text-primary flex-shrink-0"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
