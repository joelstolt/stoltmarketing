"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Plus,
  Megaphone,
  Target,
  BarChart3,
  MousePointer,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";

const features = [
  {
    icon: Target,
    title: "Sökordsanalys & strategi",
    desc: "Identifiera vilka sökord som driver affär och bygger kampanjer som når rätt personer vid rätt tillfälle.",
  },
  {
    icon: Megaphone,
    title: "Annonstext som konverterar",
    desc: "Skarpa annonser med tydliga erbjudanden, starka CTA:er och relevanta tillägg som ökar klickfrekvensen.",
  },
  {
    icon: MousePointer,
    title: "Landningssidor",
    desc: "Optimerade sidor som matchar annonsen, laddar snabbt och gör det lätt att ta kontakt eller köpa.",
  },
  {
    icon: MapPin,
    title: "Geografisk targeting",
    desc: "Visa annonser bara för personer i ditt serviceområde. Ingen spill på irrelevanta klick.",
  },
  {
    icon: BarChart3,
    title: "Löpande optimering",
    desc: "Budhantering, A/B-testning, negativa sökord och konverteringsspårning. Varje krona ska ge avkastning.",
  },
  {
    icon: TrendingUp,
    title: "Transparent rapportering",
    desc: "Månadsrapporter med klick, konverteringar, kostnad per lead och ROI. Du ser exakt vad du får tillbaka.",
  },
];

const faqs = [
  {
    q: "Vad kostar Google Ads-förvaltning?",
    a: "Förvaltning börjar från 3 900 kr/mån plus din annonsbudget. Annonsbudgeten bestämmer du själv — jag rekommenderar minst 3 000–5 000 kr/mån för att få tillräcklig data att optimera mot.",
  },
  {
    q: "Hur snabbt ger Google Ads resultat?",
    a: "Till skillnad från SEO kan du börja få samtal och förfrågningar redan samma vecka som kampanjen startar. Det tar sedan 2–4 veckor att optimera kampanjerna för bästa resultat.",
  },
  {
    q: "Behöver jag en bra hemsida för Google Ads?",
    a: "Ja — landningssidan är avgörande för resultatet. En snabb, tydlig sida ger lägre klickpris och fler konverteringar. Jag kan bygga en optimerad landningssida om din nuvarande inte håller måttet.",
  },
  {
    q: "Kan ni kombinera Google Ads med SEO?",
    a: "Absolut, och det rekommenderar jag ofta. Ads ger omedelbar synlighet medan SEO bygger långsiktig organisk trafik. Tillsammans täcker du både kortsiktiga och långsiktiga behov.",
  },
  {
    q: "Vilka branscher fungerar Google Ads bra för?",
    a: "Tjänsteföretag där kunder aktivt söker lösningar — hantverkare, tandläkare, redovisningsbyråer, bilverkstäder, e-handel och B2B-företag. Om dina kunder googlar det du säljer, fungerar Ads.",
  },
  {
    q: "Vad händer om det inte fungerar?",
    a: "Vi sätter tydliga mål från start. Om vi inte når dem inom 2–3 månader justerar vi strategi eller pausar kampanjen. Ingen bindningstid — du kan avsluta när som helst.",
  },
];

export default function GoogleAdsContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Tjänster", href: "/tjanster" },
          { label: "Google Ads" },
        ]}
        badge="Google Ads"
        title="Fler kunder med Google Ads — utan att vänta på SEO."
        subtitle="Du behöver inte vänta 6 månader. Med Google Ads syns du direkt när potentiella kunder söker efter det du erbjuder. Jag sätter upp, optimerar och rapporterar — du får fler samtal och förfrågningar."
        bullets={[
          "Resultat redan första veckan",
          "Fast pris på förvaltning",
          "Transparent rapportering",
        ]}
      />

      {/* ═══ PASSAR NÄR ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Passar när"
            title="Du vill nå kunder som aktivt letar efter det du erbjuder."
            subtitle="Google Ads är det snabbaste sättet att synas — men bara om det görs rätt."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                "Du vill ha fler kunder nu — inte om 6 månader.",
                "Du har provat Google Ads själv men tycker det är dyrt utan resultat.",
                "Du vill synas exakt när någon söker din tjänst i ditt område.",
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
            title="Komplett Google Ads-förvaltning."
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
            title="Fast pris på förvaltning. Du styr budgeten."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                name: "Ads Start",
                price: "Från 3 900 kr/mån",
                desc: "Kampanjsetup, sökordsanalys, annonstext, löpande optimering och månadsrapport. Perfekt för tjänsteföretag som vill komma igång.",
              },
              {
                name: "Ads + Landningssida",
                price: "Från 7 900 kr",
                desc: "Allt i Ads Start plus en konverteringsoptimerad landningssida byggd specifikt för din kampanj.",
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
                    Boka Ads-genomgång
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader
            badge="Vanliga frågor"
            title="Frågor om Google Ads."
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
              Redo att nå fler kunder med Google Ads?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri genomgång så tar vi fram en strategi anpassad
              för ditt företag.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/boka" className="premium-btn mt-8 mx-auto">
              <span>Boka Ads-genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
