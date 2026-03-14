"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Plus,
  Bot,
  FileText,
  Zap,
  MessageSquare,
  BrainCircuit,
  Workflow,
  MapPin,
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
    icon: Bot,
    title: "AI-chatbotar",
    desc: "Svara kunder dygnet runt med en chatbot som förstår ditt företag, dina tjänster och priser.",
  },
  {
    icon: FileText,
    title: "Automatiserade offerter",
    desc: "Från röstinspelning eller formulär till färdig PDF-offert på under en minut. Byggt och bevisat med Kvota.se.",
  },
  {
    icon: Zap,
    title: "Arbetsflödesautomation",
    desc: "Automatisera fakturering, uppföljning, rapporter och andra repetitiva uppgifter som äter tid.",
  },
  {
    icon: MessageSquare,
    title: "AI-drivet innehåll",
    desc: "Generera produkttexter, blogginlägg och marknadsföringsmaterial snabbare och mer konsekvent.",
  },
  {
    icon: BrainCircuit,
    title: "Behovsanalys & rådgivning",
    desc: "Jag identifierar var AI ger mest nytta i just din verksamhet — inte bara det som är trendigt.",
  },
  {
    icon: Workflow,
    title: "Integration & setup",
    desc: "Koppla ihop AI-verktyg med dina befintliga system, CRM och arbetsflöden. Allt ska fungera ihop.",
  },
];

const faqs = [
  {
    q: "Vad kostar AI-automation för mitt företag?",
    a: "Det varierar beroende på omfattning. En enkel chatbot kan ingå i ett webbprojekt. Större automationslösningar prissätts efter scope — du får alltid ett fast pris innan vi börjar.",
  },
  {
    q: "Behöver jag teknisk kunskap?",
    a: "Nej. Jag bygger och sätter upp allt. Du får enkla verktyg som fungerar utan att du behöver förstå tekniken bakom.",
  },
  {
    q: "Vad är Kvota.se?",
    a: "Min egen AI-drivna SaaS-produkt — en offertgenerator för hantverkare. Du pratar in vad jobbet gäller, och AI:n genererar en komplett offert med poster, priser och villkor. Det är mitt bevis på att jag inte bara pratar om AI, utan bygger det på riktigt.",
  },
  {
    q: "Vilka företag i Hässleholm passar AI för?",
    a: "Alla som lägger tid på repetitiva uppgifter. Hantverkare som skriver offerter, företag som svarar på samma kundfrågor, restauranger som tar bokningar, butiker som behöver produkttexter. AI passar de flesta branscher.",
  },
  {
    q: "Hur kommer vi igång?",
    a: "Vi börjar med en kostnadsfri genomgång där jag lyssnar på dina utmaningar. Sedan identifierar jag var AI kan göra störst skillnad och ger ett konkret förslag med fast pris.",
  },
  {
    q: "Är det säkert med AI och kunddata?",
    a: "Ja. Jag väljer verktyg med stark dataskydd och följer GDPR. Du får alltid full koll på hur data hanteras.",
  },
];

export default function HassleHomAiContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Hässleholm", href: "/hassleholm" },
          { label: "AI & Automation" },
        ]}
        badge="AI Hässleholm"
        title="AI-verktyg som sparar tid — för företag i Hässleholm."
        subtitle="Jag har byggt en egen AI-produkt och implementerar AI dagligen. Du får konkreta verktyg som automatiserar offerter, kundtjänst och arbetsflöden — inte bara buzzwords."
        bullets={[
          "Egen AI-produkt (Kvota.se)",
          "Konkreta verktyg",
          "Lokal kontakt",
        ]}
      />

      {/* ═══ PASSAR NÄR ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Passar när"
            title="Du lägger tid på saker en maskin kan göra bättre."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                "Du svarar på samma kundfrågor om och om igen.",
                "Offerter och dokument tar timmar istället för minuter.",
                "Du vill automatisera men vet inte var du ska börja.",
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
            badge="Vad jag erbjuder"
            title="AI-lösningar som gör skillnad på riktigt."
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

      {/* ═══ KVOTA PROOF ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Bevis"
            title="Jag pratar inte bara om AI — jag bygger det."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 bg-surface rounded-[20px] border border-border p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-primary/6 flex items-center justify-center">
                  <FileText size={18} className="text-primary" />
                </div>
                <h3 className="font-heading font-700 text-[20px] text-heading">
                  Kvota.se
                </h3>
              </div>
              <p className="text-[15px] text-body leading-relaxed max-w-[600px]">
                Min egen AI-drivna offertgenerator för hantverkare. Prata in vad
                jobbet gäller — AI:n genererar en komplett offert med poster,
                priser och villkor på under en minut. Byggt från scratch med
                Claude AI, röstinspelning och PDF-export.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href="https://kvota.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn text-[14px]"
                >
                  Besök Kvota.se
                  <ArrowRight size={14} className="opacity-60" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ LOKALT OMRÅDE ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Serviceområde"
            title="AI-konsult i nordöstra Skåne."
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
            title="AI-lösningar jag byggt åt riktiga kunder."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Kvota.se",
                type: "SaaS · AI · Next.js",
                desc: "Egen AI-driven offertgenerator för hantverkare. Prata in vad jobbet gäller — få en proffsig PDF-offert med poster, priser och ROT-avdrag på under en minut.",
                screenshot: "/case-kvota.png",
              },
              {
                title: "Omniway",
                type: "Webb · WCAG · EdTech",
                desc: "Modern webbplats för en lärplattform — byggd med tillgänglighet och modern teknik i fokus. WCAG-anpassad från grunden.",
                screenshot: "/case-omniway.png",
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
                "Tillgänglighet var ett krav — inte en bonus. Joel levererade en modern sajt som uppfyller WCAG utan att kompromissa på design. Snabb kommunikation och han förstod EdTech-branschen direkt."
              </p>
              <div className="mt-5 pt-4 border-t border-border-light flex items-center gap-3">
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #7C3AED, #7C3AEDcc)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14, fontWeight: 700 }}>CL</div>
                <div>
                  <div className="text-[14px] font-600 text-heading">Claudia, Omniway</div>
                  <div className="text-[13px] text-muted">WCAG-anpassad webb</div>
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
            title="Frågor om AI & automation."
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
              Redo att automatisera med AI?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri genomgång så identifierar vi var AI kan spara
              mest tid i ditt företag.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/boka" className="premium-btn mt-8 mx-auto">
              <span>Boka AI-genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
