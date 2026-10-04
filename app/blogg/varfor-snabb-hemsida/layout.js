import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("varfor-snabb-hemsida");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("varfor-snabb-hemsida")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
