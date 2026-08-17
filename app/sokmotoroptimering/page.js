import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/ui";
import { ArrowRight } from "lucide-react";

// Pillar-guide för "sökmotoroptimering" (1 000 sök/mån, KD 14).
// Serverrenderad med allt innehåll öppet i HTML - inga accordions, ingen
// conditional mount - så att varje stycke är crawlbart för Google och AI.

function H2({ children }) {
  return (
    <h2 className="font-heading font-700 text-[24px] sm:text-[28px] text-heading tracking-[-0.012em] mt-14 mb-4">
      {children}
    </h2>
  );
}

function P({ children }) {
  return <p className="text-[16px] sm:text-[17px] leading-[1.8] text-body mb-5">{children}</p>;
}

function Fakta({ children }) {
  return (
    <div className="my-6 border-l-2 border-primary pl-5 py-1">
      <p className="text-[15px] leading-relaxed text-body">{children}</p>
    </div>
  );
}

const faqs = [
  {
    q: "Vad är sökmotoroptimering enkelt förklarat?",
    a: "Arbetet med att göra din webbplats till det bästa svaret på det dina kunder söker efter, så att Google visar den högre upp. Det består av teknik som gör sajten läsbar, innehåll som besvarar sökningarna och signaler som gör att Google litar på dig.",
  },
  {
    q: "Hur lång tid tar det innan SEO ger resultat?",
    a: "Tekniska fixar kan synas inom veckor. Nya sidor och förbättrade positioner tar oftast tre till sex månader, och full effekt byggs över ett år. Sökmotoroptimering är en investering som ackumulerar, inte en kampanj som stängs av.",
  },
  {
    q: "Vad kostar sökmotoroptimering?",
    a: "Löpande SEO kostar på svenska marknaden oftast 5 000 till 30 000 kr i månaden. Hos mig ingår löpande SEO i Tillväxt för 2 490 kr/mån, och en engångsaudit med prioriterad åtgärdslista kostar 4 900 kr.",
  },
  {
    q: "Kan jag göra SEO själv?",
    a: "Grunderna, absolut: skriv titlar med rätt sökord, skaffa recensioner, bygg sidor för varje tjänst. Det som är svårt att göra själv är prioriteringen, att veta vilka sökord som är värda arbetet, och uthålligheten månad efter månad.",
  },
  {
    q: "Är SEO fortfarande värt det när AI svarar på allt?",
    a: "Ja, mer än förut. AI-svaren hämtar sina källor nästan uteslutande från sidor som redan rankar organiskt i topp tio. Rankar du inte syns du varken i sökresultaten eller i AI-svaren. Samma arbete ger numera två ytor.",
  },
  {
    q: "Vad är skillnaden på SEO och SEM?",
    a: "SEO är det organiska, obetalda synlighetsarbetet. SEM brukar avse betald sökannonsering som Google Ads. De kompletterar varandra: annonser ger trafik i dag, SEO bygger en tillgång som levererar utan klickkostnad.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        <PageHero
          breadcrumbs={[{ label: "Start", href: "/" }, { label: "Sökmotoroptimering" }]}
          badge="Guide 2026"
          title="Sökmotoroptimering: så fungerar SEO 2026."
          subtitle="Allt du behöver veta för att förstå, köpa eller själv börja med sökmotoroptimering. Byggd på uppmätt data från riktiga sökresultat, inte på tyckande."
          bullets={["Vad som avgör ranking", "Vad det kostar", "Konkret startchecklista"]}
        />

        <article className="py-14 sm:py-20 px-5 sm:px-8">
          <div className="max-w-[760px] mx-auto">

            <H2>Vad är sökmotoroptimering?</H2>
            <P>
              Sökmotoroptimering, SEO, är arbetet med att göra din webbplats till det bästa tillgängliga
              svaret på det dina kunder söker efter, så att Google väljer att visa den högt i resultatet.
              Det är ingen trollformel och inget abonnemang på magi. Det är tre saker som samverkar:
              teknik som gör sajten snabb och läsbar, innehåll som faktiskt besvarar sökningarna, och
              signaler utifrån som gör att Google litar på att du är ett rimligt svar.
            </P>
            <P>
              Varför det spelar roll är enkel matematik. Den som söker "rörmokare stockholm" eller
              "bokföringsbyrå malmö" är en kund med plånboken framme. Annonser kan köpa den trafiken
              för 50 till 500 kr per klick. Organiska positioner tar samma trafik utan klickkostnad,
              månad efter månad. SEO är långsammare än annonser men bygger en tillgång i stället för
              en löpande utgift.
            </P>

            <H2>Så avgör Google vem som rankar</H2>
            <P>
              Google rangordnar sidor, inte sajter. För varje sökning bedöms miljontals sidor på i
              grunden tre frågor: Förstår vi vad sidan handlar om? Besvarar den sökningen bättre än
              alternativen? Kan vi lita på avsändaren? Tekniken avgör den första frågan, innehållet
              den andra och auktoriteten den tredje.
            </P>
            <P>
              Det betyder också att du inte rankar "med din hemsida" i största allmänhet. Du rankar
              med en specifik sida för en specifik sökning. Sajter som vinner har en sida för varje
              fråga deras kunder ställer. Sajter som förlorar har en snygg startsida och hoppas på
              det bästa.
            </P>

            <H2>Sidbredd: den mest underskattade faktorn</H2>
            <P>
              När jag mätte de bäst rankade företagen i fem lokala tjänstebranscher var det inte
              länkprofilen som skilde vinnare från förlorare. Sambandet mellan antal tjänstesidor
              och antal sökord en sajt rankade på var mycket starkt, medan sambandet med
              länkstyrka var nära noll inom gruppen.
            </P>
            <Fakta>
              Ur mätningen: de fem bredaste sajterna, med i median 606 sidor, drog tolv gånger mer
              organisk trafik än de fem smalaste med 48 sidor. Under ungefär 50 sidor rankade
              sajterna i praktiken inte alls.
            </Fakta>
            <P>
              Logiken är rak: varje sida är en lott i varje sökning den besvarar. En hantverkare med
              en sida per tjänst och ort kan ranka på hundratals sökningar. Samma hantverkare med
              fem sidor kan ranka på en handfull. Därför börjar seriös sökmotoroptimering nästan
              alltid i en innehållsplan, inte i länkbygge.
            </P>

            <H2>Sökordsanalys: börja i datan, inte i magkänslan</H2>
            <P>
              Innan en enda sida skrivs behöver du veta tre saker om varje sökord: hur många som
              söker det per månad, hur hård konkurrensen är och vad ett klick kostar i annonsering,
              vilket avslöjar hur kommersiellt ordet är. Utan de siffrorna gissar du, och gissningar
              i SEO är dyra eftersom facit kommer först efter månader.
            </P>
            <P>
              Ett vanligt och dyrt misstag är att optimera för ord ingen söker. Jag har sett företag
              bygga tjugotals sidor mot ortsvarianter med tio sökningar i månaden, medan tjänsteord
              med tusentals sökningar och lägre konkurrens stod obevakade. Datan skyddar dig från att
              lägga månader på fel mål.
            </P>

            <H2>On-page: titeln är din viktigaste rad</H2>
            <P>
              Sidtiteln är det starkaste enskilda on-page-elementet. I min mätning av 201 vinnande
              lokala träffar innehöll 93 procent ortsnamnet i titeln, det var den mest konsekventa
              signalen av alla. Mönstret som vinner är enkelt: vad du gör, var du gör det och ett
              löfte, på ungefär 50 tecken.
            </P>
            <P>
              Bara 17 procent av vinnarna angav pris i titeln. Det är en ledig plats: en titel som
              "Flyttfirma Stockholm | Fast pris från 1 600 kr" tar klick från positioner ovanför sig.
              Under titeln gäller klassisk hantverksmässighet: en H1 som matchar sökningen, rubriker
              som delar upp innehållet i frågor, och text som svarar konkret i stället för att
              beskriva företaget i allmänna ordalag.
            </P>

            <H2>Teknisk SEO: golvet allt står på</H2>
            <P>
              Teknisk SEO är sällan det som lyfter en sajt, men alltid det som kan sänka den. Det
              viktigaste i praktiken: sidorna ska ladda snabbt även på mobil, varje sida ska ha en
              korrekt canonical-adress, sitemapen ska vara komplett och ren, och inget viktigt
              innehåll får vara gömt bakom skript som sökmotorer inte kör.
            </P>
            <P>
              Två fel jag ser oftare än alla andra: en canonical-tagg i sajtens grundmall som pekar
              alla sidor mot startsidan, vilket i praktiken raderar hela sajten ur Google, och
              innehåll i flikar eller dragspel som aldrig hamnar i HTML-koden. Båda är osynliga för
              ögat och dödliga för synligheten.
            </P>

            <H2>Lokal SEO: kartrutan är en egen tävling</H2>
            <P>
              För lokala sökningar visar Google kartrutan med tre företag ovanför de vanliga
              träffarna. Den styrs av andra faktorer än organiska resultat: närhet till den som
              söker, rätt kategori i Google Företagsprofil och recensioner. I min mätning syntes
              bara en fjärdedel av kartrutans företag också i organiska topp tio. Det är två
              separata tävlingar som kräver separat arbete.
            </P>
            <Fakta>
              Recensioner fungerar som tröskel, inte som raket. Position ett i kartrutan hade fler
              recensioner än position två och tre i exakt hälften av fallen, slumpen. Men för att
              alls komma in i rutan krävdes i median allt från 8 recensioner för hantverkare till
              107 för flyttfirmor. Betyget låg nästan alltid på 4,8 eller högre.
            </Fakta>
            <P>
              Praktisk slutsats: fyll i företagsprofilen komplett, samla recensioner tills du nått
              din branschtröskel och håll betyget över 4,8. Därefter ger fler recensioner marginell
              effekt på placeringen, och tiden gör mer nytta i innehållsarbetet.
            </P>

            <H2>Länkar: vad de gör och vad de inte gör</H2>
            <P>
              Länkar från andra sajter fungerar som referenser: ju fler oberoende webbplatser som
              pekar på dig, desto rimligare framstår du som svar. Måttet som räknas är refererande
              domäner, alltså antalet unika sajter, inte antalet länkar. Femhundra länkar från samma
              sidfot väger som en referens, inte femhundra.
            </P>
            <P>
              Länkarnas betydelse varierar kraftigt mellan branscher. I lokala tjänstebranscher
              rankade den svagaste vinnaren i min mätning med 42 refererande domäner, där avgör
              sidbredden. I byråbranschen låg fältets median på 245, där är länkarna ett golv man
              måste upp till. Kolla dina faktiska konkurrenters nivå innan du köper en
              länkkampanj någon säger att du behöver.
            </P>

            <H2>Innehållet som faktiskt rankar: prissidor och tjänstesidor</H2>
            <P>
              Två sidtyper dominerar bland vinnarna. Tjänstesidan, en sida per tjänst du säljer,
              på 1 500 till 2 500 ord med tydlig struktur, vanliga frågor och bevis i form av
              kundcase. Och prissidan, som besvarar "vad kostar X" med konkreta spann och exempel.
            </P>
            <P>
              Prissidorna är särskilt värdefulla eftersom de fångar kunder tidigt i köpresan och
              nästan alltid är det som citeras när Google visar AI-svar. Många företag vägrar
              skriva ut priser av rädsla för konkurrenterna. Under tiden tar konkurrenten som
              vågar både träffen, klicket och förtroendet.
            </P>

            <H2>AI-sök: samma grund, dubbel utdelning</H2>
            <P>
              När Google visar en AI-översikt eller när en kund frågar ChatGPT om leverantörer
              hämtas underlaget från vanliga webbsidor. Jag har mätt vilka: i lokala
              tjänstebranscher gick 87 procent av AI-citaten till sajter som redan rankade i
              organiska topp tio på samma fråga, i byråbranschen 72 procent. Det finns alltså
              ingen separat AI-optimering som ersätter SEO, bara SEO som numera betalar sig två
              gånger.
            </P>
            <Fakta>
              Det som skilde citerade sidor från ocitrerade var konkreta prisspann och aktualitet,
              inte tekniska trick. FAQ-schema, som ofta säljs som AI-optimering, förekom inte
              oftare bland de citerade sidorna. Lägg arbetet på innehållet, inte på magin.
            </Fakta>

            <H2>Mätning: sätt nollpunkten innan du börjar</H2>
            <P>
              SEO utan mätning är åsikter. Minimum är Google Search Console, som gratis visar
              vilka sökningar du syns på, var du klickas och vilka sidor som drar. Innan ett
              SEO-arbete startar ska tre tal dokumenteras: antal indexerade sidor, antal sökord
              du rankar på och antal recensioner. Utan nollpunkt går resultat aldrig att bevisa,
              och du blir beroende av leverantörens egen berättelse.
            </P>

            <H2>Hur lång tid tar sökmotoroptimering?</H2>
            <P>
              Tekniska rättningar kan ge effekt inom veckor. Nya sidor börjar oftast röra sig
              efter en till tre månader och sätter sig på sex. Konkurrensutsatta ord tar ett år
              eller mer. Det låter långsamt tills man vänder på det: positionerna du bygger
              fortsätter leverera kunder utan klickkostnad långt efter att arbetet är betalt,
              vilket ingen annonskampanj gör.
            </P>

            <H2>Vad kostar sökmotoroptimering?</H2>
            <P>
              På svenska marknaden kostar löpande SEO i regel 5 000 till 30 000 kr i månaden hos
              byrå, engångsprojekt från 20 000 kr och uppåt, och timpriser 800 till 1 500 kr.
              Hos mig ingår löpande sökmotoroptimering i Tillväxt för 2 490 kr i månaden, och en
              engångsaudit med prioriterad åtgärdslista kostar 4 900 kr. En full genomgång av vad
              du får för pengarna finns i <a href="/vad-kostar-seo" className="text-primary font-600 hover:underline">guiden om vad SEO kostar</a>.
            </P>

            <H2>Vanliga misstag som kostar mest</H2>
            <P>
              Efter att ha granskat många sajter återkommer samma fem fel. Att optimera mot ord
              utan sökvolym. Att lägga budgeten på länkar när sajten saknar sidor att länka till.
              Att gömma innehåll i flikar och skript som aldrig når HTML-koden. Att låta en
              canonical-miss eller kvarglömd noindex radera synligheten i tysthet. Och att byta
              strategi var tredje månad, precis innan den förra hunnit verka.
            </P>

            <H2>Göra själv eller anlita hjälp?</H2>
            <P>
              Gör själv om du har tid och en enkel marknad: skriv titlar med tjänst och ort,
              samla recensioner, bygg en sida per tjänst och skaffa Search Console. Ta hjälp när
              konkurrensen kräver prioritering på riktig data, när tekniken strular eller när
              uthålligheten är problemet. Och oavsett vad: äg alltid din egen domän, sajt och
              data, så att ett leverantörsbyte aldrig kan ta din synlighet som gisslan.
            </P>

            <H2>Checklista: kom igång i dag</H2>
            <div className="mb-5">
              {[
                "Skaffa Google Search Console och läs vilka sökningar du redan syns på.",
                "Dokumentera nollpunkten: indexerade sidor, rankande sökord, recensioner.",
                "Lista dina tjänster och orter. Varje kombination med sökvolym är en sida.",
                "Skriv om varje sidtitel till mönstret tjänst, plats och löfte på 50 tecken.",
                "Fyll i Google Företagsprofil komplett och be dina tio senaste kunder om omdöme.",
                "Bygg en prissida per huvudtjänst med konkreta spann och aktuellt årtal.",
                "Mät om efter 90 dagar mot nollpunkten.",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 py-2 border-b border-border">
                  <span className="font-heading font-700 text-[14px] text-primary pt-[2px]">{i + 1}.</span>
                  <p className="text-[15px] sm:text-[16px] leading-relaxed text-body">{item}</p>
                </div>
              ))}
            </div>

            <H2>Vanliga frågor om sökmotoroptimering</H2>
            <div className="flex flex-col gap-6 mb-4">
              {faqs.map((f, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="font-heading font-700 text-[16px] sm:text-[17px] text-heading">{f.q}</h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-body">{f.a}</p>
                </div>
              ))}
            </div>

          </div>
        </article>

        <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
          <div className="relative z-10 max-w-[600px] mx-auto text-center">
            <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">
              Vill du veta var din sajt står?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Jag gör en nollmätning av din synlighet och visar var de största möjligheterna finns.
              Läs mer om <a href="/tjanster/seo" className="font-600 underline">min SEO-tjänst</a> eller boka direkt.
            </p>
            <a href="/boka" className="premium-btn mt-8 mx-auto">
              <span>Boka kostnadsfri genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
