import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("google-ads-byra-eller-sjalv");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("google-ads-byra-eller-sjalv")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
