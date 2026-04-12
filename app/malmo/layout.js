export const metadata = {
  title: "Webbyrå Malmö — Hemsida, SEO & Webbutveckling | Stolt Marketing",
  description:
    "Digital byrå i Malmö. Vi bygger moderna webbplatser, hanterar SEO och digital marknadsföring för startups och etablerade företag.",
  alternates: {
    canonical: "https://stoltmarketing.se/malmo",
  },
  openGraph: {
    title: "Webbyrå Malmö — Hemsida, SEO & Webbutveckling",
    description:
      "Modern webbutveckling och digital marknadsföring för företag i Malmö och Öresund-regionen.",
    url: "https://stoltmarketing.se/malmo",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Malmö", item: "https://stoltmarketing.se/malmo" },
  ],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stolt Marketing — Malmö",
  description: "Digital byrå som bygger hemsidor, hanterar SEO och Google Ads i Malmö",
  url: "https://stoltmarketing.se/malmo",
  areaServed: ["Malmö", "Öresund", "Skåne", "Sverige"],
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
