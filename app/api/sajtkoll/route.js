import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

/**
 * Gratis sajtkoll på stoltmarketing.se/sajtkoll.
 * Portad från wlm-motorn (clients/wlm/app/api/sajtkoll) med samma mätprinciper:
 *
 * Vi mäter själva i stället för att skicka besökaren till PageSpeed Insights:
 * ett PSI-anrop tar 20-40 sekunder, och så länge väntar ingen.
 *
 * Viktigt: vi väger hela sidan, inte bara HTML-dokumentet. En första version
 * som bara läste HTML gav 100 av 100 till precis alla sajter eftersom vikten
 * sitter i bilder och skript. Mätningen hämtar därför även sidans resurser.
 *
 * Skillnad mot wlm-versionen: gzip-vägning av HTML görs med webbstandarden
 * CompressionStream i stället för node:zlib, så motorn kör identiskt på
 * Cloudflare Workers utan nodejs-polyfill.
 *
 * Allt som rapporteras är läst ur ett riktigt svar. Inga gissningar.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const ALLOWED_ORIGINS = [
  "https://www.stoltmarketing.se",
  "https://stoltmarketing.se",
  "https://stolt-nydesign.joel-d77.workers.dev",
  "http://localhost:3000",
];

/** Skydd mot att någon använder oss som gratis skanner. Nollställs vid kallstart. */
const RATE_LIMIT = { windowMs: 60_000, max: 5 };
const hits = new Map();

function rateLimited(key) {
  const now = Date.now();
  const bucket = (hits.get(key) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  bucket.push(now);
  hits.set(key, bucket);
  if (hits.size > 5000) hits.clear();
  return bucket.length > RATE_LIMIT.max;
}

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

/** Gzip-väger en textsträng med CompressionStream (finns i workerd och Node 18+). */
async function gzipLen(text) {
  try {
    const stream = new Blob([text]).stream().pipeThrough(new CompressionStream("gzip"));
    const buf = await new Response(stream).arrayBuffer();
    return buf.byteLength;
  } catch {
    // Grov reserv: HTML komprimerar typiskt till runt en tredjedel.
    return Math.round(new TextEncoder().encode(text).byteLength / 3);
  }
}

/** Normaliserar det kunden skrev till en URL vi vågar anropa. */
function parseTarget(raw) {
  let input = String(raw || "").trim();
  if (!input) return null;
  input = input.replace(/\s+/g, "");
  if (!/^https?:\/\//i.test(input)) input = `https://${input}`;

  let url;
  try {
    url = new URL(input);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;

  const host = url.hostname.toLowerCase();
  // Ingen skanning av interna adresser.
  if (
    host === "localhost" ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    /^\d+\.\d+\.\d+\.\d+$/.test(host) ||
    !host.includes(".")
  ) {
    return null;
  }
  url.hash = "";
  return url;
}

const KB = (b) => Math.round(b / 1024);
const MB = (b) => (b / 1024 / 1024).toFixed(1);

/** Plockar ut sidans resurser ur HTML: skript, stilmallar och bilder. */
function collectAssets(html, baseUrl) {
  const abs = (u) => {
    try {
      return new URL(u, baseUrl).toString();
    } catch {
      return null;
    }
  };

  const scripts = [];
  const styles = [];
  const images = [];

  for (const m of html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi)) {
    const u = abs(m[1]);
    if (u) scripts.push(u);
  }
  for (const m of html.matchAll(/<link[^>]+>/gi)) {
    const tag = m[0];
    if (!/rel=["']?stylesheet/i.test(tag)) continue;
    const href = tag.match(/href=["']([^"']+)["']/i);
    const u = href && abs(href[1]);
    if (u) styles.push(u);
  }
  for (const m of html.matchAll(/<img[^>]+>/gi)) {
    const tag = m[0];
    /* srcset först. Vi tar mittenvarianten: den minsta gjorde mätningen
       systematiskt för snäll, den största är bara sann för retinaskärmar. */
    const srcset = tag.match(/srcset=["']([^"']+)["']/i);
    let candidate = null;
    if (srcset) {
      const variants = srcset[1]
        .split(",")
        .map((v) => v.trim().split(/\s+/)[0])
        .filter(Boolean);
      if (variants.length) candidate = variants[Math.floor(variants.length / 2)];
    }
    if (!candidate) {
      const src = tag.match(/\ssrc=["']([^"']+)["']/i);
      if (src) candidate = src[1];
    }
    const u = candidate && !candidate.startsWith("data:") ? abs(candidate) : null;
    if (u) images.push({ url: u, tag });
  }

  return {
    scripts: [...new Set(scripts)],
    styles: [...new Set(styles)],
    images: images.filter((v, i, a) => a.findIndex((x) => x.url === v.url) === i),
  };
}

/** Hämtar storlek OCH laddningsstatus för en resurs. HEAD först, GET som reserv.
    broken = servern svarade med verifierat fel (404/500 på både HEAD och GET).
    Timeout och nätfel räknas ALDRIG som trasigt - vi påstår bara det vi bevisat. */
async function probe(url) {
  try {
    const head = await fetch(url, {
      method: "HEAD",
      headers: { "User-Agent": UA, "Accept-Encoding": "gzip, deflate, br" },
      signal: AbortSignal.timeout(6000),
    });
    const len = head.headers.get("content-length");
    if (head.ok && len) return { size: Number(len), broken: false };

    const get = await fetch(url, {
      headers: { "User-Agent": UA, "Accept-Encoding": "gzip, deflate, br" },
      signal: AbortSignal.timeout(6000),
    });
    if (!get.ok) {
      // Trasig bara när även GET ger serverfel, inte vid HEAD-egenheter.
      return { size: 0, broken: get.status >= 400, status: get.status };
    }

    /* Headern (vikt över nätet) går före; bytesräkning av uppackad data är
       sista utvägen och gäller bara resurser som inte komprimeras ändå. */
    const sent = get.headers.get("content-length");
    if (sent) return { size: Number(sent), broken: false };
    const buf = await get.arrayBuffer();
    return { size: buf.byteLength, broken: false };
  } catch {
    return { size: 0, broken: false };
  }
}

export async function POST(req) {
  const origin = req.headers.get("origin") || "";
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "Ogiltig begäran." }, { status: 403 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "okänd";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Vänta en stund innan du testar en sajt till." },
      { status: 429 }
    );
  }

  const body = await req.json().catch(() => ({}));
  const target = parseTarget(body.url);
  if (!target) {
    return NextResponse.json(
      { error: "Skriv en riktig webbadress, till exempel dittforetag.se" },
      { status: 400 }
    );
  }

  let res;
  let html = "";
  let ms = 0;
  const started = Date.now();

  try {
    res = await fetch(target.toString(), {
      redirect: "follow",
      headers: {
        "User-Agent": UA,
        "Accept-Language": "sv-SE,sv;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
      },
      signal: AbortSignal.timeout(15000),
    });
    ms = Date.now() - started;
    html = await res.text();
  } catch {
    return NextResponse.json(
      {
        error:
          "Vi fick inget svar från den adressen. Kontrollera stavningen, eller hör av dig så tittar vi tillsammans.",
      },
      { status: 502 }
    );
  }

  /* En död domän eller blockerad sajt ger en FELSIDA, inte en tom kastad
     fetch (Workers kastar inte vid DNS-fel utan svarar 530). Uppmätt: en
     påhittad domän fick ett riktigt betyg för att motorn betygsatte
     Cloudflares felsida. Statuskoden avgör om det finns något att mäta. */
  if (!res.ok) {
    return NextResponse.json(
      {
        error: `Sajten svarade med felkod HTTP ${res.status} i stället för en sida. Kontrollera adressen, eller hör av dig så tittar vi tillsammans.`,
      },
      { status: 502 }
    );
  }

  const finalUrl = new URL(res.url || target.toString());

  /* HTML:en vägs som den gick över nätet, inte uppackad. Nästan alla svar är
     chunkade och saknar Content-Length, så när headern inte finns packar vi
     själva och mäter resultatet. */
  const htmlSent = res.headers.get("content-length");
  const htmlBytes = htmlSent ? Number(htmlSent) : await gzipLen(html);
  const assets = collectAssets(html, finalUrl.toString());

  /* Väg sidan. Tak per typ håller svarstiden nere; nås taket räknas resten
     upp proportionellt per typ med ett jämnt spritt urval. */
  // Alla stilmallar probas (cap 30) - en enda död CSS gör sidan visuellt trasig.
  const CAP = { scripts: 40, styles: 30, images: 60 };
  const byType = [
    ["scripts", assets.scripts, CAP.scripts],
    ["styles", assets.styles, CAP.styles],
    ["images", assets.images.map((i) => i.url), CAP.images],
  ];

  const spread = (list, cap) => {
    if (list.length <= cap) return list;
    const step = list.length / cap;
    return Array.from({ length: cap }, (_, i) => list[Math.floor(i * step)]);
  };

  const brokenByType = { scripts: [], styles: [], images: [] };
  const weighed = await Promise.all(
    byType.map(async ([typ, list, cap]) => {
      const picked = spread(list, cap);
      const probes = await Promise.all(picked.map((u) => probe(u)));
      probes.forEach((p, i) => {
        if (p.broken) brokenByType[typ].push(picked[i]);
      });
      const sum = probes.reduce((a, b) => a + b.size, 0);
      return picked.length > 0 && list.length > picked.length
        ? Math.round(sum * (list.length / picked.length))
        : sum;
    }),
  );
  const brokenCss = brokenByType.styles.length;
  const brokenTotal =
    brokenCss + brokenByType.scripts.length + brokenByType.images.length;

  const totalAssets =
    assets.scripts.length + assets.styles.length + assets.images.length;
  const estimated = weighed.reduce((a, b) => a + b, 0);
  const totalBytes = htmlBytes + estimated;
  const requests = totalAssets + 1;

  const lower = html.toLowerCase();
  const checks = [];

  /* ── 1. Total sidvikt ── */
  checks.push({
    id: "weight",
    label: "Sidans totala vikt",
    value: totalBytes >= 1024 * 1024 ? `${MB(totalBytes)} MB` : `${KB(totalBytes)} kB`,
    pass: totalBytes < 1_500_000,
    warn: totalBytes >= 1_500_000 && totalBytes < 3_500_000,
    detail:
      totalBytes < 1_500_000
        ? "Lätt sida. Den är uppe snabbt även på mobildata."
        : totalBytes < 3_500_000
          ? "Tung sida. På mobilt nät tar den flera sekunder att visa."
          : "Mycket tung sida. Många besökare hinner backa innan den ens syns.",
  });

  /* ── 2. Antal filer ── */
  checks.push({
    id: "requests",
    label: "Antal filer som laddas",
    value: `${requests} st`,
    pass: requests < 35,
    warn: requests >= 35 && requests < 70,
    detail:
      requests < 35
        ? "Få filer att hämta, vilket håller sidan snabb."
        : requests < 70
          ? "Ganska många filer. Ofta plugin och skript som lagts på över tid."
          : "Väldigt många filer. Typiskt för en sajt där plugin staplats på i åratal.",
  });

  /* ── 2b. Laddar filerna? En enda 404:ad stilmall kan göra sidan visuellt
     trasig trots att all annan teknik ser rätt ut (uppmätt på riktig sajt:
     Elementors post-CSS gav 404, layouten kollapsade, gamla mätningen gav 88).
     Bara verifierade serverfel räknas, aldrig timeouts. ── */
  const exempelFil = brokenCss
    ? brokenByType.styles[0]
    : brokenTotal
      ? brokenByType.scripts[0] || brokenByType.images[0]
      : null;
  const exempelNamn = exempelFil
    ? exempelFil.split("/").pop().split("?")[0]
    : null;
  checks.push({
    id: "broken",
    label: "Filer som faktiskt laddar",
    value: brokenTotal === 0 ? "Alla vi testade" : `${brokenTotal} trasig${brokenTotal > 1 ? "a" : ""}`,
    pass: brokenTotal === 0,
    warn: brokenTotal > 0 && brokenCss === 0 && brokenTotal <= 2,
    detail:
      brokenTotal === 0
        ? "Sidans filer svarar som de ska."
        : brokenCss > 0
          ? `En stilmall laddar inte (${exempelNamn}). Då kan hela layouten se trasig ut för besökaren, även om resten av tekniken är rätt.`
          : `${brokenTotal} fil${brokenTotal > 1 ? "er" : ""} svarar med fel (t.ex. ${exempelNamn}). Det syns som saknade bilder eller funktioner på sidan.`,
  });

  /* ── 3. Bildformat ── */
  const imgUrls = assets.images.map((i) => i.url.toLowerCase());
  const modern = imgUrls.filter((u) => /\.(webp|avif)(\?|$)/.test(u)).length;
  const legacy = imgUrls.filter((u) => /\.(jpe?g|png)(\?|$)/.test(u)).length;
  const hasImages = modern + legacy > 0;
  checks.push({
    id: "imgformat",
    label: "Moderna bildformat",
    value: hasImages ? `${modern} av ${modern + legacy}` : "Inga bilder hittade",
    pass: !hasImages || modern >= legacy,
    warn: hasImages && modern > 0 && modern < legacy,
    detail: !hasImages
      ? "Vi hittade inga bilder att väga på startsidan."
      : modern >= legacy
        ? "Bilderna sparas i moderna format som väger mindre."
        : "Bilderna ligger i gamla format. I webp väger de ofta en tredjedel.",
  });

  /* ── 4. Bilder vid behov ── */
  const imgsBelow = assets.images.length;
  const lazy = assets.images.filter((i) => /loading=["']lazy["']/i.test(i.tag)).length;
  checks.push({
    id: "lazy",
    label: "Bilder laddas vid behov",
    value: imgsBelow ? `${lazy} av ${imgsBelow}` : "Inga bilder",
    pass: !imgsBelow || lazy >= Math.floor(imgsBelow / 2),
    warn: imgsBelow > 0 && lazy > 0 && lazy < Math.floor(imgsBelow / 2),
    detail: !imgsBelow
      ? "Inga bilder att bedöma."
      : lazy >= Math.floor(imgsBelow / 2)
        ? "Bilderna längre ned hämtas först när besökaren scrollar dit."
        : "Alla bilder hämtas direkt, även de längst ned som ingen ser.",
  });

  /* ── 5. Svarstid ── */
  checks.push({
    id: "speed",
    label: "Svarstid från servern",
    value: `${(ms / 1000).toFixed(1)} s`,
    pass: ms < 800,
    warn: ms >= 800 && ms < 1800,
    detail:
      ms < 800
        ? "Servern svarar direkt."
        : ms < 1800
          ? "Servern dröjer. Det är väntan innan sidan ens börjar ritas."
          : "Servern är långsam. Besökaren stirrar på en vit skärm.",
  });

  /* ── 6. Komprimering ── */
  const enc = (res.headers.get("content-encoding") || "").toLowerCase();
  const compressed = /br|gzip|deflate|zstd/.test(enc);
  checks.push({
    id: "compression",
    label: "Komprimerad överföring",
    value: compressed ? enc.toUpperCase() : "Nej",
    pass: compressed,
    detail: compressed
      ? "Sidan skickas komprimerad, som den ska."
      : "Utan komprimering skickas allt i onödigt stora paket.",
  });

  /* ── 7. HTTPS ── */
  const https = finalUrl.protocol === "https:";
  checks.push({
    id: "https",
    label: "Säker anslutning",
    value: https ? "HTTPS" : "Saknas",
    pass: https,
    detail: https
      ? "Sidan laddas krypterat."
      : "Utan HTTPS varnar webbläsaren besökaren för er sajt.",
  });

  /* ── 8. Mobilanpassning ── */
  const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html);
  checks.push({
    id: "mobile",
    label: "Anpassad för mobil",
    value: hasViewport ? "Ja" : "Nej",
    pass: hasViewport,
    detail: hasViewport
      ? "Sidan skalar om för mobilskärmar."
      : "Sidan saknar mobilinställning. Över hälften av besökarna är på mobil.",
  });

  /* ── 9. Rubrik i Google ──
     Längden räknas som Google ser den: HTML-entiteter (&amp;, &#8212; ...)
     avkodade till ETT tecken. Rå räkning gav +4 till +15 tecken för fel
     och falska "rubriken kapas". */
  const textLen = (s) => s.replace(/&#?[a-zA-Z0-9]+;/g, "x").length;
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : "";
  const titleLen = textLen(title);
  checks.push({
    id: "title",
    label: "Rubrik i Google",
    value: title ? `${titleLen} tecken` : "Saknas",
    pass: titleLen >= 15 && titleLen <= 62,
    warn: titleLen > 62,
    detail: title
      ? titleLen > 62
        ? "Rubriken kapas i sökresultatet, slutet syns aldrig."
        : titleLen < 15
          ? "Rubriken är för kort för att sälja in klicket."
          : "Bra längd på rubriken som visas i Google."
      : "Sidan saknar rubrik. Google vet inte vad den ska kalla er.",
  });

  /* ── 10. Text i sökresultatet ── */
  const descMatch = html.match(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i
  );
  const desc = descMatch ? descMatch[1].trim() : "";
  const descLen = textLen(desc);
  checks.push({
    id: "description",
    label: "Text i sökresultatet",
    value: desc ? `${descLen} tecken` : "Saknas",
    pass: descLen >= 50 && descLen <= 165,
    warn: descLen > 165,
    detail: desc
      ? descLen > 165
        ? "Texten kapas mitt i meningen i Google."
        : "Beskrivningen finns och har rimlig längd."
      : "Utan beskrivning hittar Google på en egen text åt er.",
  });

  /* ── 11. Kontaktväg ──
     Ett <form> räcker inte som bevis: WordPress-sajter bär sök-, kommentars-
     och karusellformulär som inte är kontaktvägar (uppmätt: Jetpacks
     jp-carousel-comment-form gav falskt "formulär finns"). Bara formulär som
     ser ut som kontaktformulär räknas, och mejl-länk redovisas som mejl-länk. */
  const hasTel = /href=["']tel:/i.test(html);
  const hasMailto = /href=["']mailto:/i.test(html);
  const formBlocks = html.match(/<form[\s\S]*?<\/form>/gi) || [];
  const INTE_KONTAKT =
    /search|role=["']search|type=["']search|\bsok\b|login|logga-?in|cart|varukorg|checkout|newsletter|prenumer|comment|jp-carousel|password|captcha-only/i;
  const KONTAKTMARKOR = /wpcf7|gform|elementor-form|formidable|ninja-form|hs-form|fluentform/i;
  const hasContactForm = formBlocks.some((f) => {
    const attrs = (f.match(/<form[^>]*>/i) || [""])[0];
    if (INTE_KONTAKT.test(attrs)) return false;
    if (KONTAKTMARKOR.test(f)) return true;
    const hasTextarea = /<textarea/i.test(f);
    const hasEmail = /type=["']email|name=["'][^"']*(?:email|epost|e-post)/i.test(f);
    const inputCount = (f.match(/<(?:input|textarea|select)/gi) || []).length;
    return (hasTextarea && inputCount >= 2) || (hasEmail && inputCount >= 3);
  });
  const vagar = [];
  if (hasTel) vagar.push("Telefon");
  if (hasContactForm) vagar.push("Formulär");
  if (hasMailto) vagar.push("Mejl-länk");
  checks.push({
    id: "contact",
    label: "Går det att höra av sig",
    value: vagar.length ? vagar.join(" + ") : "Nej",
    pass: hasTel && hasContactForm,
    warn: !(hasTel && hasContactForm) && vagar.length > 0,
    detail:
      hasTel && hasContactForm
        ? "Både klickbart nummer och kontaktformulär på startsidan."
        : vagar.length > 0
          ? "Det finns en väg in, men inte både klickbart nummer och kontaktformulär. Vissa vill ringa, andra vill skriva."
          : "Ingen klickbar kontaktväg på startsidan. Besökaren måste leta.",
  });

  /* ── 12. Läsbar för AI-sök ── */
  const hasSchema = /application\/ld\+json/i.test(lower);
  checks.push({
    id: "schema",
    label: "Läsbar för AI-sök",
    value: hasSchema ? "Ja" : "Nej",
    pass: hasSchema,
    detail: hasSchema
      ? "Sidan har strukturerad märkning som AI-motorer kan tolka."
      : "Utan strukturerad märkning har ChatGPT och Google AI svårt att rekommendera er.",
  });

  /* ── 13. Tillgänglighetsgrund (snabbkoll, inte revision) ── */
  const altMissing = assets.images.filter((i) => !/alt=["'][^"']+["']/i.test(i.tag)).length;
  const totalImgs = assets.images.length;
  const hasLang = /<html[^>]+lang=["']/i.test(html);
  const a11yOk = hasLang && (totalImgs === 0 || altMissing === 0);
  checks.push({
    id: "a11y",
    label: "Tillgänglighetsgrund",
    value: !hasLang
      ? "Språk saknas"
      : totalImgs === 0
        ? "Grund ok"
        : `${totalImgs - altMissing} av ${totalImgs} bilder har alt-text`,
    pass: a11yOk,
    warn: hasLang && altMissing > 0 && altMissing <= Math.ceil(totalImgs / 2),
    detail: !hasLang
      ? "Sidan saknar språkattribut. Skärmläsare vet inte att innehållet är på svenska."
      : totalImgs === 0
        ? "Språkattribut finns. Detta är en snabbkoll av grunderna, inte en full granskning."
        : altMissing === 0
          ? "Bilderna har beskrivande alt-texter och språkattribut finns. Snabbkoll, inte full granskning."
          : `${altMissing} bild${altMissing > 1 ? "er" : ""} saknar alt-text. Sedan juni 2025 ställer tillgänglighetslagen krav på många företag.`,
  });

  // En varning är halvvägs, inte ett underkänt.
  const passed = checks.filter((c) => c.pass).length;
  const weighted = checks.reduce((s, c) => s + (c.pass ? 1 : c.warn ? 0.5 : 0), 0);
  let score = Math.round((weighted / checks.length) * 100);

  let verdict =
    score >= 85
      ? "Er sajt står sig bra. Det som återstår är detaljer."
      : score >= 60
        ? "Grunden finns, men flera saker läcker besökare i dag."
        : "Här finns mycket att hämta. Sajten jobbar inte för er som den kunde.";

  /* En sida med död stilmall KAN se sönderslagen ut oavsett övrig teknik.
     Då får siffran inte säga "bra". */
  if (brokenCss > 0) {
    score = Math.min(score, 45);
    verdict =
      "Sidan har filer som inte laddar och kan se trasig ut för besökare. Fixa det först, sedan resten.";
  }

  /* ── AI-sammanfattning: 3-4 meningar klartext, ENBART grundade i mätvärdena.
     Timeout med tyst fallback: rapporten fungerar utan. Framställs aldrig som
     personligen skriven. ── */
  let ai = null;
  try {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (apiKey) {
      const fakta = checks
        .map((c) => `${c.label}: ${c.value} (${c.pass ? "ok" : c.warn ? "varning" : "problem"}) - ${c.detail}`)
        .join("\n");
      const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        signal: AbortSignal.timeout(6500),
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 350,
          messages: [
            {
              role: "user",
              content: `Du skriver en kort sammanfattning av en teknisk sajtmätning åt en svensk webbyrå. Sajtens titel: "${title.slice(0, 120)}". Poäng: ${score} av 100.\n\nMätvärden:\n${fakta}\n\nSkriv 3-4 meningar på svenska, rak och konkret ton, du-tilltal riktat till företagaren som äger sajten. Lyft det viktigaste som fungerar och det som läcker mest besökare, och om titeln avslöjar bransch får du anpassa språket till den. HÅRDA REGLER: referera ENBART mätvärdena ovan, hitta aldrig på något, lova aldrig placeringar eller resultat, nämn inga siffror som inte står ovan. Inga långa tankstreck, inga typografiska citattecken, ingen markdown. Svara med enbart sammanfattningen.`,
            },
          ],
        }),
      });
      if (aiRes.ok) {
        const data = await aiRes.json();
        const text = (data.content?.[0]?.text || "").trim();
        if (text.length > 40) ai = text;
      }
    }
  } catch {
    ai = null;
  }

  /* ── Spara i D1: ger delbar länk + historik för Sajtvakten ── */
  let resultId = null;
  try {
    const { env } = getCloudflareContext();
    if (env?.DB) {
      resultId = crypto.randomUUID().replace(/-/g, "").slice(0, 10);
      const payload = {
        url: finalUrl.origin + (finalUrl.pathname === "/" ? "" : finalUrl.pathname),
        score,
        passed,
        total: checks.length,
        verdict,
        checks,
        ai,
      };
      await env.DB.prepare(
        "INSERT INTO results (id, url, score, data) VALUES (?1, ?2, ?3, ?4)"
      )
        .bind(resultId, payload.url, score, JSON.stringify(payload))
        .run();
    }
  } catch {
    resultId = null;
  }

  return NextResponse.json({
    url: finalUrl.origin + (finalUrl.pathname === "/" ? "" : finalUrl.pathname),
    score,
    passed,
    total: checks.length,
    verdict,
    checks,
    ai,
    id: resultId,
    sampled: byType.some(([, list, cap]) => list.length > cap),
  });
}
