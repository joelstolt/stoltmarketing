"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Clock, Check, Phone, MessageCircle } from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";

const contactMethods = [
  {
    icon: Mail,
    title: "E-post",
    value: "joel@stoltmarketing.se",
    href: "mailto:joel@stoltmarketing.se",
    desc: "Svar inom 24h på vardagar",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "Ring eller SMS",
    href: "tel:+46XXXXXXXXX",
    desc: "Vardagar 08:00–17:00",
  },
  {
    icon: MapPin,
    title: "Plats",
    value: "Hässleholm, Sverige",
    href: null,
    desc: "Jobbar med kunder i hela Sverige",
  },
];

const promises = [
  "Du får en tydlig rekommendation — inte en vag byrålista.",
  "Vi kan ta webb, SEO, AI och drift i samma upplägg.",
  "Det ska kännas enklare att välja väg framåt efter samtalet.",
  "Inget sälj, inga förpliktelser — bara en ärlig bedömning.",
];

const steps = [
  {
    num: "1",
    title: "Fyll i formuläret",
    desc: "Beskriv kort vad du behöver hjälp med.",
  },
  {
    num: "2",
    title: "Jag hör av mig inom 24h",
    desc: "Vi bokar in ett kort samtal på 15–20 min.",
  },
  {
    num: "3",
    title: "Du får en tydlig plan",
    desc: "Konkret rekommendation med scope och pris.",
  },
];

export default function KontaktContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
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
          service: formData.service,
          message: formData.message,
          _subject: `Ny förfrågan från ${formData.name} — ${formData.company || "Ej angivet"}`,
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
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Kontakt" },
        ]}
        badge="Kontakt & Bokning"
        title="Boka en kostnadsfri genomgång och få tydliga nästa steg."
        subtitle="Beskriv ditt nuläge så hör jag av mig inom 24 timmar med en konkret rekommendation — helt utan förpliktelser."
      />

      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,380px] gap-12 lg:gap-20 items-start">
            {/* Left: Form */}
            <Reveal>
              <div className="bg-surface rounded-[20px] border border-border p-7 sm:p-9 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <h2 className="font-heading font-700 text-[22px] text-heading tracking-tight mb-2">
                  Beskriv ditt behov
                </h2>
                <p className="text-[14px] text-muted mb-7">
                  Fyll i formuläret så återkommer jag inom 24 timmar.
                </p>

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
                    <h3 className="font-heading font-700 text-[20px] text-heading">
                      Tack för din förfrågan!
                    </h3>
                    <p className="mt-2 text-[15px] text-body">
                      Jag hör av mig inom 24 timmar.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      {/* Name + Email row */}
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

                      {/* Company */}
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

                      {/* Service select */}
                      <div>
                        <label style={{ fontSize: 13, fontWeight: 600, color: "#3B3F4A", display: "block", marginBottom: 6 }}>
                          Vad behöver du hjälp med?
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          onFocus={inputFocusHandler}
                          onBlur={inputBlurHandler}
                          style={{ ...inputStyle, appearance: "none", cursor: "pointer", color: formData.service ? "#0C0F1A" : "#9CA3AF" }}
                        >
                          <option value="">Välj tjänst</option>
                          <option value="Webbplats">Ny webbplats</option>
                          <option value="E-handel">E-handel / WooCommerce</option>
                          <option value="AI & Automation">AI & Automation</option>
                          <option value="SEO">SEO & Synlighet</option>
                          <option value="Managed hemsida">Managed hemsida / Drift</option>
                          <option value="Annat">Annat / Vet inte ännu</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label style={{ fontSize: 13, fontWeight: 600, color: "#3B3F4A", display: "block", marginBottom: 6 }}>
                          Beskriv kort vad du behöver *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={inputFocusHandler}
                          onBlur={inputBlurHandler}
                          placeholder="Berätta om ditt nuläge, mål och utmaningar..."
                          style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={sending}
                        className="premium-btn w-full justify-center mt-2"
                        style={{ border: "none", cursor: sending ? "wait" : "pointer", fontFamily: "inherit", opacity: sending ? 0.7 : 1 }}
                      >
                        <span>{sending ? "Skickar..." : "Skicka förfrågan"}</span>
                        <ArrowRight size={16} className="opacity-80" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Right: Contact info + process + promises */}
            <div>
              {/* Contact methods */}
              <Reveal delay={0.08}>
                <div className="mb-8">
                  <h3 className="font-heading font-700 text-[18px] text-heading tracking-tight mb-5">
                    Kontaktuppgifter
                  </h3>
                  <div className="flex flex-col gap-4">
                    {contactMethods.map((method) => (
                      <div key={method.title} className="flex items-start gap-3.5">
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            background: "rgba(29,78,216,0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <method.icon size={18} color="#1D4ED8" />
                        </div>
                        <div>
                          <div className="text-[14px] font-600 text-heading">
                            {method.title}
                          </div>
                          {method.href ? (
                            <a
                              href={method.href}
                              className="text-[14px] text-primary hover:text-primary-hover transition-colors"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <div className="text-[14px] text-body">
                              {method.value}
                            </div>
                          )}
                          <div className="text-[12px] text-muted mt-0.5">
                            {method.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* How it works */}
              <Reveal delay={0.14}>
                <div className="mb-8 p-6 bg-surface rounded-[16px] border border-border">
                  <h3 className="font-heading font-700 text-[16px] text-heading tracking-tight mb-4">
                    Så går det till
                  </h3>
                  <div className="flex flex-col gap-4">
                    {steps.map((step) => (
                      <div key={step.num} className="flex items-start gap-3">
                        <div
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: 8,
                            background: "rgba(29,78,216,0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            fontSize: 13,
                            fontWeight: 700,
                            color: "#1D4ED8",
                          }}
                        >
                          {step.num}
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

              {/* Promises */}
              <Reveal delay={0.2}>
                <div className="p-6 rounded-[16px]" style={{ background: "linear-gradient(135deg, #EEF2FF, #DBEAFE)" }}>
                  <h3 className="font-heading font-700 text-[16px] text-heading tracking-tight mb-4">
                    Det du ska få med dig
                  </h3>
                  <div className="flex flex-col gap-3">
                    {promises.map((p) => (
                      <div
                        key={p}
                        className="flex items-start gap-2.5 text-[14px] text-body"
                      >
                        <Check
                          size={15}
                          className="text-primary flex-shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        {p}
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
