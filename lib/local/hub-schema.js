// FAQPage-schema för stadshubbarna (deep content + FAQ ligger i hub-content.json).
import HUB from "./hub-content.json";

export function hubFaqJsonLd(city) {
  const d = HUB[city];
  if (!d) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function HubFaqSchema({ city }) {
  const ld = hubFaqJsonLd(city);
  if (!ld) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
