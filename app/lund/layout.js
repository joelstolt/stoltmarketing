import { HubFaqSchema } from "@/lib/local/hub-schema";
export const metadata = {
  title: "Webbyrå Lund — Hemsida, SEO & Webbutveckling",
  description:
    "Webbyrå i Lund för tech-företag och startups. Vi bygger moderna webbplatser och sköter SEO och marknadsföring för bolag kring Ideon och Lunds universitet.",
  alternates: {
    canonical: "https://www.stoltmarketing.se/lund",
  },
  openGraph: {
    title: "Webbyrå Lund — Hemsida, SEO & Webbutveckling",
    description:
      "Modern webbutveckling för tech-startups och företag i Lund och Ideon Science Park.",
    url: "https://www.stoltmarketing.se/lund",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Lund", item: "https://www.stoltmarketing.se/lund" },
  ],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stolt Marketing — Lund",
  description: "Digital byrå som bygger hemsidor, hanterar SEO och Google Ads för tech-startups i Lund",
  url: "https://www.stoltmarketing.se/lund",
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
      <HubFaqSchema city="lund" />
      {children}
    </>
  );
}
