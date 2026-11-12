import BlogArticle from "@/components/BlogArticle";
import { getBlogArticle } from "@/lib/blog-data";

export default function ArticlePage() {
  return <BlogArticle {...getBlogArticle("valja-seo-byra")} />;
}
