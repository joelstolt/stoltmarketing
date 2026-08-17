"use client";

import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui";

const heroStats = [
  "100/100 i prestanda, tillgänglighet, best practices & AI",
  "Dubbelt så snabb — trots att den gamla var snabb",
  "Publicera → live på minuter, utan utvecklare",
];

const solutions = [
  {
    title: "Statisk sajt på global edge",
    text: "Ombyggd i Next.js och serverad från Cloudflares edge-nätverk. Ingen server, ingen databas och inga plugins att hålla uppdaterade.",
  },
  {
    title: "Innehåll som publicerar sig självt",
    text: "70+ artiklar migrerades till ett eget CMS (Sanity). När redaktionen trycker publicera byggs sajten om automatiskt och ändringen är live inom minuter — helt utan utvecklare.",
  },
  {
    title: "Tillgänglighet på lagkravsnivå",
    text: "EU:s tillgänglighetsdirektiv ställer krav på skolaktörer. Varje sida byggdes med kontraster på AAA-nivå, full tangentbordsnavigering och semantik som ger 100/100 i Lighthouse.",
  },
  {
    title: "Byggd för att generera förfrågningar",
    text: "Kontaktformulär som skickar leads direkt till rätt personer, tydliga CTA:er på varje tjänstesida, sök över hela sajten och 51 dokumenterade språk som skolor faktiskt söker på.",
  },
];

const scores = [
  { label: "Prestanda", value: 100, from: 99 },
  { label: "Tillgänglighet", value: 100, from: 82 },
  { label: "Best practices", value: 100, from: 96 },
  { label: "AI-läsbarhet", value: 100, from: 50 },
];

const metrics = [
  { label: "First Contentful Paint", before: "607 ms", after: "292 ms", delta: "−52 %" },
  { label: "Largest Contentful Paint", before: "980 ms", after: "532 ms", delta: "−46 %" },
  { label: "Speed Index", before: "745 ms", after: "392 ms", delta: "−47 %" },
  { label: "Tid till interaktiv", before: "980 ms", after: "532 ms", delta: "−46 %" },
  { label: "Sidvikt (startsidan)", before: "1,74 MB", after: "1,17 MB", delta: "−33 %" },
  { label: "Bildarkiv (hela sajten)", before: "26,6 MB", after: "2,1 MB", delta: "−92 %" },
];

const tech = ["Next.js", "React", "Cloudflare Pages", "Sanity CMS", "GitHub Actions", "Resend", "WCAG 2.1"];

export default function LinguistaCase() {
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
              <span className="text-heading font-500">Linguista</span>
            </nav>
          </Reveal>

          <Reveal delay={0.04}>
            <span className="eyebrow">Kundcase · AcadeMedia</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading font-600 text-[clamp(38px,5.5vw,68px)] leading-[1.05] tracking-[-0.015em] text-heading max-w-[860px]">
              Fyra 100:or och en sajt som uppdaterar sig själv.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-body max-w-[620px]">
              Linguista samordnar modersmålsundervisning, moderna språk och
              studiehandledning för skolor i hela Sverige. Vi byggde om deras
              webbplats från grunden — pixel-perfect från designskiss till full
              pott i varje kategori Lighthouse mäter.
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
                    color: "var(--color-base)",
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
                href="https://www.linguista.se"
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
            title="En snabb sajt räcker inte längre."
          />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-body">
              <p>
                Linguistas WordPress-sajt var faktiskt snabb — men snabbhet är
                bara en av kategorierna som räknas idag. Tillgängligheten låg
                på 82 av 100, en bra bit under vad EU:s tillgänglighetsdirektiv
                förväntar sig av aktörer i skolvärlden. AI-läsbarheten låg på
                50 — hälften av innehållet var i praktiken osynligt för
                AI-assistenter som allt fler beslutfattare söker med.
              </p>
              <p>
                Dessutom krävde varje innehållsändring en utvecklare eller
                WordPress-inloggning med allt vad det innebär av plugins,
                uppdateringar och säkerhetsansvar. Inför nästa fas behövde
                Linguista en sajt som redaktionen kunde driva helt själva.
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
            title="Ombyggd från grunden, självservad från dag ett."
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
            title="Full pott i allt som går att mäta."
            subtitle="Samma Lighthouse-test kört på den gamla och den nya sajten. Fyra kategorier av fyra får 100 av 100."
            maxWidth="660px"
          />

          {/* Score-kort */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {scores.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="bg-surface rounded-[14px] border border-border p-8 text-center">
                  <div className="font-heading font-600 leading-none text-heading" style={{ fontSize: 56 }}>
                    {s.value}
                    <span className="text-muted" style={{ fontSize: 20 }}>/100</span>
                  </div>
                  <p className="mt-3 text-[15px] font-600 text-heading">{s.label}</p>
                  <p className="mt-1 text-[13px] text-muted">↑ från {s.from}</p>
                </div>
              </Reveal>
            ))}
          </div>

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
              Källa: Google Lighthouse 13.4 (desktop), samma test på gamla och
              nya sajtens startsida, juli 2026. Gammal sajt: WordPress. Ny
              sajt: statisk Next.js på Cloudflares edge-nätverk.
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

      {/* ── Finale-CTA (rapsgul) ── */}
      <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <Reveal>
            <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">
              Vill du ha samma resa för er sajt?
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri genomgång så tittar vi på var er sajt står idag,
              och vad en ombyggnad skulle ge.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/boka" className="premium-btn mt-8 mx-auto">
              <span>Boka kostnadsfri genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
