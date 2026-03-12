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
  Plus,
  MessageCircle,
  FileText,
  Rocket,
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
      { value: "70+", label: "Levererade webbprojekt" },
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
      { value: "70+", label: "Projekt med SEO-fokus" },
    ],
    href: "/tjanster/seo",
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
      { value: "390", label: "kr/mån från" },
    ],
    href: "/tjanster/managed-hemsida",
  },
];

/* ── Pricing data ── */
const packages = [
  {
    name: "Webbstart",
    price: "Från 3 900 kr",
    desc: "Ny webbplats med fokus på tydlig kundresa och konvertering.",
  },
  {
    name: "Tillväxtpaket",
    price: "Från 7 900 kr",
    desc: "Webb + SEO + AI-verktyg för dig som vill växa snabbare.",
  },
  {
    name: "Trygg drift",
    price: "Från 390 kr/mån",
    desc: "Hosting, underhåll och löpande förbättring i ett månadspaket.",
  },
];

/* ── Steps data ── */
const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Behov och mål",
    desc: "Vi börjar med en kort genomgång och prioriterar vad som ger snabbast effekt.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Leverans",
    desc: "Jag bygger, justerar och lanserar med tydliga avstämningar så du kan följa varje steg.",
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
                <div className="bg-surface rounded-[20px] border border-border p-7 sm:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300">
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
                          <div className="text-[32px] font-800 font-heading text-heading tracking-tight">
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

          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.08 + 0.1}>
                <div className="h-full bg-surface rounded-[20px] border border-border p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300">
                  <h3 className="font-heading font-700 text-[18px] text-heading">
                    {pkg.name}
                  </h3>
                  <div className="mt-2 font-heading font-800 text-[24px] text-primary tracking-tight">
                    {pkg.price}
                  </div>
                  <p className="mt-3 text-[14px] text-body leading-relaxed">
                    {pkg.desc}
                  </p>
                  <a
                    href="/#kontakt"
                    className="secondary-btn mt-6 w-full justify-center text-[14px]"
                  >
                    Få upplägg och pris
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Så går det till"
            title="Du vet alltid vad som händer härnäst."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8 sm:gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1 + 0.1}>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-[14px] bg-primary/6 flex items-center justify-center">
                      <step.icon size={22} className="text-primary" />
                    </div>
                    <span className="text-[48px] font-800 font-heading text-primary/10 leading-none">
                      {step.num}
                    </span>
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
            <a href="/#kontakt" className="premium-btn mt-8 mx-auto">
              <span>Boka kostnadsfri genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
