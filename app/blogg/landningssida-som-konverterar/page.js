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
                <span className="text-heading font-500">Landningssida</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Konvertering
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Landningssida som konverterar: anatomin bakom en sida som säljer
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 30 juli 2026
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
              Du betalar för varje klick till din landningssida. Någon ser din annons, klickar och landar på sidan. Sedan har du ungefär fem sekunder innan de bestämmer sig för att stanna eller stänga fliken. En landningssida har ett enda jobb: att få besökaren att ta nästa steg. Inte imponera, inte berätta allt om företaget. Bara få ett ja.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Efter 150+ webbprojekt och tio år i branschen har jag sett samma sak om och om igen: sidorna som konverterar är sällan de snyggaste, de är de tydligaste. Den här guiden går igenom anatomin i en landningssida som säljer, sektion för sektion, i den ordning besökaren möter dem. Ingen teori, bara det som faktiskt flyttar siffran.
            </p>

            {/* Section: Vad en landningssida är */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad en landningssida faktiskt är (och varför den inte är din startsida)
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Din startsida är ett torg. Den ska passa alla: nya besökare, gamla kunder, någon som letar efter ditt telefonnummer, någon som vill se dina priser. Därför har den en meny, många länkar och flera mål samtidigt. Det är helt rätt för en startsida. Det är förödande för en landningssida.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En landningssida är byggd för ett enda syfte och är ofta kopplad till en specifik annons. Någon klickar på en annons om takläggning i Hässleholm och ska landa på en sida som handlar om exakt det: takläggning i Hässleholm. Inget annat. Varje länk som leder bort och varje extra val är en chans för besökaren att tappa fokus och försvinna.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Skillnaden i praktiken ser ut ungefär så här:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Startsidan", text: "Många mål, full meny, för alla" },
                { label: "Landningssidan", text: "Ett mål, inga distraktioner, för en målgrupp" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Regel nummer ett: bestäm ett mål för sidan och ta bort allt som inte leder dit. Det låter brutalt, men det är själva poängen. I praktiken betyder det ofta att du plockar bort huvudmenyn, länkgyttret i sidfoten och allt annat som lockar besökaren att börja surfa runt i stället för att agera. En sida som ber om en sak får svar på den saken.
            </p>

            {/* Section: Rubriken */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Rubriken gör 80 procent av jobbet: lova ett resultat
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Om besökaren bara läser en sak är det rubriken. Den avgör om resten av sidan ens får en chans. En svag rubrik beskriver dig. En stark rubrik lovar besökaren ett resultat. Skillnaden mellan de två är ofta skillnaden mellan en tyst sida och en som ringer.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Rubriken ska också matcha annonsen de klickade på. Klickar de på &quot;Snabb takläggning i Hässleholm&quot; och möts av &quot;Välkommen till vårt företag&quot;, känns det som fel sida och de studsar tillbaka. Samma ord och samma löfte, hela vägen från annons till rubrik. Det kallas message match och är en av de billigaste konverteringsvinsterna som finns.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Tips: skriv om egenskap till resultat</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Byt &quot;Vi erbjuder professionell takläggning&quot; mot &quot;Nytt tak på plats innan hösten, utan strul&quot;. Det första handlar om dig. Det andra handlar om vad kunden får. Läsaren bryr sig alltid mest om det andra.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Underrubrik, värde, CTA */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Underrubrik, värdeerbjudande och en CTA ovanför vikningen
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Under rubriken kommer en underrubrik som fyller i löftet med ett konkret hur eller varför. Rubriken lovar, underrubriken gör löftet trovärdigt. Tillsammans är de ditt värdeerbjudande: vad besökaren får, för vem det är, och varför just du.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Ovanför vikningen, alltså det besökaren ser utan att skrolla, ska allt det viktigaste finnas. Får du det på plats har du redan slagit de flesta sidor på nätet.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "1. En rubrik med ett resultat", desc: "Vad besökaren får, i klartext och på svenska." },
                { title: "2. En underrubrik som bevisar", desc: "En mening om hur eller varför löftet håller." },
                { title: "3. En primär CTA", desc: "En knapp med värde i texten, inte bara ordet Skicka." },
                { title: "4. Ett visuellt bevis", desc: "En riktig bild eller ett omdöme som stödjer löftet, gärna en verklig kund." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Notera att detta ska synas utan att skrolla, särskilt på mobilen där de flesta faktiskt landar. Testa din egen sida i telefonen: ser du löftet och knappen direkt, eller måste du leta? Om du måste leta gör besökaren det inte, hen lämnar.
            </p>

            {/* Section: Social proof */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Social proof: bevisa att andra redan sagt ja
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Folk litar inte på vad du säger om dig själv. De litar på vad andra säger om dig. Därför är social proof en av de starkaste sakerna du kan lägga på en landningssida, och den ska ligga nära dina knappar, där tvivlet är som störst.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Bevis som faktiskt flyttar besökaren:</p>
              <div className="space-y-2">
                {[
                  "Riktiga recensioner med namn och gärna ort",
                  "Ett kort kundcase med ett tydligt resultat",
                  "Logotyper på kunder eller samarbeten du får visa",
                  "Konkreta siffror du kan stå för (antal projekt, år i branschen, nöjda kunder)",
                  "Betyg från Google eller en branschsajt",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Var specifik och ärlig. Fyrtio nöjda kunder i Skåne är starkare än tusentals nöjda kunder i hela landet, för det första låter sant. Och uppfinn aldrig bevis. Det syns förr eller senare, och då raserar det precis det förtroende du försökte bygga.
            </p>

            {/* Section: Invändningshantering */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Invändningshantering: svara på tvivlen innan de stoppar affären
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Mellan att besökaren är intresserad och att hen klickar ligger en rad tysta invändningar. Vad kostar det? Hur lång tid tar det? Vad händer om det inte funkar? Binder jag upp mig? En sida som konverterar svarar på dem innan de hinner bli en anledning att vänta. Två verktyg gör det mesta av jobbet: en kort FAQ och en risk-reducerare.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Frågor din FAQ bör svara på:</p>
              <div className="space-y-2">
                {[
                  "Vad kostar det, ungefär?",
                  "Hur snabbt kan ni komma igång?",
                  "Vad ingår, och vad ingår inte?",
                  "Vad händer om jag inte blir nöjd?",
                  "Hur ser första steget ut rent praktiskt?",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Risk-reducerare tar bort sista tvekan</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Ju större risk besökaren känner, desto mer hjälper det att flytta den bort från hen. En kostnadsfri genomgång, ingen bindningstid eller en tydlig nöjd-kund-garanti gör att ett ja känns billigare att säga. Skriv det direkt vid knappen, inte gömt längst ner.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: CTA och formulär */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              En enda CTA som upprepas, och ett formulär som inte skrämmer
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En landningssida ska ha en primär åtgärd, och bara en. Boka en genomgång, ring, eller fyll i formuläret. Erbjuder du tre olika saker väljer besökaren ofta ingen. Bestäm det viktigaste steget och upprepa samma CTA på flera ställen längs sidan, så att den alltid är nära när besökaren är redo.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Texten på knappen spelar roll. &quot;Skicka&quot; och &quot;Läs mer&quot; säger ingenting. &quot;Boka kostnadsfri genomgång&quot; eller &quot;Få min offert&quot; säger vad som händer och vad jag får ut av det. Det är en liten ändring med mätbar effekt.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Formuläret är där många sidor tappar folk i sista sekund. Varje extra fält kostar dig svar. Fråga bara om det du faktiskt behöver för att ta första kontakten, resten kan du samla in senare.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Gör</p>
                <div className="space-y-2">
                  {["Håll det till några få fält", "Fråga om namn och ett sätt att nå dig", "Säg vad som händer efter att man skickat", "Ha en tack-sida eller tydlig bekräftelse"].map((item) => (
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
                  {["Långt formulär med tio fält", "Fråga om saker du inte behöver än", "Dölja vad som händer efteråt", "Skicka utan bekräftelse"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section: Vanliga misstag */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vanliga misstag som tyst dödar konverteringen
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              De flesta landningssidor som inte konverterar gör samma återkommande misstag. Det fina är att nästan alla går att fixa på en eftermiddag. Här är de vanligaste jag stöter på:
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Flera konkurrerande mål i stället för ett",
                "En meny och länkar som leder bort från sidan",
                "En rubrik som handlar om dig, inte om kunden",
                "Långsam sida, särskilt på mobilen där de flesta faktiskt är",
                "Stockfoton i stället för riktiga bilder och bevis",
                "Ett långt formulär som frågar om allt på en gång",
                "Ingen social proof, så besökaren får bara ta ditt ord för det",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <X size={14} className="text-red-400 mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Nästan alla handlar om samma sak: sidan ber om för mycket, för tidigt, och ger besökaren för många vägar att göra ingenting. Ta bort, förenkla och upprepa erbjudandet. Det är hela hemligheten, och den är billigare än mer annonsbudget.
            </p>

            {/* Section: Checklista */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Snabb checklista innan du publicerar
            </h2>

            <div className="space-y-2 mb-8">
              {[
                "☐ Sidan har ett enda mål och ingen meny som leder bort",
                "☐ Rubriken lovar ett resultat och matchar annonsen",
                "☐ Löfte, bevis och en CTA syns utan att skrolla",
                "☐ Social proof ligger nära dina knappar",
                "☐ FAQ svarar på de vanligaste invändningarna",
                "☐ En risk-reducerare finns vid knappen (gratis genomgång, ingen bindningstid)",
                "☐ Samma primära CTA upprepas längs sidan",
                "☐ Formuläret har bara de fält du verkligen behöver",
                "☐ Sidan laddar snabbt och fungerar på mobilen",
                "☐ Tack-sida eller bekräftelse på plats, och leadet spåras",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Bocka av listan innan du skickar trafik till sidan. Det är billigare att fixa en tyst landningssida före lanseringen än att betala för klick som studsar bort i veckor.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Därför får din hemsida inga kunder", href: "/blogg/hemsida-inga-kunder" },
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
                Behöver du en landningssida som säljer?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Vi bygger snabba, konverterande landningssidor kopplade till dina annonser. Boka en kostnadsfri genomgång så tittar vi på ditt erbjudande och vad som får fler att ta nästa steg.
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
