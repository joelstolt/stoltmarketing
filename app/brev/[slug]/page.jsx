import { notFound } from "next/navigation";
import { getMottagare, alla } from "@/lib/brev/mottagare";
import BrevView from "./BrevView";

export const dynamic = "force-static";

export function generateStaticParams() {
  return alla().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = getMottagare(slug);
  if (!m) return { title: "Brev" };
  return {
    title: `${m.namn} — genomgång`,
    description: `Vad jag hittade på ${m.sajt}.`,
    robots: { index: false, follow: false },
  };
}

export default async function BrevPage({ params }) {
  const { slug } = await params;
  const mottagare = getMottagare(slug);
  if (!mottagare) notFound();
  return <BrevView m={mottagare} />;
}
