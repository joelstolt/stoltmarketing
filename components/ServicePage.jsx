"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, ArrowRight, Plus,
  ShoppingCart, CreditCard, Gauge, Package, Search, Smartphone,
  Globe, Pencil, Shield, Wrench,
} from "lucide-react";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";

const ICONS = {
  ShoppingCart, CreditCard, Gauge, Package, Search, Smartphone,
  Globe, Pencil, Shield, Wrench,
};

export default function ServicePage({ data }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: "Tjänster", href: "/tjanster" },
          { label: data.badge },
        ]}
        badge={data.badge}
        title={data.h1}
        subtitle={data.subtitle}
        bullets={data.bullets}
      />

      {/* ═══ VAD INGÅR ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Vad ingår" title={data.serviceName + " som ger resultat."} subtitle={data.intro} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((f, i) => {
              const Icon = ICONS[f.icon] || Check;
              return (
                <Reveal key={f.title} delay={i * 0.06 + 0.1}>
                  <div className="bg-surface rounded-[10px] border border-border p-6 h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300">
                    <div className="w-10 h-10 rounded-[10px] bg-primary/6 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-heading font-700 text-[16px] text-heading">{f.title}</h3>
                    <p className="mt-2 text-[14px] text-body leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader badge="Vanliga frågor" title={"Frågor om " + data.badge.toLowerCase() + "."} />
          <div className="mt-10 flex flex-col">
            {data.faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.04 + 0.1}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="font-heading font-600 text-[15px] sm:text-[16px] text-heading group-hover:text-primary transition-colors pr-4">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 text-muted"
                    >
                      <Plus size={20} />
                    </motion.span>
                  </button>
                  <motion.div
                      initial={false}
                      animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                        <p className="pb-5 text-[14px] sm:text-[15px] leading-relaxed text-body">{faq.a}</p>
                      </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <a href={data.relatedHref} className="inline-flex items-center gap-2 text-[14px] font-600 text-primary hover:text-primary-hover transition-colors">
                Mer om {data.relatedLabel.toLowerCase()}
                <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "transparent" }}
        />
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <Reveal>
            <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">
              {data.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">{data.ctaText}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <a href="/boka" className="premium-btn mt-8 mx-auto">
              <span>Boka kostnadsfri genomgång</span>
              <ArrowRight size={16} className="opacity-80" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
