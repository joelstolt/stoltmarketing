import Link from "next/link";
import { ArrowDownToLine, ExternalLink } from "lucide-react";
import PageviewsChart from "./PageviewsChart";
import StatsGrid from "./StatsGrid";
import TopList from "./TopList";

const RANGES = [
  { key: "7d", label: "7 dagar" },
  { key: "30d", label: "30 dagar" },
  { key: "90d", label: "90 dagar" },
];

function monthOptions(count = 6) {
  const options = [];
  const now = new Date();
  for (let i = 1; i <= count; i++) {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - i, 1));
    const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
    const label = d.toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "short",
      timeZone: "Europe/Stockholm",
    });
    options.push({ key, label });
  }
  return options;
}

export default function InsynView({ client, slug, range, report, error }) {
  const months = monthOptions(6);
  const isMonth = /^\d{4}-\d{2}$/.test(range.key);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <header className="border-b border-[#E5E5E0] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#6B7280] font-semibold mb-1">
              Insyn · Trafikrapport
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#0C0F1A] tracking-tight">
              {client.name}
            </h1>
            <a
              href={`https://${client.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#1D4ED8] mt-1"
            >
              {client.domain}
              <ExternalLink size={13} />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`/api/insyn/${slug}/report?range=${range.key}`}
              className="secondary-btn !py-3 !px-5 !text-sm"
            >
              <ArrowDownToLine size={16} />
              Ladda ner PDF
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Period-väljare */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {RANGES.map((r) => {
            const active = r.key === range.key;
            return (
              <Link
                key={r.key}
                href={`/insyn/${slug}?range=${r.key}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  active
                    ? "bg-[#0C0F1A] text-white"
                    : "bg-white text-[#3B3F4A] border border-[#E5E5E0] hover:border-[#0C0F1A]"
                }`}
              >
                {r.label}
              </Link>
            );
          })}
          <div className="w-px h-6 bg-[#E5E5E0] mx-2" />
          <span className="text-xs text-[#6B7280] uppercase tracking-wider font-semibold">
            Månad:
          </span>
          {months.map((m) => {
            const active = m.key === range.key;
            return (
              <Link
                key={m.key}
                href={`/insyn/${slug}?range=${m.key}`}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  active
                    ? "bg-[#0C0F1A] text-white"
                    : "bg-white text-[#3B3F4A] border border-[#E5E5E0] hover:border-[#0C0F1A]"
                }`}
              >
                {m.label}
              </Link>
            );
          })}
        </div>

        <div className="text-sm text-[#6B7280] mb-6">
          Period: <span className="font-medium text-[#3B3F4A]">{range.label}</span>
        </div>

        {error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <div className="text-red-900 font-semibold mb-1">
              Kunde inte hämta data
            </div>
            <div className="text-sm text-red-700">{error}</div>
          </div>
        ) : (
          <>
            <StatsGrid stats={report.stats} totalTime={report.stats.totaltime} />

            <section className="mt-10 rounded-2xl border border-[#E5E5E0] bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-lg font-bold text-[#0C0F1A]">
                  Trafik över tid
                </h2>
                <span className="text-xs text-[#6B7280] uppercase tracking-wider">
                  {report.unit === "hour"
                    ? "Per timme"
                    : report.unit === "month"
                    ? "Per månad"
                    : "Per dag"}
                </span>
              </div>
              <PageviewsChart
                data={report.pageviews}
                unit={report.unit}
                color={client.color}
              />
            </section>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <TopList
                title="Mest besökta sidor"
                items={report.pages}
                formatKey={(s) => (s === "/" ? "Startsida" : s)}
              />
              <TopList
                title="Trafikkällor"
                items={report.referrers}
                formatKey={(s) => s || "Direkttrafik"}
              />
              <TopList title="Enheter" items={report.devices} />
              <TopList
                title="Länder"
                items={report.countries}
                formatKey={countryName}
              />
              <TopList title="Webbläsare" items={report.browsers} />
              <TopList title="Operativsystem" items={report.os} />
            </div>
          </>
        )}

        <footer className="mt-16 pt-6 border-t border-[#E5E5E0] text-xs text-[#9CA3AF] flex justify-between flex-wrap gap-3">
          <span>
            Rapport genererad av{" "}
            <a href="/" className="text-[#1D4ED8] hover:underline">
              Stolt Marketing
            </a>
          </span>
          <span>Data från Umami · GDPR-kompatibel · Inga cookies</span>
        </footer>
      </main>
    </div>
  );
}

function countryName(code) {
  if (!code) return "Okänd";
  try {
    const dn = new Intl.DisplayNames(["sv"], { type: "region" });
    return dn.of(code.toUpperCase()) || code;
  } catch {
    return code;
  }
}
