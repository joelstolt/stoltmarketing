"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, FileText, Rocket } from "lucide-react";

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

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "Samtal",
    desc: "Vi börjar med ett kostnadsfritt samtal där jag lyssnar på dina behov, utmaningar och mål. Ingen sälj — bara en ärlig bedömning av hur jag kan hjälpa.",
  },
  {
    num: "02",
    icon: FileText,
    title: "Förslag & Plan",
    desc: "Du får ett tydligt förslag med scope, tidplan och fast pris. Inga dolda kostnader, inga överraskningar. Du vet exakt vad du får och vad det kostar.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Leverans",
    desc: "Jag bygger, du ger feedback löpande. Allt sker transparent med full insyn i processen. Resultatet? En lösning som faktiskt levererar.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #FAFAF8 0%, #F4F4F1 50%, #FAFAF8 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase">
            Process
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-5 font-heading font-800 text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.025em] text-heading max-w-[500px]">
            Så funkar det att jobba med mig.
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1 + 0.1}>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-[14px] bg-primary/6 flex items-center justify-center">
                    <step.icon size={22} className="text-primary" />
                  </div>
                  <span className="text-[48px] font-800 font-heading text-primary/10 leading-none">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-heading font-700 text-[20px] text-heading tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-body">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
