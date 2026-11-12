import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("wordpress-vs-nextjs");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("wordpress-vs-nextjs")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
