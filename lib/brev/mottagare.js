/**
 * Mottagare av handskrivna brev.
 *
 * mottagare.json genereras av internal/leadsgoogle/brev/valj-brev.py
 * (filen ut/brev-ÅÅÅÅ-MM.json kopieras hit). Lägg INTE till rader för hand,
 * de skrivs över nästa gång en batch genereras. Slug:en står i brevets QR-kod.
 *
 * Sidan är noindex och slug:en är inte gissningsbar, men den är inte hemlig
 * heller: skriv ingenting här som inte tål att läsas av mottagaren själv.
 */
import data from "./mottagare.json";

export const KONTAKT = {
  telefon: "",                      // fylls i när numret är satt, döljs om tomt
  epost: "joel@stoltmarketing.se",
};

/* Brevet lovar att koden visar priset, så sidan MÅSTE svara på det.
   Sedan 2026-11-17 finns inga publika paketpriser: allt har fast pris
   skriftligt innan jag börjar, och första samtalet kostar ingenting. */
export const PAKET = {
  pris: "Fast pris innan jag börjar",
  namn: "Fast pris",
  villkor:
    "Första samtalet kostar ingenting. Du får hela summan skriftligt innan vi börjar. " +
    "Löpande hjälp har ett fast månadspris som du vet i förväg.",
};

const REGISTER = Object.fromEntries((data || []).map((m) => [m.slug, m]));

export function getMottagare(slug) {
  return REGISTER[slug] || null;
}

export function alla() {
  return Object.values(REGISTER);
}
