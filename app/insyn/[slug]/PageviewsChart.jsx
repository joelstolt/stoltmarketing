"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function aggregate(pageviews) {
  // Umami returnerar { pageviews: [{x, y}], sessions: [{x, y}] }
  const map = new Map();
  for (const row of pageviews.pageviews || []) {
    map.set(row.x, { x: row.x, pageviews: row.y, visitors: 0 });
  }
  for (const row of pageviews.sessions || []) {
    const existing = map.get(row.x) || { x: row.x, pageviews: 0, visitors: 0 };
    existing.visitors = row.y;
    map.set(row.x, existing);
  }
  return Array.from(map.values()).sort((a, b) => a.x.localeCompare(b.x));
}

function formatTick(x, unit) {
  // Umami x-format: "YYYY-MM-DD HH:MM:SS"
  const d = new Date(x.replace(" ", "T") + "Z");
  if (unit === "hour") {
    return d.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Stockholm",
    });
  }
  if (unit === "month") {
    return d.toLocaleDateString("sv-SE", {
      month: "short",
      year: "2-digit",
      timeZone: "Europe/Stockholm",
    });
  }
  return d.toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "short",
    timeZone: "Europe/Stockholm",
  });
}

function formatTooltipLabel(x, unit) {
  const d = new Date(x.replace(" ", "T") + "Z");
  if (unit === "hour") {
    return d.toLocaleString("sv-SE", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Stockholm",
    });
  }
  if (unit === "month") {
    return d.toLocaleDateString("sv-SE", {
      month: "long",
      year: "numeric",
      timeZone: "Europe/Stockholm",
    });
  }
  return d.toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Stockholm",
  });
}

export default function PageviewsChart({ data, unit, color = "#9A7409" }) {
  const rows = aggregate(data);

  if (rows.length === 0) {
    return (
      <div className="h-72 flex items-center justify-center text-[#A89F8D] text-sm">
        Ingen data för perioden
      </div>
    );
  }

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={rows} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gradVisitors" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.25} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gradPageviews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1A1611" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#1A1611" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#EFE9D9" vertical={false} />
          <XAxis
            dataKey="x"
            tickFormatter={(x) => formatTick(x, unit)}
            stroke="#A89F8D"
            fontSize={12}
            tickMargin={8}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            stroke="#A89F8D"
            fontSize={12}
            axisLine={false}
            tickLine={false}
            width={36}
          />
          <Tooltip
            labelFormatter={(x) => formatTooltipLabel(x, unit)}
            formatter={(v, name) => [
              new Intl.NumberFormat("sv-SE").format(v),
              name === "pageviews" ? "Sidvisningar" : "Besökare",
            ]}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid #E6DEC9",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              fontSize: 13,
            }}
          />
          <Area
            type="monotone"
            dataKey="pageviews"
            stroke="#1A1611"
            strokeWidth={1.5}
            fill="url(#gradPageviews)"
            strokeOpacity={0.4}
          />
          <Area
            type="monotone"
            dataKey="visitors"
            stroke={color}
            strokeWidth={2.5}
            fill="url(#gradVisitors)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
