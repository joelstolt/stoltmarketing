const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Tjänster", item: "https://stoltmarketing.se/tjanster" },
  ],
};

export const metadata = {
  title: "Tjänster Hässleholm — Webb, SEO, AI & Google Ads",
  description:
    "Webbutveckling, SEO, AI-automation, Google Ads och managed hemsida för företag i Hässleholm. Allt från en digital konsult. Boka kostnadsfri genomgång.",
  alternates: {
    canonical: "https://stoltmarketing.se/tjanster",
  },
  openGraph: {
    title: "Tjänster Hässleholm — Webb, SEO, AI & Google Ads",
    description:
      "Webbutveckling, SEO, AI-automation och Google Ads. En konsult, hela leveransen.",
    url: "https://stoltmarketing.se/tjanster",
  },
};

export default function TjansterLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
