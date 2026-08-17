const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/guider/chatgpt-for-smaforetag",
  inLanguage: "sv-SE",
  headline: "ChatGPT för småföretag: 9 användningsområden som faktiskt sparar tid",
  description: "9 konkreta sätt småföretag använder ChatGPT för att spara tid: offertmejl, annonstexter, FAQ-texter, översättningar och mer, med exempel på hur du skriver prompten.",
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
    { "@type": "ListItem", position: 3, name: "ChatGPT för småföretag", item: "https://www.stoltmarketing.se/guider/chatgpt-for-smaforetag" },
  ],
};

export const metadata = {
  title: "ChatGPT för företag: 9 sätt att spara tid",
  description: "9 konkreta sätt småföretag använder ChatGPT för att spara tid: offertmejl, annonstexter, FAQ-texter, översättningar och mer, med exempel på hur du skriver prompten.",
  alternates: { canonical: "https://www.stoltmarketing.se/guider/chatgpt-for-smaforetag" },
  openGraph: {
    title: "ChatGPT för småföretag: 9 tidsbesparare",
    description: "Konkreta exempel på hur du skriver prompten, plus fällorna du ska undvika.",
    url: "https://www.stoltmarketing.se/guider/chatgpt-for-smaforetag",
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
