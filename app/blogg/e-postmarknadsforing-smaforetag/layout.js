import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("e-postmarknadsforing-smaforetag");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("e-postmarknadsforing-smaforetag")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
