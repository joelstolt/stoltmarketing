"use client";

import { useState } from "react";
import { ArrowRight, Check, AlertTriangle, X, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui";

const GUL = "#F2C230";
const LINE = "rgba(242,236,221,0.14)";
const PAPER = "#F2ECDD";

/* Gratis verktyg: URL in, 12 kontroller ut, ärlig bedömning och en naturlig
   väg till kostnadsfri genomgång. Mekaniken: det vi hittar kan vi fixa. */

function CheckRow({ c }) {
  const state = c.pass ? "pass" : c.warn ? "warn" : "fail";
  const Icon = state === "pass" ? Check : state === "warn" ? AlertTriangle : X;
  const color = state === "pass" ? GUL : state === "warn" ? "#D9B96A" : "#C97B5E";
  return (
    <div className="py-4 flex items-start gap-4" style={{ borderBottom: `1px solid ${LINE}` }}>
      <span
        className="flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{
          width: 26,
          height: 26,
          borderRadius: 8,
          background: state === "pass" ? "rgba(242,194,48,0.12)" : state === "warn" ? "rgba(217,185,106,0.12)" : "rgba(201,123,94,0.14)",
        }}
      >
        <Icon size={14} strokeWidth={2.5} style={{ color }} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
          <span className="text-[15px] font-500 text-heading">{c.label}</span>
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 11.5,
              fontWeight: 600,
              letterSpacing: "0.08em",
              color,
            }}
          >
            {c.value}
          </span>
        </div>
        <p className="text-[13.5px] text-muted mt-1 mb-0 leading-relaxed">{c.detail}</p>
      </div>
    </div>
  );
}

export default function SajtkollPage() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  async function run(e) {
    e.preventDefault();
    if (!url.trim() || state === "loading") return;
    setState("loading");
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/sajtkoll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Något gick fel. Testa igen om en stund.");
        setState("idle");
        return;
      }
      setResult(data);
      setState("done");
    } catch {
      setError("Något gick fel. Testa igen om en stund.");
      setState("idle");
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero med verktyget: renderas statiskt, inget startar på opacity 0 */}
        <section className="hero-dark field-glow relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Badge>Gratis verktyg</Badge>
            <h1
              className="mt-6 font-heading text-[clamp(38px,5.6vw,72px)] leading-[1.03] tracking-[-0.025em] text-heading max-w-[800px]"
              style={{ fontWeight: 380, fontVariationSettings: '"opsz" 144' }}
            >
              Hur bra fungerar din hemsida<em style={{ fontStyle: "italic", color: GUL }}>?</em>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[17.5px] leading-relaxed text-body max-w-[560px]">
              Skriv in din adress så mäter vi sajten på riktigt: sidvikt, hastighet,
              mobilanpassning, Google-synlighet och AI-läsbarhet, och att sidans
              filer faktiskt laddar. 13 kontroller, cirka 10 sekunder, ingen registrering.
            </p>

            <form onSubmit={run} className="mt-9 flex flex-wrap gap-3 max-w-[620px]">
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="dittforetag.se"
                inputMode="url"
                autoComplete="url"
                aria-label="Webbadress att testa"
                className="flex-1 min-w-[220px]"
                style={{
                  padding: "15px 18px",
                  borderRadius: "3em",
                  border: `1.5px solid ${LINE}`,
                  background: "#161309",
                  color: PAPER,
                  fontSize: 16,
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={state === "loading"}
                className="premium-btn"
                data-umami-event="sajtkoll-kord"
                style={{ opacity: state === "loading" ? 0.7 : 1 }}
              >
                {state === "loading" ? "Mäter..." : "Testa sajten"}
                {state !== "loading" && <Search size={14} />}
              </button>
            </form>
            {error && <p className="mt-4 text-[14px] m-0" style={{ color: "#C97B5E" }}>{error}</p>}
            <p className="mt-5 text-[12.5px] text-faint" style={{ fontFamily: "var(--font-ui)", letterSpacing: "0.06em" }}>
              Allt som rapporteras läses ur ett riktigt svar från din sajt. Inga gissningar, ingen lagring.
            </p>
          </div>
        </section>

        {/* Resultat */}
        {result && (
          <section className="py-14 sm:py-20 px-5 sm:px-8">
            <div className="max-w-4xl mx-auto">
              <div
                className="p-7 sm:p-9 rounded-[14px]"
                style={{ background: "#161309", border: `1px solid ${LINE}` }}
              >
                <div className="flex flex-wrap items-end justify-between gap-6 pb-7" style={{ borderBottom: `1px solid ${LINE}` }}>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 10.5,
                        fontWeight: 600,
                        letterSpacing: "0.26em",
                        textTransform: "uppercase",
                        color: "rgba(242,236,221,0.5)",
                      }}
                    >
                      Resultat för {result.url.replace(/^https?:\/\//, "")}
                    </div>
                    <div className="flex items-baseline gap-3 mt-2">
                      <span
                        className="font-heading"
                        style={{ fontSize: "clamp(56px,8vw,84px)", lineHeight: 1, fontWeight: 340, fontVariationSettings: '"opsz" 144', color: result.score >= 85 ? GUL : result.score >= 60 ? "#D9B96A" : "#C97B5E" }}
                      >
                        {result.score}
                      </span>
                      <span className="text-[15px] text-muted">av 100</span>
                    </div>
                  </div>
                  <p className="font-heading text-[clamp(18px,2.4vw,24px)] text-heading m-0 max-w-[380px]" style={{ fontStyle: "italic", fontWeight: 400 }}>
                    {result.verdict}
                  </p>
                </div>

                <div className="mt-2">
                  {result.checks.map((c) => (
                    <CheckRow key={c.id} c={c} />
                  ))}
                </div>

                {result.sampled && (
                  <p className="text-[12.5px] text-faint mt-4 mb-0">
                    Sajten laddar väldigt många filer, så vikten är uppmätt på ett representativt urval och uppräknad.
                  </p>
                )}

                {/* CTA efter resultat */}
                <div
                  className="mt-8 p-6 rounded-[12px]"
                  style={{ background: "linear-gradient(135deg, rgba(242,194,48,0.13), rgba(242,194,48,0.04))", border: "1px solid rgba(242,194,48,0.28)" }}
                >
                  <h2 className="font-heading text-[21px] text-heading mt-0 mb-2" style={{ fontWeight: 520 }}>
                    Vill du att det vi hittade blir fixat?
                  </h2>
                  <p className="text-[14.5px] text-body mt-0 mb-5 max-w-[520px]">
                    Boka en kostnadsfri genomgång så går Joel igenom resultatet med dig:
                    15 till 20 minuter, en ärlig bedömning av vad som är värt att göra, inga förpliktelser.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="/boka" className="premium-btn" data-umami-event="lead-sajtkoll">
                      Boka kostnadsfri genomgång <ArrowRight size={15} />
                    </a>
                    <a href="/tjanster" className="secondary-btn">Se tjänster</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Förklaring under verktyget */}
        <section className="py-14 sm:py-20 px-5 sm:px-8" style={{ background: "#0B0A06" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-[clamp(24px,3.2vw,34px)] text-heading mt-0 mb-4" style={{ fontWeight: 440 }}>
              Vad mäter sajtkollen?
            </h2>
            <p className="text-[15.5px] leading-relaxed text-body max-w-[680px]">
              Tolv saker som avgör om en hemsida drar in kunder eller tappar dem: hur tung sidan är
              och hur många filer den laddar, om bilderna ligger i moderna format, hur snabbt servern
              svarar, om sajten är mobilanpassad och krypterad, hur rubrik och beskrivning ser ut i
              Google, om det går att kontakta er direkt från startsidan, och om innehållet är läsbart
              för AI-assistenter som ChatGPT. Vi mäter hela sidvikten, inte bara HTML-dokumentet,
              och vi kontrollerar att filerna faktiskt laddar: en enda trasig stilmall kan få en
              tekniskt hel sida att se sönderslagen ut för besökaren.
            </p>
            <p className="text-[15.5px] leading-relaxed text-body max-w-[680px]">
              Mätningen bedömer teknik och laddning, inte hur designen ser ut eller känns.
              Verktyget är byggt av samma motor vi använder när vi granskar sajter åt kunder,
              och det ersätter inte en riktig genomgång, men det visar var läckan sitter.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
