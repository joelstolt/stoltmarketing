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
                <span className="text-heading font-500">Moms och regler</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                E-handel
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Moms och regler för e-handel: det här måste du ha koll på
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 25 augusti 2026
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
              Du har hittat produkterna, byggt butiken och fingret svävar över publicera-knappen. Sen dyker frågan upp som får de flesta att skjuta upp lanseringen i veckor: hur var det nu med moms, ångerrätt och alla regler egentligen?
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Bra nyheter: det är betydligt mer hanterbart än det låter. Efter 150+ webbprojekt och tio år i branschen kan jag lova dig att e-handelsjuridik för en liten svensk butik mest handlar om att förstå en handfull regler och sedan skriva ned dem tydligt på sajten. Den här guiden går igenom det du måste ha koll på, på ren svenska, så att du kan lansera med ryggen fri.
            </p>

            {/* Section: Varför */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Juridiken är enklare än den låter, men dyr att strunta i
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Varför bry sig? För att de här reglerna finns för att skydda kunden, och Konsumentverket tar dem på allvar. Struntar du i dem riskerar du viten, anmälningar till Allmänna reklamationsnämnden och, minst lika illa, en kund som känner sig lurad och skriver om det. Förtroende är hela grejen i e-handel, och slarvig juridik läcker förtroende.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Den goda nyheten är att nästan allt är en engångsinsats. Du sätter upp rätt momssatser, skriver köpvillkor och en integritetspolicy en gång, och sedan rullar det på. Det svåra är inte att följa reglerna. Det svåra är att veta vilka de är. Så låt oss ta dem en och en.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Kort ansvarsfriskrivning</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Det här är en praktisk översikt så att du vet vad som gäller och vilka frågor du ska ställa. Det är inte juridisk rådgivning. Säljer du något ovanligt, till minderåriga eller i stor skala utomlands: stäm av med en jurist.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Moms */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Moms: satserna och hur du visar priserna
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Moms är den del folk oroar sig mest för, men grunden är enkel. I Sverige finns tre momssatser, och vilken du använder beror på vad du säljer.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "25% (standard)", text: "De flesta varor och tjänster" },
                { label: "12%", text: "Livsmedel, restaurang och hotell" },
                { label: "6%", text: "Böcker, tidningar och persontransport" },
                { label: "0% / undantag", text: "Vissa finansiella tjänster och sjukvård" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Två saker är lätta att missa. Det första: säljer du till privatpersoner ska priset du visar vara inklusive moms. En privatkund ska aldrig behöva räkna själv i kassan. Säljer du i stället till andra företag är det vanligt att visa priset exklusive moms. Det andra: du måste vara momsregistrerad hos Skatteverket och redovisa momsen, även som liten aktör.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Säljer du till kunder i andra EU-länder finns en tröskel att känna till. Så länge din samlade försäljning till privatpersoner i EU håller sig under 10 000 euro per år tar du ut svensk moms som vanligt. Går du över den gränsen ska du ta ut köparlandets moms, men då kan du redovisa allt samlat via Skatteverkets One Stop Shop i stället för att registrera dig i varje land. Bra att veta redan innan du marknadsför utanför Sverige.
            </p>

            {/* Section: Ångerrätt */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Ångerrätt: 14 dagar och undantagen du måste känna till
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Vid näthandel har privatkunder 14 dagars ångerrätt enligt distansavtalslagen. Fristen räknas från den dag kunden tog emot varan, inte från beställningen. Inom de 14 dagarna får kunden ångra köpet utan att ange något skäl, och sedan finns ytterligare tid på sig att skicka tillbaka varan.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Så funkar ångerrätten i praktiken:</p>
              <div className="space-y-2">
                {[
                  "14 dagar att ångra, räknat från när varan togs emot",
                  "Kunden behöver inte motivera varför",
                  "Du ska betala tillbaka inom 14 dagar från att du fått besked",
                  "Kunden står oftast för returfrakten om du informerat om det",
                  "Varan får vara provad, men inte använd mer än i en butik",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Full ångerrätt</p>
                <div className="space-y-2">
                  {["Kläder och skor du provat", "Elektronik som kan säljas vidare", "Möbler och inredning", "De flesta fysiska standardvaror"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Ofta undantag</p>
                <div className="space-y-2">
                  {["Specialtillverkade eller personliga varor", "Förseglat som öppnats av hälsoskäl", "Färskvaror och livsmedel", "Digitalt innehåll du börjat använda"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En detalj som kostar pengar att missa: du måste informera om ångerrätten innan köpet, och enklast är att bifoga en standardiserad ångerblankett. Gör du inte det förlängs ångerfristen, i värsta fall med upp till ett år. Informationen finns färdig att utgå från hos Konsumentverket, så det här är ingen text du behöver hitta på själv.
            </p>

            {/* Section: Köpvillkor */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Köpvillkor och det som måste finnas i kassan
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Köpvillkoren är kontraktet mellan dig och kunden, och en del information måste finnas tillgänglig innan kunden klickar köp. Det handlar inte om en vägg av finstilt text, utan om att svara på de självklara frågorna: vem säljer, vad kostar det totalt, hur levereras det och hur ångrar jag mig.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Det här ska kunden hitta innan köp:</p>
              <div className="space-y-2">
                {[
                  "Företagsnamn, organisationsnummer och adress",
                  "Kontaktuppgifter: e-post och gärna telefon",
                  "Totalpris inklusive moms, samt frakt och avgifter",
                  "Leveranssätt och leveranstid",
                  "Betalsätt och när betalning dras",
                  "Information om ångerrätt och hur kunden ångrar",
                  "Länk till köpvillkor och integritetspolicy",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En specifik regel är lätt att råka bryta: knappen som avslutar köpet måste tydligt visa att beställningen medför en betalningsskyldighet. En knapp som bara säger &quot;Slutför&quot; räcker inte. Använd något i stil med &quot;Köp nu&quot; eller &quot;Beställ med betalningsskyldighet&quot;. De flesta seriösa e-handelsplattformar har redan rätt formulering, men det är värt att kontrollera.
            </p>

            {/* Section: GDPR */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              GDPR och cookies: vad en liten butik faktiskt behöver
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              GDPR låter tungt, men för en liten butik är det mest sunt förnuft satt på pränt: samla in så lite personuppgifter som möjligt, var öppen med vad du gör med dem, och skydda dem.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Det här behöver en liten butik ha på plats:</p>
              <div className="space-y-2">
                {[
                  "En integritetspolicy som förklarar vilka uppgifter du samlar in och varför",
                  "En laglig grund för varje uppgift, oftast att fullfölja köpet",
                  "Samla bara in det du faktiskt behöver, inte mer",
                  "Personuppgiftsbiträdesavtal med tjänsterna som hanterar datan åt dig",
                  "Ett sätt för kunden att få ut eller radera sina uppgifter",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Cookies är en egen sak. Nödvändiga cookies som håller kundvagnen och inloggningen igång behöver du inte fråga om. Men allt som spårar besökaren, som Google Analytics eller annonspixlar, kräver att kunden aktivt säger ja först. En cookiebanner som låter besökaren välja innan spårningen startar löser det. Ett vanligt misstag är banners som redan börjat spåra innan man hunnit klicka, och det är precis det som inte är tillåtet.
            </p>

            {/* Section: Reklamation, garanti, märkning */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Reklamation, garanti och märkning
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Här blandar många ihop tre saker som betyder olika. Reklamationsrätt är lagstadgad och gäller i tre år: är varan felaktig har kunden rätt att få den lagad, utbytt eller pengarna tillbaka. Garanti är något annat, ett frivilligt löfte du själv väljer att ge. Öppet köp är också frivilligt och betyder att kunden får ångra sig utöver den lagstadgade ångerrätten.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Reklamationsrätt", text: "3 år, lagstadgad, gäller fel på varan" },
                { label: "Garanti", text: "Frivillig, ett löfte du själv väljer att ge" },
                { label: "Öppet köp", text: "Frivilligt, utöver ångerrätten" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ett område som är lätt att glömma är förpackningar. Sätter du varor i kartong och skickar dem har du ett producentansvar och ska vara ansluten till ett godkänt insamlingssystem som tar hand om återvinningen. Det är en enkel anmälan, men den ska göras. Säljer du dessutom produkter med krav på CE-märkning eller innehållsförteckning gäller de reglerna precis som i en fysisk butik.
            </p>

            {/* Section: Checklista */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Checklista före lansering (och när du bör ringa en jurist)
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Kör den här listan innan du lanserar. Är allt ibockat står du på tryggt vatten för en vanlig svensk webbutik.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "☐ Moms registrerad hos Skatteverket och rätt satser i butiken",
                "☐ Priser till privatpersoner visas inklusive moms",
                "☐ Köpvillkor publicerade och länkade i kassan",
                "☐ Information om 14 dagars ångerrätt och en ångerblankett",
                "☐ Köpknapp som tydligt visar betalningsskyldighet",
                "☐ Integritetspolicy och laglig grund för personuppgifter",
                "☐ Cookiebanner som frågar innan icke-nödvändiga cookies sätts",
                "☐ Rutin för reklamationer och tydlig garanti om du ger någon",
                "☐ Förpackningar anmälda till ett godkänt insamlingssystem",
                "☐ Kontaktuppgifter och organisationsnummer synliga på sajten",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              När ska du ta in en jurist? Inte för en vanlig butik med standardvaror till svenska konsumenter, då räcker det du gjort här långt. Men hör av dig till en jurist om du säljer i stor skala till andra länder, hanterar åldersgränsade eller reglerade produkter som kosttillskott och alkohol, tillverkar egna varor, eller samlar in känsliga personuppgifter. En timmes rådgivning i rätt läge är billig jämfört med att rätta till det i efterhand.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Starta e-handel: komplett guide", href: "/blogg/e-handel-guide" },
                { title: "Vad kostar en webbutik 2026?", href: "/blogg/vad-kostar-webbutik" },
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
              <h3 className="text-[22px] sm:text-[26px] font-600 text-white font-heading tracking-tight mb-3">
                Ska du starta en webbutik på rätt sätt?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Vi bygger e-handel med rätt villkor, moms och spårning från start. Boka en kostnadsfri genomgång.
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
