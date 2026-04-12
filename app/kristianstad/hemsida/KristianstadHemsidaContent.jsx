"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Plus,
  MapPin,
  Smartphone,
  Gauge,
  Search,
  Users,
  Palette,
  Star,
} from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";

/* ── Lokala signaler ── */
const nearbyAreas = [
  "Kristianstad",
  "Pjätteryd",
  "Åhus",
  "Bromölla",
  "Degeberga",
  "Everöd",
  "Vollsjö",
  "Sjöbo",
  "Hässleholm",
];

const features = [
  {
    icon: Palette,
    title: "Design som speglar ditt företag",
    desc: "Professionell design med tydlig kundresa — anpassad för att bygga förtroende hos lokala kunder i Kristianstad.",
  },
  {
    icon: Smartphone,
    title: "Mobilanpassad som standard",
    desc: "Över 70 % av lokala sökningar sker på mobilen. Din sajt fungerar perfekt på alla enheter.",
  },
  {
    icon: Gauge,
    title: "Blixtsnabb laddning",
    desc: "Snabba sajter rankar högre på Google och ger bättre upplevelse. Core Web Vitals i fokus.",
  },
  {
    icon: Search,
    title: "SEO-grund från start",
    desc: "Rätt sidstruktur, meta-data och innehål så att du syns när någon söker på din bransch i Kristianstad.",
  },
  {
    icon: Users,
    title: "Gjord för att konvertera",
    desc: "Tydliga kontaktvägar, CTA:er och förtroendemarkörer — inte bara snygg utan effektiv.",
  },
  {
    icon: MapPin,
    title: "Lokal närvaro, personlig kontakt",
    desc: "Jag sitter i Skåne och har nära till Kristianstad. Du får en fast kontaktperson — inte ett callcenter eller en AI-chattbot.",
  },
];

const faqs = [
  {
    q: "Varför välja en lokal webbyrå i Kristianstad?",
    a: "Du får personlig kontakt med den som faktiskt bygger din sajt. Jag förstår den lokala marknaden i Kristianstad-området och du slipper mellanhänder. Resultatet? Snabbare leverans, bättre kommunikation och en sajt som faktiskt passar ditt företag.",
  },
  {
    q: "Vad kostar det att bygga en hemsida?",
    a: "En företagssajt börjar från 3 900 kr med fast pris. Behöver du e-handel eller mer avancerade funktioner ligger det från 7 900 kr. Inga dolda kostnader — du vet exakt vad du betalar innan vi börjar.",
  },
  {
    q: "Hur lång tid tar det?",
    a: "En enklare företagssajt tar 2–4 veckor. Du får se en demo innan du betalar ett öre, och vi har löpande kontakt under hela processen.",
  },
  {
    q: "Bygger du i WordPress eller något annat?",
    a: "Jag rekommenderar teknik efter dina behov. WordPress och WooCommerce för e-handel och sidor du vill redigera själv. Next.js och React för maximal prestanda och moderna sajter. Du får alltid en ärlig rekommendation.",
  },
  {
    q: "Kan ni hjälpa företag utanför Kristianstad?",
    a: "Absolut. Jag jobbar med företag i hela Skåne och Sverige — Hässleholm, Helsingborg, Malmö, Lund och övriga landet. Men det är extra smidigt för företag i Kristianstad-området eftersom geografin är bra.",
  },
  {
    q: "Vad händer efter lansering?",
    a: "Jag erbjuder managed hemsida-paket från 390 kr/mån där jag sköter uppdateringar, säkerhet och support. Eller så tar du över sajten själv — du äger alltid koden.",
  },
];

export default function KristianstadHemsidaContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Kristianstad", href: "/kristianstad" },
          { label: "Hemsida" },
        ]}
        badge="Hemsida Kristianstad"
        title="Professionell hemsida för företag i Kristianstad."
        subtitle="Du behöver inte en stor byrå i Malmö — du behöver en webbplats som ger resultat. Jag bygger snabba, moderna sajter åt lokala företag med fokus på att dina kunder hittar dig och tar kontakt."
        bullets={[
          "Från 3 900 kr",
          "Klar på 2–4 veckor",
          "Nära kontakt från Skåne",
        ]}
      />

      {/* ═══ VARFÖR LOKAL PARTNER ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Lokal partner"
            title="Varför företag i Kristianstad väljer mig."
            subtitle="En sajt är inte bara design — det är ditt viktigaste säljverktyg. Jag ser till att den faktiskt levererar."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                "Du syns inte på Google idag och tappar kunder till konkurrenterna.",
                "Din nuvarande sajt är långsam, ser daterad ut eller fungerar dåligt på mobilen.",
                "Du vill ha fler förfrågningar, bokningar eller besök från webben.",
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
            title="Allt du behöver — i en leverans."
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
            title="Tydliga paket. Fast pris."
            subtitle="Samma pris oavsett om du sitter i centrala Kristianstad eller Åhus."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                name: "Webbstart",
                price: "Från 3 900 kr",
                desc: "Professionell företagssajt med tydlig kundresa, responsiv design och SEO-grund. Perfekt för hantverkare, frisörer, restauranger och andra lokala företag.",
              },
              {
                name: "Webb + E-handel",
                price: "Från 7 900 kr",
                desc: "Fullskalig sajt med WooCommerce, betalningslösningar, produkthantering och AI-verktyg. För dig som säljer produkter eller tjänster online.",
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
                    Få upplägg och pris
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
            title="Hemsidor för företag i nordöstra Skåne."
            subtitle="Jag jobbar med företag i Kristianstad, Åhus, Bromölla och hela Sverige."
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
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="bg-surface rounded-[16px] border border-border p-6">
                <div className="text-[32px] font-800 font-heading text-heading tracking-tight">
                  150+
                </div>
                <div className="text-[14px] text-muted mt-1">
                  Levererade webbprojekt
                </div>
              </div>
              <div className="bg-surface rounded-[16px] border border-border p-6">
                <div className="text-[32px] font-800 font-heading text-heading tracking-tight">
                  10+ år
                </div>
                <div className="text-[14px] text-muted mt-1">
                  Erfarenhet av webbutveckling och digital strategi
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader
            badge="Vanliga frågor"
            title="Frågor om hemsidor i Kristianstad."
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
              Redo för en hemsida som ger resultat?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri genomgång så tar vi fram ett förslag anpassat
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
