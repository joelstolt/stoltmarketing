import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("hemsida-som-saljer");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("hemsida-som-saljer")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
