import { HubFaqSchema } from "@/lib/local/hub-schema";
export const metadata = {
  title: "Webbyrå Kristianstad — Hemsida, SEO & Webbutveckling",
  description:
    "Digital byrå i Kristianstad. Vi bygger moderna webbplatser, hanterar SEO och digital marknadsföring för lokala företag. Kostnadsfri genomgång.",
  alternates: {
    canonical: "https://www.stoltmarketing.se/kristianstad",
  },
  openGraph: {
    title: "Webbyrå Kristianstad — Hemsida, SEO & Webbutveckling",
    description:
      "Modern webbutveckling och digital marknadsföring för företag i Kristianstad och Skåne.",
    url: "https://www.stoltmarketing.se/kristianstad",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Kristianstad", item: "https://www.stoltmarketing.se/kristianstad" },
  ],
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stolt Marketing — Kristianstad",
  description: "Digital byrå som bygger hemsidor, hanterar SEO och Google Ads i Kristianstad",
  url: "https://www.stoltmarketing.se/kristianstad",
  telephone: "",
  areaServed: ["Kristianstad", "Skåne", "Sverige"],
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
      <HubFaqSchema city="kristianstad" />
      {children}
    </>
  );
}
