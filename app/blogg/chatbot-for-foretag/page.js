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
                <span className="text-heading font-500">Chatbot för företag</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                AI
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Chatbot för företag: så fångar din hemsida fler leads dygnet runt
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 23 juli 2026
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
              Klockan är halv tio på kvällen. Någon sitter i soffan med mobilen och funderar på att anlita just din typ av företag. De landar på din sajt och undrar en enda sak: hinner ni med ett jobb nästa vecka, och vad kostar det ungefär? Det finns ingen att fråga. Kontaktformuläret känns som att skicka ett brev och vänta. Så de stänger fliken och googlar vidare. Nästa morgon har de redan pratat med någon annan.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det här är den tysta läckan i de flesta småföretags marknadsföring: trafiken kommer, men bara en bråkdel hör av sig, och de som verkligen är på köphumör vill ha svar direkt. En modern AI-chatbot är byggd för precis det ögonblicket. Efter drygt tio år och 150+ webbprojekt har jag sett hur mycket som avgörs under de första minuterna på en sajt. Här går jag igenom vad en chatbot faktiskt gör idag, hur den fångar leads medan du sover, vad den kostar och hur du sätter upp en utan att tappa den mänskliga känslan.
            </p>

            {/* Section: Problemet */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Problemet: de flesta besökare hör aldrig av sig
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              De flesta som besöker din hemsida försvinner utan ett spår. Det är inte ett tecken på att sajten är dålig, det är helt normalt. Av alla som klickar in är det ofta bara någon enstaka procent som fyller i ett formulär eller lyfter luren. Resten hade en fråga, fick inget snabbt svar, och gick vidare.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Två saker gör att de tappas. Det första är tajmingen. En köpsugen besökare vill ha besked nu, inte ett mejlsvar om två arbetsdagar. Det andra är tröskeln. Att fylla i namn, mejl, telefon och ett meddelande känns som ett åtagande när allt personen ville veta var om ni ens tar den typen av uppdrag.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En chatbot sänker båda. Den svarar direkt, dygnet runt, och den börjar med en enkel fråga i stället för ett tomt formulär. För många företag är det skillnaden mellan att fånga kvällens och helgens besökare eller att lämna dem åt konkurrenten som svarar snabbare.
            </p>

            {/* Section: Vad den gör */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad en modern AI-chatbot faktiskt gör
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En chatbot är inte längre bara en ruta som säger hej. En välbyggd bot gör fyra konkreta jobb åt dig, samtidigt, utan rast.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Svarar på vanliga frågor", desc: "Öppettider, priser, leveranstid, hur ni jobbar och om ni tar just det här uppdraget. Boten svarar på det besökaren annars hade behövt ringa och fråga, och den gör det på sekunden." },
                { title: "Kvalificerar besökaren", desc: "Genom några naturliga frågor listar den ut om personen är en riktig kund eller bara nyfiken. Vilken tjänst gäller det, hur bråttom är det, var i landet finns de. Du får leads som redan är sorterade." },
                { title: "Bokar och lotsar vidare", desc: "Den kan lägga ett möte i kalendern, skicka en offertförfrågan till rätt person eller lotsa besökaren till rätt sida. Nästa steg blir självklart i stället för att hänga i luften." },
                { title: "Fångar kontaktuppgifter", desc: "Innan samtalet tar slut ber den om namn och ett sätt att nå personen, och skickar allt direkt till din inkorg. Även om ingen bokning blir av har du en varm kontakt att följa upp." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Det gör den på varje sida, varje timme, för alla besökare samtidigt. Du behöver aldrig välja mellan att svara en kund och att göra ditt jobb. Boten tar första kontakten, och du kliver in när det är dags för en riktig affär.
            </p>

            {/* Section: Skillnaden mot knappbotar */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Skillnaden mot de gamla knappbotarna
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Om du testade en chatbot för några år sedan och blev besviken är det förståeligt. De gamla botarna byggde på fasta knappval. Du klickade dig fram i ett träd av förbestämda alternativ, och så fort din fråga inte passade in i något av dem stod boten och stampade. Det var mer telefonsvarare än samtal.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              En modern AI-chatbot fungerar tvärtom. Den förstår fritext, alltså vanliga meningar som folk skriver själva, och den tränas på din verksamhet: dina tjänster, dina priser och ditt sätt att formulera dig. Resultatet är ett samtal som känns som att prata med någon som faktiskt kan företaget.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Gammal knappbot</p>
                <div className="space-y-2">
                  {["Bara förbestämda knappval", "Fastnar på oväntade frågor", "Samma svar till alla", "Känns som en automat"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Modern AI-chatbot</p>
                <div className="space-y-2">
                  {["Förstår fritt skrivna frågor", "Hanterar det den inte planerat för", "Svarar utifrån din verksamhet", "Låter som ditt företag"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section: Flödet dygnet runt */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Så fångar den leads dygnet runt
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Det bästa sättet att förstå värdet är att följa ett vanligt kvällsscenario steg för steg. Säg att du driver en byggfirma och att någon hittar dig vid niotiden på en söndag.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Besökaren skriver en fråga", desc: "Personen undrar om ni bygger altaner och om ni hinner titta på ett jobb i Hässleholm innan semestern. Boten svarar direkt att ja, det gör ni, och frågar vad det gäller." },
                { title: "Boten kvalificerar", desc: "Några korta frågor: typ av jobb, ungefärlig storlek och önskad tid. Nu vet systemet att det är en relevant förfrågan och inte ett reklamutskick." },
                { title: "Den fångar kontakten", desc: "Boten föreslår att någon ringer upp med ett grovt prisspann, och ber om namn och telefonnummer. Besökaren lämnar dem eftersom hen redan fått hjälp och känner sig omhändertagen." },
                { title: "Du får leadet på morgonen", desc: "När du öppnar inkorgen på måndag ligger en färdig förfrågan där: namn, nummer, vad det gäller och hur bråttom det är. Du ringer en person som redan bestämt sig för att höra av sig." },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-4 bg-surface border border-border rounded-xl p-5">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary-light text-primary font-700 text-[13px] flex items-center justify-center">{i + 1}</span>
                  <div>
                    <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                    <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ingen satt uppe klockan nio på söndagen. Ändå blev besökaren omhändertagen, och ett lead som annars hade runnit ut i sanden landade hos dig i stället för hos någon annan.
            </p>

            {/* Section: Mänskliga känslan */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Behåll den mänskliga känslan
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Den vanligaste oron jag hör är att en bot ska kännas kall eller stå i vägen för riktig kontakt. Det är en rimlig oro, och den avgörs helt av hur boten är byggd. Målet är inte att ersätta dig, det är att ta hand om det enkla så att du kan lägga tiden på de samtal som kräver en människa.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              En bra bot vet var dess gräns går. Så fort en fråga blir personlig, känslig eller för specifik ska den kunna lämna över, antingen genom att erbjuda att du ringer upp eller genom att koppla in en människa direkt om du är tillgänglig. Den ska också vara ärlig med att den är en digital assistent och inte låtsas vara du.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Låt boten säga när den inte vet</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    En chatbot som gissar är farligare än en som säger att den ska ta reda på svaret. Bygg in att den hellre samlar in frågan och lovar återkoppling än hittar på. Det skyddar ditt förtroende, och du får dessutom en logg över vad kunderna faktiskt undrar.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Kostnad */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad det kostar och hur snabbt det lönar sig
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Priset varierar en hel del beroende på hur avancerad boten är, men det går att ge en ärlig bild. Grovt handlar det om två delar: en engångskostnad för att sätta upp och träna boten på din verksamhet, och en löpande kostnad för att driva och underhålla den.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Uppsättning", text: "Engång, beror på hur mycket material boten tränas på" },
                { label: "Månadskostnad", text: "Löpande drift, ofta i klass med en enkel prenumeration" },
                { label: "Underhåll", text: "Justeringar när priser, tjänster eller frågor ändras" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Räknesnurran är enklare än man tror. Om en enda bot fångar ett extra jobb i månaden som du annars hade missat, har den för de flesta tjänsteföretag redan betalat för sig. Och till skillnad från annonser jobbar den vidare varje kväll och helg utan att du fyller på budget.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Jämför med alternativen. En anställd som svarar i chatten kostar långt mer och jobbar inte nätter och helger. Ett missat kvällssamtal syns aldrig i din bokföring, men det är en förlorad affär lika mycket som en obetald faktura. Boten täpper till just det hålet till en kostnad som de flesta småföretag knappt märker av.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Poängen är inte att boten är gratis, utan att den arbetar på de tider då du inte kan, och att den fångar affärer som annars aldrig hade synts i din statistik.
            </p>

            {/* Section: Kom igång */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Kom igång: vad den behöver veta om ditt företag
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En chatbot är bara så bra som det du matar den med. Den goda nyheten är att du redan sitter på det mesta. Det handlar mer om att samla ihop det än att skriva något nytt.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-8">
              <p className="text-[15px] font-700 text-heading mb-3">Det här behöver boten:</p>
              <div className="space-y-2">
                {[
                  "Dina vanligaste kundfrågor, gärna de du är trött på att svara på",
                  "Vad du erbjuder och, minst lika viktigt, vad du inte gör",
                  "Ungefärliga priser eller prisspann, så långt du vill gå ut med dem",
                  "Hur ni jobbar: område, leveranstid och hur en förfrågan går till",
                  "Din ton, alltså hur du vill låta mot en kund",
                  "Vart leads ska skickas och vem som följer upp dem",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Har du det på plats är resten hantverk. Vi bygger boten, tränar den på ditt material, sätter den i din ton och ser till att varje lead landar rätt. Ofta är den igång på ett par veckor, och sedan är det bara att förbättra den utifrån vad kunderna faktiskt frågar.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Automatisera det tråkiga: 8 AI-exempel", href: "/blogg/automatisera-med-ai" },
                { title: "AI för företag: praktiska användningsområden", href: "/blogg/ai-for-foretag" },
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
                Vill du testa en chatbot på din sajt?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Vi bygger AI-chatbotar som svarar i din ton och skickar leads rakt till din inkorg. Boka en kostnadsfri genomgång så tittar vi på din sajt och vad en bot skulle kunna fånga.
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
