"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Check, Clock, MessageCircle, Calendar, Zap, Phone, ExternalLink } from "lucide-react";
import { Reveal, Badge } from "@/components/ui";
import JoelCard from "@/components/JoelCard";
import { SITE } from "@/lib/local/data";
import { trackConversion } from "@/lib/track";
import { klickId } from "@/lib/klickid";

function calendarEmbedUrl(raw) {
  const url = (raw || "").trim();
  if (!url) return "";
  try {
    const u = new URL(url);
    if (!u.searchParams.has("gv")) u.searchParams.set("gv", "true");
    return u.toString();
  } catch {
    return url;
  }
}

const CALENDAR_URL = calendarEmbedUrl(process.env.NEXT_PUBLIC_CALENDAR_URL || "");

const benefits = [
  "Vad som fungerar på sajten nu",
  "Var ni tappar förfrågningar",
  "Hur ni står mot konkurrenter",
  "En konkret plan framåt",
];

function CalendarFrame({ live }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 20,
        padding: "14px 14px",
        borderRadius: 12,
        background: "rgba(242,194,48,0.08)",
        border: "1px solid rgba(242,194,48,0.28)",
      }}
    >
      <img
        src="/joel-stolt.webp"
        alt=""
        width={48}
        height={48}
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #F2C230",
          flexShrink: 0,
        }}
      />
      <div>
        <div className="text-[14px] font-600 text-heading">Joel Stolt · 15–20 min</div>
        <p className="text-[13px] text-body mt-0.5" style={{ margin: "2px 0 0" }}>
          {live
            ? "Tiden bokas direkt i kalendern."
            : "Föreslå en tid, jag skickar möteslänk."}
        </p>
      </div>
    </div>
  );
}

/**
 * Googles bokningsschema inramat som sajtens eget pappersark: mörk listrad
 * med vem man möter, arket under, och en pappersfärgad hinna som tar bort
 * skarven mot resten av sidan. Vi kan inte styla Googles innehåll, så allt
 * runt om måste bära integrationen.
 */
function CalendarPanel({ url }) {
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    if (ready) return undefined;
    const timer = setTimeout(() => setSlow(true), 7000);
    return () => clearTimeout(timer);
  }, [ready]);

  return (
    <div className="boka-cal">
      <div className="boka-cal-bar">
        <img src="/joel-stolt.webp" alt="" width={40} height={40} className="boka-cal-avatar" />
        <div style={{ minWidth: 0 }}>
          <div className="text-[14px] font-600 text-heading" style={{ lineHeight: 1.35 }}>
            Joel Stolt
          </div>
          <div
            className="text-[12.5px] text-muted"
            style={{ fontFamily: "var(--font-ui)", lineHeight: 1.4 }}
          >
            15–20 min · video eller telefon<span className="boka-cal-tz"> · svensk tid</span>
          </div>
        </div>
        <a className="boka-cal-open" href={url} target="_blank" rel="noopener noreferrer">
          Öppna i eget fönster
          <ExternalLink size={13} />
        </a>
      </div>

      <div className="boka-cal-sheet" aria-busy={!ready}>
        {!ready ? (
          <div className="boka-cal-skeleton" aria-hidden="true">
            <span style={{ height: 18, width: "44%" }} />
            <span style={{ height: 12, width: "28%" }} />
            <span style={{ height: 250, width: "100%", marginTop: 4 }} />
            <span style={{ height: 12, width: "34%" }} />
            <span style={{ height: 88, width: "100%" }} />
          </div>
        ) : null}
        <iframe
          title="Välj en tid i Joels kalender"
          src={url}
          className="boka-cal-iframe"
          loading="lazy"
          onLoad={() => setReady(true)}
        />
      </div>

      {!ready && slow ? (
        <p className="boka-cal-note">
          Kalendern tar ovanligt lång tid att ladda.{" "}
          <a href={url} target="_blank" rel="noopener noreferrer">
            Öppna bokningssidan i eget fönster
          </a>{" "}
          om den inte dyker upp, eller byt till Skicka ett meddelande.
        </p>
      ) : null}
    </div>
  );
}

export default function BokaContent() {
  const [path, setPath] = useState("meddelande");
  const [calendarUrl, setCalendarUrl] = useState(CALENDAR_URL);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    slot: "",
    hp_field: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [prisIntent, setPrisIntent] = useState(false);
  // Sätts vid sidladdning, submits < 3 s efter denna avvisas server-side.
  const [loadedAt] = useState(() => Date.now());

  // "Få upplägg och pris"-knapparna länkar hit med ?amne=pris(&paket=X).
  // Förifyll meddelandet så knappens löfte hålls, och så att leadet visar
  // vilket köpläge personen är i (prisförfrågan vs mötesbokning).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // Utskick kan länka rakt in i kalendern: /boka?flik=tid eller /boka#tid
    if (params.get("flik") === "tid" || window.location.hash === "#tid") {
      setPath("tid");
    }
    if (params.get("amne") !== "pris") return;
    setPrisIntent(true);
    setPath("meddelande");
    const paket = params.get("paket");
    setFormData((prev) =>
      prev.message
        ? prev
        : {
            ...prev,
            message: paket
              ? `Vill ha upplägg och pris för ${paket}.`
              : "Vill ha upplägg och pris för en ny hemsida.",
          },
    );
  }, []);

  // Skyddsnät: den inbakade URL:en sätts vid bygget från .env.local. Saknas
  // den (CI-bygge, ny klon, tömd env) hämtas wrangler-varen vid runtime i
  // stället, så kalendern inte försvinner tyst till tidsönskemål.
  useEffect(() => {
    if (CALENDAR_URL) return undefined;
    let alive = true;
    fetch("/api/calendar-url")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (alive && data && data.url) setCalendarUrl(calendarEmbedUrl(data.url));
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  // Kalenderfliken är den enda vägen in som inte lämnar spår i /api/contact.
  // Umami-eventet är mätpunkten för hur många som faktiskt öppnar den.
  const selectPath = (next) => {
    setPath(next);
    if (next === "tid" && typeof window !== "undefined" && window.umami) {
      window.umami.track("boka-kalender-oppnad");
    }
  };

  const handleTabKey = (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    selectPath(path === "tid" ? "meddelande" : "tid");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.hp_field) {
      setSubmitted(true);
      return;
    }
    setSending(true);
    const isSlot = path === "tid" && !calendarUrl;
    const slotText = formData.slot
      ? `Önskad tid: ${formData.slot.replace("T", " ")}.`
      : "";
    const bodyMessage = isSlot
      ? [slotText, formData.message].filter(Boolean).join(" ")
      : formData.message ||
        (prisIntent
          ? "Vill ha upplägg och pris."
          : "Vill boka en kostnadsfri genomgång.");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          klickId: klickId(),
          name: formData.name,
          email: formData.email,
          company: formData.company,
          hp_field: formData.hp_field,
          _elapsedMs: Date.now() - loadedAt,
          message: bodyMessage,
          _subject: `${isSlot ? "Tidsönskemål" : prisIntent ? "Prisförfrågan" : "Bokningsförfrågan"} från ${formData.name}${formData.company ? `, ${formData.company}` : ""}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        trackConversion(isSlot ? "lead-boka-tid" : "lead-boka", "lead");
      }
    } catch (err) {
      console.error(err);
    }
    setSending(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid rgba(242,236,221,0.16)",
    background: "#161309",
    fontSize: 15,
    color: "#F2ECDD",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const inputFocusHandler = (e) => {
    e.target.style.borderColor = "#F2C230";
    e.target.style.boxShadow = "0 0 0 3px rgba(242,194,48,0.18)";
  };

  const inputBlurHandler = (e) => {
    e.target.style.borderColor = "rgba(242,236,221,0.16)";
    e.target.style.boxShadow = "none";
  };

  const calendarLive = path === "tid" && Boolean(calendarUrl);

  const steps =
    path === "tid"
      ? calendarUrl
        ? [
            { icon: Calendar, title: "1. Välj en tid", desc: "Direkt i kalendern. Inget mejl fram och tillbaka." },
            { icon: Zap, title: "2. Tiden bokas direkt", desc: "Du får en bekräftelse i kalendern." },
            { icon: Clock, title: "3. Vi pratar 15–20 min", desc: "Du får en konkret plan framåt." },
          ]
        : [
            { icon: Calendar, title: "1. Föreslå en tid", desc: "Skriv när det passar. Jag bekräftar." },
            { icon: Zap, title: "2. Jag skickar möteslänk", desc: "Inom 24 timmar på vardagar." },
            { icon: Clock, title: "3. Vi pratar 15–20 min", desc: "Du får en konkret plan framåt." },
          ]
      : [
          { icon: MessageCircle, title: "1. Skicka ett meddelande", desc: "Namn, e-post och vad du behöver hjälp med." },
          { icon: Clock, title: "2. Jag hör av mig inom 24h", desc: "Vi bokar en tid som passar dig." },
          { icon: Zap, title: "3. Vi pratar 15–20 min", desc: "Du får en konkret plan framåt." },
        ];

  return (
    <>
      <section className="hero-dark relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
          <Reveal>
            <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
              <a href="/" className="hover:text-heading transition-colors">Start</a>
              <span className="text-border">·</span>
              <span className="text-heading font-500">Boka genomgång</span>
            </nav>
          </Reveal>

          <div className="max-w-[560px] mx-auto text-center">
            <Reveal delay={0.04}>
              <Badge>Kostnadsfritt · 15–20 min</Badge>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 font-heading font-600 text-[clamp(28px,5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading">
                Boka en kostnadsfri genomgång
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body">
                Skicka ett meddelande, eller växla till kalendern om du redan vet när det passar. Inga förpliktelser.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-5 sm:px-8">
        <div className="mx-auto boka-shell" style={{ maxWidth: calendarLive ? 1180 : 900 }}>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div
                className={`bg-surface rounded-[10px] border border-border shadow-[0_1px_3px_rgba(0,0,0,0.03)] ${
                  calendarLive ? "p-5 sm:p-6" : "p-7 sm:p-9"
                }`}
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "rgba(5,150,105,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 16px",
                      }}
                    >
                      <Check size={28} color="#059669" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-heading font-700 text-[22px] text-heading">
                      Tack, det är framme.
                    </h3>
                    <p className="mt-2 text-[15px] text-body">
                      {path === "tid" && !calendarUrl
                        ? "Jag bekräftar tiden inom 24 timmar, och skickar en möteslänk."
                        : "Jag hör av mig inom 24 timmar."}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="boka-tabs" role="tablist" aria-label="Sätt att höra av sig" onKeyDown={handleTabKey}>
                      <button
                        type="button"
                        role="tab"
                        id="boka-tab-meddelande"
                        aria-selected={path === "meddelande"}
                        aria-controls="boka-panel"
                        tabIndex={path === "meddelande" ? 0 : -1}
                        className="boka-tab"
                        onClick={() => selectPath("meddelande")}
                      >
                        Skicka ett meddelande
                      </button>
                      <button
                        type="button"
                        role="tab"
                        id="boka-tab-tid"
                        aria-selected={path === "tid"}
                        aria-controls="boka-panel"
                        tabIndex={path === "tid" ? 0 : -1}
                        className="boka-tab"
                        onClick={() => selectPath("tid")}
                      >
                        Välj en tid
                      </button>
                    </div>

                    <div
                      key={path}
                      id="boka-panel"
                      role="tabpanel"
                      className="boka-panel"
                      aria-labelledby={path === "tid" ? "boka-tab-tid" : "boka-tab-meddelande"}
                    >
                    {path === "tid" && calendarUrl ? (
                      <div>
                        <h2 className="font-heading font-700 text-[20px] text-heading tracking-tight mb-2">
                          Välj en tid som passar
                        </h2>
                        <p className="text-[14px] text-body mb-5">
                          Tiden bokas direkt i kalendern och bekräftelsen kommer med en gång. Vill du
                          hellre skriva vad det gäller först, byt till Skicka ett meddelande.
                        </p>
                        <CalendarPanel url={calendarUrl} />
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
                        {path === "tid" ? <CalendarFrame live={false} /> : null}
                        <h2 className="font-heading font-700 text-[20px] text-heading tracking-tight mb-6">
                          {path === "tid" ? "Föreslå en tid" : "Fyll i dina uppgifter"}
                        </h2>

                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                            <div>
                              <label style={{ fontSize: 13, fontWeight: 600, color: "#CFC9B8", display: "block", marginBottom: 6 }}>
                                Namn *
                              </label>
                              <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={inputFocusHandler}
                                onBlur={inputBlurHandler}
                                placeholder="Ditt namn"
                                style={inputStyle}
                              />
                            </div>
                            <div>
                              <label style={{ fontSize: 13, fontWeight: 600, color: "#CFC9B8", display: "block", marginBottom: 6 }}>
                                E-post *
                              </label>
                              <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={inputFocusHandler}
                                onBlur={inputBlurHandler}
                                placeholder="din@epost.se"
                                style={inputStyle}
                              />
                            </div>
                          </div>

                          <div>
                            <label style={{ fontSize: 13, fontWeight: 600, color: "#CFC9B8", display: "block", marginBottom: 6 }}>
                              Företag
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              onFocus={inputFocusHandler}
                              onBlur={inputBlurHandler}
                              placeholder="Företagsnamn (valfritt)"
                              style={inputStyle}
                            />
                          </div>

                          {path === "tid" ? (
                            <div>
                              <label style={{ fontSize: 13, fontWeight: 600, color: "#CFC9B8", display: "block", marginBottom: 6 }}>
                                Tid som passar *
                              </label>
                              <input
                                type="datetime-local"
                                name="slot"
                                required
                                value={formData.slot}
                                onChange={handleChange}
                                onFocus={inputFocusHandler}
                                onBlur={inputBlurHandler}
                                style={inputStyle}
                              />
                              <p style={{ margin: "10px 0 0", fontSize: 13, color: "#9A9484", lineHeight: 1.55 }}>
                                Jag bekräftar tiden och skickar en möteslänk. Hellre ringa?{" "}
                                <a href={SITE.phoneHref} style={{ color: "#F2C230", fontWeight: 600, textDecoration: "none" }}>
                                  {SITE.phone}
                                </a>
                                . Eller byt till meddelande.
                              </p>
                            </div>
                          ) : null}

                          <div>
                            <label style={{ fontSize: 13, fontWeight: 600, color: "#CFC9B8", display: "block", marginBottom: 6 }}>
                              {path === "tid" ? "Något jag ska veta innan (valfritt)" : "Beskriv kort vad du behöver hjälp med"}
                            </label>
                            <textarea
                              name="message"
                              rows={3}
                              value={formData.message}
                              onChange={handleChange}
                              onFocus={inputFocusHandler}
                              onBlur={inputBlurHandler}
                              placeholder={path === "tid" ? "T.ex. ny sajt, SEO, flera bolag..." : "T.ex. ny webbplats, SEO, AI-verktyg..."}
                              style={{ ...inputStyle, resize: "vertical", minHeight: 90 }}
                            />
                          </div>

                          <input
                            type="text"
                            name="hp_field"
                            value={formData.hp_field}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
                          />

                          <button
                            type="submit"
                            disabled={sending}
                            className="premium-btn w-full justify-center mt-2"
                            style={{ border: "none", cursor: sending ? "wait" : "pointer", fontFamily: "inherit", opacity: sending ? 0.7 : 1 }}
                          >
                            <span>{sending ? "Skickar..." : path === "tid" ? "Skicka tidsönskemål" : "Skicka meddelande"}</span>
                            <ArrowRight size={16} className="opacity-80" />
                          </button>

                          {path === "tid" ? (
                            <p style={{ margin: 0, fontSize: 13, color: "#9A9484", textAlign: "center" }}>
                              <Phone size={12} style={{ display: "inline", verticalAlign: "-1px", marginRight: 4 }} />
                              Eller ring {SITE.phone} · mejla {SITE.email}
                            </p>
                          ) : null}
                        </div>
                      </form>
                    )}
                    </div>
                  </>
                )}
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.06}>
                <div className="mb-8">
                  <JoelCard compact />
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mb-8">
                  <h3 className="font-heading font-700 text-[16px] text-heading tracking-tight mb-5">
                    Så går det till
                  </h3>
                  <div className="flex flex-col gap-5">
                    {steps.map((step) => (
                      <div key={step.title} className="flex items-start gap-3">
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: "rgba(242,194,48,0.14)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <step.icon size={17} color="#F2C230" />
                        </div>
                        <div>
                          <div className="text-[14px] font-600 text-heading">
                            {step.title}
                          </div>
                          <div className="text-[13px] text-muted mt-0.5">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="p-5 rounded-[10px]" style={{ background: "linear-gradient(135deg, rgba(242,194,48,0.13), rgba(242,194,48,0.04))", border: "1px solid rgba(242,194,48,0.28)" }}>
                  <h3 className="font-heading font-700 text-[15px] text-heading tracking-tight mb-3">
                    Det du får med dig
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {benefits.map((b) => (
                      <div
                        key={b}
                        className="flex items-start gap-2.5 text-[13px] text-body"
                      >
                        <Check
                          size={14}
                          className="text-primary flex-shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
