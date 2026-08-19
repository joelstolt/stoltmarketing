"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, Badge, SectionHeader } from "@/components/ui";
import CloseBlock from "@/components/CloseBlock";
import ForeEfter from "@/components/ForeEfter";

const heroStats = [
  "10x snabbare serversvar",
  "−86 % sidvikt",
  "100/100 i prestanda, tillgänglighet & AI",
];

const solutions = [
  {
    title: "Statisk sajt på global edge",
    text: "Ombyggd i Next.js och serverad från Cloudflares edge-nätverk. Ingen server, ingen databas och inga plugins att hålla uppdaterade.",
  },
  {
    title: "Eget innehållssystem",
    text: "Artiklar och nyheter flyttades till ett CMS (Sanity) som EdShare själva kan uppdatera, utan utvecklare.",
  },
  {
    title: "Tillgänglig och AI-redo",
    text: "Varje sida härdad mot WCAG 2.1 AA, korrekt SEO-struktur (sitemap, canonical, schema) och ren semantik som AI-svar kan läsa.",
  },
  {
    title: "Noll onödig vikt",
    text: "Self-hostade fonter och borttagna tredjepartsskript. Sidan väger numera en sjundedel av den gamla.",
  },
];

const scores = [
  { label: "Prestanda", value: 100, from: 96 },
  { label: "Tillgänglighet", value: 100, from: 92 },
  { label: "AI-synlighet", value: 100, from: 50 },
];

const metrics = [
  { label: "Serversvar (TTFB)", before: "1 318 ms", after: "135 ms", delta: "−90 %" },
  { label: "Sidvikt", before: "2,67 MB", after: "0,37 MB", delta: "−86 %" },
  { label: "First Contentful Paint", before: "742 ms", after: "417 ms", delta: "−44 %" },
  { label: "Largest Contentful Paint", before: "870 ms", after: "588 ms", delta: "−32 %" },
  { label: "Speed Index", before: "1 679 ms", after: "606 ms", delta: "−64 %" },
  { label: "SEO (Lighthouse)", before: "85", after: "92", delta: "+7" },
];

const tech = ["Next.js", "React", "Cloudflare Pages", "Sanity CMS", "WCAG 2.1 AA", "Self-hostade fonter"];

export default function EdshareCase() {
  return (
    <>
      {/* ── Hero (bläck) ── */}
      <section className="hero-dark relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
              <a href="/" className="hover:text-heading transition-colors">Start</a>
              <span className="text-border">·</span>
              <a href="/projekt" className="hover:text-heading transition-colors">Projekt</a>
              <span className="text-border">·</span>
              <span className="text-heading font-500">EdShare</span>
            </nav>
          </Reveal>

          <Reveal delay={0.04}>
            <span className="eyebrow">Kundcase · AcadeMedia EdTech</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading font-600 text-[clamp(38px,5.5vw,68px)] leading-[1.05] tracking-[-0.015em] text-heading max-w-[860px]">
              Från en WordPress-sajt vid vägs ände till tre 100:or.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-body max-w-[620px]">
              EdShare hjälper skolor att dela lärarkompetens. Vi byggde om deras
              webbplats från grunden: snabbare, tillgänglig enligt lag och redo
              för hur både besökare och AI hittar information idag.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {heroStats.map((s) => (
                <span
                  key={s}
                  className="text-[13px] font-600 px-3.5 py-2 rounded-full"
                  style={{
                    background: "rgba(242,194,48,0.16)",
                    border: "1px solid rgba(242,194,48,0.32)",
                    color: "var(--color-heading)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://www.edshare.se"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn"
              >
                <span>Se sajten</span>
                <ArrowUpRight size={16} className="opacity-80" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Utmaningen ── */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            badge="Utmaningen"
            title="En sajt som tjänat sitt syfte, men nått sin gräns."
          />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-body">
              <p>
                EdShares webbplats var byggd i WordPress och hade fungerat väl
                under flera år. Men den hade blivit tung: en lång rad plugins och
                tredjepartsskript, långsamt serversvar och ett växande ansvar för
                uppdateringar och säkerhet.
              </p>
              <p>
                Inför nästa fas behövde EdShare en sajt som var snabb, tillgänglig
                enligt lag, enkel att uppdatera, och redo för hur både besökare och
                AI hittar information idag.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Lösningen ── */}
      <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: "var(--color-surface-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Lösningen"
            title="Ombyggd från grunden, för fart och framtid."
            maxWidth="640px"
          />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="bg-surface rounded-[12px] border border-border p-7 h-full">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                    style={{ background: "rgba(242,194,48,0.18)" }}
                  >
                    <Check size={18} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <h3 className="font-heading font-700 text-[19px] text-heading mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-body">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resultatet (före/efter) ── */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Resultatet"
            title="Mätbart bättre, på varje punkt."
            subtitle="Samma Lighthouse-test kört på den gamla och den nya sajten. Den nya vinner överallt, och tre kategorier får full pott."
            maxWidth="660px"
          />

          {/* Score-kort */}
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {scores.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="bg-surface rounded-[14px] border border-border p-8 text-center">
                  <div className="font-heading font-600 leading-none text-heading" style={{ fontSize: 66 }}>
                    {s.value}
                    <span className="text-muted" style={{ fontSize: 22 }}>/100</span>
                  </div>
                  <p className="mt-3 text-[15px] font-600 text-heading">{s.label}</p>
                  <p className="mt-1 text-[13px] text-muted">↑ från {s.from}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Före/efter-reglaget: dra själv mellan lägena */}
          <Reveal delay={0.08}>
            <div className="mt-10">
              <ForeEfter rader={metrics} />
            </div>
          </Reveal>

          {/* Mätvärden före/efter */}
          <Reveal delay={0.1}>
            <div className="mt-6 bg-surface rounded-[14px] border border-border overflow-hidden">
              <div className="hidden sm:grid grid-cols-[1.5fr_1fr_1fr_auto] gap-4 px-8 py-4 border-b border-border-light text-[12px] font-600 text-muted uppercase tracking-wider">
                <span>Mätvärde</span>
                <span className="text-right">Före (WordPress)</span>
                <span className="text-right">Efter</span>
                <span className="text-right">Δ</span>
              </div>
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-wrap sm:grid sm:grid-cols-[1.5fr_1fr_1fr_auto] items-center gap-x-4 gap-y-1 px-6 sm:px-8 py-4 border-b border-border-light last:border-b-0"
                >
                  <span className="w-full sm:w-auto text-body font-600 text-[14.5px]">{m.label}</span>
                  <span className="text-muted text-[14.5px] sm:text-right">{m.before}</span>
                  <span className="font-heading font-700 text-heading text-[15px] sm:text-right">{m.after}</span>
                  <span className="sm:text-right ml-auto sm:ml-0">
                    <span
                      className="text-[12px] font-700 px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(68,86,60,0.10)", color: "var(--color-field)" }}
                    >
                      {m.delta}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-4 text-[13px] text-muted max-w-[640px]">
              Källa: Google Lighthouse (desktop) samt uppmätt serversvar. Gammal
              sajt: WordPress på delad hosting. Ny sajt: statisk Next.js på
              Cloudflares edge-nätverk.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Teknik ── */}
      <section className="pb-16 sm:pb-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[12px] font-600 text-muted uppercase tracking-wider mr-2">
                Teknik
              </span>
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-[13px] font-500 text-body px-3 py-1.5 rounded-md bg-surface border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CloseBlock
        title="Vill du ha samma resa för er sajt?"
        text="15–20 min. Vi tittar på var er sajt står idag, och vad en ombyggnad skulle ge."
      />
    </>
  );
}
