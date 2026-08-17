import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/ui";
import { ArrowRight } from "lucide-react";

// Prissida/pillar för "vad kostar en hemsida" (170 sök/mån, KD 0).
// Ersätter blogginlägget /blogg/vad-kostar-en-hemsida (301 i middleware).

const URL = "https://www.stoltmarketing.se/vad-kostar-en-hemsida";

export const metadata = {
  title: "Vad kostar en hemsida 2026? Priser, exempel och fällor",
  description:
    "Vad kostar en hemsida 2026? Konkreta prisspann: gör-själv från 0 kr, frilansare 10 000 till 30 000 kr, byrå 30 000 till 100 000 kr, abonnemang från 1 190 kr/mån. Hela kalkylen här.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Vad kostar en hemsida 2026? Priser, exempel och fällor",
    description:
      "Konkreta prisspann för hemsidor 2026 och de dolda kostnaderna ingen berättar om i offerten.",
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
  ["Gör-själv-verktyg (Wix, Squarespace, one.com)", "0 kr", "100 till 350 kr/mån", "Du gör allt jobb själv. Ser ofta hemmagjord ut och rankar sällan."],
  ["Frilansare", "10 000 till 30 000 kr", "0 till 500 kr/mån", "Stor kvalitetsspridning. Drift och ändringar tillkommer oftast per timme."],
  ["Webbyrå, engångsprojekt", "30 000 till 100 000 kr+", "500 till 2 000 kr/mån", "Hög lägstanivå men stor startkostnad, och ändringar faktureras löpande."],
  ["Abonnemang (min modell)", "0 kr", "1 190 kr/mån", "Design, bygge, drift, säkerhet och löpande ändringar ingår i månadspriset."],
];

const faqs = [
  {
    q: "Vad kostar en enkel hemsida för ett litet företag?",
    a: "Med gör-själv-verktyg från runt 100 kr i månaden plus din egen tid. Byggd av frilansare oftast 10 000 till 30 000 kr. Som abonnemang hos mig 0 kr i start och 1 190 kr i månaden där drift och ändringar ingår.",
  },
  {
    q: "Vad kostar en hemsida med webbshop?",
    a: "E-handel kostar mer eftersom betalningar, frakt och produktflöden ska byggas och underhållas. Hos byrå oftast 50 000 till 150 000 kr som projekt. Hos mig 1 990 kr i månaden utan startavgift, med WooCommerce, Klarna och Swish.",
  },
  {
    q: "Varför är prisskillnaden så stor mellan olika leverantörer?",
    a: "Du betalar för olika saker: mallar mot skräddarsytt, timmar mot resultat, och framför allt olika mycket arbete med innehåll, sökoptimering och konvertering. Två sajter som ser likadana ut kan prestera helt olika, och det är prestandan du egentligen köper.",
  },
  {
    q: "Vilka löpande kostnader har en hemsida?",
    a: "Domän cirka 150 till 300 kr per år, webbhotell eller drift 100 till 2 000 kr i månaden, licenser för vissa tillägg, och ändringar per timme om de inte ingår. Det är de löpande posterna som avgör totalkostnaden över tre år, inte startpriset.",
  },
  {
    q: "Kan jag få en hemsida gratis?",
    a: "Ja, med gratisverktyg och deras subdomän och reklam. För ett företag är det sällan gratis i praktiken: det kostar i förtroende, synlighet och din egen tid. Räkna på timmarna innan du väljer den vägen.",
  },
  {
    q: "Vad ingår i ditt månadspris?",
    a: "Design och bygge av sajten, hosting och drift, säkerhet och uppdateringar, samt löpande innehållsändringar. 0 kr i startavgift, 1 190 kr per månad med 12 månaders bindning, därefter månadsvis. Inga timdebiteringar för småändringar.",
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
    { "@type": "ListItem", position: 2, name: "Vad kostar en hemsida?", item: URL },
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
          breadcrumbs={[{ label: "Start", href: "/" }, { label: "Vad kostar en hemsida?" }]}
          badge="Prisguide 2026"
          title="Vad kostar en hemsida 2026?"
          subtitle="Konkreta prisspann för varje väg till en ny sajt, de dolda kostnaderna ingen skriver i offerten, och hur du jämför äpplen med äpplen."
          bullets={["Riktiga prisspann", "Dolda kostnader", "Jämförbar kalkyl"]}
        />

        <article className="py-14 sm:py-20 px-5 sm:px-8">
          <div className="max-w-[760px] mx-auto">

            <H2>Snabbsvaret: prisspannen 2026</H2>
            <P>
              En hemsida till ett företag kostar 2026 allt från 0 kr i startavgift till över
              100 000 kr, beroende på vem som bygger och vad som ingår efteråt. Här är hela
              marknaden i en tabell, med de löpande kostnaderna som oftast glöms bort i
              jämförelsen.
            </P>

            <div className="overflow-x-auto mb-6 border border-border rounded-[10px]">
              <table className="w-full text-[14px] sm:text-[15px]" style={{ minWidth: 640 }}>
                <thead>
                  <tr className="bg-surface-muted">
                    <th className="text-left font-heading font-700 text-heading p-4">Väg</th>
                    <th className="text-left font-heading font-700 text-heading p-4">Startkostnad</th>
                    <th className="text-left font-heading font-700 text-heading p-4">Löpande</th>
                    <th className="text-left font-heading font-700 text-heading p-4">Att veta</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={i} className="border-t border-border align-top">
                      <td className="p-4 font-600 text-heading">{r[0]}</td>
                      <td className="p-4 text-body whitespace-nowrap">{r[1]}</td>
                      <td className="p-4 text-body whitespace-nowrap">{r[2]}</td>
                      <td className="p-4 text-body">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H2>Vad du faktiskt betalar för</H2>
            <P>
              Prislappen styrs av fem saker. Antalet sidor: en ensidig presentation och en sajt
              med femtio tjänste- och ortssidor är olika projekt. Designnivån: mall, anpassad
              mall eller helt skräddarsytt. Innehållet: ska texter och bilder skapas eller finns
              de? Funktioner: formulär är enkelt, e-handel och bokningssystem är inte det. Och
              sökoptimeringen: en sajt byggd för att ranka kräver research, struktur och
              copywriting som en ren visitkortssajt slipper.
            </P>
            <P>
              Den sista punkten är den stora osynliga skillnaden mellan offerterna. Två sajter
              kan se identiska ut där den ena drar hundratals besökare i månaden från Google och
              den andra noll. När jag mätte lokala tjänsteföretag var sajter under 50 sidor i
              praktiken osynliga i sök, medan de bredaste drog tolv gånger mer trafik än de
              smalaste. En billig sajt som ingen hittar är den dyraste sortens hemsida.
            </P>

            <H2>De dolda kostnaderna</H2>
            <P>
              Startpriset är sällan totalpriset. Domänen kostar 150 till 300 kr per år.
              Webbhotell eller drift 100 till 2 000 kr i månaden beroende på lösning.
              WordPress-sajter behöver löpande uppdateringar av tillägg och säkerhet, gör du
              det inte själv kostar det 500 till 1 500 kr i månaden hos de flesta. Och
              ändringar: hos många byråer faktureras varje textbyte per påbörjad timme.
              Räkna alltid totalkostnaden över tre år när du jämför, då byter tabellen ovan
              ofta ordning.
            </P>

            <H2>Tre verkliga exempel</H2>
            <P>
              Hantverksföretaget som vill synas lokalt: tio till tjugo sidor, tjänster gånger
              orter, klickbart telefonnummer och recensioner på sajten. Som projekt hos byrå
              runt 40 000 till 60 000 kr, hos mig 1 190 kr i månaden med allt inkluderat.
            </P>
            <P>
              Konsulten som behöver förtroende: fem till tio sidor där case och kundomdömen gör
              jobbet. Projektpris runt 30 000 till 50 000 kr, eller samma månadsupplägg.
            </P>
            <P>
              Butiken som ska sälja online: webbshop med Klarna och Swish, produktsidor byggda
              för sök. Projektpris från 50 000 kr och uppåt, hos mig 1 990 kr i månaden utan
              startavgift.
            </P>

            <H2>Så jämför du offerter rättvist</H2>
            <P>
              Ställ samma fem frågor till alla: Vad ingår efter lansering, drift, säkerhet och
              ändringar? Vem äger domän, sajt och innehåll om vi skiljs åt? Ingår
              sökoptimering på riktigt, alltså sökordsdata och sidstruktur, eller bara "SEO-vänligt"?
              Vad kostar en ändring i efterhand? Och finns referenser som faktiskt rankar på
              Google, inte bara ser bra ut? Svaren skiljer seriösa leverantörer från resten
              snabbare än priset gör.
            </P>

            <H2>Vanliga frågor om hemsidepriser</H2>
            <div className="flex flex-col gap-6 mb-4">
              {faqs.map((f, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="font-heading font-700 text-[16px] sm:text-[17px] text-heading">{f.q}</h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-body">{f.a}</p>
                </div>
              ))}
            </div>

            <P>
              Vill du gå djupare i vad som gör att en sajt syns i sök, läs guiden om{" "}
              <a href="/sokmotoroptimering" className="text-primary font-600 hover:underline">sökmotoroptimering</a>{" "}
              eller vad <a href="/vad-kostar-seo" className="text-primary font-600 hover:underline">SEO kostar</a>.
            </P>

          </div>
        </article>

        <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
          <div className="relative z-10 max-w-[600px] mx-auto text-center">
            <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">
              Vill du ha en exakt siffra för just din sajt?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri genomgång så får du en skiss och ett fast pris, utan förpliktelser.
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
