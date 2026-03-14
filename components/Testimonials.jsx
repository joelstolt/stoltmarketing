"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui";

const testimonials = [
  {
    name: "Projektledare, AcadeMedia",
    role: "LIA-platsbanken",
    quote:
      "Joel tog vår idé om en plattform för LIA-platser och förvandlade den till en färdig produkt snabbare än vi trodde var möjligt. Han förstod behoven direkt och levererade en lösning som både studenter och arbetsgivare faktiskt använder.",
    initials: "AM",
    color: "#059669",
  },
  {
    name: "Robert, RBN Utbildning",
    role: "Ny webb, API-integration & SEO",
    quote:
      "Vi behövde en helhetsleverans — ny grafisk profil, ny sajt och integration mot våra system. Joel levererade allt under en och samma kontakt. Proffsigt, strukturerat och med en tydlig plan hela vägen.",
    initials: "RB",
    color: "#EA580C",
  },
  {
    name: "Personalansvarig, Förskolan Harpan",
    role: "Ny grafisk profil & webb",
    quote:
      "Vår nya sajt fångar verkligen känslan av vår förskola. Joel lyssnade på vad vi ville förmedla och skapade en design som föräldrar faktiskt förstår och tycker om. Platsansökan har aldrig varit enklare.",
    initials: "FH",
    color: "#CA8A04",
  },
  {
    name: "Grundare, Omniway",
    role: "WCAG-anpassad webb",
    quote:
      "Tillgänglighet var ett krav — inte en bonus. Joel levererade en modern sajt som uppfyller WCAG utan att kompromissa på design. Snabb kommunikation och han förstod EdTech-branschen direkt.",
    initials: "OW",
    color: "#7C3AED",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 sm:py-28 px-5 sm:px-8"
      style={{ background: "#F4F4F1" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Vad kunderna säger"
          title="Resultat som talar för sig själva."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08 + 0.1}>
              <div className="h-full bg-surface rounded-[20px] border border-border p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      fill="#F59E0B"
                      color="#F59E0B"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[15px] leading-relaxed text-body flex-1">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="mt-6 pt-5 border-t border-border-light flex items-center gap-3">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-600 text-heading">
                      {t.name}
                    </div>
                    <div className="text-[13px] text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
