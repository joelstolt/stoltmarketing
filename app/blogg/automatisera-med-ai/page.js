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
                <span className="text-heading font-500">Automatisera med AI</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                AI
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Automatisera det tråkiga: 8 AI-exempel som sparar tid
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 20 augusti 2026
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
              Klockan är kvart över åtta på kvällen. Du sitter med samma saker som igår: svarar på tre mejl som ställer exakt samma fråga, skriver en offert som är nästan identisk med förra veckans, och påminner en kund som glömt att betala. Inget av det gör dig till en bättre hantverkare, konsult eller butiksägare. Det äter bara kvällen.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Grejen med att driva ett litet företag är att det tråkiga aldrig tar slut. Den goda nyheten är att en stor del av det går att lägga på AI och enkel automation redan idag, utan att du behöver vara det minsta teknisk. Efter tio år och 150+ webbprojekt har jag sett vilka uppgifter som brukar vara värda att flytta bort från din tallrik först. Här är åtta konkreta exempel, plus hur du kommer igång utan att ställa till kaos på vägen.
            </p>

            {/* Section 1: var försvinner tiden */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Först: var försvinner egentligen din tid?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Innan du automatiserar något är det värt att veta vad du faktiskt lägger tiden på. Nästan alla småföretagare jag pratar med underskattar hur stor del av veckan som går åt till småuppgifter som återkommer om och om igen. Var för sig tar de fem minuter. Tillsammans blir de en halv arbetsdag som aldrig fakturerar en krona.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              En uppgift lämpar sig för automation när den är repetitiv, följer ett mönster och inte kräver att just du sitter och gör den. Kreativt arbete, känsliga kundsamtal och beslut med hög risk ska du behålla. Det förutsägbara och tråkiga är det du vill flytta.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Tecken på att en uppgift kan flyttas till en robot:</p>
              <div className="space-y-2">
                {[
                  "Du gör den flera gånger i veckan",
                  "Den ser nästan likadan ut varje gång",
                  "Den följer en tydlig regel eller mall",
                  "Det gör inte så mycket om svaret behöver en snabb koll av dig",
                  "Den stjäl tid men skapar inget unikt värde",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Känner du igen dig i listan nedan? Det är de fem tidstjuvar jag ser oftast hos små företag. Alla fem går att kapa rejält.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Kundfrågor på mejl och telefon", text: "Återkommer varje dag" },
                { label: "Offerter och prisförfrågningar", text: "Nästan identiska varje gång" },
                { label: "Boka och boka om tider", text: "Fram och tillbaka i mejl" },
                { label: "Påminnelser om betalning", text: "Lätt att skjuta upp" },
                { label: "Anteckningar och rapporter", text: "Blir sällan av" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            {/* Section 2: kundservice */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              1 och 2: Kundservice som svarar även när du sover
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              De flesta som besöker din sajt hör aldrig av sig. Och de som vill höra av sig vill ha svar direkt, inte imorgon bitti. Här gör AI stor skillnad utan att det känns opersonligt, om du gör det rätt.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { title: "1. En AI-chatbot på hemsidan", desc: "En modern chatbot tränad på din verksamhet svarar på de vanligaste frågorna dygnet runt: pris, öppettider, hur ni jobbar, om ni tar ert område. Den kan ställa ett par följdfrågor, kvalificera besökaren och skicka ett färdigt lead rakt till din inkorg. Du vaknar till en förfrågan i stället för en missad chans." },
                { title: "2. Autosvar och sortering av inkorgen", desc: "Ett enkelt autosvar som bekräftar att mejlet kommit fram och säger när kunden får svar sänker pulsen på båda sidor. AI kan dessutom läsa inkorgen, sätta etiketter och lyfta det brådskande högst upp, så att du slutar leta efter den viktiga förfrågan bland nyhetsbrev och fakturor." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Var ärlig med att det är en bot</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Låt aldrig en bot låtsas vara en människa. Skriv rakt ut att det är en assistent och gör det lätt att nå en riktig person. En bra bot vet också sina gränser: så fort en fråga blir känslig eller komplicerad ska den lämna över till dig i stället för att gissa.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: offerter och fakturor */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              3 och 4: Offerter och fakturor utan kvällsjobb
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Om nio av tio offerter du skickar ser nästan likadana ut sitter du och skriver om samma text vecka efter vecka. Och fakturor som inte betalas i tid är ren likviditet som ligger och skvalpar för att ingen orkar jaga dem.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { title: "3. Offertutkast på minuter", desc: "Utgå från en mall med dina tjänster, priser och villkor. AI fyller i utkastet utifrån en kort beskrivning av jobbet, i din ton. Du läser igenom, justerar summan och skickar. Det som tog en halvtimme tar några minuter, och offerterna blir dessutom jämnare i kvalitet." },
                { title: "4. Fakturapåminnelser som går av sig själva", desc: "Nästan alla bokföringssystem kan skicka en vänlig påminnelse automatiskt några dagar efter förfallodatum, och en till efter det. Du slipper det obekväma jagandet, och pengarna kommer in snabbare utan att du ens tänker på det." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-surface border border-border rounded-xl p-5 mb-8">
              <p className="text-[15px] font-700 text-heading mb-3">Så får du en offert du faktiskt kan lita på:</p>
              <div className="space-y-2">
                {[
                  "Ge AI en färdig mall med dina riktiga priser och villkor",
                  "Mata in en kort men tydlig beskrivning av jobbet",
                  "Låt den skriva utkastet, aldrig skicka det själv",
                  "Läs alltid igenom summor och omfattning innan du trycker på skicka",
                  "Spara de bästa offerterna som nya mallar",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 4: bokning och uppföljning */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              5 och 6: Bokningar och uppföljning som sköter sig själva
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Att boka en tid via mejl kan ta fem meddelanden fram och tillbaka. Passar tisdag? Nej, då kan inte jag. Onsdag? Och så vidare. Det är precis den sortens friktion som får folk att tröttna och välja någon annan.
            </p>

            <div className="space-y-4 mb-6">
              {[
                { title: "5. Låt kunden boka själv", desc: "En bokningslänk som visar dina lediga tider låter kunden välja direkt i din kalender. Tiden bokas, bekräftelse skickas automatiskt och allt hamnar rätt utan ett enda mejl från dig. För tjänsteföretag är det ofta den enskilt största tidsvinsten." },
                { title: "6. Automatiska påminnelser före mötet", desc: "Ett sms eller mejl dagen innan minskar bommade tider rejält. En bom är en tom lucka du inte kan fakturera, så det här betalar sig snabbt. Samma flöde kan tacka kunden efteråt och be om ett omdöme, som i sin tur stärker din lokala synlighet." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Kedjar du ihop de här bitarna får du ett flöde som löper helt utan att du rör en tangent:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { n: "1", title: "Besökaren ställer en fråga", desc: "Chatboten på sajten svarar direkt och förstår vad personen är ute efter." },
                { n: "2", title: "Boten kvalificerar och guidar", desc: "Den ställer ett par följdfrågor och föreslår att boka en tid om det passar." },
                { n: "3", title: "Kunden bokar själv", desc: "Personen väljer en ledig tid, får bekräftelse och läggs in i din kalender." },
                { n: "4", title: "Påminnelsen går ut", desc: "Dagen innan får kunden en påminnelse, och du dyker upp till en tid som faktiskt blir av." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 bg-surface border border-border rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light text-primary font-700 text-[15px] flex items-center justify-center">
                    {step.n}
                  </div>
                  <div>
                    <p className="text-[15px] font-700 text-heading mb-1">{step.title}</p>
                    <p className="text-[14px] text-body leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 5: innehåll och admin */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              7 och 8: Innehåll och admin som annars aldrig blir gjort
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det finns en hög med uppgifter som alltid hamnar sist och därför sällan blir gjorda: blogginlägg, produkttexter, mötesanteckningar. AI är utmärkt just här, eftersom den kan ta dig från blankt papper till ett hyfsat utkast på sekunder. Det är alltid lättare att putsa än att börja från noll.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "7. Utkast till texter", desc: "Blogginlägg, produkttexter, inlägg för sociala medier och svar på vanliga frågor. AI skriver ett första utkast utifrån dina stolpar, sedan gör du det till ditt eget med din kunskap och din ton. Använd den som en snabb praktikant, inte som en skribent du publicerar oläst." },
                { title: "8. Transkribering, anteckningar och rapporter", desc: "Spela in kundmötet och få en ren sammanfattning med vad ni kom överens om och vad som ska göras. Samma sak med enkla månadsrapporter: mata in siffrorna och få en läsbar text du kan skicka vidare. Det tråkiga efterarbetet blir gjort direkt i stället för att skjutas upp." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section 6: så börjar du */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Så börjar du: en tidstjuv i taget
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det största misstaget är att försöka automatisera allt på en gång. Då blir det för mycket, något går fel och du ger upp. Börja i stället med en enda uppgift, den som irriterar dig mest, och bygg vidare därifrån.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { n: "1", title: "Kartlägg en vanlig vecka", desc: "Skriv ner allt återkommande du gör i sju dagar. Du kommer bli förvånad över hur mycket som upprepas." },
                { n: "2", title: "Välj den värsta tidstjuven", desc: "Peka ut en enda uppgift som stjäl mest tid och skapar minst värde. Där börjar du." },
                { n: "3", title: "Automatisera bara den saken", desc: "Sätt upp ett flöde, testa det på riktigt i några dagar och se till att det funkar innan du går vidare." },
                { n: "4", title: "Mät och ta nästa", desc: "Blev det bättre? Bra, ta nästa tidstjuv. Blev det inte det, justera. Ett steg i taget slår en stor smäll." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 bg-surface border border-border rounded-xl p-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light text-primary font-700 text-[15px] flex items-center justify-center">
                    {step.n}
                  </div>
                  <div>
                    <p className="text-[15px] font-700 text-heading mb-1">{step.title}</p>
                    <p className="text-[14px] text-body leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 7: fällor */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Fällorna: automatisera inte kaos
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Automation förstärker det som redan finns. Är din process rörig gör en robot bara röran snabbare och i större skala. Städa upp rutinen först, automatisera den sedan. Och håll alltid en människa i loopen där det spelar roll: AI ska ta bort tröttsamt klick och skrivande, inte fatta dina beslut åt dig.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Gör</p>
                <div className="space-y-2">
                  {[
                    "Städa processen innan du automatiserar",
                    "Börja med en uppgift i taget",
                    "Läs igenom det AI skapar innan det går ut",
                    "Ha alltid en väg till en människa",
                    "Tänk på var kunddata hamnar",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Undvik</p>
                <div className="space-y-2">
                  {[
                    "Automatisera en rörig process rakt av",
                    "Låta en bot låtsas vara människa",
                    "Skicka AI-text oläst till kund",
                    "Bygga tio flöden samtidigt",
                    "Mata in känsliga uppgifter utan koll",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Gör du det så här blir AI det den är bäst på: en tyst medarbetare som tar hand om det tråkiga så att du får tillbaka timmar till det du faktiskt är bra på. Här är en liten lista att bocka av redan den här veckan.
            </p>

            {/* Checklist */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Kom igång den här veckan
            </h2>

            <div className="space-y-2 mb-8">
              {[
                "☐ Skriv ner allt återkommande du gör under en vecka",
                "☐ Ringa in den uppgift som stjäl mest tid och minst värde",
                "☐ Sätt upp ett autosvar på inkorgen med när kunden får svar",
                "☐ Lägg en bokningslänk på sajten om du bokar tider",
                "☐ Slå på automatiska fakturapåminnelser i ditt bokföringssystem",
                "☐ Testa att låta AI skriva ett offert- eller textutkast åt dig",
                "☐ Bestäm var en riktig människa alltid ska ta över",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "12 AI-verktyg för småföretag", href: "/blogg/ai-verktyg-smaforetag" },
                { title: "Chatbot för företag", href: "/blogg/chatbot-for-foretag" },
                { title: "AI-automation", href: "/tjanster/ai-automation" },
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
                Vad skulle du göra med tio timmar mer i veckan?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Vi kartlägger dina tidstjuvar och automatiserar dem med AI. Boka en kostnadsfri genomgång så tittar vi tillsammans på var du vinner mest.
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
