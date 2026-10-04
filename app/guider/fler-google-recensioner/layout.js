export const metadata = {
  "title": "Fler Google-recensioner: en neutral rutin efter varje uppdrag",
  "description": "Hämta Googles recensionslänk och be verkliga kunder om ett ärligt omdöme. Använd samma rutin oavsett om kunden är nöjd. Ge inga belöningar och påverka inte betyget.",
  "alternates": {
    "canonical": "https://www.stoltmarketing.se/guider/fler-google-recensioner"
  },
  "openGraph": {
    "title": "Fler Google-recensioner: en neutral rutin efter varje uppdrag",
    "description": "Hämta Googles recensionslänk och be verkliga kunder om ett ärligt omdöme. Använd samma rutin oavsett om kunden är nöjd. Ge inga belöningar och påverka inte betyget.",
    "url": "https://www.stoltmarketing.se/guider/fler-google-recensioner",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Fler Google-recensioner: en neutral rutin efter varje uppdrag",
    "description": "Hämta Googles recensionslänk och be verkliga kunder om ett ärligt omdöme. Använd samma rutin oavsett om kunden är nöjd. Ge inga belöningar och påverka inte betyget."
  }
};
const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "image": [
    "https://www.stoltmarketing.se/og-image.png"
  ],
  "mainEntityOfPage": "https://www.stoltmarketing.se/guider/fler-google-recensioner",
  "inLanguage": "sv-SE",
  "headline": "Fler Google-recensioner: en neutral rutin efter varje uppdrag",
  "description": "Hämta Googles recensionslänk och be verkliga kunder om ett ärligt omdöme. Använd samma rutin oavsett om kunden är nöjd. Ge inga belöningar och påverka inte betyget.",
  "author": {
    "@type": "Person",
    "name": "Joel Stolt"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stolt Marketing",
    "url": "https://www.stoltmarketing.se"
  },
  "datePublished": "2026-08-17",
  "dateModified": "2026-10-04"
};
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Hem",
      "item": "https://www.stoltmarketing.se"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guider",
      "item": "https://www.stoltmarketing.se/guider"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Fler Google-recensioner: en neutral rutin efter varje uppdrag",
      "item": "https://www.stoltmarketing.se/guider/fler-google-recensioner"
    }
  ]
};
export default function Layout({ children }) {
  return <>{[article,breadcrumb].map((schema,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}{children}</>;
}
