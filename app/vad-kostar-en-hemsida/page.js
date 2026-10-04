import EditorialArticle, { editorialMetadata } from "@/components/EditorialArticle";

export const metadata = editorialMetadata("vad-kostar-en-hemsida");

export default function Page() {
  return <EditorialArticle slug="vad-kostar-en-hemsida" />;
}
