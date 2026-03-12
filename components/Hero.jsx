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
    desc: "Moderna sajter och WooCommerce-lösningar",
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

      {/* Organic blob shapes */}
      <div
        className="absolute -top-[120px] -right-[80px] w-[500px] h-[500px] pointer-events-none"
        style={{
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[60px] -left-[100px] w-[400px] h-[400px] pointer-events-none"
        style={{
          borderRadius: "60% 40% 30% 70% / 50% 60% 40% 50%",
          background:
            "radial-gradient(ellipse, rgba(29,78,216,0.04) 0%, transparent 70%)",
        }}
      />

      {/* === Content === */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-white/70 border border-primary/12 backdrop-blur-sm uppercase shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                Digital konsult för företag som vill växa
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 font-heading font-800 text-[clamp(32px,4.2vw,52px)] leading-[1.1] tracking-[-0.025em] text-heading">
                Moderna webbplatser, SEO och AI som gör det enklare för dina
                kunder att hitta dig och ta kontakt.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[520px]">
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
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#kontakt" className="premium-btn">
                  <span>Boka kostnadsfri genomgång</span>
                  <ArrowRight size={16} className="opacity-80" />
                </a>
                <a
                  href="#tjanster"
                  className="secondary-btn"
                >
                  Se tjänster
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Glass card */}
          <Reveal delay={0.15}>
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/[0.72] backdrop-blur-xl rounded-[20px] border border-white/80 p-6 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)]">
                {/* Top bar */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-black/[0.05]">
                  <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center shadow-[0_2px_8px_rgba(29,78,216,0.2)]">
                    <Globe size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[15px] font-700 text-heading">
                      Stolt Marketing
                    </div>
                    <div className="text-[12px] text-muted">
                      Digital konsult · Hässleholm
                    </div>
                  </div>
                </div>

                {/* Service rows */}
                <div className="flex flex-col gap-2.5">
                  {services.map((s) => (
                    <div
                      key={s.title}
                      className="group flex items-center gap-3.5 p-3.5 rounded-[14px] bg-white/60 border border-black/[0.04] hover:bg-primary/[0.04] hover:border-primary/12 cursor-pointer transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-[38px] h-[38px] rounded-[10px] bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                        <s.icon size={16} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] font-600 text-heading">
                            {s.title}
                          </span>
                          {s.tag && (
                            <span
                              className={`text-[10px] font-700 uppercase tracking-wider px-2 py-0.5 rounded-full ${
                                s.tagColor === "green"
                                  ? "text-emerald-700 bg-emerald-500/8"
                                  : "text-primary bg-primary/6"
                              }`}
                            >
                              {s.tag}
                            </span>
                          )}
                        </div>
                        <div className="text-[13px] text-muted mt-0.5">
                          {s.desc}
                        </div>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-faint flex-shrink-0"
                      />
                    </div>
                  ))}
                </div>

                {/* Bottom trust */}
                <div className="mt-4 pt-3.5 border-t border-black/[0.05] flex items-center gap-3.5 text-[12px] text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-[7px] h-[7px] rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
                    Tar emot nya uppdrag
                  </span>
                  <span className="text-border">·</span>
                  <span>Svar inom 24h</span>
                </div>
              </div>

              {/* Floating card — bottom left */}
              <div className="absolute -bottom-4 -left-4 bg-white/85 backdrop-blur-2xl rounded-[14px] border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.03)] px-4 py-3 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white text-[13px] font-800 shadow-[0_2px_8px_rgba(29,78,216,0.25)]">
                  10+
                </div>
                <div>
                  <div className="text-[13px] font-700 text-heading">
                    Års erfarenhet
                  </div>
                  <div className="text-[11px] text-muted">
                    Enterprise & småföretag
                  </div>
                </div>
              </div>

              {/* Floating card — top right */}
              <div className="absolute -top-3.5 -right-2.5 bg-white/85 backdrop-blur-2xl rounded-[14px] border border-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.03)] px-3.5 py-2.5 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center shadow-[0_2px_8px_rgba(5,150,105,0.2)]">
                  <TrendingUp size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-[12px] font-700 text-heading">
                    AcadeMedia
                  </div>
                  <div className="text-[10px] text-muted">Pågående uppdrag</div>
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
