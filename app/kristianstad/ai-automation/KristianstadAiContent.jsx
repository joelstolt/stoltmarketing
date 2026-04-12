"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Plus,
  BrainCircuit,
  Zap,
  Clock,
  BarChart3,
  MessageSquare,
  Mail,
  Star,
} from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";

const features = [
  {
    icon: Zap,
    title: "Automatisera offerter",
    desc: "Potentiella kunder fyller ett formulär — AI genererar en personlig offert direkt. Ingen manuell jobbning.",
  },
  {
    icon: MessageSquare,
    title: "AI-driven kundtjänst",
    desc: "Chatbot som svarar på vanliga frågor 24/7. Sparar timmar av manuell jobbning varje vecka.",
  },
  {
    icon: Mail,
    title: "E-postautomation",
    desc: "Automatiska uppföljningsmeddelanden till potentiella kunder. Aldrig glöm någon lead igen.",
  },
  {
    icon: Clock,
    title: "Tidsbesparande",
    desc: "Fokusera på det som är viktigt — sälja och bygga relationer. AI hanterar rutinuppgifterna.",
  },
  {
    icon: BarChart3,
    title: "Bättre rapportering",
    desc: "Automatisk datainsamling och analys. Veta exakt vilka leads som är högkvalitativa.",
  },
  {
    icon: BrainCircuit,
    title: "Lärt av din verksamhet",
    desc: "AI anpassas efter dina processer, bransch och kundbeteende. Blir smartare över tid.",
  },
];

const faqs = [
  {
    q: "Vad kostar AI-automation i Kristianstad?",
    a: "Det beror helt på vad du vill automatisera. Enklare automationer börjar från 5 000 kr. Mer komplexa system prissätts efter scope. Vi gör alltid en analys först.",
  },
  {
    q: "Är AI-chatbotar verkligen användbara?",
    a: "Ja — om de är rätt inställda. En chatbot som svarar på 80 % av vanliga frågor sparar enorm tid. De svårare ärendena går till en riktigt person.",
  },
  {
    q: "Kan ni automatisera min specifika process?",
    a: "Vi bygger solutions för många olika branscher. Vi kan nästan alltid automatisera någon del av din process — från offertgenerering till kunduppföljning.",
  },
  {
    q: "Behöver jag IT-kunskap för att använda det?",
    a: "Nej. Vi sätter upp allt och du får instruktioner. Du behöver inte förstå tekniken — bara veta hur du använder det.",
  },
  {
    q: "Vad är skillnaden mellan AI-automation och enkla automationer?",
    a: "Enkla automationer: 'när det hände X, gör Y'. AI-automation: systemet fattar smarta beslut själv, lär sig och anpassar sig.",
  },
  {
    q: "Kan AI ersätta mina anställda?",
    a: "Nej. AI ersätter tidskrävande rutiner, inte människor. Dina anställda kan fokusera på högt värderad, kreativ arbete istället.",
  },
];

export default function KristianstadAiContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Kristianstad", href: "/kristianstad" },
          { label: "AI & Automation" },
        ]}
        badge="AI & Automation Kristianstad"
        title="Spara timmar varje vecka med AI och automation."
        subtitle="Låt AI hantera offerter, kundtjänst och uppföljning. Du fokuserar på tillväxt. Anpassade lösningar för företag i Kristianstad."
        bullets={[
          "Sparar tid dagligen",
          "Bättre resultat",
          "Kostnadssparand",
        ]}
      />

      {/* ═══ VARFÖR AI-AUTOMATION ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Varför automation"
            title="Dina anställda gör ju redan det här..."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                "Skriver samma svar på samma frågor varje dag.",
                "Manuell rapportering av data från olika system.",
                "Glömmer bort att följa upp på leads och samtal.",
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
            title="AI och automation på dina villkor."
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
            title="Från idé till AI-driven process."
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              {
                step: "1",
                title: "Analys",
                desc: "Vi analyserar dina processer och identifierar vad som kan automatiseras för mest effekt.",
              },
              {
                step: "2",
                title: "Implementering",
                desc: "Vi bygger och testar lösningen. Du får träning och dokumentation för att använda den själv.",
              },
              {
                step: "3",
                title: "Optimering",
                desc: "Vi övervakar och optimerar systemet. Det blir smartare över tid när AI lär sig från data.",
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

      {/* ═══ ROI ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Resultat"
            title="Så mycket sparar du in..."
          />
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              {
                number: "5-10",
                desc: "timmar sparade per vecka per person",
              },
              {
                number: "30%",
                desc: "fler leads följs upp automatiskt",
              },
              {
                number: "2-4",
                desc: "månader innan automation betalar för sig",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08 + 0.1}>
                <div className="bg-surface rounded-[16px] border border-border p-7 text-center">
                  <div className="text-[40px] font-800 font-heading text-primary">
                    {item.number}
                  </div>
                  <p className="mt-2 text-[14px] text-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA KONSULTATION ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Nästa steg"
            title="Vad kan vi automatisera för dig?"
            subtitle="Boka en kostnadsfri konsultation och vi analyserar vad som kan spara mest tid."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 text-center">
              <a href="/boka" className="premium-btn mx-auto">
                <span>Boka AI-konsultation</span>
                <ArrowRight size={16} className="opacity-80" />
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
            title="AI-automation i Kristianstad."
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
    </>
  );
}
