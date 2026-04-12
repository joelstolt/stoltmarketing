export const metadata = {
  title: "Webbyrå Helsingborg — Hemsida, SEO & Webbutveckling | Stolt Marketing",
  description:
    "Digital byrå i Helsingborg. Vi bygger moderna webbplatser, hanterar SEO och digital marknadsföring för lokala företag och startups.",
  alternates: {
    canonical: "https://stoltmarketing.se/helsingborg",
  },
  openGraph: {
    title: "Webbyrå Helsingborg — Hemsida, SEO & Webbutveckling",
    description:
      "Modern webbutveckling och digital marknadsföring för företag i Helsingborg.",
    url: "https://stoltmarketing.se/helsingborg",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Helsingborg", item: "https://stoltmarketing.se/helsingborg" },
  ],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stolt Marketing — Helsingborg",
  description: "Digital byrå som bygger hemsidor, hanterar SEO och Google Ads i Helsingborg",
  url: "https://stoltmarketing.se/helsingborg",
  areaServed: ["Helsingborg", "Skåne", "Sverige"],
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
