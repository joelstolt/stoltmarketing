const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "SEO", item: "https://stoltmarketing.se/tjanster/seo" },
  ],
};

export const metadata = {
  title: "SEO Hässleholm — Synlighet som ger fler kunder",
  description: "SEO-tjänster i Hässleholm för att dina kunder hittar dig på Google. Teknisk SEO, sökordsanalys, lokal optimering. Mätbara resultat. Boka kostnadsfri genomgång.",
  alternates: { canonical: "https://stoltmarketing.se/tjanster/seo" },
  openGraph: {
    title: "SEO Hässleholm — Synlighet som ger fler kunder",
    description: "Sökmotoroptimering för företag i Hässleholm. Teknisk SEO, lokal optimering, mätbara resultat.",
    url: "https://stoltmarketing.se/tjanster/seo",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Sökmotoroptimering (SEO)",
  "serviceType": "Sökmotoroptimering (SEO)",
  "description": "SEO-tjänster i Hässleholm för att dina kunder hittar dig på Google. Teknisk SEO, sökordsanalys, lokal optimering. Mätbara resultat. Boka kostnadsfri genomgång.",
  "url": "https://stoltmarketing.se/tjanster/seo",
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
