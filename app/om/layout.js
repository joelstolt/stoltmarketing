const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Om mig", item: "https://www.stoltmarketing.se/om" },
  ],
};

export const metadata = {
  title: "Om Joel Stolt: webbkonsult för hantverksföretag, Hässleholm",
  description:
    "Joel Stolt i Hässleholm. Jag bygger hemsidor och hjälper hantverksföretag ta hand om förfrågningar. Direktkontakt, tydlig omfattning och verkliga kundprojekt.",
  alternates: {
    canonical: "https://www.stoltmarketing.se/om",
  },
  openGraph: {
    title: "Om Joel Stolt: webbkonsult för hantverksföretag i Hässleholm",
    description: "10+ års erfarenhet. Webbutveckling, SEO, AI. Baserad i Hässleholm, jobbar i hela Sverige.",
    url: "https://www.stoltmarketing.se/om",
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
