"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, AlertTriangle, X, Check } from "lucide-react";
import { trackConversion } from "@/lib/track";
import { klickId } from "@/lib/klickid";

/*
 * Startsidans enda formulär: ett fält. Adressen mäts med samma motor som
 * /sajtkoll (14 kontroller, cirka 10 sekunder), de tre värsta bristerna
 * visas i klartext, och sedan ställs frågan som är hela affären:
 * vill du se den byggd på nytt? Förslagsbegäran går till /api/contact
 * så leadet landar där alla andra leads landar.
 */

const PAPER = "#F2ECDD";
const GUL = "#F2C230";
const INK = "#191405";
const BG2 = "#161309";
const LINE = "rgba(242,236,221,0.22)";
const DIM = "rgba(242,236,221,0.74)";

function domanAv(u) {
  try {
    const s = String(u || "").trim();
    return new URL(/^https?:\/\//i.test(s) ? s : `https://${s}`).hostname.replace(/^www\./, "");
  } catch {
    return String(u || "").trim();
  }
}

function Troska() {
  return (
    <div style={{ marginTop: 26 }} aria-live="polite">
      <div className="troska-falt">
        {[6, 20, 34, 48, 62, 76].map((y, i) => (
          <span key={y}>
            <span className="troska-rad-bas" style={{ top: y }} />
            <span className="troska-rad" style={{ top: y, animationDelay: `${(i * 1.55).toFixed(2)}s` }} />
          </span>
        ))}
        <svg className="troska-maskin" width="38" height="24" viewBox="0 0 38 24" fill="none" aria-hidden="true">
          <path d="M8 16 H26 V8 H16 L13 16" stroke={GUL} strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M26 12 H33 L36 16" stroke={GUL} strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="19" r="3.2" stroke={GUL} strokeWidth="1.6" />
          <circle cx="27" cy="19" r="3.2" stroke={GUL} strokeWidth="1.6" />
          <circle cx="4" cy="17" r="2.4" stroke={GUL} strokeWidth="1.4" opacity="0.7" />
        </svg>
      </div>
      <p style={{ margin: "12px 0 0", fontFamily: "var(--font-ui)", fontSize: 12.5, letterSpacing: "0.08em", color: DIM }}>
        Tröskar sajten, rad för rad. 14 kontroller på cirka 10 sekunder.
      </p>
    </div>
  );
}

export default function HeroKoll({ plats = "hero", tema = "mork" }) {
  const [url, setUrl] = useState("");
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [email, setEmail] = useState("");
  const [lead, setLead] = useState("idle");
  const [leadFel, setLeadFel] = useState("");
  const [loadedAt] = useState(() => Date.now());
  const resRef = useRef(null);
  const gul = tema === "gul";

  useEffect(() => {
    if (state !== "done" || !resRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resRef.current.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
  }, [state]);

  async function run(e) {
    e.preventDefault();
    if (!url.trim() || state === "loading") return;
    setState("loading");
    setError("");
    setResult(null);
    setLead("idle");
    setLeadFel("");
    try {
      const res = await fetch("/api/sajtkoll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, source: null }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Det gick inte att mäta just nu. Testa igen om en stund.");
        setState("idle");
        return;
      }
      setResult(data);
      setState("done");
      trackConversion(`sajtkoll-${plats}`, "sajtkoll");
    } catch {
      setError("Det gick inte att mäta just nu. Testa igen om en stund.");
      setState("idle");
    }
  }

  const brister = result
    ? [...result.checks.filter((c) => !c.pass && !c.warn), ...result.checks.filter((c) => !c.pass && c.warn)].slice(0, 3)
    : [];
  const doman = domanAv(result?.url || url);

  async function bestall(e) {
    e.preventDefault();
    if (!email.trim() || lead === "sending" || !result) return;
    setLead("sending");
    setLeadFel("");
    const message = [
      `Vill se ett färdigt förslag för ${doman}.`,
      `Sajtkoll: ${result.score} av 100.`,
      `Brister: ${brister.map((b) => `${b.label} (${b.value})`).join("; ") || "inga allvarliga"}.`,
      `Skickat från startsidans fält (${plats}).`,
    ].join("\n");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: doman,
          email,
          company: doman,
          message,
          _subject: `Förslag: ${doman} (${result.score}/100)`,
          hp_field: "",
          _elapsedMs: Date.now() - loadedAt,
          klickId: klickId(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !(data.ok || data.success)) throw new Error("send");
      setLead("done");
      trackConversion("lead-forslag", "lead");
    } catch {
      setLead("idle");
      setLeadFel("Det gick inte att skicka just nu. Mejla joel@stoltmarketing.se så bygger jag ändå.");
    }
  }

  const inputStyle = {
    flex: "1 1 240px",
    minWidth: 0,
    padding: "17px 20px",
    fontFamily: "var(--font-ui)",
    fontSize: 15.5,
    color: gul ? PAPER : PAPER,
    background: gul ? INK : "rgba(15,13,8,0.7)",
    border: `1.5px solid ${gul ? INK : LINE}`,
    borderRadius: "3em",
    outline: "none",
  };

  const knappStyle = gul
    ? { background: INK, borderColor: INK, color: PAPER }
    : undefined;

  const scoreColor = !result ? GUL : result.score >= 85 ? GUL : result.score >= 60 ? "#E2C36A" : "#E08A6A";

  return (
    <div className={`b-koll b-koll-${tema}`} style={{ position: "relative", zIndex: 3, maxWidth: 640, width: "100%", margin: gul ? "0 auto" : 0 }}>
      <style>{`
        .b-koll input::placeholder { color: rgba(242,236,221,0.55); }
        .b-koll input:focus-visible { border-color: ${GUL}; box-shadow: 0 0 0 3px rgba(242,194,48,0.22); }
        .b-koll-gul input:focus-visible { border-color: ${PAPER}; box-shadow: 0 0 0 3px rgba(25,20,5,0.25); }
        .b-koll-form { display: flex; flex-wrap: wrap; gap: 10px; }
        .b-koll-form .premium-btn { flex: 0 0 auto; }
        @media (max-width: 640px) { .b-koll-form .premium-btn { width: 100%; } }
        .b-koll-brist { display: grid; grid-template-columns: 26px 1fr; gap: 12px; padding: 12px 0; border-top: 1px solid ${LINE}; }
        .b-koll-brist:first-child { border-top: 0; }
      `}</style>

      <form onSubmit={run} className="b-koll-form" aria-label="Mät din hemsida">
        <label htmlFor={`koll-url-${plats}`} className="sr-only">Adressen till din nuvarande hemsida</label>
        <input
          id={`koll-url-${plats}`}
          type="text"
          inputMode="url"
          autoComplete="url"
          autoCapitalize="none"
          spellCheck={false}
          placeholder="dittforetag.se"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={state === "loading"}
          style={inputStyle}
        />
        <button type="submit" className="premium-btn" disabled={state === "loading"} style={knappStyle} data-umami-event={`koll-${plats}`}>
          {state === "loading" ? "Mäter" : "Mät min sajt"} <ArrowRight size={15} />
        </button>
      </form>
      {error && (
        <p role="alert" style={{ margin: "12px 0 0", fontFamily: "var(--font-ui)", fontSize: 13.5, color: gul ? INK : "#E08A6A" }}>
          {error}
        </p>
      )}

      {state === "loading" && <Troska />}

      {state === "done" && result && (
        <div ref={resRef} style={{ marginTop: 26, background: BG2, border: `1px solid ${LINE}`, padding: "26px 26px 24px", color: PAPER, textAlign: "left" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: GUL }}>
            {doman}
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 8, flexWrap: "wrap" }}>
            <span className="font-heading" style={{ fontSize: "clamp(52px, 7vw, 76px)", lineHeight: 1, fontWeight: 340, fontVariationSettings: '"opsz" 144', color: scoreColor }}>
              {result.score}
            </span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, letterSpacing: "0.1em", textTransform: "uppercase", color: DIM }}>av 100</span>
          </div>
          <p className="font-heading" style={{ margin: "12px 0 0", fontSize: 19, lineHeight: 1.4, fontWeight: 460, color: PAPER, maxWidth: "34ch" }}>
            {brister.length ? `${brister.length === 1 ? "En sak" : brister.length === 2 ? "Två saker" : "Tre saker"} kostar dig förfrågningar.` : "Inga allvarliga brister. Det är ovanligt."}
          </p>
          {brister.length > 0 && (
            <div style={{ marginTop: 14 }}>
              {brister.map((c) => {
                const Icon = c.warn ? AlertTriangle : X;
                const color = c.warn ? "#E2C36A" : "#E08A6A";
                return (
                  <div key={c.label} className="b-koll-brist">
                    <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: 8, background: "rgba(242,236,221,0.08)", marginTop: 1 }}>
                      <Icon size={14} strokeWidth={2.5} style={{ color }} />
                    </span>
                    <div>
                      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2px 14px", alignItems: "baseline" }}>
                        <span style={{ fontSize: 15.5, fontWeight: 500, color: PAPER }}>{c.label}</span>
                        <span style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", color }}>{c.value}</span>
                      </div>
                      <p style={{ margin: "3px 0 0", fontSize: 13.5, lineHeight: 1.55, color: DIM }}>{c.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {lead !== "done" ? (
            <form onSubmit={bestall} style={{ marginTop: 22, paddingTop: 20, borderTop: `1px solid ${LINE}` }} aria-label="Beställ ett förslag">
              <p className="font-heading" style={{ margin: 0, fontSize: 21, fontWeight: 480, lineHeight: 1.3, color: PAPER }}>
                Vill du se den byggd på nytt<em style={{ fontStyle: "italic", color: GUL }}>?</em>
              </p>
              <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.6, color: DIM, maxWidth: "46ch" }}>
                Jag bygger ett riktigt, klickbart förslag med dina tjänster och dina orter. Det tar mig två arbetsdagar och kostar dig ingenting.
              </p>
              <div className="b-koll-form" style={{ marginTop: 14 }}>
                <label htmlFor={`koll-mejl-${plats}`} className="sr-only">Din mejladress</label>
                <input
                  id={`koll-mejl-${plats}`}
                  type="email"
                  autoComplete="email"
                  placeholder="din@mejl.se"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={lead === "sending"}
                  style={{ ...inputStyle, background: "rgba(15,13,8,0.7)", border: `1.5px solid ${LINE}`, color: PAPER }}
                />
                <button type="submit" className="premium-btn" disabled={lead === "sending"} data-umami-event={`forslag-${plats}`}>
                  {lead === "sending" ? "Skickar" : "Bygg mitt förslag"} <ArrowRight size={15} />
                </button>
              </div>
              {leadFel && (
                <p role="alert" style={{ margin: "10px 0 0", fontFamily: "var(--font-ui)", fontSize: 13.5, color: "#E08A6A" }}>{leadFel}</p>
              )}
              <p style={{ margin: "12px 0 0", fontFamily: "var(--font-ui)", fontSize: 12, letterSpacing: "0.04em", color: DIM }}>
                Ingen bindning, inga påminnelser. Vill du se alla 14 kontroller finns de på <a href="/sajtkoll" style={{ color: GUL }}>sajtkollen</a>.
              </p>
            </form>
          ) : (
            <div style={{ marginTop: 22, paddingTop: 20, borderTop: `1px solid ${LINE}` }} role="status">
              <p className="font-heading" style={{ margin: 0, fontSize: 21, fontWeight: 480, lineHeight: 1.3, color: PAPER, display: "flex", alignItems: "center", gap: 10 }}>
                <Check size={20} style={{ color: GUL, flexShrink: 0 }} /> Tack. Om två arbetsdagar har du en länk.
              </p>
              <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.6, color: DIM, maxWidth: "48ch" }}>
                Jag läser din sajt, dina tjänster och din ort, och bygger ett förslag du kan klicka runt i. Jag ringer inte, jag mejlar. Vill du hellre prata innan dess: <a href="tel:+46766867406" style={{ color: GUL }}>076-686 74 06</a>.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
