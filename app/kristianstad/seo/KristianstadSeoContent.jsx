"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Plus,
  Search,
  BarChart3,
  MapPin,
  FileSearch,
  Gauge,
  Link2,
  Star,
} from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";

const nearbyAreas = [
  "Kristianstad",
  "Åhus",
  "Bromölla",
  "Degeberga",
  "Everöd",
  "Hässleholm",
  "Sjöbo",
];

const features = [
  {
    icon: FileSearch,
    title: "Teknisk SEO-audit",
    desc: "Fullständig genomgång av crawl-fel, laddtider, indexering och tekniska brister som hindrar din ranking.",
  },
  {
    icon: Search,
    title: "Sökordsanalys för Kristianstad",
    desc: "Identifiera vilka sökord som lokala kunder använder och prioritera rätt sidor för din bransch.",
  },
  {
    icon: MapPin,
    title: "Lokal SEO & Google Maps",
    desc: "Syns i kartresultaten när någon söker din tjänst i Kristianstad. Google Business Profile-optimering ingår.",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals",
    desc: "Snabbare sajt ger bättre ranking och bättre upplevelse för besökare från mobilen.",
  },
  {
    icon: BarChart3,
    title: "Uppföljning & rapporter",
    desc: "Månadsrapporter med positioner, trafik och konkreta åtgärder. Du ser exakt vad som händer.",
  },
  {
    icon: Link2,
    title: "Intern länkstruktur",
    desc: "Optimera hur dina sidor kopplas ihop för bättre crawlning och starkare topikauktoritet.",
  },
];

const faqs = [
  {
    q: "Vad kostar SEO i Kristianstad?",
    a: "En SEO-audit börjar från 3 900 kr. Löpande SEO-arbete ingår i managed hemsida från 790 kr/mån. Större SEO-projekt prissätts efter scope — du får alltid ett fast pris innan vi börjar.",
  },
  {
    q: "Hur lång tid tar det att se resultat?",
    a: "Tekniska förbättringar syns ofta inom veckor. Sökordspositioner tar vanligtvis 2–6 månader att förbättra märkbart. Du får månadsrapporter så du ser framstegen hela vägen.",
  },
  {
    q: "Kan ni hjälpa med lokal SEO i Kristianstad?",
    a: "Absolut — det är en av mina styrkor. Google Business Profile, lokala sökord, Google Maps-synlighet och recensionsstrategi. Fungerar för alla branscher i Kristianstad-området.",
  },
  {
    q: "Jobbar ni med Google Ads också?",
    a: "Ja, jag erbjuder Google Ads som separat tjänst. Ofta fungerar SEO och Ads bäst tillsammans — organisk synlighet långsiktigt plus annonser för omedelbar synlighet.",
  },
  {
    q: "Vad händer om jag redan har en sajt?",
    a: "Då börjar vi med en SEO-audit för att identifiera brister och möjligheter. Jag optimerar din befintliga sajt — du behöver inte bygga om allt från grunden.",
  },
  {
    q: "Varför välja en lokal SEO-konsult?",
    a: "Jag förstår den lokala marknaden i nordöstra Skåne. Jag vet vilka sökord som fungerar, vilka konkurrenter du har, och kan ses på plats för genomgångar.",
  },
];

export default function KristianstadSeoContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Kristianstad", href: "/kristianstad" },
          { label: "SEO" },
        ]}
        badge="SEO Kristianstad"
        title="Bli synlig på Google i Kristianstad — utan att vänta på stora resultat senare."
        subtitle="Lokala kunder söker redan efter det du erbjuder. Frågan är: syns du? Jag fixar SEO för att dina potentiella kunder hittar dig först — före konkurrenterna."
        bullets={[
          "Från 3 900 kr",
          "Resultat på 2–6 mån",
          "Lokal expertise",
        ]}
      />

      {/* ═══ VARFÖR LOKAL PARTNER ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Lokal partner"
            title="Varför företag i Kristianstad väljer lokal SEO."
            subtitle="SEO är långsiktigt arbete — det behövs någon som förstår din marknad och kan ses på plats."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                "Du syns inte när folk söker på Google — konkurrenterna tar kunderna.",
                "Din sajt är inte optimerad för lokala sökningar och Google Maps.",
                "Du vill ha en lokal strategi anpassad för Kristianstad-marknaden.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="bg-surface rounded-[16px] border border-border p-6"
                >
                  <Check
                    size={18}
                    className="text-primary mb-3"
                    strokeWidth={2.5}
                  />
                  <p className="text-[15px] text-body leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ VAD INGÅR ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Vad ingår"
            title="Helhetsstrategi för SEO-framgång."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06 + 0.1}>
                <div className="bg-surface rounded-[16px] border border-border p-6 h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-[10px] bg-primary/6 flex items-center justify-center mb-4">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-700 text-[16px] text-heading">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-body leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESSEN ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Processen"
            title="Så jobbar vi med SEO."
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              {
                step: "1",
                title: "Audit",
                desc: "Genomgång av din nuvarande sajt, tekniska brister, konkurrentanalys och sökordsstrategi.",
              },
              {
                step: "2",
                title: "Optimering",
                desc: "Vi fixar tekniken, innehållet och länkstrukturen. Google Business Profile optimeras för lokal synlighet.",
              },
              {
                step: "3",
                title: "Rapportering",
                desc: "Månadsrapporter med ranking, trafik och konkreta nästa steg. Du ser framstegen varje månad.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08 + 0.1}>
                <div className="bg-surface rounded-[16px] border border-border p-7">
                  <div className="w-10 h-10 rounded-[10px] bg-primary/10 flex items-center justify-center mb-4">
                    <span className="font-heading font-700 text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-heading font-700 text-[18px] text-heading">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRISER ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Pris"
            title="Transparent och rättvist."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                name: "SEO-Audit",
                price: "Från 3 900 kr",
                desc: "Fullständig granskning av din sajt, konkurrenter och möjligheter. Du får en rapport med konkreta åtgärder.",
              },
              {
                name: "Managed SEO",
                price: "Från 2 490 kr/mån",
                desc: "Löpande SEO-arbete: rapportering, optimering, och strategi. Kan kombineras med vår managed hemsida-tjänst.",
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08 + 0.1}>
                <div className="bg-surface rounded-[16px] border border-border p-7">
                  <h3 className="font-heading font-700 text-[18px] text-heading">
                    {p.name}
                  </h3>
                  <div className="mt-2 font-heading font-800 text-[24px] text-primary tracking-tight">
                    {p.price}
                  </div>
                  <p className="mt-3 text-[14px] text-body leading-relaxed">
                    {p.desc}
                  </p>
                  <a
                    href="/boka"
                    className="secondary-btn mt-5 w-full justify-center text-[14px]"
                  >
                    Diskutera strategi
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOKALT OMRÅDE ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Serviceområde"
            title="SEO för företag i nordöstra Skåne."
            subtitle="Jag hjälper företag i Kristianstad, Åhus, Bromölla och övriga Skåne att synas på Google."
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
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader
            badge="Vanliga frågor"
            title="SEO i Kristianstad."
          />
          <div className="mt-10 flex flex-col">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.04 + 0.1}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="font-heading font-600 text-[15px] sm:text-[16px] text-heading group-hover:text-primary transition-colors pr-4">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-muted"
                    >
                      <Plus size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-[14px] sm:text-[15px] leading-relaxed text-body">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
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
              Redo att bli synlig på Google?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri SEO-genomgång så visar jag vad som är möjligt
              för ditt företag i Kristianstad.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a
              href="/boka"
              className="premium-btn mt-8 mx-auto"
            >
              <span>Boka kostnadsfri genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
