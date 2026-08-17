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
  ebbessonbygg: {
    slug: "ebbessonbygg",
    title: "Ebbessonbygg",
    badge: "Kundcase",
    metaTitle: "Kundcase: Ebbessonbygg",
    metaDescription:
      "Webbplats för byggföretaget Ebbessonbygg i Ängelholm: förtroendebyggande design, tjänstesidor för byggservice och en tydlig väg till offert.",
    heroTitle: "Ebbessonbygg: från husdröm till drömhus, och en sajt som säljer det.",
    heroSubtitle:
      "Ett byggföretag i Ängelholm vars affär bygger på förtroende behövde en webbplats som visar hantverket och gör det enkelt att be om offert.",
    bullets: ["Förtroende först", "Tjänstesidor för sök", "Tydlig väg till offert"],
    challenge: [
      "För ett byggföretag avgörs affären ofta innan första samtalet: kunden har redan bildat sig en uppfattning via webbplatsen. Ebbessonbygg behövde en sajt som visar referensjobb och bredd i byggservicen, och som gör steget till kontakt kort.",
    ],
    solution: [
      "En ren, förtroendeingivande sajt med hantverket i fokus, tjänstesidor som beskriver vad företaget faktiskt gör och en offertväg utan onödiga steg. Strukturen är byggd för lokala sökningar, det är där byggkunder finns.",
    ],
    results: [
      { label: "Fokus", value: "Offertförfrågningar" },
      { label: "Struktur", value: "Tjänstesidor för sök" },
      { label: "Status", value: "Live på egen domän" },
    ],
    tech: ["WordPress", "SEO-struktur", "Responsiv design"],
    liveUrl: "https://www.ebbessonbygg.se",
    deliverables: [
      "Design och bygge av webbplatsen",
      "Tjänstesidor för byggservice",
      "Offertformulär",
      "Grundläggande sökoptimering",
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
