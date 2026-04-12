const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Projekt", item: "https://stoltmarketing.se/projekt" },
  ],
};

export const metadata = {
  title: "Projekt & Case — Webbutveckling, SEO, AI, E-handel",
  description:
    "Utvalda projekt från Stolt Marketing — webbutveckling, e-handel, AI-automation, SEO. Från AcadeMedia till småföretag i Hässleholm och Skåne.",
  alternates: {
    canonical: "https://stoltmarketing.se/projekt",
  },
  openGraph: {
    title: "Projekt & Case — Webbutveckling, SEO, AI",
    description: "Portfolio med resultat från webbutveckling, e-handel, AI-automation, SEO.",
    url: "https://stoltmarketing.se/projekt",
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
