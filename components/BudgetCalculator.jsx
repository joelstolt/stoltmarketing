"use client";
import { useId, useState } from "react";

const money = (n) => new Intl.NumberFormat("sv-SE", { maximumFractionDigits: 0 }).format(n);
export default function BudgetCalculator({ mode = "website" }) {
  const id = useId();
  const [start, setStart] = useState(0), [monthly, setMonthly] = useState(mode === "seo" ? 2990 : 1990), [months, setMonths] = useState(12), [extras, setExtras] = useState(0), [order, setOrder] = useState(15000), [margin, setMargin] = useState(30);
  const seo = mode === "seo";
  const fields = seo ? [["Månadsbudget för SEO (kr)",monthly,setMonthly],["Intäkt per extra uppdrag (kr)",order,setOrder],["Täckningsgrad efter rörliga kostnader (%)",margin,setMargin]] : [["Startkostnad (kr)",start,setStart],["Månadspris (kr)",monthly,setMonthly],["Antal månader",months,setMonths],["Övriga kostnader under perioden (kr)",extras,setExtras]];
  const contribution = order * margin / 100;
  return <section className="article-box"><h3 className="text-[25px] mb-3">{seo ? "Räkna på när kostnaden täcks" : "Räkna din totalkostnad"}</h3><p className="text-[15px] mb-5">Alla belopp exklusive moms. {seo ? "Siffrorna är ett räkneexempel. Kalkylen förutsäger inte fler uppdrag eller effekten av SEO." : "Fyll i värdena från din offert. Förvalet visar hemsidepaketet Bredd under första avtalsåret, utan tillägg."}</p><div className="grid sm:grid-cols-2 gap-5">{fields.map(([label,value,setValue],i) => <label key={label} className="form-field" htmlFor={`${id}-${i}`}>{label}<input id={`${id}-${i}`} type="number" inputMode="decimal" min={label.includes("månader") ? 1 : 0} max={label.includes("%") ? 100 : undefined} value={value} onChange={(e) => setValue(Math.max(0, Math.min(label.includes("%") ? 100 : 1e9, Number(e.target.value))))} /></label>)}</div><p role="status" className="mt-6 text-heading text-[23px]">{seo ? contribution > 0 ? `${Math.ceil(monthly / contribution)} extra uppdrag per månad täcker ${money(monthly)} kr i SEO-kostnad.` : "Ange intäkt och täckningsgrad över noll för att räkna." : `${money(start + monthly * months + extras)} kr totalt under ${months} månader.`}</p>{seo && <p className="text-[14px] mt-3">{money(contribution)} kr per uppdrag återstår efter angivna rörliga kostnader. Fasta kostnader, din egen tid, skatt och väntan på effekten kan också påverka lönsamheten.</p>}</section>;
}
