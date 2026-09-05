"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const PAPER = "#F2ECDD";
const GUL = "#F2C230";

const faqs = [
  {
    q: "Vad kostar det att jobba med dig?",
    a: "0 kr i startavgift. De flesta landar på Bredd, 1 990 kr/mån. Bas är 1 190 kr/mån och Spets 2 990 kr/mån. 12 månaders bindning, därefter månadsvis. Då ingår sajten, hosting, drift, uppdateringar, innehållsändringar och support. Köpt var för sig, med hosting, driftavtal och en byråtimme då och då, passerar samma innehåll lätt det dubbla. Vill du ha aktiv SEO, Google Ads och nytt innehåll varje månad ingår det i Spets. Större e-handel och AI-projekt prissätts efter scope, alltid till fast pris innan vi börjar.",
  },
  {
    q: "Bygger du verkligen ett förslag gratis?",
    a: "Ja. Startsida och en tjänstesida, med riktiga texter om ditt företag, på en länk du kan klicka i. Det tar mig några timmar, och det är ett bättre sätt att visa hur jag jobbar än en presentation. Resten av sajten byggs när du sagt ja.",
  },
  {
    q: "Vad händer om jag inte gillar förslaget?",
    a: "Då säger du det, så lägger jag ner det. Du har inte betalat något, och jag skickar inga påminnelser. Förslaget är mitt sätt att visa hur jag jobbar, inte en faktura i förklädnad.",
  },
  {
    q: "Vem äger sajten om vi avslutar?",
    a: "Du. Sajten, innehållet och domänen är dina, och vill du flytta någon annanstans hjälper jag till med flytten. Ingen inlåsning: poängen med månadsmodellen är att jag ska förtjäna nästa månad, inte att avtalet ska hålla dig kvar.",
  },
  {
    q: "Hur säger jag upp?",
    a: "Mejla joel@stoltmarketing.se, det räcker. Efter de första 12 månaderna löper allt månadsvis och avslutas till nästa månadsskifte. Inga blanketter och inga kvarhållningssamtal, och du behåller sajten.",
  },
  {
    q: "Jobbar du bara med företag i Hässleholm?",
    a: "Nej, jag jobbar med kunder i hela Sverige. Allt sker digitalt, videomöten, delad projektyta och löpande kommunikation. Geografin spelar ingen roll.",
  },
  {
    q: "Kan du bygga i WordPress även om du föredrar Next.js?",
    a: "Absolut. Jag har över 10 års erfarenhet av WordPress och WooCommerce. Om WordPress är rätt lösning för dig bygger jag gärna i det. Men jag rekommenderar alltid den teknik som passar ditt behov bäst.",
  },
  {
    q: "Vad menar du med AI-lösningar för småföretag?",
    a: "Konkreta verktyg som sparar tid. Det kan vara allt från en AI-chatbot som svarar på kundfrågor, till automatiserade offertflöden eller innehållsgenerering. Jag utgår alltid från ditt faktiska behov, inte hypade trender.",
  },
  {
    q: "Hur lång tid tar ett projekt?",
    a: "En enklare webbplats tar oftast 1-2 veckor. Större e-handels- och AI-projekt kan ta 1-2 månader. Ett gratis designförslag för din webb får du inom 2 arbetsdagar, och alltid en tydlig tidplan i förslaget.",
  },
  {
    q: "Vad händer efter lansering?",
    a: "Jag erbjuder managed hemsida med löpande drift, underhåll, säkerhet och förbättringar. Allt ingår i månadspriset på 1 190 kr, och jag tar över även sajter jag inte byggt själv. Inget ansvar faller mellan stolarna.",
  },
  {
    q: "Hur vet jag att siffrorna på den här sidan stämmer?",
    a: "De hämtas varje timme ur samma mätverktyg som mina kunder får sina månadsrapporter från, och du kan be vilken kund som helst visa sin. Sajten du läser på just nu kan du mäta själv i Googles PageSpeed Insights.",
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

      <div className="sec-rule" style={{ marginBottom: 32 }}>
        <h2 className="sec-label" style={{ margin: 0 }}>
          Vanliga frågor
        </h2>
        <span className="sec-eng" aria-hidden="true">raka svar</span>
      </div>

      <p className="font-heading" style={{ fontWeight: 400, fontVariationSettings: '"opsz" 120', fontSize: "clamp(28px, 4vw, 46px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: PAPER, margin: "0 0 28px", maxWidth: "16ch" }}>
        Frågor &amp; <em style={{ fontStyle: "italic", color: GUL }}>svar</em>.
      </p>

      {/* Allt som ingår i 1 190 kr/mån: konkret lista, inte bara ett ord */}
      <div style={{ margin: "0 0 40px", maxWidth: 760 }}>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(242,236,221,0.66)", margin: "0 0 12px" }}>
          I månadspriset ingår
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Sajt & design", "Hosting & drift", "Säkerhet & backuper", "Innehållsändringar", "Support inom 24 h", "SEO-grund & AI-läsbarhet"].map((item) => (
            <span
              key={item}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                fontFamily: "var(--font-ui)",
                fontSize: 12.5,
                fontWeight: 500,
                color: "rgba(242,236,221,0.8)",
                border: "1px solid rgba(242,236,221,0.16)",
                borderRadius: "3em",
                padding: "7px 14px",
              }}
            >
              <span aria-hidden="true" style={{ width: 5, height: 5, borderRadius: "50%", background: GUL, display: "inline-block" }} />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 760 }}>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ borderBottom: "1px solid rgba(242,236,221,0.14)" }}>
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
                <span className="font-heading" style={{ fontWeight: 480, fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.3, color: PAPER }}>
                  {faq.q}
                </span>
                <Plus
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
