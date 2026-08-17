const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://www.stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "Managed Hemsida", item: "https://www.stoltmarketing.se/tjanster/managed-hemsida" },
  ],
};

export const metadata = {
  title: "Managed hemsida | Drift, säkerhet och support som ingår",
  description:
    "Managed hemsida för företag i Hässleholm. Drift, säkerhet, uppdateringar och innehållsändringar för 1 190 kr/mån, utan startavgift. Boka kostnadsfri genomgång.",
  alternates: { canonical: "https://www.stoltmarketing.se/tjanster/managed-hemsida" },
  openGraph: {
    title: "Managed hemsida | Drift, säkerhet och support som ingår",
    description: "Hemsida med drift, säkerhet och uppdateringar som ingår. 0 kr start, 1 190 kr/mån.",
    url: "https://www.stoltmarketing.se/tjanster/managed-hemsida",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Managed hemsida",
  "serviceType": "Drift, underhåll & support",
  "description": "Managed hemsida för företag i Hässleholm. Drift, säkerhet, uppdateringar och innehållsändringar för 1 190 kr/mån, utan startavgift. Boka kostnadsfri genomgång.",
  "url": "https://www.stoltmarketing.se/tjanster/managed-hemsida",
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
