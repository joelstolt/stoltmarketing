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
                <span className="text-heading font-500">Konverteringsoptimering</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Konvertering
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Konverteringsoptimering: 10 ändringar som ger fler förfrågningar
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 13 augusti 2026
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
              Tänk dig att hundra personer besöker din sajt i veckan och två av dem hör av sig. Om du får fyra att höra av sig i stället har du dubblat dina förfrågningar, utan en enda extra besökare och utan att höja annonsbudgeten. Det är hela poängen med konverteringsoptimering: att få ut mer av trafiken du redan betalar för.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              På tio år och 150+ webbprojekt har jag sett samma mönster om och om igen. De flesta småföretagare jagar mer trafik när den billigaste tillväxten ligger i att laga sajten de redan har. Här är tio konkreta ändringar som ökar andelen besökare som faktiskt hör av sig. De är sorterade efter effekt, så börjar du uppifrån får du mest för minst jobb.
            </p>

            {/* Section: Varför konvertering */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Varför konvertering ofta är billigare tillväxt än mer trafik
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Mer trafik känns som det självklara svaret när telefonen är tyst. Men trafik kostar varje månad, i annonskronor eller i månaders SEO-arbete. Och om sajten inte omvandlar besökare till förfrågningar häller du bara mer vatten i en läckande hink.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Konvertering funkar tvärtom. Du fixar sajten en gång, och den bättre versionen jobbar dygnet runt, för all trafik, utan att kosta mer nästa månad. Räkna på skillnaden:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Dubbla trafiken:", text: "mer budget varje månad, tar tid, ökar kostnaden löpande" },
                { label: "Dubbla konverteringen:", text: "några ändringar en gång, i princip gratis därefter" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light gap-4">
                  <span className="text-[15px] font-600 text-heading flex-shrink-0">{row.label}</span>
                  <span className="text-[14px] text-body text-right">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En sajt som går från 1 till 2 procent i konvertering är i praktiken värd lika mycket som en fördubbling av trafiken, till en bråkdel av kostnaden. Därför börjar jag alltid här innan jag rekommenderar en krona till annonser.
            </p>

            {/* Section: Tydlighet */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Tydlighet: ändring 1 till 3
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Den vanligaste anledningen till att en besökare lämnar är enkel: hen fattar inte tillräckligt snabbt vad du gör, för vem, och varför just du. Tre ändringar löser det mesta.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { n: "1", title: "Ett tydligt erbjudande högst upp", desc: "Besökaren ska förstå på fem sekunder vad du erbjuder och för vem. Skriv vad du gör och var, inte en luddig slogan. Behåll gärna din fina formulering, men placera den under den raka meningen." },
                { n: "2", title: "En primär åtgärd", desc: "Bestäm den enda sak du vill att besökaren gör: ringa, boka eller fylla i formuläret. Gör den knappen tydlig, upprepa den längre ned på sidan, och låt inget annat konkurrera om samma uppmärksamhet." },
                { n: "3", title: "Ta bort det som distraherar", desc: "Bildspel som ingen hinner läsa, tio menyval, en popup direkt vid ankomst. Varje extra val gör beslutet svårare. Ta bort allt som inte hjälper besökaren mot nästa steg." },
              ].map((item) => (
                <div key={item.n} className="bg-surface border border-border rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light text-primary font-700 text-[15px] flex items-center justify-center">{item.n}</span>
                    <div>
                      <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                      <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ett enkelt test: visa din startsida för någon i fem sekunder, ta bort den, och fråga vad du gör och vad de skulle göra härnäst. Kan de inte svara har du ett tydlighetsproblem, inte ett trafikproblem.
            </p>

            {/* Section: Förtroende */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Förtroende: ändring 4 till 6
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En besökare som förstår ditt erbjudande men inte litar på dig hör ändå inte av sig. Förtroende byggs med bevis, inte med adjektiv. Alla skriver att de är bäst, kunniga och pålitliga. Ingen tror på det. Visa i stället.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Bevis slår påståenden varje gång</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Byt ut ett tomt &quot;vi håller hög kvalitet&quot; mot en riktig recension med namn, ett kort case med siffror, eller en logotyp på en kund folk känner igen. Tre konkreta bevis gör mer för konverteringen än en hel sida med fina ord.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-5 mb-8">
              <p className="text-[15px] font-700 text-heading mb-3">Tre förtroendeändringar att prioritera:</p>
              <div className="space-y-2.5">
                {[
                  "Ändring 4: Lägg social proof nära din knapp. Recensioner, case, kundlogotyper och riktiga bilder på dig och teamet, inte stockfoton.",
                  "Ändring 5: Var öppen med pris och process. Visa ett prisintervall eller ett frånpris, och hur det går till steg för steg, så slipper besökaren gissa.",
                  "Ändring 6: Gör det lätt att nå dig. Klickbart telefonnummer, mejl och formulär, synligt både i toppen och i sidfoten.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Pris är den vanligaste rädslan. Du behöver inte spika en exakt prislapp, men ett intervall eller ett frånpris tar bort den största osäkerheten. Det sållar dessutom bort förfrågningar du ändå inte vill ha, så du lägger tid på rätt kunder.
            </p>

            {/* Section: Friktion */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Friktion: ändring 7 och 8
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Nu förstår besökaren dig och litar på dig. Då gäller det att inte ställa sig i vägen. Friktion är allt som gör det jobbigt att ta nästa steg, och de två största bovarna är formuläret och laddtiden.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Ändring 7 är att korta formuläret. Varje extra fält kostar dig svar. Fråga bara om det du faktiskt behöver för att kunna återkomma: namn, ett sätt att nå personen, och en kort rad om vad det gäller. Adress, organisationsnummer och femton kryssrutor kan vänta till efter första kontakten.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Gör</p>
                <div className="space-y-2">
                  {["Namn och ett kontaktsätt", "En kort fritextruta", "Tydlig knapptext som Skicka förfrågan", "Bekräfta direkt att det gick fram"].map((item) => (
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
                  {["Tio obligatoriska fält", "Fråga efter saker du inte behöver än", "Knapp som bara säger Skicka", "Tystnad efter klick, ingen vet om det funkade"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Ändring 8 är hastighet och mobil. Mer än hälften av dina besökare sitter på telefon, och varje sekund sajten laddar tappar du folk. Se till att den största bilden i toppen är hårt komprimerad, att knappar går att träffa med tummen, och att inget viktigt hamnar utanför skärmen. En snabb, mobilanpassad sajt konverterar bättre nästan av sig själv.
            </p>

            {/* Section: Brådska och uppföljning */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Brådska och uppföljning: ändring 9 och 10
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Ändring 9 är en nypa mjuk brådska. Inte falska nedräkningsklockor, folk genomskådar dem direkt. Men en ärlig anledning att höra av sig nu i stället för senare fungerar: begränsat antal platser den här månaden, bokningar en till två veckor fram, eller ett erbjudande som faktiskt tar slut. Konkret och sant, aldrig påhittat.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Ändring 10 är den som flest missar: vad som händer efter klicket. En besökare som skickat ett formulär och möts av tystnad börjar undra om det ens gick fram. Skicka dem till en riktig tack-sida som bekräftar, och berätta när de kan vänta sig svar.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Snabbt svar vinner affären</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Den som svarar först vinner ofta jobbet, även med ett högre pris. Ett formulär som ligger olöst i inkorgen till kvällen är ett halvtappat lead. Sätt en avisering direkt när ett formulär kommer in och sikta på att återkomma samma dag.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Testa */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Så testar du en ändring i taget och mäter effekten
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Frestelsen är att göra om allt på en gång. Problemet är att du då aldrig vet vad som faktiskt hjälpte. Ändra en sak i taget, ge den ett par veckor, och jämför.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du behöver inga dyra verktyg. Ett gratis analysverktyg som visar hur många som besöker en sida och hur många som skickar formuläret räcker långt. Det viktiga är att du mäter rätt sak: inte besök, inte klick, utan förfrågningar. Lägg en händelse på tack-sidan eller på lyckad formulärsändning, så ser du din konverteringsgrad svart på vitt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Har du för lite trafik för att A/B-testa, vilket de flesta småföretag har, gör det sekventiellt i stället. Mät en månad, gör ändringen, mät nästa. Det är inte labbrent, men det pekar dig åt rätt håll utan att du behöver gissa.
            </p>

            {/* Section: Prioritering */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Om du bara gör tre saker
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Hinner du inte med allt på en gång? Gör de här tre först. Det är där jag ser störst effekt snabbast:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "1. Gör erbjudandet och den primära knappen kristallklara i toppen av startsidan.",
                "2. Lägg riktiga bevis nära knappen: recensioner, ett case eller kundlogotyper.",
                "3. Korta formuläret till namn, kontakt och en rad, och skicka till en tack-sida.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              De tre tar en eftermiddag och kostar ingenting, och de flyttar oftast nålen mer än en månads extra annonser. Resten kan du beta av i lugn takt medan du mäter vad som faktiskt ger fler förfrågningar.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Därför får din hemsida inga kunder", href: "/blogg/hemsida-inga-kunder" },
                { title: "Landningssida som konverterar", href: "/blogg/landningssida-som-konverterar" },
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
              <h3 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mb-3">
                Vill du få ut mer av trafiken du redan har?
              </h3>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                Vi går igenom din sajt och pekar ut de ändringar som ger flest förfrågningar. Boka en kostnadsfri genomgång.
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
