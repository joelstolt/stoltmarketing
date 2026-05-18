function formatNumber(n) {
  return new Intl.NumberFormat("sv-SE").format(Math.round(n));
}

export default function TopList({ title, items, formatKey, limit = 8 }) {
  const list = (items || []).slice(0, limit);
  const max = list.reduce((m, i) => Math.max(m, i.y || 0), 0);

  return (
    <div className="rounded-2xl border border-[#E5E5E0] bg-white p-6 shadow-sm">
      <h3 className="text-base font-bold text-[#0C0F1A] mb-4">{title}</h3>
      {list.length === 0 ? (
        <div className="text-sm text-[#9CA3AF] py-6 text-center">
          Ingen data
        </div>
      ) : (
        <ul className="space-y-2.5">
          {list.map((item, i) => {
            const key = formatKey ? formatKey(item.x) : item.x;
            const pct = max > 0 ? (item.y / max) * 100 : 0;
            return (
              <li key={`${item.x}-${i}`} className="relative">
                <div
                  className="absolute inset-y-0 left-0 bg-[#EFF6FF] rounded-md transition-all"
                  style={{ width: `${pct}%` }}
                />
                <div className="relative flex items-center justify-between px-3 py-2 gap-3">
                  <span
                    className="text-sm text-[#0C0F1A] truncate"
                    title={key || ""}
                  >
                    {key || "—"}
                  </span>
                  <span className="text-sm font-semibold text-[#3B3F4A] tabular-nums shrink-0">
                    {formatNumber(item.y)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
