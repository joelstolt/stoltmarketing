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
                <span className="text-heading font-500">E-postmarknadsföring</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Marknadsföring
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                E-postmarknadsföring för småföretag: bygg en lista som säljer
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 27 augusti 2026
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
              Du lägger timmar på inlägg i sociala medier, får några likes, och nästa dag är allt borta i flödet. Samtidigt ligger den kanal som nästan alltid ger mest tillbaka per satsad krona och samlar damm: e-post. Skillnaden är enkel. Din e-postlista äger du. Dina följare äger du inte.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Efter 150+ webbprojekt och tio år i branschen ser jag samma mönster om och om igen. Företag med en vårdad e-postlista har en tillgång de kan vända sig till när kalendern gapar tom, medan de utan får börja om från noll varje gång de behöver fler kunder. Den här guiden visar hur du bygger en lista från noll och gör den till återkommande affärer, utan att bli en sådan avsändare som folk stänger av direkt.
            </p>

            {/* Section: Varför e-post */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Varför e-post fortfarande slår sociala medier
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Räckvidden på sociala medier bestäms av en algoritm du inte styr över. En dag når ett inlägg hälften av dina följare, nästa dag några enstaka procent. Ett mejl landar i inkorgen hos alla som sagt ja, varje gång. Du behöver inte betala en krona för att nå fram till din egen lista.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det är därför avkastningen brukar hamna bland de högsta av alla digitala kanaler. Det handlar inte om magi, utan om att du pratar med människor som redan har räckt upp handen och sagt att de vill höra från dig. En förfrågan som kommer via ett mejl är nästan alltid varmare än en kall besökare från Google.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Så här skiljer sig kanalerna i praktiken:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Sociala medier", text: "Du hyr räckvidden, plattformen bestämmer" },
                { label: "Betald annonsering", text: "Slutar du betala, slutar trafiken" },
                { label: "E-postlista", text: "Du äger kontakten och når fram gratis" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Poängen är inte att sluta med sociala medier. Poängen är att sociala medier och annonser är bäst på att fånga nya människor, medan e-post är bäst på att förvandla dem till kunder som kommer tillbaka gång på gång.
            </p>

            {/* Section: Samla in adresser */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 1: Samla in adresser (lagligt)
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Ingen ger dig sin adress för att få reklam. De ger den för att få något de faktiskt vill ha. Ditt jobb är att erbjuda ett tydligt värde i utbyte, det som brukar kallas en lead-magnet: en checklista, en kort guide, en rabatt på första köpet, eller helt enkelt ett nyhetsbrev som är värt att läsa.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Placeringen avgör hur många som skriver upp sig. Ett formulär som ligger gömt längst ner i sidfoten samlar nästan inga adresser. Fråga där uppmärksamheten redan finns.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Var du fångar flest adresser:</p>
              <div className="space-y-2">
                {[
                  "En tydlig ruta högt upp på startsidan, inte bara i sidfoten",
                  "Vid kassan eller efter en förfrågan, där du frågar om lov att höra av dig igen",
                  "I slutet av dina bästa blogginlägg, när läsaren redan är intresserad",
                  "En liten pop-up som dyker upp när besökaren är på väg att lämna sidan",
                  "På plats i butiken eller på mässan, med en QR-kod rakt till formuläret",
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
                  <p className="text-[15px] font-700 text-heading mb-1">Samtycke och GDPR på tre rader</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Du behöver ett aktivt ja. Ingen förkryssad ruta, ingen adress köpt från en lista. Berätta kort vad de får och ungefär hur ofta, länka till din integritetspolicy, och se till att varje utskick har en avanmälan som fungerar. Dubbel opt-in, där prenumeranten bekräftar via ett mejl, ger dig både renare lista och ett kvitto på samtycket.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Välkomstflöde */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 2: Ett välkomstflöde som gör prenumeranter till kunder
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det första mejlet är ditt viktigaste. Där är intresset som störst, och välkomstmejl öppnas ofta betydligt mer än vanliga utskick. Att skicka dem för hand varje gång är hopplöst, så du bygger ett automatiskt flöde en gång och låter det jobba åt dig i bakgrunden.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Ett enkelt välkomstflöde på tre till fyra mejl räcker långt:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Direkt: leverera det du lovade", desc: "Skicka guiden, rabattkoden eller välkomsthälsningen på en gång. Passa på att berätta kort vem du är och vad de kan förvänta sig framöver." },
                { title: "Efter någon dag: bygg förtroende", desc: "Dela något genuint användbart utan att sälja. Ett vanligt misstag du hjälper dem undvika, eller ett kort kundexempel. Nu visar du att det är värt att öppna dina mejl." },
                { title: "Efter några dagar: gör ett mjukt erbjudande", desc: "Nu kan du presentera din tjänst eller produkt, gärna kopplad till problemet du nyss hjälpte till med. Ett tydligt nästa steg, inte tio." },
                { title: "Efter en vecka: bjud in till dialog", desc: "Fråga rakt ut vad de behöver hjälp med, eller vad som fick dem att skriva upp sig. Svaren är guld för både din marknadsföring och dina framtida mejl." },
              ].map((step, i) => (
                <div key={i} className="bg-surface border border-border rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light text-primary font-700 text-[14px] flex items-center justify-center">{i + 1}</span>
                    <div>
                      <p className="text-[15px] font-700 text-heading mb-1">{step.title}</p>
                      <p className="text-[14px] text-body leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section: Vad och hur ofta */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 3: Vad du ska skicka, och hur ofta
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Den vanligaste frågan är hur ofta man får höra av sig utan att bli jobbig. Sanningen är att folk sällan avanmäler sig för att du mejlar för ofta. De avanmäler sig för att du mejlar tråkigt. Ett mejl i veckan som ger värde är välkommet. Ett mejl i månaden som bara tigger om köp är det inte.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En enkel regel är att låta det mesta ge något innan du ber om något. Tänk att ungefär fyra av fem mejl ska hjälpa, lära eller underhålla, och vart femte får sälja på riktigt. Då förtjänar du rätten att fråga.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Idéer på vad du kan skicka, om du känner att du inte har något att säga:
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Svar på de frågor kunder ställer om och om igen",
                "Bakom kulisserna: ett jobb ni just gjort eller ett nytt ansikte i teamet",
                "Ett tips eller en genväg som sparar läsaren tid",
                "Säsongsbetonade påminnelser (dags att serva, boka inför hösten)",
                "Erbjudanden och nyheter, men sparsamt och med en tydlig deadline",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Section: Skriv mejl som öppnas */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Steg 4: Skriv mejl som faktiskt öppnas och klickas
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det spelar ingen roll hur bra mejlet är om ämnesraden inte får det öppnat. Håll den kort, konkret och nyfiken, och lova något läsaren faktiskt vill ha. Undvik versaler och rader av utropstecken som skriker, de landar oftare i skräpposten än i inkorgen.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              När mejlet väl är öppet gäller en enda tanke per mejl. Ett budskap, en åtgärd. Vill du att de ska boka en tid, låt hela mejlet peka mot den knappen och släng allt annat som konkurrerar om uppmärksamheten.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Gör</p>
                <div className="space-y-2">
                  {["En kort, ärlig ämnesrad", "Skriv som till en enda person", "En tydlig knapp eller länk", "Ett budskap per mejl"].map((item) => (
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
                  {["Ämnesrader i versaler med utropstecken", "Fem olika erbjudanden i samma mejl", "Bara bilder utan text (fastnar i spam)", "Ingen tydlig nästa åtgärd"].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section: Automatisering */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Automatisera flöden som jobbar medan du sover
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              När välkomstflödet är på plats kan du bygga fler små automatiseringar som fångar affärer du annars hade missat. De sätts upp en gång och rullar sedan på i bakgrunden utan att du behöver tänka på dem.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Tre flöden som brukar löna sig snabbast:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Övergiven kundvagn", desc: "Har du webbutik? Ett vänligt påminnelsemejl till den som la varor i korgen men aldrig slutförde köpet hämtar hem en förvånansvärt stor andel av dem." },
                { title: "Återkoppling efter köp eller utfört jobb", desc: "Ett automatiskt tack, en fråga om hur det gick och en inbjudan att lämna en recension. Bygger både förtroende och nästa affär på en gång." },
                { title: "Återaktivering", desc: "Har någon inte öppnat ett mejl på länge? Ett kort mejl som säger att du saknar dem väcker en del till liv, och hjälper dig städa bort resten." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Section: Mät och misstag */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vad du ska mäta, och misstagen som dödar en lista
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Du behöver inte drunkna i statistik. Fyra siffror räcker för att veta om det fungerar:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Öppningsfrekvens", text: "Fångar ämnesraden intresse?" },
                { label: "Klickfrekvens", text: "Får innehållet folk att agera?" },
                { label: "Avanmälningar", text: "Skickar du för ofta eller fel saker?" },
                { label: "Förfrågningar och köp", text: "Det enda som betalar räkningarna" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Öppnings- och klicksiffror är riktvärden, inte betyg. Det som räknas är hur många mejlet leder fram till en faktisk affär. En liten, engagerad lista slår nästan alltid en stor och sovande.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Till sist, misstagen som får listor att kollapsa:
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Köpa eller skrapa adresser, det dödar din avsändarstatus och är dessutom olagligt",
                "Skicka från en no-reply-adress som ingen kan svara på",
                "Glömma hur mejlet ser ut i mobilen, där de flesta faktiskt läser",
                "Göra avanmälan svår, det föder spamanmälningar i stället",
                "Låta listan tystna i månader och sedan spamma först när du behöver pengar",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <X size={14} className="text-red-400 mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Börja litet. En insamlingsruta som ger något folk vill ha, ett välkomstflöde på tre mejl, och ett utskick i månaden du faktiskt står för. Det slår en påkostad plan du aldrig hinner genomföra.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Marknadsföring för småföretag", href: "/blogg/marknadsforing-smaforetag" },
                { title: "Content-strategi för småföretag", href: "/blogg/content-strategi-smaforetag" },
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
              <h3 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mb-3">
                Vill du komma igång med e-post som säljer?
              </h3>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                Vi sätter upp insamling, flöden och nyhetsbrev som faktiskt läses, i din ton och kopplat till din sajt. Boka en kostnadsfri genomgång så tittar vi på var du kan börja fånga adresser redan i veckan.
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
