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
                <span className="text-heading font-500">Välja domännamn</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Guide
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Välja domännamn till företaget: komplett guide och vanliga misstag
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 22 augusti 2026
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
              Du startar ett företag, allt ska gå fort, och domänen blir något du väljer på fem minuter mellan Bolagsverket och första fakturan. Sen sitter du med den i tio år. Domännamnet är ett av få digitala beslut du sällan ändrar: byter du det senare får du börja om med SEO, trycksaker, mejladresser och allt folk redan lärt sig känna igen.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Efter 150+ webbprojekt har jag sett samma domänmisstag om och om igen. Namn ingen kan stava till i telefon, bindestreck som försvinner när någon skriver av dem, eller en .com som redan var tagen så företaget fastnade med en krånglig variant. Den här guiden går igenom hur du väljer rätt från början, och vad du bör undvika.
            </p>

            {/* Section: Varför domänvalet är viktigt */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Varför domänvalet är viktigare än du tror
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Tänk på hur ofta domänen dyker upp. Den står på visitkortet, i mejladressen, i Google-annonsen, på bilen och i varje offert du skickar. Den är oftast det allra första en möjlig kund ser av ditt företag, långt innan de läst en enda rad om vad du faktiskt gör.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Den blir också din e-postadress. Skillnaden mellan kontakt@dittforetag.se och dittforetag@gmail.com är större än den låter: den ena ser ut som ett företag, den andra som en hobby. Många kunder gör den bedömningen omedvetet på under en sekund.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Och till skillnad från nästan allt annat digitalt är domänen jobbig att byta. Ändrar du den senare får du göra om SEO:n från noll, sätta upp vidarebefordringar från den gamla adressen, trycka nya visitkort och lära om alla som redan känner igen dig. Väljer du rätt en gång slipper du allt det.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Den mest underskattade anledningen: mejlen</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    E-posten följer domänen. Bygger du upp en adress som alla dina kunder och leverantörer sparar, och sen byter domän, tvingas du flytta hela din kontaktvärld. Välj alltså en domän du är bekväm att ha som at-adress om fem år, inte bara en du gillar idag.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: .se eller .com */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              .se eller .com (eller båda)?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              För ett svenskt företag som säljer till svenska kunder är .se nästan alltid rätt förstahandsval. Den signalerar att du finns här, lyder under svensk lag och känns trygg för en svensk köpare. Google har inget emot .se för sökningar i Sverige, tvärtom hjälper det tydligheten.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Regeln jag brukar ge: sikta på .se, men köp .com också om den är ledig och rimligt prissatt. Då skyddar du namnet, fångar upp folk som skriver fel, och håller dörren öppen om du en dag växer utanför Sverige. Peka helt enkelt den ena adressen till den andra så landar alla rätt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Välj .se när</p>
                <div className="space-y-2">
                  {[
                    "Du säljer främst i Sverige",
                    "Du driver en lokal tjänst eller butik",
                    "Du vill signalera att du är svensk",
                    "Du vill ranka lokalt på Google",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Överväg .com när</p>
                <div className="space-y-2">
                  {[
                    "Du har internationella planer",
                    "Du har kunder i flera länder",
                    "Varumärket ska funka globalt",
                    ".se-varianten redan är tagen",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Nya ändelser som .nu, .shop eller .ai kan funka, men var försiktig. En okänd ändelse skapar tvekan (är det verkligen rätt adress?) och en del skriver reflexmässigt .se eller .com ändå och hamnar hos någon annan. Landar du i en udda ändelse, försök äga .se eller .com också och peka dem hem.
            </p>

            {/* Section: Kort vs beskrivande */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Kort och varumärkbart eller beskrivande med sökord?
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Här går åsikterna isär, så låt mig vara rak. Förr gav ett domännamn med sökord i (typ billig-elektriker-malmo.se) en liten SEO-fördel. Idag väger Google det nästan ingenting, och du sitter kvar med ett namn som är svårt att bygga ett varumärke kring.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-6">
              Ett kort, varumärkbart namn är mer flexibelt. Det växer med dig om du breddar tjänsterna, det går att säga snabbt, och det blir ditt, inte en generisk beskrivning vem som helst kan kopiera. Ett beskrivande namn kan ändå funka för en renodlad lokal tjänst, där tydlighet slår det mesta. Ta en titt på skillnaden:
            </p>

            <div className="space-y-3 mb-8">
              {[
                { label: "nordbygg.se", text: "Kort, eget, lätt att minnas" },
                { label: "billiga-byggtjanster-i-skane.se", text: "Sökord, men klumpigt att äga" },
                { label: "nb-bygg.se", text: "Kort men oklart, förkortningar förvirrar" },
                { label: "nordbyggskane.se", text: "Rimlig medelväg: namn plus ort" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center gap-4 py-2 border-b border-border-light">
                  <span className="text-[15px] font-600 text-heading">{row.label}</span>
                  <span className="text-[14px] text-body text-right">{row.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Min tumregel: välj namnet du skulle vara stolt att säga i en telefon om tre år. Tvekar du för att det låter billigt eller krångligt, välj om. Ett namn du gömmer bygger inget varumärke.
            </p>

            {/* Section: Reglerna */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Reglerna: lätt att stava och säga i telefon
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det bästa testet på ett domännamn är gammalt och gratis: säg det högt i telefon och be någon skriva ner det. Stavar de rätt på första försöket är namnet bra. Måste du säga med bindestreck och två s har du redan förlorat.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-8">
              <p className="text-[15px] font-700 text-heading mb-3">Regler som gör namnet lätt att sprida:</p>
              <div className="space-y-2">
                {[
                  "Lätt att stava, även för den som hör det första gången",
                  "Lätt att säga högt utan att behöva bokstavera",
                  "Inga bindestreck om du kan undvika det, de tappas bort när folk skriver av",
                  "Undvik siffror: är det 4 eller fyra? Ingen vet i förväg",
                  "Se upp med dubbla bokstäver där ord möts (webb plus byrå blir tre b)",
                  "Undvik å, ä och ö i domänen, de krånglar till både mejl och länkar",
                  "Kort slår långt: färre tecken betyder färre fel",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Kolla att namnet är ledigt */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Kolla att namnet är ledigt överallt
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Innan du fastnar för ett namn, kolla att du faktiskt kan använda det hela vägen. En ledig domän hjälper inte om varumärket redan är taget eller om handtaget på Instagram är upptaget. Gå igenom de här fyra sakerna i tur och ordning:
            </p>

            <div className="space-y-4 mb-8">
              {[
                { n: "1", title: "Domänen", desc: "Sök på namnet hos en registrar, till exempel Loopia eller one.com. Kolla både .se och .com samtidigt, inte bara den du helst vill ha." },
                { n: "2", title: "Sociala medier", desc: "Kontrollera att handtaget är ledigt på de kanaler du faktiskt ska använda. Samma namn överallt gör dig mycket lättare att hitta och känna igen." },
                { n: "3", title: "Varumärke och bolagsnamn", desc: "Sök i PRV:s varumärkesregister och hos Bolagsverket. Ett namn som krockar med ett registrerat varumärke kan tvinga dig att byta senare, i värsta fall efter en tvist." },
                { n: "4", title: "Googla namnet", desc: "Sök på namnet som det låter. Finns det redan ett känt företag, en negativ association eller en dubbeltydig betydelse? Bättre att veta det nu än efter lanseringen." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 bg-surface border border-border rounded-xl p-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light text-primary font-700 text-[15px] flex items-center justify-center">{step.n}</span>
                  <div>
                    <p className="text-[15px] font-700 text-heading mb-1">{step.title}</p>
                    <p className="text-[14px] text-body leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section: Säkra ditt namn */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Säkra ditt namn: äg det, skydda det, glöm inte förnya
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              När du hittat namnet, säkra det ordentligt. Det här är billigt att göra rätt och dyrt att göra fel.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-8">
              <p className="text-[15px] font-700 text-heading mb-3">Så säkrar du namnet:</p>
              <div className="space-y-2">
                {[
                  "Köp både .se och .com om båda finns, och peka den ena till den andra",
                  "Köp de mest uppenbara felstavningarna om de är billiga",
                  "Slå på automatisk förnyelse: en glömd förnyelse kan låta någon annan snappa upp domänen",
                  "Registrera domänen i företagets namn, med din egen mejl som ägarkontakt",
                  "Spara inloggningen till domänkontot där du hittar den även om tre år",
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
                  <p className="text-[15px] font-700 text-heading mb-1">Äg din domän själv</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Ett av de vanligaste och otäckaste misstagen är att en byrå eller en tidigare webbkontakt registrerar domänen i sitt eget konto. Då äger de i praktiken din adress, och du är beroende av dem för att flytta eller ändra något. Registrera alltid domänen i ditt företags namn, på ett konto du själv styr. När vi bygger sätter vi upp det så att du står som ägare från dag ett.
                  </p>
                </div>
              </div>
            </div>

            {/* Section: Vanliga misstag */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Vanliga misstag och en snabb checklista
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Till sist, felen jag ser om och om igen, samlade sida vid sida med det du hellre ska göra.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Gör</p>
                <div className="space-y-2">
                  {[
                    "Välj ett namn du kan säga i telefon",
                    "Sikta på .se, komplettera med .com",
                    "Håll det kort och varumärkbart",
                    "Äg registreringen själv",
                    "Kolla varumärke innan du trycker",
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
                    "Bindestreck och siffror i namnet",
                    "Sökordsspäckade, klumpiga namn",
                    "Udda ändelser utan .se eller .com i ryggen",
                    "Att låta någon annan äga domänen",
                    "Att glömma bort förnyelsen",
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
              Om du bara tar med dig en sak: domänen är ett långsiktigt beslut, så unna dig en timme extra nu. Här är checklistan att bocka av innan du registrerar.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "☐ Namnet klarar telefontestet (lätt att stava och säga högt)",
                "☐ .se säkrad, och .com om den finns",
                "☐ Kort och varumärkbart, utan bindestreck och siffror",
                "☐ Handtag lediga på de sociala kanaler du ska använda",
                "☐ Kollat mot PRV:s varumärkesregister och Bolagsverket",
                "☐ Automatisk förnyelse påslagen",
                "☐ Domänen registrerad i företagets namn, på ditt eget konto",
                "☐ Felstavningar och varianter uppköpta och pekade rätt",
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
                { title: "Lansera ny hemsida: checklista", href: "/blogg/checklista-ny-hemsida" },
                { title: "Vad kostar en hemsida 2026?", href: "/blogg/vad-kostar-en-hemsida" },
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
                Ska du starta eller byta namn?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Vi hjälper dig välja domän, sätta upp e-post och bygga sajten rätt från början. Boka en kostnadsfri genomgång.
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
