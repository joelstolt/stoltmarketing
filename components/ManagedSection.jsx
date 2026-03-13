"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Shield, RefreshCw, BarChart3 } from "lucide-react";

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

const packages = [
  {
    name: "Start",
    price: "390",
    desc: "Trygg basdrift för mindre webbplatser.",
    features: [
      "Uppdateringar & säkerhet",
      "Backup & övervakning",
      "Enklare innehållsändringar",
      "Support vid behov",
    ],
    popular: false,
  },
  {
    name: "Bas",
    price: "790",
    desc: "Stabil drift med löpande ändringar och uppföljning.",
    features: [
      "Allt i Start",
      "Löpande innehållsändringar",
      "Prestandaoptimering",
      "Månadsrapport",
      "Prioriterad support",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "1 290",
    desc: "För växande företag som vill ha prioritet och förbättring.",
    features: [
      "Allt i Bas",
      "Prioriterade ändringar",
      "Löpande SEO-optimering",
      "Förbättringsförslag varje månad",
      "AI-verktyg & automation",
      "Utökad övervakning",
    ],
    popular: false,
  },
];

export default function ManagedSection() {
  return (
    <section id="managed" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase">
            Managed hemsida
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-5 font-heading font-800 text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading max-w-[700px]">
            Drift, underhåll och förbättringar — utan att du behöver tänka på det.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[560px]">
            Jag tar ansvar för din webbplats efter lansering. Uppdateringar,
            säkerhet, ändringar och förbättringar — allt i ett enkelt
            månadsabonnemang.
          </p>
        </Reveal>

        {/* What's always included */}
        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-wrap gap-6 sm:gap-10">
            {[
              { icon: Shield, text: "Säkerhet & uppdateringar" },
              { icon: RefreshCw, text: "Backup & återställning" },
              { icon: BarChart3, text: "Övervakning & uppföljning" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-[14px] text-body">
                <item.icon size={16} className="text-primary" />
                <span className="font-500">{item.text}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Pricing cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08 + 0.16}>
              <div
                className={`relative h-full rounded-[20px] p-7 transition-all duration-300 ${
                  pkg.popular
                    ? "bg-surface border-2 border-primary/20 shadow-[0_4px_20px_rgba(29,78,216,0.08)]"
                    : "bg-surface border border-border shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-7 text-[11px] font-700 text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wider">
                    Rekommenderad
                  </span>
                )}

                <h3 className="font-heading font-700 text-[18px] text-heading">
                  {pkg.name}
                </h3>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading font-800 text-[36px] tracking-tight text-heading">
                    {pkg.price}
                  </span>
                  <span className="text-[15px] text-muted">kr/mån</span>
                </div>

                <p className="mt-2 text-[14px] text-muted leading-relaxed">
                  {pkg.desc}
                </p>

                <ul className="mt-6 flex flex-col gap-3">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[14px] text-body"
                    >
                      <Check
                        size={15}
                        className="text-primary flex-shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/boka"
                  className={`mt-7 block text-center text-[14px] font-600 py-3 rounded-[10px] transition-all duration-200 ${
                    pkg.popular
                      ? "premium-btn justify-center"
                      : "secondary-btn justify-center w-full"
                  }`}
                >
                  Kom igång
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
