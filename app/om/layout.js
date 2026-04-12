const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Om mig", item: "https://stoltmarketing.se/om" },
  ],
};

export const metadata = {
  title: "Om Joel Stolt — Digital konsult Hässleholm, Skåne",
  description:
    "Joel Stolt — digital konsult i Hässleholm med 10+ års erfarenhet av webbutveckling, SEO och AI. Kunder från AcadeMedia till lokala småföretag i hela Sverige.",
  alternates: {
    canonical: "https://stoltmarketing.se/om",
  },
  openGraph: {
    title: "Om Joel Stolt — Digital konsult & AI-specialist i Hässleholm",
    description: "10+ års erfarenhet. Webbutveckling, SEO, AI. Baserad i Hässleholm, jobbar i hela Sverige.",
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
