"use client";

import { useId, useState } from "react";
import { ArrowLeft, Check, X, Printer } from "lucide-react";
import BudgetCalculator from "@/components/BudgetCalculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Checklist({ items }) {
  const id = useId();
  return <fieldset className="article-box"><legend className="px-2 text-[15px] text-muted">Bocka av medan du går igenom</legend>
    {items.map((item, i) => <label key={i} htmlFor={`${id}-${i}`} className="flex gap-3 py-2 cursor-pointer"><input id={`${id}-${i}`} type="checkbox" /><span>{item}</span></label>)}
    <p className="text-[13px] text-muted mt-3">Dina markeringar gäller tills sidan laddas om. Skriv ut för att spara dem.</p>
  </fieldset>;
}

function ItemList({ items, negative = false }) {
  const Icon = negative ? X : Check;
  return <ul>{items.map((item, i) => <li key={i} className="flex gap-3"><Icon aria-hidden="true" size={17} className={`mt-2 shrink-0 ${negative ? "text-red-300" : "text-primary"}`} /><span>{item}</span></li>)}</ul>;
}

function CopyBlock({ block }) {
  const [status, setStatus] = useState("");
  return <section className="article-box">{block.title && <h3 className="text-[21px] mb-3">{block.title}</h3>}<pre className="whitespace-pre-wrap break-words text-[15px] leading-relaxed"><code>{block.text}</code></pre><button type="button" className="article-actions text-primary text-[14px] underline mt-4" onClick={async () => { try { await navigator.clipboard.writeText(block.text); setStatus("Kopierat"); } catch { setStatus("Markera och kopiera texten ovan."); } }}>Kopiera text</button><span role="status" className="text-[14px] ml-3">{status}</span></section>;
}

function Block({ block, id }) {
  switch (block.type) {
    case "calculator": return <BudgetCalculator mode={block.mode} />;
    case "lead": return <p className="text-[20px] text-heading">{block.text}</p>;
    case "p": return <p>{block.text}</p>;
    case "h2": return <h2 id={id}>{block.text}</h2>;
    case "list": return <section className="article-box">{block.title && <h3 className="text-[21px] mb-3">{block.title}</h3>}<ItemList items={block.items} /></section>;
    case "tip": return <aside className="article-box border-l-4 border-l-primary"><h3 className="text-[21px] mb-2">{block.title}</h3><p>{block.text}</p></aside>;
    case "checklist": return <Checklist items={block.items} />;
    case "code": return <CopyBlock block={block} />;
    case "compare": return <div className="grid sm:grid-cols-2 gap-4 my-8">{[block.left, block.right].map((side, i) => <section key={i} className="article-box !m-0"><h3 className="text-[21px] mb-3">{side.title}</h3><ItemList items={side.items} negative={i === 1} /></section>)}</div>;
    case "rows": return <dl className="my-8">{block.items.map((row, i) => <div key={i} className="grid sm:grid-cols-2 gap-1 sm:gap-5 py-4 border-b border-border"><dt className="font-semibold text-heading">{row.label}</dt><dd>{row.text}</dd></div>)}</dl>;
    case "cards": return <div>{block.items.map((card, i) => <section key={i} className="article-box"><h3 className="text-[21px] mb-2">{card.title}</h3><p>{card.text}</p></section>)}</div>;
    default: return null;
  }
}

function words(value) {
  if (typeof value === "string") return value.trim().split(/\s+/).length;
  if (Array.isArray(value)) return value.reduce((n, item) => n + words(item), 0);
  if (value && typeof value === "object") return Object.entries(value).filter(([key]) => key !== "type").reduce((n, [, item]) => n + words(item), 0);
  return 0;
}

export default function BlogArticle({ category, h1, dateDisplay, updatedDate, breadcrumbName, blocks = [], related = [], cta, summary, sources = [], sectionLabel = "Blogg", sectionHref = "/blogg" }) {
  const headings = blocks.map((block, i) => ({ ...block, id: `avsnitt-${i + 1}` })).filter((block) => block.type === "h2");
  const updatedDisplay = /^\d{4}-\d{2}-\d{2}$/.test(updatedDate || "") ? new Intl.DateTimeFormat("sv-SE", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(updatedDate)) : updatedDate;
  const minutes = Math.max(1, Math.ceil(words(blocks) / 200));
  return <><Header /><main id="main-content" tabIndex={-1}>
    <section className="hero-dark">
      <div className="max-w-[744px] mx-auto px-5 sm:px-8 pt-28 sm:pt-32 pb-10 sm:pb-12">
        <nav aria-label="Brödsmulor" className="flex flex-wrap gap-2 text-[13px] text-muted mb-6 font-[family-name:var(--font-ui)]"><a href="/">Start</a><span aria-hidden="true">/</span><a href={sectionHref}>{sectionLabel}</a><span aria-hidden="true">/</span><span aria-current="page">{breadcrumbName}</span></nav>
        <p className="eyebrow mb-5">{category}</p>
        <h1 className="font-heading text-[clamp(32px,4.5vw,50px)] leading-[1.12] mb-6">{h1}</h1>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-muted font-[family-name:var(--font-ui)]"><a href="/om" className="underline underline-offset-4">Av Joel Stolt</a>{dateDisplay && <span>Publicerad {dateDisplay}</span>}{updatedDate && <span>Uppdaterad {updatedDisplay}</span>}<span>{minutes} min läsning</span></div>
      </div>
    </section>
    <article className="px-5 sm:px-8 py-10 sm:py-14">
      <div className="article-body mx-auto">
        {summary && <aside className="article-box !mt-0"><h2 className="!mt-0 !text-[23px]">Det viktigaste</h2>{Array.isArray(summary) ? <ItemList items={summary} /> : <p>{summary}</p>}</aside>}
        {headings.length >= 3 && <nav aria-label="I den här artikeln" className="article-box !mt-0"><h2 className="!mt-0 !text-[23px]">I den här artikeln</h2><ol className="list-decimal pl-5 text-[16px]">{headings.map((heading) => <li key={heading.id}><a href={`#${heading.id}`} className="underline hover:text-primary">{heading.text}</a></li>)}</ol></nav>}
        {blocks.some((b) => b.type === "checklist") && <button type="button" className="article-actions flex items-center gap-2 text-[14px] text-primary mb-6" onClick={() => window.print()}><Printer size={16} aria-hidden="true" />Skriv ut checklistan</button>}
        {blocks.map((block, i) => <Block key={i} block={block} id={`avsnitt-${i + 1}`} />)}
        {sources.length > 0 && <section className="mt-12 pt-6 border-t border-border"><h2 className="!mt-0 !text-[24px]">Källor och vidare läsning</h2><ul className="text-[15px] list-disc pl-5">{sources.map((source) => <li key={source.href}><a href={source.href} className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">{source.title}<span className="sr-only"> (öppnas i ny flik)</span></a></li>)}</ul></section>}
        {related.length > 0 && <section className="mt-12"><h2 className="!mt-0 !text-[24px]">Läs också</h2><ul>{related.map((link) => <li key={link.href}><a href={link.href} className="block article-box !my-2 underline hover:text-primary text-[17px]">{link.title}</a></li>)}</ul></section>}
        {cta && <section className="article-cta article-box !mt-12"><h2 className="!mt-0 !text-[27px]">{cta.heading}</h2><p className="mb-6">{cta.text}</p><a href={cta.href || "/boka"} className="premium-btn">{cta.label || "Boka kostnadsfri genomgång"}</a></section>}
        <div className="mt-10 pt-6 border-t border-border"><a href={sectionHref} className="inline-flex items-center gap-2 text-[15px] hover:text-primary"><ArrowLeft size={16} aria-hidden="true" />{sectionHref === "/guider" ? "Alla guider" : "Alla artiklar"}</a></div>
      </div>
    </article>
  </main><Footer /></>;
}
