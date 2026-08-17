import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/ui";
import { ArrowRight } from "lucide-react";

// Prissida for "vad kostar seo" (70 sok/man, KD 0) + AI Overview-yta.

const URL = "https://www.stoltmarketing.se/vad-kostar-seo";

export const metadata = {
  title: "Vad kostar SEO 2026? Månadspris, engångsjobb och timpris",
  description:
    "Vad kostar SEO 2026? Löpande sökmotoroptimering 5 000 till 30 000 kr/mån på svenska marknaden, audits 5 000 till 25 000 kr, timpris 800 till 1 500 kr. Hela kalkylen och varningsflaggorna.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Vad kostar SEO 2026? Månadspris, engångsjobb och timpris",
    description: "Riktiga prisspann för sökmotoroptimering 2026 och hur du ser om du får valuta.",
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

const rows = [
  ["Löpande SEO hos byrå", "5 000 till 30 000 kr/mån", "Vanligast. Nivån styrs av konkurrens och hur mycket innehåll som produceras."],
  ["SEO-audit, engång", "5 000 till 25 000 kr", "Nulägesanalys med åtgärdslista. Bra start om du vill veta läget innan du binder dig."],
  ["Timpris konsult", "800 till 1 500 kr/tim", "Flexibelt för punktinsatser, dyrt som löpande modell."],
  ["Hos mig: Tillväxt", "2 490 kr/mån", "Löpande SEO, Google Ads och nytt innehåll i samma månadspris."],
  ["Hos mig: audit", "4 900 kr", "Teknisk genomgång, sökordsdata och prioriterad åtgärdslista."],
];

const faqs = [
  {
    q: "Vad kostar SEO i månaden?",
    a: "På svenska marknaden oftast 5 000 till 30 000 kr i månaden hos byrå, beroende på konkurrens och ambition. Hos mig ingår löpande SEO i Tillväxt för 2 490 kr i månaden tillsammans med Google Ads och innehållsproduktion.",
  },
  {
    q: "Varför är SEO så dyrt?",
    a: "För att det är hantverkstimmar: research i sökordsdata, sidor som skrivs, teknik som rättas och uppföljning varje månad. Det billiga alternativet är ofta dyrast, eftersom månader med fel prioriteringar aldrig kommer tillbaka.",
  },
  {
    q: "Kan man betala för SEO baserat på resultat?",
    a: "Modellen finns men är nästan alltid en varningsflagga. Ingen kontrollerar Googles resultat, så leverantören väljer då lätta mål som ser bra ut på papper i stället för sökningar som ger affärer. Betala för arbete och mät resultatet öppet i stället.",
  },
  {
    q: "Hur vet jag om jag får valuta för SEO-pengarna?",
    a: "Kräv en nollmätning innan start: indexerade sidor, rankande sökord och positioner på de ord som betyder något. Sedan månadsrapporter mot samma tal. Kan leverantören inte visa utvecklingen mot nollpunkten betalar du för en berättelse.",
  },
  {
    q: "Är en SEO-audit värd pengarna?",
    a: "Ja, om den slutar i en prioriterad åtgärdslista du kan agera på, oavsett vem som sedan gör jobbet. En bra audit för 5 000 till 10 000 kr sparar ofta månader av arbete i fel ordning.",
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
    { "@type": "ListItem", position: 2, name: "Vad kostar SEO?", item: URL },
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
          breadcrumbs={[{ label: "Start", href: "/" }, { label: "Vad kostar SEO?" }]}
          badge="Prisguide 2026"
          title="Vad kostar SEO 2026?"
          subtitle="Riktiga prisspann för sökmotoroptimering, vad som styr priset, och varningsflaggorna som skiljer hantverk från luft."
          bullets={["Månadspris och engång", "Vad som styr priset", "Varningsflaggor"]}
        />

        <article className="py-14 sm:py-20 px-5 sm:px-8">
          <div className="max-w-[760px] mx-auto">

            <H2>Snabbsvaret: prisspannen 2026</H2>
            <div className="overflow-x-auto mb-6 border border-border rounded-[10px]">
              <table className="w-full text-[14px] sm:text-[15px]" style={{ minWidth: 560 }}>
                <thead>
                  <tr className="bg-surface-muted">
                    <th className="text-left font-heading font-700 text-heading p-4">Upplägg</th>
                    <th className="text-left font-heading font-700 text-heading p-4">Pris</th>
                    <th className="text-left font-heading font-700 text-heading p-4">Att veta</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className="border-t border-border align-top">
                      <td className="p-4 font-600 text-heading">{r[0]}</td>
                      <td className="p-4 text-body whitespace-nowrap">{r[1]}</td>
                      <td className="p-4 text-body">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H2>Vad som styr priset</H2>
            <P>
              Tre saker avgör var i spannet du hamnar. Konkurrensen: att ranka på "elektriker
              hässleholm" och "försäkring" är olika universum, och tiden det tar styr kostnaden.
              Innehållsvolymen: sajter vinner på sidbredd, och sidor ska skrivas av någon.
              Utgångsläget: en tekniskt frisk sajt med bra grund kostar mindre att flytta än en
              som först måste saneras.
            </P>
            <P>
              När jag mätte vad som skiljer vinnande sajter från resten i lokala tjänstebranscher
              var antal tjänstesidor den starkaste faktorn, medan länkstyrka spelade marginell
              roll. Det påverkar vad du bör betala för: innehållsproduktion och struktur ger mer
              per krona än länkpaket i de flesta lokala branscher.
            </P>

            <H2>Vad du ska få för pengarna varje månad</H2>
            <P>
              En rimlig månadsleverans innehåller: uppföljning av positioner mot en nollmätning,
              minst en ny eller väsentligt förbättrad sida, teknisk kontroll efter sajtändringar,
              och en rapport du faktiskt förstår. Får du i stället "vi har jobbat med er
              synlighet" utan siffror, byt leverantör. SEO går utmärkt att mäta, och den som
              inte vill mätas har oftast ett skäl.
            </P>

            <H2>Varningsflaggor när du köper SEO</H2>
            <P>
              Garanterad förstaplats: ingen kontrollerar Google, löftet är ett säljtrick.
              Hemliga metoder: allt som fungerar tål att förklaras. Inlåsning: om du inte äger
              domän, sajt och data när avtalet tar slut är priset irrelevant, du är fången.
              Länkpaket till fast pris: köpta länkar i skala är det enda i SEO som kan ge dig
              en bestraffning i stället för en faktura. Och resultatbaserad betalning utan
              definierade mål, se frågorna nedan.
            </P>

            <H2>Räkna hem det: ett exempel</H2>
            <P>
              Anta att en position på ett sökord med 300 sökningar i månaden ger 60 besök och
              två förfrågningar, och att varannan förfrågan blir affär värd 15 000 kr. Det är
              15 000 kr i månaden från ett enda sökord, utan klickkostnad, månad efter månad.
              Jämför med samma trafik köpt via annonser för 50 till 150 kr per klick. Det är
              därför SEO tål att kosta: rätt gjort är det den billigaste trafiken du någonsin
              kommer äga. Hela grunden förklaras i{" "}
              <a href="/sokmotoroptimering" className="text-primary font-600 hover:underline">guiden om sökmotoroptimering</a>.
            </P>

            <H2>Vanliga frågor om SEO-priser</H2>
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
              Vill du veta exakt vad det skulle kosta för dig?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en genomgång så mäter jag ditt nuläge och visar vad som är värt att göra, i vilken ordning.
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
