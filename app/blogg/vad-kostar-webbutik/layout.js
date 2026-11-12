import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("vad-kostar-webbutik");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("vad-kostar-webbutik")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
