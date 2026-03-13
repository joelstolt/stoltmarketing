"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/ui";

const testimonials = [
  {
    name: "Anna Lindström",
    role: "VD, Lindströms Bygg AB",
    quote:
      "Joel levererade en ny sajt som gav oss förfrågningar redan första veckan. Snabbt, professionellt och till ett pris som passade oss perfekt. Bästa investeringen vi gjort digitalt.",
    initials: "AL",
  },
  {
    name: "Marcus Ekberg",
    role: "Grundare, Ekberg Digital",
    quote:
      "Vi testade tre byråer innan vi hittade Joel. Skillnaden? Han genomför. Ingen byrå-overhead, inga onödiga möten — bara resultat. Vår trafik ökade med 80% på fyra månader.",
    initials: "ME",
  },
  {
    name: "Sara Johansson",
    role: "Marknadschef, NordTech Solutions",
    quote:
      "AI-lösningen Joel byggde sparar vårt säljteam minst 10 timmar i veckan. Han förstod vårt behov direkt och levererade något som faktiskt funkar i vardagen — inte bara en snygg demo.",
    initials: "SJ",
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

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08 + 0.1}>
              <div className="h-full bg-surface rounded-[20px] border border-border p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col">
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
                      background:
                        "linear-gradient(135deg, #1D4ED8, #3B82F6)",
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
