"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal, PageHero } from "@/components/ui";

const categories = ["Alla", "Webb", "E-handel", "AI", "SEO", "Tillgänglighet"];

const projects = [
  {
    title: "LIA-platsbanken",
    category: ["Webb"],
    type: "Webbplattform · Next.js",
    tag: "AcadeMedia",
    tagColor: "green",
    desc: "Byggde en komplett mötesplattform för AcadeMedias YH-studenter och Sveriges arbetsgivare. Studenterna hittar LIA-platser, företagen rekryterar direkt från skolbänken.",
    challenge: "AcadeMedia behövde en digital plattform som kopplade ihop tusentals YH-studenter med arbetsgivare för LIA-praktik — med registrering, sök och matchning.",
    solution: "Modern Next.js-plattform med registreringsflöden för både studenter och företag, sökfunktion, matchningslogik och responsivt gränssnitt.",
    results: [
      { label: "Kund", value: "AcadeMedia" },
      { label: "Plattform", value: "Next.js" },
      { label: "Status", value: "Live" },
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    screenshot: "/case-lia.png",
  },
  {
    title: "RBN Utbildning",
    category: ["Webb", "SEO"],
    type: "Webb · API · SEO · Grafisk profil",
    tag: "Utbildningsföretag",
    tagColor: "blue",
    desc: "Ny webbplats med komplett grafisk profil, sökmotoroptimering och API-integration mot befintliga system.",
    challenge: "Befintlig sajt var daterad, saknade SEO-grund och hade inget sammanhängande visuellt uttryck. Utbildningar, kunskapsbanken och kundportalen behövde samlas under en tydlig profil.",
    solution: "Helhetsleverans med ny grafisk profil, WordPress-sajt med API-integration för utbildningsdata, strukturerad SEO och snabb användarupplevelse.",
    results: [
      { label: "Omfattning", value: "Helhetsleverans" },
      { label: "Teknik", value: "WordPress + API" },
      { label: "Status", value: "Live" },
    ],
    tech: ["WordPress", "Bricks Builder", "REST API", "SEO"],
    url: "https://rbnutbildning.se",
    screenshot: "/case-rbn.png",
  },
  {
    title: "Förskolan Harpan",
    category: ["Webb"],
    type: "Webb · Grafisk profil",
    tag: "Lokal kund",
    tagColor: "yellow",
    desc: "Ny grafisk profil och modern webbplats för en kristen förskola med musikprofil i Hässleholm.",
    challenge: "Förskolan saknade en sammanhängande grafisk identitet och webbplatsen var svår att navigera för föräldrar som ville söka plats eller hitta information.",
    solution: "Varm och inbjudande design som speglar verksamheten med musik och barn i fokus. Tydlig navigation, enkel platsansökan och responsiv design. Byggt i Next.js.",
    results: [
      { label: "Profil", value: "Ny identitet" },
      { label: "Teknik", value: "Next.js" },
      { label: "Status", value: "Live" },
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    screenshot: "/case-harpan.png",
  },
  {
    title: "Omniway",
    category: ["Webb", "Tillgänglighet"],
    type: "Webb · WCAG · Tillgänglighet",
    tag: "EdTech",
    tagColor: "purple",
    desc: "Modern webbplats för en lärplattform inom utbildningssektorn — byggd med tillgänglighet i fokus.",
    challenge: "Omniway behövde en ny sajt som uppfyllde WCAG 2.1 AA-krav och kommunicerade deras lärplattform på ett modernt och tillgängligt sätt.",
    solution: "Mörkt tema med hög kontrast, semantisk HTML, skärmläsarstöd och responsiv design. WCAG-anpassad från grunden utan att kompromissa på design.",
    results: [
      { label: "Fokus", value: "WCAG 2.1 AA" },
      { label: "Design", value: "Dark mode" },
      { label: "Status", value: "Live" },
    ],
    tech: ["WordPress", "WCAG 2.1", "Tillgänglighet", "SEO"],
    url: "https://omniway.se",
    screenshot: "/case-omniway.png",
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
    screenshot: null,
  },
  {
    title: "SMH / KYH / Hermods",
    category: ["Webb", "E-handel"],
    type: "E-handel · WordPress",
    tag: "AcadeMedia",
    tagColor: "green",
    desc: "Löpande förvaltning och utveckling av e-handelsplattformar för utbildningsföretag inom AcadeMedia-koncernen.",
    challenge: "Flera parallella webbshoppar med behov av prestandaoptimering, checkout-förbättringar och löpande underhåll.",
    solution: "WordPress/WooCommerce med Bricks Builder, Stripe-integration, dynamiska deltagarlösningar och prestandaoptimering som förbättrade PageSpeed-poäng avsevärt.",
    results: [
      { label: "Sajter", value: "3 st" },
      { label: "PageSpeed", value: "Förbättrad" },
      { label: "Drift", value: "Löpande" },
    ],
    tech: ["WordPress", "WooCommerce", "Bricks Builder", "Stripe"],
    screenshot: null,
  },
];

export default function ProjektContent() {
  const [filter, setFilter] = useState("Alla");

  const filtered =
    filter === "Alla"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Projekt" }]}
        badge="Projekt & Resultat"
        title="Uppdrag som talar för sig själva."
        subtitle="Från enterprise-plattformar åt AcadeMedia till lokala förskolor och AI-produkter — varje projekt får samma engagemang och kvalitet."
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
                <div className="group bg-surface rounded-[20px] border border-border overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-400">
                  <div className="grid lg:grid-cols-[320px,1fr] gap-0">
                    {/* Screenshot */}
                    {project.screenshot ? (
                      <div className="relative h-[200px] lg:h-full overflow-hidden">
                        <img
                          src={project.screenshot}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div
                        className="hidden lg:flex h-full items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(29,78,216,0.04) 0%, rgba(29,78,216,0.08) 100%)",
                          minHeight: 200,
                        }}
                      >
                        <span className="text-[40px] font-800 font-heading text-primary/10">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-7 sm:p-9">
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-3">
                          <h3 className="font-heading font-700 text-[22px] text-heading tracking-tight group-hover:text-primary transition-colors duration-300">
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
                                : project.tagColor === "yellow"
                                ? "text-yellow-700 bg-yellow-500/8"
                                : project.tagColor === "purple"
                                ? "text-violet-700 bg-violet-500/8"
                                : "text-muted bg-heading/[0.04]"
                            }`}
                          >
                            {project.tag}
                          </span>
                        </div>
                      </div>

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

                      {/* Results */}
                      <div className="mt-5 pt-5 border-t border-border-light flex flex-wrap gap-8">
                        {project.results.map((r) => (
                          <div key={r.label}>
                            <div className="text-[22px] font-800 font-heading text-heading tracking-tight">
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
            <a href="/boka" className="premium-btn mt-8 mx-auto">
              <span>Boka kostnadsfri genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
