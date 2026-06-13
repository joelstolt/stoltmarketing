"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const PAPER = "#FAF5EC";

const faqs = [
  {
    q: "Vad kostar det att jobba med dig?",
    a: "Det beror på uppdraget. En enklare webbplats startar från 3 900 kr. Större e-handelslösningar och AI-projekt prissätts efter scope. Managed hemsida börjar på 390 kr/mån. Jag ger alltid ett fast pris innan vi börjar.",
  },
  {
    q: "Jobbar du bara med företag i Hässleholm?",
    a: "Nej, jag jobbar med kunder i hela Sverige. Allt sker digitalt — videomöten, delad projektyta och löpande kommunikation. Geografin spelar ingen roll.",
  },
  {
    q: "Kan du bygga i WordPress även om du föredrar Next.js?",
    a: "Absolut. Jag har över 10 års erfarenhet av WordPress och WooCommerce. Om WordPress är rätt lösning för dig bygger jag gärna i det. Men jag rekommenderar alltid den teknik som passar ditt behov bäst.",
  },
  {
    q: "Vad menar du med AI-lösningar för småföretag?",
    a: "Konkreta verktyg som sparar tid. Det kan vara allt från en AI-chatbot som svarar på kundfrågor, till automatiserade offertflöden eller innehållsgenerering. Jag utgår alltid från ditt faktiska behov — inte hypade trender.",
  },
  {
    q: "Hur lång tid tar ett projekt?",
    a: "En enklare webbplats tar oftast 2–4 veckor. Större e-handels- och AI-projekt kan ta 1–3 månader. Du får alltid en tydlig tidplan i förslaget.",
  },
  {
    q: "Vad händer efter lansering?",
    a: "Jag erbjuder managed hemsida — löpande drift, underhåll, säkerhet och förbättringar. Du kan välja nivå efter dina behov, från 390 kr/mån. Inget ansvar faller mellan stolarna.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BFaq() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ maxWidth: 1120, margin: "0 auto", padding: "10vh 24px 12vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
        <span aria-hidden="true" style={{ width: 26, height: 5, background: "#F2BC1B", display: "inline-block" }} />
        <h2 style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(250,245,236,0.55)", margin: 0, fontFamily: "var(--font-body)" }}>
          Vanliga frågor
        </h2>
      </div>

      <p className="font-heading" style={{ fontWeight: 600, fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.015em", color: PAPER, margin: "0 0 40px", maxWidth: "16ch" }}>
        Frågor &amp; svar.
      </p>

      <div style={{ maxWidth: 760 }}>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: "1px solid rgba(250,245,236,0.14)" }}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: "22px 0",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  color: PAPER,
                }}
              >
                <span className="font-heading" style={{ fontWeight: 600, fontSize: "clamp(17px, 2vw, 20px)", lineHeight: 1.3, color: PAPER }}>
                  {faq.q}
                </span>
                <Plus
                  size={22}
                  style={{
                    flexShrink: 0,
                    color: "#F2BC1B",
                    transition: "transform .3s cubic-bezier(.16,1,.3,1)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows .35s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p style={{ margin: 0, padding: "0 40px 24px 0", fontSize: 15.5, lineHeight: 1.65, color: "rgba(250,245,236,0.68)" }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
