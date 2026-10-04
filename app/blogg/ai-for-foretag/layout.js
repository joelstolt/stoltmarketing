import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("ai-for-foretag");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("ai-for-foretag")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
