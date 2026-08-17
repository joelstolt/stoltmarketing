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
        <section className="hero-dark relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
                <a href="/" className="hover:text-heading transition-colors">Start</a>
                <span className="text-border">·</span>
                <a href="/blogg" className="hover:text-heading transition-colors">Blogg</a>
                <span className="text-border">·</span>
                <span className="text-heading font-500">Marknadsföring småföretag</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Marknadsföring
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Marknadsföring för småföretag: mest resultat för minsta budget
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 15 augusti 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> 10 min läsning
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              De flesta småföretagare jag träffar gör samma sak: lite Facebook här, en Google-annons där, ett halvfärdigt nyhetsbrev, en Instagram som uppdateras när det råkar finnas tid. Resultatet blir en massa aktivitet men nästan inga nya kunder. Problemet är sällan att du gör för lite. Det är att du gör för mycket, utan att någon kanal får en ärlig chans att fungera.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Den här guiden handlar om det motsatta: hur du med en liten budget väljer bort nästan allt och satsar där pengarna faktiskt kommer tillbaka. Efter 150+ webbprojekt och tio år i branschen är mönstret tydligt. Företagen som lyckas gör färre saker, men gör dem ordentligt, och i rätt ordning.
            </p>

            {/* Section 1: Grundprincipen */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Grundprincipen: fokus slår spretighet när budgeten är liten
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Ett stort företag har råd att synas överallt samtidigt. Deras budget tål att en kanal floppar. Det gör inte din. När budgeten är liten blir varje hundralapp och varje timme du lägger något du måste kunna följa hela vägen fram till en förfrågan. Då är det farligt att sprida sig tunt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Anledningen är enkel. De flesta marknadsföringskanaler belönar uthållighet. Lokal SEO tar månader innan den lyfter. Ett nyhetsbrev blir värt något först när listan har vuxit. En annonskampanj behöver data innan den slutar bränna pengar. Hoppar du hela tiden mellan kanaler hinner ingen mogna, och du får aldrig veta vad som egentligen hade fungerat.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Så den första regeln är obekväm men sann: gör färre saker. Välj en eller två kanaler, ge dem tre till sex månader, och mät. Det slår att göra fem saker halvhjärtat om och om igen.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Börja i det du redan vet</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Innan du väljer kanal, svara på en fråga: var kommer dina bästa kunder ifrån idag? Rekommendationer, Google, en gammal annons, en mässa? Kanalen som redan ger dig kunder är nästan alltid den du ska förstärka först, inte den du ska byta ut mot något nytt och obeprövat.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Steg 0 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 0: se till att grunden konverterar innan du köper trafik
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det dyraste misstaget i marknadsföring är att köpa trafik till en sajt som inte omvandlar besökare till kunder. Det är som att hälla vatten i en hink med hål. Innan du lägger en krona på annonser måste grunden sitta: en hemsida som ber om affären och en Google Business Profile som är komplett.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Det här ska sitta innan du köper en enda klick:</p>
              <div className="space-y-2">
                {[
                  "En hemsida som på fem sekunder säger vad du gör och för vem",
                  "Ett tydligt nästa steg på varje sida (ring, boka eller fyll i formulär)",
                  "Telefonnummer och formulär som syns utan att man behöver leta",
                  "Google Business Profile ifylld, med riktiga bilder och rätt öppettider",
                  "Några äkta recensioner att luta sig mot",
                  "Ett enkelt sätt att se varifrån besökarna kommer",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det här kostar mest tid, inte pengar. Men det är den enskilt viktigaste investeringen. En sajt som omvandlar dubbelt så många besökare till förfrågningar gör varje krona du senare lägger på trafik dubbelt så värdefull. Fixar du inte grunden först betalar du i praktiken för att folk ska besöka en sida som ändå inte får dem att höra av sig.
            </p>

            {/* Section 3: Lokal SEO och innehåll */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Grunden som ger avkastning länge: lokal SEO och innehåll
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det här är kanalen som fortsätter ge. När du väl rankar för din tjänst plus din ort får du förfrågningar månad efter månad utan att betala per klick. Den är trög att starta men bygger på sig med tiden. För de flesta lokala småföretag är det här pengarna finns på sikt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              I praktiken är det två saker: lokal SEO (Google Business, recensioner, ort i rubriker och titlar) och innehåll som svarar på frågorna dina kunder faktiskt googlar. Varje fråga du besvarar ordentligt blir en sida som kan ranka, och en anledning för Google att lita på dig. Skillnaden mot betald trafik blir tydlig så fort du jämför vad som händer när du slutar:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Betald annons", text: "Slutar du betala, slutar trafiken direkt" },
                { label: "Organisk grund", text: "Ligger kvar och drar kunder i månader" },
                { label: "Per ny kund", text: "Blir ofta billigare ju längre du bygger" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det betyder inte att annonser är dåliga. Det betyder att om du bara har råd att bygga en sak på lång sikt, bygg grunden. Den blir en tillgång du äger, inte en hyra du betalar varje månad för att synas.
            </p>

            {/* Section 4: Google Ads */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Snabb trafik när du behöver den: Google Ads och riktade annonser
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              SEO är ett maraton. Ibland behöver du kunder redan den här månaden, eller så är du helt ny och rankar ingenstans än. Då är betald annonsering rätt verktyg. Google Ads fångar folk i exakt det ögonblick de söker efter det du säljer, och därför blir de ofta till förfrågningar. För en lokal hantverkare eller konsult är det ofta den snabbaste vägen till en telefon som faktiskt ringer.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Annonser på Facebook och Instagram fungerar annorlunda. Där söker ingen efter dig, du avbryter någon som scrollar. Det passar bättre för produkter och erbjudanden som väcker lust på bild, sämre för tjänster folk letar upp först när behovet redan finns. Har du liten budget och säljer en lokal tjänst: börja med sök, inte med sociala annonser.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Den vanligaste dyra missen är att lägga för lite. En annonsbudget som är för liten hinner aldrig samla nog med data för att bli lönsam. Då blir slutsatsen fel: att Google Ads inte funkar, när sanningen är att kampanjen aldrig fick en chans. Sätt hellre en summa du kör konsekvent i minst två till tre månader än att strö småbelopp och gissa.
            </p>

            {/* Section 5: E-post och recensioner */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Återkommande kunder: e-post och recensioner
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Den billigaste tillväxten är kunderna du redan har. E-post låter dig äga relationen i stället för att hyra den av en algoritm, och recensioner gör nöjda kunder till dina bästa säljare. Båda kostar nästan ingenting och glöms nästan alltid bort.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-8">
              <p className="text-[15px] font-700 text-heading mb-3">Enkla saker som ger mest tillbaka:</p>
              <div className="space-y-2">
                {[
                  "Fråga varje nöjd kund om en Google-recension samma dag jobbet är klart",
                  "Samla e-postadresser med ett riktigt värdeerbjudande, inte bara en tom prenumerera-knapp",
                  "Skicka något användbart då och då, inte bara rabatter",
                  "Hör av dig till gamla kunder som inte köpt på ett tag",
                  "Svara på alla recensioner, även de sura",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det här är det första jag skulle göra om jag drev ett litet företag med tom kassa. Kunder du redan har litar på dig. Att få dem att komma tillbaka och rekommendera dig vidare är den billigaste marknadsföring som finns, och den som flest struntar i.
            </p>

            {/* Section 6: Sociala medier */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Sociala medier: när det är värt tiden och när det inte är det
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Sociala medier är antingen där småföretag slösar mest tid för minst resultat, eller tvärtom en av deras bästa kanaler. Vilket det blir beror helt på vad du säljer. Var ärlig med vilken av dem du är innan du lägger timmar på det.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Värt tiden när</p>
                <div className="space-y-2">
                  {["Du säljer något visuellt (mat, inredning, hantverk)", "Dina kunder redan hänger där", "Du orkar vara konsekvent i månader", "Du kan visa arbetet, inte bara reklam"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Sällan värt det när</p>
                <div className="space-y-2">
                  {["Du säljer en tjänst folk googlar vid behov", "Du postar sporadiskt utan plan", "Det stjäl tid från grunden som faktiskt konverterar", "Du gör det bara för att alla andra gör det"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det finns ingen medalj för att finnas på varje plattform. Om Instagram inte ger dig kunder och tar tid från din hemsida eller dina annonser, är det helt okej att strunta i det. Hellre en kanal du sköter bra än fyra du sköter dåligt.
            </p>

            {/* Section 7: Budgetfördelning */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              En enkel budgetfördelning: tre nivåer och hur du mäter
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det finns ingen mall som passar alla, men det finns en logisk ordning att bygga i beroende på hur mycket du har att röra dig med. Tänk i nivåer, och gå inte vidare till nästa förrän den under är på plats.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { n: "1", title: "Nästan noll i budget", desc: "Fokusera på grunden och det som är gratis: Google Business, recensioner, att svara på frågor kunder ställer och att be om rekommendationer. Här investerar du tid, inte pengar, och det räcker längre än de flesta tror." },
                { n: "2", title: "Några tusen i månaden", desc: "Behåll grunden och lägg till en betald kanal. Oftast Google Ads mot dina viktigaste sökord, eller hjälp att bygga innehåll som rankar lokalt. Kör en sak konsekvent i stället för att dela upp beloppet på flera." },
                { n: "3", title: "Mer att röra dig med", desc: "Grund plus annonser plus att på allvar börja bygga en e-postlista och kanske en innehålls- eller videosatsning. Nu har du råd att låta flera saker mogna parallellt, och att låta datan styra var du skalar upp." },
              ].map((item) => (
                <div key={item.n} className="bg-surface border border-border rounded-xl p-5 flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light text-primary font-700 text-[15px] flex items-center justify-center">{item.n}</span>
                  <div>
                    <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                    <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Oavsett nivå: mät en enda sak till att börja med. Hur många förfrågningar fick du, och varifrån kom de? Du behöver inga avancerade verktyg. En enkel anteckning över hur varje ny kund hittade dig säger mer än de flesta dashboards. Efter några månader ser du svart på vitt vilken kanal som förtjänar mer och vilken du lugnt kan lägga ner.
            </p>

            {/* Section 8: Checklist */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Kom igång den här veckan
            </h2>

            <div className="space-y-2 mb-8">
              {[
                "☐ Skriv ner var dina tre senaste kunder kom ifrån",
                "☐ Gör klart och fyll i din Google Business Profile",
                "☐ Kontrollera att hemsidan säger vad du gör inom fem sekunder",
                "☐ Be dina tre senaste nöjda kunder om en recension",
                "☐ Välj EN kanal att satsa på de kommande tre månaderna",
                "☐ Bestäm hur du ska mäta om det funkar innan du börjar",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Marknadsföring för småföretag handlar inte om att göra allt. Det handlar om att göra rätt saker i rätt ordning, och att ge dem tid nog att fungera. Väljer du bort det som spretar och satsar där pengarna kommer tillbaka, kommer du längre på en liten budget än de flesta gör på en stor.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Content-strategi för småföretag", href: "/blogg/content-strategi-smaforetag" },
                { title: "Google Ads vs SEO", href: "/blogg/google-ads-vs-seo" },
                { title: "Våra tjänster", href: "/tjanster" },
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
              <h3 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mb-3">
                Vill du ha en marknadsföringsplan som passar din budget?
              </h3>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                Boka en kostnadsfri genomgång så prioriterar vi kanalerna som ger mest för just ditt företag.
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
