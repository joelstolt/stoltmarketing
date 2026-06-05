// ============================================================
// Extra tjänstesidor (e-handel, WordPress) — datadrivet, återanvändbart.
// Riktade mot lågkonkurrens-sökord med riktig volym (DataForSEO):
//   webbyrå e-handel (210/mån, KD 0), wordpress hemsida (1000/mån, KD 36),
//   webbyrå wordpress (260/mån, KD 9).
// page.js renderar <ServicePage data={...}/>, layout.js använder metadata + schema härifrån.
// ============================================================

import { SITE } from "./local/data";

export const EXTRA_SERVICES = {
  "e-handel": {
    slug: "e-handel",
    serviceName: "E-handel & webbutveckling",
    serviceType: "E-handelsutveckling",
    metaTitle: "E-handel & webbyrå — bygg en butik som säljer",
    metaDescription:
      "Webbyrå som bygger e-handel i WooCommerce — snabb checkout, Klarna & Swish, SEO-optimerade produktsidor. Fast pris från 3 900 kr. Boka kostnadsfri genomgång.",
    badge: "E-handel",
    h1: "E-handel som säljer — inte bara visar produkter.",
    subtitle:
      "Som webbyrå bygger jag e-handel i WooCommerce som laddar snabbt, konverterar besökare till köp och är enkel att driva. SEO-optimerad från start.",
    bullets: ["WooCommerce & WordPress", "Klarna, Swish & kort", "SEO för produktsidor"],
    intro: "Allt som krävs för att din butik ska sälja — från snabb checkout till produkt-SEO.",
    features: [
      { icon: "ShoppingCart", title: "WooCommerce & WordPress", desc: "Flexibel e-handel du äger själv och enkelt kan växa med." },
      { icon: "CreditCard", title: "Klarna, Swish & kort", desc: "De betallösningar dina kunder förväntar sig — fler köp går i mål." },
      { icon: "Gauge", title: "Snabb checkout", desc: "Optimerad köpresa och laddtid så att färre lämnar kundvagnen." },
      { icon: "Package", title: "Produkt- & lagerhantering", desc: "Enkel administration av produkter, varianter, lager och frakt." },
      { icon: "Search", title: "SEO för produktsidor", desc: "Rätt struktur på produkt- och kategorisidor så att butiken rankar." },
      { icon: "Smartphone", title: "Mobiloptimerat köp", desc: "De flesta handlar i mobilen — butiken byggs mobil-först." },
    ],
    faqs: [
      { q: "Vad kostar en e-handel?", a: "Det beror på omfattning. En enklare WooCommerce-butik startar från 3 900 kr; större lösningar med produktfeed, integrationer och betalflöden prissätts efter scope. Du får fast pris innan vi börjar." },
      { q: "Vilken e-handelsplattform använder ni?", a: "Oftast WooCommerce (WordPress) — flexibelt, du äger din data och det är enkelt att driva. För större behov bygger jag även i modern kod. Jag väljer det som passar din affär bäst." },
      { q: "Kan kunderna betala med Swish och Klarna?", a: "Ja. Jag kopplar in de betallösningar dina kunder förväntar sig — Klarna, Swish, kort och faktura — så att fler köp går i mål." },
      { q: "Ingår SEO för produktsidorna?", a: "Ja, grundläggande teknisk SEO och rätt struktur för produkt- och kategorisidor ingår så att din butik kan ranka. Vill du ha löpande SEO kombinerar vi med min SEO-tjänst." },
    ],
    relatedLabel: "Webbutveckling",
    relatedHref: "/tjanster/webbutveckling",
    ctaTitle: "Redo att sälja mer online?",
    ctaText: "Boka en kostnadsfri genomgång så går vi igenom din butik och var de största möjligheterna finns.",
  },
  wordpress: {
    slug: "wordpress",
    serviceName: "WordPress-hemsidor",
    serviceType: "WordPress-utveckling",
    metaTitle: "WordPress-hemsida — byggd av en webbyrå",
    metaDescription:
      "Webbyrå som bygger snabba, säkra WordPress-hemsidor du enkelt uppdaterar själv. SEO-optimerat, WooCommerce vid behov. Fast pris från 3 900 kr. Boka genomgång.",
    badge: "WordPress",
    h1: "WordPress-hemsida byggd av en webbyrå.",
    subtitle:
      "Snabba, säkra WordPress-sidor som du enkelt uppdaterar själv — byggda med rätt teknik, SEO från start och utan den långsamhet WordPress ofta får skylla på.",
    bullets: ["WordPress & WooCommerce", "Du uppdaterar själv", "Snabb & säker"],
    intro: "WordPress gjort rätt — snabbt, säkert och byggt för att synas på Google.",
    features: [
      { icon: "Globe", title: "WordPress & WooCommerce", desc: "Marknadens mest flexibla CMS — för allt från hemsida till webbshop." },
      { icon: "Pencil", title: "Du uppdaterar själv", desc: "Tydligt gränssnitt och genomgång så att du enkelt ändrar texter och bilder." },
      { icon: "Gauge", title: "Snabb & Core Web Vitals", desc: "Prestandaoptimerad så att sidan laddar snabbt — bra för både besökare och Google." },
      { icon: "Shield", title: "Säkerhet & backup", desc: "Uppdateringar, säkerhet och automatisk backup så att sidan håller tätt." },
      { icon: "Search", title: "SEO från start", desc: "Rätt struktur, metadata och teknik så att din WordPress-sida kan ranka." },
      { icon: "Wrench", title: "Drift & support", desc: "Vill du slippa underhållet sköter jag det löpande från 390 kr/mån." },
    ],
    faqs: [
      { q: "Bygger ni i WordPress eller egen kod?", a: "Båda. Jag har 10+ års erfarenhet av WordPress och WooCommerce och bygger gärna i det när det passar. Behöver du maximal prestanda och säkerhet bygger jag i modern kod. Du får den teknik som passar ditt behov bäst." },
      { q: "Kan jag uppdatera WordPress-sidan själv?", a: "Ja. Du får ett tydligt CMS och en genomgång så att du enkelt kan ändra texter, bilder och sidor själv. Vill du slippa sköter jag det löpande via managed hemsida från 390 kr/mån." },
      { q: "Är WordPress säkert och snabbt?", a: "Med rätt bygge, ja. Jag sätter upp säkerhet, backup, uppdateringar och prestandaoptimering så att din WordPress-sida laddar snabbt och håller tätt — inte den långsamma, sårbara typ man ofta varnas för." },
      { q: "Vad kostar en WordPress-hemsida?", a: "Från 3 900 kr med fast pris innan vi börjar. Löpande drift och underhåll finns från 390 kr/mån. Större sidor och webbshoppar prissätts efter scope." },
    ],
    relatedLabel: "Webbutveckling",
    relatedHref: "/tjanster/webbutveckling",
    ctaTitle: "Vill du ha en WordPress-sida som faktiskt presterar?",
    ctaText: "Boka en kostnadsfri genomgång så går vi igenom ditt behov och hittar rätt upplägg.",
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
