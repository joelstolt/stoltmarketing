import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("lokal-seo-guide");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("lokal-seo-guide")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
