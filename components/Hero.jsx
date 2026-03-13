"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Check,
  ArrowRight,
  Globe,
  Cpu,
  Search,
  TrendingUp,
} from "lucide-react";

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

const bullets = [
  "Vi börjar med det som ger störst effekt — inte allt på en gång.",
  "Webb, SEO och AI i samma leverans, från samma person.",
  "Du får ansvar och uppföljning även efter lansering.",
];

const services = [
  {
    icon: Globe,
    title: "Webb & E-handel",
    desc: "Moderna sajter och WooCommerce",
    tag: "Populärast",
    tagColor: "primary",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "Smarta verktyg som sparar tid",
    tag: "Nytt",
    tagColor: "green",
  },
  {
    icon: Search,
    title: "SEO & Synlighet",
    desc: "Syns på Google, får fler kunder",
    tag: null,
  },
];

const stats = [
  { num: "70+", label: "Levererade projekt" },
  { num: "24h", label: "Svarslöfte på vardagar" },
  { num: "3 delar", label: "Webb, SEO och AI i samma upplägg" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* === Gradient background === */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)",
        }}
      />

      {/* Animated circles */}
      <div
        className="absolute pointer-events-none hidden sm:block"
        style={{
          top: 80,
          right: "8%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(29,78,216,0.07), rgba(29,78,216,0.02))",
          animation: "float-slow 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none hidden sm:block"
        style={{
          bottom: 120,
          right: "15%",
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(29,78,216,0.06), rgba(29,78,216,0.01))",
          animation: "float-medium 6s ease-in-out infinite 1s",
        }}
      />
      <div
        className="absolute pointer-events-none hidden sm:block"
        style={{
          top: 200,
          right: "5%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(29,78,216,0.1), rgba(29,78,216,0.03))",
          animation: "float-fast 5s ease-in-out infinite 0.5s",
        }}
      />
      <div
        className="absolute pointer-events-none hidden sm:block"
        style={{
          top: 140,
          right: "28%",
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(29,78,216,0.08), rgba(29,78,216,0.02))",
          animation: "float-medium 7s ease-in-out infinite 2s",
        }}
      />

      {/* Animation keyframes */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {/* === Content === */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-24">
        {/* Badge */}
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-white/70 border border-primary/12 backdrop-blur-sm uppercase shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            Digital konsult för företag som vill växa
          </span>
        </Reveal>

        {/* === MASSIVE HEADLINE — full width === */}
        <Reveal delay={0.06}>
          <h1 className="mt-6 font-heading font-800 text-[clamp(36px,5.8vw,72px)] leading-[1.05] tracking-[-0.03em] text-heading max-w-[900px]">
            Moderna webbplatser, SEO och AI som gör det enklare för dina kunder att hitta dig och ta kontakt.
          </h1>
        </Reveal>

        {/* === Two-column area below headline === */}
        <div className="mt-10 sm:mt-14 grid lg:grid-cols-[1fr,380px] gap-12 lg:gap-20 items-start">
          {/* Left: Subtitle, bullets, CTAs */}
          <div>
            <Reveal delay={0.12}>
              <p className="text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[520px]">
                För småföretag som vill ha tydligare sidor, bättre synlighet och
                smartare arbetsflöden — med en konsult som faktiskt genomför
                förbättringarna.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-6 flex flex-col gap-2.5">
                {bullets.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 text-[15px] text-body"
                  >
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/8 flex items-center justify-center">
                      <Check
                        size={12}
                        className="text-primary"
                        strokeWidth={3}
                      />
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

          {/* Right: Compact service card */}
          <Reveal delay={0.2}>
            <div className="relative lg:mt-0 mt-4">
              {/* Main glass card */}
              <div className="bg-white/[0.72] backdrop-blur-xl rounded-[20px] border border-white/80 p-5 shadow-[0_4px_24px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)]">
                {/* Top bar */}
                <div className="flex items-center gap-3 mb-4 pb-3.5 border-b border-black/[0.05]">
                  <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-[0_2px_8px_rgba(29,78,216,0.2)]">
                    <Globe size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[14px] font-700 text-heading">
                      Stolt Marketing
                    </div>
                    <div className="text-[11px] text-muted">
                      Digital konsult · Hässleholm
                    </div>
                  </div>
                </div>

                {/* Service rows */}
                <div className="flex flex-col gap-2">
                  {services.map((s) => (
                    <div
                      key={s.title}
                      className="group flex items-center gap-3 p-3 rounded-[12px] bg-white/60 border border-black/[0.04] hover:bg-primary/[0.04] hover:border-primary/12 cursor-pointer transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                        <s.icon size={15} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-600 text-heading">
                            {s.title}
                          </span>
                          {s.tag && (
                            <span
                              className={`text-[9px] font-700 uppercase tracking-wider px-1.5 py-0.5 rounded-full ${
                                s.tagColor === "green"
                                  ? "text-emerald-700 bg-emerald-500/8"
                                  : "text-primary bg-primary/6"
                              }`}
                            >
                              {s.tag}
                            </span>
                          )}
                        </div>
                        <div className="text-[12px] text-muted mt-0.5">
                          {s.desc}
                        </div>
                      </div>
                      <ArrowRight
                        size={13}
                        className="text-faint flex-shrink-0"
                      />
                    </div>
                  ))}
                </div>

                {/* Bottom trust */}
                <div className="mt-3.5 pt-3 border-t border-black/[0.05] flex items-center gap-3 text-[11px] text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-[6px] h-[6px] rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
                    Tar emot nya uppdrag
                  </span>
                  <span className="text-border">·</span>
                  <span>Svar inom 24h</span>
                </div>
              </div>

              {/* Floating: AcadeMedia — top right */}
              <div className="absolute -top-3 -right-3 bg-white/85 backdrop-blur-2xl rounded-[12px] border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.03)] px-3 py-2 hidden sm:flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center shadow-[0_2px_8px_rgba(5,150,105,0.2)]">
                  <TrendingUp size={14} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] font-700 text-heading">
                    AcadeMedia
                  </div>
                  <div className="text-[9px] text-muted">Pågående uppdrag</div>
                </div>
              </div>

              {/* Floating: Experience — bottom left */}
              <div className="absolute -bottom-3 -left-3 bg-white/85 backdrop-blur-2xl rounded-[12px] border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.03)] px-3 py-2 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white text-[11px] font-800 shadow-[0_2px_8px_rgba(29,78,216,0.25)]">
                  10+
                </div>
                <div>
                  <div className="text-[12px] font-700 text-heading">
                    Års erfarenhet
                  </div>
                  <div className="text-[10px] text-muted">
                    Enterprise & småföretag
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* === Trust stats === */}
        <Reveal delay={0.35}>
          <div className="mt-16 sm:mt-20 pt-8 border-t border-black/[0.06] flex flex-wrap gap-12 sm:gap-14">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[28px] sm:text-[30px] font-800 font-heading text-heading tracking-tight">
                  {stat.num}
                </div>
                <div className="text-[14px] text-muted mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
    </section>
  );
}
