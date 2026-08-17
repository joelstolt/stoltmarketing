const dataset = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Mätning av svenska hantverkssajter 2026",
  description:
    "Teknisk mätning av 4 864 svenska hantverks-, el-, måleri- och snickerisajter: sidbredd, strukturerad data, mobilanpassning, HTTPS, analysverktyg och cookiehantering.",
  creator: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  url: "https://www.stoltmarketing.se/hantverkssajter",
  temporalCoverage: "2026",
  spatialCoverage: { "@type": "Country", name: "Sverige" },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Hantverkssajter 2026", item: "https://www.stoltmarketing.se/hantverkssajter" },
  ],
};

export const metadata = {
  title: "Vi mätte 4 864 svenska hantverkssajter",
  description:
    "45 procent har inget analysverktyg, 43 procent saknar strukturerad data och var tredje sajt har färre än tio sidor. Vad mätningen av 4 864 hantverks- och elsajter visade.",
  alternates: { canonical: "https://www.stoltmarketing.se/hantverkssajter" },
  openGraph: {
    title: "Vi mätte 4 864 svenska hantverkssajter",
    description:
      "45 procent har inget analysverktyg, 43 procent saknar strukturerad data och var tredje sajt har färre än tio sidor.",
    url: "https://www.stoltmarketing.se/hantverkssajter",
    type: "article",
  },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
