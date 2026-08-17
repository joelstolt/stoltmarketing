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
                <span className="text-heading font-500">Byrå eller själv</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Annonsering
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Google Ads-byrå eller sköta det själv? Så avgör du
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 8 augusti 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> 8 min läsning
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              Google Ads ser barnsligt enkelt ut. Du skapar ett konto, skriver en annons, lägger en dagsbudget och trycker på play. Ett par veckor senare kommer fakturan, och då börjar en fråga gnaga: gick pengarna till nya kunder, eller mest till Google?
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det är precis rätt fråga att ställa. Efter tio år och 150+ webbprojekt har jag sett samma mönster om och om igen: Google Ads är lätt att starta och förvånansvärt svårt att göra lönsamt. Den här guiden hjälper dig avgöra vad som passar dig bäst just nu, att sköta annonseringen själv, anlita en byrå, eller börja själv och lämna över när det växer. Ingen väg är fel för alla, men fel väg för dig kostar pengar varje månad.
            </p>

            {/* Section 1 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Lätt att börja, svårt att göra lönsamt
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google har byggt annonsverktyget för att du ska komma igång snabbt. Det är smart av dem, men det betyder också att standardinställningarna är gjorda för att du ska spendera, inte nödvändigtvis för att du ska tjäna. Bred matchning står ofta på som förval, annonserna visas hos Googles sökpartners, och displaynätverket kan smyga med om du inte säger nej. Allt det där ökar antalet visningar. Det är inte samma sak som fler kunder.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Skillnaden mellan att annonser visas och att de ger lönsamma kunder är hela jobbet. Ett konto som ingen sköter fortsätter gladeligen betala för sökningar som aldrig blir affärer: fel ort, fel avsikt, folk som letar gratis råd eller söker jobb hos dig. Google säger inte ifrån. Systemet gör precis det du bad om, även när det du bad om var slöseri.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Var försiktig med Googles rekommendationer</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Fliken Rekommendationer, och funktionen som applicerar dem automatiskt, är bekväm men förslagen gynnar ofta Googles intäkter mer än din lönsamhet: höj budgeten, bredda matchningen, lägg till fler nätverk. Läs varje förslag och fråga dig om det ger fler rätt klick eller bara fler klick.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad det faktiskt kräver att sköta ett konto
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Innan du väljer väg är det värt att veta vad jobbet faktiskt innehåller. Att starta en kampanj tar tjugo minuter. Att få den att gå plus är en löpande syssla. Det här är delarna som avgör om annonseringen lönar sig:
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Ett välskött konto kräver:</p>
              <div className="space-y-2">
                {[
                  "Sökordsresearch: vilka ord dina kunder söker på när de är redo att köpa, inte bara titta",
                  "En tydlig struktur: kampanjer och annonsgrupper som håller isär olika tjänster och avsikter",
                  "Rätt matchningstyper så du inte betalar för sökningar som inte har med dig att göra",
                  "En växande lista med negativa sökord som stänger ute skräptrafik",
                  "Annonstexter som matchar sökningen och lockar rätt person att klicka",
                  "Målsidor som faktiskt gör klicket till en förfrågan",
                  "Konverteringsspårning som är rätt uppsatt, annars optimerar du i blindo",
                  "Löpande justering av bud, budget och tider utifrån vad datan visar",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ingen av delarna är raketforskning var för sig. Det är summan och regelbundenheten som är jobbet. Framför allt konverteringsspårningen: utan den vet varken du eller Googles algoritm vilka klick som blev kunder, och då optimerar ni båda på gissningar.
            </p>

            {/* Section 3 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Sköta själv: när det faktiskt funkar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Att köra själv är helt rimligt i rätt läge. Om budgeten är liten, verksamheten enkel och du har tålamod att lära dig, kan du absolut få ut värde utan att betala en byrå. Du känner dessutom dina kunder och ditt utbud bättre än någon konsult gör sin första månad.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Fördelen är pengarna: hela budgeten går till annonser, inget till arvode. Nackdelen är tiden och inlärningskurvan. De första månaderna kommer du göra misstag som kostar, det gör alla. Frågan är om de misstagen kostar mindre än ett arvode hade gjort.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Din budget är liten, säg under 5 000 till 8 000 kr i månaden",
                "Du säljer något ganska enkelt med tydlig sökavsikt",
                "Du har några timmar i veckan att lägga, varje vecka",
                "Du gillar siffror och tycker det är kul att skruva",
                "Du tål att det blir lite sämre innan det blir bättre",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Section 4 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Anlita en byrå: vad du egentligen betalar för
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              När folk tvekar inför ett byråarvode är det ofta för att de tänker på det som en kostnad för att någon trycker på knappar. Det du faktiskt köper är tre saker: tid du slipper lägga, erfarenhet från många konton, och verktyg och rutiner som fångar problem tidigt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Erfarenheten är den underskattade biten. Någon som skött hundra konton känner igen ett läckande sökord, en dålig matchningstyp eller en målsida som tappar folk, ofta på minuter. Samma insikt kan ta dig månader att nå på egen hand, och de månaderna betalar du i bränd budget. Bra annonsering handlar mindre om hemliga knep och mer om att slippa göra de dyra misstagen.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Baksidan finns också: en byrå som tar ditt konto och sedan inte gör något aktivt är ren förlust. Det är därför frågorna längre ner spelar roll.
            </p>

            {/* Section 5 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Kostnadsjämförelse: din tid, arvodet och den brända budgeten
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Den ärliga jämförelsen handlar inte om byrå kontra gratis. Den handlar om tre kostnader som alltid finns, oavsett väg. Grovt räknat på den svenska marknaden ser det ofta ut så här:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Byrå, fast arvode", text: "ofta runt 3 000 till 8 000 kr i månaden för ett litet konto" },
                { label: "Byrå, andel av budget", text: "vanligt 10 till 20 procent av annonsbudgeten" },
                { label: "Sköta själv", text: "0 kr i arvode, men 10 till 20 timmar i uppstart plus några i veckan" },
                { label: "Bränd budget", text: "ett oskött konto slösar ofta 20 till 50 procent på fel klick" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center gap-4 py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body text-right">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Sätt ett värde på din egen tid, så blir jämförelsen ärlig. Lägger du tio timmar i månaden på kontot är det inte gratis, även om det inte syns på en faktura. Och en byrå som sänker den brända budgeten från fyrtio procent till tio kan tjäna in sitt arvode flera gånger om, särskilt när budgeten växer. Det är där matematiken tippar: ju större budget, desto mer kostar varje procent slöseri, och desto mer är expertis värd.
            </p>

            {/* Section 6 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Mellanvägen som ofta är smartast
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det behöver inte vara antingen eller. För många småföretag är den bästa vägen en blandning, och den byter form över tid. Tre varianter jag ofta rekommenderar:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { n: "1", title: "Byrån sätter upp, du sköter driften", desc: "En proffsig grund med rätt struktur, spårning och negativa sökord från start, sedan tar du över det löpande. Du slipper de dyra nybörjarmisstagen men betalar inte för löpande skötsel." },
                { n: "2", title: "Du kör, byrån granskar", desc: "Du sköter kontot själv och låter någon med erfarenhet göra en genomgång per kvartal. Ett par timmar som fångar läckor du inte ser, till en bråkdel av ett månadsarvode." },
                { n: "3", title: "Konsulttimmar vid behov", desc: "Ingen bindning, ingen månadsavgift. Du köper hjälp när något krånglar eller när du vill växla upp. Passar den som mest vill ha en livlina." },
              ].map((item) => (
                <div key={item.n} className="bg-surface border border-border rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-light text-primary font-700 text-[14px] flex items-center justify-center">{item.n}</span>
                    <div>
                      <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                      <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Poängen med mellanvägen är att den skalar med dig. Börja billigt när budgeten är liten, köp in mer hjälp när kontot och intäkterna växer och varje procent slöseri börjar svida på riktigt.
            </p>

            {/* Section 7 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Frågor att ställa en byrå (och röda flaggor)
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Om du landar i att anlita någon avgörs det mesta av samtalet innan du skriver på. En seriös byrå svarar rakt och lägger inte beslag på din data. Här är vad du vill höra, och vad som ska få dig att tveka:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Bra tecken</p>
                <div className="space-y-2">
                  {["Du äger konto och data", "Rapport om leads, inte bara klick", "Ingen eller kort bindningstid", "Förklarar vad de gör och varför"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Röda flaggor</p>
                <div className="space-y-2">
                  {["Garanterar förstaplats eller ett visst antal leads", "Kontot ligger i deras namn", "Lång bindningstid direkt", "Luddiga svar och hemlig metod"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-5 mb-8">
              <p className="text-[15px] font-700 text-heading mb-3">Fråga innan du skriver på:</p>
              <div className="space-y-2">
                {[
                  "Ligger annonskontot i mitt namn, och får jag full tillgång?",
                  "Vad gör ni de första trettio dagarna, konkret?",
                  "Hur och hur ofta rapporterar ni, och mäter ni leads eller bara klick?",
                  "Vad kostar det totalt, och ingår annonsbudgeten eller är den separat?",
                  "Vad händer om jag vill avsluta samarbetet?",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Så avgör du på fem minuter
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Sammanfattat blir valet ganska enkelt när du ställer rätt frågor till dig själv:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "☐ Liten budget, enkel verksamhet och tid att lära: börja själv",
                "☐ Växande budget eller mer komplex verksamhet: ta in hjälp",
                "☐ Vill ha proffsig start men sköta driften: byrån sätter upp, du kör",
                "☐ Kör redan själv men osäker på om det läcker: köp en genomgång",
                "☐ Oavsett väg: se till att du äger kontot och att spårningen fungerar",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det dyraste alternativet är sällan byrå eller själv. Det är ett konto som ingen sköter, som fortsätter dra pengar månad efter månad utan att någon tittar. Välj en väg, sätt upp spårningen ordentligt och titta på siffrorna regelbundet. Då blir Google Ads en investering i stället för en gissning.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Vad kostar Google Ads i Sverige 2026?", href: "/blogg/vad-kostar-google-ads" },
                { title: "Google Ads vs SEO", href: "/blogg/google-ads-vs-seo" },
                { title: "Google Ads-tjänster", href: "/tjanster/google-ads" },
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
                Vill du ha en second opinion på ditt konto?
              </h3>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                Vi tittar kostnadsfritt på ditt Google Ads-konto och säger ärligt om det lönar sig att optimera eller lämna över. Boka en genomgång.
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
