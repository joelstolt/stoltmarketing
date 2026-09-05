// ============================================================
// Data for kundcase-sidorna under /projekt/[slug].
// Nya case: lagg en entry har + tunn page.js/layout.js i app/projekt/<slug>/.
// Skriv bara pastaenden som ar verifierbara - inga hittade siffror.
// ============================================================

export const CASES = {
  "forskolan-harpan": {
    slug: "forskolan-harpan",
    title: "Förskolan Harpan",
    badge: "Kundcase",
    metaTitle: "Kundcase: Förskolan Harpan",
    metaDescription:
      "Ny grafisk profil och modern webbplats för Förskolan Harpan i Hässleholm: varm design, enkel platsansökan och en sajt förskolan uppdaterar utan utvecklare.",
    heroTitle: "Förskolan Harpan: en profil och sajt varm som verksamheten.",
    heroSubtitle:
      "En kristen förskola med musikprofil i Hässleholm behövde en identitet och en webbplats som gör det enkelt för föräldrar att hitta rätt och söka plats.",
    bullets: ["Ny grafisk profil", "Enkel platsansökan", "Automatisk publicering"],
    challenge: [
      "Förskolan saknade en sammanhängande grafisk identitet, och webbplatsen var svår att navigera för föräldrar som ville söka plats eller hitta praktisk information. En liten verksamhet med 31 barn har inte råd med en sajt som skapar frågor i stället för att besvara dem.",
    ],
    solution: [
      "Jag tog fram en varm och inbjudande profil som speglar verksamheten, med musiken och barnen i fokus, och byggde en modern sajt i Next.js med tydlig navigation och enkel platsansökan. Sajten ligger på Cloudflare med automatisk publicering, så att ändringar går live utan att någon utvecklare behöver kopplas in.",
    ],
    results: [
      { label: "Grafisk profil", value: "Ny identitet" },
      { label: "Teknik", value: "Next.js" },
      { label: "Status", value: "Live på egen domän" },
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Cloudflare Pages"],
    liveUrl: "https://www.forskolanharpan.se",
    deliverables: [
      "Grafisk profil och designsystem",
      "Design och bygge av webbplatsen",
      "Texter och struktur",
      "Platsansökan via formulär",
      "Drift på Cloudflare med autodeploy",
      "Löpande underhåll",
    ],
  },
  pingstkyrkan: {
    slug: "pingstkyrkan",
    title: "Pingstkyrkan Hässleholm",
    badge: "Kundcase",
    metaTitle: "Kundcase: Pingstkyrkan Hässleholm",
    metaDescription:
      "Ny webbplats för Pingstkyrkan i Hässleholm: lugn design, tydlig information om samlingar och verksamhet, snabb och trygg drift på egen domän.",
    heroTitle: "Pingstkyrkan Hässleholm: en lugn och tydlig plats på nätet.",
    heroSubtitle:
      "En församling behöver en sajt som välkomnar nya besökare och håller medlemmarna uppdaterade, utan att någon i personalen ska behöva bli webbtekniker.",
    bullets: ["Tydlig struktur", "Lätt att underhålla", "Snabb och trygg drift"],
    challenge: [
      "Församlingen behövde en modern webbplats som samlar tider, verksamheter och kontaktvägar på ett ställe, och som känns lika välkomnande som mötet i dörren. Kravet var enkelhet: både för besökaren som söker en gudstjänsttid och för de som sköter sajten i vardagen.",
    ],
    solution: [
      "En stillsam, tydlig design med verksamheten i centrum, byggd som en snabb statisk sajt i Next.js på Cloudflare. Strukturen utgår från de frågor besökare faktiskt har: när är samlingarna, vad finns för barn och unga, hur kommer jag i kontakt. Formulär går säkert via Resend och sajten kräver i praktiken inget tekniskt underhåll av församlingen.",
    ],
    results: [
      { label: "Struktur", value: "Byggd kring besökarens frågor" },
      { label: "Teknik", value: "Next.js, statisk" },
      { label: "Status", value: "Live på egen domän" },
    ],
    tech: ["Next.js", "React", "Cloudflare Pages", "Resend"],
    liveUrl: "https://www.pingstkyrkanhassleholm.se",
    deliverables: [
      "Design och bygge av webbplatsen",
      "Informationsstruktur och texter",
      "Kontaktformulär med säker leverans",
      "Drift på Cloudflare",
      "Löpande underhåll",
    ],
  },
  gardetshundtrim: {
    slug: "gardetshundtrim",
    title: "Gärdets Hundtrim",
    badge: "Kundcase",
    metaTitle: "Kundcase: Gärdets Hundtrim",
    metaDescription:
      "Webbplats för Gärdets Hundtrim i Stockholm: varm design, tydliga tjänster och priser, och en enkel väg till bokning för hundägare på Gärdet.",
    heroTitle: "Gärdets Hundtrim: en sajt lika välkomnande som salongen.",
    heroSubtitle:
      "En lokal hundtrimsalong i Stockholm lever på närområdet och rekommendationer. Sajtens jobb är att göra första intrycket varmt och bokningen självklar.",
    bullets: ["Lokalt fokus", "Tjänster och priser tydligt", "Enkel bokningsväg"],
    challenge: [
      "En liten salong har ett enda digitalt jobb: när en hundägare i närområdet söker trimning ska salongen synas, kännas trygg och vara lätt att boka. Allt annat är brus. Sajten behövde visa tjänster, priser och personen bakom, utan omvägar.",
    ],
    solution: [
      "En varm, personlig sajt med tjänsterna och bokningsvägen i centrum, byggd för lokala sökningar kring Gärdet och Östermalm. Tydliga priser tar bort tröskeln som annars stoppar första besöket.",
    ],
    results: [
      { label: "Fokus", value: "Lokala bokningar" },
      { label: "Priser", value: "Öppna på sajten" },
      { label: "Status", value: "Live på egen domän" },
    ],
    tech: ["Responsiv design", "Lokal SEO-struktur"],
    liveUrl: "https://gardetshundtrim.se",
    deliverables: [
      "Design och bygge av webbplatsen",
      "Tjänste- och prisstruktur",
      "Kontakt- och bokningsväg",
      "Grundläggande lokal sökoptimering",
    ],
  },
  batteriproffs: {
    slug: "batteriproffs",
    title: "Batteriproffs",
    badge: "Eget case",
    metaTitle: "Eget case: Batteriproffs",
    metaDescription:
      "Vi bygger inte bara e-handel åt kunder, vi driver en egen: batteriproffs.se. Next.js och Stripe, 96 av 100 i hastighet hos Google, riktiga B2B-ordrar och en order via ChatGPT.",
    heroTitle: "Batteriproffs: e-handeln vi driver själva.",
    heroSubtitle:
      "Den som säljer e-handelsbyggen borde stå bakom en egen kassa. Batteriproffs är vår egen B2B-butik för batterier, byggd på samma stack vi bygger åt kunder, med egna pengar i potten.",
    bullets: ["Byggd och driven av oss", "96 av 100 i hastighet", "Order via ChatGPT, uppmätt"],
    challenge: [
      "De flesta byråer visar upp kunders butiker men har aldrig själva behövt leva på en kassa som konverterar. Vi ville ha ett ställe där varje rekommendation testas med riktiga ordrar innan den når en kund. Därför startade vi Batteriproffs, en renodlad B2B-butik för truck-, städmaskins- och fritidsbatterier med öppna priser i en bransch som gömmer dem bakom offertformulär.",
    ],
    solution: [
      "Butiken är byggd i Next.js med Stripe som både kassa och orderdatabas. Kassan är anpassad för företagsköp med organisationsnummer, referens och lossningsval, kundkontot fungerar utan lösenord, omdömen samlas in med verifierat köp, och varje order bär sin källa: vi ser exakt vilken kanal som gav vilken affär.",
      "Sajten mäter 96 av 100 i hastighet och 100 i SEO, tillgänglighet och best practices hos Google. Den första månaden kom fem riktiga B2B-ordrar, alla organiska: fyra via Google-sök och en via ChatGPT. Att en AI-assistent skickade en betalande kund är ingen gissning, källan står i orderdatan.",
    ],
    results: [
      { label: "Hastighet (Lighthouse)", value: "96/100" },
      { label: "Ordrar första månaden", value: "5" },
      { label: "Senaste orderkällan", value: "ChatGPT" },
    ],
    tech: ["Next.js", "React", "Stripe", "Resend", "Vercel", "Umami"],
    liveUrl: "https://www.batteriproffs.se",
    deliverables: [
      "Design och bygge av butiken",
      "B2B-kassa med Stripe",
      "SEO: maskin- och användningssidor",
      "Källspårning ner på ordernivå",
      "Eget omdömessystem med verifierat köp",
      "Drift och löpande vidareutveckling",
    ],
  },
};

export function caseMetadata(key) {
  const c = CASES[key];
  const url = `https://www.stoltmarketing.se/projekt/${c.slug}`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      type: "article",
      locale: "sv_SE",
      siteName: "Stolt Marketing",
    },
  };
}

export function caseBreadcrumb(key) {
  const c = CASES[key];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
      { "@type": "ListItem", position: 2, name: "Projekt", item: "https://www.stoltmarketing.se/projekt" },
      { "@type": "ListItem", position: 3, name: c.title, item: `https://www.stoltmarketing.se/projekt/${c.slug}` },
    ],
  };
}
