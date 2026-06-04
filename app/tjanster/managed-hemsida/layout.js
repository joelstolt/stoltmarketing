const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "Managed Hemsida", item: "https://stoltmarketing.se/tjanster/managed-hemsida" },
  ],
};

export const metadata = {
  title: "Managed Hemsida Hässleholm — Drift, säkerhet & support",
  description:
    "Managed hemsida för företag i Hässleholm — drift, säkerhet, uppdateringar, innehållsändringar. Från 390 kr/mån. Boka kostnadsfri genomgång.",
  alternates: { canonical: "https://stoltmarketing.se/tjanster/managed-hemsida" },
  openGraph: {
    title: "Managed Hemsida Hässleholm — Drift, säkerhet & support",
    description: "Hemsida med drift, säkerhet, uppdateringar. Från 390 kr/mån.",
    url: "https://stoltmarketing.se/tjanster/managed-hemsida",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Managed hemsida",
  "serviceType": "Drift, underhåll & support",
  "description": "Managed hemsida för företag i Hässleholm — drift, säkerhet, uppdateringar, innehållsändringar. Från 390 kr/mån. Boka kostnadsfri genomgång.",
  "url": "https://stoltmarketing.se/tjanster/managed-hemsida",
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
