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
                <span className="text-heading font-500">Hemsida utan kunder</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Konvertering
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Därför får din hemsida inga kunder: 7 orsaker och hur du fixar dem
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 16 juli 2026
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
              Du la ner tid och pengar på en ny hemsida. Den ser proffsig ut, du är stolt över den, och sedan hände det som ingen varnade dig för: ingenting. Inga samtal, inga mejl, inga förfrågningar. Känns det igen är du långt ifrån ensam, och jag har en tröst: felet är nästan aldrig designen.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Efter 150+ webbprojekt och tio år i branschen vågar jag säga att en tyst hemsida nästan alltid beror på en av två saker. Antingen hittar ingen dit, eller så gör sidan ingenting för att förvandla en besökare till en förfrågan. Här är de sju vanligaste orsakerna, sorterade ungefär i den ordning de gör mest skada, och exakt vad du gör åt varje.
            </p>

            {/* Orsak 1 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Orsak 1: Ingen hittar dig
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det här är den vanligaste orsaken och samtidigt den svåraste att upptäcka på egen hand. Din sajt fungerar ju klanderfritt när du själv skriver in adressen. Men om ingen söker sig dit spelar det ingen roll hur fin den är. En hemsida utan besökare är som en skylt i en källare.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              De flesta småföretag rankar bara på sitt eget företagsnamn. Googlar någon efter din tjänst plus din ort, till exempel takläggare och en stad, syns du inte. Och det är precis där köparna finns: folk som söker på det du säljer just nu, redo att höra av sig till den som dyker upp först.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Snabb koll: får du någon söktrafik alls?</p>
              <div className="space-y-2">
                {[
                  "Googla din tjänst plus din ort utan att skriva ditt företagsnamn. Finns du på första sidan?",
                  "Koppla upp gratisverktyget Google Search Console och se om du får visningar och klick över huvud taget.",
                  "Skaffa och fyll i en Google Business Profile. Utan den syns du inte i kartan eller de lokala träffarna.",
                  "Skriv innehåll som svarar på det kunderna faktiskt frågar, en sida per tjänst och ort.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Om sökningen är problemet hjälper ingen knapp eller färg i världen. Då är det trafik du behöver, och den byggs med SEO och lokalt innehåll över tid. Det är inte gjort på en vecka, men det är den investering som ger mest tillbaka i längden.
            </p>

            {/* Orsak 2 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Orsak 2: Besökaren fattar inte på fem sekunder vad du gör
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En ny besökare ger dig ungefär fem sekunder. På den tiden ska personen förstå tre saker: vad du erbjuder, för vem, och varför just du. Klarar inte sidans översta del det testet klickar besökaren tillbaka till Google. Det spelar ingen roll hur bra du är om budskapet är luddigt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Den vanligaste tabben är en rubrik som säger allt och inget. Välkomstfraser och floskler om passion och kvalitet betyder ingenting för en främling. Byt ut dem mot ett konkret löfte: vad du gör, var, och gärna hur snabbt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Otydligt</p>
                <div className="space-y-2">
                  {["Välkommen till oss", "Vi brinner för kvalitet", "Din partner för framtiden", "Lösningar i världsklass"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Tydligt</p>
                <div className="space-y-2">
                  {["Takläggare i Hässleholm sedan 2009", "Vi bygger din altan på tre veckor", "Elektriker i Skåne med jour dygnet runt", "Bokföring för småföretag till fast pris"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Testet är enkelt: visa startsidan för någon som inte känner ditt företag i fem sekunder, ta bort den, och fråga vad du säljer och till vem. Kan personen inte svara har du hittat din första fix.
            </p>

            {/* Orsak 3 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Orsak 3: Det finns ingen tydlig nästa åtgärd
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En besökare som är övertygad måste veta exakt vad som ska göras härnäst. Förvånansvärt många hemsidor glömmer helt enkelt att be om affären. Det finns ingen knapp, eller så gömmer sig ett telefonnummer i sidfoten och ett kontaktformulär tre klick bort.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En stark uppmaning, en CTA, är tydlig, syns direkt och berättar vad som händer när man klickar. En knapp med texten &quot;Boka kostnadsfri genomgång&quot; slår ett vagt &quot;Läs mer&quot; varje dag i veckan, för den lovar ett konkret nästa steg utan risk.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Tips: en primär åtgärd per sida</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Ha en, och bara en, huvudåtgärd som du vill att besökaren gör, och upprepa den. Överst på sidan, i mitten och i slutet. Femton knappar som pekar åt olika håll gör att folk väljer det allra enklaste: att lämna. Gör knappen stor, ge den en kontrastfärg och skriv ut vad som väntar på andra sidan.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Gå igenom din sajt sida för sida och ställ samma fråga vid varje: vad vill jag att personen gör här? Syns svaret som en tydlig knapp redan inom första skärmen? Om inte, lägg dit den.
            </p>

            {/* Orsak 4 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Orsak 4: Sajten är för långsam, särskilt på mobilen
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Över hälften av all trafik kommer från mobilen, ofta betydligt mer för lokala tjänster. Ändå byggs och testas många sajter bara på en stor skärm. Resultatet är en sida som laddar segt, hoppar runt medan bilderna ramlar in och tvingar besökaren att zooma och peta. Då är personen borta innan din fina text ens hunnit synas.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Hastighet är dessutom direkt kopplat till hur många som stannar. Varje extra sekund kostar dig besökare, och Google väger in laddtid när sidor rankas. Tumregeln ser ut ungefär så här:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Under 2 sekunder", text: "De flesta stannar kvar" },
                { label: "3 till 4 sekunder", text: "En märkbar andel hoppar av" },
                { label: "5 sekunder eller mer", text: "Du tappar större delen av mobiltrafiken" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              De vanligaste bovarna är gigantiska bilder som aldrig komprimerats, för många tunga plugins och en billig server. Börja med att pressa ihop bilderna, kör sidan genom Googles gratisverktyg PageSpeed Insights och laga det som lyser rött. Öppna sedan din egen sajt i din egen telefon och försök ta kontakt, precis som en kund skulle. Du hittar problemen på en minut.
            </p>

            {/* Orsak 5 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Orsak 5: Ingenting bygger förtroende
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Folk köper av dem de litar på, och en främling på nätet börjar med noll förtroende för dig. Om sidan bara består av dina egna påståenden om hur duktig du är finns det inget som backar upp det. Social proof är beviset som andra ger dig, och det gör mer för konverteringen än nästan allt annat.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du behöver inte hundra omdömen. Några få, äkta och konkreta räcker långt. Sprid dem över sidan i stället för att gömma dem på en undersida som ingen besöker.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Sånt som bygger förtroende:</p>
              <div className="space-y-2">
                {[
                  "Riktiga recensioner med namn, gärna hämtade direkt från Google",
                  "Konkreta case: före, efter och vad kunden faktiskt fick ut av det",
                  "Loggor på kunder eller samarbeten du är stolt över",
                  "Siffror du kan stå för, som antal år, projekt eller nöjda kunder",
                  "Bilder på dig, teamet och verkliga jobb i stället för stockfoton",
                  "Certifikat, medlemskap och garantier som sänker risken för köparen",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En sak till: svara på recensioner, även de sura. En besökare som ser att du tar tag i ett klagomål litar mer på dig, inte mindre. Förtroende byggs i hur du hanterar det som inte gick perfekt.
            </p>

            {/* Orsak 6 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Orsak 6: Formuläret är krångligt eller skrämmer bort folk
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du fick besökaren ända fram till kontaktformuläret, och där tappar du personen. Det händer oftare än du tror. Varje extra fält och varje onödig fråga är en ny anledning att skjuta upp det och sedan glömma bort det. Ett formulär med tolv rutor känns som en ansökan, inte som att ta kontakt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Fråga bara om det du verkligen behöver för att kunna svara. Namn, ett sätt att nå personen och en kort beskrivning räcker nästan alltid. Resten kan du reda ut i ditt svar.
            </p>

            <div className="space-y-2 mb-6">
              {[
                "Håll dig till tre eller fyra fält, lägg bara till fler om du absolut måste",
                "Skriv ut vad som händer efter att man skickat, till exempel att du hör av dig samma dag",
                "Erbjud flera vägar in: formulär, telefon och mejl, så att folk får välja själva",
                "Se till att det fungerar felfritt på mobilen, där de flesta faktiskt fyller i det",
                "Skicka ett testmeddelande till dig själv varje månad, ett trasigt formulär tappar leads helt tyst",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Den värsta varianten är formuläret som ser ut att fungera men aldrig levererar mejlet. Då sitter du och undrar varför det är så tyst, medan förfrågningarna försvinner i tomma intet. Att skicka ett testmeddelande då och då är den billigaste försäkring som finns.
            </p>

            {/* Orsak 7 */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Orsak 7: Du mäter ingenting, så du vet inte var det brister
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det här är den tysta dräparen. Utan mätning gissar du. Du vet inte hur många som besöker sidan, varifrån de kommer, vilka sidor de lämnar på eller om formuläret ens används. Och det du inte kan se kan du inte laga.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Den goda nyheten är att grunden är gratis och tar en stund att sätta upp. Med enkel analys och lite spårning slutar du gissa och börjar se exakt var i kedjan folk faller ifrån.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Webbanalys", desc: "Ett verktyg som visar besökare, sidor och varifrån trafiken kommer. Då ser du om problemet är för lite trafik eller att folk lämnar sidan." },
                { title: "Google Search Console", desc: "Gratis från Google. Visar vad du rankar på, hur ofta du syns och hur många som klickar. Ovärderligt för att förstå din söktrafik." },
                { title: "Leadspårning", desc: "Registrera varje gång ett formulär skickas, och märk vilken sida det kom från. Nu vet du vilka sidor som faktiskt drar in affärer." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              När mätningen är på plats blir resten enkel. Du ser var flest hoppar av, fixar den punkten först, och tittar sedan om siffran rörde sig. Det är hela hemligheten bakom konverteringsarbete: laga det som mätningen pekar ut, inte det du tror är problemet.
            </p>

            {/* Prioritering */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Så här prioriterar du
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Sju orsaker kan kännas överväldigande, men du ska inte göra allt på en gång. Ta dem i den ordning som ger mest, minst insats först. Så här brukar jag lägga upp det:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { n: "1", title: "Sätt på mätning idag", desc: "Utan siffror jobbar du i blindo. Installera analys och koppla Search Console allra först, det tar en förmiddag." },
                { n: "2", title: "Fixa budskap och knappar", desc: "Gör värdeerbjudandet glasklart överst och lägg en tydlig åtgärd på varje sida. Snabbt gjort, stor effekt." },
                { n: "3", title: "Sänk trösklarna", desc: "Korta ner formuläret, snabba upp sidan och se till att allt fungerar på mobilen. Lägg till social proof där det räknas." },
                { n: "4", title: "Bygg trafiken", desc: "När sidan väl förvandlar besökare till förfrågningar är det värt att satsa på SEO och lokalt innehåll. Nu ger varje ny besökare betalt." },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-4 bg-surface border border-border rounded-xl p-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light text-primary font-700 text-[15px] flex items-center justify-center">{step.n}</span>
                  <div>
                    <p className="text-[15px] font-700 text-heading mb-1">{step.title}</p>
                    <p className="text-[14px] text-body leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ordningen är ingen slump. Det är dyrt att köpa in mer trafik till en sida som inte konverterar. Se först till att sidan tar hand om dem som redan kommer, sedan öppnar du kranen. Gör du det i den ordningen får du ut betydligt mer av varje krona och varje besökare.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Landningssida som konverterar", href: "/blogg/landningssida-som-konverterar" },
                { title: "Konverteringsoptimering: 10 ändringar", href: "/blogg/konverteringsoptimering-tips" },
                { title: "Webbutveckling och design", href: "/tjanster/webbutveckling" },
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
                Vill du veta varför just din sajt är tyst?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Boka en kostnadsfri genomgång så går vi igenom din hemsida tillsammans och pekar ut vad som stoppar förfrågningarna.
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
