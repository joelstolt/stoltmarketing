"use client";

import { ExternalLink, Check } from "lucide-react";
import { Reveal, PageHero } from "@/components/ui";
import CloseBlock from "@/components/CloseBlock";

// Delad mall for kundcase-sidor under /projekt/[slug].
// Datadriven sa att nya case ar en dataentry + tva tunna filer.
export default function CasePage({ data }) {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Projekt", href: "/projekt" },
          { label: data.title },
        ]}
        badge={data.badge}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        bullets={data.bullets}
      />

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[760px] mx-auto">
          <Reveal>
            <h2 className="font-heading font-700 text-[22px] sm:text-[26px] text-heading tracking-[-0.012em]">
              Utmaningen
            </h2>
          </Reveal>
          {data.challenge.map((p, i) => (
            <Reveal key={i} delay={0.06 + i * 0.04}>
              <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.8] text-body">{p}</p>
            </Reveal>
          ))}

          <Reveal>
            <h2 className="font-heading font-700 text-[22px] sm:text-[26px] text-heading tracking-[-0.012em] mt-12">
              Lösningen
            </h2>
          </Reveal>
          {data.solution.map((p, i) => (
            <Reveal key={i} delay={0.06 + i * 0.04}>
              <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.8] text-body">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <div className="mt-12 grid sm:grid-cols-3 gap-4">
              {data.results.map((r) => (
                <div key={r.label} className="bg-surface rounded-[10px] border border-border p-5">
                  <div className="font-heading font-700 text-[20px] text-primary">{r.value}</div>
                  <div className="mt-1 text-[13px] text-body leading-snug">{r.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-wrap gap-2">
              {data.tech.map((t) => (
                <span key={t} className="text-[12px] font-600 text-body bg-surface border border-border rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {data.liveUrl && (
            <Reveal delay={0.14}>
              <a
                href={data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-[15px] font-600 text-primary hover:underline"
              >
                Besök {data.title} <ExternalLink size={15} />
              </a>
            </Reveal>
          )}

          <Reveal delay={0.16}>
            <div className="mt-12 bg-surface rounded-[10px] border border-border p-6">
              <h3 className="font-heading font-700 text-[16px] text-heading">Det här ingick</h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-2.5">
                {data.deliverables.map((d) => (
                  <div key={d} className="flex gap-2.5 items-start">
                    <Check size={15} className="text-primary mt-[3px] flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-[14px] text-body leading-relaxed">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CloseBlock
        title="Vill du ha ett liknande resultat?"
        text="15–20 min. Jag berättar hur jag skulle ta mig an just din sajt."
      />
    </>
  );
}
