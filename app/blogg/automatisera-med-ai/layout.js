import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("automatisera-med-ai");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("automatisera-med-ai")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
