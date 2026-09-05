import { NextResponse } from "next/server";
import { umamiFetch } from "@/lib/umami";
import { KUNDSAJTER, SNAPSHOT, raknasSomLead } from "@/lib/kundmotor";

/**
 * GET /api/kundmotor
 *
 * Summerar besökare, sidvisningar och leads över kundsajterna de senaste
 * 30 dagarna, ur samma Umami som kundernas månadsrapporter. Cachas en timme:
 * först i minnet (per isolate), sedan i Cloudflares Cache API, så Umami på
 * Vercel träffas som mest en gång i timmen oavsett trafik.
 *
 * Svarar ALDRIG med fel mot besökaren: går Umami ner returneras senaste
 * kända tal (minne) eller ögonblicksbilden i lib/kundmotor.js, märkt med
 * kalla så gränssnittet kan skriva "uppdaterat" ärligt.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const TTL_S = 3600;
const CACHE_KEY = "https://kundmotor.stoltmarketing.se/30d";
let minne = { at: 0, data: null };

async function hamta() {
  const endAt = Date.now();
  const startAt = endAt - 30 * 864e5;
  const params = { startAt, endAt };

  let visitors = 0;
  let pageviews = 0;
  let leads = 0;
  let sajter = 0;
  const rows = [];

  // Sex sajter i taget: 19 sajter x 2 anrop samtidigt är onödigt hårt mot Umami.
  for (let i = 0; i < KUNDSAJTER.length; i += 6) {
    const del = KUNDSAJTER.slice(i, i + 6);
    const svar = await Promise.all(
      del.map(async (s) => {
        try {
          const [stats, events] = await Promise.all([
            umamiFetch(`/api/websites/${s.id}/stats`, params),
            umamiFetch(`/api/websites/${s.id}/metrics`, { ...params, type: "event", limit: 100 }),
          ]);
          return { s, stats, events };
        } catch (e) {
          console.error("kundmotor: sajt misslyckades", s.slug, e?.message);
          return { s, fel: true };
        }
      })
    );
    for (const r of svar) {
      if (r.fel) continue;
      sajter += 1;
      visitors += Number(r.stats?.visitors || 0);
      pageviews += Number(r.stats?.pageviews || 0);
      let offert = 0;
      let samtal = 0;
      for (const ev of Array.isArray(r.events) ? r.events : []) {
        const namn = String(ev.x || "");
        const antal = Number(ev.y || 0);
        if (raknasSomLead(namn)) leads += antal;
        if (r.s.offert?.includes(namn)) offert += antal;
        if (namn === "lead-ring") samtal += antal;
      }
      if (r.s.visa) rows.push({ slug: r.s.slug, name: r.s.name, ort: r.s.ort, href: r.s.href, offert, samtal });
    }
  }

  if (sajter === 0) throw new Error("Umami svarade inte för någon sajt");
  rows.sort((a, b) => b.offert - a.offert);
  return { dagar: 30, sajter, visitors, pageviews, leads, rows, updatedAt: new Date(endAt).toISOString(), kalla: "umami" };
}

function svar(data, via) {
  return NextResponse.json({ ...data, via }, { headers: { "cache-control": "public, max-age=300" } });
}

export async function GET() {
  const now = Date.now();
  if (minne.data && now - minne.at < TTL_S * 1000) return svar(minne.data, "minne");

  let cache = null;
  let key = null;
  try {
    if (typeof caches !== "undefined" && caches.default) {
      cache = caches.default;
      key = new Request(CACHE_KEY);
      const hit = await cache.match(key);
      if (hit) {
        const data = await hit.json();
        minne = { at: now, data };
        return svar(data, "edge");
      }
    }
  } catch {}

  try {
    const data = await hamta();
    minne = { at: now, data };
    try {
      if (cache) {
        await cache.put(
          key,
          new Response(JSON.stringify(data), {
            headers: { "content-type": "application/json", "cache-control": `public, max-age=${TTL_S}` },
          })
        );
      }
    } catch {}
    return svar(data, "umami");
  } catch (e) {
    console.error("kundmotor:", e?.message);
    return svar(minne.data || SNAPSHOT, "reserv");
  }
}
