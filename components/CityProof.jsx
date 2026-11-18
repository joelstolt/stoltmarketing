import { Sektion, Celler, Bevis } from "@/components/ny/Sida";
import { CITIES, CITY_PROOF, SEO_EVIDENCE } from "@/lib/local/data";

/** Namngivna webbprojekt och avgränsat underlag för respektive tjänst. Ny profil v2 2026-11-17. */
export default function CityProof({ city, service = "hemsida" }) {
  const c = CITIES[city];
  if (!c) return null;

  if (service === "seo") {
    return (
      <Sektion pad={false}>
        <div style={{ paddingTop: 56, paddingBottom: 56 }}>
          <Bevis
            etikett="Ett dokumenterat exempel"
            titel="Struktur och mätning, Niklassons Flytt"
            text={`Niklassons Flytt i Helsingborg har 38 tjänste- och ortssidor. Webbplatsens händelsemätning registrerade ${SEO_EVIDENCE.count} offertförfrågningar under en ${SEO_EVIDENCE.days}-dagarsperiod, hämtad ${SEO_EVIDENCE.date}. Det är en historisk observation för den webbplatsen. Orsak och SEO-effekt bedöms tillsammans med sökdata och utveckling över tid.`}
            href={SEO_EVIDENCE.href}
            lank="Se projektet och mätningen"
          />
        </div>
      </Sektion>
    );
  }

  if (service === "google-ads" || service === "ai-automation") {
    const isAi = service === "ai-automation";
    return (
      <Sektion pad={false}>
        <div style={{ paddingTop: 56, paddingBottom: 56 }}>
          <Bevis
            etikett={isAi ? "Innan ni väljer" : "Underlag för beslutet"}
            titel={isAi ? "Se hur automation fungerar innan ni väljer upplägg" : "Vad annonsering kostar, räknat på riktigt"}
            text={
              isAi
                ? "På sidan Mindre handarbete beskrivs vad som kan automatiseras och vilka delar ni granskar och godkänner själva. Använd den för att bedöma vilket flöde som är värt att börja med."
                : "Kostnadsguiden går igenom annonsbudget, arbetskostnad och hur kontakter räknas vidare till affär. Ta med er marginal och ett relevant uppdrag när vi går igenom ert upplägg."
            }
            href={isAi ? "/mindre-handarbete" : "/blogg/vad-kostar-google-ads"}
            lank={isAi ? "Se Mindre handarbete" : "Läs kostnadsguiden"}
          />
        </div>
      </Sektion>
    );
  }

  const localItems = CITY_PROOF[city];
  const items = localItems?.length ? localItems : CITY_PROOF.helsingborg;
  return (
    <Sektion
      rubrik="Se vad jag har byggt"
      ingress={localItems?.length ? `Webbprojekt i ${c.name}.` : "Webbprojekt i Skåne."}
    >
      <Celler
        kolumner={items.length > 2 ? 3 : items.length}
        items={items.map((it) => ({ titel: it.name, text: it.line, href: it.href, lank: "Se projektet" }))}
      />
    </Sektion>
  );
}
