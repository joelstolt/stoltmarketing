// Enda källan till paketstegen. /priser och /tjanster läser HÄRIFRÅN så att
// siffror och leverabler aldrig glider isär igen (tre krockande prisskalor
// var konsultfyndet 2026-08-23; managed-stegen 390/790/1 290 är utdöd).
// OBS: priser förekommer även hårdkodade i combos.json, llms.txt och
// chattprompten (kan inte importera JS) - ändras stegen, sök i HELA repot.

export const packages = [
  {
    name: "Bas",
    for: "För enmansfirman",
    price: "0 kr start, 1 190 kr/mån",
    desc: "Komplett hemsida som gör dig hittad i din ort, utan att du behöver tänka på tekniken.",
    features: [
      "Hemsida med upp till fem sidor",
      "Snabb, mobilanpassad design",
      "Sökordsgrunden lagd för din huvudort",
      "Koppling till din Google Företagsprofil",
      "Hosting, säkerhet, SSL och backuper",
      "Domän och mejladress på den",
      "Ändringar klara inom två arbetsdagar",
    ],
  },
  {
    name: "Bredd",
    for: "För företag med flera tjänster",
    price: "0 kr start, 1 990 kr/mån",
    desc: "För dig som säljer mer än en tjänst och vill synas på fler sökningar än en.",
    featured: true,
    badge: "Här landar de flesta",
    features: [
      "Allt i Bas, och:",
      "Obegränsat antal sidor, en per tjänst",
      "Formgiven från vitt papper, ingen mall",
      "Strukturerad märkning som Google och AI-sök läser",
      "Sökord för din ort och kommunerna runt om",
      "Flera mejladresser (info@, namn@)",
      "SEO-rapport varje månad",
      "Ändringar klara inom ett dygn",
    ],
  },
  {
    name: "Spets",
    for: "För dig som vill äga din marknad",
    price: "0 kr start, 2 990 kr/mån",
    desc: "Sajten jobbar dygnet runt: AI-assistent, Google Ads och nytt innehåll varje månad.",
    features: [
      "Allt i Bredd, och:",
      "AI-assistent som svarar kunder dygnet runt",
      "Google Ads: uppsättning och löpande skötsel",
      "Egen landningssida för varje ort du jobbar i",
      "Nya sökmotortexter varje månad",
      "Löpande tester på det som ger förfrågningar",
      "Strategisamtal en gång i månaden",
      "Prioriterad support, svar samma dag",
    ],
  },
];

// Tillägg och engångstjänster som visas på /priser.
export const tillagg = [
  {
    name: "E-handel",
    price: "+800 kr/mån",
    desc: "Butik, betalning (Klarna, Swish, kort) och produktsidor ovanpå valfritt paket.",
  },
];

export const engangs = [
  {
    name: "SEO-audit",
    price: "4 900 kr",
    desc: "Nollmätning av din nuvarande sajt: teknik, innehåll och synlighet, med prioriterad åtgärdslista.",
  },
  {
    name: "Tillgänglighetsgranskning",
    price: "4 900 kr",
    desc: "Granskning mot WCAG 2.1 AA med prioriterad rapport. Åtgärdspaket till fast pris efter granskningen.",
    href: "/tillganglighet",
  },
  {
    name: "WordPress-migrering",
    price: "4 900 kr, eller 0 kr med drift",
    desc: "Flytt från långsam WordPress till modern drift. Kostnadsfri när du samtidigt tecknar månadsabonnemang.",
  },
];
