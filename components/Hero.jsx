"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FramedImage() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute bg-accent"
        style={{ inset: 0, transform: "translate(14px, 14px)" }}
      />
      <div
        className="relative overflow-hidden"
        style={{ border: "1px solid rgba(26,22,17,0.15)" }}
      >
        <img
          src="/hassleholm-hero.png"
          alt="Hässleholm från ovan"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: "sepia(0.16) saturate(0.95)",
          }}
        />
      </div>
      <p className="mt-5 flex items-baseline gap-3 text-[14px] text-muted">
        <span aria-hidden="true" className="w-2 h-2 bg-accent flex-shrink-0 self-center" />
        <span>
          <span className="font-heading italic text-[15px] text-heading">Hässleholm</span>
          {" "}— kunder i hela Sverige.
        </span>
      </p>
    </div>
  );
}

const bullets = [
  "Vi börjar med det som ger störst effekt — inte allt på en gång.",
  "Webb, SEO och AI i samma leverans, från samma person.",
  "Du får ansvar och uppföljning även efter lansering.",
];

const stats = [
  { value: "150+", label: "Levererade projekt" },
  { value: "10+", label: "Års erfarenhet" },
  { value: "24h", label: "Svarslöfte på vardagar" },
];

export default function Hero() {
  return (
    <section className="grain relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Vänster: rubrik + copy + CTA */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow">Något att vara stolt över</span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-7 font-heading font-600 text-[clamp(34px,5vw,62px)] leading-[1.07] tracking-[-0.015em] text-heading">
                Moderna webbplatser, SEO och AI som gör det enklare för dina
                kunder att <span className="stolt-mark">hitta dig</span> och ta
                kontakt.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[520px]">
                För småföretag som vill ha tydligare sidor, bättre synlighet och
                smartare arbetsflöden — med en konsult som faktiskt genomför
                förbättringarna.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-7 flex flex-col gap-3">
                {bullets.map((text) => (
                  <li key={text} className="flex items-start gap-3.5 text-[15px] text-body">
                    <span aria-hidden="true" className="mt-[9px] flex-shrink-0 w-2 h-2 bg-accent" />
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-3 mt-10">
                <a href="/boka" className="premium-btn">
                  <span>Boka kostnadsfri genomgång</span>
                  <ArrowRight size={16} />
                </a>
                <a href="/tjanster" className="secondary-btn">
                  Se tjänster
                </a>
              </div>
            </Reveal>
          </div>

          {/* Höger: inramad bild med rapsgul skugga */}
          <div className="lg:col-span-5 lg:pt-16">
            <Reveal delay={0.2}>
              <FramedImage />
            </Reveal>
          </div>
        </div>

        {/* Statistikrad */}
        <Reveal delay={0.32}>
          <div className="mt-16 sm:mt-20 pt-9 border-t border-heading/15 grid grid-cols-3 max-w-[640px] gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-heading font-600 text-[clamp(26px,3vw,36px)] text-heading tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[12px] font-600 uppercase tracking-[0.1em] text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
