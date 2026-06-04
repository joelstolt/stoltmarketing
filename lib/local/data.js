// ============================================================
// Lokal SEO-data: städer, tjänster och företagsidentitet.
// Driver de 20 ort × tjänst-landningssidorna + deras schema.
// Unikt per-kombo-innehåll ligger i combos.json.
// ============================================================

export const SITE = {
  name: "Stolt Marketing",
  url: "https://stoltmarketing.se",
  email: "joel@stoltmarketing.se",
  founder: "Joel Stolt",
  baseCity: "Hässleholm",
  region: "Skåne",
  country: "SE",
  priceRange: "$$",
  logo: "https://stoltmarketing.se/favicon.svg",
  image: "https://stoltmarketing.se/joel-stolt.png",
};

export const CITIES = {
  malmo: {
    slug: "malmo",
    name: "Malmö",
    region: "Skåne",
    lat: 55.605,
    lng: 13.0038,
    hub: "/malmo",
    nearby: ["Malmö", "Västra Hamnen", "Hyllie", "Burlöv", "Lomma", "Staffanstorp", "Vellinge", "Trelleborg"],
  },
  lund: {
    slug: "lund",
    name: "Lund",
    region: "Skåne",
    lat: 55.7047,
    lng: 13.191,
    hub: "/lund",
    nearby: ["Lund", "Ideon", "Dalby", "Staffanstorp", "Lomma", "Eslöv", "Kävlinge", "Veberöd"],
  },
  helsingborg: {
    slug: "helsingborg",
    name: "Helsingborg",
    region: "Skåne",
    lat: 56.0465,
    lng: 12.6945,
    hub: "/helsingborg",
    nearby: ["Helsingborg", "Oceanhamnen", "Ängelholm", "Landskrona", "Höganäs", "Bjuv", "Åstorp", "Ramlösa"],
  },
  kristianstad: {
    slug: "kristianstad",
    name: "Kristianstad",
    region: "Skåne",
    lat: 56.0294,
    lng: 14.1567,
    hub: "/kristianstad",
    nearby: ["Kristianstad", "Åhus", "Bromölla", "Tollarp", "Degeberga", "Vä", "Önnestad", "Fjälkinge"],
  },
  hassleholm: {
    slug: "hassleholm",
    name: "Hässleholm",
    region: "Skåne",
    lat: 56.1589,
    lng: 13.7668,
    hub: "/hassleholm",
    nearby: ["Hässleholm", "Tyringe", "Bjärnum", "Vinslöv", "Sösdala", "Hästveda", "Vittsjö"],
  },
};

export const CITY_ORDER = ["malmo", "lund", "helsingborg", "kristianstad", "hassleholm"];

export const SERVICES = {
  hemsida: {
    slug: "hemsida",
    name: "Webbutveckling",
    label: "Webbyrå",
    badge: "Webbyrå",
    icon: "Code",
    serviceType: "Webbutveckling",
    priceLabel: "Hemsida från 3 900 kr",
    relatedService: "/tjanster/webbutveckling",
    intro:
      "Moderna, snabba hemsidor och e-handel som konverterar besökare till kunder — byggda i rätt teknik och SEO-optimerade från start.",
    features: [
      { icon: "Smartphone", title: "Responsiv design", desc: "Sajten ser perfekt ut och fungerar lika bra på mobil, surfplatta och dator." },
      { icon: "MousePointerClick", title: "Byggd för konvertering", desc: "Tydliga vägar till kontakt och köp som gör besökare till kunder." },
      { icon: "Gauge", title: "Snabb & Core Web Vitals", desc: "Optimerad laddtid som både Google och dina besökare belönar." },
      { icon: "Search", title: "SEO från start", desc: "Teknisk grund och struktur som gör att du syns i sök direkt." },
      { icon: "ShoppingCart", title: "E-handel & WooCommerce", desc: "Sälj online med en butik som är enkel att driva och växa." },
      { icon: "Pencil", title: "Du äger & uppdaterar", desc: "Enkelt CMS så du själv kan ändra texter och bilder — eller låt mig sköta det." },
    ],
    process: [
      { title: "Genomgång & skiss", desc: "Vi går igenom mål, målgrupp och innehåll. Du får en kostnadsfri skiss och fast pris." },
      { title: "Design", desc: "En design som speglar ditt varumärke och leder besökaren mot handling." },
      { title: "Bygg & innehåll", desc: "Jag bygger sajten i rätt teknik, fyller på innehåll och optimerar för sök." },
      { title: "Lansering & uppföljning", desc: "Vi lanserar, mäter och finslipar. Du kan sköta drift själv eller via managed hemsida." },
    ],
    faqs: [
      { q: "Hur lång tid tar det att bygga en hemsida?", a: "En enklare webbplats tar oftast 2–4 veckor. Större e-handels- och AI-projekt kan ta 1–3 månader. Du får alltid en tydlig tidplan i förslaget." },
      { q: "Bygger du i WordPress eller egen kod?", a: "Båda. Jag har 10+ års erfarenhet av WordPress och WooCommerce, men bygger gärna i modern kod (Next.js) när det ger en snabbare och säkrare sajt. Jag väljer den teknik som passar ditt behov bäst." },
      { q: "Kan jag uppdatera hemsidan själv efteråt?", a: "Ja. Du får ett enkelt CMS och en genomgång så att du kan ändra texter och bilder själv. Vill du slippa sköter jag det löpande via managed hemsida från 390 kr/mån." },
      { q: "Ingår SEO när du bygger hemsidan?", a: "Grundläggande teknisk SEO och rätt struktur ingår alltid. Vill du ha löpande sökmotoroptimering kombinerar vi gärna med min SEO-tjänst." },
    ],
    blog: [
      { title: "Vad kostar en hemsida?", href: "/blogg/vad-kostar-en-hemsida" },
      { title: "Så bygger du en hemsida som säljer", href: "/blogg/hemsida-som-saljer" },
      { title: "WordPress vs Next.js", href: "/blogg/wordpress-vs-nextjs" },
    ],
  },
  seo: {
    slug: "seo",
    name: "SEO",
    label: "SEO",
    badge: "SEO",
    icon: "Search",
    serviceType: "Sökmotoroptimering (SEO)",
    priceLabel: "SEO-audit från 3 900 kr",
    relatedService: "/tjanster/seo",
    intro:
      "Teknisk SEO, sökordsanalys och lokal optimering som ger mätbara resultat — fler rätt kunder hittar dig på Google.",
    features: [
      { icon: "FileSearch", title: "Teknisk SEO-audit", desc: "Fullständig genomgång av tekniska brister, laddtider, crawl-fel och indexering." },
      { icon: "Search", title: "Sökordsanalys & strategi", desc: "Identifiera vilka sökord som driver affär och prioritera rätt sidor." },
      { icon: "MapPin", title: "Lokal SEO & Google Maps", desc: "Syns lokalt med optimerad Google Business Profile, kartor och recensioner." },
      { icon: "Gauge", title: "Core Web Vitals", desc: "Snabbare sajt, bättre användarupplevelse och högre ranking." },
      { icon: "BarChart3", title: "Uppföljning & rapporter", desc: "Månadsrapporter med trafik, positioner och konkreta förbättringsförslag." },
      { icon: "Link2", title: "Intern länkstruktur", desc: "Optimera hur sidor kopplas ihop för bättre crawlning och användarflöde." },
    ],
    process: [
      { title: "SEO-audit", desc: "Jag kartlägger nuläget — teknik, innehåll, sökord och konkurrens." },
      { title: "Strategi & sökord", desc: "Vi prioriterar de sökord som faktiskt leder till affär för dig." },
      { title: "Optimering", desc: "Teknik, innehåll, lokal SEO och intern länkning åtgärdas steg för steg." },
      { title: "Uppföljning & rapporter", desc: "Du ser positioner och trafik växa i tydliga månadsrapporter." },
    ],
    faqs: [
      { q: "Hur lång tid tar det innan SEO ger resultat?", a: "Tekniska förbättringar syns ofta inom veckor. Sökordspositioner tar vanligtvis 2–6 månader att förbättra märkbart. Du får månadsrapporter så du ser framstegen." },
      { q: "Vad kostar SEO?", a: "En engångs SEO-audit kostar från 3 900 kr. Löpande SEO-arbete ingår i managed hemsida från 790 kr/mån. Större SEO-projekt prissätts efter scope." },
      { q: "Kan du garantera förstaplatsen på Google?", a: "Nej — ingen seriös byrå kan garantera en specifik placering. Det jag garanterar är ett gediget, transparent arbete mot rätt sökord, med tydlig uppföljning av hur det går." },
      { q: "Vad är skillnaden mellan SEO och Google Ads?", a: "SEO bygger organisk synlighet som håller över tid; Google Ads köper synlighet direkt. Ofta är kombinationen bäst — Ads ger trafik nu, SEO sänker kostnaden per kund på sikt." },
    ],
    blog: [
      { title: "SEO för småföretag", href: "/blogg/seo-for-smaforetag" },
      { title: "Lokal SEO-guide", href: "/blogg/lokal-seo-guide" },
      { title: "Guide: Google Business Profile", href: "/blogg/google-business-profile-guide" },
    ],
  },
  "google-ads": {
    slug: "google-ads",
    name: "Google Ads",
    label: "Google Ads",
    badge: "Google Ads",
    icon: "Megaphone",
    serviceType: "Google Ads & sökordsannonsering",
    priceLabel: "Arvode + annonsbudget",
    relatedService: "/tjanster/google-ads",
    intro:
      "Riktad sökordsannonsering som ger fler samtal, förfrågningar och köp — med transparent arvode och tydlig avkastning.",
    features: [
      { icon: "Megaphone", title: "Sökkampanjer", desc: "Annonser som möter kunden i exakt köpögonblick på Google." },
      { icon: "Target", title: "Konverteringsspårning", desc: "Mät samtal, formulär och köp så du vet vad varje krona ger." },
      { icon: "Gauge", title: "Smart budgivning", desc: "Få ut mest av budgeten med datadriven budstyrning." },
      { icon: "RefreshCw", title: "Remarketing", desc: "Påminn besökare som inte konverterade första gången." },
      { icon: "ShoppingCart", title: "Performance Max & Shopping", desc: "Nå köpare över hela Googles nätverk, inklusive e-handel." },
      { icon: "BarChart3", title: "Tydliga rapporter", desc: "Månadsrapport med kostnad per lead — inte bara klick." },
    ],
    process: [
      { title: "Mål & konton", desc: "Vi sätter mål, du äger kontot och vi sätter upp spårning korrekt." },
      { title: "Kampanjuppsättning", desc: "Annonsgrupper, sökord, annonstext och landningssidor byggs för konvertering." },
      { title: "Optimering", desc: "Bud, sökord och annonser finslipas löpande mot bästa avkastning." },
      { title: "Rapport & skalning", desc: "Du ser kostnad per lead och vi skalar det som fungerar." },
    ],
    faqs: [
      { q: "Vad kostar Google Ads?", a: "Du betalar din annonsbudget plus mitt arvode för uppsättning och löpande optimering. Allt är transparent — du äger kontot och ser exakt vart pengarna går." },
      { q: "Hur snabbt syns resultat?", a: "Till skillnad från SEO går Google Ads igång samma dag kampanjen lanseras. De första klicken och förfrågningarna kommer ofta inom dagar." },
      { q: "Tar du betalt utöver annonsbudgeten?", a: "Ja, ett transparent arvode för arbetet. Annonsbudgeten betalar du direkt till Google och äger kontot själv." },
      { q: "Hur mäter du resultat?", a: "Med konverteringsspårning på samtal, formulär och köp. Du får en månadsrapport som visar kostnad per lead och avkastning — inte bara visningar." },
    ],
    blog: [{ title: "Google Ads vs SEO — vad ska du välja?", href: "/blogg/google-ads-vs-seo" }],
  },
  "ai-automation": {
    slug: "ai-automation",
    name: "AI-automation",
    label: "AI-automation",
    badge: "AI & Automation",
    icon: "BrainCircuit",
    serviceType: "AI-automation",
    priceLabel: "Pris efter behov",
    relatedService: "/tjanster/ai-automation",
    intro:
      "Konkreta AI-verktyg som sparar tid — chatbottar, automatiska offert- och leadflöden och integrationer som sköter sig själva.",
    features: [
      { icon: "Bot", title: "AI-chatbot & kundtjänst", desc: "Svarar kunder dygnet runt på vanliga frågor och bokningar." },
      { icon: "Workflow", title: "Offert- & leadflöden", desc: "Fånga, kvalificera och följ upp förfrågningar automatiskt." },
      { icon: "Mail", title: "E-postautomation", desc: "Rätt mejl till rätt kund vid rätt tillfälle, utan handpåläggning." },
      { icon: "Plug", title: "Integrationer", desc: "Koppla ihop dina system (n8n, Zapier, API) så data flödar av sig själv." },
      { icon: "FileText", title: "Dokument & order", desc: "Läs av, sortera och registrera dokument och ordrar automatiskt." },
      { icon: "Sparkles", title: "Innehåll & rapporter", desc: "Låt AI ta fram utkast och sammanfattningar som sparar tid." },
    ],
    process: [
      { title: "Kartläggning", desc: "Vi identifierar var tiden försvinner och vad som är värt att automatisera." },
      { title: "Prioritering", desc: "Vi börjar med det som ger snabbast tidsvinst och lägst risk." },
      { title: "Bygg & integration", desc: "Jag bygger lösningen runt era befintliga verktyg och kopplar ihop systemen." },
      { title: "Drift & förbättring", desc: "Vi mäter, justerar och bygger vidare i takt med att nyttan växer." },
    ],
    faqs: [
      { q: "Vad är AI-automation?", a: "Konkreta verktyg som tar över repetitivt arbete — chatbottar, automatiska flöden och integrationer. Jag utgår alltid från ditt faktiska behov, inte hypade trender." },
      { q: "Vilka uppgifter kan automatiseras?", a: "Det mesta som är repetitivt: kundsvar, offerter, uppföljning, dataregistrering, rapporter och dokumenthantering. Vi börjar med det som sparar dig mest tid." },
      { q: "Behöver mitt företag vara tekniskt?", a: "Nej. Jag sköter tekniken och bygger lösningen runt era befintliga verktyg. Du behöver bara veta var skon klämmer — resten löser jag." },
      { q: "Vad kostar det att automatisera ett flöde?", a: "Det beror på omfattning. Enklare automationer är snabbt lönsamma; större integrationer prissätts efter scope. Du får alltid ett fast pris innan vi börjar." },
    ],
    blog: [{ title: "AI för företag — kom igång", href: "/blogg/ai-for-foretag" }],
  },
};

export const SERVICE_ORDER = ["hemsida", "seo", "google-ads", "ai-automation"];
