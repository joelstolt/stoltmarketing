"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Plus, Search, BarChart3, MapPin, FileSearch, Gauge, Link2 } from "lucide-react";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";

const features = [
  { icon: FileSearch, title: "Teknisk SEO-audit", desc: "Fullständig genomgång av tekniska brister, laddtider, crawl-fel och indexering." },
  { icon: Search, title: "Sökordsanalys & strategi", desc: "Identifiera vilka sökord som driver affär och prioritera rätt sidor." },
  { icon: MapPin, title: "Lokal SEO & Google Maps", desc: "Syns lokalt i Hässleholm eller var du än verkar. Google Business Profile-optimering." },
  { icon: Gauge, title: "Core Web Vitals", desc: "Snabbare sajt, bättre användarupplevelse och högre ranking." },
  { icon: BarChart3, title: "Uppföljning & rapporter", desc: "Månadsrapporter med trafik, positioner och konkreta förbättringsförslag." },
  { icon: Link2, title: "Intern länkstruktur", desc: "Optimera hur sidor kopplas ihop för bättre crawlning och användarflöde." },
];

const faqs = [
  { q: "Hur lång tid tar det att se resultat av SEO?", a: "Tekniska förbättringar syns ofta inom veckor. Sökordspositioner tar vanligtvis 2–6 månader att förbättra märkbart. Du får månadsrapporter så du ser framstegen." },
  { q: "Jobbar du med Google Ads också?", a: "Mitt fokus ligger på organisk SEO. Men jag kan ge rådgivning kring Ads-strategi och rekommendera specialister om det behövs." },
  { q: "Vad kostar SEO?", a: "En engångs SEO-audit kostar från 3 900 kr. Löpande SEO-arbete ingår i managed hemsida från 790 kr/mån. Större SEO-projekt prissätts efter scope." },
  { q: "Kan du hjälpa med lokalt SEO i Hässleholm?", a: "Absolut. Lokal SEO är en styrka — Google Business Profile, lokala sökord, kartor och recensioner. Fungerar för alla orter i Sverige." },
];

export default function SeoContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Tjänster", href: "/tjanster" },
          { label: "SEO" },
        ]}
        badge="SEO"
        title="Bättre synlighet på Google — så att rätt kunder hittar dig."
        subtitle="Teknisk SEO, sökordsanalys och lokal optimering som ger mätbara resultat. Ingen fluff, bara det som driver trafik och förfrågningar."
        bullets={["Teknisk SEO-audit", "Lokal & nationell optimering", "Mätbar uppföljning"]}
      />

      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Passar när" title="Du vill att fler rätt kunder hittar dig via Google." />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                "Du vill växa organiskt utan att vara beroende av annonser.",
                "Din sajt syns inte på Google trots att du har bra erbjudande.",
                "Du behöver bättre lokal synlighet och fler lokala förfrågningar.",
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

      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Vad ingår" title="SEO som faktiskt ger resultat." />
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

      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader badge="Vanliga frågor" title="Frågor om SEO." />
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

      <section className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(168deg, #EEF2FF 0%, #E0E7FF 40%, #DBEAFE 70%, #EFF6FF 100%)" }} />
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <Reveal><h2 className="font-heading font-800 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.025em] text-heading">Vill du synas bättre på Google?</h2></Reveal>
          <Reveal delay={0.06}><p className="mt-4 text-[16px] leading-relaxed text-body">Boka en genomgång så går jag igenom ditt nuläge och visar var de största möjligheterna finns.</p></Reveal>
          <Reveal delay={0.12}><a href="/#kontakt" className="premium-btn mt-8 mx-auto"><span>Boka kostnadsfri genomgång</span><ArrowRight size={16} className="opacity-80" /></a></Reveal>
        </div>
      </section>
    </>
  );
}
