const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "Webbutveckling", item: "https://stoltmarketing.se/tjanster/webbutveckling" },
  ],
};

export const metadata = {
  title: "Webbutveckling Hässleholm — Moderna hemsidor för företag",
  description:
    "Webbutveckling i Hässleholm — moderna hemsidor och e-handel i Next.js, React och WordPress. Snabba, responsiva sajter från 3 900 kr. Boka kostnadsfri genomgång.",
  alternates: { canonical: "https://stoltmarketing.se/tjanster/webbutveckling" },
  openGraph: {
    title: "Webbutveckling Hässleholm — Moderna hemsidor för företag",
    description: "Webbutveckling för företag i Hässleholm. Next.js, React, WordPress. Från 3 900 kr.",
    url: "https://stoltmarketing.se/tjanster/webbutveckling",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Webbutveckling & hemsidor",
  "serviceType": "Webbutveckling",
  "description": "Webbutveckling i Hässleholm — moderna hemsidor och e-handelslösningar i Next.js, React, WordPress. Snabba, responsiva sajter. Från 3 900 kr. Boka kostnadsfri genomgång.",
  "url": "https://stoltmarketing.se/tjanster/webbutveckling",
  "provider": {
    "@type": "ProfessionalService",
    "@id": "https://stoltmarketing.se/#organization",
    "name": "Stolt Marketing",
    "url": "https://stoltmarketing.se"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Skåne"
    },
    {
      "@type": "Country",
      "name": "Sverige"
    }
  ]
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      {children}
    </>
  );
}
