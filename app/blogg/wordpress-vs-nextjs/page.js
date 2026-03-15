"use client";

import { ArrowRight, ArrowLeft, Clock, Calendar, Check, X, Zap, Shield, Gauge, Pencil } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui";

export default function Article() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
                <a href="/" className="hover:text-heading transition-colors">Start</a>
                <span className="text-border">·</span>
                <a href="/blogg" className="hover:text-heading transition-colors">Blogg</a>
                <span className="text-border">·</span>
                <span className="text-heading font-500">WordPress vs Next.js</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Teknik
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                WordPress vs Next.js — vilket passar ditt företag?
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 15 mars 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> 8 min läsning</span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              WordPress driver 43% av alla sajter på internet. Next.js är det snabbast växande ramverket bland professionella utvecklare. Jag har byggt 150+ projekt i båda — och valet beror inte på vilken teknik som är &ldquo;bäst&rdquo;, utan på vad ditt företag faktiskt behöver.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Den här guiden ger dig en ärlig jämförelse utan agenda. Jag tjänar lika mycket oavsett vad du väljer — mitt jobb är att rekommendera rätt teknik för ditt mål.
            </p>

            {/* Section: Snabbjämförelse */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Snabbjämförelse
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-700 text-heading"></th>
                    <th className="text-left py-3 pr-4 font-700 text-primary">WordPress</th>
                    <th className="text-left py-3 font-700 text-primary">Next.js</th>
                  </tr>
                </thead>
                <tbody className="text-body">
                  {[
                    ["Laddtid", "2–5 sek (typiskt)", "< 1 sek"],
                    ["Lighthouse-poäng", "40–75", "90–100"],
                    ["Säkerhet", "Kräver löpande uppdateringar", "Mycket säkert (statisk HTML)"],
                    ["Redigerbarhet", "Visuell editor (Gutenberg/Bricks)", "Kräver utvecklare (eller CMS-koppling)"],
                    ["E-handel", "WooCommerce (komplett)", "Headless + Stripe/Shopify"],
                    ["SEO", "Bra med Yoast/RankMath", "Utmärkt (snabbare = bättre ranking)"],
                    ["Underhåll", "Plugins, teman, säkerhet — löpande", "Minimalt efter lansering"],
                    ["Kostnad att bygga", "Lägre (fler utvecklare)", "Högre (specialistkompetens)"],
                    ["Kostnad att driva", "Högre (hosting + underhåll)", "Lägre (ofta gratis hosting)"],
                  ].map(([label, wp, next]) => (
                    <tr key={label} className="border-b border-border-light">
                      <td className="py-3 pr-4 font-600 text-heading">{label}</td>
                      <td className="py-3 pr-4">{wp}</td>
                      <td className="py-3">{next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section: WordPress */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              WordPress — när det är rätt val
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              WordPress är fortfarande det bästa valet i flera situationer:
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Du behöver e-handel med WooCommerce (produkter, checkout, lager, frakt)",
                "Du vill redigera texter, bilder och sidor själv — utan att kontakta en utvecklare",
                "Du har ett befintligt WordPress-ekosystem med plugins och integrationer",
                "Budgeten är begränsad och du behöver komma igång snabbt",
                "Du behöver en blogg med många artiklar som publiceras ofta",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Jag bygger fortfarande mycket i WordPress — särskilt för kunder inom AcadeMedia-koncernen (SMH, KYH, Hermods) där WooCommerce-integration och visuella editorer är krav. WordPress är inte dåligt — det är dåligt implementerat WordPress som är dåligt.
            </p>

            {/* Section: Next.js */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Next.js — när det är rätt val
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Next.js (React-ramverket) är bättre när:
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Prestanda och laddtid är kritiskt — du konkurrerar i Google lokalt",
                "Du vill ha en sajt som laddar på under 1 sekund, utan undantag",
                "Sajten behöver inte uppdateras dagligen av icke-teknisk personal",
                "Du vill ha minimal attack-yta (ingen databas, inga plugins att hacka)",
                "Du behöver en webbapplikation med avancerad funktionalitet",
                "Du vill ha lägre löpande driftskostnad och underhåll",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Sajter som <a href="https://kvota.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-600">Kvota.se</a>, Förskolan Harpan och LIA-platsbanken är alla byggda i Next.js. De laddar på under en sekund, får 95+ på Lighthouse och kräver i princip inget underhåll.
            </p>

            {/* Section: Prestanda */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Prestanda — varför det spelar roll för SEO
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google har bekräftat att Core Web Vitals (laddtid, visuell stabilitet, interaktivitet) påverkar ranking. I praktiken ser jag detta:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5 text-center">
                <p className="text-[13px] font-700 text-muted uppercase tracking-wide mb-2">Typisk WordPress-sajt</p>
                <p className="text-[36px] font-800 text-heading font-heading">55</p>
                <p className="text-[13px] text-muted">Lighthouse Performance</p>
                <div className="mt-3 h-2 rounded-full bg-surface-muted overflow-hidden">
                  <div className="h-full rounded-full bg-orange-400" style={{ width: "55%" }} />
                </div>
              </div>
              <div className="bg-surface border border-primary/15 rounded-xl p-5 text-center">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-2">Next.js-sajt</p>
                <p className="text-[36px] font-800 text-primary font-heading">97</p>
                <p className="text-[13px] text-muted">Lighthouse Performance</p>
                <div className="mt-3 h-2 rounded-full bg-surface-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: "97%" }} />
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det betyder inte att alla WordPress-sajter är långsamma — men det kräver mer arbete att nå samma resultat. Plugins, tunga teman och delade webbhotell drar ner prestanda. Next.js är snabbt ur lådan.
            </p>

            {/* Section: Sammanfattning */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Min rekommendation
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[15px] font-700 text-heading mb-1">Välj WordPress om:</p>
                <p className="text-[14px] text-muted">Du behöver e-handel (WooCommerce), vill redigera innehåll själv regelbundet, eller har begränsad budget och behöver en snabb leverans.</p>
              </div>
              <div className="bg-surface border border-primary/15 rounded-xl p-5">
                <p className="text-[15px] font-700 text-primary mb-1">Välj Next.js om:</p>
                <p className="text-[14px] text-muted">Du vill ha maximal prestanda och SEO, lägre löpande drift, modern teknik och en sajt som sticker ut. Särskilt bra för företagssajter, landningssidor och webbappar.</p>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Osäker? Boka en genomgång så hjälper jag dig välja baserat på dina faktiska behov — inte på vad som är trendigt.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Vad kostar en hemsida 2026? Komplett prisguide", href: "/blogg/vad-kostar-en-hemsida" },
                { title: "SEO för småföretag — 7 steg som faktiskt fungerar", href: "/blogg/seo-for-smaforetag" },
                { title: "Webbutveckling — tjänster och priser", href: "/tjanster/webbutveckling" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors">
                  <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">{link.title} →</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[22px] sm:text-[26px] font-800 text-white font-heading tracking-tight mb-3">
                Osäker på vilken teknik som passar?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Jag bygger i båda. Boka en kostnadsfri genomgång så hjälper jag dig välja rätt — baserat på dina mål, inte på vad som är enklast för mig.
              </p>
              <a href="/boka" className="premium-btn">
                <span>Boka kostnadsfri genomgång</span>
                <ArrowRight size={16} className="opacity-80" />
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-border">
              <a href="/blogg" className="inline-flex items-center gap-2 text-[14px] text-muted hover:text-heading transition-colors font-500">
                <ArrowLeft size={16} /> Alla artiklar
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
