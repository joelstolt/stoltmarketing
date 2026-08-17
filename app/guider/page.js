"use client";

import { ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge, Reveal } from "@/components/ui";

const GUL = "#F2C230";
const LINE = "rgba(242,236,221,0.14)";

/* Kunskapsbank: evergreen hjälpguider mot verifierad sökefterfrågan.
   Skild från bloggen (tips-artiklar): guiderna är verktygs- och hur-gör-man-
   sidor, samma sort som drar trafik hos småvinnarna i branschen. */

const guides = [
  {
    href: "/guider/fler-google-recensioner",
    category: "Lokal synlighet",
    readTime: "8 min",
    title: "Fler Google-recensioner till ditt företag",
    desc: "Recensionerna avgör vem som syns i kartrutan. Så ber du om dem på rätt sätt, med direktlänk, QR-kod och utan att bryta mot marknadsföringslagen.",
  },
  {
    href: "/guider/synas-i-ai-sok",
    category: "AI-synlighet",
    readTime: "7 min",
    title: "Syns ditt företag när kunder frågar ChatGPT?",
    desc: "Allt fler frågar AI-assistenter i stället för att googla. Så väljer AI-sök vilka företag som rekommenderas, och så gör du dig valbar.",
  },
  {
    href: "/guider/chatgpt-for-smaforetag",
    category: "AI & Automation",
    readTime: "9 min",
    title: "ChatGPT för småföretag: 9 användningsområden",
    desc: "Konkreta sätt att spara timmar varje vecka, med exempel på hur du skriver. Plus fällorna: det du aldrig ska klistra in och när AI:n låter säker men har fel.",
  },
];

export default function GuiderPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-dark field-glow relative overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-14 sm:pb-16">
            <Badge>Kunskapsbank</Badge>
            <h1
              className="mt-6 font-heading text-[clamp(38px,5.4vw,68px)] leading-[1.03] tracking-[-0.025em] text-heading max-w-[820px]"
              style={{ fontWeight: 380, fontVariationSettings: '"opsz" 144' }}
            >
              Guider som gör jobbet <em style={{ fontStyle: "italic", color: GUL }}>enklare</em>.
            </h1>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-body max-w-[560px]">
              Praktisk hjälp du kan använda direkt, skriven för företagare och inte för branschen.
              Vill du hellre läsa om strategi finns <a href="/blogg" className="text-heading underline decoration-1 underline-offset-4 hover:text-primary transition-colors">bloggen</a>.
            </p>
          </div>
        </section>

        <section className="py-14 sm:py-20 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-5">
              {guides.map((g, i) => (
                <Reveal key={g.href} delay={0.05 * i}>
                  <a
                    href={g.href}
                    className="flex flex-col h-full p-7 rounded-[12px] transition-colors"
                    style={{ background: "#161309", border: `1px solid ${LINE}`, textDecoration: "none" }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontSize: 10,
                          fontWeight: 600,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: GUL,
                        }}
                      >
                        {g.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px] text-faint" style={{ fontFamily: "var(--font-ui)" }}>
                        <Clock size={12} /> {g.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading text-[21px] leading-[1.25] text-heading mt-0 mb-3" style={{ fontWeight: 500 }}>
                      {g.title}
                    </h2>
                    <p className="text-[14px] leading-relaxed text-body mt-0 mb-5 flex-1">{g.desc}</p>
                    <span className="flex items-center gap-2" style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: GUL }}>
                      Läs guiden <ArrowRight size={13} />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10 p-6 rounded-[12px] flex flex-wrap items-center justify-between gap-5" style={{ background: "#0B0A06", border: `1px solid ${LINE}` }}>
                <p className="text-[15px] text-body m-0 max-w-[540px]">
                  Vill du veta hur din egen sajt står sig? Kör den gratis sajtkollen:
                  12 kontroller på 10 sekunder, ingen registrering.
                </p>
                <a href="/sajtkoll" className="secondary-btn">Testa din sajt gratis</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
