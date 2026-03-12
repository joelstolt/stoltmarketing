"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Plus, Code, Smartphone, ShoppingCart, Gauge, Layout, Palette } from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";

const features = [
  { icon: Layout, title: "Informationsstruktur", desc: "Tydlig sidstruktur som leder besökaren till handling — inte bara snygg design." },
  { icon: Palette, title: "Design & copy", desc: "Professionell design och texter som kommunicerar ditt erbjudande tydligt." },
  { icon: Code, title: "Modern teknik", desc: "Byggt i Next.js, React eller WordPress beroende på dina behov. Alltid snabbt och stabilt." },
  { icon: Smartphone, title: "Responsiv design", desc: "Fungerar perfekt på mobil, surfplatta och desktop. Mobilanpassning är standard." },
  { icon: ShoppingCart, title: "E-handel & WooCommerce", desc: "Fullskaliga butiker med betalningslösningar, produkthantering och checkout." },
  { icon: Gauge, title: "Prestanda & hastighet", desc: "Snabb laddning, optimerade bilder och Core Web Vitals i fokus." },
];

const techStack = [
  "Next.js & React",
  "WordPress & WooCommerce",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "Stripe & Klarna",
];

const faqs = [
  { q: "Vilken teknik bygger du i?", a: "Jag jobbar primärt med Next.js och React för moderna sajter, och WordPress/WooCommerce för e-handel och innehållstunga sidor. Du får alltid en rekommendation baserad på dina behov." },
  { q: "Hur lång tid tar det att bygga en webbplats?", a: "En enklare företagssajt tar 2–4 veckor. E-handelsplattformar och större projekt kan ta 1–3 månader. Du får alltid en tydlig tidplan." },
  { q: "Vad kostar en webbplats?", a: "Webbstart börjar från 3 900 kr. Större projekt med e-handel och AI-verktyg från 7 900 kr. Fast pris, inga överraskningar." },
  { q: "Kan jag uppdatera sajten själv efteråt?", a: "Ja. WordPress-sajter har ett enkelt admin-gränssnitt. Next.js-sajter kan kopplas till ett CMS. Jag erbjuder också managed hemsida om du vill att jag sköter uppdateringar." },
];

export default function WebbutvecklingContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Tjänster", href: "/tjanster" },
          { label: "Webbutveckling" },
        ]}
        badge="Webbutveckling"
        title="Moderna webbplatser och e-handel som gör det lätt för kunder att hitta dig och ta kontakt."
        subtitle="Ny sajt eller ombyggnad — med fokus på tydlighet, förtroende och fler förfrågningar. Samma kvalitet som jag levererar åt AcadeMedia."
        bullets={["Från 3 900 kr", "Klar på 2–4 veckor", "Fast pris, inga överraskningar"]}
      />

      {/* ═══ PASSAR NÄR ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Passar när"
            title="Du behöver en webbnärvaro som faktiskt ger resultat."
            subtitle="Inte bara en snygg sida — utan en som konverterar besökare till kunder."
          />
          <Reveal delay={0.14}>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {[
                "Du vill ha fler förfrågningar och bokningar från webben.",
                "Din nuvarande sajt är långsam, otydlig eller ser daterad ut.",
                "Du behöver en e-handelsplattform som fungerar i praktiken.",
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
          <SectionHeader badge="Vad ingår" title="Allt du behöver — i en leverans." />
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

      {/* ═══ TECH STACK ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Teknik" title="Jag väljer stack efter mål och budget." subtitle="Ingen one-size-fits-all. Du får den teknik som passar ditt projekt bäst." />
          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-wrap gap-3">
              {techStack.map((t) => (
                <span key={t} className="text-[14px] font-500 text-body bg-surface border border-border px-4 py-2 rounded-lg">{t}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="bg-surface rounded-[16px] border border-border p-6">
                <div className="text-[32px] font-800 font-heading text-heading tracking-tight">70+</div>
                <div className="text-[14px] text-muted mt-1">Levererade webbprojekt</div>
              </div>
              <div className="bg-surface rounded-[16px] border border-border p-6">
                <div className="text-[32px] font-800 font-heading text-heading tracking-tight">AcadeMedia</div>
                <div className="text-[14px] text-muted mt-1">Pågående enterprise-uppdrag i WooCommerce</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ PRISER ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Pris" title="Tydliga paket. Fast pris." />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {[
              { name: "Webbstart", price: "Från 3 900 kr", desc: "Enklare företagssajt med tydlig kundresa, responsiv design och snabb leverans." },
              { name: "Webb + E-handel", price: "Från 7 900 kr", desc: "Fullskalig sajt med WooCommerce, betalningar, SEO-grund och AI-verktyg." },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08 + 0.1}>
                <div className="bg-surface rounded-[16px] border border-border p-7 h-full">
                  <h3 className="font-heading font-700 text-[18px] text-heading">{p.name}</h3>
                  <div className="mt-2 font-heading font-800 text-[24px] text-primary tracking-tight">{p.price}</div>
                  <p className="mt-3 text-[14px] text-body leading-relaxed">{p.desc}</p>
                  <a href="/#kontakt" className="secondary-btn mt-5 w-full justify-center text-[14px]">Få upplägg och pris</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader badge="Vanliga frågor" title="Frågor om webbutveckling." />
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
          <Reveal><h2 className="font-heading font-800 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.025em] text-heading">Redo för en sajt som levererar?</h2></Reveal>
          <Reveal delay={0.06}><p className="mt-4 text-[16px] leading-relaxed text-body">Boka en kostnadsfri genomgång så pratar vi igenom dina behov och tar fram ett upplägg.</p></Reveal>
          <Reveal delay={0.12}><a href="/#kontakt" className="premium-btn mt-8 mx-auto"><span>Boka kostnadsfri genomgång</span><ArrowRight size={16} className="opacity-80" /></a></Reveal>
        </div>
      </section>
    </>
  );
}
