// ============================================================
// Extra tjänstesidor (e-handel, WordPress), datadrivet, återanvändbart.
// Riktade mot lågkonkurrens-sökord med riktig volym (DataForSEO):
//   webbyrå e-handel (210/mån, KD 0), wordpress hemsida (1000/mån, KD 36),
//   webbyrå wordpress (260/mån, KD 9).
// page.js renderar <ServicePage data={...}/>, layout.js använder metadata + schema härifrån.
// ============================================================

import { SITE } from "./local/data";

export const EXTRA_SERVICES = {
  "e-handel": {
    slug: "e-handel",
    serviceName: "E-handel",
    serviceType: "E-handelsutveckling",
    metaTitle: "E-handel | Snabbare webbutik på 30 dagar, fast pris",
    metaDescription:
      "Vi bygger om din webbutik till en snabbare grund. Fast pris, 30 dagars leverans, betala vid go-live och garanti på gröna Core Web Vitals. Vi driver en egen butik på samma stack.",
    badge: "E-handel",
    h1: "Snabbare webbutik på 30 dagar. Betala när den är live.",
    subtitle:
      "En långsam butik kostar order varje dag: Googles och Deloittes mätningar visar att 0,1 sekund snabbare mobil ger 8,4 procent fler köp. Vi bygger om din butik till en snabbare grund, till fast pris, med garanti på resultatet. Och vi vågar lova det eftersom vi driver en egen e-handel på exakt samma stack.",
    bullets: ["Fast pris, 0 kr i förskott", "Leverans på 30 dagar", "Garanti: gröna Core Web Vitals"],
    intro: "Byggd för att träffa allt kunder brukar klaga på hos byråer: otydlig timfakturering, långsamma leveranser och inlåsning.",
    features: [
      { icon: "Gauge", title: "Hastighetsgaranti", desc: "Gröna Core Web Vitals på mobil vid leverans, annars fortsätter vi utan kostnad tills de är gröna." },
      { icon: "CreditCard", title: "Betala vid go-live", desc: "0 kr i förskott. Fast pris: 89 000 kr för ny butiksfront på din befintliga plattform, 149 000 kr för full flytt med produktmigrering." },
      { icon: "ShoppingCart", title: "Behåll det som fungerar", desc: "Shopify eller WooCommerce kan vara kvar som motor med kassan intakt. Vid flytt sätter vi upp kassa med Klarna och kort." },
      { icon: "Package", title: "SEO-säker flytt", desc: "301-redirects på alla adresser och bevarad sidstruktur, så att inga positioner tappas på vägen." },
      { icon: "Search", title: "AI-synlighet ingår", desc: "Strukturerad data, produktfeed och llms.txt. Vår egen butik fick sin senaste order via ChatGPT, mätt i orderdatan." },
      { icon: "Shield", title: "Ingen inlåsning", desc: "Koden ligger i ditt eget repo och du äger domän och innehåll. Drift efteråt 2 495 kr/mån utan bindningstid." },
    ],
    faqs: [
      { q: "Vad kostar det?", a: "89 000 kr för en ny butiksfront på din befintliga plattform (upp till 500 produkter, ett språk), 149 000 kr för full flytt från en äldre plattform inklusive produktmigrering, redirects och ny kassa. Allt utanför paketet prissätts fast innan vi börjar. Inget betalas förrän butiken är live." },
      { q: "Hur kan ni lova 30 dagar när branschen tar 8-16 veckor?", a: "Vi bygger på en egen, beprövad grund i stället för att börja från noll varje gång. Samma stack driver vår egen butik och våra kunders sajter, så tiden läggs på din design och ditt sortiment, inte på grundarbete." },
      { q: "Måste vi byta plattform?", a: "Nej. Kör du Shopify eller WooCommerce kan plattformen vara kvar som motor med produkter och kassa intakta, vi byter bara ut det kunderna möter. Full flytt gör vi när plattformen i sig är begränsningen." },
      { q: "Vad händer med vår Google-ranking vid en flytt?", a: "Varje gammal adress får en permanent vidarekoppling till sin nya motsvarighet och sidstrukturen bevaras. Vi verifierar allt mot den skarpa sajten efter lansering." },
      { q: "Hur vet vi att ni kan e-handel på riktigt?", a: "Vi driver en egen butik, batteriproffs.se, byggd på samma stack vi säljer: 96 av 100 i hastighet hos Google och riktiga ordrar, varav den senaste kom via ChatGPT. Hela caset finns att läsa på sajten." },
      { q: "Vi har en liten butik, är det här för stort för oss?", a: "Då passar Bas plus e-handel för 1 990 kr/mån utan startavgift bättre. Ombyggnadspaketet är för butiker som redan säljer och där hastigheten kostar riktiga pengar." },
    ],
    relatedLabel: "Eget case: Batteriproffs",
    relatedHref: "/projekt/batteriproffs",
    ctaTitle: "Vill du se din egen butik på den snabbare grunden?",
    ctaText: "Vi bygger ett klickbart utkast på ditt riktiga sortiment, kostnadsfritt och utan förpliktelser. Mejla eller boka en genomgång.",
  },
  wordpress: {
    slug: "wordpress",
    serviceName: "WordPress-hemsidor",
    serviceType: "WordPress-utveckling",
    metaTitle: "WordPress-hemsida | Snabb, säker och byggd av en webbyrå",
    metaDescription:
      "Webbyrå som bygger snabba, säkra WordPress-hemsidor du enkelt uppdaterar själv. SEO-optimerat, WooCommerce vid behov. 0 kr i startavgift, 1 190 kr/mån. Boka genomgång.",
    badge: "WordPress",
    h1: "WordPress-hemsida byggd av en webbyrå.",
    subtitle:
      "Snabba, säkra WordPress-sidor som du enkelt uppdaterar själv, byggda med rätt teknik, SEO från start och utan den långsamhet WordPress ofta får skylla på.",
    bullets: ["WordPress & WooCommerce", "Du uppdaterar själv", "Snabb & säker"],
    intro: "WordPress gjort rätt, snabbt, säkert och byggt för att synas på Google.",
    features: [
      { icon: "Globe", title: "WordPress & WooCommerce", desc: "Marknadens mest flexibla CMS — för allt från hemsida till webbshop." },
      { icon: "Pencil", title: "Du uppdaterar själv", desc: "Tydligt gränssnitt och genomgång så att du enkelt ändrar texter och bilder." },
      { icon: "Gauge", title: "Snabb & Core Web Vitals", desc: "Prestandaoptimerad så att sidan laddar snabbt — bra för både besökare och Google." },
      { icon: "Shield", title: "Säkerhet & backup", desc: "Uppdateringar, säkerhet och automatisk backup så att sidan håller tätt." },
      { icon: "Search", title: "SEO från start", desc: "Rätt struktur, metadata och teknik så att din WordPress-sida kan ranka." },
      { icon: "Wrench", title: "Drift & support", desc: "Underhållet ingår i månadspriset. Du behöver aldrig tänka på uppdateringar." },
    ],
    faqs: [
      { q: "Bygger ni i WordPress eller egen kod?", a: "Båda. Jag har 10+ års erfarenhet av WordPress och WooCommerce och bygger gärna i det när det passar. Behöver du maximal prestanda och säkerhet bygger jag i modern kod. Du får den teknik som passar ditt behov bäst." },
      { q: "Kan jag uppdatera WordPress-sidan själv?", a: "Ja. Du får ett tydligt CMS och en genomgång så att du enkelt kan ändra texter, bilder och sidor själv. Vill du slippa ingår drift och innehållsändringar redan i månadspriset." },
      { q: "Är WordPress säkert och snabbt?", a: "Med rätt bygge, ja. Jag sätter upp säkerhet, backup, uppdateringar och prestandaoptimering så att din WordPress-sida laddar snabbt och håller tätt, inte den långsamma, sårbara typ man ofta varnas för." },
      { q: "Vad kostar en WordPress-hemsida?", a: "0 kr i startavgift och 1 190 kr/mån, där drift, underhåll och support redan ingår. Har du en långsam WordPress i dag flyttar jag den utan kostnad när du tecknar drift i 12 månader." },
    ],
    relatedLabel: "Webbutveckling",
    relatedHref: "/tjanster/webbutveckling",
    ctaTitle: "Vill du ha en WordPress-sida som faktiskt presterar?",
    ctaText: "Boka en kostnadsfri genomgång så går vi igenom ditt behov och hittar rätt upplägg.",
  },
  "facebook-annonsering": {
    slug: "facebook-annonsering",
    serviceName: "Facebook- och Instagram-annonsering",
    serviceType: "Annonsering i sociala medier",
    metaTitle: "Facebook-annonsering | Annonsera på Facebook & Instagram",
    metaDescription:
      "Byrå för Facebook-annonsering. Kampanjer på Facebook och Instagram som ger riktiga förfrågningar, inte bara likes. Fast månadspris, ingen bindning till stora budgetar. Boka genomgång.",
    badge: "Facebook-annonsering",
    h1: "Annonsera på Facebook och Instagram utan att elda pengar.",
    subtitle:
      "Jag bygger Meta-kampanjer som är riggade för förfrågningar: rätt målgrupp, annonser som stoppar tummen och en landningssida som tar emot. Du ser exakt vad varje lead kostar.",
    bullets: ["Facebook & Instagram Ads", "Leads, inte likes", "Tydlig kostnad per förfrågan"],
    intro: "Hela kedjan från målgrupp till mätbart lead, inte bara boostade inlägg.",
    features: [
      { icon: "Target", title: "Målgrupper som träffar", desc: "Intressen, geografi och lookalikes på dina bästa kunder i stället för breda gissningar." },
      { icon: "Image", title: "Annonser som stoppar scrollen", desc: "Bild, video och copy testas mot varandra tills vi vet vad din målgrupp reagerar på." },
      { icon: "MousePointerClick", title: "Landningssida som konverterar", desc: "Annonsen är halva jobbet. Jag ser till att sidan den leder till faktiskt tar emot förfrågan." },
      { icon: "LineChart", title: "Kostnad per lead, svart på vitt", desc: "Du får rapport på vad en förfrågan kostar, inte bara räckvidd och klick." },
      { icon: "RefreshCw", title: "Löpande optimering", desc: "Budgeten flyttas varje vecka till de annonser och målgrupper som levererar." },
      { icon: "ShieldCheck", title: "Pixel och mätning rätt uppsatt", desc: "Konverteringsspårning från start så att Meta lär sig på riktiga leads, inte sidvisningar." },
    ],
    faqs: [
      { q: "Vad kostar det att annonsera på Facebook?", a: "Två delar: annonsbudgeten som går till Meta och arvodet för att sköta kampanjerna. En rimlig startbudget för ett lokalt företag är 3 000 till 6 000 kr i månaden till Meta. Hanteringen ingår i Spets, 2 990 kr/mån, tillsammans med Google Ads och SEO." },
      { q: "Facebook eller Instagram, vad passar mitt företag?", a: "Oftast båda. Annonserna körs i samma system och Meta fördelar budgeten dit din målgrupp faktiskt svarar. B2C med visuella tjänster lutar åt Instagram, lokala tjänster och äldre målgrupper åt Facebook. Vi ser svaret i datan efter ett par veckor." },
      { q: "Hur snabbt ser jag resultat?", a: "Annonserna börjar visas direkt, men räkna med 2 till 4 veckor innan kampanjen är intrimmad. Meta behöver ett antal konverteringar för att lära sig vilka som blir leads, och jag behöver data för att sortera bort det som inte fungerar." },
      { q: "Räcker det inte att boosta inlägg?", a: "Boostade inlägg optimeras mot interaktion, inte mot förfrågningar. Det ger likes men sällan kunder. Riktiga kampanjer i Ads Manager kan optimeras mot leads, mäta kostnad per förfrågan och uteslutas till exakt målgrupp. Det är skillnaden mellan att synas och att sälja." },
      { q: "Vad behöver du från mig för att komma igång?", a: "Tillgång till din Facebook-sida och ditt annonskonto, eller så sätter jag upp allt från grunden. Sedan en halvtimmes genomgång av vilka kunder du vill ha fler av. Resten sköter jag." },
    ],
    relatedLabel: "Google Ads",
    relatedHref: "/tjanster/google-ads",
    ctaTitle: "Vill du veta vad ett lead från Facebook skulle kosta dig?",
    ctaText: "Boka en kostnadsfri genomgång så räknar vi på din marknad och sätter en plan.",
  },
  "ai-synlighet": {
    slug: "ai-synlighet",
    serviceName: "AI-synlighet och AI-SEO",
    serviceType: "AI-sökoptimering (AI-SEO)",
    metaTitle: "AI-SEO | Syns när kunder frågar ChatGPT och Google AI",
    metaDescription:
      "AI-SEO som gör att ditt företag nämns och citeras när kunder frågar ChatGPT, Google AI och andra AI-assistenter. Mätbar AI-synlighet, byggd på riktig data. Boka genomgång.",
    badge: "AI-synlighet",
    h1: "Syns när dina kunder frågar AI i stället för att googla.",
    subtitle:
      "Allt fler frågar ChatGPT och Googles AI-svar innan de väljer leverantör. Jag mäter var du syns i dag, bygger innehållet AI-motorerna citerar och följer upp med riktiga siffror.",
    bullets: ["Mätning av AI-synlighet", "Innehåll som AI citerar", "Teknisk AI-läsbarhet"],
    intro: "AI-sök är inte magi. Det är läsbarhet, struktur och innehåll som svarar på riktiga frågor.",
    features: [
      { icon: "Radar", title: "Mätning före allt annat", desc: "Jag testar vad AI-assistenterna faktiskt svarar om din bransch i dag och var du nämns. Det blir nollpunkten vi mäter mot." },
      { icon: "FileSearch", title: "Teknisk AI-läsbarhet", desc: "Rendering, struktur och data som gör att AI-motorer kan läsa hela din sajt, inte halva." },
      { icon: "MessageSquare", title: "Innehåll AI vill citera", desc: "Prissidor, faktasidor och svar på de frågor kunder ställer till AI. Det är sådant som citeras." },
      { icon: "Search", title: "Bygger på din vanliga SEO", desc: "Nästan alla AI-citat går till sidor som redan rankar organiskt. AI-synlighet och SEO är samma grund." },
      { icon: "BarChart3", title: "Uppföljning med siffror", desc: "Du får svart på vitt hur ofta du nämns, i vilka frågor och mot vilka konkurrenter." },
      { icon: "Cpu", title: "Rätt strukturerad data", desc: "Schema och maskinläsbar fakta om företaget så att AI-motorerna får siffrorna rätt." },
    ],
    faqs: [
      { q: "Vad är AI-SEO?", a: "Arbetet med att synas i AI-drivna svar: Googles AI-översikter, ChatGPT, Perplexity och liknande. I praktiken handlar det om tre saker: att din sajt är tekniskt läsbar för AI, att du har innehåll som besvarar frågorna folk ställer, och att du rankar organiskt, eftersom AI-svaren till största del citerar sidor som redan syns i sök." },
      { q: "Är AI-sök stort nog att bry sig om?", a: "Volymerna är fortfarande små men växer snabbt, och svaren syns redan mitt i köpresan: Googles AI-svar visas i dag på de flesta prisfrågor och på allt fler tjänstesökningar. Att bygga positionen nu är billigt. Att ta den i efterhand blir det inte." },
      { q: "Hur blir man citerad av AI?", a: "Det finns ingen genväg. Mätningar visar att de allra flesta AI-citat går till sidor som rankar i organiska topp 10 på samma fråga. Sidor med konkreta prisspann och aktuellt årtal citeras oftare. Därför börjar AI-synlighet alltid i vanlig SEO plus rätt sorts innehåll." },
      { q: "Hur mäter du AI-synlighet?", a: "Jag ställer de frågor dina kunder ställer till AI-motorerna, systematiskt och återkommande, och registrerar när du och dina konkurrenter nämns eller citeras. Du får en nollmätning först och sedan utvecklingen över tid." },
      { q: "Vad kostar AI-synlighet?", a: "Ingår i Spets, 2 990 kr/mån, som en del av SEO-arbetet. En engångsmätning med rapport över ditt AI-nuläge kostar 4 900 kr och är en bra start om du vill se läget innan du bestämmer dig." },
    ],
    relatedLabel: "SEO",
    relatedHref: "/tjanster/seo",
    ctaTitle: "Vill du veta vad AI säger om din bransch i dag?",
    ctaText: "Boka en kostnadsfri genomgång så gör jag en första mätning och visar var du står.",
  },
};

export function extraServiceMetadata(key) {
  const s = EXTRA_SERVICES[key];
  const url = `${SITE.url}/tjanster/${s.slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url,
      type: "website",
      locale: "sv_SE",
      siteName: SITE.name,
    },
  };
}

export function extraServiceJsonLd(key) {
  const s = EXTRA_SERVICES[key];
  const url = `${SITE.url}/tjanster/${s.slug}`;
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.serviceName,
    serviceType: s.serviceType,
    description: s.metaDescription,
    url,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Skåne" },
      { "@type": "Country", name: "Sverige" },
    ],
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Tjänster", item: `${SITE.url}/tjanster` },
      { "@type": "ListItem", position: 3, name: s.badge, item: url },
    ],
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return [serviceLd, breadcrumb, faqPage];
}

export function ExtraServiceSchema({ serviceKey }) {
  return extraServiceJsonLd(serviceKey).map((b, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }} />
  ));
}
