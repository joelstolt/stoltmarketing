export const metadata = {
  title: "Webbyrå Lund — Hemsida, SEO & Webbutveckling | Stolt Marketing",
  description:
    "Digital byrå i Lund för innovatörer och tech-företag. Vi byggar moderna webbplatser och hanterar digital marknadsföring för startups från Ideon och Lund University.",
  alternates: {
    canonical: "https://stoltmarketing.se/lund",
  },
  openGraph: {
    title: "Webbyrå Lund — Hemsida, SEO & Webbutveckling",
    description:
      "Modern webbutveckling för tech-startups och företag i Lund och Ideon Science Park.",
    url: "https://stoltmarketing.se/lund",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Lund", item: "https://stoltmarketing.se/lund" },
  ],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stolt Marketing — Lund",
  description: "Digital byrå som bygger hemsidor, hanterar SEO och Google Ads för tech-startups i Lund",
  url: "https://stoltmarketing.se/lund",
  areaServed: ["Lund", "Ideon", "Skåne", "Sverige"],
  serviceType: ["Webbutveckling", "SEO", "Google Ads", "AI-automation"],
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {children}
    </>
  );
}
