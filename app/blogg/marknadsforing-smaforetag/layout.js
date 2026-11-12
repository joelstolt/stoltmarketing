import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("marknadsforing-smaforetag");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("marknadsforing-smaforetag")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
