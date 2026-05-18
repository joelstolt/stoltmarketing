/**
 * Umami API-klient — autentiserar mot self-hosted Umami och hämtar data.
 * JWT cachas i minne tills den expirerar. All trafik server-side.
 */

const UMAMI_URL =
  process.env.UMAMI_URL || "https://umami-analytics-tau-two.vercel.app";
const UMAMI_USER = process.env.UMAMI_USERNAME;
const UMAMI_PASS = process.env.UMAMI_PASSWORD;

// JWT-cache i minne — server-side så delas mellan requests i samma instans
let cachedToken = null;
let cachedTokenExpiresAt = 0;

async function login() {
  if (!UMAMI_USER || !UMAMI_PASS) {
    throw new Error(
      "UMAMI_USERNAME och UMAMI_PASSWORD måste vara satta som env-vars."
    );
  }

  const res = await fetch(`${UMAMI_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: UMAMI_USER, password: UMAMI_PASS }),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Umami login failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  return data.token;
}

async function getToken() {
  const now = Date.now();
  // Förnya 5 min innan utgång för att vara säker
  if (cachedToken && now < cachedTokenExpiresAt - 5 * 60 * 1000) {
    return cachedToken;
  }
  cachedToken = await login();
  // Umami JWT default = 7 dagar; cacha 6 dagar för säkerhetsmarginal
  cachedTokenExpiresAt = now + 6 * 24 * 60 * 60 * 1000;
  return cachedToken;
}

async function umamiFetch(path, params = {}) {
  const token = await getToken();
  const qs = new URLSearchParams(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== null)
  ).toString();
  const url = `${UMAMI_URL}${path}${qs ? `?${qs}` : ""}`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (res.status === 401) {
    // Token kan ha gått ut — rensa och försök igen en gång
    cachedToken = null;
    const fresh = await getToken();
    const retry = await fetch(url, {
      headers: { Authorization: `Bearer ${fresh}` },
      cache: "no-store",
    });
    if (!retry.ok) {
      throw new Error(`Umami fetch failed (${retry.status}): ${url}`);
    }
    return retry.json();
  }

  if (!res.ok) {
    throw new Error(`Umami fetch failed (${res.status}): ${url}`);
  }

  return res.json();
}

/**
 * Hämtar full rapport för en website + period.
 * Returnerar parallella API-anrop med standardstatistik.
 */
export async function getReport(websiteId, range) {
  const { startAt, endAt } = range;
  const unit = pickUnit(startAt, endAt);
  const params = { startAt, endAt };

  const [stats, pageviews, browsers, devices, os, countries, referrers, pages] =
    await Promise.all([
      umamiFetch(`/api/websites/${websiteId}/stats`, params),
      umamiFetch(`/api/websites/${websiteId}/pageviews`, { ...params, unit, timezone: "Europe/Stockholm" }),
      umamiFetch(`/api/websites/${websiteId}/metrics`, { ...params, type: "browser" }),
      umamiFetch(`/api/websites/${websiteId}/metrics`, { ...params, type: "device" }),
      umamiFetch(`/api/websites/${websiteId}/metrics`, { ...params, type: "os" }),
      umamiFetch(`/api/websites/${websiteId}/metrics`, { ...params, type: "country" }),
      umamiFetch(`/api/websites/${websiteId}/metrics`, { ...params, type: "referrer" }),
      umamiFetch(`/api/websites/${websiteId}/metrics`, { ...params, type: "path" }),
    ]);

  return { stats, pageviews, browsers, devices, os, countries, referrers, pages, unit };
}

function pickUnit(startAt, endAt) {
  const days = (endAt - startAt) / (1000 * 60 * 60 * 24);
  if (days <= 2) return "hour";
  if (days <= 90) return "day";
  return "month";
}

/**
 * Hjälpare för att räkna ut tidsperioder.
 */
export function getRange(rangeKey = "30d") {
  const now = Date.now();
  const endAt = now;
  let startAt;

  if (rangeKey === "7d") {
    startAt = now - 7 * 24 * 60 * 60 * 1000;
  } else if (rangeKey === "90d") {
    startAt = now - 90 * 24 * 60 * 60 * 1000;
  } else if (rangeKey.match(/^\d{4}-\d{2}$/)) {
    // Specifik månad, t.ex. "2026-04"
    const [year, month] = rangeKey.split("-").map(Number);
    const start = new Date(Date.UTC(year, month - 1, 1));
    const end = new Date(Date.UTC(year, month, 1)); // första dagen nästa månad
    return {
      startAt: start.getTime(),
      endAt: end.getTime() - 1,
      label: start.toLocaleDateString("sv-SE", {
        year: "numeric",
        month: "long",
        timeZone: "Europe/Stockholm",
      }),
      key: rangeKey,
    };
  } else {
    // default 30d
    startAt = now - 30 * 24 * 60 * 60 * 1000;
  }

  return {
    startAt,
    endAt,
    label:
      rangeKey === "7d"
        ? "Senaste 7 dagarna"
        : rangeKey === "90d"
        ? "Senaste 90 dagarna"
        : "Senaste 30 dagarna",
    key: rangeKey,
  };
}

export { umamiFetch };
