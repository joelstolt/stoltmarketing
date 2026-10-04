"use client";

import { ExternalLink, Check } from "lucide-react";
import { PageHero } from "@/components/ui";
import ForeEfter from "@/components/ForeEfter";

export default function CasePage({ data }) {
  return <>
    <PageHero
      breadcrumbs={[{ label: "Start", href: "/" }, { label: "Kundprojekt", href: "/projekt" }, { label: data.title }]}
      badge={data.badge} title={data.heroTitle} subtitle={data.heroSubtitle}
      compact={true} cta={false}
    />
    <section className="py-10 sm:py-14 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {data.screenshot && <figure className="mb-10 bg-surface border border-border rounded-xl overflow-hidden">
          <a href={data.screenshot} target="_blank" rel="noopener noreferrer" aria-label={`Öppna större skärmbild av ${data.title}`}>
            <img src={data.screenshot} alt={`Skärmbild av ${data.title}s webbplats`} className="w-full max-h-[620px] object-cover object-top" width="1440" height="900" fetchPriority="high" />
          </a>
          <figcaption className="px-5 py-3 text-[14px] text-body">Sparad skärmbild av leveransen. Öppna bilden för att se den större.</figcaption>
        </figure>}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-14 items-start">
          <div className="max-w-[720px]">
            <h2 className="font-heading text-[28px] text-heading">Behovet</h2>
            {data.challenge.map((p,i)=><p key={i} className="mt-4 text-[17px] leading-[1.8] text-body">{p}</p>)}
            <h2 className="mt-10 font-heading text-[28px] text-heading">Det jag byggde</h2>
            {data.solution.map((p,i)=><p key={i} className="mt-4 text-[17px] leading-[1.8] text-body">{p}</p>)}
            <h2 className="mt-10 font-heading text-[28px] text-heading">Leverans och redovisade resultat</h2>
            <div className="mt-5 grid sm:grid-cols-3 gap-4">
              {data.results.map(r=><div key={r.label} className="bg-surface rounded-xl border border-border p-5"><p className="font-heading text-[24px] text-primary">{r.value}</p><p className="mt-2 text-[14px] leading-relaxed text-body">{r.label}</p></div>)}
            </div>
            {data.comparison && <div className="mt-8"><ForeEfter rader={data.comparison} /></div>}
            {data.measurementNote && <aside className="mt-6 p-5 border border-border rounded-xl bg-surface" aria-label="Källor och mätningens begränsningar"><h3 className="font-heading text-[20px] text-heading">Så ska uppgifterna läsas</h3><p className="mt-3 text-[15px] leading-[1.8] text-body">{data.measurementNote}</p></aside>}
          </div>
          <aside className="bg-surface rounded-xl border border-border p-6">
            <h2 className="font-heading text-[22px] text-heading">Det här ingick</h2>
            <ul className="mt-4 space-y-3">{data.deliverables.map(d=><li key={d} className="flex gap-2.5 items-start"><Check size={16} aria-hidden="true" className="text-primary mt-1 shrink-0"/><span className="text-[15px] text-body leading-relaxed">{d}</span></li>)}</ul>
            {data.liveUrl && <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className="secondary-btn mt-6">Besök {data.title}<ExternalLink size={15} aria-hidden="true"/></a>}
            <details className="mt-6"><summary className="text-[14px] text-body cursor-pointer">Teknik i projektet</summary><p className="mt-3 text-[14px] leading-relaxed text-body">{data.tech.join(", ")}</p></details>
          </aside>
        </div>
      </div>
    </section>
    <section className="section-gul px-5 sm:px-8 py-12 sm:py-16"><div className="max-w-3xl mx-auto"><h2 className="font-heading text-[32px] text-heading">Behöver din verksamhet något liknande?</h2><p className="mt-4 text-[17px] text-body leading-relaxed">Beskriv vad besökaren ska kunna göra på din hemsida. Jag föreslår ett upplägg och visar vad som ingår.</p><div className="mt-6 flex flex-wrap gap-3"><a href="/kontakt" className="premium-btn">Beskriv ditt projekt</a><a href="/hemsida-foretag" className="secondary-btn">Se hemsideupplägget</a></div></div></section>
  </>;
}
