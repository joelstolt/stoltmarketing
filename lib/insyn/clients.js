/**
 * Konfig per kund. Slug:en är svår-gissningsbar så ingen kan stöta på sidan av misstag.
 * Lägg till nya kunder här när de signat.
 */
export const CLIENTS = {
  "omni-h7k3m9": {
    name: "Omniway Group",
    domain: "omniwaygroup.se",
    websiteId: "2c6b4f83-2294-4893-a01c-5d4fb8762775",
    color: "#1D4ED8",
    accent: "#3B82F6",
  },
  "batteriproffs-a12fdd": {
    name: "Batteriproffs",
    domain: "batteriproffs.se",
    websiteId: "99e7d795-e675-49e9-bdea-6499c9e29558",
    color: "#1D4ED8",
  },
  "fourperformance-d7ef15": {
    name: "4performance",
    domain: "fourperformance.se",
    websiteId: "f6697c89-0513-487c-8076-47a6c8ed6a75",
    color: "#046307",
  },
};

/**
 * TelTracker-komponenten ligger i kundprojekten och skickar de här två oavsett
 * kund. Batteriproffs saknar den och har ett eget telefonklick-event, därför
 * sätts telTracker bara på de sajter som faktiskt har komponenten.
 */
const TEL_EVENTS = [
  ["lead-ring", "någon har klickat på ert telefonnummer för att ringa upp er"],
  ["lead-mejl", "någon har klickat på er mejladress för att skriva till er"],
];

/**
 * Mapping för /rapport/[slug], proxy mot Umamis inbyggda Share URL.
 * Hämtas via API: POST /api/websites/{websiteId}/shares
 *
 * Eventnamnen är kodord som inte säger något för en kund. Varje event som kan
 * dyka upp i kundens rapport måste ha en rad i `events`, annars står det bara
 * "lead-ring" i vyn utan att någon vet vad det betyder.
 */
export const SHARES = {
  omni: {
    name: "Omniway Group",
    domain: "omniwaygroup.se",
    umamiSlug: "LlJPBUDDHDWKw1OG",
    telTracker: true,
    events: [
      ["lead-kontaktformular", "någon har fyllt i och skickat kontaktformuläret"],
      ["lead-driftstatus", "någon har anmält sig för att få driftstatus"],
      ["lead-nyhetsbrev-hero", "någon har anmält sig till nyhetsbrevet på startsidan"],
      ["lead-nyhetsbrev-footer", "någon har anmält sig till nyhetsbrevet i sidfoten"],
    ],
  },
  batteriproffs: {
    name: "Batteriproffs",
    domain: "batteriproffs.se",
    umamiSlug: "DnlZsX7wsWWLbWbN",
  },
  fourperformance: {
    name: "4performance",
    domain: "fourperformance.se",
    umamiSlug: "Fj5BG21cBbuHwlXT",
    telTracker: true,
    events: [
      ["lead-offertformular", "någon har fyllt i och skickat offertformuläret"],
    ],
  },
  linguista: {
    name: "Linguista",
    domain: "linguista.se",
    umamiSlug: "X2rWFT9zrQHqpXti",
    telTracker: true,
    events: [
      ["lead-kontaktformular", "någon har fyllt i och skickat kontaktformuläret"],
      ["nyhetsbrev-anmalan", "någon har anmält sig till nyhetsbrevet"],
    ],
  },
  edshare: {
    name: "EdShare",
    domain: "edshare.se",
    umamiSlug: "RnUB0bXYUFD7Pcmj",
    telTracker: true,
    events: [
      ["lead-kontaktformular", "någon har fyllt i och skickat kontaktformuläret"],
      ["nyhetsbrev-anmalan", "någon har anmält sig till nyhetsbrevet"],
    ],
  },
  ngtab: {
    name: "Norrlands Gräv & Transport",
    domain: "www.ngtab.se",
    umamiSlug: "ELmGEyRDF91mbYZG",
    // Sajten gick live 14 juli 2026. Utan period öppnar Umami på senaste
    // dygnet, vilket för en kund ser ut som att sajten är död. 90 dagar
    // täcker hela tiden sedan lansering och visar kurvan som faktiskt finns.
    defaultRange: "90day",
    telTracker: true,
    events: [
      ["lead-offertformular", "någon har fyllt i och skickat offertformuläret"],
    ],
  },
};

export function getShare(slug) {
  return SHARES[slug] || null;
}

/**
 * Kundens egna event först, telefon och mejl sist. Tom lista för kunder vars
 * event ännu inte är beskrivna, då renderas ingen Events-ruta alls.
 */
export function getEvents(share) {
  if (!share) return [];
  const egna = share.events || [];
  const alla = share.telTracker ? [...egna, ...TEL_EVENTS] : egna;
  return alla.map(([namn, betyder]) => ({ namn, betyder }));
}

export const UMAMI_BASE =
  process.env.UMAMI_URL || "https://umami-analytics-tau-two.vercel.app";

/**
 * Hemlig token för intern admin-sida /insikter/[token].
 * Byt om du tror den läckt.
 */
export const INSIGHTS_TOKEN = "m9j2k7q4xb";

export function getClient(slug) {
  return CLIENTS[slug] || null;
}
