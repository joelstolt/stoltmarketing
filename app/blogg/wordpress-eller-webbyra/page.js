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
          <div className="absolute inset-0" style={{ background: "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
                <a href="/" className="hover:text-heading transition-colors">Start</a>
                <span className="text-border">·</span>
                <a href="/blogg" className="hover:text-heading transition-colors">Blogg</a>
                <span className="text-border">·</span>
                <span className="text-heading font-500">WordPress eller Webbyrå</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Guide
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-800 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading mb-5">
                Bygga hemsida själv eller anlita en webbyrå? Ärlig jämförelse
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex items-center gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={13} /> 3 maj 2026</span>
                <span className="flex items-center gap-1.5"><Clock size={13} /> 9 min läsning</span>
              </div>
            </Reveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              Du behöver en hemsida. Du tittar på WordPress, Squarespace, Wix. Sedan tittar du på webbyrå-priser. Och du tänker: "Tjugo tusen kronor för en hemsida? Jag kan väl göra det själv för två tusen."
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ja. Du kan. Eller kan du? Här är min ärliga analys efter att ha sett både framgångsrika DIY-projekt och totala katastrover.
            </p>

            {/* DIY: Teknisk verklighet */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              DIY-hemsidan: Teknisk verklighet
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Först, låt oss bli klara på något: WordPress, Squarespace och Wix gör det möjligt för icke-tekniker att bygga hemsidor. Det är faktiskt imponerande teknik.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Men det gör det inte lätt. Det gör det bara möjligt.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { reality: "Du behöver lära dig ett nytt verktyg", desc: "WordPress är inte intuitivt första gången. Wix är bättre, men du kommer fortfarande spendera 20+ timmar bara för att förstå grunderna." },
                { reality: "Plugin-helvete är verkligt", desc: "WordPress låter dig installera plugin för allt. Men vilka ska du välja? Är de säkra? Kommer de fungera tillsammans? Det är en labyrint." },
                { reality: "Design-frihet är en fälla", desc: "Alla kan göra vilken design som helst. Inte alla bör. Du slutar ofta med något som ser ut som hundratals andra hemsidor från 2012." },
                { reality: "SEO-grunderna är dolda", desc: "Google Ads och SEO fungerar bara om din hemsida är tekniskt solid. Det gör det inte säkert om du bygger själv. Ofta blir det långsammare, krångligare, svårare att hitta." },
                { reality: "Uppdateringar och säkerhet tar tid", desc: "WordPress kräver uppdateringar. Ofta. Så gör plugin. Det är ett jobb. Om du glömmer kan hackers ta över din hemsida." },
              ].map((item) => (
                <div key={item.reality} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.reality}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Kostnader, DIY */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Dolda kostnader — DIY är aldrig två tusen kronor
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Du tänker: "Domain + hosting + WordPress = kanske 2000-3000 kr första året."
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Det är tekniskt sant. Men här är vad du missar:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-600 text-heading">Post</th>
                    <th className="text-left py-3 px-4 font-600 text-heading">Kostnad</th>
                    <th className="text-left py-3 px-4 font-600 text-heading">Ofta glömt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 px-4 text-body">Domain + hosting</td>
                    <td className="py-3 px-4 text-body">200-500 kr/år</td>
                    <td className="py-3 px-4 text-muted text-[12px]">Nej</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Premium tema/plugins</td>
                    <td className="py-3 px-4 text-body">500-2000 kr</td>
                    <td className="py-3 px-4 text-muted text-[12px]">Ofta</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Din tid (40+ timmar)</td>
                    <td className="py-3 px-4 text-body">4000-8000 kr</td>
                    <td className="py-3 px-4 text-muted text-[12px]">Nästan alltid</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Bilder/innehållsproduktion</td>
                    <td className="py-3 px-4 text-body">1000-3000 kr</td>
                    <td className="py-3 px-4 text-muted text-[12px]">Ofta</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">SSL-certifikat (säkerhet)</td>
                    <td className="py-3 px-4 text-body">200-1000 kr/år</td>
                    <td className="py-3 px-4 text-muted text-[12px]">Ibland</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-body">Backup-tjänster</td>
                    <td className="py-3 px-4 text-body">200-500 kr/år</td>
                    <td className="py-3 px-4 text-muted text-[12px]">Ofta</td>
                  </tr>
                  <tr className="bg-primary-subtle">
                    <td className="py-3 px-4 text-body font-600">Totalt första året</td>
                    <td className="py-3 px-4 text-body font-600">7100-15500 kr</td>
                    <td className="py-3 px-4 font-600 text-primary text-[12px]">Ofta 2x mindre räknat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Och då har vi inte räknat på uppdateringar, säkerhet, höstning när något går fel, eller tiden för löpande ändringar.
            </p>

            {/* När DIY fungerar */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              När DIY faktiskt funkar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Nu — DIY är inte alltid dåligt. Det finns fall där det gör perfekt mening:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { scenario: "Du är redan teknik-insatt", why: "Du gillar att lära dig. Du vet vad SSL är. Du sparar plugin. Du kan felsöka. Då är DIY bra." },
                { scenario: "Du har mycket tid, lite pengar", why: "Du är en start-up eller hobbyföretagare. Du kan investera 50+ timmar. Då kan kostnaderna vara värt det." },
                { scenario: "Det är en väldigt enkel hemsida", why: "En 3-sidors landningsida eller blogg för personligt bruk? DIY är lätt. Det är bara 'vilken tema, lite text, publisera'." },
                { scenario: "Du hittat en DIY-lösning som passar perfekt", why: "Squarespace för en salongsida, Shopify för en liten webshop. Då är en plattform designad för den användartypen faktiskt perfekt." },
              ].map((item) => (
                <div key={item.scenario} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.scenario}</p>
                    <p className="text-[14px] text-body">{item.why}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Webbyrå */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Anlita en webbyrå — Det du faktiskt får
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              En professionell webbyrå kostar mellan 15 000 och 50 000 kronor för en solid hemsida. Allt från lokal tjänstemän till en e-handelsplattform. Här är vad du får:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { item: "Sparat 80+ timmar arbete", desc: "Du lägger 2-3 möten. De gör resten. Du sparar nästan två månader jämfört med DIY." },
                { item: "Professionell design", desc: "Inte 'ser ut som hundra andra hemsidor'. Din hemsida ser ut som ett professionellt företag — för att det är gjort av proffs." },
                { item: "SEO redan inbyggt", desc: "Snabb, mobilanpassad, rätt struktur, rätt metadata. Inte något du måste fixa senare eller gissa dig fram till." },
                { item: "Säkerhet från dag ett", desc: "SSL, backups, uppdateringar, säkerhetspatchning. Du behöver inte oroa dig för hackers eller serverfel." },
                { item: "Skalbarhet", desc: "Om ditt företag växer kan hemsidan växa. Inte 'nu måste vi bygga om allt'. Den är redan byggd för att växa." },
                { item: "Support", desc: "Något går fel? Du har någon att ringa. Inte 'googla svaret själv kl 23:00 på söndagen'." },
              ].map((item) => (
                <div key={item.item} className="bg-surface border border-border rounded-xl p-5 flex gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[15px] font-600 text-heading mb-1">{item.item}</p>
                    <p className="text-[14px] text-body">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ROI av webbyrå */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              ROI — Vad är en hemsida värd?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              En 25 000 kr hemsida från en webbyrå är inte en utgift. Det är en investering.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Om din hemsida drar in bara 2-3 extra kunder per år — och dessa kunder är värda 20 000+ kronor — så har hemsidan redan betalat för sig själv. Och vi har inte räknat på alla andra årens leads.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <p className="text-[15px] text-body leading-relaxed">
                <span className="font-600 text-heading">Ett exempel:</span> Du är en VVS-firma. En professionell hemsida drar in 3 större uppdrag per år. Varje uppdrag är värt 40 000 kronor. Det är 120 000 kronor i intäkt. Du tjänade in en 25 000 kr hemsida på vecka två.
              </p>
            </div>

            {/* Kostnader webbyrå */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Jämförande långsiktiga kostnader
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Låt oss säga att du är ett litet B2B-företag i Hässleholm. Här är realistiska kostnader över 3 år:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-600 text-heading">Scenario</th>
                    <th className="text-left py-3 px-4 font-600 text-heading">År 1</th>
                    <th className="text-left py-3 px-4 font-600 text-heading">År 2-3</th>
                    <th className="text-left py-3 px-4 font-600 text-heading">Totalt 3 år</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 px-4 text-body font-600">DIY (WordPress)</td>
                    <td className="py-3 px-4 text-body">10 000 kr</td>
                    <td className="py-3 px-4 text-body">2 000 kr/år</td>
                    <td className="py-3 px-4 text-body">14 000 kr</td>
                  </tr>
                  <tr className="bg-primary-subtle">
                    <td className="py-3 px-4 text-body font-600">Webbyrå + hosting</td>
                    <td className="py-3 px-4 text-body">25 000 kr</td>
                    <td className="py-3 px-4 text-body">1 500 kr/år</td>
                    <td className="py-3 px-4 text-body">28 000 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              "Men DIY är billigare!" — Ja, på papperet. Men glöm inte: DIY-kostnaden räknar inte på att hemsidan är långsammare, svårare att uppdatera, svagare SEO och utan support. Det är inte en apple-to-apple jämförelse.
            </p>

            {/* Vad ska du välja? */}
            <h2 className="text-[22px] sm:text-[26px] font-800 text-heading font-heading tracking-tight mt-12 mb-5">
              Så — Vad ska du välja?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Här är min ärliga rekommendation:
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  situation: "Du är en startup eller ett projekt med mycket tid och lite pengar",
                  choice: "DIY med Squarespace eller Wix",
                  why: "Dessa plattformer är designade för att vara enkla. Du kan få en fungerande hemsida på några dagar. Kostnad: 500-2000 kr/månad."
                },
                {
                  situation: "Du är ett etablerat företag med normal budget",
                  choice: "Anlita en lokal webbyrå",
                  why: "En 25 000-35 000 kr hemsida från en bra byrå spar dig tid, stress och fel. Du får något som faktiskt fungerar."
                },
                {
                  situation: "Du behöver en komplex lösning (e-handel, SaaS, många integreringar)",
                  choice: "Anlita en webbyrå — eller mer utvecklare",
                  why: "Ditt projekt är för komplext för DIY. Du behöver någon med kunskap. Det är bara vägen det."
                },
                {
                  situation: "Du älskar teknik och vill lära dig",
                  choice: "DIY med WordPress eller Next.js",
                  why: "Du kommer inte bli frustrerad. Du kommer lära dig. Och du får något unikt. Men räkna in 80+ timmar arbete."
                },
              ].map((item) => (
                <div key={item.situation} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[13px] text-muted uppercase tracking-wide mb-2 font-600">Om du är:</p>
                  <p className="text-[15px] text-body mb-3 leading-relaxed">{item.situation}</p>
                  <p className="text-[15px] font-600 text-heading mb-1">➜ {item.choice}</p>
                  <p className="text-[14px] text-muted">{item.why}</p>
                </div>
              ))}
            </div>

            {/* Relaterad läsning */}
            <div className="my-12 pt-8 border-t border-border">
              <p className="text-[13px] text-muted uppercase tracking-wide mb-4 font-600">Läs också</p>
              <div className="space-y-2">
                <a href="/tjanster/webbutveckling" className="flex items-center gap-2 text-[15px] text-primary hover:text-primary-dark transition-colors font-500">
                  Vad kostar en webbyrå? <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[20px] sm:text-[24px] font-800 text-white font-heading mb-4">
                Osäker på vilket vägen är för dig?
              </h3>
              <p className="text-[15px] text-white/80 mb-6 leading-relaxed">
                Vi kan berätta om DIY eller professionell byrå är rätt väg för dig. Det finns ingen universell svar — bara rätt svar för ditt företag.
              </p>
              <a href="/boka" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-600 text-[14px] hover:bg-primary-dark transition-colors">
                Boka samtal <ArrowRight size={16} />
              </a>
            </div>

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-border">
              <a href="/blogg" className="flex items-center gap-2 text-[14px] text-muted hover:text-heading transition-colors font-500">
                <ArrowLeft size={16} /> Tillbaka till blogg
              </a>
            </div>

          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
