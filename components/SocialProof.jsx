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

const clients = [
  "AcadeMedia",
  "SMH Sverige",
  "KYH",
  "Hermods",
  "Kvota.se",
];

export default function SocialProof() {
  return (
    <section className="py-10 sm:py-14 px-5 sm:px-8 border-b border-border-light">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <span className="text-[13px] font-500 text-muted uppercase tracking-wider whitespace-nowrap">
              Förtroende av
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {clients.map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="text-[15px] sm:text-[16px] font-700 text-heading/30 hover:text-heading/60 transition-colors duration-300 cursor-default"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
