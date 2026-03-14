"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

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

function CountUp({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const num = parseInt(target.replace(/\D/g, ""), 10);

  useEffect(() => {
    if (!inView || isNaN(num)) return;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, num, duration]);

  return (
    <span ref={ref}>
      {inView ? count : 0}
      {suffix}
    </span>
  );
}

function BlobImage({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div
        style={{
          position: "absolute",
          inset: -20,
          borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
          background: "radial-gradient(ellipse, rgba(29,78,216,0.06) 0%, transparent 70%)",
          animation: "blob-glow 6s ease-in-out infinite",
          filter: "blur(20px)",
        }}
      />
      <div
        style={{
          position: "relative",
          borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
          overflow: "hidden",
          animation: "blob-morph 12s ease-in-out infinite",
          boxShadow: "0 20px 60px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.03)",
          border: "2px solid rgba(255,255,255,0.4)",
        }}
      >
        <img
          src="/hassleholm-hero.png"
          alt="Hässleholm stad"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            animation: "ken-burns 20s ease-in-out infinite alternate",
            transformOrigin: "center center",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(238,242,255,0.25) 0%, rgba(219,234,254,0.15) 40%, rgba(250,250,248,0.45) 100%)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: "8%",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          borderRadius: 12,
          padding: "8px 16px",
          fontSize: 12,
          fontWeight: 600,
          color: "#3B3F4A",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          border: "1px solid rgba(255,255,255,0.8)",
          animation: "float-fast 5s ease-in-out infinite 1s",
        }}
      >
        📍 Hässleholm — kunder i hela Sverige
      </div>
    </div>
  );
}

const bullets = [
  "Vi börjar med det som ger störst effekt — inte allt på en gång.",
  "Webb, SEO och AI i samma leverans, från samma person.",
  "Du får ansvar och uppföljning även efter lansering.",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)",
        }}
      />

      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{ top: "18%", right: "12%", width: 50, height: 50, borderRadius: "50%", background: "linear-gradient(135deg, rgba(29,78,216,0.08), rgba(29,78,216,0.02))", animation: "float-medium 7s ease-in-out infinite 2s" }}
      />
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{ top: "65%", right: "8%", width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, rgba(29,78,216,0.1), rgba(29,78,216,0.03))", animation: "float-fast 5s ease-in-out infinite 1s" }}
      />

      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{ top: "38%", right: "5%", width: "32%", maxWidth: 420, animation: "float-slow 8s ease-in-out infinite", zIndex: 5 }}
      >
        <BlobImage />
      </div>

      <style>{`
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes float-medium { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes float-fast { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes ken-burns { 0% { transform: scale(1) translate(0, 0); } 100% { transform: scale(1.08) translate(-1%, -1%); } }
        @keyframes blob-morph {
          0%, 100% { border-radius: 40% 60% 55% 45% / 55% 40% 60% 45%; }
          25% { border-radius: 55% 45% 40% 60% / 40% 55% 45% 60%; }
          50% { border-radius: 45% 55% 60% 40% / 60% 45% 55% 40%; }
          75% { border-radius: 60% 40% 45% 55% / 45% 60% 40% 55%; }
        }
        @keyframes blob-glow { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-white/70 border border-primary/12 backdrop-blur-sm uppercase shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            Digital konsult för företag som vill växa
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-6 font-heading font-800 text-[clamp(36px,5.8vw,72px)] leading-[1.05] tracking-[-0.03em] text-heading max-w-[900px]">
            Moderna webbplatser, SEO och AI som gör det enklare för dina kunder att hitta dig och ta kontakt.
          </h1>
        </Reveal>

        <div className="mt-10 sm:mt-14 max-w-[600px]">
          <Reveal delay={0.12}>
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[520px]">
              För småföretag som vill ha tydligare sidor, bättre synlighet och smartare arbetsflöden — med en konsult som faktiskt genomför förbättringarna.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-6 flex flex-col gap-2.5">
              {bullets.map((text) => (
                <li key={text} className="flex items-start gap-3 text-[15px] text-body">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/8 flex items-center justify-center">
                    <Check size={12} className="text-primary" strokeWidth={3} />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-3 mt-9">
              <a href="/boka" className="premium-btn">
                <span>Boka kostnadsfri genomgång</span>
                <ArrowRight size={16} className="opacity-80" />
              </a>
              <a href="/tjanster" className="secondary-btn">
                Se tjänster
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="lg:hidden mt-10 mx-auto max-w-[280px]" style={{ animation: "float-slow 8s ease-in-out infinite" }}>
            <BlobImage />
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-16 sm:mt-20 pt-8 border-t border-black/[0.06] flex flex-wrap gap-12 sm:gap-14">
            <div>
              <div className="text-[28px] sm:text-[30px] font-800 font-heading text-heading tracking-tight">
                <CountUp target="150" suffix="+" />
              </div>
              <div className="text-[14px] text-muted mt-0.5">Levererade projekt</div>
            </div>
            <div>
              <div className="text-[28px] sm:text-[30px] font-800 font-heading text-heading tracking-tight">
                <CountUp target="10" suffix="+" duration={1500} />
              </div>
              <div className="text-[14px] text-muted mt-0.5">Års erfarenhet</div>
            </div>
            <div>
              <div className="text-[28px] sm:text-[30px] font-800 font-heading text-heading tracking-tight">24h</div>
              <div className="text-[14px] text-muted mt-0.5">Svarslöfte på vardagar</div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
    </section>
  );
}
