"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";

export default function NotFoundContent() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Gradient background — same as PageHero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)",
        }}
      />

      {/* Decorative blob */}
      <div
        className="absolute -top-[120px] -right-[80px] w-[500px] h-[500px] pointer-events-none"
        style={{
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32 text-center">
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-block font-heading font-800 text-[clamp(80px,15vw,160px)] leading-none tracking-[-0.04em]"
            style={{
              background: "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 50%, #93C5FD 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-heading font-800 text-[clamp(24px,4vw,40px)] leading-[1.15] tracking-[-0.025em] text-heading"
        >
          Sidan kunde inte hittas
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[480px] mx-auto"
        >
          Sidan du letade efter finns inte längre eller har flyttats.
          Kolla gärna menyn ovan eller gå tillbaka till startsidan.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          <a href="/" className="premium-btn">
            <Home size={16} className="opacity-80" />
            <span>Till startsidan</span>
          </a>
          <a href="/kontakt" className="secondary-btn">
            <span>Kontakta mig</span>
            <ArrowRight size={16} className="opacity-60" />
          </a>
        </motion.div>
      </div>

      {/* Bottom fade — same as PageHero */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
    </section>
  );
}
