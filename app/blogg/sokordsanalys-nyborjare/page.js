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
                <span className="text-heading font-500">Sökordsanalys</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                SEO
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Sökordsanalys för nybörjare: hitta orden dina kunder googlar
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 1 augusti 2026
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
              Du lägger timmar på texten till startsidan, kanske en bloggartikel eller två. Ändå händer ingenting på Google. Nästan alltid beror det på samma sak: du skriver om ord som ingen söker på, eller ord du aldrig kommer att ranka på. Sökordsanalys är det som löser det, och du behöver varken dyra verktyg eller en SEO-examen för att komma igång.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Sökordsanalys låter tekniskt, men handlar om en enkel sak: att ta reda på exakt vad dina kunder skriver in i sökrutan när de letar efter det du säljer, och sedan bygga dina sidor kring de orden. Efter 150+ webbprojekt är det här steget jag ser flest småföretag hoppa över, och det är också det som avgör mest. Så här gör du det från grunden.
            </p>

            {/* Section 1: Vad sökordsanalys är */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad sökordsanalys är och varför det ska styra ditt innehåll
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Sökordsanalys, eller keyword research, betyder att du kartlägger de faktiska sökfraser folk använder, tillsammans med en känsla för hur många som söker på dem och hur svårt det är att ranka. Poängen är inte att samla en lång lista ord. Poängen är att låta verklig efterfrågan styra vad du skriver om, i stället för det du gissar att kunder borde söka på.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Skillnaden är avgörande. En takläggare kallar det gärna takomläggning. Kunden sitter på mobilen och skriver &quot;byta tak villa pris&quot;. Om din sajt aldrig använder kundens ord har Google ingenting att matcha mot, hur bra din text än är. Du skriver för dig själv, inte för köparen.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Vänd på ordningen</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    De flesta bygger sidan först och försöker klämma in sökord efteråt. Gör tvärtom. Ta reda på vad folk söker på, och låt det avgöra vilka sidor du överhuvudtaget bygger. Då slipper du snygga sidor som ingen hittar.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Sökintention */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Sökintention: det som avgör allt innan du ens tittar på volym
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Innan du jagar sökord måste du förstå varför någon söker. Två personer kan skriva nästan samma sak men vilja helt olika saker. Google vet det, och visar olika typer av sidor beroende på avsikten. Det finns fyra grundtyper, och att matcha rätt typ av sida mot rätt avsikt är halva jobbet.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Informativ", desc: "Personen vill lära sig något, inte köpa än. Till exempel: hur ofta ska man måla om huset. Här passar en guide eller ett blogginlägg, inte en säljsida." },
                { title: "Kommersiell", desc: "Personen jämför inför ett köp. Till exempel: bästa målarfirman i Helsingborg. Här vinner sidor med recensioner, case och tydliga argument." },
                { title: "Transaktionell", desc: "Personen är redo att agera. Till exempel: anlita målare Helsingborg eller måla om fasad pris. Här ska du ha en vass tjänste- eller prissida med en tydlig knapp." },
                { title: "Navigerande", desc: "Personen letar efter ett specifikt namn, som ditt företagsnamn. Viktigt att äga, men det är sällan där du hittar nya kunder." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det enklaste sättet att kolla avsikten: googla ordet själv och se vad som redan rankar. Är det guider? Då är avsikten informativ. Är det prissidor och tjänstesidor? Då är den transaktionell. Bygg samma typ av sida som Google redan belönar, annars spelar det ingen roll hur bra ditt sökord är.
            </p>

            {/* Section 3: Steg 1 brainstorma frön */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 1: Brainstorma frön utifrån vad kunder faktiskt frågar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Ett frö är ett grundord du sedan bygger vidare på. Du behöver inga verktyg för det här steget, bara tio minuter och lite ärlighet om hur dina kunder pratar. Skriv ner allt, sålla senare.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Hämta frön från:</p>
              <div className="space-y-2">
                {[
                  "Tjänsterna och produkterna du säljer, en rad per sak",
                  "Frågorna du får om och om igen i telefon och mejl",
                  "Problemen du löser, formulerade som kunden själv skulle säga dem",
                  "Orden kunder använder, inte branschjargongen (kunden säger byta tak, inte takrenovering)",
                  "Orterna du jobbar i, för lokala sökningar väger tungt",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ett tips som brukar ge guld: fråga en kund som precis anlitat dig vad de skrev in på Google innan de hittade dig. Svaret är ofta helt annorlunda än vad du själv hade gissat, och det är exakt de orden du vill åt.
            </p>

            {/* Section 4: Steg 2 expandera med gratiskällor */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 2: Expandera listan med gratiskällor
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Nu tar du dina frön och blåser upp listan. Det här kan du göra helt utan betalverktyg, med källor som råkar vara mer ärliga än många dyra plattformar, för de kommer direkt från Google.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Fyra gratiskällor att gå igenom:</p>
              <div className="space-y-3">
                <div>
                  <p className="text-[14px] font-600 text-heading mb-1">1. Googles autocomplete</p>
                  <p className="text-[14px] text-body leading-relaxed">Börja skriva ditt fröord i sökrutan och läs förslagen som dyker upp. Det är riktiga sökningar som folk gör, sorterade efter hur vanliga de är.</p>
                </div>
                <div>
                  <p className="text-[14px] font-600 text-heading mb-1">2. Relaterade sökningar och Fler frågor</p>
                  <p className="text-[14px] text-body leading-relaxed">Sök på ett frö och scrolla till botten av resultatsidan. Rutan Fler frågor och de relaterade sökningarna längst ner är en gratis idébank full av long-tail-fraser.</p>
                </div>
                <div>
                  <p className="text-[14px] font-600 text-heading mb-1">3. Google Search Console</p>
                  <p className="text-[14px] text-body leading-relaxed">Har du redan en sajt? Då sitter du på en guldgruva. Search Console visar exakt vilka sökord du redan syns på, ofta ord du inte ens visste att du rankade för. Bygg vidare på dem.</p>
                </div>
                <div>
                  <p className="text-[14px] font-600 text-heading mb-1">4. Konkurrenternas rubriker</p>
                  <p className="text-[14px] text-body leading-relaxed">Titta på vilka sidor tre konkurrenter har och vad deras rubriker heter. Söker du efter ett gap hittar du ofta ord de missat, som du kan äga.</p>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Vill du ha riktiga siffror på sökvolym och svårighet tar det verktyg som DataForSEO eller Googles Keyword Planner vid här. Men börja gratis. Du kommer förvånas över hur långt autocomplete och Search Console tar dig innan du behöver betala för något.
            </p>

            {/* Section 5: Steg 3 volym vs svårighet */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 3: Volym mot svårighet, och varför long-tail vinner för dig
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Varje sökord har två egenskaper som spelar roll. Sökvolym är hur många som söker på det per månad. Svårighet är hur hårt det är att ta sig upp, vilket främst avgörs av hur starka sajterna på förstasidan redan är. Nybörjarmisstaget är att gå efter högsta volymen. Det är nästan alltid fel för ett litet företag.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Ordet målare har hög volym, men förstasidan ägs av rikstäckande jättar och katalogsajter. Du kommer inte dit på flera år. En long-tail-fras som &quot;måla om fönster utvändigt pris&quot; har mycket lägre volym, men också mycket lägre konkurrens, och den som söker så är närmare att köpa. Tio sådana fraser som faktiskt konverterar slår ett omöjligt storord varje dag i veckan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Sikta på</p>
                <div className="space-y-2">
                  {["Fraser med tre ord eller fler", "Ord med ort eller tjänst inbakat", "Tydlig köpavsikt", "Lägre konkurrens du kan vinna nu"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Undvik i början</p>
                <div className="space-y-2">
                  {["Enstaka breda ord", "Rikstäckande storord", "Termer utan köpavsikt", "Sökord jättarna redan äger"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Stirra dig inte blind på exakta siffror</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Volymsiffror är alltid ungefärliga uppskattningar. Ett ord med runt 50 sökningar i månaden och glasklar köpavsikt är värt mer än ett med tusen sökningar där ingen vill köpa. Låt avsikten väga tyngre än volymen.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Steg 4 gruppera i ämnen */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 4: Gruppera i ämnen och matcha ett sökord per sida
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Nu har du en lista. Nästa steg är att inte göra en sida per ord, för många av orden betyder samma sak för Google. Samla synonymer och varianter som har samma avsikt i ett och samma ämne, och låt ett ämne bli en sida med ett tydligt huvudsökord.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "En sida om fasadmålning:", text: "måla fasad, fasadmålning pris, måla om huset utvändigt" },
                { label: "En sida om fönstermålning:", text: "måla fönster, fönstermålning kostnad, måla fönsterbågar" },
                { label: "En guide i bloggen:", text: "hur ofta måla om huset, bästa tid att måla utomhus" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light gap-4">
                  <span className="text-[15px] font-600 text-heading flex-shrink-0">{row.label}</span>
                  <span className="text-[14px] text-body text-right">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Varför inte en sida per ord? För att två sidor som jagar samma sökord konkurrerar med varandra i stället för med konkurrenterna. Google vet inte vilken den ska visa, och båda tappar. En avsikt, en sida, ett huvudsökord. Så håller du det rent och slipper konkurrera mot dig själv.
            </p>

            {/* Section 7: Från lista till innehållsplan */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Från lista till innehållsplan: prioritera efter köpnärhet
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En sökordslista är inte en plan. Det sista steget är att bestämma i vilken ordning du bygger sidorna, och där finns en enkel regel: börja närmast pengarna. Ta de sökord där någon är på väg att köpa och som du realistiskt kan ranka på, och jobba dig utåt därifrån.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "Först: transaktionella tjänste- och prissidor, närmast köp och lättast att mäta i kronor",
                "Sedan: kommersiella jämförelsesidor som fångar den som väljer mellan alternativ",
                "Därefter: informativa guider som bygger förtroende och drar in länkar över tid",
                "Sist: breda storord du sparar tills sajten fått mer tyngd",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <span className="text-[15px] font-700 text-primary flex-shrink-0">{i + 1}.</span>
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Gör du bara det här får du en sökordskarta som talar om exakt vilka sidor du ska bygga, i vilken ordning, och varför. Det är skillnaden mellan att skriva på känsla och att skriva för folk som faktiskt är på väg att bli kunder. Och det bästa: när sidorna väl rankar jobbar de åt dig dygnet runt, utan annonsbudget.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "SEO-analys: gör en själv på 30 minuter", href: "/blogg/seo-analys-sjalv" },
                { title: "SEO för småföretag: 7 steg", href: "/blogg/seo-for-smaforetag" },
                { title: "SEO-tjänster", href: "/tjanster/seo" },
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
                Vill du ha en färdig sökordskarta?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Vi tar fram riktiga sökordsdata för din bransch och ort och pekar ut var pengarna finns. Boka en kostnadsfri genomgång.
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
