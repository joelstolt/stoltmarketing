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
  "Hässleholm",
  "Tyringe",
  "Vinslöv",
  "Sösdala",
  "Bjärnum",
  "Kristianstad",
  "Osby",
];

const features = [
  {
    icon: FileSearch,
    title: "Teknisk SEO-audit",
    desc: "Fullständig genomgång av crawl-fel, laddtider, indexering och tekniska brister som hindrar din ranking.",
  },
  {
    icon: Search,
    title: "Sökordsanalys för Hässleholm",
    desc: "Identifiera vilka sökord som lokala kunder använder och prioritera rätt sidor för din bransch.",
  },
  {
    icon: MapPin,
    title: "Lokal SEO & Google Maps",
    desc: "Syns i kartresultaten när någon söker din tjänst i Hässleholm. Google Business Profile-optimering ingår.",
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
    q: "Vad kostar SEO i Hässleholm?",
    a: "En SEO-audit börjar från 3 900 kr. Löpande SEO-arbete ingår i managed hemsida från 790 kr/mån. Större SEO-projekt prissätts efter scope — du får alltid ett fast pris innan vi börjar.",
  },
  {
    q: "Hur lång tid tar det att se resultat?",
    a: "Tekniska förbättringar syns ofta inom veckor. Sökordspositioner tar vanligtvis 2–6 månader att förbättra märkbart. Du får månadsrapporter så du ser framstegen hela vägen.",
  },
  {
    q: "Kan ni hjälpa med lokal SEO i Hässleholm?",
    a: "Absolut — det är en av mina styrkor. Google Business Profile, lokala sökord, Google Maps-synlighet och recensionsstrategi. Fungerar för alla branscher i Hässleholmsområdet.",
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

export default function HassleHomSeoContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Hässleholm", href: "/hassleholm" },
          { label: "SEO" },
        ]}
        badge="SEO Hässleholm"
        title="Syns ditt företag i Hässleholm på Google?"
        subtitle="De flesta kunder börjar med en Google-sökning. Om du inte syns — hittar de dina konkurrenter istället. Jag hjälper lokala företag att ranka högre med teknisk SEO, sökordsanalys och lokal optimering."
        bullets={[
          "Teknisk SEO-audit",
          "Lokal Google Maps-optimering",
          "Mätbar uppföljning",
        ]}
      />

      {/* ═══ PROBLEMET ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Problemet"
            title="Du tappar kunder varje dag utan att veta om det."
            subtitle="Syns du inte på första sidan — finns du inte. Så enkelt är det."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                "Du syns inte när någon googlar din tjänst + Hässleholm.",
                "Konkurrenter med sämre erbjudande rankar ovanför dig.",
                "Du saknar struktur, meta-data och teknisk grund för SEO.",
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
            title="SEO som faktiskt ger resultat."
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

      {/* ═══ PRISER ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Pris"
            title="Tydlig prissättning, inga överraskningar."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                name: "SEO-audit",
                price: "Från 3 900 kr",
                desc: "Engångs-genomgång av teknisk SEO, sökordsanalys, konkurrentanalys och handlingsplan. Perfekt som startpunkt.",
              },
              {
                name: "Löpande SEO",
                price: "Från 790 kr/mån",
                desc: "Kontinuerlig optimering, månadsrapporter och tekniskt underhåll. Ingår i managed hemsida.",
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08 + 0.1}>
                <div className="bg-surface rounded-[16px] border border-border p-7 h-full">
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
                    Boka SEO-genomgång
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOKALT OMRÅDE ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Serviceområde"
            title="Lokal SEO i hela nordöstra Skåne."
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

      {/* ═══ CASE & RESULTAT ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Resultat"
            title="SEO-resultat från riktiga kunder."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "RBN Utbildning",
                type: "Webb · API · SEO",
                desc: "Ny webbplats med sökmotoroptimering från grunden — strukturerad data, teknisk SEO och innehållsstrategi som ger synlighet i rätt sökningar.",
                screenshot: "/case-rbn.png",
              },
              {
                title: "LIA-platsbanken",
                type: "Webbplattform · Next.js",
                desc: "SEO-optimerad plattform för AcadeMedia där studenter och arbetsgivare hittar varandra. Rätt struktur för att ranka på relevanta sökord.",
                screenshot: "/case-lia.png",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08 + 0.1}>
                <div className="group bg-surface rounded-[20px] border border-border overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-400 hover:-translate-y-1">
                  <div className="relative h-[180px] overflow-hidden">
                    <img src={c.screenshot} alt={c.title} className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-[12px] font-600 text-primary">{c.type}</span>
                    <h3 className="mt-1 font-heading font-700 text-[18px] text-heading group-hover:text-primary transition-colors">{c.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-body">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-10 bg-surface rounded-[20px] border border-border p-7 sm:p-9">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="text-[15px] leading-relaxed text-body max-w-[640px]">
                "Vi behövde en helhetsleverans — ny grafisk profil, ny sajt och integration mot våra system. Joel levererade allt under en och samma kontakt. Proffsigt, strukturerat och med en tydlig plan hela vägen."
              </p>
              <div className="mt-5 pt-4 border-t border-border-light flex items-center gap-3">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #EA580C, #EA580Ccc)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 700 }}>RO</div>
                <div>
                  <div className="text-[14px] font-600 text-heading">Robin, RBN Utbildning</div>
                  <div className="text-[13px] text-muted">Ny webb, API-integration & SEO</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-6 text-center">
              <a href="/projekt" className="inline-flex items-center gap-2 text-[15px] font-600 text-primary hover:text-primary-hover transition-colors group">
                Se alla projekt <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader
            badge="Vanliga frågor"
            title="Frågor om SEO i Hässleholm."
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
              Redo att synas på Google i Hässleholm?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri SEO-genomgång så visar jag var du tappar
              synlighet och hur vi fixar det.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/boka" className="premium-btn mt-8 mx-auto">
              <span>Boka SEO-genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
