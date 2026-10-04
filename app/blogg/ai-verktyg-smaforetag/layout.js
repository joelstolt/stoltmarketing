import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("ai-verktyg-smaforetag");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("ai-verktyg-smaforetag")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
