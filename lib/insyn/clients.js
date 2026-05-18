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
};

export function getShare(slug) {
  return SHARES[slug] || null;
}

export const UMAMI_BASE =
  process.env.UMAMI_URL || "https://umami-analytics-tau-two.vercel.app";

export function getClient(slug) {
  return CLIENTS[slug] || null;
}
