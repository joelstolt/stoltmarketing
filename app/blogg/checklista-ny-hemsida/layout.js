import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("checklista-ny-hemsida");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("checklista-ny-hemsida")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
