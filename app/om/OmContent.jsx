"use client";

import { ArrowRight, MapPin, Briefcase, Code2, Brain, Rocket } from "lucide-react";
import { Reveal, Badge, SectionHeader } from "@/components/ui";

const timeline = [
  {
    period: "2014–2020",
    title: "WordPress & Webdesign",
    desc: "Började bygga webbplatser åt lokala företag. Lärde mig allt från design till hosting, SEO och kundkontakt. Hundratals sajter levererade.",
  },
  {
    period: "2020–2024",
    title: "E-handel & WooCommerce",
    desc: "Fördjupade mig i e-handelslösningar. Byggde komplexa WooCommerce-butiker med betalflöden, lagerhantering och integrationer.",
  },
  {
    period: "2024–2025",
    title: "Next.js, React & Modern stack",
    desc: "Gick över till modern webbutveckling med Next.js och React. Snabbare sajter, bättre prestanda, mer flexibilitet.",
  },
  {
    period: "2025–nu",
    title: "AI & Automation",
    desc: "Byggde Kvota.se — en AI-driven SaaS-produkt. Nu hjälper jag företag implementera AI-verktyg som faktiskt sparar tid i vardagen.",
  },
];

const values = [
  {
    icon: Briefcase,
    title: "Jag genomför, inte bara rådger",
    desc: "Du får inte en rapport och ett \"lycka till\". Jag bygger, optimerar och levererar själv.",
  },
  {
    icon: Code2,
    title: "Rätt teknik för rätt behov",
    desc: "Jag säljer inte en teknik. Jag väljer det som ger bäst resultat för just ditt företag.",
  },
  {
    icon: Brain,
    title: "AI som praktiskt verktyg",
    desc: "Jag pratar inte om AI i teorin. Jag bygger AI-lösningar och använder dem dagligen.",
  },
  {
    icon: Rocket,
    title: "Långsiktigt, inte snabba klipp",
    desc: "Jag bygger relationer och lösningar som håller. De flesta kunder jobbar jag med i flera år.",
  },
];

const tools = [
  "Next.js", "React", "WordPress", "WooCommerce", "Tailwind CSS",
  "Node.js", "Claude AI", "OpenAI", "Vercel", "GitHub",
  "Google Analytics", "Search Console", "Figma", "Framer Motion",
];

export default function OmContent() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)",
          }}
        />
        <div
          className="absolute -top-[120px] -right-[80px] w-[500px] h-[500px] pointer-events-none"
          style={{
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
          {/* Breadcrumbs */}
          <Reveal>
            <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
              <a href="/" className="hover:text-heading transition-colors">Start</a>
              <span className="text-border">·</span>
              <span className="text-heading font-500">Om mig</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1fr,340px] gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <Reveal delay={0.04}>
                <Badge>Om mig</Badge>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-5 font-heading font-800 text-[clamp(32px,5vw,52px)] leading-[1.08] tracking-[-0.03em] text-heading">
                  Joel Stolt
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-2 text-[17px] sm:text-[18px] text-primary font-600">
                  Digital konsult & AI-specialist
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[520px]">
                  Jag har byggt webbplatser och digitala lösningar i över 10 år.
                  Från lokala företag i Hässleholm till Sveriges största
                  utbildningsföretag. Min drivkraft? Att ge småföretag tillgång
                  till samma digitala kvalitet som storbolagen.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-6 flex flex-wrap gap-4 text-[14px] text-muted">
                  <span className="flex items-center gap-2">
                    <MapPin size={15} className="text-primary" />
                    Hässleholm, Sverige
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase size={15} className="text-primary" />
                    10+ års erfarenhet
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <a href="/#kontakt" className="premium-btn mt-8">
                  <span>Ta kontakt</span>
                  <ArrowRight size={16} className="opacity-80" />
                </a>
              </Reveal>
            </div>

            {/* Right: Photo */}
            <Reveal delay={0.15}>
              <div className="relative mx-auto lg:mx-0">
                {/* Photo container with creative framing */}
                <div
                  style={{
                    position: "relative",
                    width: 300,
                    height: 360,
                    borderRadius: 24,
                    overflow: "hidden",
                    boxShadow:
                      "0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <img
                    src="/joel-stolt.png"
                    alt="Joel Stolt — Digital konsult & AI-specialist"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                  />
                </div>

                {/* Decorative accent */}
                <div
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(29,78,216,0.15), rgba(29,78,216,0.05))",
                    zIndex: -1,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -12,
                    left: -12,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(29,78,216,0.1), rgba(29,78,216,0.03))",
                    zIndex: -1,
                  }}
                />

                {/* Floating card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: -16,
                    right: -16,
                    background: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(12px)",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.9)",
                    boxShadow:
                      "0 8px 24px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.03)",
                    padding: "10px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 800,
                      boxShadow: "0 2px 8px rgba(29,78,216,0.25)",
                    }}
                  >
                    70+
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#0C0F1A" }}>
                      Projekt levererade
                    </div>
                    <div style={{ fontSize: 11, color: "#6B7280" }}>
                      Och räknar
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
      </section>

      {/* ═══ STORY ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Min resa"
            title="Från WordPress till AI — 10 år av utveckling."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <Reveal key={item.period} delay={i * 0.08 + 0.1}>
                <div className="relative pl-5 border-l-2 border-primary/15 h-full">
                  <div
                    style={{
                      position: "absolute",
                      left: -5,
                      top: 0,
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#1D4ED8",
                    }}
                  />
                  <p className="text-[12px] font-700 text-primary uppercase tracking-wider">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-heading font-700 text-[17px] text-heading tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-body">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: "#F4F4F1" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Hur jag jobbar"
            title="Det här kan du förvänta dig av mig."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06 + 0.1}>
                <div className="flex gap-5 p-6 bg-surface rounded-[20px] border border-border">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "rgba(29,78,216,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <v.icon size={20} color="#1D4ED8" />
                  </div>
                  <div>
                    <h3 className="font-heading font-700 text-[17px] text-heading tracking-tight">
                      {v.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-body">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOOLS ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Verktyg & teknik"
            title="Det jag jobbar med varje dag."
          />

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#3B3F4A",
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E0",
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(29,78,216,0.3)";
                    e.currentTarget.style.color = "#1D4ED8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E5E5E0";
                    e.currentTarget.style.color = "#3B3F4A";
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(168deg, #EEF2FF 0%, #E0E7FF 40%, #DBEAFE 70%, #EFF6FF 100%)",
          }}
        />
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <Reveal>
            <h2 className="font-heading font-800 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.025em] text-heading">
              Vill du veta mer?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka ett kort samtal så berättar jag mer om hur jag kan hjälpa
              just ditt företag.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/#kontakt" className="premium-btn mt-8 mx-auto">
              <span>Boka kostnadsfri genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
