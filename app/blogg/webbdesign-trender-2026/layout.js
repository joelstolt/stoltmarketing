import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("webbdesign-trender-2026");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("webbdesign-trender-2026")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
