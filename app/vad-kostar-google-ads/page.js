import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/ui";
import { ArrowRight } from "lucide-react";

// Prissida for "vad kostar google ads". Unikt innehall: egna uppmatta
// klickpriser fran DataForSEO (aug 2026) i stallet for atervunna USA-siffror.

const URL = "https://www.stoltmarketing.se/vad-kostar-google-ads";

export const metadata = {
  title: "Vad kostar Google Ads 2026? Klickpriser och budgetguide",
  description:
    "Vad kostar Google Ads 2026? Uppmätta svenska klickpriser från 48 till över 500 kr, rimlig startbudget 3 000 till 6 000 kr/mån, och kalkylen som avgör om annonseringen går ihop.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Vad kostar Google Ads 2026? Klickpriser och budgetguide",
    description:
      "Uppmätta svenska klickpriser och kalkylen som avgör om Google Ads går ihop för ditt företag.",
    url: URL,
    type: "article",
    locale: "sv_SE",
    siteName: "Stolt Marketing",
  },
};

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

const cpcRows = [
  ["vad kostar en hemsida", "48 kr"],
  ["webbdesign", "59 kr"],
  ["facebook annonsering", "97 kr"],
  ["hemsida företag", "142 kr"],
  ["marknadsföringsbyrå", "168 kr"],
  ["seo byrå", "283 kr"],
  ["google ads byrå", "452 kr"],
  ["sökmotoroptimering", "502 kr"],
];

const faqs = [
  {
    q: "Vad kostar ett klick på Google Ads i Sverige?",
    a: "Allt från under 10 kr till över 500 kr beroende på sökord. Lokala tjänsteord ligger ofta på 20 till 100 kr, medan konkurrensutsatta B2B-ord kan kosta flera hundra kronor per klick. Priset sätts i auktion per sökning, inte i en prislista.",
  },
  {
    q: "Vilken månadsbudget behöver jag för Google Ads?",
    a: "För ett lokalt tjänsteföretag är 3 000 till 6 000 kr i månaden en rimlig start. Det viktiga är att budgeten räcker till tillräckligt många klick för att ge data, minst ett femtiotal i månaden, annars går kampanjen inte att utvärdera.",
  },
  {
    q: "Vad kostar det att låta någon sköta annonseringen?",
    a: "Byråer tar oftast 3 000 till 15 000 kr i månaden eller 10 till 20 procent av mediabudgeten. Hos mig ingår Google Ads-hanteringen i Tillväxt för 2 490 kr i månaden, utan procentpåslag på din annonsbudget.",
  },
  {
    q: "Varför får jag klick men inga kunder?",
    a: "Nästan alltid någon av tre orsaker: fel sökord som drar nyfikna i stället för köpare, annonser som leder till startsidan i stället för en riktig landningssida, eller mätning som saknas så att kampanjen optimerar mot fel sak. Alla tre går att åtgärda.",
  },
  {
    q: "Är Google Ads värt det för små företag?",
    a: "Ja, om kalkylen går ihop: klickpris gånger antal klick per kund måste vara klart lägre än vad kunden är värd. För tjänster med ordervärden i tusenlappar fungerar det oftast utmärkt. För låga ordervärden i dyra auktioner gör det inte det, och då är det bättre att veta innan.",
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

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Vad kostar Google Ads?", item: URL },
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        <PageHero
          breadcrumbs={[{ label: "Start", href: "/" }, { label: "Vad kostar Google Ads?" }]}
          badge="Prisguide 2026"
          title="Vad kostar Google Ads 2026?"
          subtitle="Uppmätta svenska klickpriser, rimliga startbudgetar och kalkylen som avgör om annonseringen går ihop innan du spenderar en krona."
          bullets={["Riktiga klickpriser", "Budget som räcker", "Kalkylen baklänges"]}
        />

        <article className="py-14 sm:py-20 px-5 sm:px-8">
          <div className="max-w-[760px] mx-auto">

            <H2>Två kostnader, inte en</H2>
            <P>
              Google Ads kostar två saker: annonsbudgeten som går till Google när någon klickar,
              och arbetet med att sköta kampanjerna. Budgeten bestämmer du själv och den har inget
              golv från Googles sida. Hanteringen kostar 3 000 till 15 000 kr i månaden hos byrå,
              eller ingår hos mig i Tillväxt för 2 490 kr i månaden utan procent på mediabudgeten.
            </P>

            <H2>Så mycket kostar ett klick: uppmätta svenska priser</H2>
            <P>
              Klickpriset sätts i auktion för varje enskild sökning, så alla generella siffror
              ljuger lite. Här är i stället faktiskt uppmätta genomsnittliga klickpriser i
              Sverige, hämtade ur annonsdata i augusti 2026:
            </P>

            <div className="overflow-x-auto mb-6 border border-border rounded-[10px]">
              <table className="w-full text-[14px] sm:text-[15px]" style={{ minWidth: 420 }}>
                <thead>
                  <tr className="bg-surface-muted">
                    <th className="text-left font-heading font-700 text-heading p-4">Sökord</th>
                    <th className="text-left font-heading font-700 text-heading p-4">Genomsnittligt klickpris</th>
                  </tr>
                </thead>
                <tbody>
                  {cpcRows.map((r, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-4 text-body">{r[0]}</td>
                      <td className="p-4 font-600 text-heading whitespace-nowrap">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <P>
              Mönstret är typiskt: informationsfrågor är billiga, tjänsteord i mitten, och ord
              där byråer själva slåss om kunderna dyrast. Lokala hantverks- och tjänsteord
              ligger oftast mellan 20 och 100 kr per klick, vilket är där de flesta små företag
              faktiskt annonserar.
            </P>

            <H2>Kalkylen som avgör allt: räkna baklänges</H2>
            <P>
              Innan du sätter en budget, räkna baklänges från affären. Vad är en ny kund värd?
              Hur stor andel av besökarna på din sida blir förfrågningar, 2 till 5 procent är
              normalt? Och hur många förfrågningar blir affär? Då vet du vad ett klick får kosta.
            </P>
            <P>
              Exempel: en kund är värd 15 000 kr, var tredje förfrågan blir affär och 4 procent
              av klicken blir förfrågningar. Då genererar 100 klick 4 förfrågningar och drygt en
              affär. Får kundanskaffningen kosta en tredjedel av kundvärdet, 5 000 kr, får
              klicket kosta högst 50 kr. Nu vet du exakt vilka sökord i tabellen ovan du har råd
              med, och vilka som aldrig kan gå ihop hur bra annonsen än är.
            </P>

            <H2>Rimliga budgetar per situation</H2>
            <P>
              Testbudget för ett lokalt tjänsteföretag: 3 000 till 6 000 kr i månaden i sex
              veckor, tillräckligt för att bevisa eller avfärda kanalen. Etablerad annonsering
              med bevisad lönsamhet: skala så länge kostnaden per affär håller, taket sätts av
              marknaden, inte av tumregler. Under 2 000 kr i månaden: oftast för lite data för
              att någon ska kunna optimera något alls, då är pengarna bättre i SEO.
            </P>

            <H2>Det som avgör priset mer än budet</H2>
            <P>
              Google rabatterar relevans. En annons som exakt matchar sökningen, leder till en
              landningssida som håller vad den lovar och får bra klickfrekvens betalar mindre
              per klick än en slarvig konkurrent med högre bud. Därför är den billigaste
              optimeringen sällan att höja budet, utan att skärpa sökord, annons och
              landningssida tills de hänger ihop. Och mätningen: utan konverteringsspårning
              optimerar systemet mot klick i stället för kunder, vilket är att betala fullpris
              för fel vara.
            </P>

            <H2>Vanliga frågor om Google Ads-kostnader</H2>
            <div className="flex flex-col gap-6 mb-4">
              {faqs.map((f, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="font-heading font-700 text-[16px] sm:text-[17px] text-heading">{f.q}</h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-body">{f.a}</p>
                </div>
              ))}
            </div>

            <P>
              Vill du se hur annonsering och organiskt hänger ihop, läs{" "}
              <a href="/tjanster/google-ads" className="text-primary font-600 hover:underline">om min Google Ads-tjänst</a>{" "}
              eller <a href="/sokmotoroptimering" className="text-primary font-600 hover:underline">guiden om sökmotoroptimering</a>.
            </P>

          </div>
        </article>

        <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
          <div className="relative z-10 max-w-[600px] mx-auto text-center">
            <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">
              Vill du veta om Google Ads går ihop för dig?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en genomgång så gör vi kalkylen baklänges på din affär innan en krona spenderas.
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
