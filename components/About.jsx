"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const stats = [
  { num: "10+", label: "Års erfarenhet" },
  { num: "70+", label: "Levererade projekt" },
  { num: "1", label: "AI SaaS-produkt" },
];

export default function About() {
  return (
    <section id="om" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-[680px] mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase">
              Om mig
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-5 font-heading font-800 text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading">
              Joel Stolt
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-body">
              Jag har byggt webbplatser och digitala lösningar i över 10 år.
              Började med WordPress, utvecklades till fullstack-utvecklare med
              fokus på moderna ramverk som Next.js och React. Under vägens gång
              har jag jobbat med allt från lokala företag i Hässleholm till
              Sveriges största utbildningsföretag.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body">
              Idag är jag djupt inne i AI — inte som trend, utan som verktyg.
              Jag har byggt egna AI-produkter, implementerat AI-lösningar åt
              kunder och använder AI dagligen för att leverera snabbare,
              smartare och bättre. Min övertygelse: småföretag förtjänar samma
              digitala kvalitet som storbolagen.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex justify-center gap-12 sm:gap-16">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-[30px] sm:text-[34px] font-800 font-heading text-primary tracking-tight">
                    {stat.num}
                  </div>
                  <div className="text-[13px] text-muted mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
