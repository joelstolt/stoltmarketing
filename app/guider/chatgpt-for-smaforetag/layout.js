export const metadata = {
  "title": "ChatGPT för småföretag: nio uppgifter med promptmallar",
  "description": "Börja med avidentifierat underlag och en uppgift du kan kontrollera. Använd AI till utkast, granska resultatet själv och mät tidsvinsten inklusive korrigeringar.",
  "alternates": {
    "canonical": "https://www.stoltmarketing.se/guider/chatgpt-for-smaforetag"
  },
  "openGraph": {
    "title": "ChatGPT för småföretag: nio uppgifter med promptmallar",
    "description": "Börja med avidentifierat underlag och en uppgift du kan kontrollera. Använd AI till utkast, granska resultatet själv och mät tidsvinsten inklusive korrigeringar.",
    "url": "https://www.stoltmarketing.se/guider/chatgpt-for-smaforetag",
    "type": "article"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "ChatGPT för småföretag: nio uppgifter med promptmallar",
    "description": "Börja med avidentifierat underlag och en uppgift du kan kontrollera. Använd AI till utkast, granska resultatet själv och mät tidsvinsten inklusive korrigeringar."
  }
};
const article = {
  "@context": "https://schema.org",
  "@type": "Article",
  "image": [
    "https://www.stoltmarketing.se/og-image.png"
  ],
  "mainEntityOfPage": "https://www.stoltmarketing.se/guider/chatgpt-for-smaforetag",
  "inLanguage": "sv-SE",
  "headline": "ChatGPT för småföretag: nio uppgifter med promptmallar",
  "description": "Börja med avidentifierat underlag och en uppgift du kan kontrollera. Använd AI till utkast, granska resultatet själv och mät tidsvinsten inklusive korrigeringar.",
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
      "name": "ChatGPT för småföretag: nio uppgifter med promptmallar",
      "item": "https://www.stoltmarketing.se/guider/chatgpt-for-smaforetag"
    }
  ]
};
export default function Layout({ children }) {
  return <>{[article,breadcrumb].map((schema,i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}{children}</>;
}
