// ============================================================
// Metadata + JSON-LD-byggare för ort × tjänst-sidor.
// Används server-side i varje /[ort]/[tjänst]/layout.js.
// ============================================================

import { CITIES, SERVICES, SITE } from "./data";
import COMBOS from "./combos.json";

export function getCombo(service, city) {
  return COMBOS[service] && COMBOS[service][city];
}

export function cityServiceFaqs(service, city) {
  const s = SERVICES[service];
  const combo = getCombo(service, city);
  return combo ? [...s.faqs, combo.cityFaq] : s.faqs;
}

export function cityServicePath(service, city) {
  return `${SITE.url}/${city}/${service}`;
}

export function cityServiceMetadata(service, city) {
  const combo = getCombo(service, city);
  const path = cityServicePath(service, city);
  return {
    title: combo.metaTitle,
    description: combo.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: combo.metaTitle,
      description: combo.metaDescription,
      url: path,
      type: "website",
      locale: "sv_SE",
      siteName: SITE.name,
    },
  };
}

export function cityServiceJsonLd(service, city) {
  const c = CITIES[city];
  const s = SERVICES[service];
  const combo = getCombo(service, city);
  const path = cityServicePath(service, city);

  const provider = {
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    image: SITE.image,
    email: SITE.email,
    priceRange: SITE.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.baseCity,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${path}#service`,
    name: combo.h1,
    serviceType: s.serviceType,
    description: combo.metaDescription,
    url: path,
    provider,
    areaServed: {
      "@type": "City",
      name: c.name,
      geo: { "@type": "GeoCoordinates", latitude: c.lat, longitude: c.lng },
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: SITE.url },
      { "@type": "ListItem", position: 2, name: c.name, item: `${SITE.url}${c.hub}` },
      { "@type": "ListItem", position: 3, name: s.name, item: path },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityServiceFaqs(service, city).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [serviceLd, breadcrumb, faqPage];
}

// Server-komponent som matar ut alla JSON-LD-block för en ort × tjänst-sida.
export function CityServiceSchema({ service, city }) {
  const blocks = cityServiceJsonLd(service, city);
  return blocks.map((block, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
    />
  ));
}
