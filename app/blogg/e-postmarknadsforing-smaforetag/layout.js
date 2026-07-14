const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/e-postmarknadsforing-smaforetag",
  inLanguage: "sv-SE",
  headline: "E-postmarknadsföring för småföretag: bygg en lista som säljer",
  description: "Så bygger du e-postmarknadsföring för småföretag från noll: samla in adresser lagligt, välklomstflöde, nyhetsbrev som läses, och vad du ska mäta.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "E-postmarknadsföring", item: "https://www.stoltmarketing.se/blogg/e-postmarknadsforing-smaforetag" },
  ],
};

export const metadata = {
  title: "E-postmarknadsföring för småföretag: lista som säljer",
  description: "Så bygger du e-postmarknadsföring för småföretag från noll: samla in adresser lagligt, välklomstflöde, nyhetsbrev som läses, och vad du ska mäta.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/e-postmarknadsforing-smaforetag" },
  openGraph: {
    title: "E-postmarknadsföring för småföretag",
    description: "Bygg en e-postlista från noll och gör den till återkommande kunder.",
    url: "https://www.stoltmarketing.se/blogg/e-postmarknadsforing-smaforetag",
    type: "article",
  },
};

export default function ArticleLayout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
