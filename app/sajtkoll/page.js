"use client";

import { useState } from "react";
import { ArrowRight, Check, AlertTriangle, X, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui";
import { SITE, PRICING } from "@/lib/local/data";
import { trackConversion } from "@/lib/track";
import { skickaForslag, varstaBrister } from "@/lib/forslag";

const GUL = "#F2C230";
const LINE = "rgba(242,236,221,0.14)";
const PAPER = "#F2ECDD";

/* Gratis verktyg: URL in, 14 kontroller ut, ärlig bedömning. Efter resultatet
   ställs samma fråga som på startsidan: vill du se hemsidan byggd på nytt?
   Förslaget är huvudvägen (0 av 11 annonsbesökare gick vidare när resultatet
   bara erbjöd rapport, bevakning och möte, mätt 2026-09-19). Rapport på mejl
   och alla 14 rader finns kvar, hopfällda under. */

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
  const [rapport, setRapport] = useState("idle");
  const [rapportFel, setRapportFel] = useState("");
  const [kopierad, setKopierad] = useState(false);
  const [konkUrl, setKonkUrl] = useState("");
  const [konk, setKonk] = useState(null);
  const [konkState, setKonkState] = useState("idle");
  const [email, setEmail] = useState("");
  const [lead, setLead] = useState("idle");
  const [leadFel, setLeadFel] = useState("");
  const [loadedAt] = useState(() => Date.now());

  const brister = result ? varstaBrister(result.checks) : [];
  const doman = result ? result.url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "") : "";

  async function bestallForslag(e) {
    e.preventDefault();
    if (!email.trim() || lead === "sending" || !result) return;
    setLead("sending");
    setLeadFel("");
    try {
      const ok = await skickaForslag({ doman, email, score: result.score, brister, plats: "sajtkollens resultat", loadedAt });
      if (!ok) throw new Error("send");
      setLead("done");
      trackConversion("lead-forslag", "lead");
    } catch {
      setLead("idle");
      setLeadFel(`Det gick inte att skicka just nu. Mejla ${SITE.email || "joel@stoltmarketing.se"} så bygger jag ändå.`);
    }
  }

  async function bestallRapport(e) {
    e.preventDefault();
    if (rapport === "sending") return;
    const fd = new FormData(e.currentTarget);
    setRapport("sending");
    setRapportFel("");
    try {
      const res = await fetch("/api/sajtkoll/rapport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resultId: result?.id,
          name: fd.get("name"),
          email: fd.get("email"),
          bevaka: fd.get("bevaka") === "on",
          hp_field: fd.get("hp_field"),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setRapportFel(data.error || "Något gick fel. Testa igen.");
        setRapport("idle");
        return;
      }
      setRapport("sent");
    } catch {
      setRapportFel("Något gick fel. Testa igen.");
      setRapport("idle");
    }
  }

  async function jamforKonkurrent(e) {
    e.preventDefault();
    if (!konkUrl.trim() || konkState === "loading") return;
    setKonkState("loading");
    setKonk(null);
    try {
      const res = await fetch("/api/sajtkoll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: konkUrl }),
      });
      const data = await res.json();
      if (!res.ok) {
        setKonkState("idle");
        return;
      }
      setKonk(data);
      setKonkState("done");
    } catch {
      setKonkState("idle");
    }
  }

  function kopieraLank() {
    if (!result?.id) return;
    navigator.clipboard?.writeText(`${window.location.origin}/sajtkoll/r/${result.id}`).then(() => {
      setKopierad(true);
      setTimeout(() => setKopierad(false), 2500);
    });
  }

  async function run(e) {
    e.preventDefault();
    if (!url.trim() || state === "loading") return;
    setState("loading");
    setError("");
    setResult(null);
    setRapport("idle");
    setRapportFel("");
    setKonk(null);
    setKonkState("idle");
    setKonkUrl("");
    setLead("idle");
    setLeadFel("");
    try {
      const res = await fetch("/api/sajtkoll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, source: window.location.search.slice(1, 121) || null }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Något gick fel. Testa igen om en stund.");
        setState("idle");
        return;
      }
      setResult(data);
      setState("done");
      // sajtkoll-kord räknar bara klick på knappen. Den här räknar klara mätningar.
      trackConversion("sajtkoll-klar", "sajtkoll");
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
          {/* Fältraderna, samma familj som övriga undersidor */}
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 w-full pointer-events-none"
            style={{ height: "clamp(120px, 22vw, 230px)", maskImage: "linear-gradient(to top, black 55%, transparent)", WebkitMaskImage: "linear-gradient(to top, black 55%, transparent)" }}
            viewBox="0 0 1200 240"
            preserveAspectRatio="none"
          >
            <line x1="1200" y1="26" x2="0" y2="30" stroke="rgba(242,236,221,0.18)" strokeWidth="1" />
            <line x1="220" y1="240" x2="840" y2="28" stroke="rgba(242,194,48,0.18)" strokeWidth="1" />
            <line x1="400" y1="240" x2="854" y2="28" stroke="rgba(242,194,48,0.24)" strokeWidth="1" />
            <line x1="580" y1="240" x2="868" y2="28" stroke="rgba(122,148,64,0.22)" strokeWidth="1" />
            <line x1="760" y1="240" x2="882" y2="28" stroke="rgba(242,194,48,0.28)" strokeWidth="1" />
            <line x1="940" y1="240" x2="896" y2="28" stroke="rgba(242,194,48,0.22)" strokeWidth="1" />
            <line x1="220" y1="240" x2="840" y2="28" className="hero-puls" stroke="rgba(242,194,48,0.8)" strokeWidth="2" style={{ "--pd": "8s", "--pdel": "-2s", opacity: 0.55 }} />
            <line x1="580" y1="240" x2="868" y2="28" className="hero-puls" stroke="rgba(242,194,48,0.8)" strokeWidth="2" style={{ "--pd": "10s", "--pdel": "-6s", opacity: 0.6 }} />
            <line x1="940" y1="240" x2="896" y2="28" className="hero-puls" stroke="rgba(242,194,48,0.8)" strokeWidth="2" style={{ "--pd": "12s", "--pdel": "-4s", opacity: 0.5 }} />
          </svg>
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Badge>Gratis verktyg</Badge>
            <h1
              className="mt-6 font-heading text-[clamp(38px,5.6vw,72px)] leading-[1.03] tracking-[-0.025em] text-heading max-w-[800px]"
              style={{ fontWeight: 380, fontVariationSettings: '"opsz" 144' }}
            >
              Hur bra fungerar din hemsida<em style={{ fontStyle: "italic", color: GUL }}>?</em>
            </h1>
            <p className="mt-6 text-[16px] sm:text-[17.5px] leading-relaxed text-body max-w-[560px]">
              Skriv in din adress så mäter jag hemsidan på riktigt: sidvikt, hastighet,
              mobilanpassning, Google-synlighet och AI-läsbarhet, och att sidans
              filer faktiskt laddar. 14 kontroller, cirka 10 sekunder, ingen registrering.
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
                {state === "loading" ? "Mäter..." : "Testa min hemsida"}
                {state !== "loading" && <Search size={14} />}
              </button>
            </form>
            {error && <p className="mt-4 text-[14px] m-0" style={{ color: "#C97B5E" }}>{error}</p>}
            {state === "loading" && (
              <div className="mt-8" aria-hidden="true">
                <div className="troska-falt">
                  {[6, 20, 34, 48, 62, 76].map((y, i) => (
                    <span key={y}>
                      <span className="troska-rad-bas" style={{ top: y }} />
                      <span className="troska-rad" style={{ top: y, animationDelay: `${(i * 1.55).toFixed(2)}s` }} />
                    </span>
                  ))}
                  <svg className="troska-maskin" width="38" height="24" viewBox="0 0 38 24" fill="none">
                    <path d="M8 16 H26 V8 H16 L13 16" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M26 12 H33 L36 16" stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="12" cy="19" r="3.2" stroke="var(--color-accent)" strokeWidth="1.6" />
                    <circle cx="27" cy="19" r="3.2" stroke="var(--color-accent)" strokeWidth="1.6" />
                    <circle cx="4" cy="17" r="2.4" stroke="var(--color-accent)" strokeWidth="1.4" opacity="0.7" />
                  </svg>
                </div>
                <p className="mt-3 text-[12.5px] m-0" style={{ fontFamily: "var(--font-ui)", letterSpacing: "0.08em", color: "rgba(242,236,221,0.55)" }}>
                  Tröskar sajten, rad för rad. 14 kontroller på cirka 10 sekunder.
                </p>
              </div>
            )}
            <p className="mt-5 text-[12.5px] text-muted" style={{ fontFamily: "var(--font-ui)", letterSpacing: "0.06em" }}>
              Allt som rapporteras läses ur ett riktigt svar från din hemsida. Jag sparar resultatet så att du kan dela länken, inget annat.
            </p>
            <p className="mt-6 flex items-center gap-3 text-[13.5px] text-muted max-w-[560px]">
              <img src="/joel-stolt-240.webp" alt="" width={36} height={36} style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <span>
                Jag heter Joel Stolt och bygger hemsidor åt småföretag. 0 kr i start, från {PRICING.basManad} exkl. moms. Du ser hemsidan innan du betalar.
              </span>
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
                      <span className="text-[15px] text-muted">av 100 på tekniken</span>
                    </div>
                  </div>
                  <p className="font-heading text-[clamp(18px,2.4vw,24px)] text-heading m-0 max-w-[380px]" style={{ fontStyle: "italic", fontWeight: 400 }}>
                    {result.verdict}
                  </p>
                </div>

                {result.intro && (
                  <p className="font-heading text-[clamp(17px,2.2vw,21px)] leading-relaxed text-heading mt-6 mb-0" style={{ fontStyle: "italic", fontWeight: 400 }}>
                    {result.intro}
                  </p>
                )}

                {result.ai && (
                  <div className="mt-6 p-5 rounded-[10px]" style={{ background: "rgba(242,194,48,0.07)", border: "1px solid rgba(242,194,48,0.2)" }}>
                    <p className="text-[15px] leading-relaxed text-body m-0">{result.ai}</p>
                    <p className="text-[11.5px] text-faint mt-2 mb-0" style={{ fontFamily: "var(--font-ui)" }}>
                      Sammanfattning framtagen automatiskt ur mätvärdena.
                    </p>
                  </div>
                )}

                {/* De värsta bristerna i klartext, resten ligger hopfällt längre ner */}
                {brister.length > 0 && (
                  <div className="mt-7">
                    <h2 className="font-heading text-[18px] text-heading mt-0 mb-1" style={{ fontWeight: 500 }}>
                      Här finns mest att hämta
                    </h2>
                    {brister.map((c) => (
                      <CheckRow key={c.id} c={c} />
                    ))}
                  </div>
                )}

                {/* Förslagsfrågan: huvudvägen efter resultatet */}
                <div
                  className="mt-8 p-6 sm:p-7 rounded-[12px]"
                  style={{ background: "linear-gradient(135deg, rgba(242,194,48,0.13), rgba(242,194,48,0.04))", border: "1px solid rgba(242,194,48,0.28)" }}
                >
                  {lead !== "done" ? (
                    <form onSubmit={bestallForslag} aria-label="Beställ ett gratis förslag">
                      <h2 className="font-heading text-[clamp(21px,2.6vw,26px)] text-heading mt-0 mb-3" style={{ fontWeight: 520 }}>
                        Vill du se din hemsida byggd på nytt<em style={{ fontStyle: "italic", color: GUL }}>?</em>
                      </h2>
                      <p className="text-[14.5px] leading-relaxed text-body mt-0 mb-3 max-w-[600px]">
                        Den här kollen mäter 14 tekniska saker. Den mäter inte hur många sidor du har som kan dyka upp
                        när någon söker på din tjänst och din ort. Det tittar jag på när jag bygger ditt förslag.
                      </p>
                      <p className="text-[14.5px] leading-relaxed text-body mt-0 mb-5 max-w-[600px]">
                        Jag bygger startsidan och en tjänstesida åt dig, med dina tjänster och dina orter, på en riktig
                        länk. Klart om två arbetsdagar. Det kostar ingenting och du förbinder dig inte till något.
                      </p>
                      <div className="flex flex-wrap gap-3 max-w-[600px]">
                        <input
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="din@mejl.se"
                          aria-label="Din mejladress"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={lead === "sending"}
                          className="flex-1 min-w-0"
                          style={{ padding: "15px 18px", borderRadius: "3em", border: `1.5px solid ${LINE}`, background: "#0F0D08", color: PAPER, fontSize: 16, outline: "none" }}
                        />
                        <button type="submit" disabled={lead === "sending"} className="premium-btn" data-umami-event="forslag-sajtkoll" style={{ opacity: lead === "sending" ? 0.7 : 1 }}>
                          {lead === "sending" ? "Skickar..." : "Bygg mitt förslag"}
                          {lead !== "sending" && <ArrowRight size={15} />}
                        </button>
                      </div>
                      {leadFel && <p role="alert" className="text-[13.5px] mt-3 mb-0" style={{ color: "#C97B5E" }}>{leadFel}</p>}
                      <p className="text-[12.5px] text-muted mt-4 mb-0 max-w-[600px] leading-relaxed">
                        Säger du nej hör du inte av mig igen. Gillar du den: 0 kr i start, från {PRICING.basManad} exkl. moms,
                        12 månader och sedan månadsvis. Du äger hemsidan.
                      </p>
                    </form>
                  ) : (
                    <div role="status">
                      <h2 className="font-heading text-[21px] text-heading mt-0 mb-2 flex items-center gap-2.5" style={{ fontWeight: 520 }}>
                        <Check size={20} style={{ color: GUL, flexShrink: 0 }} /> Tack. Om två arbetsdagar har du en länk.
                      </h2>
                      <p className="text-[14.5px] leading-relaxed text-body m-0 max-w-[600px]">
                        Jag läser din hemsida, dina tjänster och din ort, och bygger ett förslag du kan klicka runt i.
                        Länken kommer på mejlen.
                      </p>
                    </div>
                  )}
                  <p className="mt-5 mb-0 pt-5 flex items-center gap-3 text-[13.5px] text-body" style={{ borderTop: "1px solid rgba(242,194,48,0.2)" }}>
                    <img src="/joel-stolt-240.webp" alt="Joel Stolt" width={40} height={40} loading="lazy" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                    <span>
                      Joel Stolt bygger och svarar själv. Hellre prata först?{" "}
                      <a href={SITE.phoneHref} data-umami-event="cta-telefon-sajtkoll" style={{ color: GUL, whiteSpace: "nowrap" }}>
                        Ring {SITE.phone}
                      </a>
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("stolt-chat:open", {
                        detail: {
                          context: `Domän ${doman}. Poäng ${result.score} av 100. Bedömning: ${result.verdict || ""}. Brister: ${brister.map((b) => `${b.label}: ${b.value} (${b.detail})`).join(" | ") || "inga allvarliga"}.`,
                          intro: `Jag såg mätningen av ${doman}: ${result.score} av 100. Fråga mig vad bristerna betyder för just din bransch, hur förslaget går till, eller vad något kostar.`,
                        },
                      })
                    );
                    if (window.umami) window.umami.track("chatt-sajtkoll");
                  }}
                  className="mt-6"
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: GUL, display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  Fråga AI:n vad det betyder för din bransch <ArrowRight size={13} />
                </button>

                {/* Alla 14 rader, hopfällda */}
                <details className="mt-6" style={{ borderTop: `1px solid ${LINE}` }}>
                  <summary className="py-4 text-[15px] text-heading cursor-pointer" data-umami-event="sajtkoll-visa-alla" style={{ fontWeight: 500 }}>
                    Visa alla 14 kontroller
                  </summary>
                  <div>
                    {result.checks.map((c) => (
                      <CheckRow key={c.id} c={c} />
                    ))}
                  </div>
                  {result.sampled && (
                    <p className="text-[12.5px] text-faint mt-4 mb-0">
                      Sajten laddar väldigt många filer, så vikten är uppmätt på ett representativt urval och uppräknad.
                    </p>
                  )}
                </details>

                {/* Rapport på mejl: reservvägen. Sajtvakten är ett aktivt val, inte förbockad. */}
                <details style={{ borderTop: `1px solid ${LINE}`, borderBottom: `1px solid ${LINE}` }}>
                  <summary className="py-4 text-[15px] text-heading cursor-pointer" data-umami-event="sajtkoll-visa-rapport" style={{ fontWeight: 500 }}>
                    Inte redo för det? Få rapporten med åtgärdslista på mejl i stället
                  </summary>
                  <div className="pb-6">
                    {rapport === "sent" ? (
                      <div className="flex items-start gap-3 p-4 rounded-[10px]" style={{ background: "rgba(242,194,48,0.1)", border: "1px solid rgba(242,194,48,0.3)" }}>
                        <Check size={18} style={{ color: GUL, flexShrink: 0, marginTop: 2 }} />
                        <p className="text-[14px] text-body m-0">Rapporten är på väg till din inkorg. Kolla skräpposten om den dröjer.</p>
                      </div>
                    ) : (
                      <form onSubmit={bestallRapport} className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-3">
                          <input name="name" placeholder="Ditt namn" autoComplete="name" aria-label="Ditt namn" className="flex-1 min-w-[160px]" style={{ padding: "12px 14px", borderRadius: 10, border: `1px solid ${LINE}`, background: "#0F0D08", color: PAPER, fontSize: 15, outline: "none" }} />
                          <input name="email" type="email" required placeholder="Din e-post" autoComplete="email" aria-label="Din e-post" className="flex-1 min-w-[200px]" style={{ padding: "12px 14px", borderRadius: 10, border: `1px solid ${LINE}`, background: "#0F0D08", color: PAPER, fontSize: 15, outline: "none" }} />
                        </div>
                        <label className="flex items-start gap-2.5 text-[13.5px] text-body cursor-pointer">
                          <input type="checkbox" name="bevaka" style={{ marginTop: 3, accentColor: GUL }} />
                          <span>Mät om min hemsida varje månad och mejla vad som ändrats. Avslutas med ett klick i varje mejl.</span>
                        </label>
                        <input name="hp_field" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }} aria-hidden="true" />
                        <div className="flex flex-wrap items-center gap-3">
                          <button type="submit" disabled={rapport === "sending"} className="secondary-btn" data-umami-event="lead-sajtkoll-rapport" style={{ opacity: rapport === "sending" ? 0.7 : 1 }}>
                            {rapport === "sending" ? "Skickar..." : "Skicka rapporten"}
                          </button>
                        </div>
                        {rapportFel && <p className="text-[13px] m-0" style={{ color: "#C97B5E" }}>{rapportFel}</p>}
                        <p className="text-[11.5px] text-faint m-0" style={{ fontFamily: "var(--font-ui)" }}>
                          Jag använder uppgifterna för rapporten och bevakningen, inget annat. Avregistrering i varje mejl.
                        </p>
                      </form>
                    )}
                  </div>
                </details>

                {result.id && (
                  <button type="button" onClick={kopieraLank} className="secondary-btn mt-6" data-umami-event="sajtkoll-dela">
                    {kopierad ? "Länk kopierad!" : "Kopiera delbar länk"}
                  </button>
                )}

                {/* Konkurrentjämförelse */}
                <div className="mt-5 p-6 rounded-[12px]" style={{ background: "#161309", border: `1px solid ${LINE}` }}>
                  <h2 className="font-heading text-[18px] text-heading mt-0 mb-3" style={{ fontWeight: 500 }}>
                    Jämför med en konkurrent
                  </h2>
                  <form onSubmit={jamforKonkurrent} className="flex flex-wrap gap-3">
                    <input value={konkUrl} onChange={(e) => setKonkUrl(e.target.value)} placeholder="konkurrenten.se" aria-label="Konkurrentens webbadress" inputMode="url" className="flex-1 min-w-[200px]" style={{ padding: "12px 14px", borderRadius: "3em", border: `1px solid ${LINE}`, background: "#0F0D08", color: PAPER, fontSize: 15, outline: "none" }} />
                    <button type="submit" disabled={konkState === "loading"} className="secondary-btn" data-umami-event="sajtkoll-jamfor" style={{ opacity: konkState === "loading" ? 0.7 : 1 }}>
                      {konkState === "loading" ? "Mäter..." : "Jämför"}
                    </button>
                  </form>
                  {konk && (
                    <div className="mt-5">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {[{ r: result, namn: "Din sajt" }, { r: konk, namn: konk.url.replace(/^https?:\/\//, "") }].map(({ r, namn }) => (
                          <div key={namn} className="text-center p-4 rounded-[10px]" style={{ background: "#0F0D08", border: `1px solid ${LINE}` }}>
                            <div className="text-[12px] text-muted mb-1" style={{ fontFamily: "var(--font-ui)", letterSpacing: "0.08em" }}>{namn}</div>
                            <div className="font-heading" style={{ fontSize: 40, lineHeight: 1, fontWeight: 340, color: r.score >= 85 ? GUL : r.score >= 60 ? "#D9B96A" : "#C97B5E" }}>{r.score}</div>
                          </div>
                        ))}
                      </div>
                      <div>
                        {result.checks.map((c) => {
                          const k = konk.checks.find((x) => x.id === c.id);
                          if (!k) return null;
                          const sym = (x) => (x.pass ? "✓" : x.warn ? "!" : "✗");
                          const col = (x) => (x.pass ? GUL : x.warn ? "#D9B96A" : "#C97B5E");
                          return (
                            <div key={c.id} className="flex items-center justify-between gap-3 py-2 text-[13.5px]" style={{ borderBottom: `1px solid ${LINE}` }}>
                              <span style={{ color: col(c), fontWeight: 700, width: 18 }}>{sym(c)}</span>
                              <span className="flex-1 text-body">{c.label}</span>
                              <span style={{ color: col(k), fontWeight: 700, width: 18, textAlign: "right" }}>{sym(k)}</span>
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-[12px] text-faint mt-3 mb-0" style={{ fontFamily: "var(--font-ui)" }}>Vänster din sajt, höger konkurrenten. Samma 14 kontroller, samma regler.</p>
                    </div>
                  )}
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
              14 saker som avgör om en hemsida drar in kunder eller tappar dem: hur tung sidan är
              och hur många filer den laddar, om bilderna ligger i moderna format, hur snabbt servern
              svarar, om sajten är mobilanpassad och krypterad, hur rubrik och beskrivning ser ut i
              Google, om det går att kontakta er direkt från startsidan, och om innehållet är läsbart
              för AI-assistenter som ChatGPT. Jag mäter hela sidvikten, inte bara HTML-dokumentet,
              och kontrollerar att filerna faktiskt laddar: en enda trasig stilmall kan få en
              tekniskt hel sida att se sönderslagen ut för besökaren.
            </p>
            <p className="text-[15.5px] leading-relaxed text-body max-w-[680px]">
              Mätningen bedömer teknik och laddning, inte hur designen ser ut eller känns.
              Verktyget är byggt av samma motor jag använder när jag granskar hemsidor åt kunder.
              Det ersätter inte en riktig genomgång, men det visar var läckan sitter.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
