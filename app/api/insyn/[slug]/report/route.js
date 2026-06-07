import { getClient } from "@/lib/insyn/clients";
import { getReport, getRange } from "@/lib/umami";
import { buildReportPdf } from "./report-pdf";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request, { params }) {
  const { slug } = await params;
  const url = new URL(request.url);
  const rangeKey = url.searchParams.get("range") || "30d";

  const client = getClient(slug);
  if (!client) {
    return new Response("Not found", { status: 404 });
  }

  const range = getRange(rangeKey);

  try {
    const report = await getReport(client.websiteId, range);
    const buffer = await buildReportPdf({ client, range, report });

    const filename = `insyn-${slug}-${range.key}.pdf`;
    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    return new Response(`Error: ${e.message}`, { status: 500 });
  }
}
