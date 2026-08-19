"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui";
import JoelCard from "@/components/JoelCard";
import { SITE } from "@/lib/local/data";

/**
 * Återkommande avslut: värdelinje + Joel-kort + ring / mejla / boka.
 * Används på tjänster, case och ortssidor — inte på varje blogginlägg.
 */
export default function CloseBlock({
  title = "Då snackar vi.",
  text = "15–20 min, en ärlig bedömning, inga förpliktelser. Du pratar med personen som bygger.",
}) {
  return (
    <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
      <div className="relative z-10 max-w-[640px] mx-auto">
        <Reveal>
          <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading text-center">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-4 text-[16px] leading-relaxed text-body text-center">
            {text}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 max-w-[420px] mx-auto">
            <JoelCard onGul />
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <a href={SITE.phoneHref} className="secondary-btn" data-umami-event="cta-telefon">
              <Phone size={15} />
              Ring
            </a>
            <a href={`mailto:${SITE.email}`} className="secondary-btn">
              <Mail size={15} />
              Mejla
            </a>
            <a href="/boka" className="premium-btn" data-umami-event="cta-close-boka">
              <span>Boka genomgång</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
