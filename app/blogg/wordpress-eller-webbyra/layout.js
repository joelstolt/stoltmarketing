const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: ["https://www.stoltmarketing.se/og-image.png"],
  mainEntityOfPage: "https://www.stoltmarketing.se/blogg/wordpress-eller-webbyra",
  inLanguage: "sv-SE",
  headline: "Bygga hemsida själv eller anlita en webbyrå? Ärlig jämförelse",
  description: "DIY vs webbyrå — en ärlig jämförelse. Kostnader, tid, kvalitet och dolda utgifter. Vad passar ditt företag?",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://www.stoltmarketing.se" },
  datePublished: "2026-05-03",
  dateModified: "2026-05-03",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "WordPress eller Webbyrå", item: "https://www.stoltmarketing.se/blogg/wordpress-eller-webbyra" },
  ],
};

export const metadata = {
  title: "Bygga hemsida själv eller anlita en webbyrå? Ärlig jämförelse",
  description: "DIY hemsida eller professionell webbyrå? En ärlig guide över kostnader, dolda utgifter, tid och resultat för svenska företag.",
  alternates: { canonical: "https://www.stoltmarketing.se/blogg/wordpress-eller-webbyra" },
  openGraph: {
    title: "Bygga hemsida själv eller anlita en webbyrå? Ärlig jämförelse",
    description: "Gör det själv eller anlita proffs? Kostnader, tid, risker och resultat jämförda.",
    url: "https://www.stoltmarketing.se/blogg/wordpress-eller-webbyra",
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
