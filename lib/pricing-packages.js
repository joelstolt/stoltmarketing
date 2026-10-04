// Enda källan till paketstegen. /priser och /tjanster läser HÄRIFRÅN så att
// siffror och leverabler aldrig glider isär igen (tre krockande prisskalor
// var konsultfyndet 2026-08-23; managed-stegen 390/790/1 290 är utdöd).
// OBS: priser förekommer även hårdkodade i combos.json, llms.txt och
// chattprompten (kan inte importera JS) - ändras stegen, sök i HELA repot.

export const packages = [
  {
    name: "Bas",
    monthly: 1190,
    for: "För enmansfirman",
    price: "0 kr start, 1 190 kr/mån",
    desc: "Upp till fem sidor som presenterar företaget och gör det enkelt att kontakta dig.",
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
    monthly: 1990,
    for: "För företag med flera tjänster",
    price: "0 kr start, 1 990 kr/mån",
    desc: "För dig som säljer mer än en tjänst och vill synas på fler sökningar än en.",
    featured: true,
    badge: "För flera tjänster",
    features: [
      "Allt i Bas, och:",
      "Obegränsat antal sidor, en per tjänst",
      "Formgiven från vitt papper, ingen mall",
      "Strukturerad data för tjänster och företag",
      "Sökord för din ort och kommunerna runt om",
      "Flera mejladresser (info@, namn@)",
      "SEO-rapport varje månad",
      "Ändringar klara inom en arbetsdag",
    ],
  },
  {
    name: "Spets",
    monthly: 2990,
    for: "För löpande marknadsföring",
    price: "0 kr start, 2 990 kr/mån",
    desc: "Förfrågningsrutan, skötsel av Google Ads och nytt innehåll varje månad.",
    features: [
      "Allt i Bredd, och:",
      "Rutan för förfrågningar ingår: SMS direkt, förslag på svar och AI-chatt",
      "Google Ads: uppsättning och löpande skötsel",
      "Egen landningssida för varje ort du jobbar i",
      "Nya sökmotortexter varje månad",
      "Löpande tester på det som ger förfrågningar",
      "Strategisamtal en gång i månaden",
      "Prioriterad support, svar samma arbetsdag",
    ],
  },
];

// Tillägg och engångstjänster som visas på /priser.
export const tillagg = [
  {
    name: "E-handel",
    price: "+800 kr/mån",
    desc: "Webbshop och produktsidor ovanpå valfritt hemsidepaket. Betalsätt och omfattning avtalas före start. Betal-, frakt- och externa licensavgifter tillkommer vid behov.",
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
    desc: "Avgränsad flytt av en WordPress-sajt enligt överenskommen omfattning. 0 kr när du samtidigt tecknar drift. Nya funktioner och större ombyggnad offereras separat.",
  },
];

export const websiteTerms = {
  commitmentMonths: 12,
  proposal: "Ett gratis, klickbart förslag med startsida och en tjänstesida inom två arbetsdagar. Resten byggs när du har sagt ja.",
  scope: "Sidor och ändringar gäller den överenskomna företagssajten. Nya funktioner, integrationer, större ombyggnad och arbete med externa system avtalas separat innan arbetet börjar.",
};
export const requestBox = {
  monthly: 495,
  trialDays: 30,
  capacity: "Upp till 30 uppringningar, 150 samtalsminuter, 100 SMS och 100 chattar per månad.",
};

export const priceFaqs = [
  {
    q: "Varför 0 kr i startavgift?",
    a: "Först får du ett klickbart förslag med startsida och en tjänstesida utan kostnad. Om du tackar ja byggs resten. Månadspriset täcker den avtalade sajten, hostingen, driften och ändringarna.",
  },
  {
    q: "Vem äger sajten om vi avslutar?",
    a: "Sajten, innehållet och domänen är dina enligt avtalet. Hemsidans avtal löper först i 12 månader, därefter månadsvis. Vid en flytt hjälper jag till med överlämningen. Hosting, licenser, AI, telefoni och andra externa tjänster behöver egna aktiva avtal för att fortsätta fungera.",
  },
  {
    q: "Vad händer efter de första 12 månaderna?",
    a: "Allt löper vidare månadsvis till samma pris och avslutas när som helst till nästa månadsskifte. Ett mejl räcker, och du behåller sajten.",
  },
  {
    q: "Finns det dolda kostnader?",
    a: "Månadspriset gäller den avtalade omfattningen. Annonsbudget, betal- och fraktavgifter, externa licenser och särskilda integrationer kan tillkomma. Jag specificerar sådana kostnader innan du godkänner upplägget.",
  },
];
