import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("moms-regler-e-handel");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("moms-regler-e-handel")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
