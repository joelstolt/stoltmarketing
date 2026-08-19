"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Check, Clock, MessageCircle, Calendar, Zap } from "lucide-react";
import { Reveal, Badge } from "@/components/ui";
import { trackConversion } from "@/lib/track";

const CALENDAR_URL = process.env.NEXT_PUBLIC_CALENDAR_URL || "";

const benefits = [
  "15 till 20 min samtal, snabbt och konkret",
  "Du får en tydlig rekommendation, inte en vag byrålista",
  "Helt kostnadsfritt, inga förpliktelser",
];

export default function BokaContent() {
  const [path, setPath] = useState("meddelande");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.hp_field) {
      setSubmitted(true);
      return;
    }
    setSending(true);
    const isSlot = path === "tid" && !CALENDAR_URL;
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

  const steps =
    path === "tid"
      ? [
          { icon: Calendar, title: "1. Välj en tid", desc: "Direkt i kalendern, eller ett tidsönskemål." },
          { icon: Zap, title: "2. Du får en möteslänk", desc: "Bekräftelse kommer direkt, utan mejltennis." },
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
              <Badge>Kostnadsfritt</Badge>
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
        <div className="max-w-[900px] mx-auto">
          <div className="grid lg:grid-cols-[1fr,300px] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="bg-surface rounded-[10px] border border-border p-7 sm:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
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
                      {path === "tid" && !CALENDAR_URL
                        ? "Jag bekräftar tiden inom 24 timmar, och skickar en möteslänk."
                        : "Jag hör av mig inom 24 timmar."}
                    </p>
                  </div>
                ) : (
                  <>
                    <div
                      role="tablist"
                      aria-label="Sätt att höra av sig"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 8,
                        marginBottom: 22,
                        padding: 4,
                        borderRadius: 12,
                        background: "rgba(242,236,221,0.06)",
                        border: "1px solid rgba(242,236,221,0.12)",
                      }}
                    >
                      <button
                        type="button"
                        role="tab"
                        aria-selected={path === "meddelande"}
                        onClick={() => setPath("meddelande")}
                        style={{
                          border: "none",
                          cursor: "pointer",
                          borderRadius: 10,
                          padding: "10px 12px",
                          fontFamily: "inherit",
                          fontSize: 13,
                          fontWeight: 600,
                          background: path === "meddelande" ? "#F2C230" : "transparent",
                          color: path === "meddelande" ? "#191405" : "#CFC9B8",
                        }}
                      >
                        Skicka ett meddelande
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={path === "tid"}
                        onClick={() => setPath("tid")}
                        style={{
                          border: "none",
                          cursor: "pointer",
                          borderRadius: 10,
                          padding: "10px 12px",
                          fontFamily: "inherit",
                          fontSize: 13,
                          fontWeight: 600,
                          background: path === "tid" ? "#F2C230" : "transparent",
                          color: path === "tid" ? "#191405" : "#CFC9B8",
                        }}
                      >
                        Välj en tid
                      </button>
                    </div>

                    {path === "tid" && CALENDAR_URL ? (
                      <div>
                        <h2 className="font-heading font-700 text-[20px] text-heading tracking-tight mb-3">
                          Välj en tid som passar
                        </h2>
                        <p className="text-[14px] text-body mb-4">
                          Tiden bokas direkt. Vill du hellre skriva vad det gäller först, byt till meddelande.
                        </p>
                        <iframe
                          title="Boka en tid"
                          src={CALENDAR_URL}
                          style={{ width: "100%", minHeight: 640, border: 0, borderRadius: 12, background: "#161309" }}
                        />
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit}>
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
                              <p style={{ margin: "8px 0 0", fontSize: 13, color: "#9A9484" }}>
                                Jag bekräftar tiden och skickar en möteslänk. Vill du berätta mer först, byt till meddelande.
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
                        </div>
                      </form>
                    )}
                  </>
                )}
              </div>
            </Reveal>

            <div>
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
