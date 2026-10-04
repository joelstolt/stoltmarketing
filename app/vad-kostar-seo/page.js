import EditorialArticle, { editorialMetadata } from "@/components/EditorialArticle";

export const metadata = editorialMetadata("vad-kostar-seo");

export default function Page() {
  return <EditorialArticle slug="vad-kostar-seo" />;
}
