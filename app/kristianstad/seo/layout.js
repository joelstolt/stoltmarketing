const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad kostar SEO i Kristianstad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En SEO-audit börjar från 3 900 kr. Löpande SEO-arbete ingår i managed hemsida från 790 kr/mån. Större SEO-projekt prissätts efter scope — du får alltid ett fast pris innan vi börjar.",
      },
    },
    {
      "@type": "Question",
      name: "Hur lång tid tar det att se resultat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tekniska förbättringar syns ofta inom veckor. Sökordspositioner tar vanligtvis 2–6 månader att förbättra märkbart. Du får månadsrapporter så du ser framstegen hela vägen.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ni hjälpa med lokal SEO i Kristianstad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolut — det är en av mina styrkor. Google Business Profile, lokala sökord, Google Maps-synlighet och recensionsstrategi. Fungerar för alla branscher i Kristianstad-området.",
      },
    },
  ],
};

export const metadata = {
  title: "SEO Kristianstad — Bli synlig på Google lokalt",
  description:
    "SEO-byrå i Kristianstad. Vi optimerar din sajt för lokal sökning så att kunder hittar dig på Google. Resultat på 2–6 månader.",
  alternates: {
    canonical: "https://stoltmarketing.se/kristianstad/seo",
  },
  openGraph: {
    title: "SEO Kristianstad — Bli synlig på Google lokalt",
    description:
      "Lokal SEO-konsult i Kristianstad. Syns på Google när folk söker efter din tjänst.",
    url: "https://stoltmarketing.se/kristianstad/seo",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Kristianstad", item: "https://stoltmarketing.se/kristianstad" },
    { "@type": "ListItem", position: 3, name: "SEO", item: "https://stoltmarketing.se/kristianstad/seo" },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}
