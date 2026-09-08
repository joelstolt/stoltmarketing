// ============================================================
// Svarsmotorn: varje formulärlead -> AI-sammanfattning + svarsutkast i Joels
// röst -> mejl till Joel med länk till /svar/<id>, där han rättar och skickar.
//
// Körs i waitUntil EFTER att det vanliga leadmejlet gått fram, och får aldrig
// fälla formuläret: alla fel loggas och sväljs. Utkasten ligger i KV (SVAR_KV)
// i 30 dagar. Länken är själva behörigheten (40 slumptecken, bara i Joels mejl).
// ============================================================

import Anthropic from "@anthropic-ai/sdk";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const SVAR_TTL_S = 30 * 24 * 3600;
export const BAS_URL = "https://www.stoltmarketing.se";
export const TILL_JOEL = "joel@stoltmarketing.se";
export const FROM_NOTIS = "Stolt Marketing <kontakt@stoltmarketing.se>";
export const FROM_SVAR = "Joel Stolt <joel@stoltmarketing.se>";

// Modellordning: kundtext -> dyra modellen först (Joels regel), fallback om
// modellen saknas på kontot eller svarar fel.
const MODELLER = ["claude-opus-5", "claude-sonnet-5", "claude-haiku-4-5-20251001"];

// Signaturen kopieras exakt från mejl-stil-skillen och läggs på av koden,
// aldrig av modellen, så nummer och adress kan inte hittas på.
export function signatur(hantverkare) {
  return [
    "Med vänliga hälsningar,",
    "",
    "Joel Stolt",
    "Stolt Marketing",
    hantverkare ? "Hemsidor och SEO för hantverksföretag" : "Hemsidor och SEO för lokala tjänsteföretag",
    "076-686 74 06",
    "joel@stoltmarketing.se",
    "stoltmarketing.se",
  ].join("\n");
}

// Faktablad: det enda modellen får hämta priser och löften ur. Källa: /priser
// och /serviceavtal på sajten. Ändras priserna där, ändra här.
const FAKTA = `
Stolt Marketing, Joel Stolt, Hässleholm. Bygger hemsidor och gör SEO för lokala tjänsteföretag och hantverkare i hela Sverige.
Hemsida som abonnemang: Bas 1 190 kr/mån, Bredd 1 990 kr/mån, Spets 2 990 kr/mån. 0 kr i startavgift, 12 månaders bindning, sajten byggs färdig innan betalningen börjar. Drift, hosting och löpande ändringar ingår.
Drift och ändringar av en befintlig sajt (serviceavtal): 1 190 kr/mån, oavsett vem som byggt den.
Övrigt som erbjuds: SEO, Google Ads, tillgänglighet (EAA), AI och automation, e-handel, WordPress.
Nästa steg som Joel brukar föreslå: ett kort telefonsamtal, eller att han tittar på kundens nuvarande sajt och återkommer med ett konkret förslag.
`.trim();

const SYSTEM = `Du hjälper Joel Stolt på Stolt Marketing att hantera förfrågningar som kommer in via kontaktformuläret på stoltmarketing.se. Du läser förfrågan, sammanfattar den och skriver ett svarsutkast som Joel rättar och godkänner innan det skickas. Du skickar aldrig något själv.

FAKTABLAD (enda tillåtna källan för priser och löften):
${FAKTA}

SÅ SKRIVER JOEL (härma exakt):
- Rak och varm. Till saken i första meningen, alltid vänligt, ingen uppvärmning.
- Kort. 3 till 8 meningar räcker nästan alltid. Varje mening jobbar.
- Talspråksnära svenska i du-form. "Vi kan dra igång direkt", "så får den börja jobba".
- Trygg och transparent. Säger själv vad som inte ingår eller inte är klart än.
- Slutar alltid i ett tydligt nästa steg som en enkel fråga, till exempel "Passar det med ett kort samtal någon dag den här veckan?" eller "Föreslå gärna ett par tider som passar dig, så skickar jag en möteslänk".
- Hälsning: "Hej Förnamn," (bara förnamnet). Ingen signatur och inget avslut i utkastet, det läggs på av systemet.
- Typiska fraser: "i lugn och ro", "kika", "Det blir toppen", "Säg bara till så fixar vi det", "Ska vi ta ett kort snack i veckan?".
- Max en emoji, och bara :) i slutet av en varm mening, aldrig i ett formellt svar.

FÖRBJUDET:
- Att nämna ett pris, en leveranstid eller ett löfte som inte står i faktabladet. Frågar kunden om pris utan att faktabladet räcker: säg att Joel återkommer med ett konkret förslag efter en titt på nuvarande sajt.
- Långa tankstreck och kortstreck som skiljetecken (varken — eller –). Använd komma, punkt eller vanligt bindestreck.
- Typografiska citattecken. Använd raka ".
- Markdown, rubriker, fetstil, punktlistor i svaret. Svaret skickas som ren text.
- Stel affärssvenska: "Vi återkommer inom kort", "Enligt överenskommelse", "Vänligen", "Tveka inte att höra av dig", "Hoppas att detta mejl finner dig väl".
- Säljfluff och hype: "fantastisk möjlighet", utropstecken i rad.
- Att hitta på fakta om kundens företag som inte står i förfrågan.

PRIORITET:
- het: tydligt köpintresse, konkret behov, riktigt företag.
- ljummen: frågar brett, oklart behov eller oklar tidsplan.
- kall: allmän fråga, student, leverantör som vill sälja något, fel målgrupp.
- spam: reklam, nonsens, länkspam, uppenbart automatiserat.

Svara med JSON enligt schemat. Skriv allt på svenska.`;

const SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["sammanfattning", "vill", "saknas", "prioritet", "prioritet_motivering", "hantverkare", "amne", "svar"],
  properties: {
    sammanfattning: { type: "string", description: "1-2 meningar om vem som hör av sig och varför." },
    vill: { type: "array", items: { type: "string" }, description: "Vad kunden konkret vill ha, en punkt per sak." },
    saknas: { type: "array", items: { type: "string" }, description: "Det Joel behöver veta för att kunna ge ett bra svar eller pris. Tom lista om inget saknas." },
    prioritet: { type: "string", enum: ["het", "ljummen", "kall", "spam"] },
    prioritet_motivering: { type: "string" },
    hantverkare: { type: "boolean", description: "true om avsändaren är bygg, el, VVS, måleri, snickeri, tak, mark eller liknande hantverk." },
    amne: { type: "string", description: "Ämnesrad för svaret, kort, utan prefix som Re: eller SV:." },
    svar: { type: "string", description: "Själva svaret i Joels röst, från hälsningen till sista meningen. Utan signatur." },
  },
};

// Stilfilter i kod: prompten ensam räcker inte när källdata innehåller tecknen.
export function stada(text) {
  return String(text ?? "")
    .replace(/\s+[—–]\s+/g, ", ")
    .replace(/[—–]/g, "-")
    .replace(/[“”„]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\*\*|__|^#+\s*/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function nyttId() {
  const a = crypto.randomUUID().replace(/-/g, "");
  const b = crypto.randomUUID().replace(/-/g, "").slice(0, 8);
  return a + b;
}

export function kvNyckel(id) {
  return `utkast:${id}`;
}

export async function lasUtkast(env, id) {
  if (!env?.SVAR_KV || !/^[a-f0-9]{40}$/.test(String(id))) return null;
  return env.SVAR_KV.get(kvNyckel(id), "json");
}

export async function sparaUtkast(env, post) {
  await env.SVAR_KV.put(kvNyckel(post.id), JSON.stringify(post), { expirationTtl: SVAR_TTL_S });
}

async function skapaMedModell(client, modell, lead) {
  const inneh = [
    `Namn: ${lead.name}`,
    `E-post: ${lead.email}`,
    lead.company ? `Företag: ${lead.company}` : null,
    lead.service ? `Tjänst kunden kryssade: ${lead.service}` : null,
    lead.kalla ? `Kom in via: ${lead.kalla}` : null,
    "",
    "Meddelande:",
    lead.message,
    lead.chatHistory ? `\n\nChatthistorik före formuläret:\n${lead.chatHistory}` : null,
  ]
    .filter((r) => r !== null)
    .join("\n");

  const res = await client.messages.create(
    {
      model: modell,
      max_tokens: 4000,
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      output_config: { effort: "medium", format: { type: "json_schema", schema: SCHEMA } },
      messages: [{ role: "user", content: inneh }],
    },
    { timeout: 24_000 }
  );

  if (res.stop_reason === "refusal") throw new Error("Modellen avböjde");
  const text = res.content.filter((b) => b.type === "text").map((b) => b.text).join("");
  return JSON.parse(text);
}

export async function skapaUtkast(lead) {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY saknas");
  const client = new Anthropic({ maxRetries: 0 });
  let sista;
  for (const modell of MODELLER) {
    try {
      const ai = await skapaMedModell(client, modell, lead);
      return { ai, modell };
    } catch (e) {
      sista = e;
      // Fel som beror på modellen (saknas, ogiltiga parametrar) -> nästa modell.
      // Nätfel/timeout -> också nästa, det kostar bara ett försök till.
      console.error(`Svarsmotorn: ${modell} misslyckades:`, e?.status ?? "", e?.message ?? e);
    }
  }
  throw sista ?? new Error("Ingen modell svarade");
}

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const PRIO_FARG = { het: "#B45309", ljummen: "#1A1611", kall: "#6b6b6b", spam: "#6b6b6b" };

export async function mejlaUtkast(post) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY saknas");
  const { lead, ai, id } = post;
  const lank = `${BAS_URL}/svar/${id}`;
  const li = (arr) => (arr?.length ? `<ul style="margin:4px 0 0;padding-left:18px;">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "<em>inget</em>");
  const subject = `[${ai.prioritet.toUpperCase()}] Svarsutkast: ${lead.name}${lead.company ? `, ${lead.company}` : ""}`;

  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;color:#1A1611;font-size:14px;line-height:1.5;">
    <p style="margin:0 0 12px;"><span style="display:inline-block;padding:2px 8px;border-radius:999px;background:#FAF5EC;border:1px solid #E6DEC9;color:${PRIO_FARG[ai.prioritet] || "#1A1611"};font-weight:600;">${esc(ai.prioritet)}</span> <span style="color:#6b6b6b;">${esc(ai.prioritet_motivering)}</span></p>
    <h2 style="font-size:17px;margin:0 0 8px;">${esc(ai.sammanfattning)}</h2>
    <p style="margin:0 0 4px;color:#6b6b6b;">Vill ha</p>${li(ai.vill)}
    <p style="margin:12px 0 4px;color:#6b6b6b;">Saknas för att svara bra</p>${li(ai.saknas)}
    <p style="margin:20px 0 4px;color:#6b6b6b;">Utkast, ämne: <strong style="color:#1A1611;">${esc(ai.amne)}</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit;font-size:14px;background:#FAF7EE;border:1px solid #E6DEC9;border-radius:8px;padding:14px;margin:0;">${esc(ai.svar)}\n\n${esc(signatur(ai.hantverkare))}</pre>
    <p style="margin:20px 0;"><a href="${lank}" style="display:inline-block;background:#1A1611;color:#F2BC1B;text-decoration:none;padding:12px 18px;border-radius:999px;font-weight:600;">Rätta och skicka svaret</a></p>
    <p style="margin:0;color:#6b6b6b;font-size:12px;">Skickas till ${esc(lead.email)} från joel@stoltmarketing.se när du trycker Skicka på sidan. Länken lever 30 dagar. Modell: ${esc(post.modell)}, ${post.ms} ms.</p>
  </div>`;

  const text = `${ai.prioritet}: ${ai.prioritet_motivering}\n\n${ai.sammanfattning}\n\nVill ha:\n${(ai.vill || []).map((x) => `- ${x}`).join("\n")}\n\nSaknas:\n${(ai.saknas || []).map((x) => `- ${x}`).join("\n") || "- inget"}\n\nÄmne: ${ai.amne}\n\n${ai.svar}\n\n${signatur(ai.hantverkare)}\n\nRätta och skicka: ${lank}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM_NOTIS, to: TILL_JOEL, reply_to: lead.email, subject, html, text }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

// Hela kedjan. Sväljer alla fel, loggar dem, returnerar alltid.
export async function korSvarsmotor(lead, envIn) {
  const start = Date.now();
  try {
    const env = envIn ?? getCloudflareContext().env;
    if (!env?.SVAR_KV) {
      console.warn("Svarsmotorn: SVAR_KV saknas, hoppar över");
      return;
    }
    const { ai, modell } = await skapaUtkast(lead);
    ai.svar = stada(ai.svar);
    ai.amne = stada(ai.amne);
    ai.sammanfattning = stada(ai.sammanfattning);
    ai.vill = (ai.vill || []).map(stada);
    ai.saknas = (ai.saknas || []).map(stada);
    ai.prioritet_motivering = stada(ai.prioritet_motivering);

    const post = {
      id: nyttId(),
      skapad: new Date().toISOString(),
      status: "utkast",
      lead,
      ai,
      modell,
      ms: Date.now() - start,
    };
    await sparaUtkast(env, post);
    await mejlaUtkast(post);
    console.log(`Svarsmotorn: utkast ${post.id} (${modell}, ${post.ms} ms, ${ai.prioritet})`);
  } catch (e) {
    console.error("Svarsmotorn fallerade:", e?.message ?? e);
  }
}
