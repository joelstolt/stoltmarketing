import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("seo-for-smaforetag");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("seo-for-smaforetag")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
