const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Projekt", item: "https://www.stoltmarketing.se/projekt" },
    { "@type": "ListItem", position: 3, name: "EdShare", item: "https://www.stoltmarketing.se/projekt/edshare" },
  ],
};

export const metadata = {
  title: "Kundcase: EdShare",
  description:
    "Hur vi byggde om EdShares webbplats från WordPress till en statisk Next.js-sajt på Cloudflare. 10x snabbare serversvar, 86 procent lättare och full pott i prestanda, tillgänglighet och AI-läsbarhet.",
  alternates: { canonical: "https://www.stoltmarketing.se/projekt/edshare" },
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
