"use client";

import { Check, Clock, Zap } from "lucide-react";
import { Reveal, Badge } from "@/components/ui";

const packages = [
  {
    name: "Bas",
    focus: "Grundtrygghet & drift",
    price: "2 000",
    hours: "0 timmar inkluderade",
    response: "2–14 dagar",
    maintenance: "Månadsvis genomgång",
    features: [
      "Daglig säkerhetskopiering av hela sajten",
      "Testmiljö så uppdateringar kan testas innan de går live",
      "Löpande underhåll och uppdateringar varje månad",
      "Support i mån av tid",
    ],
    note: null,
    popular: false,
  },
  {
    name: "Medium",
    focus: "Aktivt underhåll & prioriterad support",
    price: "9 000",
    hours: "10 timmar/mån",
    response: "1–2 arbetsdagar",
    maintenance: "Veckovis genomgång",
    features: [
      "Daglig säkerhetskopiering av hela sajten",
      "Testmiljö så uppdateringar kan testas innan de går live",
      "Löpande säkerhetsbevakning",
      "Övervakning dygnet runt - vi får larm direkt om sajten går ner",
      "10 timmar dedikerad utvecklingstid",
      "Prioriterad support",
      "Veckovis underhåll och uppdateringar",
    ],
    note: null,
    popular: false,
  },
  {
    name: "Max",
    focus: "Strategisk tillväxt & högsta beredskap",
    price: "18 000",
    hours: "20 timmar/mån",
    response: "Samma dag",
    maintenance: "Veckovis + löpande optimering",
    features: [
      "Daglig säkerhetskopiering av hela sajten",
      "Testmiljö så uppdateringar kan testas innan de går live",
      "Löpande säkerhetsbevakning",
      "Övervakning dygnet runt - vi får larm direkt om sajten går ner",
      "20 timmar dedikerad utvecklingstid",
      "Högsta prioritet på support",
      "Veckovis underhåll, uppdateringar och prestandakoll",
      "Löpande förbättringar för att öka försäljning",
    ],
    note: null,
    popular: false,
  },
];

const hourUsage = [
  "Nya sidor eller kampanjsidor",
  "Designändringar och förbättringar av användarupplevelsen",
  "Uppdatering av utbildningar, produkter och kampanjmaterial",
  "Uppsättning av rabattkoder och automatiska mailutskick",
  "Banners, pop-ups och säsongsanpassningar",
  "Snabbare laddtider och bättre prestanda",
  "Felsökning och buggfixar",
  "Inläggning av utbildningar - skicka innehållet så ser vi till att allt publiceras korrekt",
  "A/B-testning för att se vad som fungerar bäst",
  "Uppföljning och mätning av besökare och försäljning",
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

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
      </section>

      <div className="max-w-[880px] mx-auto px-5 sm:px-8">
        {/* ═══ PACKAGES ═══ */}
        <Reveal delay={0.06}>
          <h2 className="mt-14 font-heading font-800 text-[28px] text-heading tracking-[-0.02em] text-center">
            Förvaltningsnivåer
          </h2>
          <p className="text-center text-[15px] text-muted mt-2">
            Välj den nivå som passar ert behov och ambitionsnivå.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-6">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.06 + 0.1}>
              <div className="relative rounded-[20px] p-7 sm:p-9 bg-surface border border-border shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="text-[12px] font-600 text-primary uppercase tracking-wider">
                      {pkg.name}
                    </div>
                    <div className="text-[13px] text-muted mt-1">{pkg.focus}</div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-800 text-[32px] tracking-tight text-heading">
                      {pkg.price}
                    </span>
                    <span className="text-[14px] text-muted">kr/mån ex moms</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-6">
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

                <div className="mt-5 pt-5 border-t border-border-light">
                  <div className="grid sm:grid-cols-2 gap-2.5">
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
                900{" "}
                <span className="text-[15px] text-muted font-500">kr/h</span>
              </div>
              <div className="text-[13px] text-muted mt-1">
                ex moms · Vardagar 07:00–17:00
              </div>
            </div>
            <div className="p-7 bg-surface rounded-[20px] border border-border text-center">
              <div className="text-[12px] font-600 text-muted uppercase tracking-wider">
                Akut jourtid
              </div>
              <div className="mt-3 font-heading font-800 text-[32px] text-heading tracking-tight">
                1 500{" "}
                <span className="text-[15px] text-muted font-500">kr/h</span>
              </div>
              <div className="text-[13px] text-muted mt-1">
                ex moms · Kritiska fel efter kl. 17:00
              </div>
            </div>
          </div>
        </Reveal>

        {/* ═══ BRA ATT VETA ═══ */}
        <Reveal>
          <section className="mt-12 p-7 sm:p-9 bg-surface rounded-[20px] border border-border">
            <h2 className="font-heading font-700 text-[20px] text-heading mb-5 tracking-tight">
              Bra att veta
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-[14px] text-body">
                <Check size={16} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span><strong>Ingen bindningstid.</strong> En månads uppsägningstid.</span>
              </div>
              <div className="flex items-start gap-3 text-[14px] text-body">
                <Check size={16} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>Tid utöver det löpande underhållet läggs på att förbättra och optimera sajten.</span>
              </div>
              <div className="flex items-start gap-3 text-[14px] text-body">
                <Check size={16} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>Alla kostnader för webbhotell, domän, SSL-certifikat och övrig infrastruktur ingår.</span>
              </div>
              <div className="flex items-start gap-3 text-[14px] text-body">
                <Check size={16} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>Kontakt via Teams och telefon.</span>
              </div>
            </div>
          </section>
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
                E-handelsplattformar kräver ständig tillsyn för
                att inte tappa fart. Genom avsatta timmar säkerställer ni att
                sajten inte bara överlever - utan faktiskt utvecklas i takt med
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
