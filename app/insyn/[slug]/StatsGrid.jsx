import { Users, Eye, MousePointerClick, Clock } from "lucide-react";

function formatNumber(n) {
  if (n === null || n === undefined) return "—";
  return new Intl.NumberFormat("sv-SE").format(Math.round(n));
}

function formatDuration(seconds) {
  if (!seconds || seconds <= 0) return "—";
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  if (min === 0) return `${sec}s`;
  return `${min}m ${sec}s`;
}

function pctChange(current, previous) {
  if (!previous || previous === 0) {
    return current > 0 ? { dir: "up", text: "ny period" } : null;
  }
  const change = ((current - previous) / previous) * 100;
  if (Math.abs(change) < 1) return { dir: "flat", text: "0%" };
  const dir = change > 0 ? "up" : "down";
  return { dir, text: `${change > 0 ? "+" : ""}${change.toFixed(0)}%` };
}

function Card({ icon: Icon, label, value, sub, trend }) {
  return (
    <div className="rounded-2xl border border-[#E6DEC9] bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="w-9 h-9 rounded-lg bg-[#FBF3DC] text-[#9A7409] flex items-center justify-center">
          <Icon size={18} />
        </div>
        {trend && (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${
              trend.dir === "up"
                ? "bg-green-50 text-green-700"
                : trend.dir === "down"
                ? "bg-red-50 text-red-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {trend.text}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold text-[#1A1611] tracking-tight">
        {value}
      </div>
      <div className="text-sm text-[#7A7263] mt-1">{label}</div>
      {sub && (
        <div className="text-xs text-[#A89F8D] mt-2">{sub}</div>
      )}
    </div>
  );
}

export default function StatsGrid({ stats }) {
  const visitors = stats.visitors ?? 0;
  const pageviews = stats.pageviews ?? 0;
  const visits = stats.visits ?? 0;
  const bounces = stats.bounces ?? 0;
  const totaltime = stats.totaltime ?? 0;
  const cmp = stats.comparison || {};

  const bounceRate = visits > 0 ? (bounces / visits) * 100 : 0;
  const avgSession = visits > 0 ? totaltime / visits : 0;
  const viewsPerVisit = visits > 0 ? pageviews / visits : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        icon={Users}
        label="Unika besökare"
        value={formatNumber(visitors)}
        trend={pctChange(visitors, cmp.visitors)}
      />
      <Card
        icon={Eye}
        label="Sidvisningar"
        value={formatNumber(pageviews)}
        sub={`${viewsPerVisit.toFixed(1)} per besök`}
        trend={pctChange(pageviews, cmp.pageviews)}
      />
      <Card
        icon={MousePointerClick}
        label="Besök"
        value={formatNumber(visits)}
        sub={`Avvisning ${bounceRate.toFixed(0)}%`}
        trend={pctChange(visits, cmp.visits)}
      />
      <Card
        icon={Clock}
        label="Snitt-session"
        value={formatDuration(avgSession)}
        sub={`Total tid ${formatDuration(totaltime)}`}
      />
    </div>
  );
}
