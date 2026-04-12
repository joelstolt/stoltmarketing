export const metadata = {
  title: "Google-ads Lund",
  description: "Digital tjänst för företag i Lund",
  alternates: {
    canonical: "https://stoltmarketing.se/lund/google-ads",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Lund", item: "https://stoltmarketing.se/lund" },
    { "@type": "ListItem", position: 3, name: "Google-ads", item: "https://stoltmarketing.se/lund/google-ads" },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
