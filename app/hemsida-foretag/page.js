import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/ui";
import InquiryForm from "@/components/InquiryForm";
import { ArrowRight, Check } from "lucide-react";
import { DEMO_FRAGA, DEMO_KORT, DEMO_MENING } from "@/lib/usp";

// Landningssida for "hemsida foretag" (590 sok/man, KD 19).
// Byggd som konverteringssida: pris direkt, bevis, process, FAQ.
// Anvands aven som landningssida for Google Ads-kampanjen HEMSIDA.

const URL = "https://www.stoltmarketing.se/hemsida-foretag";

export const metadata = {
  title: "Hemsida för företag | Fast pris innan jag börjar",
  description:
    "Hemsida för företag: design, bygge, drift och ändringar. Klickbar demo efter första samtalet, helt riskfritt, och fast pris skriftligt innan jag börjar.",
  alternates: { canonical: URL },
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing: utvecklaren ni inte har" }], 
    title: "Hemsida för företag | Fast pris innan jag börjar",
    description:
      "Design, bygge, drift och ändringar med fast pris i förväg. Byggd för att synas på Google.",
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

const upplagg = [
  { namn: "Hemsida", pris: "Fast pris innan jag börjar", start: "Skriftligt, exklusive moms", rader: ["Design och bygge efter vad ni behöver", "Texter skrivna för både kunder och sök", "Teknik som testas även i mobilen", "Formulär med skydd mot skräppost"] },
  { namn: "Webbshop", pris: "Fast pris innan jag börjar", start: "Skriftligt, exklusive moms", rader: ["Produktsidor och kassa", "Betalning och frakt efter era behov", "Koppling till lager eller ekonomi vid behov", "Omfattningen avgränsas före start"] },
  { namn: "Löpande hjälp", pris: "Fast månadspris i förväg", start: "Ni vet kostnaden varje månad", rader: ["Drift, säkerhet och backup", "Ändringar och uppdateringar", "Svar nästa arbetsdag", "Jag kan ta över sajter jag inte byggt"] },
];

const faqs = [
  {
    q: "Vad kostar en hemsida för företag?",
    a: "Det beror på omfattningen. Första samtalet kostar ingenting, och därefter får ni ett fast pris skriftligt innan jag börjar. Vill ni ha löpande hjälp efter lansering har den ett fast månadspris som ni vet i förväg. Alla priser anges exklusive moms.",
  },
  DEMO_FRAGA,
  {
    q: "Vad händer efter första samtalet?",
    a: "Ni får en klickbar demo av er nya hemsida, byggd på det vi pratat om. Ni klickar runt i den innan ni bestämmer er, helt riskfritt för er. Vill ni gå vidare får ni omfattning, tidplan och ett fast pris skriftligt innan jag börjar.",
  },
  {
    q: "Hur fungerar priset efter lansering?",
    a: "En hemsida är inte klar vid lansering. Den behöver drift, säkerhet och uppdateringar för att fortsätta leverera. Löpande hjälp har ett fast månadspris som ni vet i förväg, så ni slipper timfakturor för varje ändring och oklar ansvarsfördelning efter leverans.",
  },
  {
    q: "Hur lång tid tar det innan sajten är klar?",
    a: "Det beror på omfattningen och på när texter och bilder finns på plats. Tidplanen får ni skriftligt tillsammans med det fasta priset, innan jag börjar. Hemsidan har ni redan sett i demon efter första samtalet.",
  },
  {
    q: "Syns hemsidan på Google?",
    a: "Grunderna ingår alltid: rätt teknik, snabb laddning, korrekta titlar och begriplig struktur. Vill ni aktivt klättra på konkurrensutsatta sökord kan löpande sökmotoroptimering läggas till med ett fast månadspris som ni vet i förväg.",
  },
  {
    q: "Vem äger hemsidan och domänen?",
    a: "Ni äger er domän och ert innehåll, alltid. Väljer ni att avsluta hjälper jag till med flytten. Ägande och överlämning framgår av avtalet.",
  },
  {
    q: "Kan du göra om vår befintliga hemsida i stället?",
    a: "Ja. Har ni en befintlig WordPress-sajt börjar jag med att kontrollera teknik och omfattning. Migreringen får ett fast pris skriftligt innan jag börjar. Nya funktioner och större ombyggnad specificeras separat före start.",
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
    "Hemsida för företag: design, bygge, drift och löpande ändringar. Klickbar demo efter första samtalet, helt riskfritt, och fast pris skriftligt innan jag börjar.",
  url: URL,
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://www.stoltmarketing.se/#organization",
    name: "Stolt Marketing",
    url: "https://www.stoltmarketing.se",
  },
  areaServed: [{ "@type": "Country", name: "Sverige" }],
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
          cta={{ href: "#forslag", label: "Boka ett första samtal" }}
          highlight="Hemsida för företag"
          breadcrumbs={[{ label: "Start", href: "/" }, { label: "Hemsida för företag" }]}
          badge="Hemsida för företag"
          title="Hemsida för företag som gör nästa steg tydligt"
          subtitle="Design, bygge, drift och innehållsändringar. Efter första samtalet får ni en klickbar demo av er nya hemsida, helt riskfritt, och sedan ett fast pris skriftligt innan jag börjar."
          bullets={[DEMO_KORT, "Fast pris skriftligt innan jag börjar", "Ni äger domän och innehåll"]}
        />

        <section className="py-14 sm:py-20 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-5">
              {upplagg.map((p) => (
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
                    Boka ett första samtal <ArrowRight size={15} />
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13px] text-body text-center">
              Fast pris skriftligt innan jag börjar. Löpande hjälp har ett fast månadspris som ni vet i förväg. Se <a href="/sa-funkar-det" className="text-primary underline underline-offset-4">Så funkar det</a>.
            </p>
          </div>
        </section>

        <article className="py-4 sm:py-8 px-5 sm:px-8">
          <div className="article-body mx-auto">

            <H2>Därför räcker det inte med en snygg sajt</H2>
            <P>
              Kunden behöver förstå vad ni hjälper till med, var ni arbetar och hur det går till att anlita er. En liten verksamhet kan få en tydlig sajt med fem sidor. Har ni flera tjänster behövs ofta egna sidor för att kunna förklara dem ordentligt. Antalet sidor är inget mål i sig; varje sida ska svara på en verklig kundfråga.
            </P>
            <P>
              Väl framme ska besökaren konvertera. Det betyder att nästa steg är tydligt,
              telefonnummer som går att klicka på i mobilen, formulär utan onödiga fält och
              bevis i form av riktiga kundcase. Jag går igenom dessa vägar på både mobil och dator innan lansering.
            </P>

            <H2>Så går det till</H2>
            <P>
              Först ett samtal där ni berättar vad ni säljer, vilka kunder ni vill nå och vad
              sajten ska göra. {DEMO_MENING} Vill ni gå vidare får ni omfattning, tidplan och
              ett fast pris skriftligt innan jag börjar. Sedan bygger jag resten av sajten, fyller
              den med innehåll och optimerar tekniken. Lanseringen på er domän planerar vi
              tillsammans, och därefter ingår drift, säkerhet och ändringar i det fasta
              månadspriset om ni väljer löpande hjälp. Ni mejlar en ändring, jag gör den. Om en ändring går utanför den avtalade sajten får ni priset först.
            </P>

            <H2>Vad som ingår, på riktigt</H2>
            <P>
              Design och innehåll anpassade efter vad ni behöver. Texter skrivna för både
              kunder och sök. Teknik som testas även i mobilen. Formulär med skydd mot skräppost. Statistik så att ni
              ser vad besökarna gör. Och löpande: uppdateringar, säkerhet, backup och de där
              småändringarna som annars aldrig blir gjorda. Hela listan står i offerten,
              och vill ni jämföra marknaden först finns{" "}
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

        <section id="forslag" className="px-5 sm:px-8 py-14 scroll-mt-24"><div className="max-w-3xl mx-auto bg-surface border border-primary/40 rounded-xl p-5 sm:p-8"><h2 className="text-[32px] leading-tight mb-4">Se er nya hemsida innan ni bestämmer er</h2><p className="mb-6">{DEMO_MENING} Skriv er webbadress eller ert företagsnamn och vad ni vill förbättra, så hör jag av mig nästa arbetsdag och bokar första samtalet. Ingen beställning eller bindning uppstår genom formuläret.</p><InquiryForm service="Hemsida, första samtal" initialMessage="Vi vill boka ett första samtal om en ny hemsida. Vårt företag eller vår webbadress: " submitLabel="Boka ett första samtal" eventName="lead-designforslag" /></div></section>
      </main><Footer />
    </>
  );
}
