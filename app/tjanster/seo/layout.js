const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://www.stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "SEO", item: "https://www.stoltmarketing.se/tjanster/seo" },
  ],
};

export const metadata = {
  title: "SEO-byrå & sökmotoroptimering för företag",
  description: "SEO-byrå för företag i hela Sverige. Sökmotoroptimering, teknisk SEO och lokal optimering som ger mätbara resultat och fler kunder. Boka kostnadsfri genomgång.",
  alternates: { canonical: "https://www.stoltmarketing.se/tjanster/seo" },
  openGraph: {
    title: "SEO-byrå & sökmotoroptimering för företag",
    description: "Sökmotoroptimering och teknisk SEO som ger fler kunder. SEO-byrå för företag i hela Sverige — mätbara resultat, fast pris.",
    url: "https://www.stoltmarketing.se/tjanster/seo",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO-byrå & sökmotoroptimering",
  "serviceType": "Sökmotoroptimering (SEO)",
  "description": "SEO-byrå för företag i hela Sverige. Sökmotoroptimering, teknisk SEO och lokal optimering som ger mätbara resultat och fler kunder.",
  "url": "https://www.stoltmarketing.se/tjanster/seo",
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
