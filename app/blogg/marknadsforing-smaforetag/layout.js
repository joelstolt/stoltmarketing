const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/marknadsforing-smaforetag",
  inLanguage: "sv-SE",
  headline: "Marknadsföring för småföretag: mest resultat för minsta budget",
  description: "Så fördelar du en liten marknadsföringsbudget för småföretag: vilka kanaler ger mest, i vilken ordning du satsar, och vad du kan skippa.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-08-15",
  dateModified: "2026-08-15",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Marknadsföring småföretag", item: "https://www.stoltmarketing.se/blogg/marknadsforing-smaforetag" },
  ],
};

export const metadata = {
  title: "Marknadsföring för småföretag: mest för minsta budget",
  description: "Så fördelar du en liten marknadsföringsbudget för småföretag: vilka kanaler ger mest, i vilken ordning du satsar, och vad du kan skippa.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/marknadsforing-smaforetag" },
  openGraph: {
    title: "Marknadsföring för småföretag på liten budget",
    description: "Var du får mest för minsta budget, och i vilken ordning du bör satsa.",
    url: "https://www.stoltmarketing.se/blogg/marknadsforing-smaforetag",
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
