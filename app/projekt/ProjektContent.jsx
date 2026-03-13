"use client";

import { useState } from "react";
import { ArrowRight, Globe, Cpu, Search, Shield, ExternalLink } from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";
import Link from "next/link";

const categories = ["Alla", "Webb", "E-handel", "AI", "SEO"];

const projects = [
  {
    title: "AcadeMedia",
    category: ["Webb", "E-handel"],
    type: "E-handel · WooCommerce",
    tag: "Pågående uppdrag",
    tagColor: "green",
    desc: "Bygger och utvecklar e-handelslösningar i WooCommerce åt ett av Sveriges största utbildningsföretag. Fullskalig plattform med komplexa produktflöden, betalningslösningar och integration mot befintliga system.",
    challenge: "Behövde modernisera och skala upp e-handeln med komplexa produktstrukturer, checkout-flöden och integrationer mot befintliga utbildningssystem.",
    solution: "Skräddarsydd WooCommerce-lösning med optimerade betalflöden (Stripe, Klarna), dynamiska produktsidor och prestanda-optimering för tusentals samtidiga användare.",
    results: [
      { label: "Plattform", value: "Enterprise" },
      { label: "Teknik", value: "WooCommerce" },
      { label: "Status", value: "Pågående" },
    ],
    tech: ["WordPress", "WooCommerce", "Bricks Builder", "Stripe", "Klarna"],
  },
  {
    title: "Kvota.se",
    category: ["Webb", "AI"],
    type: "SaaS-produkt · Next.js + AI",
    tag: "Eget projekt",
    tagColor: "blue",
    desc: "Byggde en AI-driven offertgenerator för svenska hantverkare — från idé till lanserad produkt på 3 veckor.",
    challenge: "Hantverkare lägger timmar på att skriva offerter manuellt. Behövde ett verktyg som kunde generera professionella offerter på sekunder.",
    solution: "Next.js-app med Claude AI-integration, röstinspelning via Web Speech API, PDF-generering med jsPDF och e-postutskick via Resend. Från röstinspelning till färdig offert på 45 sekunder.",
    results: [
      { label: "Tid till offert", value: "45 sek" },
      { label: "Tid till MVP", value: "3 veckor" },
      { label: "Status", value: "Lanserad" },
    ],
    tech: ["Next.js", "React", "Claude AI", "jsPDF", "Resend", "Vercel"],
    url: "https://kvota.se",
  },
  {
    title: "Sitecraft.se",
    category: ["Webb", "SEO"],
    type: "Webbyrå · Next.js",
    tag: "Eget projekt",
    tagColor: "blue",
    desc: "Byggde en komplett webbyrå-sajt med modern tech stack, SEO-optimerad med 190+ stadsidor och automatiserad prospektanalys.",
    challenge: "Behövde en professionell sajt för webbyrå-verksamheten med stark lokal SEO-profil och automatiserade säljverktyg.",
    solution: "Next.js-sajt med Tailwind CSS, automatiserade stadssidor för lokal SEO, samt ett Python-baserat prospektanalysverktyg med PageSpeed, SEO-audit och Google Places-integration.",
    results: [
      { label: "Stadssidor", value: "190+" },
      { label: "Teknik", value: "Next.js" },
      { label: "Status", value: "Live" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Python", "Google Places API"],
    url: "https://sitecraft.se",
  },
  {
    title: "SMH / KYH / Hermods",
    category: ["Webb", "E-handel"],
    type: "E-handel · WordPress",
    tag: "Kunduppdrag",
    tagColor: "gray",
    desc: "Löpande förvaltning och utveckling av e-handelsplattformar för utbildningsföretag inom AcadeMedia-koncernen.",
    challenge: "Flera parallella webbshoppar med behov av prestandaoptimering, checkout-förbättringar och löpande underhåll.",
    solution: "WordPress/WooCommerce med Bricks Builder, Stripe-integration, dynamiska deltagarlösningar och prestandaoptimering som förbättrade PageSpeed-poäng avsevärt.",
    results: [
      { label: "Sajter", value: "3 st" },
      { label: "PageSpeed", value: "Förbättrad" },
      { label: "Drift", value: "Löpande" },
    ],
    tech: ["WordPress", "WooCommerce", "Bricks Builder", "Stripe"],
  },
  {
    title: "Lokala företag i Skåne",
    category: ["Webb", "SEO"],
    type: "Webb · SEO · Strategi",
    tag: "70+ projekt",
    tagColor: "gray",
    desc: "Löpande uppdrag med allt från nya webbplatser till SEO-optimering och digital strategi för småföretag i Hässleholm och hela Skåne.",
    challenge: "Småföretag som behöver professionell webbnärvaro men saknar budget för stora byråer.",
    solution: "Snabba, prisvärda leveranser med fokus på konvertering och lokal SEO. Varje sajt byggs med mål att generera förfrågningar.",
    results: [
      { label: "Projekt", value: "70+" },
      { label: "Bransch", value: "Blandat" },
      { label: "Fokus", value: "Resultat" },
    ],
    tech: ["WordPress", "Next.js", "SEO", "Google Analytics"],
  },
];

export default function ProjektContent() {
  const [filter, setFilter] = useState("Alla");

  const filtered = filter === "Alla"
    ? projects
    : projects.filter((p) => p.category.includes(filter));

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Projekt" },
        ]}
        badge="Projekt & Resultat"
        title="Uppdrag som talar för sig själva."
        subtitle="Från enterprise-uppdrag åt AcadeMedia till AI-produkter och lokala småföretag — varje projekt får samma engagemang och kvalitet."
      />

      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Filter */}
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "1px solid",
                    transition: "all 0.2s",
                    background: filter === cat ? "#1D4ED8" : "#FFFFFF",
                    color: filter === cat ? "#FFFFFF" : "#3B3F4A",
                    borderColor: filter === cat ? "#1D4ED8" : "#E5E5E0",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project cards */}
          <div className="flex flex-col gap-6">
            {filtered.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.06}>
                <div className="bg-surface rounded-[20px] border border-border p-7 sm:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <h3 className="font-heading font-700 text-[22px] text-heading tracking-tight">
                        {project.title}
                      </h3>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-hover transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-600 text-primary">
                        {project.type}
                      </span>
                      <span
                        className={`text-[11px] font-600 px-2.5 py-1 rounded-full ${
                          project.tagColor === "green"
                            ? "text-emerald-700 bg-emerald-500/8"
                            : project.tagColor === "blue"
                            ? "text-primary bg-primary/6"
                            : "text-muted bg-heading/[0.04]"
                        }`}
                      >
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-[1fr,260px] gap-8">
                    {/* Left: Details */}
                    <div>
                      <p className="text-[15px] leading-relaxed text-body mb-5">
                        {project.desc}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <p className="text-[12px] font-600 text-muted uppercase tracking-wider mb-2">
                            Utmaning
                          </p>
                          <p className="text-[14px] leading-relaxed text-body">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="text-[12px] font-600 text-muted uppercase tracking-wider mb-2">
                            Lösning
                          </p>
                          <p className="text-[14px] leading-relaxed text-body">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tech tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[12px] font-500 text-muted px-2.5 py-1 rounded-md bg-surface-muted border border-border-light"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Results */}
                    <div className="flex flex-row lg:flex-col gap-5 lg:gap-4 lg:border-l lg:border-border-light lg:pl-8">
                      {project.results.map((r) => (
                        <div key={r.label}>
                          <div className="text-[26px] font-800 font-heading text-heading tracking-tight">
                            {r.value}
                          </div>
                          <div className="text-[12px] text-muted mt-0.5">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Vill du ha liknande resultat?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri genomgång så pratar vi om hur jag kan hjälpa
              just ditt företag.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/kontakt" className="premium-btn mt-8 mx-auto">
              <span>Boka kostnadsfri genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
