"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const faqs = [
  {
    q: "Vad kostar det att jobba med dig?",
    a: "Det beror på uppdraget. Mindre projekt som en enklare webbplats startar kring 15 000–25 000 kr. Större e-handelslösningar och AI-projekt prissätts efter scope. Managed hemsida börjar på 390 kr/mån. Jag ger alltid ett fast pris innan vi börjar.",
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

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-[720px] mx-auto">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase">
            Vanliga frågor
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-5 font-heading font-800 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.025em] text-heading">
            Frågor & Svar
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.04 + 0.1}>
              <div className="border-b border-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-heading font-600 text-[15px] sm:text-[16px] text-heading group-hover:text-primary transition-colors duration-200 pr-4">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-muted"
                  >
                    <Plus size={20} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-[14px] sm:text-[15px] leading-relaxed text-body">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
