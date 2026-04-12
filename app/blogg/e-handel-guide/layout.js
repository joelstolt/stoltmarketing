const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Starta e-handel 2026 — Komplett guide för svenska företag",
  description: "Komplett guide för att starta e-handel i Sverige 2026. Plattformar, betalningar, juridik, logistik och kostnader allt på ett ställe.",
  author: { "@type": "Person", name: "Joel Stolt" },
  publisher: { "@type": "Organization", name: "Stolt Marketing", url: "https://stoltmarketing.se" },
  datePublished: "2026-05-10",
  dateModified: "2026-05-10",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hem", item: "https://stoltmarketing.se" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://stoltmarketing.se/blogg" },
    { "@type": "ListItem", position: 3, name: "E-handel Guide 2026", item: "https://stoltmarketing.se/blogg/e-handel-guide" },
  ],
};

export const metadata = {
  title: "Starta e-handel 2026 — Komplett guide för svenska företag",
  description: "Allt du behöver veta för att starta e-handel i Sverige. Plattformar, betalmetoder, juridik, logistik, SEO och kostnader.",
  alternates: { canonical: "https://stoltmarketing.se/blogg/e-handel-guide" },
  openGraph: {
    title: "Starta e-handel 2026 — Komplett guide för svenska företag",
    description: "Shopify vs WooCommerce vs custom. Betalgateways, juridik och allt annat för att starta en webshop i Sverige.",
    url: "https://stoltmarketing.se/blogg/e-handel-guide",
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
