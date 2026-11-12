import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("landningssida-som-konverterar");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("landningssida-som-konverterar")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
