"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink, Globe, Code, Users, GraduationCap, Zap, Palette, Accessibility } from "lucide-react";

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

const cases = [
  {
    client: "LIA-platsbanken",
    type: "Webbplattform · Next.js",
    desc: "Byggde en komplett mötesplattform för AcadeMedias YH-studenter och Sveriges arbetsgivare. Studenterna hittar LIA-platser, företagen rekryterar direkt från skolbänken. Registrering, sök, matchning och responsivt gränssnitt.",
    tag: "AcadeMedia",
    tagColor: "green",
    icon: GraduationCap,
    metrics: [
      { label: "Kund", value: "AcadeMedia" },
      { label: "Plattform", value: "Next.js" },
    ],
    screenshot: "/case-lia.png",
    color: "#059669",
  },
  {
    client: "RBN Utbildning",
    type: "Webb · API · SEO · Grafisk profil",
    desc: "Ny webbplats med komplett grafisk profil, sökmotoroptimering och API-integration mot befintliga system. Utbildningar, kunskapsbanken och kundportalen — allt samlat i en tydlig och snabb upplevelse.",
    tag: "Utbildningsföretag",
    tagColor: "blue",
    icon: Zap,
    metrics: [
      { label: "Omfattning", value: "Helhetsleverans" },
      { label: "Teknik", value: "WordPress + API" },
    ],
    screenshot: "/case-rbn.png",
    href: "https://rbnutbildning.se",
    color: "#EA580C",
  },
  {
    client: "Förskolan Harpan",
    type: "Webb · Grafisk profil",
    desc: "Ny grafisk profil och modern webbplats för en kristen förskola med musikprofil i Hässleholm. Varm och inbjudande design som speglar verksamheten — med tydlig information för föräldrar och enkel platsansökan.",
    tag: "Lokal kund",
    tagColor: "yellow",
    icon: Palette,
    metrics: [
      { label: "Profil", value: "Ny grafisk identitet" },
      { label: "Teknik", value: "Next.js" },
    ],
    screenshot: "/case-harpan.png",
    color: "#CA8A04",
  },
  {
    client: "Omniway",
    type: "Webb · WCAG · Tillgänglighet",
    desc: "Modern webbplats för en lärplattform inom utbildningssektorn — byggd med tillgänglighet i fokus. WCAG-anpassad från grunden, mörkt tema och responsiv design som fungerar för alla användare.",
    tag: "EdTech",
    tagColor: "purple",
    icon: Accessibility,
    metrics: [
      { label: "Fokus", value: "WCAG 2.1 AA" },
      { label: "Design", value: "Dark mode" },
    ],
    screenshot: "/case-omniway.png",
    href: "https://omniway.se",
    color: "#7C3AED",
  },
];

export default function Cases() {
  return (
    <section
      id="case"
      className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
    >
      {/* Subtle bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #FAFAF8 0%, #F4F4F1 50%, #FAFAF8 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase">
            Projekt & Resultat
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-5 font-heading font-800 text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading max-w-[600px]">
            Uppdrag som talar för sig själva.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[520px]">
            Från enterprise-plattformar till lokala förskolor — varje projekt
            får samma engagemang och kvalitetsnivå.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.08 + 0.12}>
              <div className="group h-full bg-surface rounded-[20px] border border-border overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-400 hover:-translate-y-1 flex flex-col">
                {/* Screenshot area */}
                <div
                  className="relative h-[200px] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${c.color}08 0%, ${c.color}15 50%, ${c.color}05 100%)`,
                  }}
                >
                  {c.screenshot ? (
                    <img
                      src={c.screenshot}
                      alt={`${c.client}`}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-16 h-16 rounded-[16px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${c.color}15, ${c.color}08)`,
                          border: `1px solid ${c.color}15`,
                        }}
                      >
                        <c.icon
                          size={28}
                          style={{ color: c.color }}
                          className="opacity-60"
                        />
                      </div>
                    </div>
                  )}

                  {/* Tag overlay */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`text-[11px] font-600 px-2.5 py-1 rounded-full backdrop-blur-sm ${
                        c.tagColor === "green"
                          ? "text-emerald-700 bg-emerald-500/12 border border-emerald-500/15"
                          : c.tagColor === "blue"
                          ? "text-primary bg-primary/8 border border-primary/12"
                          : c.tagColor === "yellow"
                          ? "text-yellow-700 bg-yellow-500/12 border border-yellow-500/15"
                          : c.tagColor === "purple"
                          ? "text-violet-700 bg-violet-500/12 border border-violet-500/15"
                          : "text-muted bg-white/80 border border-black/[0.06]"
                      }`}
                    >
                      {c.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-[12px] font-600 text-primary mb-2">
                    {c.type}
                  </span>

                  <h3 className="font-heading font-700 text-[20px] text-heading tracking-tight group-hover:text-primary transition-colors duration-300">
                    {c.client}
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-body flex-1">
                    {c.desc}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border-light flex items-center justify-between">
                    <div className="flex gap-6">
                      {c.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-[11px] text-muted uppercase tracking-wider font-500">
                            {m.label}
                          </div>
                          <div className="text-[14px] font-600 text-heading mt-0.5">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                    {c.href && (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} className="text-primary" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href="/projekt"
              className="inline-flex items-center gap-2 text-[15px] font-600 text-primary hover:text-primary-hover transition-colors group"
            >
              Se alla projekt
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
