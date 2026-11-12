import { SectionHeader } from "@/components/ui";
import { CITIES, CITY_PROOF, SEO_EVIDENCE } from "@/lib/local/data";

/** Namngivna webbprojekt och avgränsat underlag för respektive tjänst. */
export default function CityProof({ city, service = "hemsida" }) {
  const c = CITIES[city];
  if (!c) return null;

  if (service === "seo") {
    return (
      <section className="pb-14 sm:pb-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto border border-border rounded-[10px] p-6 sm:p-8">
          <h2 className="font-heading font-600 text-[24px] text-heading">Ett dokumenterat exempel på struktur och mätning</h2>
          <p className="mt-4 text-[16px] leading-[1.8] text-body max-w-[800px]">
            Niklassons Flytt i Helsingborg har 38 tjänste- och ortssidor. Webbplatsens händelsemätning registrerade {SEO_EVIDENCE.count} offertförfrågningar under en {SEO_EVIDENCE.days}-dagarsperiod, hämtad {SEO_EVIDENCE.date}. Det är en historisk observation för den webbplatsen. Orsak och SEO-effekt bedöms tillsammans med sökdata och utveckling över tid.
          </p>
          <a href={SEO_EVIDENCE.href} className="inline-block mt-5 text-[15px] text-primary underline underline-offset-4">Se projektet och mätningens avgränsning</a>
        </div>
      </section>
    );
  }

  if (service === "google-ads" || service === "ai-automation") {
    const isAi = service === "ai-automation";
    return (
      <section className="pb-14 sm:pb-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto border border-border rounded-[10px] p-6 sm:p-8">
          <h2 className="font-heading font-600 text-[24px] text-heading">{isAi ? "Se standardprodukten innan du väljer upplägg" : "Underlag för ditt beslut om annonsering"}</h2>
          <p className="mt-4 text-[16px] leading-[1.8] text-body max-w-[800px]">{isAi ? "På rutans produktsida kan du se funktionen, priset och vilka delar du granskar själv. Använd det som första steg för att bedöma om ditt behov ryms i standardrutan." : "Min kostnadsguide går igenom annonsbudget, arbetskostnad och hur kontakter räknas vidare till affär. Ta med din marginal och ett relevant uppdrag när vi går igenom ditt upplägg."}</p>
          <a href={isAi ? "/forfragningar" : "/blogg/vad-kostar-google-ads"} className="inline-block mt-5 text-[15px] text-primary underline underline-offset-4">{isAi ? "Se rutan, exempel och villkor" : "Läs kostnadsguiden"}</a>
        </div>
      </section>
    );
  }

  const localItems = CITY_PROOF[city];
  const items = localItems?.length ? localItems : CITY_PROOF.helsingborg;
  return (
    <section className="pb-14 sm:pb-20 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader badge={localItems?.length ? `Webbprojekt i ${c.name}` : "Webbprojekt i Skåne"} title="Se vad jag har byggt." />
        <div className={`mt-8 grid gap-5 ${items.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-[760px]"}`}>
          {items.map((item) => (
            <a key={item.href} href={item.href} className="block bg-surface rounded-[10px] border border-border p-6 hover:border-primary/40 transition-colors group">
              <p className="text-[13px] font-600 text-primary">{item.tag}</p>
              <h3 className="mt-3 font-heading font-600 text-[21px] text-heading group-hover:text-primary">{item.name}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{item.line}</p>
              <span className="inline-block mt-5 text-[14px] text-primary underline underline-offset-4">Se projekt och omfattning</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
