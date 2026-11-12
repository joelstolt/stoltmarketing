import HUB from "./hub-content.json";
import { CITIES, SITE, cityHubFaqs } from "./data";

export function hubMetadata(city) {
  const c = CITIES[city];
  const data = HUB[city];
  const title = `Webbyrå ${c.name}: hemsida, SEO, Google Ads och AI`;
  const description = data.intro;
  const url = `${SITE.url}${c.hub}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", locale: "sv_SE", siteName: SITE.name },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function hubFaqJsonLd(city) {
  const data = HUB[city];
  if (!data) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityHubFaqs(city).map((faq) => ({
      "@type": "Question", name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function hubJsonLd(city) {
  const c = CITIES[city];
  const data = HUB[city];
  const url = `${SITE.url}${c.hub}`;
  return [
    {
      "@context": "https://schema.org", "@type": "ProfessionalService",
      "@id": `${SITE.url}/#organization`, name: SITE.name, url: SITE.url,
      description: data.intro,
      address: { "@type": "PostalAddress", addressLocality: SITE.baseCity, addressRegion: SITE.region, addressCountry: SITE.country },
      areaServed: { "@type": "City", name: c.name },
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE.url },
        { "@type": "ListItem", position: 2, name: c.name, item: url },
      ],
    },
    hubFaqJsonLd(city),
  ];
}

// Endast hubbens page.js renderar detta. Ett föräldralayout får inte lägga
// FAQ eller brödsmulor på tjänstesidor som redan har egna scheman.
export function HubSchema({ city }) {
  return hubJsonLd(city).map((block, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
  ));
}

export function HubFaqSchema({ city }) {
  const block = hubFaqJsonLd(city);
  return block ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} /> : null;
}
