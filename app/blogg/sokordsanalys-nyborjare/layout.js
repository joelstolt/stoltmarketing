import { getBlogMetadata, getBlogSchema } from "@/lib/blog-data";

export const metadata = getBlogMetadata("sokordsanalys-nyborjare");

export default function ArticleLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogSchema("sokordsanalys-nyborjare")).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
