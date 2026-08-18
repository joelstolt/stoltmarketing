"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Globe,
  Cpu,
  Search,
  Shield,
  Megaphone,
  Plus,
  MessageCircle,
  FileText,
  Rocket,
  ShoppingCart,
  LayoutTemplate,
  Accessibility,
} from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";

/* ── Service data ── */
const services = [
  {
    icon: Globe,
    title: "Webb som konverterar",
    subtitle:
      "Ny webbplats eller ombyggnad med fokus på tydlighet, förtroende och fler förfrågningar.",
    when: "När du behöver en modern webbnärvaro som faktiskt ger resultat.",
    expect: [
      "Fler bokningar och förfrågningar",
      "Tydligare budskap mot rätt målgrupp",
      "Snabb och enkel upplevelse",
    ],
    includes: [
      "Informationsstruktur",
      "Design och copy",
      "Bygg och lansering",
    ],
    stats: [
      { value: "150+", label: "Levererade webbprojekt" },
      { value: "24h", label: "Svarslöfte på vardagar" },
    ],
    href: "/tjanster/webbutveckling",
  },
  {
    icon: Cpu,
    title: "AI & Automation som sparar tid",
    subtitle:
      "Implementera AI-verktyg och automatiserade flöden som faktiskt gör skillnad i din vardag.",
    when: "När du vill sluta lägga tid på repetitiva uppgifter.",
    expect: [
      "Automatiserade arbetsflöden",
      "AI-chatbot för kundtjänst",
      "Snabbare offerter och dokument",
    ],
    includes: [
      "Behovsanalys",
      "Implementering & setup",
      "Utbildning & uppföljning",
    ],
    stats: [
      { value: "1", label: "Egen AI SaaS-produkt" },
      { value: "45s", label: "Offert via AI (Kvota.se)" },
    ],
    href: "/tjanster/ai-automation",
  },
  {
    icon: Search,
    title: "Söksynlighet som håller",
    subtitle:
      "Vi gör det enkelt för rätt kunder att hitta dig och förstå ditt erbjudande.",
    when: "När du vill växa organiskt utan att vara beroende av annonser.",
    expect: [
      "Mer relevant trafik",
      "Högre andel förfrågningar från webben",
      "Bättre synlighet lokalt och nationellt",
    ],
    includes: [
      "Teknisk SEO-audit",
      "Sökordsanalys & strategi",
      "Löpande optimering",
    ],
    stats: [
      { value: "10+", label: "Års SEO-erfarenhet" },
      { value: "150+", label: "Projekt med SEO-fokus" },
    ],
    href: "/tjanster/seo",
  },
  {
    icon: Megaphone,
    title: "Google Ads som ger avkastning",
    subtitle:
      "Riktad annonsering som ger fler samtal och förfrågningar direkt — utan att vänta på organisk ranking.",
    when: "När du vill ha fler kunder nu och inte kan vänta på SEO.",
    expect: [
      "Fler samtal och förfrågningar",
      "Synlighet samma vecka",
      "Mätbar avkastning på varje krona",
    ],
    includes: [
      "Sökordsanalys & kampanjstrategi",
      "Annonstext & optimering",
      "Transparent rapportering",
    ],
    stats: [
      { value: "2 990", label: "kr/mån i Spets, allt ingår" },
      { value: "7d", label: "Till första resultaten" },
    ],
    href: "/tjanster/google-ads",
  },
  {
    icon: ShoppingCart,
    title: "E-handel som säljer",
    subtitle:
      "WooCommerce-butiker som laddar snabbt, konverterar och är enkla att driva.",
    when: "När du vill sälja online — eller har en butik som inte konverterar.",
    expect: [
      "Fler köp och högre snittorder",
      "Snabb, smidig checkout",
      "Klarna, Swish och kort",
    ],
    includes: [
      "WooCommerce-bygge",
      "Betal- & fraktlösningar",
      "SEO för produktsidor",
    ],
    stats: [
      { value: "1 990", label: "kr/mån med butik" },
      { value: "100%", label: "Du äger butiken" },
    ],
    href: "/tjanster/e-handel",
  },
  {
    icon: LayoutTemplate,
    title: "WordPress-hemsidor",
    subtitle:
      "Snabba, säkra WordPress-sidor du enkelt uppdaterar själv — utan WP-långsamheten.",
    when: "När du vill ha ett flexibelt CMS du kan sköta själv.",
    expect: [
      "Du uppdaterar enkelt själv",
      "Snabb och säker sajt",
      "SEO-optimerad från start",
    ],
    includes: [
      "WordPress & WooCommerce",
      "Säkerhet & backup",
      "Drift ingår i månadspriset",
    ],
    stats: [
      { value: "10+", label: "Års WP-erfarenhet" },
      { value: "1 190", label: "kr/mån, allt ingår" },
    ],
    href: "/tjanster/wordpress",
  },
  {
    icon: Shield,
    title: "Drift och hosting utan stress",
    subtitle:
      "Jag tar ansvar för att sidan fungerar, är uppdaterad och redo när du behöver den.",
    when: "När du vill slippa tekniska avbrott och osäkerhet.",
    expect: [
      "Färre driftstopp",
      "Snabbare hjälp vid ändringar",
      "Trygg vardag för teamet",
    ],
    includes: [
      "Hosting och uppdateringar",
      "Backup och återställning",
      "Support och förbättringsförslag",
    ],
    stats: [
      { value: "24h", label: "Svarslöfte på vardagar" },
      { value: "1 190", label: "kr/mån, allt ingår" },
    ],
    href: "/tjanster/managed-hemsida",
  },
  {
    icon: Accessibility,
    title: "Tillgänglighet & EAA",
    subtitle:
      "Tillgänglighetskraven är lag sedan juni 2025. Jag granskar sajten mot WCAG 2.1 AA och åtgärdar bristerna till fast pris.",
    when: "När du säljer till konsumenter digitalt, eller vill att sajten ska fungera för fler.",
    expect: [
      "Prioriterad rapport utan jurist-svenska",
      "Genomförda fixar med dokumentation",
      "Färre tappade besökare",
    ],
    includes: [
      "Granskning: automatisk + manuell",
      "Åtgärdspaket till fast pris",
      "Ombygge när det är smartare vägen",
    ],
    stats: [
      { value: "4 900", label: "kr, granskning med rapport" },
      { value: "100/100", label: "Tillgänglighet i våra byggen" },
    ],
    href: "/tillganglighet",
  },
];

/* ── Pricing data ── */
const packages = [
  {
    name: "Bas",
    for: "För enmansfirman",
    price: "0 kr start, 1 190 kr/mån",
    desc: "Komplett hemsida som gör dig hittad i din ort, utan att du behöver tänka på tekniken.",
    features: [
      "Hemsida med upp till fem sidor",
      "Snabb, mobilanpassad design",
      "Sökordsgrunden lagd för din huvudort",
      "Koppling till din Google Företagsprofil",
      "Hosting, säkerhet, SSL och backuper",
      "Domän och mejladress på den",
      "Ändringar klara inom två arbetsdagar",
    ],
  },
  {
    name: "Bredd",
    for: "För företag med flera tjänster",
    price: "0 kr start, 1 990 kr/mån",
    desc: "För dig som säljer mer än en tjänst och vill synas på fler sökningar än en.",
    featured: true,
    badge: "Här landar de flesta",
    features: [
      "Allt i Bas, och:",
      "Upp till tolv sidor, en per tjänst",
      "Formgiven från vitt papper, ingen mall",
      "Strukturerad märkning som Google och AI-sök läser",
      "Sökord för din ort och kommunerna runt om",
      "Flera mejladresser (info@, namn@)",
      "SEO-rapport varje månad",
      "Ändringar klara inom ett dygn",
    ],
  },
  {
    name: "Spets",
    for: "För dig som vill äga din marknad",
    price: "0 kr start, 2 990 kr/mån",
    desc: "Sajten jobbar dygnet runt: AI-assistent, Google Ads och nytt innehåll varje månad.",
    features: [
      "Allt i Bredd, och:",
      "AI-assistent som svarar kunder dygnet runt",
      "Google Ads: uppsättning och löpande skötsel",
      "Obegränsat antal sidor",
      "Egen landningssida för varje ort du jobbar i",
      "Nya sökmotortexter varje månad",
      "Löpande tester på det som ger förfrågningar",
      "Strategisamtal en gång i månaden",
      "Prioriterad support, svar samma dag",
    ],
  },
];

/* ── Processens illustrationer: sådd, växt, skörd i guldlinje ── */
function StegIllustration({ index }) {
  const GULD = "var(--color-accent)";
  const bas = { stroke: GULD, strokeWidth: 1.6, strokeLinecap: "round", fill: "none" };
  return (
    <svg viewBox="0 0 64 56" width="64" height="56" aria-hidden="true">
      <path d="M4 48 H60" {...bas} opacity="0.45" />
      {index === 0 && (
        <>
          <path d="M12 22 Q24 8 40 13" {...bas} opacity="0.9" />
          <path d="M27 48 v-4 M36 48 v-4 M45 48 v-4" {...bas} opacity="0.4" />
          <circle cx="28" cy="27" r="1.9" fill={GULD} />
          <circle cx="37" cy="33" r="1.9" fill={GULD} opacity="0.8" />
          <circle cx="22" cy="36" r="1.9" fill={GULD} opacity="0.6" />
        </>
      )}
      {index === 1 && (
        <>
          <path d="M32 48 V24" {...bas} />
          <path d="M32 34 C26 32 22 26 21 19 C28 21 31 27 32 32" {...bas} opacity="0.9" />
          <path d="M32 28 C38 26 42 20 43 13 C36 15 33 21 32 26" {...bas} opacity="0.9" />
          <circle cx="32" cy="20" r="3" {...bas} />
        </>
      )}
      {index === 2 && (
        <>
          <path d="M20 48 V28 M32 48 V20 M44 48 V28" {...bas} />
          <path d="M20 28 l-4 -5 M20 28 l4 -5 M20 34 l-4 -5 M20 34 l4 -5" {...bas} opacity="0.75" />
          <path d="M32 20 l-4 -5 M32 20 l4 -5 M32 26 l-4 -5 M32 26 l4 -5 M32 32 l-4 -5 M32 32 l4 -5" {...bas} />
          <path d="M44 28 l-4 -5 M44 28 l4 -5 M44 34 l-4 -5 M44 34 l4 -5" {...bas} opacity="0.75" />
        </>
      )}
    </svg>
  );
}

/* ── Steps data ── */
const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Behov och mål",
    desc: "Vi börjar med en kort genomgång. Inom två arbetsdagar har du sedan ett färdigt designförslag att titta på, utan att det kostar något.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Leverans",
    desc: "Gillar du förslaget bygger jag klart, justerar och lanserar med tydliga avstämningar. Betalningen startar först när du sagt kör.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Uppföljning",
    desc: "Vi följer upp resultat och förbättrar löpande, så sajten fortsätter leverera över tid.",
  },
];

/* ── FAQ data ── */
const faqs = [
  {
    q: "Vilken tjänst ska jag börja med?",
    a: "Börja med en kostnadsfri genomgång. Jag visar vad som ger störst effekt först utifrån dina mål och budget.",
  },
  {
    q: "Kan jag kombinera flera tjänster?",
    a: "Absolut. De flesta uppdrag kombinerar webb, SEO och drift. Fördelen med att ha allt hos en konsult är att det hänger ihop — ingen samordning krävs.",
  },
  {
    q: "Hur följer vi upp resultat?",
    a: "Du får månadsrapporter med trafik, sökordspositioner och förbättringsförslag. Allt transparent och begripligt.",
  },
  {
    q: "Binder jag upp mig länge?",
    a: "Nej. Managed hemsida körs månad för månad. Webbprojekt har fast pris och tydlig tidplan. Inga dolda bindningstider.",
  },
];

export default function TjansterContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Tjänster" },
        ]}
        badge="Tjänster"
        title="Webb, SEO, AI och drift. Ett mål: fler kunder från webben."
        subtitle="Jag samlar strategi, design, teknik och drift i en leverans — så du får resultat utan att koordinera flera leverantörer."
        bullets={[
          "Fokus på fler förfrågningar",
          "AI & automation som standard",
          "Ansvar även efter lansering",
        ]}
      />

      {/* ═══ SERVICE BLOCKS ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Erbjudande"
            title="Varje del stöttar din affär — inget onödigt krångel."
            subtitle="Du jobbar direkt med mig och får snabba resultat inom webb, SEO, AI och drift."
          />

          <div className="mt-14 flex flex-col gap-8">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06 + 0.1}>
                <div className="bg-surface rounded-[10px] border border-border p-7 sm:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300">
                  <div className="grid lg:grid-cols-[1fr,320px] gap-8 lg:gap-14">
                    {/* Left */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-[12px] bg-primary/6 flex items-center justify-center">
                          <s.icon size={20} className="text-primary" />
                        </div>
                        <h3 className="font-heading font-700 text-[22px] text-heading tracking-tight">
                          {s.title}
                        </h3>
                      </div>

                      <p className="text-[15px] leading-relaxed text-body">
                        {s.subtitle}
                      </p>

                      <div className="mt-5 text-[13px] font-600 text-muted uppercase tracking-wider">
                        Passar när
                      </div>
                      <p className="mt-1 text-[14px] text-body">{s.when}</p>

                      <div className="mt-5 grid sm:grid-cols-2 gap-4">
                        <div>
                          <div className="text-[13px] font-600 text-muted uppercase tracking-wider mb-2">
                            Du kan förvänta dig
                          </div>
                          {s.expect.map((e) => (
                            <div
                              key={e}
                              className="flex items-start gap-2 text-[14px] text-body mb-1.5"
                            >
                              <Check
                                size={14}
                                className="text-primary flex-shrink-0 mt-0.5"
                                strokeWidth={2.5}
                              />
                              {e}
                            </div>
                          ))}
                        </div>
                        <div>
                          <div className="text-[13px] font-600 text-muted uppercase tracking-wider mb-2">
                            Ingår ofta
                          </div>
                          {s.includes.map((inc) => (
                            <div
                              key={inc}
                              className="flex items-start gap-2 text-[14px] text-body mb-1.5"
                            >
                              <Check
                                size={14}
                                className="text-primary flex-shrink-0 mt-0.5"
                                strokeWidth={2.5}
                              />
                              {inc}
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={s.href}
                        className="inline-flex items-center gap-2 mt-6 text-[14px] font-600 text-primary hover:text-primary-hover transition-colors"
                      >
                        Läs mer
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                    {/* Right — stats */}
                    <div className="flex flex-row lg:flex-col gap-6 lg:gap-8 lg:justify-center lg:border-l lg:border-border-light lg:pl-10">
                      {s.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-[32px] font-600 font-heading text-heading tracking-tight">
                            {stat.value}
                          </div>
                          <div className="text-[13px] text-muted mt-0.5">
                            {stat.label}
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

      {/* ═══ PRICING ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Pris & upplägg"
            title="Tydliga paket utan onödigt krångel."
            subtitle="Välj nivå efter hur snabbt du vill framåt och hur mycket ansvar du vill att jag tar löpande."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-5 items-stretch">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.08 + 0.1}>
                <div className={`relative h-full flex flex-col bg-surface rounded-[10px] border p-7 transition-all duration-300 ${pkg.featured ? "border-primary/40 shadow-[0_4px_24px_rgba(242,194,48,0.08)]" : "border-border shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-primary/15"}`}>
                  {pkg.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-[#191405] text-[11px] font-700 tracking-[0.08em] uppercase px-4 py-1 rounded-full whitespace-nowrap">{pkg.badge}</div>
                  )}
                  <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">{pkg.for}</div>
                  <h3 className="mt-2 font-heading font-700 text-[20px] text-heading">
                    {pkg.name}
                  </h3>
                  <div className="mt-2 font-heading font-600 text-[22px] text-primary tracking-tight">
                    {pkg.price}
                  </div>
                  <p className="mt-3 text-[14px] text-body leading-relaxed">
                    {pkg.desc}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                        <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`/boka?amne=pris&paket=${encodeURIComponent(pkg.name)}`}
                    className="secondary-btn mt-6 w-full justify-center text-[14px]"
                  >
                    Få upplägg och pris
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="mt-8 text-center text-[13.5px] text-muted leading-relaxed max-w-[640px] mx-auto">
              12 månaders inledande avtal, därefter månadsvis. Säljer du på nätet? E-handel med betalningar
              läggs till på valfritt paket för 800 kr/mån. Långsam WordPress? Flytt till modern drift för
              4 900 kr, 0 kr om du samtidigt tecknar 12 månader.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Så går det till"
            title="Du vet alltid vad som händer härnäst."
          />

          <div className="mt-16 grid md:grid-cols-3 gap-8 sm:gap-10 process-falt">
            <div aria-hidden="true" className="process-sol" />
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1 + 0.1}>
                <div>
                  <div className="flex items-end justify-between mb-3">
                    <StegIllustration index={i} />
                    <span className="text-[48px] font-600 font-heading text-primary/10 leading-none">
                      {step.num}
                    </span>
                  </div>
                  <div
                    className="text-[10.5px] font-600 uppercase tracking-[0.28em] text-primary mb-2"
                    style={{ fontFamily: "var(--font-ui)" }}
                  >
                    {["Sådd", "Växt", "Skörd"][i]}
                  </div>
                  <h3 className="font-heading font-700 text-[20px] text-heading tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-body">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader
            badge="Vanliga frågor"
            title="Frågor om tjänster och upplägg."
          />

          <div className="mt-10 flex flex-col">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.04 + 0.1}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="font-heading font-600 text-[15px] sm:text-[16px] text-heading group-hover:text-primary transition-colors duration-200 pr-4">
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
                  <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                        <p className="pb-5 text-[14px] sm:text-[15px] leading-relaxed text-body">
                          {faq.a}
                        </p>
                      </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "transparent",
          }}
        />
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <Reveal>
            <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">
              Osäker på vilket upplägg som passar?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kort genomgång så rekommenderar jag rätt startpunkt
              utifrån dina mål och resurser.
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
