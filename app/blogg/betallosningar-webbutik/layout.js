import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("betallosningar-webbutik");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("betallosningar-webbutik")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
