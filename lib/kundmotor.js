// ============================================================
// Kundmotorn: sajterna som räknas, vad som räknas som lead, och dagens
// ögonblicksbild som fallback när Umami inte svarar.
//
// Regler:
// - Bara kunduppdrag. Inga demos, inga egna produkter, ingen byråsajt.
// - Lead = formulär, bokning, klick på ring och klick på mejla.
//   Nyhetsbrev och driftstatus räknas INTE, de är inte förfrågningar.
// - Talen är exakt de som kunderna får i sin månadsrapport (samma Umami),
//   så sajten lovar inget den inte redan levererar.
//
// Lägg till en sajt när kunden signat och Umami-id:t finns. `visa: true`
// betyder att sajten får en egen rad med tal på startsidan; sätt bara på
// case som redan är publika på /projekt.
// ============================================================

export const KUNDSAJTER = [
  { id: "92c60875-7c68-4db1-a7ed-82008607e99c", slug: "niklassonsflytt", name: "Niklassons Flytt", ort: "Helsingborg", href: "/projekt/niklassonsflytt", visa: true, offert: ["offert-skickad"] },
  { id: "ffff1634-9f66-4cca-a191-cb5f7a7fc977", slug: "ngtab", name: "Norrlands Gräv & Transport", ort: "Sundsvall", href: "/projekt/ngtab", visa: true, offert: ["lead-offertformular"] },
  { id: "b178ccc9-bd09-4e69-a37a-38bb48ee35a0", slug: "premiebygg", name: "Premie Bygg", ort: "Örebro", href: "/projekt/premiebygg", visa: true, offert: ["lead-offertformular"] },
  { id: "d492f832-e224-4299-873d-af7ad0b6f861", slug: "arkipel", name: "Arkipel Entreprenad", ort: "Norrköping", href: "/projekt/arkipel", offert: ["lead-offertformular"] },
  { id: "b2969196-8ead-4877-9c0b-1200f923c97a", slug: "linguista", name: "Linguista", ort: "Stockholm", href: "/projekt/linguista" },
  { id: "145cddc4-2c4a-481d-9ee9-50c5174d3100", slug: "edshare", name: "EdShare", ort: "Stockholm", href: "/projekt/edshare" },
  { id: "2c6b4f83-2294-4893-a01c-5d4fb8762775", slug: "omniway", name: "Omniway Group", ort: "Malmö" },
  { id: "e8c8ea4b-925d-4863-8822-9fdb08882c09", slug: "pingstkyrkan", name: "Pingstkyrkan Hässleholm", ort: "Hässleholm", href: "/projekt/pingstkyrkan" },
  { id: "ec5d26a4-37f9-468b-adee-812d01880c7f", slug: "forskolan-harpan", name: "Förskolan Harpan", ort: "Hässleholm", href: "/projekt/forskolan-harpan" },
  { id: "3207169c-cafd-4748-8060-cc97c7b47220", slug: "timeoutservice", name: "Timeout Service", ort: "Skåne" },
  { id: "39245bad-c111-4dbd-9061-0b32ac5f8e10", slug: "dinhemmafixare", name: "Din Hemmafixare", ort: "Skåne" },
  { id: "fc9f63b0-ca3e-4f6f-8311-b18bc1e0d0bd", slug: "surolle", name: "Surolle Slöjd", ort: "Dalarna" },
  { id: "3c50ed14-1d9e-4ac3-bd3b-b6df386c429e", slug: "jec", name: "JEC Bygg & Plattsättning", ort: "Skåne" },
  { id: "9e6f9d5e-e6d7-426f-aaa4-4f0803053974", slug: "lillaraby", name: "Lilla Råby Bygghantverk", ort: "Lund" },
  { id: "f6697c89-0513-487c-8076-47a6c8ed6a75", slug: "fourperformance", name: "4performance", ort: "Sverige" },
  { id: "8e9fe443-387a-4fc3-9ec8-c4c984909cbf", slug: "cbdliv", name: "CBD Liv", ort: "Sverige" },
  { id: "4e040370-ca76-427d-ab67-8ca3be4e5bd1", slug: "snickeriaktiebolagen", name: "Snickeriaktiebolagen", ort: "Sverige" },
  { id: "e3dad62f-040a-4294-b560-63a80e205af8", slug: "brfljungdala", name: "BRF Ljungdala", ort: "Hässleholm" },
  { id: "cbf72d2f-01e8-493c-a109-943f7712c721", slug: "hantverksportalen", name: "Hantverksportalen", ort: "Sverige" },
];

/** Formulär, bokningar och klick på ring/mejla. Inte nyhetsbrev, inte driftstatus. */
export function raknasSomLead(namn) {
  const n = String(namn || "").toLowerCase();
  if (n === "offert-skickad") return true;
  if (!n.startsWith("lead")) return false;
  if (n.includes("nyhetsbrev") || n.includes("driftstatus")) return false;
  return true;
}

/**
 * Ögonblicksbild, hämtad ur Umami 5 september 2026 (senaste 30 dagarna).
 * Används i SSR-HTML så talen finns även utan JavaScript, och som reserv
 * om Umami inte svarar. Uppdatera vid port till prod.
 */
export const SNAPSHOT = {
  dagar: 30,
  sajter: 19,
  visitors: 7424,
  pageviews: 16795,
  leads: 156,
  rows: [
    { slug: "niklassonsflytt", name: "Niklassons Flytt", ort: "Helsingborg", href: "/projekt/niklassonsflytt", offert: 37, samtal: 10 },
    { slug: "ngtab", name: "Norrlands Gräv & Transport", ort: "Sundsvall", href: "/projekt/ngtab", offert: 8, samtal: 4 },
    { slug: "premiebygg", name: "Premie Bygg", ort: "Örebro", href: "/projekt/premiebygg", offert: 5, samtal: 6 },
  ],
  updatedAt: "2026-09-05T21:40:00.000Z",
  kalla: "snapshot",
};
