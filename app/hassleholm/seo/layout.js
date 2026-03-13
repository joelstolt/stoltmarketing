const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad kostar SEO i Hässleholm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En SEO-audit börjar från 3 900 kr. Löpande SEO-arbete ingår i managed hemsida från 790 kr/mån. Större projekt prissätts efter scope.",
      },
    },
    {
      "@type": "Question",
      name: "Hur lång tid tar det att se SEO-resultat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tekniska förbättringar syns ofta inom veckor. Sökordspositioner tar vanligtvis 2–6 månader att förbättra märkbart.",
      },
    },
    {
      "@type": "Question",
      name: "Kan ni hjälpa med lokal SEO i Hässleholm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolut. Lokal SEO är en styrka — Google Business Profile, lokala sökord, kartor och recensioner.",
      },
    },
  ],
};

export const metadata = {
  title: "SEO Hässleholm — Syns på Google lokalt",
  description:
    "SEO-byrå i Hässleholm. Teknisk SEO, lokal optimering och sökordsanalys som ger fler kunder från Google. Lokal konsult med 10+ års erfarenhet.",
  alternates: {
    canonical: "https://stoltmarketing.se/hassleholm/seo",
  },
  openGraph: {
    title: "SEO Hässleholm — Syns på Google lokalt",
    description:
      "Lokal SEO-konsult i Hässleholm. Teknisk SEO, sökordsanalys och lokal optimering.",
    url: "https://stoltmarketing.se/hassleholm/seo",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
