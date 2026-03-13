"use client";

import { useRef, useState, useEffect } from "react";
import { Check, Shield, Clock, Zap } from "lucide-react";
import { Reveal, Badge } from "@/components/ui";

const baseFeatures = [
  "Daglig backup av databas och filer",
  "Proaktiv säkerhetsövervakning",
  "Uptime monitoring med larm",
  "Staging-miljö för säkra uppdateringar",
];

const packages = [
  {
    name: "Bas",
    focus: "Grundtrygghet & drift",
    price: "1 500",
    hours: "0 timmar inkluderade",
    response: "2–14 dagar",
    maintenance: "Månadsvis genomgång",
    features: [
      "WordPress & plugin-underhåll månadsvis",
      "Support i mån av tid",
      "Alla grundfunktioner inkluderade",
    ],
    note: "Bricks Builder-licens (790 kr/år) faktureras separat.",
    popular: false,
  },
  {
    name: "Medium",
    focus: "Aktivt underhåll & prioriterad support",
    price: "6 500",
    hours: "10 timmar/mån",
    response: "1–2 arbetsdagar",
    maintenance: "Veckovis genomgång",
    features: [
      "10h dedikerad utvecklingstid",
      "Prioriterad support",
      "Veckovis säkerhet & uppdateringar",
      "Bricks Builder-licens ingår",
    ],
    note: null,
    popular: true,
  },
  {
    name: "Max",
    focus: "Strategisk tillväxt & högsta beredskap",
    price: "12 000",
    hours: "20 timmar/mån",
    response: "Ofta samma dag",
    maintenance: "Veckovis + proaktiv optimering",
    features: [
      "20h dedikerad utvecklingstid (värde 13 000 kr)",
      "Högsta prioritet på support",
      "Veckovis genomgång + prestanda",
      "Bricks Builder-licens ingår",
      "Proaktiv konverteringsoptimering",
    ],
    note: null,
    popular: false,
  },
];

const hourUsage = [
  "Utbyggnad av nya funktioner eller designjusteringar",
  "Uppdatering av produkter, banners eller kampanjmaterial",
  "Löpande hastighetsoptimering och konverteringsjusteringar",
];

export default function AvtalContent() {
  return (
    <div className="min-h-screen bg-base">
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)",
          }}
        />
        <div
          className="absolute -top-[120px] -right-[80px] w-[400px] h-[400px] pointer-events-none"
          style={{
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
            background:
              "radial-gradient(ellipse, rgba(29,78,216,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16 text-center">
          <Reveal>
            <Badge>Förvaltningsavtal 2026</Badge>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-5 font-heading font-800 text-[clamp(28px,5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading">
              Drift, Säkerhet & Utveckling
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[520px] mx-auto">
              Ett aktivt förvaltningsavtal som säkerställer att er
              e-handelsplattform är tekniskt optimerad, säker och i ständig
              tillväxt.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/70 border border-border backdrop-blur-sm text-[14px] font-600">
              <span className="text-muted">Kund:</span>
              <span className="text-heading">SMH, KYH och Hermods</span>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
      </section>

      <div className="max-w-[880px] mx-auto px-5 sm:px-8">
        {/* ═══ GRUNDLÄGGANDE STANDARD ═══ */}
        <Reveal>
          <section className="mt-8 p-7 sm:p-9 bg-surface rounded-[20px] border border-border shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-[12px] bg-primary/6 flex items-center justify-center">
                <Shield size={20} className="text-primary" />
              </div>
              <div>
                <h2 className="font-heading font-700 text-[20px] text-heading tracking-tight">
                  Grundläggande teknisk standard
                </h2>
                <p className="text-[13px] text-muted">Gäller samtliga nivåer</p>
              </div>
            </div>

            <p className="text-[15px] text-body mb-5 max-w-[600px]">
              För att er webbshop ska prestera optimalt dygnet runt ingår
              följande i alla paket:
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {baseFeatures.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 p-3.5 bg-surface-muted rounded-xl text-[14px] text-body"
                >
                  <Check
                    size={16}
                    className="text-primary flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  {f}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ═══ PACKAGES ═══ */}
        <Reveal delay={0.06}>
          <h2 className="mt-14 font-heading font-800 text-[28px] text-heading tracking-[-0.02em] text-center">
            Förvaltningsnivåer
          </h2>
          <p className="text-center text-[15px] text-muted mt-2">
            Välj den nivå som passar ert behov och ambitionsnivå.
          </p>
        </Reveal>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.06 + 0.1}>
              <div
                className={`relative h-full rounded-[20px] p-6 flex flex-col ${
                  pkg.popular
                    ? "bg-surface border-2 border-primary/20 shadow-[0_4px_20px_rgba(29,78,216,0.08)]"
                    : "bg-surface border border-border shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-6 text-[11px] font-700 text-white bg-primary px-3 py-1 rounded-full uppercase tracking-wider">
                    Rekommenderad
                  </span>
                )}

                <div className="text-[12px] font-600 text-primary uppercase tracking-wider">
                  {pkg.name}
                </div>
                <div className="text-[12px] text-muted mt-1">{pkg.focus}</div>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading font-800 text-[32px] tracking-tight text-heading">
                    {pkg.price}
                  </span>
                  <span className="text-[14px] text-muted">kr/mån</span>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2.5 text-[13px] text-body">
                    <Clock size={16} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="font-600">Svarstid</div>
                      <div className="text-muted">{pkg.response}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] text-body">
                    <Zap size={16} className="text-primary flex-shrink-0" />
                    <div>
                      <div className="font-600">Timmar</div>
                      <div className="text-muted">{pkg.hours}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-border-light flex-1">
                  <div className="flex flex-col gap-2.5">
                    {pkg.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-2 text-[14px] text-body"
                      >
                        <Check
                          size={15}
                          className="text-primary flex-shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {pkg.note && (
                  <p className="mt-4 pt-3 border-t border-border-light text-[12px] text-muted italic">
                    {pkg.note}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* ═══ DEFINITION AV TIMMAR ═══ */}
        <Reveal>
          <section className="mt-12 p-7 sm:p-9 bg-surface rounded-[20px] border border-border">
            <h2 className="font-heading font-700 text-[20px] text-heading mb-3 tracking-tight">
              Definition av avsatta timmar
            </h2>
            <p className="text-[15px] text-body mb-5">
              Timmarna i Medium och Max är dedikerad tid reserverad för er. De
              kan användas till:
            </p>
            <div className="flex flex-col gap-3">
              {hourUsage.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-[14px] text-body"
                >
                  <Check
                    size={16}
                    className="text-primary flex-shrink-0"
                    strokeWidth={2.5}
                  />
                  {item}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* ═══ PRISER ═══ */}
        <Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-7 bg-surface rounded-[20px] border border-border text-center">
              <div className="text-[12px] font-600 text-muted uppercase tracking-wider">
                Konsulttimme
              </div>
              <div className="mt-3 font-heading font-800 text-[32px] text-heading tracking-tight">
                650{" "}
                <span className="text-[15px] text-muted font-500">kr/h</span>
              </div>
              <div className="text-[13px] text-muted mt-1">
                Vardagar 07:00–17:00
              </div>
            </div>
            <div className="p-7 bg-surface rounded-[20px] border border-border text-center">
              <div className="text-[12px] font-600 text-muted uppercase tracking-wider">
                Akut jourtid
              </div>
              <div className="mt-3 font-heading font-800 text-[32px] text-heading tracking-tight">
                1 300{" "}
                <span className="text-[15px] text-muted font-500">kr/h</span>
              </div>
              <div className="text-[13px] text-muted mt-1">
                Kritiska fel efter kl. 17:00
              </div>
            </div>
          </div>
        </Reveal>

        {/* ═══ VARFÖR ═══ */}
        <Reveal>
          <section className="relative mt-12 mb-16 p-10 rounded-[20px] overflow-hidden text-center">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(168deg, #EEF2FF 0%, #E0E7FF 40%, #DBEAFE 70%, #EFF6FF 100%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="font-heading font-800 text-[24px] text-heading tracking-[-0.02em]">
                Varför välja ett aktivt avtal?
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] text-body leading-relaxed max-w-[560px] mx-auto">
                Webbshoppar som SMH, KYH och Hermods kräver ständig tillsyn för
                att inte tappa fart. Genom avsatta timmar säkerställer ni att
                sajten inte bara överlever — utan faktiskt utvecklas i takt med
                marknaden. Ni får en trygg partner som känner er kodbas och som
                kan agera snabbt när möjligheter dyker upp.
              </p>
            </div>
          </section>
        </Reveal>

        {/* ═══ FOOTER ═══ */}
        <div className="border-t border-border py-8 text-center mb-4">
          <p className="text-[13px] text-muted">
            Stolt Marketing · joel@stoltmarketing.se · Hässleholm, Sverige
          </p>
        </div>
      </div>
    </div>
  );
}
