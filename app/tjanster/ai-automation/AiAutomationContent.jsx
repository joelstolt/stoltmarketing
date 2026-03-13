"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Plus, Bot, FileText, Zap, MessageSquare, BrainCircuit, Workflow } from "lucide-react";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";

const features = [
  { icon: Bot, title: "AI-chatbotar", desc: "Svara kunder dygnet runt med en chatbot som förstår ditt företag och dina tjänster." },
  { icon: FileText, title: "Automatiserade offerter", desc: "Från röstinspelning eller formulär till färdig PDF-offert på under en minut." },
  { icon: Zap, title: "Arbetsflödesautomation", desc: "Automatisera repetitiva uppgifter som fakturering, uppföljning och rapportering." },
  { icon: MessageSquare, title: "AI-drivet innehåll", desc: "Generera produkttexter, blogginlägg och marknadsföringsmaterial snabbare." },
  { icon: BrainCircuit, title: "Behovsanalys & rådgivning", desc: "Jag identifierar var AI ger mest nytta i just din verksamhet." },
  { icon: Workflow, title: "Integration & setup", desc: "Koppla ihop AI-verktyg med dina befintliga system och arbetsflöden." },
];

const faqs = [
  { q: "Vad menar du med AI-lösningar för småföretag?", a: "Konkreta verktyg som sparar tid. Chatbotar som svarar kunder, automatiserade offerter, innehållsgenerering. Jag utgår alltid från ditt faktiska behov — inte hypade trender." },
  { q: "Behöver jag teknisk kunskap?", a: "Nej. Jag bygger och sätter upp allt. Du får enkla verktyg som fungerar utan att du behöver förstå tekniken bakom." },
  { q: "Vad är Kvota.se?", a: "Min egen AI-drivna SaaS-produkt — en offertgenerator för hantverkare. Den är mitt bevis på att jag inte bara pratar om AI, utan bygger det på riktigt." },
  { q: "Vad kostar en AI-implementering?", a: "Det varierar beroende på omfattning. En enkel chatbot kan ingå i ett webbprojekt. Större automationslösningar prissätts efter scope. Boka en genomgång så ger jag ett fast pris." },
];

export default function AiAutomationContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Tjänster", href: "/tjanster" },
          { label: "AI & Automation" },
        ]}
        badge="AI & Automation"
        title="AI-verktyg och automation som faktiskt sparar tid — inte bara buzzwords."
        subtitle="Jag har byggt en egen AI-produkt och implementerar AI dagligen. Du får konkreta lösningar som gör skillnad i din vardag."
        bullets={["Egen AI SaaS-produkt", "Konkreta verktyg, inte trender", "Implementering från start till mål"]}
      />

      {/* ═══ PASSAR NÄR ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Passar när" title="Du vill sluta lägga tid på uppgifter som en maskin kan göra bättre." />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                "Du svarar på samma kundfrågor om och om igen.",
                "Offerter, rapporter och dokument tar för lång tid att ta fram.",
                "Du vill automatisera arbetsflöden men vet inte var du ska börja.",
              ].map((text, i) => (
                <div key={i} className="bg-surface rounded-[16px] border border-border p-6">
                  <Check size={18} className="text-primary mb-3" strokeWidth={2.5} />
                  <p className="text-[15px] text-body leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ VAD INGÅR ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Vad jag erbjuder" title="Från analys till färdig implementation." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06 + 0.1}>
                <div className="bg-surface rounded-[16px] border border-border p-6 h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-[10px] bg-primary/6 flex items-center justify-center mb-4">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-700 text-[16px] text-heading">{f.title}</h3>
                  <p className="mt-2 text-[14px] text-body leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KVOTA PROOF ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Bevis" title="Jag pratar inte bara om AI. Jag bygger det." />
          <Reveal delay={0.14}>
            <div className="mt-10 bg-surface rounded-[20px] border border-border p-7 sm:p-9 max-w-[640px]">
              <div className="text-[12px] font-700 text-primary uppercase tracking-wider mb-3">Eget projekt</div>
              <h3 className="font-heading font-700 text-[22px] text-heading">Kvota.se</h3>
              <p className="mt-3 text-[15px] text-body leading-relaxed">AI-driven offertgenerator för svenska hantverkare. Från röstinspelning till färdig PDF-offert på under en minut. Byggt med Next.js och Claude AI.</p>
              <div className="mt-5 bg-heading/[0.03] rounded-[12px] p-4 font-mono text-[13px] leading-loose">
                <div className="text-muted">// Resultat</div>
                <div><span className="text-primary">offertTid</span><span className="text-muted">: </span><span className="text-amber-600">"45 sekunder"</span></div>
                <div><span className="text-primary">format</span><span className="text-muted">: </span><span className="text-amber-600">"PDF + E-post"</span></div>
                <div><span className="text-primary">status</span><span className="text-muted">: </span><span className="text-emerald-600">"Lanserad ✓"</span></div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "Claude AI", "jsPDF", "Resend"].map((t) => (
                  <span key={t} className="text-[11px] font-600 text-muted bg-heading/[0.03] px-2.5 py-1 rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader badge="Vanliga frågor" title="Frågor om AI & automation." />
          <div className="mt-10 flex flex-col">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.04 + 0.1}>
                <div className="border-b border-border">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-5 text-left group">
                    <span className="font-heading font-600 text-[15px] sm:text-[16px] text-heading group-hover:text-primary transition-colors pr-4">{faq.q}</span>
                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 text-muted"><Plus size={20} /></motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                        <p className="pb-5 text-[14px] sm:text-[15px] leading-relaxed text-body">{faq.a}</p>
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
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(168deg, #EEF2FF 0%, #E0E7FF 40%, #DBEAFE 70%, #EFF6FF 100%)" }} />
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <Reveal><h2 className="font-heading font-800 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.025em] text-heading">Vill du se hur AI kan hjälpa ditt företag?</h2></Reveal>
          <Reveal delay={0.06}><p className="mt-4 text-[16px] leading-relaxed text-body">Boka en genomgång så visar jag konkret var AI ger mest nytta i just din verksamhet.</p></Reveal>
          <Reveal delay={0.12}><a href="/boka" className="premium-btn mt-8 mx-auto"><span>Boka kostnadsfri genomgång</span><ArrowRight size={16} className="opacity-80" /></a></Reveal>
        </div>
      </section>
    </>
  );
}
