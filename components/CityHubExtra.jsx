"use client";

import { Reveal, SectionHeader } from "@/components/ui";
import { CITIES } from "@/lib/local/data";
import HUB from "@/lib/local/hub-content.json";

// Fördjupad lokal SEO-text + alltid synlig FAQ för stadshubbarna.
// FAQ:n renderas öppen (ingen accordion) så allt innehåll är crawlbart.
export default function CityHubExtra({ city }) {
  const data = HUB[city];
  const c = CITIES[city];
  if (!data || !c) return null;

  return (
    <>
      {/* ═══ FÖRDJUPAD LOKAL TEXT ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader badge={`Lokalt i ${c.name}`} title={data.deepHeading} />
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
          <SectionHeader badge="Vanliga frågor" title={`Frågor om webb & SEO i ${c.name}.`} />
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
