"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const PAPER = "#F2ECDD";
const GUL = "#F2C230";

const faqs = [
  {
    "q": "Vad kostar förfrågningsrutan?",
    "a": "495 kr/mån exklusive moms och 0 kr i start. De första 30 dagarna är gratis. Du får rutan, inkorgen, aviseringar och förslag på svar. Per månad ingår upp till 30 uppringningar, 150 samtalsminuter, 100 SMS och 100 chattar. Vi går igenom behov och villkor före start."
  },
  {
    "q": "Svarar rutan i telefon åt mig?",
    "a": "Nej. Den hanterar kontakt via hemsidan. Samtal till ditt vanliga nummer går till dig som tidigare. Om kunden väljer Bli uppringd i rutan försöker tjänsten koppla ihop er. Den skickar inget automatiskt SMS när du missar ett vanligt samtal."
  },
  {
    "q": "Går svaren iväg automatiskt?",
    "a": "Svarsförslag på förfrågningar granskar, ändrar och skickar du själv. Kunden kan få en automatisk mottagningsbekräftelse. AI-chatten besvarar däremot frågor direkt utifrån underlaget om ditt företag och berättar att den är AI."
  },
  {
    "q": "Vad händer efter de 30 dagarna?",
    "a": "Vi tittar på hur rutan fungerat. Vill du fortsätta kostar den 495 kr/mån exklusive moms, utan bindning. Annars tar jag bort rutan. Du avslutar med ett mejl till joel@stoltmarketing.se."
  },
  {
    "q": "Behöver jag en ny hemsida?",
    "a": "Vanligtvis inte. Jag kontrollerar först om din befintliga hemsida kan ta emot kodraden. Behöver du en ny sajt finns Bas från 1 190 kr/mån exklusive moms, med 12 månaders bindning. Hemsida och förfrågningsruta är två olika erbjudanden. I hemsidepaketet Spets ingår rutan."
  }
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

      <div className="sec-rule" style={{ marginBottom: 32 }}>
        <h2 className="sec-label" style={{ margin: 0 }}>
          Vanliga frågor
        </h2>
        <span className="sec-eng" aria-hidden="true">raka svar</span>
      </div>

      <p className="font-heading" style={{ fontWeight: 400, fontVariationSettings: '"opsz" 120', fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: PAPER, margin: "0 0 28px", maxWidth: "16ch" }}>
        Frågor &amp; <em style={{ fontStyle: "italic", color: GUL }}>svar</em>.
      </p>

      <div style={{ maxWidth: 760 }}>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: "1px solid rgba(242,236,221,0.14)" }}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`home-faq-${i}`}
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
                <span className="font-heading" style={{ fontWeight: 480, fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.3, color: PAPER }}>
                  {faq.q}
                </span>
                <Plus aria-hidden="true"
                  size={22}
                  style={{
                    flexShrink: 0,
                    color: GUL,
                    transition: "transform .3s cubic-bezier(.16,1,.3,1)",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                id={`home-faq-${i}`}
                aria-hidden={!isOpen}
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows .35s cubic-bezier(.16,1,.3,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p style={{ margin: 0, padding: "0 40px 24px 0", fontSize: 16, lineHeight: 1.75, color: "rgba(242,236,221,0.82)" }}>
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
