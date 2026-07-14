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
                <span className="text-heading font-500">Vad kostar Google Ads</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Annonsering
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Vad kostar Google Ads i Sverige 2026? En ärlig prisguide
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 21 juli 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> 9 min läsning
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              Ingen kan säga exakt vad Google Ads kostar dig utan att först veta din bransch, din ort och vad en ny kund faktiskt är värd. Ändå vill alla ha en siffra innan de vågar börja. Så den här guiden ger dig riktiga intervall, delar upp kostnaden i sina beståndsdelar och räknar hela vägen fram till betalande kund, så att du kan sätta en budget som lönar sig i stället för att gissa.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Jag har satt upp och skött annonskonton åt småföretag i över tio år, och nästan alla dyra misstag beror på samma sak: man vet inte vart pengarna tar vägen. När du väl förstår det blir Google Ads förutsägbart, och du slutar bränna budget på klick som aldrig kunde bli affärer.
            </p>

            {/* Section: De tre delarna */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              De tre delarna som avgör vad Google Ads kostar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Många tror att Google Ads är en enda kostnad: en faktura från Google i slutet av månaden. Men det finns tre separata delar, och missar du någon av dem blir hela kalkylen fel. Det är summan av de här tre, inte bara klickpengarna, som avgör om annonseringen lönar sig.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { title: "1. Mediebudget: pengarna till Google", desc: "Det du betalar per klick gånger antalet klick. Det här är den enda delen som syns direkt i annonskontot, och den du styr helt själv via din dagsbudget." },
                { title: "2. Arvode: någon som sköter kontot", desc: "Ett konto sköter sig inte självt. Antingen lägger du din egen tid, eller så betalar du en byrå eller frilansare för att bygga, optimera och följa upp kampanjerna." },
                { title: "3. Kringkostnader: allt runt annonsen", desc: "En landningssida som säljer, konverteringsspårning och någon som svarar snabbt på förfrågningarna. Annonsen skickar bara dit besökaren. Resten avgör om klicket blir en kund." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Räkna med alla tre från början. En billig annonsbudget som landar på en trög startsida utan uppföljning är dyrare än den ser ut, för då betalar du för klick som ändå aldrig hade en chans att bli affär.
            </p>

            {/* Section: Vad ett klick kostar */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad ett klick kostar, och varför vissa branscher är så dyra
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              I Google Ads betalar du per klick. Priset sätts i en auktion: ju fler som vill synas på samma sökord, desto högre pris. Ett klick i en lugn nisch kan kosta ett par kronor, medan de mest konkurrensutsatta branscherna ligger på hundralappar per klick. Grovt räknat brukar det se ut så här i Sverige:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Nischad B2B eller hobby", text: "ofta 2 till 8 kr" },
                { label: "Lokala tjänster (städ, frisör)", text: "ofta 8 till 20 kr" },
                { label: "Hantverk och bygg", text: "ofta 15 till 40 kr" },
                { label: "Juridik, ekonomi, tandvård", text: "ofta 30 till 90 kr" },
                { label: "Försäkring och lån", text: "bland de dyraste" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Men ett högt klickpris är inte automatiskt dåligt. En jurist som betalar 80 kr per klick och stänger ett uppdrag värt 40 000 kr har en fantastisk affär. En webbshop som säljer prylar för 200 kr styck har det inte. Det är förhållandet mellan klickpris och kundvärde som räknas, inte klickpriset i sig.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Siffrorna ovan är ungefärliga och rör sig över tid och mellan orter. Se dem som storleksordning, inte som exakta priser. Vill du veta vad just dina sökord kostar tar det en kvart att slå upp innan du startar.
            </p>

            {/* Section: Rimlig månadsbudget */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Rimlig månadsbudget, och varför för lågt bara är bortkastat
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det vanligaste misstaget jag ser är att man startar med några hundralappar i månaden för att testa. Problemet är att en så liten budget sällan hinner samla nog med data för att Google ska lära sig vilka klick som blir kunder. Du bränner pengarna innan du vet något, drar slutsatsen att Ads inte funkar, och slutar.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              En budget behöver komma över bruset. För ett lokalt tjänsteföretag är ofta någonstans mellan 3 000 och 8 000 kr i månaden en realistisk start, beroende på klickpriset i din bransch. Tanken är att få tillräckligt många klick per månad för att se mönster: vilka sökord, annonser och tider som faktiskt ger förfrågningar.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Räkna baklänges från en kund</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Sätt inte budgeten på känsla. Räkna: hur många klick behöver du för en förfrågan, och hur många förfrågningar för en kund? Är en kund värd 10 000 kr och du stänger en av fyra förfrågningar har du råd med ganska dyra klick. Är kunden värd 500 kr är matematiken en helt annan. Det är den siffran, inte magkänslan, som ska styra budgeten.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Byråarvode */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Byråarvode: fast pris, procent eller timme
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Sköter du inte kontot själv gör någon annan det, och de tar oftast betalt på ett av tre sätt. Inget är rätt eller fel, men de skapar olika incitament, och det är värt att förstå innan du skriver på.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { title: "Fast månadsarvode", desc: "Ett bestämt belopp varje månad. Förutsägbart och lätt att budgetera. Risken är att byrån gör lika lite oavsett om kontot hade behövt mer jobb en viss månad." },
                { title: "Procent av mediebudgeten", desc: "Ofta runt 10 till 20 procent av det du spenderar. Skalar med kontot, men skapar ett incitament att höja din budget snarare än din vinst. Fråga hur de tänker när det inte längre lönar sig att spendera mer." },
                { title: "Timpris", desc: "Du betalar för faktiskt nedlagd tid. Transparent, men svårare att förutse, och små konton riskerar att få för lite tid för att något ska hända." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              För ett litet konto landar arvodet ofta någonstans mellan 2 000 och 6 000 kr i månaden. Var vaksam på båda ytterligheterna: ett arvode på några hundralappar betyder att ingen faktiskt tittar på kontot, och ett stort arvode på en liten mediebudget äter upp hela vinsten.
            </p>

            {/* Section: Räkneexempel */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Räkneexempel: från budget till betalande kund
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Siffror betyder något först när du följer dem hela vägen till en kund. Så här kan det se ut för ett lokalt tjänsteföretag med en medelstor budget. Talen är påhittade för att illustrera, dina egna blir andra, men logiken är densamma.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Så följer pengarna genom tratten:</p>
              <div className="space-y-2">
                {[
                  "Månadsbudget: 6 000 kr till Google",
                  "Klickpris i snitt 20 kr, alltså cirka 300 klick",
                  "5 av 100 klick skickar en förfrågan: cirka 15 leads",
                  "1 av 4 leads blir kund: cirka 4 nya kunder",
                  "Snittaffär 12 000 kr: cirka 48 000 kr i intäkt",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Sex tusen kronor in till Google, plus ett arvode, ger runt 48 000 kr ut. Även med byråkostnad är det en tydlig vinst. Men vrid ner andelen som blir kund till en av tio, eller snittaffären till 3 000 kr, och samma budget går back. Det är därför du måste känna dina egna tal innan du skalar upp: att dubbla en lönsam kampanj är smart, att dubbla en olönsam är bara att förlora pengar snabbare.
            </p>

            {/* Section: Bränna budget */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vanliga sätt att bränna budget i onödan
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det mesta av det spill jag ser i nya konton går att stoppa på en eftermiddag. Här är de vanligaste sätten att slänga pengar i sjön, och vad du gör i stället.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Slöseri</p>
                <div className="space-y-2">
                  {["Bred matchning utan negativa sökord", "Skicka all trafik till startsidan", "Köra utan konverteringsspårning", "Pausa allt efter två veckor", "Annonsera dygnet runt fast ingen svarar"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Smartare</p>
                <div className="space-y-2">
                  {["Fras- eller exaktmatchning plus negativa ord", "En egen landningssida per kampanj", "Spårning på plats innan du startar", "Ge det minst 2 till 3 månader", "Schemalägg annonser när du kan ta samtal"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Negativa sökord förtjänar en extra rad. Utan dem betalar du för klick på sökningar som gratis, jobb, begagnat eller helt orelaterade ord. Att gå igenom sökordslistan och lägga till negativa varje vecka är ofta det enskilt billigaste sättet att förbättra ett konto.
            </p>

            {/* Section: När det inte är rätt */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              När Google Ads inte är rätt för dig
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Google Ads passar inte alla, och en ärlig byrå säger det innan du börjar. Känner du igen dig i punkterna nedan är pengarna oftast bättre använda någon annanstans först, till exempel på att fixa sajten eller bygga upp recensioner och SEO.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Din sajt konverterar inte redan i dag. Skickar den inga förfrågningar från befintliga besökare kommer köpt trafik inte heller att göra det. Fixa sidan först.",
                "Du hinner inte svara snabbt på leads. En förfrågan som ligger en dag är ofta en förlorad affär.",
                "Nästan ingen googlar det du säljer. Är sökvolymen i din nisch mycket låg finns det helt enkelt inga klick att köpa, oavsett budget.",
                "Marginalen per affär är för låg för att bära klickpriset i din bransch.",
                "Du kan inte mäta vad en kund är värd. Utan den siffran flyger du blint och vet aldrig om det lönar sig.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              I de lägena ger ofta lokal SEO, recensioner och en vassare hemsida mer tillbaka per krona. Google Ads är ett kraftfullt verktyg när grunden sitter, inte en genväg förbi den.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Google Ads-byrå eller sköta det själv?", href: "/blogg/google-ads-byra-eller-sjalv" },
                { title: "Google Ads vs SEO: vad ska du satsa på?", href: "/blogg/google-ads-vs-seo" },
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
              <h3 className="text-[22px] sm:text-[26px] font-600 text-white font-heading tracking-tight mb-3">
                Osäker på om Google Ads lönar sig för dig?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Boka en kostnadsfri genomgång så räknar vi på din bransch, dina sökord och en realistisk budget innan du lägger en krona.
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
