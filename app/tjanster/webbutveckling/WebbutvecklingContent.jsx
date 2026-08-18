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
  { q: "Hur lång tid tar det att bygga en webbplats?", a: "En enklare företagssajt tar 1-2 veckor. E-handelsplattformar och större projekt kan ta 1-2 månader. Ett gratis designförslag för din webb får du inom 2 arbetsdagar, och du får alltid en tydlig tidplan." },
  { q: "Vad kostar en webbplats?", a: "0 kr i startavgift och 1 190 kr/mån, med 12 månaders bindning och därefter månadsvis. Då ingår bygget, hosting, drift, uppdateringar, innehållsändringar och support. Vill du ha aktiv SEO, Google Ads och nytt innehåll varje månad ingår det i Spets för 2 990 kr/mån." },
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
        bullets={["0 kr start, 1 190 kr/mån", "Designförslag inom 2 arbetsdagar", "Klar på 1-2 veckor"]}
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
                <div key={i} className="bg-surface rounded-[10px] border border-border p-6">
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
              <div className="bg-surface rounded-[10px] border border-border p-6">
                <div className="text-[32px] font-600 font-heading text-heading tracking-tight">150+</div>
                <div className="text-[14px] text-muted mt-1">Levererade webbprojekt</div>
              </div>
              <div className="bg-surface rounded-[10px] border border-border p-6">
                <div className="text-[32px] font-600 font-heading text-heading tracking-tight">AcadeMedia</div>
                <div className="text-[14px] text-muted mt-1">Pågående enterprise-uppdrag i WooCommerce</div>
              </div>
            </div>
          </Reveal>

          {/* Case-bevis — siffrorna ovan blir trovärdiga först med riktiga exempel */}
          <Reveal delay={0.22}>
            <div className="mt-8 grid sm:grid-cols-2 gap-8">
              <a href="/projekt/linguista" className="group block bg-surface rounded-[10px] border border-border p-6 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
                <div className="text-[12px] font-600 text-primary uppercase tracking-wider">Kundcase · AcadeMedia</div>
                <div className="mt-2 font-heading font-700 text-[18px] text-heading group-hover:text-primary transition-colors">Linguista — 100/100 i fyra kategorier</div>
                <p className="mt-2 text-[14px] text-body leading-relaxed">WordPress till självuppdaterande Next.js-sajt. Full pott i prestanda, tillgänglighet, best practices och AI-läsbarhet.</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-600 text-primary">Se hela caset <ArrowRight size={15} /></span>
              </a>
              <a href="/projekt/edshare" className="group block bg-surface rounded-[10px] border border-border p-6 hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
                <div className="text-[12px] font-600 text-primary uppercase tracking-wider">Kundcase · AcadeMedia</div>
                <div className="mt-2 font-heading font-700 text-[18px] text-heading group-hover:text-primary transition-colors">EdShare — 10x snabbare serversvar</div>
                <p className="mt-2 text-[14px] text-body leading-relaxed">Från en WordPress-sajt vid vägs ände till tre 100:or och 86 % lägre sidvikt på Cloudflares edge.</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[14px] font-600 text-primary">Se hela caset <ArrowRight size={15} /></span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ PRISER ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Pris" title="Tre nivåer. Fast pris." subtitle="0 kr i start på alla paket, och du ser ett färdigt designförslag innan du bestämmer dig. Du väljer hur mycket sajten ska jobba åt dig." />
          <div className="mt-14 grid md:grid-cols-3 gap-5 items-stretch">
            {[
              {
                name: "Bas",
                for: "För enmansfirman",
                price: "1 190 kr/mån",
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
                price: "1 990 kr/mån",
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
                price: "2 990 kr/mån",
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
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08 + 0.1}>
                <div className={`relative h-full flex flex-col bg-surface rounded-[10px] border p-7 transition-all duration-300 ${p.featured ? "border-primary/40 shadow-[0_4px_24px_rgba(242,194,48,0.08)]" : "border-border hover:border-primary/15"}`}>
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-[#191405] text-[11px] font-700 tracking-[0.08em] uppercase px-4 py-1 rounded-full whitespace-nowrap">{p.badge}</div>
                  )}
                  <div className="text-[11px] font-600 uppercase tracking-[0.12em] text-muted">{p.for}</div>
                  <h3 className="mt-2 font-heading font-700 text-[20px] text-heading">{p.name}</h3>
                  <div className="mt-2 font-heading font-600 text-[22px] text-primary tracking-tight">0 kr start, {p.price}</div>
                  <p className="mt-3 text-[14px] text-body leading-relaxed">{p.desc}</p>
                  <ul className="mt-5 flex flex-col gap-2.5 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-body leading-snug">
                        <Check size={15} className="text-primary flex-shrink-0 mt-[2px]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`/boka?amne=pris&paket=${encodeURIComponent(p.name)}`} className="secondary-btn mt-6 w-full justify-center text-[14px]">Få upplägg och pris</a>
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

      {/* ═══ CTA ═══ */}
      <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "transparent" }} />
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <Reveal><h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">Redo för en sajt som levererar?</h2></Reveal>
          <Reveal delay={0.06}><p className="mt-4 text-[16px] leading-relaxed text-body">Boka en kostnadsfri genomgång så pratar vi igenom dina behov och tar fram ett upplägg.</p></Reveal>
          <Reveal delay={0.12}><a href="/boka" className="premium-btn mt-8 mx-auto"><span>Boka kostnadsfri genomgång</span><ArrowRight size={16} className="opacity-80" /></a></Reveal>
        </div>
      </section>
    </>
  );
}
