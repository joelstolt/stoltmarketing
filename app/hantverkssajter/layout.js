const title = "Svenska hantverkssajter: teknisk kartläggning med metod och begränsningar";
const description = "Tekniska observationer från 4 864 företagsposter våren 2026. Se datatäckning, sitemap-URL:er och metod. Urvalet är inte representativt för hela branschen.";
const url = "https://www.stoltmarketing.se/hantverkssajter";
export const metadata = {
  title, description, robots: { index: false, follow: false }, alternates: { canonical: url },
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Stolt Marketing: utvecklaren ni inte har" }],  title, description, url, type: "article" },
  twitter: { images: ["/og-image.png"],  card: "summary_large_image", title, description },
};
const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.stoltmarketing.se" },
  { "@type": "ListItem", position: 2, name: "Hantverkssajter 2026", item: url },
] };
export default function Layout({ children }) {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />{children}</>;
}
