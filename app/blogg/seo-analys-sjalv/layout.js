import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("seo-analys-sjalv");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("seo-analys-sjalv")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
