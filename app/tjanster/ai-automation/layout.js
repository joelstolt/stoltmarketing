const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
    { "@type": "ListItem", position: 3, name: "AI & Automation", item: "https://stoltmarketing.se/tjanster/ai-automation" },
  ],
};

export const metadata = {
  title: "AI-automation Hässleholm — Smartare processer för företag",
  description:
    "AI-automation för företag i Hässleholm — chatbotar, automatiserade arbetsflöden, smarta verktyg. Spara tid och pengar. Boka kostnadsfri genomgång.",
  alternates: { canonical: "https://stoltmarketing.se/tjanster/ai-automation" },
  openGraph: {
    title: "AI-automation Hässleholm — Smartare processer för företag",
    description: "AI-automation för företag i Hässleholm. Chatbotar, arbetsflöden, effektivisering.",
    url: "https://stoltmarketing.se/tjanster/ai-automation",
  },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI-automation",
  "serviceType": "AI-automation",
  "description": "AI-automation för företag i Hässleholm — chatbotar, automatiserade arbetsflöden, smarta verktyg. Spara tid och pengar. Boka kostnadsfri genomgång.",
  "url": "https://stoltmarketing.se/tjanster/ai-automation",
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
