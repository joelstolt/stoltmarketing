"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

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

const promises = [
  "Du får en tydlig rekommendation, inte en vag byrålista.",
  "Vi kan ta webb, SEO, AI och drift i samma upplägg.",
  "Det ska kännas enklare att välja väg framåt efter samtalet.",
];

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(168deg, #EEF2FF 0%, #E0E7FF 40%, #DBEAFE 70%, #EFF6FF 100%)",
        }}
      />

      <div className="relative z-10 max-w-[640px] mx-auto text-center">
        <Reveal>
          <h2 className="font-heading font-800 text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading">
            Redo att ta nästa steg?
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body">
            Boka ett kostnadsfritt samtal så går vi igenom ditt nuläge, dina
            viktigaste sidor och vad som bör prioriteras först. Ingen sälj,
            inga förpliktelser.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <a
            href="/boka"
            className="premium-btn mt-8 mx-auto"
          >
            <span>Boka kostnadsfri genomgång</span>
            <ArrowRight size={16} className="opacity-80" />
          </a>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-4 text-[14px] text-muted">
            joel@stoltmarketing.se · Hässleholm, Sverige
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-10 flex flex-col gap-2.5 text-left max-w-[420px] mx-auto">
            {promises.map((text) => (
              <li
                key={text}
                className="flex items-start gap-3 text-[14px] text-body"
              >
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white/60 flex items-center justify-center">
                  <Check size={12} className="text-primary" strokeWidth={3} />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
