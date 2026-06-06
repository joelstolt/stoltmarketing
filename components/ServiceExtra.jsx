"use client";

import { Reveal, SectionHeader } from "@/components/ui";
import EXTRA from "@/lib/local/service-extra-content.json";

// Fördjupad tjänstetext + alltid synlig FAQ för de generiska tjänstesidorna.
// FAQ:n renderas öppen (ingen accordion) så allt innehåll är crawlbart, och
// komponenten lägger själv ut FAQPage-schema eftersom tjänste-layouterna saknar det.
export default function ServiceExtra({ service }) {
  const data = EXTRA[service];
  if (!data) return null;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* ═══ FÖRDJUPAD TEXT ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader badge="Djupdykning" title={data.deepHeading} />
          <div className="mt-8 flex flex-col gap-5">
            {data.deepParagraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="text-[16px] sm:text-[17px] leading-[1.8] text-body">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ (alltid synlig — crawlbar) ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader badge="Fler frågor" title="Vanliga frågor." />
          <div className="mt-8 flex flex-col gap-6">
            {data.faqs.map((f, i) => (
              <Reveal key={i} delay={0.06 + i * 0.04}>
                <div className="border-b border-border pb-6">
                  <h3 className="font-heading font-700 text-[16px] sm:text-[17px] text-heading">
                    {f.q}
                  </h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-body">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
