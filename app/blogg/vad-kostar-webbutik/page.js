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
                <span className="text-heading font-500">Vad kostar en webbutik</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                E-handel
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Vad kostar en webbutik 2026? Komplett prisguide för e-handel
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 28 juli 2026
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
              Vad kostar en webbutik? Det är den vanligaste frågan jag får från företagare som vill börja sälja online. Och det ärliga svaret är att det beror på. En webbutik kan kosta några tusenlappar eller flera hundra tusen, och båda kan vara helt rätt beslut. Skillnaden ligger i vad du faktiskt behöver, inte i vem som råkar sälja dig lösningen.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Efter drygt 150 webbprojekt och tio år i branschen har jag sett hur ofta priset blir en obehaglig överraskning. Nästan aldrig för att någon lurats, utan för att köparen bara räknade på en av flera delar. Den här guiden delar upp vad en webbutik kostar i fem tydliga bitar, ger dig realistiska prisintervall för svensk e-handel 2026, och visar var de dolda kostnaderna brukar gömma sig.
            </p>

            {/* Section 1: De fem delarna */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              De fem delarna som avgör vad din webbutik kostar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det första du behöver förstå är att en webbutik inte har ett pris. Den har fem. När någon säger en siffra är det värt att fråga vilken av de här delarna siffran gäller, för de kostar väldigt olika och betalas på olika sätt.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Så här delar jag upp kostnaden:</p>
              <div className="space-y-2">
                {[
                  "Plattform: systemet butiken byggs på (Shopify, WooCommerce eller skräddarsytt)",
                  "Bygge och design: att sätta upp, forma och fylla butiken med produkter",
                  "Betalning: avgifter varje gång någon handlar (kort, Swish, Klarna)",
                  "Frakt: fraktavtal, emballage och koppling mot fraktbolag",
                  "Löpande drift: hosting, uppdateringar, support och produktvård",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Två av de här delarna är i huvudsak engångskostnader (plattformsuppsättning och bygge). Tre av dem fortsätter månad efter månad så länge butiken lever. Missar du de löpande blir hela kalkylen fel, och det är precis där de flesta går bort sig.
            </p>

            {/* Section 2: Plattformen */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Plattformen: Shopify, WooCommerce eller skräddarsytt
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Plattformen är det första vägskälet, och det påverkar både startkostnad och vad du betalar varje månad i flera år framåt. Här är ungefär hur de tre vanligaste vägarna ser ut prismässigt:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Shopify", text: "runt 300 till 900 kr per månad" },
                { label: "WooCommerce", text: "gratis system, hosting runt 100 till 500 kr per månad" },
                { label: "Skräddarsytt", text: "hög engångskostnad, låg driftkostnad" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Shopify är en allt-i-ett-lösning där du hyr hela systemet. Du slipper tänka på servrar och säkerhet, men du är också bunden till deras avgifter och deras sätt att göra saker. WooCommerce bygger på WordPress: själva tillägget är gratis, men du betalar för hosting, tema och de tillägg du lägger på. Du äger mer, men du ansvarar också för driften. Skräddarsytt är för dig med särskilda behov, hög volym eller integrationer som standardsystemen inte klarar, och kostar mest att bygga men kan bli billigast att driva.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Räkna på tre år, inte på startpriset</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    En låg månadsavgift låter billigt i stunden, men 600 kr i månaden blir över 21 000 kr på tre år. Innan du väljer plattform: summera vad den kostar över tre eller fyra år, inklusive avgifter och tillägg. Då blir jämförelsen ärlig.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Bygget */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Bygget: mall eller skräddarsytt
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det är i bygget priserna spretar mest, och det är också här du har mest att vinna på att välja rätt nivå. Grovt förenklat står valet mellan en mall som anpassas och ett skräddarsytt bygge från grunden.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-1">Mall eller tema</p>
                <p className="text-[14px] text-body leading-relaxed mb-3">ofta 15 000 till 40 000 kr</p>
                <div className="space-y-2">
                  {["Snabbt igång", "Beprövad struktur", "Mindre unikt uttryck", "Räcker långt för de flesta"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-1">Skräddarsytt bygge</p>
                <p className="text-[14px] text-body leading-relaxed mb-3">från 50 000 kr och uppåt</p>
                <div className="space-y-2">
                  {["Helt egen design", "Egna funktioner", "Tar längre tid att bygga", "Lönar sig vid volym eller särskilda behov"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Vad är det då som driver priset uppåt? Antal produkter, integrationer mot affärssystem eller lager, egen grafisk design och specialfunktioner som konfiguratorer eller medlemsköp. De flesta småföretag som ska börja sälja klarar sig väldigt långt på en välbyggd mall. Skräddarsytt blir rätt först när butiken är själva verksamheten och volymen försvarar investeringen.
            </p>

            {/* Section 4: Betalning och frakt */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Betalning och frakt: avgifterna som tär på marginalen
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              De här kostnaderna är lätta att glömma i en offert, men de fortsätter för varje enskild order så länge butiken finns. Över tid är det ofta de som betyder mest för lönsamheten. Ungefär så här ser avgifterna ut:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Kortbetalning", text: "runt 1,5 till 2,5 % plus en liten fast avgift" },
                { label: "Swish Handel", text: "ofta 1 till 3 kr per köp plus månadsavgift" },
                { label: "Klarna och faktura", text: "runt 2 till 4 % plus fast avgift" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Klarna och delbetalning höjer ofta konverteringen, men kostar också mer per order. Kort och Swish är billigare men förväntas oftast finnas med. Mitt råd är att räkna avgifterna på ditt faktiska snittordervärde i kronor, inte som en procentsats i huvudet. En avgift på tre procent känns liten tills du ser den på tusen ordrar.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ett snabbt räkneexempel: säljer du en vara för 500 kr och kunden betalar med kort, försvinner runt 10 till 15 kr i avgift. Väljer kunden Klarna kan det bli ungefär det dubbla. Det låter smått per köp, men på hundra ordrar i månaden blir det tusenlappar som annars hade varit din vinst. Därför är det värt att veta exakt vilka betalsätt du erbjuder och vad var och en kostar innan du lanserar.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Frakten är den andra tysta posten. Utöver själva fraktavtalet tillkommer emballage och tiden att paketera. Erbjuder du fri frakt är den inte gratis, den tas från din marginal. Bestäm tidigt om frakten ska bäras av kunden eller av dig, och lägg in den i din prissättning från början.
            </p>

            {/* Section 5: Löpande drift */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Löpande drift: det som fortsätter ticka
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En webbutik är inte en sak du bygger en gång och sedan lämnar. Det är mer likt en fysisk butik: den behöver skötas för att fortsätta fungera och sälja. De här posterna kommer varje månad oavsett hur mycket du säljer.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Hosting och domän", desc: "Servern butiken bor på och din adress. Runt 100 till 500 kr per månad för WooCommerce, ofta inbakat i avgiften hos Shopify." },
                { title: "Uppdateringar och säkerhet", desc: "System, tema och tillägg måste hållas aktuella. En butik som inte uppdateras blir långsam och en säkerhetsrisk, och det märks först när något gått fel." },
                { title: "Support och ändringar", desc: "Någon måste kunna fixa när en knapp slutar fungera, en kampanj ska in eller ett pris ska ändras. Antingen din tid eller ett avtal med den som byggt butiken." },
                { title: "Produktvård", desc: "Lägga upp produkter, bilder, texter och priser, och plocka bort det som är slut. Det här är den dolda tidstjuven i nästan varje webbutik jag varit inblandad i." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section 6: Budgetnivåer */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Tre realistiska budgetnivåer
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              För att göra det konkret: här är tre nivåer jag brukar prata om med kunder. De flesta hamnar i nivå ett eller två, och det finns inget fel i att börja lagom och växa när butiken börjar sälja.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { n: "1", title: "Kom igång", price: "runt 10 000 till 30 000 kr i uppstart, plus några hundra till tusen kronor i månaden", desc: "Mall på Shopify eller WooCommerce, mycket gör du själv. För dig som vill testa en idé utan att satsa allt direkt." },
                { n: "2", title: "Seriös butik", price: "runt 50 000 till 150 000 kr", desc: "Professionellt bygge, egen design och ordentlig struktur som tål att växa. För dig som ska driva butiken på riktigt och vill att den ska konvertera." },
                { n: "3", title: "Skala", price: "från 150 000 kr och uppåt", desc: "Skräddarsytt med integrationer mot affärssystem och lager, byggt för hög volym. När e-handeln är kärnan i verksamheten." },
              ].map((item) => (
                <div key={item.n} className="bg-surface border border-border rounded-xl p-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary-light text-primary border border-primary/10 flex items-center justify-center text-[14px] font-700 flex-shrink-0">
                    {item.n}
                  </div>
                  <div>
                    <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                    <p className="text-[14px] font-600 text-primary mb-1">{item.price}</p>
                    <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Mitt vanligaste råd är att börja på den nivå som matchar var du står idag, inte där du hoppas vara om tre år. En butik du faktiskt lanserar och lär dig av slår en perfekt butik som aldrig blir klar. Du kan alltid bygga vidare när försäljningen väl finns där och betalar för nästa steg.
            </p>

            {/* Section 7: Dolda kostnader */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Dolda kostnader och var du bör vara skeptisk
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Priset du faktiskt betalar är inte alltid priset du fick i offerten. Det behöver inte betyda att någon är oärlig, men det finns ett par poster som nästan alltid glöms bort, och ett par upplägg som är värda att titta extra noga på.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Den största glömda kostnaden: trafik</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    En webbutik utan besökare säljer ingenting, hur snygg den än är. Budgetera från början för att folk faktiskt ska hitta butiken, genom SEO, annonser eller båda. Många lägger hela sin peng på bygget och inget på att bli hittade, och undrar sedan varför det är tyst.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Rimligt</p>
                <div className="space-y-2">
                  {["Tydlig uppdelning av alla kostnader", "Fast pris för själva bygget", "Du äger konto, domän och data", "Öppenhet om löpande avgifter"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Varningstecken</p>
                <div className="space-y-2">
                  {["Pris bara angivet som från en summa", "Allt viktigt tillkommer efteråt", "Procent på din omsättning i all evighet", "Låst i långt avtal du inte kan lämna"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Var också skeptisk mot en helt gratis webbutik. Den finns, men du betalar nästan alltid någon annanstans: i höga transaktionsavgifter, i begränsningar som tvingar fram en dyr uppgradering, eller i din egen tid. Den enkla frågan som avslöjar det mesta är: vad blir totalpriset efter tre år, med alla avgifter inräknade? En seriös leverantör räknar det åt dig utan att du behöver be om det.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Starta e-handel: komplett guide", href: "/blogg/e-handel-guide" },
                { title: "Swish, Klarna eller kort? Betallösningar", href: "/blogg/betallosningar-webbutik" },
                { title: "E-handelstjänster", href: "/tjanster/e-handel" },
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
                Ska du starta eller byta webbutik?
              </h3>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                Boka en kostnadsfri genomgång så hjälper vi dig välja rätt plattform och ger ett tydligt pris utan överraskningar.
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
