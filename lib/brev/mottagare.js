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
   Siffran hämtas ur pricing-packages.js, som är enda källan till
   prisstegen. Hårdkoda den INTE här: filen varnar uttryckligen för att
   priser redan ligger dubblerade i combos.json, llms.txt och chattprompten. */
import { packages } from "@/lib/pricing-packages";

const REKOMMENDERAT = packages.find((p) => p.featured) || packages[0];

export const PAKET = {
  pris: REKOMMENDERAT.price,
  namn: REKOMMENDERAT.name,
  villkor:
    "Ingen startkostnad, du betalar månadsvis och kan säga upp när du vill. " +
    `De flesta hantverksföretag landar på ${REKOMMENDERAT.name}. Vill du hellre ` +
    "ha något mindre eller större finns det, du får hela summan skriftligt innan vi börjar.",
};

const REGISTER = Object.fromEntries((data || []).map((m) => [m.slug, m]));

export function getMottagare(slug) {
  return REGISTER[slug] || null;
}

export function alla() {
  return Object.values(REGISTER);
}
