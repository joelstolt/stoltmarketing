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
 * Mapping för /rapport/[slug] — proxy mot Umamis inbyggda Share URL.
 * Hämtas via API: POST /api/websites/{websiteId}/shares
 */
export const SHARES = {
  omni: {
    name: "Omniway Group",
    domain: "omniwaygroup.se",
    umamiSlug: "LlJPBUDDHDWKw1OG",
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
  },
};

export function getShare(slug) {
  return SHARES[slug] || null;
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
