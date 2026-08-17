const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://www.stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "Webbutveckling", item: "https://www.stoltmarketing.se/tjanster/webbutveckling" },
  ],
};

export const metadata = {
  title: "Webbdesign & webbutveckling | Hemsida med fast månadspris",
  description:
    "Webbutveckling i Hässleholm. Moderna hemsidor och e-handel i Next.js, React och WordPress. 0 kr i startavgift, 1 190 kr/mån. Boka kostnadsfri genomgång.",
  alternates: { canonical: "https://www.stoltmarketing.se/tjanster/webbutveckling" },
  openGraph: {
    title: "Webbdesign & webbutveckling | Hemsida med fast månadspris",
    description: "Webbdesign och webbutveckling för företag i hela Sverige. Next.js, React, WordPress. 0 kr start, 1 190 kr/mån.",
    url: "https://www.stoltmarketing.se/tjanster/webbutveckling",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Webbutveckling & hemsidor",
  "serviceType": "Webbutveckling",
  "description": "Webbutveckling i Hässleholm. Moderna hemsidor och e-handelslösningar i Next.js, React och WordPress. 0 kr i startavgift, 1 190 kr/mån. Boka kostnadsfri genomgång.",
  "url": "https://www.stoltmarketing.se/tjanster/webbutveckling",
  "provider": {
    "@type": "ProfessionalService",
    "@id": "https://www.stoltmarketing.se/#organization",
    "name": "Stolt Marketing",
    "url": "https://www.stoltmarketing.se"
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
