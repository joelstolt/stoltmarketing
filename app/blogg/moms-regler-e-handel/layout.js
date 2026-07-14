const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/moms-regler-e-handel",
  inLanguage: "sv-SE",
  headline: "Moms och regler för e-handel: det här måste du ha koll på",
  description: "Begriplig guide till moms, ångerrätt, köpvillkor, GDPR och märkning för svensk e-handel. Det du måste ha på plats innan du börjar sälja online.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-25",
  dateModified: "2026-08-25",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Moms och regler", item: "https://www.stoltmarketing.se/blogg/moms-regler-e-handel" },
  ],
};

export const metadata = {
  title: "Moms och regler för e-handel: guide för webbutiker",
  description: "Begriplig guide till moms, ångerrätt, köpvillkor, GDPR och märkning för svensk e-handel. Det du måste ha på plats innan du börjar sälja online.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/moms-regler-e-handel" },
  openGraph: {
    title: "Moms och regler för e-handel",
    description: "Moms, ångerrätt, villkor och GDPR för svensk e-handel, utan juristsvenska.",
    url: "https://www.stoltmarketing.se/blogg/moms-regler-e-handel",
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
