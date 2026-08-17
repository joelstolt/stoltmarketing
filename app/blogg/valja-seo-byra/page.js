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
                <span className="text-heading font-500">Välja SEO-byrå</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                SEO
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Så väljer du rätt SEO-byrå (och 6 tecken på att du blir lurad)
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 14 juli 2026
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
              Du får ett samtal från en SEO-byrå. Säljaren är trevlig, självsäker och lovar förstaplats på Google inom tre månader. Annars pengarna tillbaka. Det låter nästan för bra, och det är precis där de flesta småföretagare går vilse.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              SEO är en av de mest värdefulla sakerna du kan investera i som lokalt företag. Det är också en av branscherna med flest oseriösa aktörer. Efter tio år och 150+ webbprojekt har jag sett vad som skiljer en byrå som faktiskt drar in kunder från en som bara skickar en snygg PDF varje månad. Här är hur du ser skillnaden innan du skriver på.
            </p>

            {/* Section 1: Dåligt rykte */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Varför SEO-branschen har ett så dåligt rykte
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Till skillnad från en ny hemsida, som du kan se och ta på, händer SEO bakom kulisserna och tar månader att ge resultat. Det gör det lätt att sälja och svårt att hålla någon ansvarig. Perfekt grogrund för dem som hellre fakturerar än levererar.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Tre saker har förgiftat brunnen. Det första är garantier som ingen kan hålla, eftersom ingen kontrollerar Googles algoritm. Det andra är luddiga rapporter fulla av siffror som ser imponerande ut men aldrig kopplas till en enda ny kund. Det tredje är långa bindningstider som fortsätter dra pengar även när ingenting rör sig.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det frustrerande är att SEO faktiskt fungerar när det görs rätt. Problemet är inte SEO. Problemet är hur det säljs. När du väl vet vad du ska titta efter blir det enkelt att sålla bort de oseriösa.
            </p>

            {/* Section 2: 6 varningstecken */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              6 varningstecken på att du blir lurad
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Ingen enskild punkt är alltid ett dödsstraff, men om en byrå bockar av flera av de här ska du bli försiktig.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { n: "1", title: "De garanterar plats 1 på Google", desc: "Ingen kan lova en exakt placering. Google rankar på hundratals faktorer som ändras hela tiden. En garanti är antingen okunskap eller en ren säljbluff, och ibland betyder den att de tänker använda genvägar som får dig straffad i stället." },
                { n: "2", title: "Metoden är hemlig", desc: "Seriös SEO är ingen trollformel. Om byrån inte kan förklara vad de gör på vanlig svenska är det ofta för att de gör väldigt lite, eller något riskabelt de inte vill att du ska förstå." },
                { n: "3", title: "Inga mätbara mål", desc: "De pratar om synlighet och närvaro men sätter aldrig ett konkret mål kopplat till trafik eller förfrågningar. Utan mål kan de aldrig misslyckas, och du kan aldrig utvärdera om pengarna gör nytta." },
                { n: "4", title: "Låst i långa avtal", desc: "12 eller 24 månaders bindningstid innan de ens visat ett resultat. En byrå som tror på sitt eget arbete behöver inte kedja fast dig. Bra arbete får kunder att stanna av fri vilja." },
                { n: "5", title: "Rapporter utan affärsnytta", desc: "Rapporten visar rankingar och visningar men aldrig hur många som faktiskt hörde av sig. Ranking utan trafik och leads är fåfänga. Du betalar inte för placeringar, du betalar för kunder." },
                { n: "6", title: "De äger ditt konto och din data", desc: "De sätter upp Analytics, Search Console och Google Business i sitt eget konto. Den dag du säger upp dig står du utan historik och tillgång. Dina konton ska alltid vara dina, punkt slut." },
              ].map((item) => (
                <div key={item.n} className="bg-surface border border-border rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light text-primary font-700 text-[15px] flex items-center justify-center">
                      {item.n}
                    </span>
                    <div>
                      <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                      <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Ett snabbt sätt att känna igen skillnaden är att lyssna på hur de pratar redan i första samtalet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Så låter en seriös byrå</p>
                <div className="space-y-2">
                  {[
                    "Vi kan inte lova en exakt position",
                    "Här är vad vi gör månad för månad",
                    "Vi mäter förfrågningar, inte bara ranking",
                    "Du äger alla konton själv",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Så låter en oseriös</p>
                <div className="space-y-2">
                  {[
                    "Etta på Google, garanterat",
                    "Vi har en hemlig egen metod",
                    "Kolla, dina visningar ökade",
                    "Vi sköter allt i vårt konto",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Rätta frågorna */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              De rätta frågorna att ställa innan du skriver på
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En bra byrå välkomnar svåra frågor, för de har inget att dölja. En oseriös börjar sväva ut eller byta ämne. Ta med den här listan till första mötet och notera hur de svarar.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Fråga alltid det här:</p>
              <div className="space-y-2">
                {[
                  "Kan jag prata med två kunder ni jobbat med i minst ett år?",
                  "Vad gör ni konkret månad 1, 2 och 3?",
                  "Hur mäter ni att det funkar, och vad är målet?",
                  "Vem äger Analytics, Search Console och Google Business? (rätt svar är: jag)",
                  "Vad händer om jag säger upp mig, får jag behålla allt arbete?",
                  "Vilken bindningstid har ni, och varför?",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Be om referenser och ring faktiskt upp dem. Fråga om det blev fler förfrågningar och kunder, inte bara högre ranking, och om de skulle anlita byrån igen. En byrå med nöjda långtidskunder kopplar gärna ihop er. Tystnad, eller ursäkter om att kunderna är hemliga, är i sig en varningssignal.
            </p>

            {/* Section 4: Vad kostar SEO */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad kostar seriös SEO egentligen?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Frågan vad SEO kostar har inget enkelt svar, men prisbilden i Sverige följer ett ganska tydligt mönster. Grovt räknat får du ungefär det här per nivå för ett litet lokalt företag, räknat som månadsarvode.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { label: "Under 3 000 kr/mån", text: "Sällan seriöst, ofta automatiserat" },
                { label: "5 000 till 10 000 kr/mån", text: "Rimligt för ett lokalt småföretag" },
                { label: "10 000 till 25 000 kr/mån", text: "Hård konkurrens eller flera orter" },
                { label: "Engångsprojekt 15 000 kr+", text: "Teknisk grund eller ombyggnad" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light gap-4">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body text-right">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Det som driver priset är i grunden tid. SEO är research, innehåll, teknisk optimering och länkarbete, och allt det tar timmar av en människa som vet vad hen gör. En byrå som tar 2 000 kr i månaden kan helt enkelt inte lägga någon meningsfull tid på just dig. Räkna baklänges: vad får de för timpeng, och hur många timmar blir det?
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Billig SEO är ofta dyrast i slutänden</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Det billigaste alternativet betyder ofta automatiskt skräpinnehåll eller köpta länkar som aktivt kan skada din sajt. Att reda ut en straffad domän kostar mer än att göra rätt från början. Betala för tid och kompetens, inte för löften.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Byrå, frilans eller själv */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Byrå, frilansare eller göra det själv?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du behöver inte alltid en byrå. Vilken väg som passar beror på din tid, din budget och hur konkurrensutsatt din bransch är.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { title: "Göra det själv", desc: "Funkar om du har tid, tålamod och ett ganska enkelt lokalt företag. Grunderna, som Google Business, on-page-texter och att be om recensioner, klarar de flesta själva. Nackdel: det stjäl tid från det du är bäst på, och det tekniska missas ofta." },
                { title: "Anlita en frilansare eller SEO-konsult", desc: "Billigare än en byrå, personlig kontakt och bra för avgränsade uppdrag. Nackdel: en person hinner bara så mycket, och blir hen sjuk eller uppbokad står allt still." },
                { title: "Anlita en byrå", desc: "Mest kapacitet, med teknik, innehåll och strategi under ett tak. Passar när SEO är affärskritiskt eller konkurrensen är stenhård. Nackdel: dyrare, och kvaliteten varierar rejält, vilket är hela anledningen till den här guiden." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En vanlig och klok väg är att börja själv med grunderna, och ta in hjälp för det tekniska och innehållstunga först när du sett att det faktiskt lönar sig. Då vet du också vad du köper när du väl anlitar någon.
            </p>

            {/* Section 6: Checklista */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Checklista att bocka av innan du signerar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-5">
              Gå igenom den här innan du skriver under. Ju fler punkter som stämmer, desto tryggare kan du känna dig.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Jag har pratat med minst en referenskund som varit med i över ett år",
                "Byrån kan förklara exakt vad de gör de första tre månaderna",
                "Vi har satt ett mätbart mål kopplat till trafik eller förfrågningar",
                "Jag äger själv Analytics, Search Console och Google Business",
                "Ingen har garanterat en exakt placering på Google",
                "Bindningstiden är rimlig, helst löpande eller kort",
                "Rapporterna visar affärsnytta, inte bara ranking",
                "Priset speglar faktisk nedlagd tid, inte ett lockpris",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Stämmer de flesta punkterna har du förmodligen hittat en byrå värd att lita på. Saknas ett par: ställ fler frågor eller leta vidare. Bra SEO är en investering som betalar sig i åratal, och du förtjänar att veta exakt vad du betalar för.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "SEO-analys: gör en själv på 30 minuter", href: "/blogg/seo-analys-sjalv" },
                { title: "SEO för småföretag: 7 steg som fungerar", href: "/blogg/seo-for-smaforetag" },
                { title: "SEO-tjänster för lokala företag", href: "/tjanster/seo" },
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
                Vill du ha SEO som faktiskt ger förfrågningar?
              </h3>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                Vi jobbar transparent, utan bindningstid och med resultat du kan mäta. Boka en kostnadsfri genomgång så tittar vi på ditt nuläge.
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
