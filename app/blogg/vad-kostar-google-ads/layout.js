import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("vad-kostar-google-ads");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("vad-kostar-google-ads")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
