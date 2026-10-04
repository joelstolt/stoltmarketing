// Niklassons-talet läses ur samma ögonblicksbild som Kundmotorn på startsidan.
import HUB from "./hub-content.json";
import { SNAPSHOT } from "@/lib/kundmotor";
import { packages, engangs, tillagg } from "@/lib/pricing-packages";

// ============================================================
// Lokal SEO-data: städer, tjänster och företagsidentitet.
// Driver de 20 ort × tjänst-landningssidorna + deras schema.
// Unikt per-kombo-innehåll ligger i combos.json.
// ============================================================

export const SITE = {
  name: "Stolt Marketing",
  url: "https://www.stoltmarketing.se",
  email: "joel@stoltmarketing.se",
  phone: "076-686 74 06",
  phoneHref: "tel:+46766867406",
  founder: "Joel Stolt",
  baseCity: "Hässleholm",
  region: "Skåne",
  country: "SE",
  priceRange: "$$",
  logo: "https://www.stoltmarketing.se/favicon.svg",
  image: "https://www.stoltmarketing.se/joel-stolt.png",
};

// Hemsidans priser hämtas från den gemensamma paketkällan.
const monthlyPrice = (name) => packages.find((p) => p.name === name).price.split(", ").at(-1);
export const PRICING = {
  bas: packages.find((p) => p.name === "Bas").price,
  basManad: monthlyPrice("Bas"),
  bredd: monthlyPrice("Bredd"),
  spets: monthlyPrice("Spets"),
  ehandel: `${tillagg.find((p) => p.name === "E-handel").price.replace("+", "")} som tillägg`,
  wpMigrering: "0 kr när du tecknar drift",
  seoAudit: engangs.find((p) => p.name === "SEO-audit").price,
  bindning: "12 månader, sedan månadsvis",
  calendarUrl: process.env.NEXT_PUBLIC_CALENDAR_URL || "",
};

// Verkliga lokala case per ortssida. Tom array = ingen proof-sektion (hitta inte på).
export const CITY_PROOF = {
  hassleholm: [
    {
      name: "Förskolan Harpan",
      tag: "Hässleholm",
      line: "Ny grafisk profil och sajt, på plats i stan.",
      href: "/projekt/forskolan-harpan",
    },
    {
      name: "Pingstkyrkan Hässleholm",
      tag: "Hässleholm",
      line: "Ny sajt för församlingen. Tydlig, snabb, enkel att sköta.",
      href: "/projekt/pingstkyrkan",
    },
  ],
  helsingborg: [
    {
      name: "Niklassons Flytt",
      tag: "Helsingborg · webbprojekt",
      line: "Flyttfirma i Helsingborg. 38 sidor över Skåne, varje offertförfrågan mäts.",
      href: "/projekt/niklassonsflytt",
    },
  ],
};

export const CITIES = {
  malmo: {
    slug: "malmo",
    name: "Malmö",
    region: "Skåne",
    lat: 55.605,
    lng: 13.0038,
    hub: "/malmo",
    nearby: ["Malmö"],
  },
  lund: {
    slug: "lund",
    name: "Lund",
    region: "Skåne",
    lat: 55.7047,
    lng: 13.191,
    hub: "/lund",
    nearby: ["Lund"],
  },
  helsingborg: {
    slug: "helsingborg",
    name: "Helsingborg",
    region: "Skåne",
    lat: 56.0465,
    lng: 12.6945,
    hub: "/helsingborg",
    nearby: ["Helsingborg"],
  },
  kristianstad: {
    slug: "kristianstad",
    name: "Kristianstad",
    region: "Skåne",
    lat: 56.0294,
    lng: 14.1567,
    hub: "/kristianstad",
    nearby: ["Kristianstad"],
  },
  hassleholm: {
    slug: "hassleholm",
    name: "Hässleholm",
    region: "Skåne",
    lat: 56.1589,
    lng: 13.7668,
    hub: "/hassleholm",
    nearby: ["Hässleholm"],
  },
};

export const CITY_ORDER = ["malmo", "lund", "helsingborg", "kristianstad", "hassleholm"];

// Referenssiffran är historisk, aldrig ett löfte om framtida resultat.
export const SEO_EVIDENCE = {
  count: SNAPSHOT.rows.find((r) => r.slug === "niklassonsflytt")?.offert,
  days: SNAPSHOT.dagar,
  date: "5 september 2026",
  href: "/projekt/niklassonsflytt",
};

export const SERVICES = {
  hemsida: {
    slug: "hemsida", name: "Hemsida", label: "Webbyrå", badge: "Hemsidor", icon: "Code",
    serviceType: "Webbutveckling", priceLabel: PRICING.bas,
    relatedService: "/hemsida-foretag",
    intro: "Jag bygger en företagssajt som förklarar dina tjänster och gör nästa steg tydligt. Paketet avgör antal sidor och hur mycket löpande arbete som ingår.",
    cta: { href: "/hemsida-foretag#forslag", label: "Få ett gratis designförslag" },
    features: [
      { icon: "Smartphone", title: "Mobil och dator", desc: "Jag anpassar navigation, text och kontaktvägar till båda skärmstorlekarna." },
      { icon: "Search", title: "Sökgrunden", desc: "Sidstruktur, titlar och tekniska inställningar utgår från det du säljer och var du arbetar." },
      { icon: "Pencil", title: "Ändringar och drift", desc: "Hosting och innehållsändringar ingår. Bas har två arbetsdagars ändringstid, Bredd en arbetsdag." },
    ],
    process: [
      { title: "Ditt underlag", desc: "Skicka din webbadress eller företagsnamn, tjänster och vilka kunder du vill nå." },
      { title: "Gratis förslag", desc: "Du får ett förslag på startsida och en tjänstesida. Du kan ta ställning till uttryck och upplägg innan avtal." },
      { title: "Omfattning och bygge", desc: "Jag bekräftar paket, innehåll och tidplan med dig och bygger resten efter ditt ja." },
      { title: "Publicering och drift", desc: "Jag kontrollerar kontaktvägarna, publicerar och sköter överenskomna ändringar." },
    ],
    faqs: [
      { q: "Vad ingår i Bas jämfört med Bredd?", a: `Bas kostar ${PRICING.basManad} och har högst fem sidor. Bredd kostar ${PRICING.bredd} och passar flera tjänster och fler sidor. Båda har 0 kr startavgift, drift och innehållsändringar. Priserna är exkl. moms och avtalet gäller ${PRICING.bindning}.` },
      { q: "Vad visar det gratis designförslaget?", a: "En startsida och en tjänstesida som visar design och struktur. Det är underlag för ditt beslut. Slutlig omfattning och tidplan bestäms innan bygget startar." },
      { q: "Hur uppdaterar jag hemsidan?", a: "Du kan skicka ändringar till mig. Ett eget redaktörsverktyg och behörigheter bestäms utifrån projektet, så att du vet vilka delar du kan uppdatera själv." },
    ],
    blog: [{ title: "Jämför hemsidans kostnader", href: "/vad-kostar-en-hemsida" }],
  },
  seo: {
    slug: "seo", name: "Sökmotoroptimering", label: "SEO", badge: "SEO", icon: "Search",
    serviceType: "Sökmotoroptimering", priceLabel: `SEO-audit ${PRICING.seoAudit}`,
    relatedService: "/tjanster/seo",
    intro: "Jag börjar med din sajt och kundernas sökningar. Du får en prioritering som skiljer tekniska hinder, innehåll och lokal företagsinformation åt.",
    cta: { href: "/kontakt", label: "Prata om din SEO" },
    features: [
      { icon: "FileSearch", title: "Nuläge och hinder", desc: "Jag går igenom indexering, sidstruktur, innehåll och tillgänglig sökdata." },
      { icon: "Search", title: "Kundens ord", desc: "Jag kopplar sökningar till dina tjänster. En rörmokare behöver exempelvis en sida om rörmokartjänster på sin ort." },
      { icon: "BarChart3", title: "Uppföljning", desc: "Jag skiljer synlighet och besök från mottagna förfrågningar. Nollmätningen blir utgångspunkt för uppföljningen." },
    ],
    process: [
      { title: "Underlag", desc: "Du skickar sajt, tjänster och serviceområde. Befintlig Search Console-data tas med när den finns." },
      { title: "SEO-audit", desc: "Jag granskar teknik och innehåll och dokumenterar nuläget." },
      { title: "Prioritering", desc: "Du får en åtgärdslista. Jag bekräftar omfattning och pris innan fortsatt arbete." },
      { title: "Åtgärder och mätning", desc: "Överenskomna förbättringar följs upp mot samma sidor och mått över tid." },
    ],
    faqs: [
      { q: "Vad kostar en SEO-audit?", a: `En SEO-audit kostar ${PRICING.seoAudit} exkl. moms. Den omfattar en genomgång av teknik, innehåll och synlighet med en prioriterad åtgärdslista. Genomförandet av åtgärder avtalas separat.` },
      { q: "Ingår löpande SEO i ett hemsidepaket?", a: `Bas har sökgrunden för din huvudort. Bredd innehåller bland annat SEO-rapport. Spets, ${PRICING.spets} exkl. moms, innehåller löpande innehållsarbete och optimering enligt paketets omfattning. Hemsidans avtal gäller ${PRICING.bindning}. Större SEO-arbete får en egen offert.` },
      { q: "Kan du lova en viss placering?", a: "Nej. Jag kan beskriva arbetet och följa utvecklingen, men placering och antal kunder påverkas även av konkurrens, efterfrågan och förändringar hos sökmotorerna." },
    ],
    blog: [{ title: "Gör en första SEO-kontroll", href: "/blogg/seo-analys-sjalv" }],
  },
  "google-ads": {
    slug: "google-ads", name: "Google Ads", label: "Google Ads", badge: "Google Ads", icon: "Megaphone",
    serviceType: "Google Ads och sökannonsering", priceLabel: `I Spets: ${PRICING.spets}, annonsbudget tillkommer`,
    relatedService: "/tjanster/google-ads",
    intro: "Jag matchar annons, sökning och landningssida med det du säljer. Uppföljningen handlar om relevanta förfrågningar och deras kostnad.",
    cta: { href: "/kontakt", label: "Prata om din annonsering" },
    features: [
      { icon: "Target", title: "Tjänst och område", desc: "Jag delar upp kampanjer efter dina erbjudanden och de områden där du tar uppdrag." },
      { icon: "Search", title: "Sökningar och annonser", desc: "Jag skriver annonser och följer vilka söktermer som utlöser dem. Irrelevanta sökningar används för att förbättra urvalet." },
      { icon: "BarChart3", title: "Kostnad och kontakter", desc: "Budget, registrerade kontakter och kvalitet följs upp tillsammans. Ett klick eller formulär är ännu ingen affär." },
    ],
    process: [
      { title: "Mål och marginal", desc: "Du beskriver ett relevant uppdrag, serviceområde och vad en ny kund är värd efter direkta kostnader." },
      { title: "Budget och konto", desc: "Vi avtalar arbete och annonsbudget separat. Kontot är ditt." },
      { title: "Annonser och mätning", desc: "Jag sätter upp kampanj, landningssida och överenskommen kontaktmätning." },
      { title: "Uppföljning", desc: "Jag går igenom sökningar, kostnader och kontaktkvalitet med dig och justerar arbetet." },
    ],
    faqs: [
      { q: "Ingår Google Ads-arbetet i Spets?", a: `Ja, uppsättning och löpande skötsel ingår i hemsidepaketet Spets för ${PRICING.spets} exkl. moms. Annonsbudgeten tillkommer och betalas separat till Google. Paketets avtal gäller ${PRICING.bindning}.` },
      { q: "Kan jag få hjälp med ett befintligt annonskonto?", a: "Ja. Jag går igenom konto, mål och landningssidor och lämnar en offert på arbetet. Spets är ett hemsidepaket; uppdrag för ett befintligt konto avgränsas separat." },
      { q: "Hur vet jag om annonserna lönar sig?", a: "Vi följer kostnaden för relevanta kontakter och hur många som blir affär. Bedömningen behöver din marginal och kostnaden för både annonsering och arbete. En låg klickkostnad räcker inte för att avgöra lönsamheten." },
    ],
    blog: [{ title: "Räkna på Google Ads-kostnaden", href: "/blogg/vad-kostar-google-ads" }],
  },
  "ai-automation": {
    slug: "ai-automation", name: "AI och automation", label: "AI-automation", badge: "AI och automation", icon: "BrainCircuit",
    serviceType: "AI och automation", priceLabel: "Rutan: 495 kr/mån. Specialarbete enligt offert.",
    relatedService: "/tjanster/ai-automation",
    intro: "Börja med ett återkommande moment. Rutan samlar förfrågningar och föreslår svar. Kopplingar till kalender eller andra system är ett separat projekt.",
    cta: { href: "/forfragningar", label: "Se rutan och prova gratis" },
    features: [
      { icon: "Bot", title: "Rutan på hemsidan", desc: "Tar emot förfrågningar, skickar SMS och föreslår ett svar. Du granskar förslaget." },
      { icon: "Workflow", title: "Ett avgränsat flöde", desc: "Vid specialarbete väljer jag tillsammans med dig ett moment och beskriver start, slut och när du ska godkänna." },
      { icon: "Plug", title: "Systemkopplingar", desc: "Kalender, kundsystem och orderflöden kräver egen behovsanalys, åtkomst och offert." },
    ],
    process: [
      { title: "Visa ett exempel", desc: "Du beskriver ett vanligt ärende och visar vilka manuella steg du gör idag." },
      { title: "Välj omfattning", desc: "Jag bedömer om standardrutan räcker eller om en separat integration behövs." },
      { title: "Testa och granska", desc: "Svar och arbetsflöde testas med exempel. Du bestämmer vilka moment som kräver ditt godkännande." },
      { title: "Följ upp", desc: "Vi jämför manuella steg och hanteringstid med nuläget innan arbetet byggs ut." },
    ],
    faqs: [
      { q: "Vad kostar standardrutan?", a: "Rutan kostar 495 kr/mån exkl. moms, med 30 dagar gratis och ingen bindning. Den tar emot förfrågningar, skickar SMS och ger förslag på svar. Du granskar svaret innan det skickas." },
      { q: "Ingår kalender och koppling till kundsystem?", a: "Nej. Kalenderbokning, offertautomation och kopplingar till dina system är specialarbete. Jag kartlägger behov och åtkomst och lämnar en avgränsad offert innan bygget." },
      { q: "Vad behöver du för att lämna offert på ett flöde?", a: "Ett exempelärende, stegen du gör idag, berörda system och vem som får godkänna. Offerten beskriver vad som byggs, hur det testas och vad drift och fortsatt arbete omfattar." },
    ],
    blog: [{ title: "Exempel på avgränsade flöden", href: "/blogg/automatisera-med-ai" }],
  },
};

export const SERVICE_ORDER = ["hemsida", "seo", "google-ads", "ai-automation"];

// Samma källa används av hubbens synliga FAQ och FAQPage.
export function cityHubFaqs(city) {
  const localFaqs = HUB[city]?.faqs || [];
  return [
    ...localFaqs,
    { q: "Vad kostar en hemsida och vilka villkor gäller?", a: `Bas kostar ${PRICING.basManad} och har högst fem sidor. Bredd kostar ${PRICING.bredd} och Spets ${PRICING.spets}. Priserna är exkl. moms, med 0 kr startavgift och ${PRICING.bindning}. Google Ads-arbete ingår i Spets; annonsbudget tillkommer.` },
    { q: "Vad ingår i hemsidans SEO jämfört med en SEO-audit?", a: `Bas har sökgrunden för din huvudort. En separat SEO-audit kostar ${PRICING.seoAudit} exkl. moms och granskar teknik, innehåll och synlighet med en prioriterad åtgärdslista. Fortsatt arbete avgränsas separat.` },
    { q: "Kan jag börja med rutan på min befintliga hemsida?", a: "Ja. Standardrutan kostar 495 kr/mån exkl. moms, med 30 dagar gratis och ingen bindning. Kalenderbokning och kopplingar till andra system är separata specialbyggen." },
  ];
}
