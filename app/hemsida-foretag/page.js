import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/ui";
import { packages, websiteTerms } from "@/lib/pricing-packages";
import InquiryForm from "@/components/InquiryForm";
import { ArrowRight, Check } from "lucide-react";

// Landningssida for "hemsida foretag" (590 sok/man, KD 19).
// Byggd som konverteringssida: pris direkt, bevis, process, FAQ.
// Anvands aven som landningssida for Google Ads-kampanjen HEMSIDA.

const URL = "https://www.stoltmarketing.se/hemsida-foretag";

export const metadata = {
  title: "Hemsida för företag | 0 kr start, från 1 190 kr per månad",
  description:
    "Hemsida för företag utan startavgift: design, bygge, drift och ändringar från 1 190 kr/mån. Byggd för att synas på Google och göra besökare till kunder. Se ett klickbart förslag innan du bestämmer dig.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Hemsida för företag | 0 kr start, från 1 190 kr per månad",
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

const paket = packages.map((item) => ({ namn: item.name, pris: `${item.monthly.toLocaleString("sv-SE")} kr/mån`, start: "0 kr start, exklusive moms", rader: item.features }));

const faqs = [
  {
    q: "Vad kostar en hemsida för företag?",
    a: "Hos mig 0 kr i startavgift och från 1 190 kr i månaden exklusive moms, där design, bygge, drift, säkerhet och löpande ändringar ingår. Webbshop läggs till på valfritt paket för 800 kr/mån. Bindningstiden är 12 månader, därefter månadsvis. Bas omfattar upp till fem sidor.",
  },
  {
    q: "Varför månadspris i stället för engångspris?",
    a: "För att en hemsida inte är klar vid lansering. Den behöver drift, säkerhet och uppdateringar för att fortsätta leverera. Med månadspriset slipper du stor startinvestering, timfakturor för varje ändring, och oklar ansvarsfördelning efter leverans. Jag tjänar på att din sajt fortsätter fungera.",
  },
  {
    q: "Hur lång tid tar det innan sajten är klar?",
    a: "En vanlig företagssajt är normalt live inom två veckor efter ditt ja. E-handel och större byggen tar 1 till 2 månader. Ett gratis förslag du kan klicka runt i får du inom 2 arbetsdagar, så du ser hemsidan innan du bestämmer dig.",
  },
  {
    q: "Syns hemsidan på Google?",
    a: "Grunderna ingår alltid: rätt teknik, snabb laddning, korrekta titlar och begriplig struktur. Vill du aktivt klättra på konkurrensutsatta sökord ingår löpande sökmotoroptimering i Spets för 2 990 kr/mån.",
  },
  {
    q: "Vem äger hemsidan och domänen?",
    a: "Du äger din domän och ditt innehåll, alltid. Väljer du att avsluta efter bindningstiden hjälper jag till med flytten. Ägande och överlämning framgår av avtalet.",
  },
  {
    q: "Kan du göra om min befintliga hemsida i stället?",
    a: "Ja. Har du en befintlig WordPress-sajt börjar jag med att kontrollera teknik och omfattning. Avgränsad migrering kostar 0 kr när du samtidigt tecknar drift. Nya funktioner och större ombyggnad specificeras separat före start.",
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
    "Hemsida för företag som abonnemang: design, bygge, drift och löpande ändringar från 1 190 kr per månad exklusive moms utan startavgift. Bas omfattar upp till fem sidor, med 12 månaders bindning och därefter månadsvis.",
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
    name: "Bas, upp till fem sidor",
    description: "0 kr start. 1 190 kr/mån exkl moms. 12 månader, därefter månadsvis.",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

        <PageHero
          cta={{ href: "#forslag", label: "Be om gratis designförslag" }}
          highlight="Hemsida för företag"
          breadcrumbs={[{ label: "Start", href: "/" }, { label: "Hemsida för företag" }]}
          badge="Hemsida för företag"
          title="Hemsida för företag som gör nästa steg tydligt"
          subtitle="Design, bygge, drift och innehållsändringar från 1 190 kr/mån exkl moms. 0 kr i startavgift. Du får ett gratis förslag med startsida och en tjänstesida innan du bestämmer dig."
          bullets={["Gratis designförslag inom 2 arbetsdagar", "12 månader, sedan månadsvis", "Du äger domän och innehåll"]}
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
                  <a href="#forslag" className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-600 text-primary">
                    Få gratis förslag <ArrowRight size={15} />
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
          <div className="article-body mx-auto">

            <H2>Därför räcker det inte med en snygg sajt</H2>
            <P>
              Kunden behöver förstå vad du hjälper till med, var du arbetar och hur det går till att anlita dig. En liten verksamhet kan få en tydlig sajt med fem sidor. Har du flera tjänster behövs ofta egna sidor för att kunna förklara dem ordentligt. Antalet sidor är inget mål i sig; varje sida ska svara på en verklig kundfråga.
            </P>
            <P>
              Väl framme ska besökaren konvertera. Det betyder pris eller prisidé synlig,
              telefonnummer som går att klicka på i mobilen, formulär utan onödiga fält och
              bevis i form av riktiga kundcase. Jag går igenom dessa vägar på både mobil och dator innan lansering.
            </P>

            <H2>Så går det till</H2>
            <P>
              Du skickar din webbadress eller ditt företagsnamn. Inom två arbetsdagar får du ett
              förslag du kan klicka runt i: startsida och en tjänstesida med texter om ditt
              företag, kostnadsfritt och utan förpliktelse. Säger du ja bygger jag resten av
              sajten, fyller den med innehåll och optimerar tekniken. Vi planerar lanseringen
              på din domän, normalt inom två veckor efter ditt ja, och därefter ingår drift, säkerhet och
              ändringar i månadspriset. Du mejlar en ändring, jag gör den. Om en ändring går utanför den avtalade sajten får du priset först.
            </P>

            <H2>Vad som ingår, på riktigt</H2>
            <P>
              Design och innehåll anpassade efter valt paket. Texter skrivna för både
              kunder och sök. Teknik som testas även i mobilen. Formulär med skydd mot skräppost. Statistik så att du
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

        <section id="forslag" className="px-5 sm:px-8 py-14 scroll-mt-24"><div className="max-w-3xl mx-auto bg-surface border border-primary/40 rounded-xl p-5 sm:p-8"><h2 className="text-[32px] leading-tight mb-4">Se hur din nya hemsida kan se ut</h2><p className="mb-6">{websiteTerms.proposal} Skriv din webbadress eller ditt företagsnamn och vad du vill förbättra. Ingen beställning eller bindning uppstår genom formuläret.</p><InquiryForm service="Gratis designförslag" initialMessage="Jag vill se ett gratis designförslag. Mitt företag eller min webbadress: " submitLabel="Be om gratis designförslag" eventName="lead-designforslag" /></div></section>
      </main><Footer />
    </>
  );
}
