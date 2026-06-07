import { notFound } from "next/navigation";
import { INSIGHTS_TOKEN } from "@/lib/insyn/clients";
import { buildMonthlyReport, lastMonthKey } from "@/lib/insyn/monthly-report";
import InsikterView from "./InsikterView";

export const dynamic = "force-dynamic";
export const revalidate = 0;
// AI + flera kunder = kan ta tid
export const maxDuration = 300;

function monthOptions(count = 6) {
  const options = [];
  const now = new Date();
  for (let i = 1; i <= count; i++) {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - i, 1));
    const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
    const label = d.toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      timeZone: "Europe/Stockholm",
    });
    options.push({ key, label });
  }
  return options;
}

export default async function InsikterPage({ params, searchParams }) {
  const { token } = await params;
  const sp = await searchParams;

  if (token !== INSIGHTS_TOKEN) notFound();

  const rangeKey = sp?.range || lastMonthKey();
  const months = monthOptions(6);

  let result;
  let error = null;
  try {
    result = await buildMonthlyReport({ rangeKey });
  } catch (e) {
    error = e.message;
  }

  return (
    <InsikterView
      token={token}
      rangeKey={rangeKey}
      months={months}
      result={result}
      error={error}
    />
  );
}
