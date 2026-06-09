import { HubFaqSchema } from "@/lib/local/hub-schema";
export const metadata = {
  title: "Webbyrå i Hässleholm — webb, SEO, Google Ads & AI",
  description:
    "Digital byrå i Hässleholm. Vi bygger moderna hemsidor, sköter SEO, Google Ads och AI-automation för företag i Hässleholm och nordöstra Skåne.",
  alternates: {
    canonical: "https://www.stoltmarketing.se/hassleholm",
  },
  openGraph: {
    title: "Webbyrå i Hässleholm — webb, SEO, Google Ads & AI",
    description:
      "Modern webbutveckling och digital marknadsföring för företag i Hässleholm och nordöstra Skåne.",
    url: "https://www.stoltmarketing.se/hassleholm",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Hässleholm", item: "https://www.stoltmarketing.se/hassleholm" },
  ],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stolt Marketing — Hässleholm",
  description: "Digital byrå som bygger hemsidor, sköter SEO och Google Ads i Hässleholm",
  url: "https://www.stoltmarketing.se/hassleholm",
  areaServed: ["Hässleholm", "Skåne", "Sverige"],
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
      <HubFaqSchema city="hassleholm" />
      {children}
    </>
  );
}
