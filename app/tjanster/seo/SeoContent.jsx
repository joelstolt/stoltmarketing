"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Plus, Search, BarChart3, MapPin, FileSearch, Gauge, Link2 } from "lucide-react";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";

const features = [
  { icon: FileSearch, title: "Nollmätning & teknisk audit", desc: "Innan något görs mäts nuläget: positioner, indexering, teknik. Resultat ska gå att bevisa, inte berättas." },
  { icon: Search, title: "Sökordsanalys på riktig data", desc: "Sökvolym, konkurrens och klickpris för varje ord. Prioriteringen byggs på siffror, aldrig på magkänsla." },
  { icon: Gauge, title: "Sidbredd & innehållsplan", desc: "Sajter vinner på att besvara fler frågor. Jag bygger ut tjänste-, orts- och prissidor i rätt ordning." },
  { icon: MapPin, title: "Lokal SEO & kartrutan", desc: "Google Företagsprofil, kategori och recensioner. Kartrutan är en egen tävling som kräver eget arbete." },
  { icon: BarChart3, title: "Uppföljning & rapporter", desc: "Månadsrapport med positioner, trafik och nästa steg. Du förstår varje rad, annars har jag misslyckats." },
  { icon: Link2, title: "AI-synlighet på köpet", desc: "AI-svaren citerar sidor som redan rankar. Rätt byggd SEO ger dig båda ytorna i samma arbete." },
];

const faqs = [
  { q: "Hur lång tid tar det att se resultat av SEO?", a: "Tekniska förbättringar syns ofta inom veckor. Sökordspositioner tar vanligtvis 2 till 6 månader att förbättra märkbart. Du får månadsrapporter mot nollmätningen så att du ser varje steg." },
  { q: "Jobbar du med Google Ads också?", a: "Ja. I Spets ingår både löpande SEO och Google Ads-hantering, och de förstärker varandra: annonserna ger data och förfrågningar direkt medan de organiska positionerna byggs. Du kan läsa mer under Google Ads-tjänsten." },
  { q: "Vad kostar SEO?", a: "En engångs SEO-audit med prioriterad åtgärdslista kostar 4 900 kr. Löpande SEO ingår i Spets, 2 990 kr/mån, tillsammans med Google Ads, AI-assistent och nytt innehåll varje månad. Större projekt prissätts efter scope, alltid med fast pris innan start." },
  { q: "Kan du hjälpa med lokal SEO?", a: "Ja, det är en styrka. Google Företagsprofil, recensionsarbete upp till din bransch-tröskel, ortssidor där sökvolym finns och kartrutans egna faktorer. Fungerar för alla orter i Sverige, inte bara Skåne." },
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
        badge="SEO-byrå"
        title="SEO-byrå som mäter innan den lovar."
        subtitle="Jag hjälper företag i hela Sverige att ranka högre på Google: nollmätning först, prioriteringar på riktig sökordsdata och en månadsrapport du faktiskt förstår. Löpande SEO från 2 990 kr/mån. Ingen fluff."
        bullets={["Nollmätning innan start", "Prioritering på riktig data", "Fast månadspris"]}
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
                <div key={i} className="bg-surface rounded-[10px] border border-border p-6">
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
                <div className="bg-surface rounded-[10px] border border-border p-6 h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300">
                  <div className="w-10 h-10 rounded-[10px] bg-primary/6 flex items-center justify-center mb-4">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-700 text-[16px] text-heading">{f.title}</h3>
                  <p className="mt-2 text-[14px] text-body leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bevis, konkret case istället för bara löften */}
          <Reveal delay={0.2}>
            <a href="/projekt/linguista" className="group mt-8 block bg-surface rounded-[10px] border border-border p-6 sm:p-7 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-[12px] font-600 text-primary uppercase tracking-wider">Kundcase · AcadeMedia</div>
                  <div className="mt-2 font-heading font-700 text-[18px] text-heading group-hover:text-primary transition-colors">
                    Linguista: AI-läsbarhet från 50 till 100 av 100
                  </div>
                  <p className="mt-2 text-[14px] text-body leading-relaxed max-w-[560px]">
                    Halva innehållet var osynligt för AI-assistenter. Efter ombyggnaden: full pott i
                    varje kategori Lighthouse mäter, och dubbelt så snabb laddning.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[14px] font-600 text-primary whitespace-nowrap">
                  Se hela caset <ArrowRight size={15} />
                </span>
              </div>
            </a>
          </Reveal>
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
                  <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                        <p className="pb-5 text-[14px] sm:text-[15px] leading-relaxed text-body">{faq.a}</p>
                      </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "transparent" }} />
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <Reveal><h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">Vill du synas bättre på Google?</h2></Reveal>
          <Reveal delay={0.06}><p className="mt-4 text-[16px] leading-relaxed text-body">Boka en genomgång så mäter jag ditt nuläge och visar var de största möjligheterna finns. Ny på ämnet? Läs <a href="/sokmotoroptimering" className="font-600 underline">guiden om hur sökmotoroptimering fungerar</a> först.</p></Reveal>
          <Reveal delay={0.12}><a href="/boka" className="premium-btn mt-8 mx-auto"><span>Boka kostnadsfri genomgång</span><ArrowRight size={16} className="opacity-80" /></a></Reveal>
        </div>
      </section>
    </>
  );
}
