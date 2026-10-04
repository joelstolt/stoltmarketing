import BlogArticle from "@/components/BlogArticle";
import { editorialPages } from "@/lib/editorial-pages";

export function editorialMetadata(slug) {
  const data = editorialPages[slug];
  const url = `https://www.stoltmarketing.se/${slug}`;
  return { title: data.title, description: data.description, alternates: { canonical: url }, openGraph: { title: data.title, description: data.description, url, type: "article", locale: "sv_SE", siteName: "Stolt Marketing", images: ["/og-image.png"] }, twitter: { card: "summary_large_image", title: data.title, description: data.description, images: ["/og-image.png"] } };
}
export default function EditorialArticle({ slug }) {
  const data = editorialPages[slug], url = `https://www.stoltmarketing.se/${slug}`;
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: data.title, description: data.description, dateModified: "2026-10-04", ...(slug === "sokmotoroptimering" ? { datePublished: "2026-08-07" } : {}), author: { "@type": "Person", name: "Joel Stolt", url: "https://www.stoltmarketing.se/om" }, mainEntityOfPage: url, image: "https://www.stoltmarketing.se/og-image.png" };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><BlogArticle {...data} h1={data.title} breadcrumbName={data.category} updatedDate="4 oktober 2026" dateDisplay={slug === "sokmotoroptimering" ? "7 augusti 2026" : undefined} sectionLabel="Guider" sectionHref="/guider" /></>;
}
