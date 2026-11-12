import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("seo-tips-smaforetag");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("seo-tips-smaforetag")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
