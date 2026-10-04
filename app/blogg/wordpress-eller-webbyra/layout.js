import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("wordpress-eller-webbyra");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("wordpress-eller-webbyra")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
