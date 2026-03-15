const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Om mig", item: "https://stoltmarketing.se/om" },
  ],
};

export const metadata = {
  title: "Om mig — Joel Stolt, Digital konsult & AI-specialist",
  description:
    "10+ års erfarenhet av webbutveckling, SEO och AI. Från WordPress till Next.js, från lokala företag till AcadeMedia. Baserad i Hässleholm, jobbar i hela Sverige.",
  alternates: {
    canonical: "https://stoltmarketing.se/om",
  },
  openGraph: {
    title: "Om mig — Joel Stolt, Digital konsult i Hässleholm",
    description: "10+ års erfarenhet av webbutveckling, SEO och AI. Baserad i Hässleholm, kunder i hela Sverige.",
    url: "https://stoltmarketing.se/om",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
