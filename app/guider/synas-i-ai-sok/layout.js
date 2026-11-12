export const metadata = {
  "title": "Synas i AI-sök: förbättra grunden och mät vad som händer",
  "description": "Gör tjänster, priser och företagsuppgifter tydliga och möjliga att hitta. Testa relevanta frågor i flera AI-tjänster och spara svaren. Tydlighet hjälper läsaren men garanterar inget omnämnande.",
  "alternates": {
    "canonical": "https://www.stoltmarketing.se/guider/synas-i-ai-sok"
  },
  "openGraph": {
    "title": "Synas i AI-sök: förbättra grunden och mät vad som händer",
    "description": "Gör tjänster, priser och företagsuppgifter tydliga och möjliga att hitta. Testa relevanta frågor i flera AI-tjänster och spara svaren. Tydlighet hjälper läsaren men garanterar inget omnämnande.",
    "url": "https://www.stoltmarketing.se/guider/synas-i-ai-sok",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Synas i AI-sök: förbättra grunden och mät vad som händer",
    "description": "Gör tjänster, priser och företagsuppgifter tydliga och möjliga att hitta. Testa relevanta frågor i flera AI-tjänster och spara svaren. Tydlighet hjälper läsaren men garanterar inget omnämnande."
  }
};
const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "image": [
    "https://www.stoltmarketing.se/og-image.png"
  ],
  "mainEntityOfPage": "https://www.stoltmarketing.se/guider/synas-i-ai-sok",
  "inLanguage": "sv-SE",
  "headline": "Synas i AI-sök: förbättra grunden och mät vad som händer",
  "description": "Gör tjänster, priser och företagsuppgifter tydliga och möjliga att hitta. Testa relevanta frågor i flera AI-tjänster och spara svaren. Tydlighet hjälper läsaren men garanterar inget omnämnande.",
  "author": {
    "@type": "Person",
    "name": "Joel Stolt"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stolt Marketing",
    "url": "https://www.stoltmarketing.se"
  },
  "datePublished": "2026-08-17",
  "dateModified": "2026-10-04"
};
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Hem",
      "item": "https://www.stoltmarketing.se"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Guider",
      "item": "https://www.stoltmarketing.se/guider"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Synas i AI-sök: förbättra grunden och mät vad som händer",
      "item": "https://www.stoltmarketing.se/guider/synas-i-ai-sok"
    }
  ]
};
export default function Layout({ children }) {
  return <>{[article,breadcrumb].map((schema,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}{children}</>;
}
