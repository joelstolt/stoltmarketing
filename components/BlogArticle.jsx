"use client";

import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Calendar,
  Check,
  X,
  AlertCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui";

/*
  Delad artikelmall för bloggen. Varje inlägg skickar in sin metadata + ett
  block-schema (blocks[]) i stället för att duplicera all JSX. Klasserna är
  identiska med de handkodade artiklarna (t.ex. lokal-seo-guide) så designen
  matchar exakt.

  Block-typer:
    { type: "lead",  text }                       intro-paragraf (17px)
    { type: "p",     text }                        brödtext (16px)
    { type: "h2",    text }                        sektionsrubrik
    { type: "list",  title, items:[] }             kort med bock-punkter
    { type: "tip",   title, text }                 markerad tips-ruta
    { type: "checklist", items:[] }                bock-checklista
    { type: "compare", left:{title,items}, right:{title,items} }  gör/undvik
    { type: "rows",  items:[{label,text}] }        label/värde-rader
    { type: "cards", items:[{title,text}] }        staplade kort
*/

function Block({ block }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="text-[17px] text-body leading-relaxed mb-6">{block.text}</p>
      );
    case "p":
      return (
        <p className="text-[16px] text-body leading-relaxed mb-4">{block.text}</p>
      );
    case "h2":
      return (
        <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
          {block.text}
        </h2>
      );
    case "list":
      return (
        <div className="bg-surface border border-border rounded-xl p-5 mb-6">
          {block.title ? (
            <p className="text-[15px] font-700 text-heading mb-3">{block.title}</p>
          ) : null}
          <div className="space-y-2">
            {block.items.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                <span className="text-[15px] text-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "tip":
      return (
        <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[15px] font-700 text-heading mb-1">{block.title}</p>
              <p className="text-[14px] text-body leading-relaxed">{block.text}</p>
            </div>
          </div>
        </div>
      );
    case "checklist":
      return (
        <div className="space-y-2 mb-8">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg"
            >
              <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
              <span className="text-[15px] text-body flex-1">{item}</span>
            </div>
          ))}
        </div>
      );
    case "compare":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-surface border border-border rounded-xl p-5">
            <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">
              {block.left.title}
            </p>
            <div className="space-y-2">
              {block.left.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-[14px] text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface border border-border rounded-xl p-5">
            <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">
              {block.right.title}
            </p>
            <div className="space-y-2">
              {block.right.items.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-[14px] text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "rows":
      return (
        <div className="space-y-3 mb-8">
          {block.items.map((row, i) => (
            <div
              key={i}
              className="flex justify-between items-center gap-4 py-2 border-b border-border-light"
            >
              <span className="text-[15px] font-600 text-heading">{row.label}</span>
              <span className="text-[14px] text-body text-right">{row.text}</span>
            </div>
          ))}
        </div>
      );
    case "cards":
      return (
        <div className="space-y-4 mb-8">
          {block.items.map((card, i) => (
            <div key={i} className="bg-surface border border-border rounded-xl p-5">
              <p className="text-[15px] font-700 text-heading mb-1">{card.title}</p>
              <p className="text-[14px] text-body leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default function BlogArticle({
  category,
  h1,
  dateDisplay,
  readTime,
  breadcrumbName,
  blocks = [],
  related = [],
  cta,
}) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-dark relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
                <a href="/" className="hover:text-heading transition-colors">
                  Start
                </a>
                <span className="text-border">·</span>
                <a href="/blogg" className="hover:text-heading transition-colors">
                  Blogg
                </a>
                <span className="text-border">·</span>
                <span className="text-heading font-500">{breadcrumbName}</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                {category}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                {h1}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {dateDisplay}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> {readTime} läsning
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">
            {blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            {related.length > 0 && (
              <>
                <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">
                  Läs också
                </h3>
                <div className="space-y-2 mb-2">
                  {related.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors"
                    >
                      <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">
                        {link.title} →
                      </span>
                    </a>
                  ))}
                </div>
              </>
            )}

            {cta && (
              <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
                <h3 className="text-[22px] sm:text-[26px] font-600 text-white font-heading tracking-tight mb-3">
                  {cta.heading}
                </h3>
                <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                  {cta.text}
                </p>
                <a href="/boka" className="premium-btn">
                  <span>Boka kostnadsfri genomgång</span>
                  <ArrowRight size={16} className="opacity-80" />
                </a>
              </div>
            )}

            <div className="mt-10 pt-6 border-t border-border">
              <a
                href="/blogg"
                className="inline-flex items-center gap-2 text-[14px] text-muted hover:text-heading transition-colors font-500"
              >
                <ArrowLeft size={16} /> Alla artiklar
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
