"use client";

const format = (value) => new Intl.NumberFormat("sv-SE").format(value);
const date = (value) => new Intl.DateTimeFormat("sv-SE", { year: "numeric", month: "long", day: "numeric", timeZone: "Europe/Stockholm" }).format(new Date(value));

export default function Kundmotor({ data }) {
  const snapshot = data.kalla === "snapshot";
  const end = data.periodEnd || data.updatedAt;
  const start = data.periodStart || new Date(new Date(end).getTime() - data.dagar * 86400000).toISOString();
  const numbers = [{ value: data.visitors, label: "Besökare, summerat per sajt" }, { value: data.pageviews, label: "Sidvisningar" }, { value: data.leads, label: "Formulär-, boknings- och kontaktklick" }];
  return <section id="kundmotor" className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
    <p className="eyebrow">Kundernas hemsidor</p><h2 className="text-[clamp(30px,4vw,48px)] leading-[1.12] mt-5 mb-5">Så används sajterna jag har byggt</h2>
    <p className="max-w-[65ch] mb-8 text-[17px]">Siffrorna visar aktivitet på {data.sajter} kundsajter. De är bevis för webbplatsarbetet och visar inte effekten av den nya förfrågningsrutan.</p>
    <div className="grid sm:grid-cols-3 gap-7">{numbers.map((number) => <div key={number.label} className="border-t-2 border-primary pt-5"><p className="font-heading text-[clamp(45px,6vw,78px)] leading-none text-heading tabular-nums">{format(number.value)}</p><p className="text-[14px] font-[family-name:var(--font-ui)] mt-3">{number.label}</p></div>)}</div>
    <p className="text-[14px] text-muted mt-7">{snapshot ? `Historiskt 30-dagarsutdrag, hämtat ${date(data.updatedAt)}. Exakta periodgränser saknas i det sparade utdraget.` : `Mätperiod: ${date(start)} till ${date(end)}. Hämtat ${date(data.updatedAt)}.`}</p>
    <ul className="mt-7 border-t border-border">{data.rows.map((row) => <li key={row.slug} className="border-b border-border py-5"><a href={row.href} className="flex flex-col sm:flex-row sm:justify-between gap-2 hover:text-primary"><span className="text-[21px] text-heading">{row.name}<span className="block text-[13px] text-muted">{row.ort}</span></span><span className="text-primary text-[16px]">{row.offert} registrerade formulärevents{row.samtal > 0 ? ` · ${row.samtal} telefonklick` : ""}</span></a></li>)}</ul>
    <details className="mt-6 max-w-[75ch] text-[15px]"><summary className="cursor-pointer text-primary py-2">Så räknas siffrorna</summary><p className="mt-3">Källa: kundsajternas Umami-statistik. Formulär, bokningar och klick på ring eller mejla räknas; nyhetsbrev räknas inte. Ett klick på ett telefonnummer bevisar inte att ett samtal genomfördes. Events kan omfatta upprepade handlingar och är inte unika kunder, affärer eller intäkter.</p><p className="mt-3">Besökare summeras per sajt och kan inte tolkas som unika personer mellan alla sajter. Mätningen isolerar inte effekten av design, SEO eller annonser. Aktuella data hämtas ungefär varje timme när mättjänsten svarar. Vid avbrott visas ett daterat, sparat utdrag.</p></details>
  </section>;
}
