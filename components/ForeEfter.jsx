// Visar endast redovisade ändpunkter. Mellanvärden vore uppskattningar.
export default function ForeEfter({ rader, fran = "Före ombyggnaden", till = "Efter ombyggnaden" }) {
  return (
    <div className="bg-surface rounded-[14px] border border-border p-5 sm:p-8">
      <h3 className="font-heading text-[22px] text-heading">Före och efter</h3>
      <p className="mt-2 text-[14px] text-body">Två redovisade testlägen. Förutsättningar och begränsningar anges i metodrutan.</p>
      <dl className="mt-6 space-y-5">
        {rader.map((rad) => (
          <div key={rad.label} className="border-b border-border-light pb-5 last:border-b-0 last:pb-0">
            <dt className="text-[15px] font-600 text-heading">{rad.label}</dt>
            <dd className="mt-2 grid grid-cols-2 gap-4">
              <div><span className="block text-[13px] text-muted">{fran}</span><span className="font-heading text-[22px] text-body tabular-nums">{rad.before}</span></div>
              <div><span className="block text-[13px] text-muted">{till}</span><span className="font-heading text-[22px] text-primary tabular-nums">{rad.after}</span></div>
            </dd>
            {rad.delta && <dd className="mt-2 text-[13px] text-body">Förändring: {rad.delta}</dd>}
          </div>
        ))}
      </dl>
    </div>
  );
}
