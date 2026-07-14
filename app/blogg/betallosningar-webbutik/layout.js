const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/betallosningar-webbutik",
  inLanguage: "sv-SE",
  headline: "Swish, Klarna eller kort? Guide till betallösningar i webbutiken",
  description: "Guide till betallösningar för svensk e-handel: Swish, Klarna, kort och faktura jämfört på avgifter, konvertering och krångel. Så väljer du rätt.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-06",
  dateModified: "2026-08-06",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Betallösningar", item: "https://www.stoltmarketing.se/blogg/betallosningar-webbutik" },
  ],
};

export const metadata = {
  title: "Betallösningar för webbutik: Swish, Klarna eller kort?",
  description: "Guide till betallösningar för svensk e-handel: Swish, Klarna, kort och faktura jämfört på avgifter, konvertering och krångel. Så väljer du rätt.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/betallosningar-webbutik" },
  openGraph: {
    title: "Swish, Klarna eller kort i webbutiken?",
    description: "Betalsätten för svensk e-handel jämförda på avgifter, konvertering och krångel.",
    url: "https://www.stoltmarketing.se/blogg/betallosningar-webbutik",
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
