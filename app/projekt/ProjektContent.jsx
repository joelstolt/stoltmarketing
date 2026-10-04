"use client";

import { useState } from "react";
import { CASES } from "@/lib/case-data";
import { PageHero } from "@/components/ui";

const categories = ["Alla", "Webb", "E-handel", "SEO", "Tillgänglighet"];
const order = ["niklassonsflytt", "premiebygg", "arkipel", "ngtab", "linguista", "edshare", "forskolan-harpan", "pingstkyrkan", "gardetshundtrim", "batteriproffs"];
const otherProjects = [
  { title: "LIA-platsbanken", text: "Plattform för AcadeMedias YH-studenter och arbetsgivare med registrering, sök och matchning.", image: "/case-lia.webp" },
  { title: "RBN Utbildning", text: "Grafisk profil, webbplats och integration av utbildningsdata.", image: "/case-rbn.webp", href: "https://rbnutbildning.se" },
  { title: "Omniway", text: "Webbplats för en lärplattform med arbete kring kontrast, struktur och tillgänglighet.", image: "/case-omniway.webp", href: "https://omniway.se" },
  { title: "Kvota.se", text: "Egen produkt för offertutkast med AI-stöd. Användaren kontrollerar pris, innehåll och villkor före utskick.", image: "/case-kvota.webp", href: "https://kvota.se" },
  { title: "SMH / KYH / Hermods", text: "Förvaltning och utveckling av utbildningsbutiker, bland annat betalning och deltagarflöden.", image: "/case-smh.webp" },
];

export default function ProjektContent() {
  const [filter, setFilter] = useState("Alla");
  const projects = order.map(key => CASES[key]).filter(p => filter === "Alla" || p.category.includes(filter));
  return <>
    <PageHero breadcrumbs={[{ label: "Start", href: "/" }, { label: "Kundprojekt" }]} badge="Kundprojekt"
      title="Se vad jag har byggt." highlight="har byggt" compact cta={false}
      subtitle="Hemsidor för lokala företag, publicering för redaktioner och en egen webbutik. Börja med det case som liknar ditt behov." />
    <section className="px-5 sm:px-8 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-5" aria-label="Filtrera kundprojekt">
          {categories.map(cat => <button key={cat} type="button" onClick={() => setFilter(cat)} aria-pressed={filter === cat}
            className="rounded-lg border px-4 py-2.5 text-[15px] font-600" style={{ background: filter === cat ? "#F2C230" : "#161309", color: filter === cat ? "#191405" : "#CFC9B8", borderColor: filter === cat ? "#F2C230" : "rgba(242,236,221,0.16)" }}>{cat}</button>)}
        </div>
        <p className="mb-8 text-[15px] leading-relaxed text-body">Kontaktaktiviteter, levererade funktioner och tekniska tester visar olika saker. Varje case förklarar sin källa och period. Resultaten är inga löften om vad din sajt kommer att ge.</p>
        <p className="sr-only" role="status">{projects.length} projekt visas.</p>
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => <article key={project.slug} className="rounded-xl border border-border bg-surface overflow-hidden flex flex-col">
            <a href={`/projekt/${project.slug}`} aria-label={`Läs caset om ${project.title}`} className="block overflow-hidden">
              <img src={project.screenshot} alt={`Skärmbild av ${project.title}s webbplats`} width="1440" height="900" loading={i < 2 ? "eager" : "lazy"} className="w-full h-[260px] sm:h-[320px] object-cover object-top" />
            </a>
            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <p className="text-[14px] text-primary">{project.badge}</p>
              <h2 className="mt-2 font-heading text-[28px] text-heading"><a href={`/projekt/${project.slug}`} className="hover:underline">{project.title}</a></h2>
              <p className="mt-3 text-[16px] text-body leading-relaxed">{project.heroSubtitle}</p>
              <div className="mt-5 border-t border-border pt-4"><p className="font-heading text-[23px] text-primary">{project.results[0].value}</p><p className="mt-1 text-[14px] text-body">{project.results[0].label}</p></div>
              <a href={`/projekt/${project.slug}`} className="secondary-btn mt-6 self-start">Se leverans och underlag</a>
            </div>
          </article>)}
        </div>
        {filter === "Alla" && <section className="mt-16">
          <h2 className="font-heading text-[30px] text-heading">Fler uppdrag och egna projekt</h2>
          <p className="mt-3 text-[16px] text-body">Här visar jag exempel på annan leverans. Inga uppmätta affärsresultat redovisas för dessa uppdrag.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{otherProjects.map(p => <article key={p.title} className="border border-border rounded-xl overflow-hidden bg-surface"><img src={p.image} alt={`Skärmbild från ${p.title}`} width="1440" height="900" loading="lazy" className="h-[180px] w-full object-cover object-top"/><div className="p-5"><h3 className="font-heading text-[22px] text-heading">{p.title}</h3><p className="mt-3 text-[15px] leading-relaxed text-body">{p.text}</p>{p.href && <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-primary underline underline-offset-4">Besök {p.title}</a>}</div></article>)}</div>
        </section>}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-8"><p className="text-[17px] text-body">Vill du ha ett upplägg för din verksamhet?</p><a href="/kontakt" className="premium-btn">Beskriv ditt projekt</a></div>
      </div>
    </section>
  </>;
}
