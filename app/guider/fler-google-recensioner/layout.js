const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/guider/fler-google-recensioner",
  inLanguage: "sv-SE",
  headline: "Fler Google-recensioner till ditt företag: så gör du (utan att bryta mot reglerna)",
  description: "Så tar du fram din recensionslänk och QR-kod, ber kunder om recensioner på rätt sätt, svarar på dem korrekt och håller dig inom marknadsföringslagen.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-17",
  dateModified: "2026-08-17",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Guider", item: "https://www.stoltmarketing.se/guider" },
    { "@type": "ListItem", position: 3, name: "Fler Google-recensioner", item: "https://www.stoltmarketing.se/guider/fler-google-recensioner" },
  ],
};

export const metadata = {
  title: "Fler Google-recensioner till ditt företag: guide",
  description: "Så tar du fram din recensionslänk och QR-kod, ber kunder om recensioner på rätt sätt, svarar på dem korrekt och håller dig inom marknadsföringslagen.",
  alternates: { canonical: "https://www.stoltmarketing.se/guider/fler-google-recensioner" },
  openGraph: {
    title: "Fler Google-recensioner (guide)",
    description: "Direktlänk, QR-kod och rätt sätt att be om recensioner, utan att bryta mot marknadsföringslagen.",
    url: "https://www.stoltmarketing.se/guider/fler-google-recensioner",
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
