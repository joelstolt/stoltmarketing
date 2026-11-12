import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("hemsida-inga-kunder");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("hemsida-inga-kunder")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
