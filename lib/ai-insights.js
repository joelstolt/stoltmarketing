/**
 * AI-analys av Umami-data med Claude opus-4-7.
 *
 * Returnerar {summary, observations[], recommendations[]} på svenska.
 * Använder prompt caching (5-min) + strukturerad output via JSON Schema.
 * Server-side memory cache per (websiteId, period) i 6 timmar.
 */

import Anthropic from "@anthropic-ai/sdk";

// In-memory TTL-cache. Räcker för MVP — Vercel kan evicta mellan cold starts,
// men det är ok eftersom worst case = vi anropar Claude igen.
const insightsCache = new Map();
const TTL_MS = 6 * 60 * 60 * 1000; // 6 timmar

function getCached(key) {
  const entry = insightsCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiresAt) {
    insightsCache.delete(key);
    return null;
  }
  return entry.value;
}

function setCached(key, value) {
  insightsCache.set(key, { value, expiresAt: Date.now() + TTL_MS });
}

// JSON Schema för strukturerad output — Claude garanterar att svaret matchar.
const OUTPUT_SCHEMA = {
  type: "object",
  properties: {
    summary: {
      type: "string",
      description:
        "1–2 meningar på svenska som sammanfattar vad som hände denna period. Konkret, inte allmänt.",
    },
    observations: {
      type: "array",
      description: "2–4 viktiga mönster i datat, varje 1 mening på svenska.",
      items: { type: "string" },
    },
    recommendations: {
      type: "array",
      description: "Exakt 3 åtgärdsförslag baserat på datat.",
      items: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description:
              "Kort titel på åtgärden (max 8 ord), aktiv form: 'Optimera bilder på /plattform'.",
          },
          why: {
            type: "string",
            description:
              "1–2 meningar — varför detta är värt att göra, baserat på specifika siffror i datat.",
          },
          how: {
            type: "string",
            description:
              "1–3 meningar — konkreta steg eller riktning för att genomföra åtgärden.",
          },
        },
        required: ["title", "why", "how"],
        additionalProperties: false,
      },
    },
  },
  required: ["summary", "observations", "recommendations"],
  additionalProperties: false,
};

const SYSTEM_PROMPT = `Du är en senior svensk digital marknadsföringskonsult som analyserar trafikdata från Umami (privacy-friendly webbanalys) åt en kund. Din uppgift är att ge skarpa, specifika och handlingsbara insikter.

Du skriver alltid på svenska, i en varm men professionell ton — det är en betalande kund du vänder dig till. Du undviker generiska SEO-floskler. Varje observation och rekommendation måste vara grundad i den konkreta data du fått; referera exakta sidor, källor och siffror.

Du får hela rapporten som JSON. Returnera:
- summary: 1–2 meningar som sammanfattar vad som hände denna period.
- observations: 2–4 viktiga mönster (varje en mening).
- recommendations: EXAKT 3 åtgärder, sorterade efter förväntad impact.

Viktiga regler:
- Om trafiken är väldigt låg (< 50 unika besökare): säg det rakt ut och prioritera trafikbyggande åtgärder.
- Föreslå INTE saker du inte kan se i datat ("förbättra mobilen" → bara om device-data faktiskt visar gap).
- Räkna ut härledda värden själv: avvisningsfrekvens = bounces / visits, snitt-session = totaltime / visits, sidor per besök = pageviews / visits.
- Tänk på säsong och kontext: en blogg har annan profil än en SaaS-landing, men gör inte antaganden — gå på datat.
- Om en sida sticker ut (mycket högre/lägre engagement än snittet) — peka ut den med namn.
- Om en källa driver oproportionerligt mycket eller lite trafik jämfört med engagement — kommentera.
- Rekommendationer ska vara konkreta nog att kunden kan agera på i nästa vecka.`;

const client = new Anthropic();

/**
 * Hämtar AI-insights för en rapport. Cachar resultatet per (websiteId, periodKey).
 */
export async function getInsights({ client: clientInfo, range, report }) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return { error: "ANTHROPIC_API_KEY saknas — AI-insights inaktiverat." };
  }

  // Skippa om för lite data
  if (!report?.stats?.visitors || report.stats.visitors === 0) {
    return {
      summary:
        "Ingen besöksdata för perioden — tracking är aktiv men inga besökare registrerade.",
      observations: [
        "Trackingscriptet är installerat och svarar (annars hade vi inte fått 0).",
        "Sajten kan ha lågt trafikflöde, eller perioden är för tidig.",
      ],
      recommendations: [
        {
          title: "Verifiera att tracking laddas på alla sidor",
          why: "Innan vi rekommenderar förbättringar måste vi bekräfta att Umami-snippet faktiskt körs på alla relevanta sidor.",
          how: "Öppna sajten i en privat flik, kolla Network-fliken i devtools efter request mot /api/send. Säkerställ att script taggen finns i alla layouts/templates.",
        },
      ],
    };
  }

  const cacheKey = `${clientInfo.websiteId}|${range.key}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  // Komprimera datat för att hålla input-tokens nere
  const compact = compactReport(clientInfo, range, report);
  const userMessage = JSON.stringify(compact, null, 2);

  try {
    const response = await client.messages.create({
      model: "claude-opus-4-7",
      max_tokens: 4000,
      system: [
        {
          type: "text",
          text: SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" }, // cache systemprompten (5 min default)
        },
      ],
      output_config: {
        format: {
          type: "json_schema",
          schema: OUTPUT_SCHEMA,
        },
      },
      messages: [
        {
          role: "user",
          content: `Här är trafikrapporten för ${clientInfo.name} (${clientInfo.domain}). Period: ${range.label}.\n\n${userMessage}`,
        },
      ],
    });

    // Plocka ut JSON ur svaret
    const textBlock = response.content.find((b) => b.type === "text");
    if (!textBlock) {
      return { error: "AI returnerade inget textsvar." };
    }

    let parsed;
    try {
      parsed = JSON.parse(textBlock.text);
    } catch {
      return { error: "AI-svaret kunde inte parsas som JSON." };
    }

    setCached(cacheKey, parsed);
    return parsed;
  } catch (e) {
    console.error("AI insights error:", e);
    return { error: `Kunde inte hämta AI-insikter: ${e.message}` };
  }
}

/**
 * Trimmar rapporten till det viktigaste för att inte slösa tokens.
 */
function compactReport(clientInfo, range, report) {
  const stats = report.stats;
  const visits = stats.visits || 0;
  const totaltime = stats.totaltime || 0;

  return {
    sajt: { namn: clientInfo.name, domän: clientInfo.domain },
    period: range.label,
    nyckeltal: {
      unika_besökare: stats.visitors,
      sidvisningar: stats.pageviews,
      besök: stats.visits,
      bounces: stats.bounces,
      total_tid_sekunder: totaltime,
      avvisningsfrekvens_pct:
        visits > 0 ? Math.round((stats.bounces / visits) * 100) : null,
      sidor_per_besök:
        visits > 0 ? +(stats.pageviews / visits).toFixed(2) : null,
      snitt_session_sekunder:
        visits > 0 ? Math.round(totaltime / visits) : null,
    },
    topp_sidor: (report.pages || []).slice(0, 10).map((p) => ({
      sida: p.x,
      besök: p.y,
    })),
    trafikkällor: (report.referrers || []).slice(0, 10).map((r) => ({
      källa: r.x || "(direkttrafik)",
      besök: r.y,
    })),
    enheter: (report.devices || []).map((d) => ({ typ: d.x, besök: d.y })),
    länder: (report.countries || []).slice(0, 8).map((c) => ({
      land: c.x,
      besök: c.y,
    })),
    webbläsare: (report.browsers || []).slice(0, 5).map((b) => ({
      webbläsare: b.x,
      besök: b.y,
    })),
    operativsystem: (report.os || []).slice(0, 5).map((o) => ({
      os: o.x,
      besök: o.y,
    })),
  };
}
