const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://www.stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "Google Ads", item: "https://www.stoltmarketing.se/tjanster/google-ads" },
  ],
};

export const metadata = {
  title: "Google Ads-byrå | Annonsering med fast månadspris",
  description:
    "Google Ads-förvaltning för företag i Hässleholm. Sökordsanalys, annonstext, optimering och rapportering. Fler samtal och förfrågningar. Boka kostnadsfri genomgång.",
  alternates: {
    canonical: "https://www.stoltmarketing.se/tjanster/google-ads",
  },
  openGraph: {
    title: "Google Ads-byrå | Annonsering med fast månadspris",
    description: "Google Ads-byrå för företag i hela Sverige. Kampanjer, optimering och rapporter med riktiga siffror.",
    url: "https://www.stoltmarketing.se/tjanster/google-ads",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Google Ads",
  "serviceType": "Google Ads & sökordsannonsering",
  "description": "Google Ads-förvaltning för företag i Hässleholm. Sökordsanalys, annonstext, optimering och rapportering. Fler samtal och förfrågningar. Boka kostnadsfri genomgång.",
  "url": "https://www.stoltmarketing.se/tjanster/google-ads",
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
