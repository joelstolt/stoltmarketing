const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Projekt", item: "https://www.stoltmarketing.se/projekt" },
    { "@type": "ListItem", position: 3, name: "Linguista", item: "https://www.stoltmarketing.se/projekt/linguista" },
  ],
};

export const metadata = {
  title: "Kundcase: Linguista",
  description:
    "Hur vi byggde om Linguistas webbplats från WordPress till en självuppdaterande Next.js-sajt på Cloudflare. 100 av 100 i prestanda, tillgänglighet, best practices och AI-läsbarhet, och redaktionen publicerar själva.",
  alternates: { canonical: "https://www.stoltmarketing.se/projekt/linguista" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
