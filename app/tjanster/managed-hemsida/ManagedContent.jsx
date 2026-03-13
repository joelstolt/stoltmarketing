"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Plus, Shield, RefreshCw, BarChart3, Headphones, FileEdit, Zap } from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";

const alwaysIncluded = [
  { icon: RefreshCw, title: "Uppdateringar & patchning", desc: "Core, tema och plugins hålls uppdaterade och kontrolleras före publicering." },
  { icon: Shield, title: "Säkerhetskontroller", desc: "Löpande kontroll av inloggningar, behörigheter och avvikelser." },
  { icon: BarChart3, title: "Övervakning", desc: "Uptime och viktiga larm så att jag agerar innan du märker något." },
  { icon: RefreshCw, title: "Backup & återställning", desc: "Automatiska backups och trygg återställning när det behövs." },
  { icon: Headphones, title: "Support & triage", desc: "En tydlig kontaktväg och prioritering av ärenden och ändringar." },
  { icon: FileEdit, title: "Dokumentation", desc: "Kort, begriplig dokumentation av setup och access." },
];

const packages = [
  {
    name: "Start",
    price: "390",
    desc: "Trygg basdrift för mindre webbplatser.",
    features: ["Uppdateringar & säkerhet", "Backup & övervakning", "Enklare innehållsändringar", "Support vid behov"],
    popular: false,
  },
  {
    name: "Bas",
    price: "790",
    desc: "Stabil drift med löpande ändringar och uppföljning.",
    features: ["Allt i Start", "Löpande innehållsändringar", "Prestandaoptimering", "Månadsrapport", "Prioriterad support"],
    popular: true,
  },
  {
    name: "Pro",
    price: "1 290",
    desc: "För växande företag med högre tempo och ambition.",
    features: ["Allt i Bas", "Prioriterade ändringar", "Löpande SEO-optimering", "Förbättringsförslag varje månad", "AI-verktyg & automation", "Utökad övervakning"],
    popular: false,
  },
];

const faqs = [
  { q: "Vad innebär managed i praktiken?", a: "Jag tar ansvar för uppdateringar, säkerhet, övervakning och innehållsändringar enligt vald nivå. Du får ett tydligt upplägg och rapportering." },
  { q: "Hur snabbt kan du göra ändringar?", a: "Enklare ändringar (text, bilder, länkar) görs normalt inom 24h på vardagar. Större ändringar planeras in enligt din prioritetsnivå." },
  { q: "Tar du över från annan leverantör?", a: "Ja. Jag tar över drift oavsett vem som byggt sajten. Vi gör en ordentlig genomgång av nuläget och sätter tydligt ansvar från start." },
  { q: "Vad händer om något går sönder?", a: "Jag har backup och återställning på plats. Vid incidenter agerar jag proaktivt — ofta innan du ens märker att något hänt." },
  { q: "Ingår SEO?", a: "I Pro-paketet ingår löpande SEO-optimering. I Start och Bas ingår grundläggande SEO-bevakning men inte aktivt optimeringsarbete." },
];

export default function ManagedContent() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Tjänster", href: "/tjanster" }, { label: "Managed hemsida" }]}
        badge="Managed hemsida"
        title="Drift, underhåll och förbättringar — utan att du behöver tänka på det."
        subtitle="Jag tar ansvar för din webbplats efter lansering. Uppdateringar, säkerhet, ändringar och löpande förbättringar i ett tydligt månadsabonnemang."
        bullets={["Från 390 kr/mån", "Svar inom 24h", "Tar över oavsett leverantör"]}
      />

      {/* Always included */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Ingår alltid" title="En stabil grund oavsett nivå." subtitle="Det viktigaste ingår i alla paket — så din sajt alltid känns trygg, uppdaterad och övervakad." />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {alwaysIncluded.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06 + 0.1}>
                <div className="flex gap-4 p-5 bg-surface rounded-[16px] border border-border">
                  <div className="w-10 h-10 rounded-[12px] bg-primary/6 flex items-center justify-center flex-shrink-0">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-600 text-[15px] text-heading">{f.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Välj nivå" title="Välj nivå efter ansvar och tempo." subtitle="Alla nivåer bygger på samma stabila grund — skillnaden ligger i prioritet, rapportering och förbättringstakt." />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.08 + 0.1}>
                <div className={`relative h-full rounded-[20px] p-7 transition-all duration-300 ${
                  pkg.popular
                    ? "bg-surface border-2 border-primary/20 shadow-[0_4px_20px_rgba(29,78,216,0.08)]"
                    : "bg-surface border border-border shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15"
                }`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-7 text-[11px] font-700 text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wider">
                      Rekommenderad
                    </span>
                  )}
                  <h3 className="font-heading font-700 text-[18px] text-heading">{pkg.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading font-800 text-[36px] tracking-tight text-heading">{pkg.price}</span>
                    <span className="text-[15px] text-muted">kr/mån</span>
                  </div>
                  <p className="mt-2 text-[14px] text-muted leading-relaxed">{pkg.desc}</p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14px] text-body">
                        <Check size={15} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/boka" className={`mt-7 block text-center text-[14px] font-600 py-3 rounded-[10px] transition-all duration-200 ${
                    pkg.popular ? "premium-btn justify-center" : "secondary-btn justify-center w-full"
                  }`}>
                    Kom igång
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader badge="FAQ" title="Vanliga frågor om managed hemsida." />
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
          <Reveal><h2 className="font-heading font-800 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.025em] text-heading">Vill du ha lugn drift och tydlig kontroll?</h2></Reveal>
          <Reveal delay={0.06}><p className="mt-4 text-[16px] leading-relaxed text-body">Vi sätter ett upplägg som passar din nivå, prioritet och ambitionsnivå — med tydligt ansvar och uppföljning.</p></Reveal>
          <Reveal delay={0.12}><a href="/boka" className="premium-btn mt-8 mx-auto"><span>Boka kostnadsfri genomgång</span><ArrowRight size={16} className="opacity-80" /></a></Reveal>
        </div>
      </section>
    </>
  );
}
