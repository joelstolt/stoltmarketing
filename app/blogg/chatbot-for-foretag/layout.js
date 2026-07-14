const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/chatbot-for-foretag",
  inLanguage: "sv-SE",
  headline: "Chatbot för företag: så fångar din hemsida fler leads dygnet runt",
  description: "AI-chatbot för företag förklarat: hur den fångar leads dygnet runt, vad den kostar, och hur du sätter upp en utan att tappa den mänskliga känslan.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "Chatbot för företag", item: "https://www.stoltmarketing.se/blogg/chatbot-for-foretag" },
  ],
};

export const metadata = {
  title: "Chatbot för företag: fånga fler leads dygnet runt",
  description: "AI-chatbot för företag förklarat: hur den fångar leads dygnet runt, vad den kostar, och hur du sätter upp en utan att tappa den mänskliga känslan.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/chatbot-for-foretag" },
  openGraph: {
    title: "Chatbot för företag: fler leads dygnet runt",
    description: "Hur en AI-chatbot fångar och kvalificerar leads dygnet runt, vad den kostar och när den lönar sig.",
    url: "https://www.stoltmarketing.se/blogg/chatbot-for-foretag",
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
