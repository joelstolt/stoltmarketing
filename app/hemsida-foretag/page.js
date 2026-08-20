import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/ui";
import { ArrowRight, Check } from "lucide-react";

// Landningssida for "hemsida foretag" (590 sok/man, KD 19).
// Byggd som konverteringssida: pris direkt, bevis, process, FAQ.
// Anvands aven som landningssida for Google Ads-kampanjen HEMSIDA.

const URL = "https://www.stoltmarketing.se/hemsida-foretag";

export const metadata = {
  title: "Hemsida för företag | 0 kr start, 1 190 kr per månad",
  description:
    "Hemsida för företag utan startavgift: design, bygge, drift och ändringar för 1 190 kr/mån. Byggd för att synas på Google och göra besökare till kunder. Se skiss innan du bestämmer dig.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Hemsida för företag | 0 kr start, 1 190 kr per månad",
    description:
      "Design, bygge, drift och ändringar i ett månadspris. Byggd för att synas på Google.",
    url: URL,
    type: "website",
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

const paket = [
  {
    namn: "Bas",
    pris: "1 190 kr/mån",
    start: "0 kr i startavgift",
    rader: [
      "Hemsida med upp till fem sidor",
      "Texter och struktur byggda för sök",
      "Drift, säkerhet och backup",
      "Löpande innehållsändringar",
      "Klar på 1 till 2 veckor",
    ],
  },
  {
    namn: "Bredd",
    pris: "1 990 kr/mån",
    start: "0 kr i startavgift",
    rader: [
      "Allt i Bas",
      "Upp till tolv sidor, en per tjänst",
      "Design från vitt papper, ingen mall",
      "Sökord för din ort och kommunerna runt om",
      "SEO-rapport varje månad",
    ],
  },
  {
    namn: "Spets",
    pris: "2 990 kr/mån",
    start: "0 kr i startavgift",
    rader: [
      "Allt i Bredd",
      "AI-assistent som svarar dygnet runt",
      "Google Ads-hantering",
      "Nya sökmotortexter varje månad",
      "Egen landningssida för varje ort",
    ],
  },
];

const faqs = [
  {
    q: "Vad kostar en hemsida för företag?",
    a: "Hos mig 0 kr i startavgift och 1 190 kr i månaden, där design, bygge, drift, säkerhet och löpande ändringar ingår. Webbshop läggs till på valfritt paket för 800 kr/mån. Bindningstiden är 12 månader, därefter månadsvis. Marknadens engångsprojekt kostar i jämförelse oftast 30 000 till 100 000 kr plus löpande drift.",
  },
  {
    q: "Varför månadspris i stället för engångspris?",
    a: "För att en hemsida inte är klar vid lansering. Den behöver drift, säkerhet och uppdateringar för att fortsätta leverera. Med månadspriset slipper du stor startinvestering, timfakturor för varje ändring, och en leverantör som försvinner efter leverans. Jag tjänar på att din sajt fortsätter fungera.",
  },
  {
    q: "Hur lång tid tar det innan sajten är klar?",
    a: "En vanlig företagssajt lanseras 1 till 2 veckor efter startgenomgången. E-handel och större byggen tar 1 till 2 månader. Ett gratis designförslag för din webb får du inom 2 arbetsdagar, så du ser riktningen innan du bestämmer dig.",
  },
  {
    q: "Syns hemsidan på Google?",
    a: "Grunderna ingår alltid: rätt teknik, snabb laddning, korrekta titlar och en struktur som går att ranka med. Vill du aktivt klättra på konkurrensutsatta sökord ingår löpande sökmotoroptimering i Spets för 2 990 kr/mån.",
  },
  {
    q: "Vem äger hemsidan och domänen?",
    a: "Du äger din domän och ditt innehåll, alltid. Väljer du att avsluta efter bindningstiden hjälper jag till med flytten. Inga inlåsningar och inga gisslansituationer, det står i avtalet.",
  },
  {
    q: "Kan du göra om min befintliga hemsida i stället?",
    a: "Ja. Har du en trött WordPress-sajt flyttar och moderniserar jag den utan kostnad när du samtidigt tecknar drift. Ofta återanvänder vi det innehåll som fungerar och bygger om resten.",
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
    { "@type": "ListItem", position: 2, name: "Hemsida för företag", item: URL },
  ],
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hemsida för företag",
  serviceType: "Webbutveckling",
  description:
    "Hemsida för företag som abonnemang: design, bygge, drift och löpande ändringar för 1 190 kr per månad utan startavgift.",
  url: URL,
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://www.stoltmarketing.se/#organization",
    name: "Stolt Marketing",
    url: "https://www.stoltmarketing.se",
  },
  areaServed: [{ "@type": "Country", name: "Sverige" }],
  offers: {
    "@type": "Offer",
    price: "1190",
    priceCurrency: "SEK",
    description: "0 kr i startavgift, 1 190 kr per månad.",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        <PageHero
          breadcrumbs={[{ label: "Start", href: "/" }, { label: "Hemsida för företag" }]}
          badge="Hemsida för företag"
          title="En hemsida som ger dig kunder. 0 kr i start, 1 190 kr i månaden."
          subtitle="Design, bygge, drift och löpande ändringar i ett pris. Byggd för att synas på Google och göra besökare till förfrågningar, inte bara för att se bra ut."
          bullets={["Gratis designförslag inom 2 arbetsdagar", "Klar på 1 till 2 veckor", "Du äger domän och innehåll"]}
        />

        <section className="py-14 sm:py-20 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-5">
              {paket.map((p) => (
                <div key={p.namn} className="bg-surface rounded-[10px] border border-border p-7 flex flex-col">
                  <div className="font-heading font-700 text-[18px] text-heading">{p.namn}</div>
                  <div className="mt-2 font-heading font-700 text-[26px] text-primary">{p.pris}</div>
                  <div className="text-[13px] text-body mt-1">{p.start}</div>
                  <div className="mt-5 flex flex-col gap-2.5">
                    {p.rader.map((r) => (
                      <div key={r} className="flex gap-2.5 items-start">
                        <Check size={16} className="text-primary mt-[3px] flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-[14px] text-body leading-relaxed">{r}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/boka" className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-600 text-primary">
                    Boka genomgång <ArrowRight size={15} />
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13px] text-body text-center">
              12 månaders bindning, därefter månadsvis. Inga startavgifter, inga timfakturor för småändringar.
            </p>
          </div>
        </section>

        <article className="py-4 sm:py-8 px-5 sm:px-8">
          <div className="max-w-[760px] mx-auto">

            <H2>Därför räcker det inte med en snygg sajt</H2>
            <P>
              De flesta företagshemsidor är digitala visitkort: snygga, stumma och osynliga.
              När jag mätte lokala tjänsteföretag var sajter med färre än 50 sidor i praktiken
              osynliga i sök, medan de bredaste drog tolv gånger mer trafik än de smalaste.
              Därför bygger jag inte bara en startsida och fem undersidor, jag bygger den
              struktur av tjänste- och innehållssidor som gör att kunder faktiskt hittar dig.
            </P>
            <P>
              Väl framme ska besökaren konvertera. Det betyder pris eller prisidé synlig,
              telefonnummer som går att klicka på i mobilen, formulär utan onödiga fält och
              bevis i form av riktiga kundcase. Det låter självklart. Det är det inte:
              hälften av alla sajter jag granskar saknar minst två av delarna.
            </P>

            <H2>Så går det till</H2>
            <P>
              Först en genomgång på en halvtimme om mål, kunder och innehåll. Sedan får du en
              skiss på startsidan och ett fast pris, kostnadsfritt och utan förpliktelse. Säger
              du ja bygger jag sajten, fyller den med innehåll och optimerar tekniken. Vi
              lanserar utan avbrott på din domän, och därefter ingår drift, säkerhet och
              ändringar i månadspriset. Du mejlar en ändring, jag gör den. Inga tickets, inga
              timfakturor.
            </P>

            <H2>Vad som ingår, på riktigt</H2>
            <P>
              Skräddarsydd design i stället för igenkännbar mall. Texter skrivna för både
              kunder och sök. Teknik som laddar snabbt även i mobilen, vilket Google numera
              kräver för bra positioner. Formulär med skydd mot skräppost. Statistik så att du
              ser vad besökarna gör. Och löpande: uppdateringar, säkerhet, backup och de där
              småändringarna som annars aldrig blir gjorda. Hela listan gås igenom i förslaget,
              och vill du jämföra marknaden först finns{" "}
              <a href="/vad-kostar-en-hemsida" className="text-primary font-600 hover:underline">prisguiden för hemsidor</a>.
            </P>

            <H2>Vanliga frågor</H2>
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
              Se hur din nya hemsida skulle se ut.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri genomgång så får du en skiss och ett fast pris inom några dagar.
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
