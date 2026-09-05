import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Rate limit per IP i två lager.
 *
 * Uppmätt 2026-09-06 (security-check): både en Map i modulen och Cloudflares
 * Rate Limiting-binding räknar per EDGE-SERVER. Sex anrop på en keep-alive-
 * anslutning gav 429 efter taket, sex anrop på nya anslutningar gav aldrig 429,
 * eftersom varje ny anslutning hamnar på en annan server i datacentret. Ett
 * skript som öppnar nya anslutningar (vilket curl gör) passerar alltså obehindrat.
 *
 * Lager 1: bindingen ("ratelimits" i wrangler.jsonc). Fångar loopar på en och
 *          samma anslutning utan att röra databasen.
 * Lager 2: D1-tabellen rate_limits, en global räknare per minut och nyckel.
 *          Det är den som faktiskt håller. Raderas dagligen av cronen i
 *          worker-with-headers.mjs.
 *
 * Saknas bindings (next dev) eller felar D1 släpps anropet igenom och en
 * varning loggas: lokalt arbete blockeras aldrig, och ett databasfel får inte
 * fälla kontaktformuläret.
 */
const TAK_PER_MINUT = {
  CONTACT_LIMIT: 5,
  CHAT_LIMIT: 12,
  SAJTKOLL_LIMIT: 5,
  RAPPORT_LIMIT: 3,
  INSYN_LIMIT: 10,
};

export async function rateLimited(name, key) {
  let env;
  try {
    env = getCloudflareContext().env;
  } catch {
    return false;
  }

  try {
    const binding = env?.[name];
    if (binding?.limit) {
      const { success } = await binding.limit({ key: String(key) });
      if (!success) return true;
    }
  } catch (e) {
    console.warn("rate-limit: binding", name, e?.message);
  }

  const tak = TAK_PER_MINUT[name];
  if (!tak || !env?.DB) return false;
  try {
    const fonster = Math.floor(Date.now() / 60_000);
    const antal = await env.DB.prepare(
      `INSERT INTO rate_limits (key, window_start, count) VALUES (?1, ?2, 1)
       ON CONFLICT(key) DO UPDATE SET
         count = CASE WHEN window_start = ?2 THEN count + 1 ELSE 1 END,
         window_start = ?2
       RETURNING count`
    )
      .bind(`${name}:${key}`, fonster)
      .first("count");
    return Number(antal) > tak;
  } catch (e) {
    console.warn("rate-limit: D1", name, e?.message);
    return false;
  }
}

export function clientIp(req) {
  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "okänd"
  );
}
