"use client";

import { ArrowRight, ArrowLeft, Clock, Calendar, Check, Search, MapPin, Gauge, FileText, Link2, BarChart3, Smartphone } from "lucide-react";
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
                <span className="text-heading font-500">SEO för småföretag</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                SEO
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                SEO för småföretag — 7 steg som faktiskt fungerar
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 15 mars 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> 10 min läsning</span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              De flesta småföretag vet att de borde &ldquo;jobba med SEO&rdquo; men vet inte var de ska börja. Resultatet? De gör ingenting alls, eller betalar en byrå tusentals kronor i månaden utan att förstå vad de får.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Sanningen är att de flesta SEO-grunderna kan du göra själv — utan verktyg, utan budget och utan teknisk bakgrund. De här 7 stegen har jag sett ge resultat för lokala företag gång på gång. Börja uppifrån och jobba dig nedåt.
            </p>

            {/* Step 1 */}
            <div className="flex items-center gap-3 mt-12 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light text-primary font-800 text-[16px] font-heading border border-primary/10">1</span>
              <h2 className="text-[20px] sm:text-[24px] font-800 text-heading font-heading tracking-tight">
                Gör klart din Google Business Profile
              </h2>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Om du bara gör en sak på den här listan — gör den här. Google Business Profile (tidigare Google My Business) är gratis och styr hur du syns i Google Maps och i lokala sökresultat.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Fyll i alla fält — namn, adress, telefon, öppettider, kategori, webbplats",
                "Ladda upp minst 10 bilder (kontor, projekt, team)",
                "Skriv en beskrivning som inkluderar ditt geografiska område och dina tjänster",
                "Svara på alla recensioner — både positiva och negativa",
                "Publicera inlägg regelbundet (minst 1–2 per månad)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ett småföretag med en komplett och aktiv Google Business Profile rankar betydligt bättre i lokala sökningar än ett med halvfylld profil. Det tar 30 minuter att fixa — gör det idag.
            </p>

            {/* Step 2 */}
            <div className="flex items-center gap-3 mt-12 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light text-primary font-800 text-[16px] font-heading border border-primary/10">2</span>
              <h2 className="text-[20px] sm:text-[24px] font-800 text-heading font-heading tracking-tight">
                Fixa dina title tags och meta descriptions
              </h2>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Title tag är det som visas som blå rubrik i Google-resultaten. Meta description är texten under. De flesta småföretags-sajter har antingen &ldquo;Hem — Företagsnamn&rdquo; på varje sida eller saknar dem helt.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-2">Dåligt exempel</p>
              <p className="text-[15px] text-heading font-600">Hem — AB Johanssons Bygg</p>
              <p className="text-[13px] text-muted mt-1">Välkommen till AB Johanssons Bygg. Vi finns i Hässleholm.</p>
            </div>

            <div className="bg-surface border border-primary/15 rounded-xl p-5 mb-6">
              <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-2">Bra exempel</p>
              <p className="text-[15px] text-heading font-600">Byggföretag Hässleholm — Renovering, tillbyggnad & nybygge | Johanssons Bygg</p>
              <p className="text-[13px] text-muted mt-1">Lokalt byggföretag i Hässleholm med 20+ års erfarenhet. Vi utför renovering, tillbyggnad och nybyggnation med fast pris. Boka kostnadsfri besiktning.</p>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Varje sida ska ha en unik title tag (under 60 tecken) som innehåller ditt viktigaste sökord + plats. Meta description (under 160 tecken) ska ge besökaren en anledning att klicka.
            </p>

            {/* Step 3 */}
            <div className="flex items-center gap-3 mt-12 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light text-primary font-800 text-[16px] font-heading border border-primary/10">3</span>
              <h2 className="text-[20px] sm:text-[24px] font-800 text-heading font-heading tracking-tight">
                Skapa en sida per tjänst
              </h2>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Många småföretag klämmer in alla sina tjänster på en enda sida. Det är ett SEO-misstag. Google rankar sidor — inte sajter. Om du erbjuder tre tjänster behöver du tre separata sidor.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Varje tjänstesida bör ha:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "En H1-rubrik med tjänsten + ort (t.ex. 'Badrumsrenovering Hässleholm')",
                "300+ ord som beskriver tjänsten, processen och vad som ingår",
                "Priser eller prisintervall (Google gillar transparens)",
                "Bilder från verkliga projekt (inte stock photos)",
                "En tydlig CTA — ring, mejla, boka",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-3 mt-12 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light text-primary font-800 text-[16px] font-heading border border-primary/10">4</span>
              <h2 className="text-[20px] sm:text-[24px] font-800 text-heading font-heading tracking-tight">
                Gör sajten snabb och mobilanpassad
              </h2>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Över 70% av lokala Google-sökningar sker på mobilen. Om din sajt laddar långsamt eller ser trasig ut på mobilen tappar du besökare — och Google märker det.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Testa din sajt gratis:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { name: "Google PageSpeed Insights", desc: "Mäter laddtid och ger konkreta förbättringsförslag. Sikta på 80+ mobilt." },
                { name: "Google Mobile-Friendly Test", desc: "Kontrollerar om sajten fungerar på mobil. Bör vara 100% pass." },
              ].map((tool) => (
                <div key={tool.name} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[15px] font-600 text-heading mb-1">{tool.name}</p>
                  <p className="text-[14px] text-muted">{tool.desc}</p>
                </div>
              ))}
            </div>

            {/* Step 5 */}
            <div className="flex items-center gap-3 mt-12 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light text-primary font-800 text-[16px] font-heading border border-primary/10">5</span>
              <h2 className="text-[20px] sm:text-[24px] font-800 text-heading font-heading tracking-tight">
                Samla Google-recensioner aktivt
              </h2>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Recensioner är en av de starkaste rankingfaktorerna för lokal SEO. Företag med 20+ recensioner och 4.5+ betyg rankar konsekvent högre i kartan.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Skapa en kort-länk till din Google-recension (finns i Google Business Profile under &ldquo;Be om recensioner&rdquo;) och skicka den till nöjda kunder efter avslutat jobb. Gör det till en rutin — inte något du gör &ldquo;när du kommer ihåg&rdquo;.
            </p>

            {/* Step 6 */}
            <div className="flex items-center gap-3 mt-12 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light text-primary font-800 text-[16px] font-heading border border-primary/10">6</span>
              <h2 className="text-[20px] sm:text-[24px] font-800 text-heading font-heading tracking-tight">
                Registrera sajten i Google Search Console
              </h2>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google Search Console är gratis och visar dig exakt vilka sökord som driver trafik till din sajt, vilka sidor som indexeras och om det finns tekniska problem.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Registrera sajten och verifiera ägande (DNS eller HTML-tagg)",
                "Skicka in din sitemap (vanligtvis dinsajt.se/sitemap.xml)",
                "Kolla rapporten 'Prestanda' varje månad — se vilka sökord du syns på",
                "Åtgärda eventuella 'Sidkvalitet'-varningar",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Step 7 */}
            <div className="flex items-center gap-3 mt-12 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-light text-primary font-800 text-[16px] font-heading border border-primary/10">7</span>
              <h2 className="text-[20px] sm:text-[24px] font-800 text-heading font-heading tracking-tight">
                Skriv innehåll som svarar på frågor
              </h2>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google belönar sajter som svarar på de frågor folk faktiskt ställer. Tänk på vilka frågor dina kunder frågar dig — och skriv sidor eller bloggartiklar som svarar på dem.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { q: "Vad kostar en badrumsrenovering?", page: "→ Skapa en sida: 'Badrumsrenovering [stad] — pris och process'" },
                { q: "Behöver jag bygglov för tillbyggnad?", page: "→ Skriv en guide: 'Bygglov tillbyggnad — vad gäller 2026?'" },
                { q: "Vilket material är bäst för fasad?", page: "→ Skriv en jämförelse: 'Fasadmaterial — trä vs puts vs plåt'" },
              ].map((item) => (
                <div key={item.q} className="bg-surface border border-border rounded-lg p-4">
                  <p className="text-[15px] font-600 text-heading mb-1">&ldquo;{item.q}&rdquo;</p>
                  <p className="text-[14px] text-primary font-500">{item.page}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Varje sida du skapar är en chans att ranka på ett nytt sökord. Ju fler relevanta sidor du har, desto fler vägar in till din sajt. Det är så du bygger organisk trafik utan annonser.
            </p>

            {/* Sammanfattning */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Sammanfattning — gör dessa 7 saker
            </h2>

            <div className="bg-surface border border-border rounded-xl p-6 mb-8">
              <div className="space-y-3">
                {[
                  "Google Business Profile — fyll i allt, ladda upp bilder, svara på recensioner",
                  "Title tags & meta descriptions — unika per sida med sökord + ort",
                  "En sida per tjänst — inte allt på en sida",
                  "Snabb och mobilanpassad — testa med PageSpeed Insights",
                  "Google-recensioner — skapa kort-länk, skicka efter varje jobb",
                  "Google Search Console — registrera och skicka in sitemap",
                  "Skriv innehåll — svara på kundernas vanligaste frågor",
                ].map((item, i) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-primary-light text-primary text-[12px] font-700 flex-shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Gör du alla sju? Du ligger redan före 90% av småföretag i Sverige. SEO är inte raketvetenskap — det är konsekvent arbete med rätt saker. Behöver du hjälp att komma igång eller vill du ha en <a href="/tjanster/seo" className="text-primary hover:underline font-600">professionell SEO-audit</a>? Hör av dig.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Vad kostar en hemsida 2026? Komplett prisguide", href: "/blogg/vad-kostar-en-hemsida" },
                { title: "WordPress vs Next.js — vilket passar ditt företag?", href: "/blogg/wordpress-vs-nextjs" },
                { title: "SEO-tjänster — så kan jag hjälpa", href: "/tjanster/seo" },
                { title: "SEO Hässleholm — lokal sökmotoroptimering", href: "/hassleholm/seo" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors">
                  <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">{link.title} →</span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[22px] sm:text-[26px] font-800 text-white font-heading tracking-tight mb-3">
                Vill du ha hjälp med SEO?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Jag erbjuder allt från en engångs-audit till löpande SEO-arbete. Boka en kostnadsfri genomgång så visar jag var de största möjligheterna finns för just din sajt.
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
