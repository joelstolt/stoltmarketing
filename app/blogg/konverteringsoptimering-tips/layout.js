import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("konverteringsoptimering-tips");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("konverteringsoptimering-tips")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
