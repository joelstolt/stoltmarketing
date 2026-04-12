"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Plus,
  Megaphone,
  Target,
  MapPin,
  TrendingUp,
  Clock,
  DollarSign,
  Star,
} from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";

const nearbyAreas = [
  "Kristianstad",
  "Åhus",
  "Bromölla",
  "Degeberga",
  "Hässleholm",
  "Sjöbo",
];

const features = [
  {
    icon: Target,
    title: "Exakt målgrupp",
    desc: "Vi visar dina annonser bara för folk som söker efter det du erbjuder — ingen slöseri på okvalificerade klick.",
  },
  {
    icon: TrendingUp,
    title: "Optimering från dag ett",
    desc: "Vi testar olika varianter av annonser och landsidor för att hitta vad som ger mest resultat.",
  },
  {
    icon: MapPin,
    title: "Lokal fokus",
    desc: "Google Ads med fokus på Kristianstad och ditt serviceområde. Du når rätt kunder i rätt område.",
  },
  {
    icon: DollarSign,
    title: "Lågt klickpris",
    desc: "God annonsqualityrating = lägre pris per klick = bättre ROI för dina pengar.",
  },
  {
    icon: Clock,
    title: "Snabba resultat",
    desc: "Till skillnad från SEO får du trafik och kontakter redan samma vecka som kampanjen startar.",
  },
  {
    icon: Megaphone,
    title: "Fullständig förvaltning",
    desc: "Vi sköter allt: setup, övervakning, optimering och rapportering. Du behöver bara ge oss budgeten.",
  },
];

const faqs = [
  {
    q: "Vad kostar Google Ads i Kristianstad?",
    a: "Förvaltning börjar från 3 900 kr/mån plus din annonsbudget. Du bestämmer själv hur mycket du vill lägga på klick — från 1 000 kr/mån och uppåt.",
  },
  {
    q: "Hur snabbt ger Google Ads resultat?",
    a: "Du kan börja få samtal och förfrågningar redan samma vecka som kampanjen startar. Det är mycket snabbare än SEO.",
  },
  {
    q: "Behöver jag en bra hemsida för Google Ads?",
    a: "Ja, landsidan är avgörande. En snabb och tydlig sida med bra CTA ger lägre klickpris och fler konverteringar.",
  },
  {
    q: "Vad är skillnaden mellan Google Ads och SEO?",
    a: "Google Ads: omedelbar trafik, du betalar per klick. SEO: långsiktig strategi, gratis trafik men tar tid. Bäst är ofta kombinationen!",
  },
  {
    q: "Kan vi kombinera Google Ads med SEO?",
    a: "Absolut — det är ofta det smartaste. Google Ads för omedelbar synlighet och resultat. SEO för långsiktig organisk trafik.",
  },
  {
    q: "Varför inte göra Google Ads själv?",
    a: "Det verkar enkelt men det är lätt att slösa pengar på dålig optimering. Vi har erfarenhet av vad som fungerar i din bransch och område.",
  },
];

export default function KristianstadAdsContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Kristianstad", href: "/kristianstad" },
          { label: "Google Ads" },
        ]}
        badge="Google Ads Kristianstad"
        title="Fler kunder från Google Ads — från dag ett."
        subtitle="Google Ads är den snabbaste vägen till nya kunder. Du visar upp dina tjänster exakt när någon söker efter dem. Jag hanterar allt — budget, annonser, optimering och rapporter."
        bullets={[
          "Resultat från dag ett",
          "Transparent rapportering",
          "Lokal expertis",
        ]}
      />

      {/* ═══ VARFÖR GOOGLE ADS ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Varför Google Ads"
            title="Google Ads funkar när du behöver resultat nu."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                "Du behöver fler kunder nästa vecka — inte nästa år.",
                "Du vill testa en ny tjänst eller produkt utan att vänta på SEO.",
                "Du har budget för annonsering och vill se konkret ROI.",
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
            title="Fullständig Google Ads-förvaltning."
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
            title="Transparent prissättning. Du bestämmer budgeten."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                name: "Google Ads-forvaltning",
                price: "Från 3 900 kr/mån",
                desc: "Vi sätter upp, optimerar och rapporterar på dina Google Ads-kampanjer. Sätt din egen budget för annonser.",
              },
              {
                name: "Kampanj + Hemsida",
                price: "Från 7 900 kr totalt",
                desc: "Ny hemsida + Google Ads-setup. Perfekt combo för att snabbt få synlighet och resultat.",
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
                    Starta kampanj
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
            title="Google Ads för företag i nordöstra Skåne."
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
            title="Google Ads i Kristianstad."
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
              Redo att få resultat från Google Ads?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri strategisession så visar jag hur Google Ads
              kan ge ditt företag fler kunder.
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
