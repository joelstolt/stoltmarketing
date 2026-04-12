"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Search,
  Megaphone,
  BrainCircuit,
  MapPin,
} from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";

const services = [
  {
    icon: Code,
    title: "Hemsida",
    desc: "Moderna, snabba webbplatser och e-handel som konverterar besökare till kunder.",
    href: "/helsingborg/hemsida",
    price: "Från 3 900 kr",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Bättre synlighet på Google så att lokala kunder hittar dig först.",
    href: "/helsingborg/seo",
    price: "Från 3 900 kr",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    desc: "Riktad annonsering som ger fler samtal, förfrågningar och besök direkt.",
    href: "/helsingborg/google-ads",
    price: "Från 3 900 kr/mån",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    desc: "Automatisera offerter, kundtjänst och arbetsflöden med AI-verktyg.",
    href: "/helsingborg/ai-automation",
    price: "Pris efter behov",
  },
];

const nearbyAreas = [
  "Helsingborg",
  "Ramlösa",
  "Gantofta",
  "Mölle",
  "Pålsjö",
  "Laröd",
  "Tågarp",
  "Allerum",
  "Köpinge",
  "Ängelholm",
];

export default function HelsingborgContent() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Helsingborg" },
        ]}
        badge="Helsingborg"
        title="Digital partner för företag i Helsingborg."
        subtitle="Jag hjälper lokala företag i Skånes näststörsta stad att synas online, få fler kunder och automatisera. Med erfarenhet från den dynamiska Helsingborg-marknaden och starkt startups-ekosystem."
        bullets={[
          "10+ års erfarenhet",
          "Lokal marknadskunskap",
          "Allt från webb till AI",
        ]}
      />

      {/* ═══ TJÄNSTER ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Tjänster"
            title="Allt ditt företag behöver — på ett ställe."
            subtitle="Hemsida, synlighet på Google, annonsering och AI-automation. Du får en kontaktperson för allt."
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06 + 0.1}>
                <a
                  href={s.href}
                  className="block bg-surface rounded-[16px] border border-border p-7 h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-[10px] bg-primary/6 flex items-center justify-center">
                      <s.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-[13px] font-600 text-primary">
                      {s.price}
                    </span>
                  </div>
                  <h3 className="font-heading font-700 text-[18px] text-heading group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-body leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-[14px] font-600 text-primary">
                    Läs mer
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VARFÖR LOKAL ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Lokal fördel"
            title="Fördelarna med en lokal digital partner."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: "Vi kan ses på plats",
                  desc: "Personliga möten i Helsingborg när det behövs. Direktkontakt istället för remote-only-lösningar.",
                },
                {
                  title: "Jag förstår din marknad",
                  desc: "Helsingborg är en hamn- och industri-stad med växande teknik-sektor. Jag vet vad som fungerar här.",
                },
                {
                  title: "Snabb kommunikation",
                  desc: "En kontaktperson som svarar direkt. Inte en byrå med kö och ärendenummer.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface rounded-[16px] border border-border p-6"
                >
                  <h3 className="font-heading font-700 text-[16px] text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ SERVICEOMRÅDE ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Serviceområde"
            title="Digital byrå för västra Skåne."
            subtitle="Baserad i Skåne — jobbar med företag i Helsingborg, Danmark-närområdet och hela Sverige."
          />
          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap gap-3">
              {nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="text-[14px] font-500 text-body bg-surface border border-border px-4 py-2 rounded-lg"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-12 grid sm:grid-cols-3 gap-8">
              <div className="bg-surface rounded-[16px] border border-border p-6">
                <div className="text-[32px] font-800 font-heading text-heading tracking-tight">
                  150+
                </div>
                <div className="text-[14px] text-muted mt-1">
                  Levererade projekt
                </div>
              </div>
              <div className="bg-surface rounded-[16px] border border-border p-6">
                <div className="text-[32px] font-800 font-heading text-heading tracking-tight">
                  10+ år
                </div>
                <div className="text-[14px] text-muted mt-1">
                  Erfarenhet av digital strategi
                </div>
              </div>
              <div className="bg-surface rounded-[16px] border border-border p-6">
                <div className="text-[32px] font-800 font-heading text-heading tracking-tight">
                  Startupsekosystem
                </div>
                <div className="text-[14px] text-muted mt-1">
                  Webbutveckling för växande företag
                </div>
              </div>
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
              Redo att ta nästa steg?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri genomgång så pratar vi igenom hur jag kan
              hjälpa ditt företag i Helsingborg.
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
