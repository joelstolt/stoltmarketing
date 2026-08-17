const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/guider/synas-i-ai-sok",
  inLanguage: "sv-SE",
  headline: "Syns ditt företag när kunder frågar ChatGPT? Så fungerar AI-sök",
  description: "Så fungerar AI-sökmotorer som ChatGPT och Googles AI-läge: vad de bygger svaren på, hur du syns i dem, och en konkret checklista för att synas i AI-sök redan i dag.",
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
    { "@type": "ListItem", position: 3, name: "Synas i AI-sök", item: "https://www.stoltmarketing.se/guider/synas-i-ai-sok" },
  ],
};

export const metadata = {
  title: "AI-sökmotor: så syns ditt företag i ChatGPT",
  description: "Så fungerar AI-sökmotorer som ChatGPT och Googles AI-läge: vad de bygger svaren på, hur du syns i dem, och en konkret checklista för att synas i AI-sök redan i dag.",
  alternates: { canonical: "https://www.stoltmarketing.se/guider/synas-i-ai-sok" },
  openGraph: {
    title: "Syns du i ChatGPT och AI-sök?",
    description: "Så väljer AI-assistenter vilka företag de nämner, och vad du kan göra för att synas.",
    url: "https://www.stoltmarketing.se/guider/synas-i-ai-sok",
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
