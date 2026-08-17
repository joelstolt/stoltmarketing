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
                <span className="text-heading font-500">Betallösningar</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                E-handel
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Swish, Klarna eller kort? Guide till betallösningar i webbutiken
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 6 augusti 2026
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
              Du har lagt tid och pengar på att locka en besökare hela vägen till kassan. Hon har lagt varan i korgen, fyllt i sin adress och är redo att slutföra köpet. Sen ser hon att du bara tar kort, fast hon ville betala med Swish. Klick, borta. Så tappas en affär i sista sekunden, och det handlar nästan aldrig om priset på själva varan.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Betalsätt är ingen teknisk detalj du kan skjuta på till senare. Rätt uppsättning i kassan lyfter din konvertering, fel avgifter äter tyst upp din marginal. Efter att ha byggt och driftat e-handel åt småföretag i över tio år går jag här igenom Swish, Klarna, kort och faktura rakt upp och ner: vad de kostar, när de passar, och hur du väljer rätt utan att krångla till det.
            </p>

            {/* Section 1: Varför betalsätt */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Varför betalsätt avgör både konvertering och marginal
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Kassan är e-handelns trängsta punkt. En stor andel av alla varukorgar överges innan köpet är klart, och de vanligaste orsakerna handlar sällan om produkten. Det är oväntade fraktkostnader, tvång att skapa konto, en krånglig kassa, eller att kunden helt enkelt inte hittar det betalsätt hon litar på och vill använda.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Två krafter drar åt olika håll här. Den ena är konvertering: erbjuder du det betalsätt kunden förväntar sig så slutför fler köpet, saknas det klickar en del bort direkt. Den andra är marginal: varje betalsätt kostar dig något per order, och på varor med tunn marginal kan de avgifterna göra tydlig skillnad på sista raden.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Hela konsten ligger i att erbjuda precis tillräckligt många betalsätt för att ingen ska tappa förtroendet, utan att betala för fler tjänster än du behöver. Låt oss ta dem en och en.
            </p>

            {/* Section 2: Swish */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Swish: snabbt, billigt och det svenskarna förväntar sig
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Swish är för många svenska konsumenter det självklara sättet att betala på mobilen. Det går på sekunder, kunden slipper mata in kortnummer, och pengarna landar i princip direkt på ditt konto. För e-handel använder du Swish Handel, som kopplas till företagets bankkonto.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det starkaste argumentet för Swish är kostnaden. Avgiften är oftast en låg fast summa per transaktion, några kronor, utan någon stor procentandel som växer med ordervärdet. Det gör Swish särskilt snällt mot marginalen på små och medelstora ordrar.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-8">
              <p className="text-[15px] font-700 text-heading mb-3">Swish passar bra när:</p>
              <div className="space-y-2">
                {[
                  "Du säljer främst till svenska privatpersoner",
                  "En stor del av köpen sker på mobilen",
                  "Snittordern är liten till medelstor och du vill hålla nere avgiften",
                  "Du vill ha pengarna snabbt och slippa långa utbetalningstider",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Baksidan är att Swish i praktiken når svenska bankkunder, så det hjälper dig inte mot utländska köpare. Det saknar också inbyggd delbetalning, så för dyrare varor där kunden vill dela upp kostnaden räcker det inte hela vägen. Swish är ett utmärkt förstaval, men sällan det enda du vill ha.
            </p>

            {/* Section 3: Klarna och faktura */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Klarna och faktura: höjer ofta konverteringen men kostar mer
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Klarna och liknande tjänster låter kunden betala senare, mot faktura eller genom att dela upp beloppet. Poängen är att sänka tröskeln i själva köpögonblicket. Kunden kan handla nu och betala om två veckor, eller prova varan hemma innan hon bestämmer sig. Det tar bort en oro som annars stoppar många köp, särskilt för dyrare varor och för nya kunder som inte känner din butik än.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Priset för den bekvämligheten är högre avgifter. Faktura och delbetalning kostar dig oftast både en procentandel av ordern och en fast summa, mer än vad kort och Swish gör. Du bör också väga in att generösa betalvillkor kan öka andelen returer i vissa branscher, till exempel mode.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Fördelar</p>
                <div className="space-y-2">
                  {[
                    "Sänker tröskeln, lyfter ofta konverteringen",
                    "Kunden kan prova innan hon betalar",
                    "Välkänt varumärke som skapar trygghet",
                    "Bra för dyrare köp som kunden vill dela upp",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Nackdelar</p>
                <div className="space-y-2">
                  {[
                    "Högre avgifter än kort och Swish",
                    "Kan öka andelen returer i vissa branscher",
                    "Krångligare avstämning av utbetalningar",
                    "En del av kundrelationen hamnar hos tredje part",
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
              För många butiker är faktura värt sin avgift just för att det får fler att våga slutföra köpet. Men det är inget du lägger till oreflekterat: räkna på vad det kostar mot vad det faktiskt lyfter, och håll koll på returerna.
            </p>

            {/* Section 4: Kortbetalning */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Kortbetalning: standarden du inte kan hoppa över
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Kort är den gemensamma nämnaren. Visa och Mastercard fungerar för i stort sett alla, inklusive utländska kunder, och via en kortlösning får du oftast med Apple Pay och Google Pay på köpet. Ska du sälja utanför Sverige är kort inte valfritt, det är själva grunden.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Kort hanteras genom en betalleverantör, en så kallad PSP, som samlar flera betalsätt i en och samma kassa. Vanliga alternativ på den svenska marknaden är bland andra Stripe, Nets, Adyen, Swedbank Pay och Worldline. Flera av dem ger dig kort, Swish, Klarna och wallets i ett enda avtal, vilket förenklar både uppsättning och avstämning.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Tips: samla betalsätten hos en leverantör</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    I stället för separata avtal för varje betalsätt kan en PSP ge dig kort, Swish och Klarna i samma kassa. Du får en avstämning, en support att ringa och en enda integration att underhålla. För ett litet företag är det oftast värt mer än att jaga den absolut lägsta avgiften på varje enskild tjänst.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Kostnaden för kort är typiskt en procentandel av köpet plus en liten fast avgift per transaktion. Nivån varierar mellan leverantörer och beror bland annat på om det är svenska eller utländska kort, men den rörliga delen ligger ofta runt ett par procent.
            </p>

            {/* Section 5: Avgifterna */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Så hänger avgifterna ihop: fast plus rörligt
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              För att kunna jämföra betalsätt behöver du förstå att en avgift nästan alltid har två delar. En fast del, ett bestämt belopp per genomförd transaktion, och en rörlig del, en procentandel av ordervärdet. Ibland tillkommer en månadsavgift för själva tjänsten.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det viktiga att ta med sig: den fasta delen svider mest på små ordrar, medan den rörliga delen svider mest på stora. En fast avgift på några kronor är nästan ingenting på en order på tusenlappen, men en rejäl bit av en order på hundra kronor. En procentavgift beter sig tvärtom.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Ta en tänkt order på 500 kronor och jämför ungefär vad de olika sätten kan kosta dig. Siffrorna nedan är exempel för att visa storleksordningen, inte exakta priser, men mönstret stämmer:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "Swish", text: "runt 2 kr (låg fast avgift)" },
                { label: "Kort", text: "runt 10 kr (procent plus liten fast avgift)" },
                { label: "Klarna / faktura", text: "runt 15 till 20 kr (högst av de tre)" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Poängen är inte de exakta kronorna, utan att betalsätten kostar olika mycket och att skillnaden växer med hur mycket du säljer. Läser du det finstilta och räknar på dina egna volymer blir det snabbt tydligt vilka avgifter du faktiskt behöver bry dig om.
            </p>

            {/* Section 6: Rätt mix */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Rätt mix beror på ditt snittordervärde och dina kunder
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det finns ingen betaluppsättning som passar alla. Rätt mix beror mest på två saker: hur stor en genomsnittlig order är, och vilka dina kunder är. Så här brukar jag tänka.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { title: "Litet snittordervärde, svenska privatkunder", desc: "Prioritera Swish och kort. Låga fasta avgifter är A och O när ordrarna är små, och det är precis vad Swish ger dig. Lägg krutet på en snabb och mobilanpassad kassa." },
                { title: "Högt snittordervärde eller dyrare varor", desc: "Här tjänar faktura och delbetalning ofta in sin avgift, eftersom de får fler att våga slutföra ett större köp. Komplettera med kort och Swish." },
                { title: "Du säljer till andra företag", desc: "Faktura är nästan ett krav i B2B, eftersom företag sällan betalar med privatkort. Erbjud faktura och kort, och tänk igenom dina betalningsvillkor." },
                { title: "Du säljer utanför Sverige", desc: "Kort är ryggraden, gärna med Apple Pay och Google Pay. Swish hjälper dig bara mot svenska kunder, så luta dig mot de internationella betalsätten." },
              ].map((item) => (
                <div key={item.title} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.title}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Gemensamt för alla fyra: börja med det dina kunder faktiskt förväntar sig, lägg till där det bevisligen lyfter köpen, och strunta i resten. Fler betalsätt är inte automatiskt bättre.
            </p>

            {/* Section 7: Misstag och checklista */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vanliga misstag och en checklista innan du väljer
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              De flesta tabbar med betallösningar är enkla att undvika när man väl känner till dem. Här är de jag ser oftast, ställda mot vad du bör göra i stället.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Gör</p>
                <div className="space-y-2">
                  {[
                    "Erbjud de betalsätt dina kunder förväntar sig",
                    "Läs det finstilta på både fast och rörlig avgift",
                    "Testa hela kassan på en mobil, som en kund",
                    "Håll koll på när pengarna faktiskt betalas ut",
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
                    "Proppa kassan full med betalsätt ingen använder",
                    "Stirra dig blind på en enda avgift och missa helheten",
                    "Tvinga kunden att skapa konto för att få betala",
                    "Glömma utbetalningstiden och tappa koll på kassaflödet",
                  ].map((item) => (
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
                  <p className="text-[15px] font-700 text-heading mb-1">Färre val, tydligare kassa</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Det låter bakvänt, men för många betalsätt kan faktiskt sänka konverteringen. En kund som tvekar mellan sex logotyper i kassan bestämmer sig långsammare än en som möts av två eller tre trygga alternativ. Välj de betalsätt som täcker dina kunder, och släng resten.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Ta till slut med dig det här innan du bestämmer dig:
            </p>

            <div className="space-y-2 mb-8">
              {[
                "☐ Jag vet vilka betalsätt mina kunder faktiskt förväntar sig",
                "☐ Jag känner till både fast och rörlig avgift för varje betalsätt",
                "☐ Jag har räknat på avgiften mot mitt eget snittordervärde",
                "☐ Kassan är testad och känns enkel på mobilen",
                "☐ Jag vet hur lång tid det tar innan pengarna betalas ut",
                "☐ Jag erbjuder tillräckligt många alternativ, men inte fler än så",
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
                { title: "Vad kostar en webbutik 2026?", href: "/blogg/vad-kostar-webbutik" },
                { title: "Starta e-handel: komplett guide", href: "/blogg/e-handel-guide" },
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
              <h3 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mb-3">
                Osäker på vilka betalsätt du behöver?
              </h3>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                Vi hjälper dig sätta upp rätt mix för din marginal och dina kunder. Boka en kostnadsfri genomgång.
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
