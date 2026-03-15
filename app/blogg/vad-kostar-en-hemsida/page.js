"use client";

import { ArrowRight, ArrowLeft, Clock, Calendar, Check, X, AlertCircle } from "lucide-react";
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
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
                <a href="/" className="hover:text-heading transition-colors">Start</a>
                <span className="text-border">·</span>
                <a href="/blogg" className="hover:text-heading transition-colors">Blogg</a>
                <span className="text-border">·</span>
                <span className="text-heading font-500">Vad kostar en hemsida?</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Guide
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                Vad kostar en hemsida 2026? Komplett prisguide för företag
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 15 mars 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> 9 min läsning
                </span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              &ldquo;Vad kostar en hemsida?&rdquo; är den vanligaste frågan jag får. Och det korta svaret är: det beror på. Men det hjälper inte dig. Så här kommer det långa svaret — baserat på 150+ levererade projekt och priser jag faktiskt sett i marknaden 2026.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Jag går igenom alla alternativ — från gratis-verktyg till skräddarsydda lösningar — och förklarar vad du faktiskt betalar för, vad som är värt pengarna, och var du bör vara skeptisk.
            </p>

            {/* Section: Snabbversionen */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Snabbversionen — priser 2026
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-700 text-heading">Typ</th>
                    <th className="text-left py-3 pr-4 font-700 text-heading">Prisintervall</th>
                    <th className="text-left py-3 font-700 text-heading">Passar för</th>
                  </tr>
                </thead>
                <tbody className="text-body">
                  {[
                    ["Gör-det-själv (Wix, Squarespace)", "0 – 200 kr/mån", "Hobby, föreningar, enklaste behovet"],
                    ["WordPress-mall + frilansare", "3 000 – 8 000 kr", "Småföretag som vill komma igång snabbt"],
                    ["Skräddarsydd företagssajt", "8 000 – 25 000 kr", "Företag som vill konvertera besökare"],
                    ["E-handel (WooCommerce/Shopify)", "15 000 – 50 000 kr", "Butiker med produktkatalog och betalning"],
                    ["Webbapplikation / plattform", "50 000 – 200 000+ kr", "Specialbyggda system och portaler"],
                  ].map(([typ, pris, passar]) => (
                    <tr key={typ} className="border-b border-border-light">
                      <td className="py-3 pr-4 font-500">{typ}</td>
                      <td className="py-3 pr-4 font-600 text-primary">{pris}</td>
                      <td className="py-3 text-muted">{passar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Men priset säger inte hela sanningen. En hemsida för 3 000 kr som inte ger dig en enda kund är dyrare än en för 15 000 kr som ger dig tio förfrågningar i månaden. Låt oss gå djupare.
            </p>

            {/* Section: Vad bestämmer priset */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad bestämmer priset på en hemsida?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Priset styrs av fyra saker:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "1. Omfattning", desc: "Antal sidor, funktionalitet, integration mot andra system. En 5-sidorssajt kostar inte samma sak som en 50-sidors e-handel." },
                { title: "2. Design", desc: "Mallbaserad design är billigare. Skräddarsydd design med unik kundresa och grafisk profil kostar mer — men konverterar bättre." },
                { title: "3. Teknik", desc: "WordPress med färdigt tema är billigare att bygga men kan bli dyrt att underhålla. Next.js kostar mer initialt men är snabbare, säkrare och kräver mindre underhåll." },
                { title: "4. Vem bygger", desc: "Frilansare i Sverige: 500–1 200 kr/tim. Byrå: 900–1 800 kr/tim. Offshore: 200–500 kr/tim men med kvalitets- och kommunikationsrisk." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section: DIY */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Alternativ 1: Bygg själv med Wix, Squarespace eller WordPress.com
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Gratis eller billigt (0–200 kr/mån) men med begränsningar:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Fördelar</p>
                <div className="space-y-2">
                  {["Billigt", "Snabbt att komma igång", "Du styr helt själv"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Nackdelar</p>
                <div className="space-y-2">
                  {["Ser ofta generisk ut", "Begränsad SEO", "Svårt att sticka ut", "Ingen hjälp med strategi"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Fungerar om du bara behöver en enkel närvaro online och inte förväntar dig att sajten ska generera förfrågningar. Men om du vill att hemsidan ska vara ett försäljningsverktyg behöver du mer.
            </p>

            {/* Section: Frilansare */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Alternativ 2: Anlita en frilansare eller liten byrå
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Här landar de flesta småföretag — och det är ofta rätt beslut. En frilansare med erfarenhet kan leverera en sajt som ser proffsig ut och är byggd för att konvertera. Typiskt prisintervall: 5 000 – 25 000 kr beroende på omfattning.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Tips: Fråga om fast pris</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    De flesta seriösa webbutvecklare erbjuder fast pris efter en genomgång av dina behov. Om någon bara ger dig en timlön utan scope-diskussion — var skeptisk. Du vill veta exakt vad du betalar innan du säger ja.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Vad du bör fråga innan du anlitar:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Har du referenser och case jag kan se?",
                "Vad ingår i priset — design, copy, SEO-grund, mobilanpassning?",
                "Vem äger koden efteråt?",
                "Vad kostar det att underhålla sidan?",
                "Hur snabbt kan du leverera?",
                "Bygger du i WordPress, Next.js eller något annat — och varför?",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Section: Stor byrå */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Alternativ 3: Stor byrå
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Stora byråer i Stockholm, Göteborg och Malmö tar vanligtvis 50 000 – 200 000+ kr för en företagssajt. Du betalar för process, projektledning, workshops och ofta flera personer som jobbar med ditt projekt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det kan vara motiverat för stora företag med komplexa behov. Men för ett småföretag som behöver en tydlig sajt med 5–10 sidor som genererar förfrågningar? Då betalar du för overhead som inte ger dig mer värde. Du betalar för att ha sett fem presentationer istället för att ha fått sajten levererad.
            </p>

            {/* Section: Löpande kostnader */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Löpande kostnader — det folk glömmer
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Hemsidan i sig är bara en del av kostnaden. Räkna med:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { post: "Domän (.se)", pris: "100–200 kr/år" },
                { post: "Hosting / webbhotell", pris: "50–500 kr/mån" },
                { post: "SSL-certifikat (HTTPS)", pris: "0–500 kr/år (ofta gratis)" },
                { post: "Underhåll & uppdateringar", pris: "0–1 500 kr/mån" },
                { post: "Innehållsändringar", pris: "0 (om du gör det själv) – 500 kr/mån" },
                { post: "SEO (löpande)", pris: "0 (eget) – 5 000 kr/mån (byrå)" },
              ].map((row) => (
                <div key={row.post} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] text-body">{row.post}</span>
                  <span className="text-[14px] font-600 text-heading">{row.pris}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              WordPress-sajter kräver mer löpande underhåll (plugins, säkerhetsuppdateringar, backuper) än statiska sajter i Next.js. Det är en dold kostnad som sällan nämns vid köptillfället. Vill du slippa det tekniska finns <a href="/tjanster/managed-hemsida" className="text-primary hover:underline font-600">managed hemsida</a> som en tjänst.
            </p>

            {/* Section: Vad borde du välja? */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Så vad borde du välja?
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[15px] font-700 text-heading mb-1">Du vill bara finnas online</p>
                <p className="text-[14px] text-muted">→ Wix eller Squarespace. Budget: 0–200 kr/mån.</p>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[15px] font-700 text-heading mb-1">Du vill ha en sajt som ger förfrågningar</p>
                <p className="text-[14px] text-muted">→ Frilansare/konsult med fast pris. Budget: 5 000–25 000 kr + hosting.</p>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[15px] font-700 text-heading mb-1">Du behöver e-handel</p>
                <p className="text-[14px] text-muted">→ WooCommerce (WordPress) eller Shopify. Budget: 15 000–50 000 kr + hosting + betalgateway.</p>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[15px] font-700 text-heading mb-1">Du behöver en plattform eller portal</p>
                <p className="text-[14px] text-muted">→ Skräddarsydd utveckling. Budget: 50 000 kr+. Kräver tydlig kravspec.</p>
              </div>
            </div>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "WordPress vs Next.js — vilket passar ditt företag?", href: "/blogg/wordpress-vs-nextjs" },
                { title: "SEO för småföretag — 7 steg som faktiskt fungerar", href: "/blogg/seo-for-smaforetag" },
                { title: "Webbutveckling — tjänster och priser", href: "/tjanster/webbutveckling" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors"
                >
                  <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">
                    {link.title} →
                  </span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[22px] sm:text-[26px] font-800 text-white font-heading tracking-tight mb-3">
                Vill du veta vad en hemsida skulle kosta för just ditt företag?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Boka en kostnadsfri genomgång på 15 minuter. Jag ger dig en ärlig bedömning av vad du behöver, vilken teknik som passar och ett fast pris — innan du bestämmer dig.
              </p>
              <a href="/boka" className="premium-btn">
                <span>Boka kostnadsfri genomgång</span>
                <ArrowRight size={16} className="opacity-80" />
              </a>
            </div>

            {/* Back */}
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
