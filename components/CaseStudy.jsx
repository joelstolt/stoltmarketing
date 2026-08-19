"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui";
import CloseBlock from "@/components/CloseBlock";

/**
 * Delad mall för kundcase. Befintliga case (Linguista, EdShare m.fl.) har egna
 * komponenter och rörs inte. Nya case skickar in sin data här i stället för att
 * kopiera hela sidan.
 *
 * Obligatoriskt: namn, kund, rubrik, ingress, punkter, utmaning, losningar, teknik.
 * Frivilligt: siffror (stora nyckeltal), matvarden (tabell), url, kalla.
 */
export default function CaseStudy({
  namn,
  kund,
  rubrik,
  ingress,
  punkter = [],
  url,
  utmaningRubrik = "Utmaningen",
  utmaningTitel,
  utmaning = [],
  losningTitel,
  losningar = [],
  resultatTitel,
  resultatIngress,
  siffror = [],
  matvarden = [],
  kalla,
  teknik = [],
}) {
  return (
    <>
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
              <a href="/" className="hover:text-heading transition-colors">Start</a>
              <span className="text-border">·</span>
              <a href="/projekt" className="hover:text-heading transition-colors">Projekt</a>
              <span className="text-border">·</span>
              <span className="text-heading font-500">{namn}</span>
            </nav>
          </Reveal>

          <Reveal delay={0.04}>
            <span className="eyebrow">Kundcase · {kund}</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading font-600 text-[clamp(38px,5.5vw,68px)] leading-[1.05] tracking-[-0.015em] text-heading max-w-[860px]">
              {rubrik}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 text-[16px] sm:text-[18px] leading-relaxed text-body max-w-[620px]">
              {ingress}
            </p>
          </Reveal>

          {punkter.length > 0 && (
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {punkter.map((p) => (
                  <span
                    key={p}
                    className="text-[13px] font-600 px-3.5 py-2 rounded-full"
                    style={{
                      background: "rgba(242,194,48,0.16)",
                      border: "1px solid rgba(242,194,48,0.32)",
                      color: "var(--color-heading)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          {url && (
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href={url} target="_blank" rel="noopener noreferrer" className="premium-btn">
                  <span>Se sajten</span>
                  <ArrowUpRight size={16} className="opacity-80" />
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Utmaningen */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeader badge={utmaningRubrik} title={utmaningTitel} />
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-body">
              {utmaning.map((stycke, i) => (
                <p key={i}>{stycke}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lösningen */}
      <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: "var(--color-surface-muted)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Lösningen" title={losningTitel} maxWidth="640px" />
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {losningar.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="bg-surface rounded-[12px] border border-border p-7 h-full">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg mb-4"
                    style={{ background: "rgba(242,194,48,0.18)" }}
                  >
                    <Check size={18} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <h3 className="font-heading font-700 text-[19px] text-heading mb-2">{s.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-body">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resultatet */}
      {(siffror.length > 0 || matvarden.length > 0) && (
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Resultatet"
              title={resultatTitel}
              subtitle={resultatIngress}
              maxWidth="660px"
            />

            {siffror.length > 0 && (
              <div
                className={`mt-12 grid grid-cols-2 gap-5 ${
                  siffror.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
                }`}
              >
                {siffror.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.06}>
                    <div className="bg-surface rounded-[14px] border border-border p-8 text-center">
                      <div
                        className="font-heading font-600 leading-none text-heading"
                        style={{ fontSize: s.value.length > 4 ? 40 : 56 }}
                      >
                        {s.value}
                        {s.suffix && (
                          <span className="text-muted" style={{ fontSize: 20 }}>{s.suffix}</span>
                        )}
                      </div>
                      <p className="mt-3 text-[15px] font-600 text-heading">{s.label}</p>
                      {s.not && <p className="mt-1 text-[13px] text-muted">{s.not}</p>}
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {matvarden.length > 0 && (
              <Reveal delay={0.1}>
                <div className="mt-6 bg-surface rounded-[14px] border border-border overflow-hidden">
                  <div className="hidden sm:grid grid-cols-[1.5fr_1fr_1fr_auto] gap-4 px-8 py-4 border-b border-border-light text-[12px] font-600 text-muted uppercase tracking-wider">
                    <span>Mätvärde</span>
                    <span className="text-right">Typisk branschsajt</span>
                    <span className="text-right">Efter</span>
                    <span className="text-right">Skillnad</span>
                  </div>
                  {matvarden.map((m) => (
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
            )}

            {kalla && (
              <Reveal delay={0.14}>
                <p className="mt-4 text-[13px] text-muted max-w-[640px]">{kalla}</p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Teknik */}
      {teknik.length > 0 && (
        <section className="pb-16 sm:pb-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[12px] font-600 text-muted uppercase tracking-wider mr-2">
                  Teknik
                </span>
                {teknik.map((t) => (
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
      )}

      <CloseBlock
        title="Vill du ha samma resa för er sajt?"
        text="15–20 min. Vi tittar på var er sajt står idag, och vad en ombyggnad skulle ge."
      />
    </>
  );
}
