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
import { Reveal, PageHero, SectionHeader } from "@/components/ui";
import CityHubExtra from "@/components/CityHubExtra";
import CityProof from "@/components/CityProof";
import CloseBlock from "@/components/CloseBlock";

const services = [
  {
    icon: Code,
    title: "Hemsida",
    desc: "Moderna, snabba webbplatser och e-handel som konverterar besökare till kunder.",
    href: "/malmo/hemsida",
    price: "0 kr start, 1 190 kr/mån",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Bättre synlighet på Google så att lokala kunder hittar dig först.",
    href: "/malmo/seo",
    price: "Ingår från 1 190 kr/mån",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    desc: "Riktad annonsering som ger fler samtal, förfrågningar och besök direkt.",
    href: "/malmo/google-ads",
    price: "Ingår i Spets, 2 990 kr/mån",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    desc: "Automatisera offerter, kundtjänst och arbetsflöden med AI-verktyg.",
    href: "/malmo/ai-automation",
    price: "Pris efter behov",
  },
];

const nearbyAreas = [
  "Malmö",
  "Västra Hamnen",
  "Burlöv",
  "Lund",
  "Staffanstorp",
  "Svedala",
  "Skurup",
  "Trelleborg",
  "Ystad",
  "Köpenhavn",
];

export default function MalmoContent() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Malmö" },
        ]}
        badge="Malmö"
        title="Webbyrå i Malmö — för växande företag och startups."
        subtitle="Hemsidor, SEO, Google Ads och AI för företag, startups och e-handel i Malmö och Öresundsregionen. Du jobbar direkt med personen som bygger, fast pris, utan byrå-overhead."
        bullets={[
          "10+ års erfarenhet",
          "Malmö-baserad",
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
                  className="block bg-surface rounded-[10px] border border-border p-7 h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300 group"
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

      {/* ═══ VARFÖR VI ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Varför vi"
            title="Fördelarna med en digital partner i Malmö."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                {
                  title: "Vi förstår startups",
                  desc: "Malmö är startup-hub. Jag vet vad växande företag behöver och hur man skalbar digitalt från dag ett.",
                },
                {
                  title: "Lokal marknadskunskap",
                  desc: "Öresund-regionen är Skandinaviens största tech-ekosystem. Jag förstår konkurrensen och kunderna här.",
                },
                {
                  title: "Snabb kommunikation",
                  desc: "En kontaktperson som svarar direkt. Inte en stor byrå med kö och ärendenummer.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-surface rounded-[10px] border border-border p-6"
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
            title="Digital byrå för Öresund-regionen."
            subtitle="Baserad i Malmö, jobbar med företag lokalt och i hela Skandinavien."
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
              <div className="bg-surface rounded-[10px] border border-border p-6">
                <div className="text-[32px] font-600 font-heading text-heading tracking-tight">
                  150+
                </div>
                <div className="text-[14px] text-muted mt-1">
                  Levererade projekt
                </div>
              </div>
              <div className="bg-surface rounded-[10px] border border-border p-6">
                <div className="text-[32px] font-600 font-heading text-heading tracking-tight">
                  10+ år
                </div>
                <div className="text-[14px] text-muted mt-1">
                  Erfarenhet av digital strategi
                </div>
              </div>
              <div className="bg-surface rounded-[10px] border border-border p-6">
                <div className="text-[32px] font-600 font-heading text-heading tracking-tight">
                  Malmö 2040
                </div>
                <div className="text-[14px] text-muted mt-1">
                  Webbutveckling för växande region
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CityProof city="malmo" />
      <CityHubExtra city="malmo" />
      <CloseBlock
        title="Redo att ta nästa steg?"
        text="15–20 min. Vi pratar igenom hur jag kan hjälpa ditt företag i Malmö."
      />
    </>
  );
}
