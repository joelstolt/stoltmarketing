import { notFound } from "next/navigation";
import { getClient } from "@/lib/insyn/clients";
import { getReport, getRange } from "@/lib/umami";
import InsynView from "./InsynView";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const client = getClient(slug);
  if (!client) return { title: "Insyn" };
  return {
    title: `Insyn — ${client.name}`,
    description: `Trafikrapport för ${client.domain} från Stolt Marketing.`,
  };
}

export default async function InsynPage({ params, searchParams }) {
  const { slug } = await params;
  const sp = await searchParams;
  const rangeKey = sp?.range || "30d";

  const client = getClient(slug);
  if (!client) notFound();

  const range = getRange(rangeKey);

  let report;
  let error = null;
  try {
    report = await getReport(client.websiteId, range);
  } catch (e) {
    error = e.message;
  }

  return (
    <InsynView
      client={client}
      slug={slug}
      range={range}
      report={report}
      error={error}
    />
  );
}
