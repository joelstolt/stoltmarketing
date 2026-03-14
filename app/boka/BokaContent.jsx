"use client";

import { useState } from "react";
import { ArrowRight, Check, Clock, MessageCircle, Zap } from "lucide-react";
import { Reveal, Badge } from "@/components/ui";

const benefits = [
  "15–20 min samtal — snabbt och konkret",
  "Du får en tydlig rekommendation, inte en vag byrålista",
  "Helt kostnadsfritt, inga förpliktelser",
];

const steps = [
  { icon: MessageCircle, title: "1. Fyll i formuläret", desc: "Namn, e-post och en kort beskrivning." },
  { icon: Clock, title: "2. Jag hör av mig inom 24h", desc: "Vi bokar in ett tid som passar dig." },
  { icon: Zap, title: "3. Vi pratar 15–20 min", desc: "Du får en konkret plan framåt." },
];

export default function BokaContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/xreylwen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message || "Vill boka en kostnadsfri genomgång.",
          _subject: `Bokningsförfrågan från ${formData.name}${formData.company ? ` — ${formData.company}` : ""}`,
        }),
      });
      if (res.ok) setSubmitted(true);
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
    border: "1px solid #E5E5E0",
    background: "#FFFFFF",
    fontSize: 15,
    color: "#0C0F1A",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const inputFocusHandler = (e) => {
    e.target.style.borderColor = "#1D4ED8";
    e.target.style.boxShadow = "0 0 0 3px rgba(29,78,216,0.08)";
  };

  const inputBlurHandler = (e) => {
    e.target.style.borderColor = "#E5E5E0";
    e.target.style.boxShadow = "none";
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(168deg, #F8FAFC 0%, #EEF2FF 25%, #E0E7FF 45%, #DBEAFE 60%, #EFF6FF 80%, #FAFAF8 100%)",
          }}
        />

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
              <h1 className="mt-5 font-heading font-800 text-[clamp(28px,5vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading">
                Boka en kostnadsfri genomgång
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-body">
                Vi tar ett kort samtal där jag lyssnar på dina behov och ger
                en ärlig bedömning av hur jag kan hjälpa. Inga förpliktelser.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-b from-transparent to-base pointer-events-none" />
      </section>

      {/* Form + sidebar */}
      <section className="py-12 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[900px] mx-auto">
          <div className="grid lg:grid-cols-[1fr,300px] gap-12 lg:gap-16 items-start">
            {/* Form */}
            <Reveal>
              <div className="bg-surface rounded-[20px] border border-border p-7 sm:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
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
                      Tack för din bokning!
                    </h3>
                    <p className="mt-2 text-[15px] text-body">
                      Jag hör av mig inom 24 timmar för att boka in en tid.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="font-heading font-700 text-[20px] text-heading tracking-tight mb-6">
                      Fyll i dina uppgifter
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                        <div>
                          <label style={{ fontSize: 13, fontWeight: 600, color: "#3B3F4A", display: "block", marginBottom: 6 }}>
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
                          <label style={{ fontSize: 13, fontWeight: 600, color: "#3B3F4A", display: "block", marginBottom: 6 }}>
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
                        <label style={{ fontSize: 13, fontWeight: 600, color: "#3B3F4A", display: "block", marginBottom: 6 }}>
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

                      <div>
                        <label style={{ fontSize: 13, fontWeight: 600, color: "#3B3F4A", display: "block", marginBottom: 6 }}>
                          Beskriv kort vad du behöver hjälp med
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={inputFocusHandler}
                          onBlur={inputBlurHandler}
                          placeholder="T.ex. ny webbplats, SEO, AI-verktyg..."
                          style={{ ...inputStyle, resize: "vertical", minHeight: 90 }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={sending}
                        className="premium-btn w-full justify-center mt-2"
                        style={{ border: "none", cursor: sending ? "wait" : "pointer", fontFamily: "inherit", opacity: sending ? 0.7 : 1 }}
                      >
                        <span>{sending ? "Skickar..." : "Boka genomgång"}</span>
                        <ArrowRight size={16} className="opacity-80" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Sidebar */}
            <div>
              {/* Steps */}
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
                            background: "rgba(29,78,216,0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <step.icon size={17} color="#1D4ED8" />
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

              {/* Benefits */}
              <Reveal delay={0.14}>
                <div className="p-5 rounded-[16px]" style={{ background: "linear-gradient(135deg, #EEF2FF, #DBEAFE)" }}>
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
