// Niklassons-talet läses ur samma ögonblicksbild som Kundmotorn på startsidan.
import HUB from "./hub-content.json";
import { SNAPSHOT } from "@/lib/kundmotor";

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

// Inga publika paketpriser. Allt har fast pris i förväg, skriftligt, efter ett
// första samtal som inte kostar något. Enda publika timpriset är Akut hjälp.
// Nycklarna finns kvar så att äldre importer inte går sönder.
export const PRICING = {
  bas: "Fast pris innan jag börjar",
  basManad: "fast pris innan jag börjar",
  bredd: "fast pris innan jag börjar",
  spets: "fast pris innan jag börjar",
  ehandel: "fast pris innan jag börjar",
  wpMigrering: "fast pris efter ett första samtal",
  seoAudit: "fast pris innan jag börjar",
  bindning: "Löpande hjälp har ett fast månadspris som du vet i förväg",
  akut: "1 500 kr/h exkl. moms",
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
    serviceType: "Webbutveckling", priceLabel: "Fast pris innan jag börjar",
    relatedService: "/hemsida-foretag",
    intro: "Jag bygger en företagssajt eller webbshop som förklarar era tjänster och gör nästa steg tydligt. Efter första samtalet får ni en klickbar demo, helt riskfritt. Omfattningen och priset bestäms skriftligt innan jag börjar.",
    cta: { href: "/hemsida-foretag#forslag", label: "Boka ett första samtal" },
    features: [
      { icon: "Smartphone", title: "Mobil och dator", desc: "Jag anpassar navigation, text och kontaktvägar till båda skärmstorlekarna." },
      { icon: "Search", title: "Sökgrunden", desc: "Sidstruktur, titlar och tekniska inställningar utgår från det ni säljer och var ni arbetar." },
      { icon: "Pencil", title: "Ändringar och drift", desc: "Hosting, drift och innehållsändringar kan ingå i ett fast månadspris som ni vet i förväg. Svar nästa arbetsdag." },
    ],
    process: [
      { title: "Första samtalet", desc: "Ni berättar vad ni säljer, vilka kunder ni vill nå och vad sajten ska göra. Samtalet kostar ingenting." },
      { title: "Klickbar demo", desc: "Efter samtalet får ni en klickbar demo av er nya sajt. Ni klickar runt i den innan ni bestämmer er, helt riskfritt för er." },
      { title: "Omfattning och bygge", desc: "Ni får innehåll, tidplan och fast pris skriftligt. Jag bygger resten efter ert ja." },
      { title: "Publicering och drift", desc: "Jag kontrollerar kontaktvägarna, publicerar och sköter överenskomna ändringar." },
    ],
    faqs: [
      { q: "Vad kostar en hemsida?", a: "Det beror på omfattningen. Första samtalet kostar ingenting, och därefter får ni ett fast pris skriftligt innan jag börjar. Vill ni ha löpande hjälp efter lansering har den ett fast månadspris som ni vet i förväg." },
      { q: "Får vi se något innan vi bestämmer oss?", a: "Ja. Efter första samtalet får ni en klickbar demo av er nya sajt. Ni klickar runt i den innan ni bestämmer er, helt riskfritt för er. Omfattning, tidplan och fast pris får ni skriftligt innan bygget startar." },
      { q: "Hur uppdaterar vi hemsidan?", a: "Ni kan skicka ändringar till mig. Ett eget redaktörsverktyg och behörigheter bestäms utifrån projektet, så att ni vet vilka delar ni kan uppdatera själva." },
    ],
    blog: [{ title: "Jämför hemsidans kostnader", href: "/vad-kostar-en-hemsida" }],
  },
  seo: {
    slug: "seo", name: "Sökmotoroptimering", label: "SEO", badge: "SEO", icon: "Search",
    serviceType: "Sökmotoroptimering", priceLabel: "Fast pris innan jag börjar",
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
      { q: "Vad kostar en SEO-audit?", a: "Du får ett fast pris skriftligt innan jag börjar, efter ett första samtal som inte kostar något. Auditen omfattar en genomgång av teknik, innehåll och synlighet med en prioriterad åtgärdslista. Genomförandet av åtgärder avtalas separat." },
      { q: "Kan jag få löpande SEO-hjälp?", a: "Ja. Löpande hjälp har ett fast månadspris som du vet i förväg, och omfattningen skrivs ner innan vi startar. Större SEO-arbete får en egen offert." },
      { q: "Kan du lova en viss placering?", a: "Nej. Jag kan beskriva arbetet och följa utvecklingen, men placering och antal kunder påverkas även av konkurrens, efterfrågan och förändringar hos sökmotorerna." },
    ],
    blog: [{ title: "Gör en första SEO-kontroll", href: "/blogg/seo-analys-sjalv" }],
  },
  "google-ads": {
    slug: "google-ads", name: "Google Ads", label: "Google Ads", badge: "Google Ads", icon: "Megaphone",
    serviceType: "Google Ads och sökannonsering", priceLabel: "Fast pris innan jag börjar, annonsbudget tillkommer",
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
      { q: "Vad kostar arbetet med Google Ads?", a: "Du får ett fast pris skriftligt innan jag börjar, efter ett första samtal som inte kostar något. Löpande skötsel har ett fast månadspris som du vet i förväg. Annonsbudgeten tillkommer och betalas separat till Google." },
      { q: "Kan jag få hjälp med ett befintligt annonskonto?", a: "Ja. Jag går igenom konto, mål och landningssidor och lämnar ett fast pris skriftligt på arbetet." },
      { q: "Hur vet jag om annonserna lönar sig?", a: "Vi följer kostnaden för relevanta kontakter och hur många som blir affär. Bedömningen behöver din marginal och kostnaden för både annonsering och arbete. En låg klickkostnad räcker inte för att avgöra lönsamheten." },
    ],
    blog: [{ title: "Räkna på Google Ads-kostnaden", href: "/blogg/vad-kostar-google-ads" }],
  },
  "ai-automation": {
    slug: "ai-automation", name: "AI och automation", label: "AI-automation", badge: "AI och automation", icon: "BrainCircuit",
    serviceType: "AI och automation", priceLabel: "Fast pris innan jag börjar",
    relatedService: "/tjanster/ai-automation",
    intro: "Börja med ett återkommande moment som tar tid varje vecka. Det kan vara CRM, portaler och bokning, agenter som skriver utkast till svar och offerter som du läser och godkänner, eller kopplingar mellan system. Ett flöde i taget, med fast pris per flöde efter en genomgång.",
    cta: { href: "/mindre-handarbete", label: "Se hur automation fungerar" },
    features: [
      { icon: "Bot", title: "Utkast som du godkänner", desc: "Agenter skriver utkast till svar och offerter. Du läser, ändrar och godkänner innan något skickas." },
      { icon: "Workflow", title: "Ett avgränsat flöde", desc: "Vid specialarbete väljer jag tillsammans med dig ett moment och beskriver start, slut och när du ska godkänna." },
      { icon: "Plug", title: "Systemkopplingar", desc: "Kalender, kundsystem och orderflöden kräver egen behovsanalys, åtkomst och offert." },
    ],
    process: [
      { title: "Visa ett exempel", desc: "Du beskriver ett vanligt ärende och visar vilka manuella steg du gör idag." },
      { title: "Välj omfattning", desc: "Jag bedömer vilket flöde som ger mest nytta först och om en koppling mellan system behövs." },
      { title: "Testa och granska", desc: "Svar och arbetsflöde testas med exempel. Du bestämmer vilka moment som kräver ditt godkännande." },
      { title: "Följ upp", desc: "Vi jämför manuella steg och hanteringstid med nuläget innan arbetet byggs ut." },
    ],
    faqs: [
      { q: "Vad kostar automation?", a: "Första samtalet kostar ingenting. Därefter får du ett fast pris skriftligt innan jag börjar. Det fasta priset gäller ett flöde i taget, efter en genomgång av hur ni arbetar idag. Utkast till svar och offerter granskar du innan de skickas." },
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
    { q: "Vad kostar en hemsida och vilka villkor gäller?", a: "Första samtalet kostar ingenting. Därefter får du ett fast pris skriftligt innan jag börjar, och priserna anges exkl. moms. Löpande hjälp har ett fast månadspris som du vet i förväg. Annonsbudget till Google tillkommer separat." },
    { q: "Vad ingår i hemsidans SEO jämfört med en SEO-audit?", a: "Grunden i hemsidan är sidstruktur, titlar och tekniska inställningar. En separat SEO-audit granskar teknik, innehåll och synlighet med en prioriterad åtgärdslista, till ett fast pris som du får skriftligt innan jag börjar. Fortsatt arbete avgränsas separat." },
    { q: "Kan jag börja med ett enda flöde?", a: "Ja. Jag arbetar ett flöde i taget, till exempel utkast till svar eller en koppling mellan två system. Varje flöde får ett fast pris efter en genomgång." },
  ];
}
