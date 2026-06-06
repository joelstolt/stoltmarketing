"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Plus, Check, MapPin, Building2,
  Code, Smartphone, MousePointerClick, Gauge, Search, ShoppingCart, Pencil,
  FileSearch, BarChart3, Link2, Megaphone, Target, RefreshCw,
  Bot, Workflow, Mail, Plug, FileText, Sparkles, BrainCircuit,
} from "lucide-react";
import { Reveal, Badge, PageHero, SectionHeader } from "@/components/ui";
import { CITIES, SERVICES, SITE, CITY_ORDER, SERVICE_ORDER } from "@/lib/local/data";
import { getCombo, cityServiceFaqs } from "@/lib/local/seo";

const ICONS = {
  Code, Smartphone, MousePointerClick, Gauge, Search, ShoppingCart, Pencil,
  FileSearch, MapPin, BarChart3, Link2, Megaphone, Target, RefreshCw,
  Bot, Workflow, Mail, Plug, FileText, Sparkles, BrainCircuit,
};

export default function CityServicePage({ service, city }) {
  const [openFaq, setOpenFaq] = useState(null);

  const s = SERVICES[service];
  const c = CITIES[city];
  const combo = getCombo(service, city);
  const faqs = cityServiceFaqs(service, city);

  const otherServices = SERVICE_ORDER.filter((x) => x !== service).map((x) => ({
    label: `${SERVICES[x].label} ${c.name}`,
    href: `/${city}/${x}`,
  }));
  const otherCities = CITY_ORDER.filter((x) => x !== city).map((x) => ({
    label: `${s.label} ${CITIES[x].name}`,
    href: `/${x}/${service}`,
  }));

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Start", href: "/" },
          { label: c.name, href: c.hub },
          { label: s.label },
        ]}
        badge={`${s.badge} · ${c.name}`}
        title={combo.h1}
        subtitle={combo.heroSubtitle}
        bullets={["10+ års erfarenhet", "Fast pris innan start", "Allt görs av mig — ingen outsourcing"]}
      />

      {/* ═══ LOKAL VINKEL (unik per ort × tjänst) ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge={`${s.label} i ${c.name}`}
            title={`${s.name} för företag i ${c.name}.`}
          />
          <Reveal delay={0.14}>
            <p className="mt-8 text-[16px] sm:text-[17px] leading-[1.8] text-body max-w-[760px]">
              {combo.localAngle}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {c.nearby.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 text-[13px] font-500 text-body bg-surface border border-border px-3.5 py-1.5 rounded-lg"
                >
                  <MapPin size={12} className="text-primary" />
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ VAD INGÅR ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Vad ingår" title={`${s.name} som ger resultat.`} subtitle={s.intro} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.features.map((f, i) => {
              const Icon = ICONS[f.icon] || Check;
              return (
                <Reveal key={f.title} delay={i * 0.06 + 0.1}>
                  <div className="bg-surface rounded-[16px] border border-border p-6 h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15 transition-all duration-300">
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

      {/* ═══ SÅ JOBBAR VI ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Så jobbar vi" title={`Från första genomgång till resultat — ${s.priceLabel.toLowerCase()}.`} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {s.process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06 + 0.1}>
                <div className="bg-surface rounded-[16px] border border-border p-6 h-full">
                  <div className="font-heading font-800 text-[22px] text-primary">{`0${i + 1}`}</div>
                  <h3 className="mt-2 font-heading font-700 text-[16px] text-heading">{p.title}</h3>
                  <p className="mt-2 text-[14px] text-body leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VARFÖR / TRUST + PROOF ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <Badge>Varför Stolt Marketing</Badge>
            <Reveal delay={0.06}>
              <h2 className="mt-5 font-heading font-800 text-[clamp(26px,3.5vw,38px)] leading-[1.1] tracking-[-0.025em] text-heading max-w-[480px]">
                En lokal partner i {c.name} — inte en byrå i kö.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-[16px] leading-relaxed text-body max-w-[520px]">
                Du jobbar direkt med mig, {SITE.founder.split(" ")[0]}. Allt görs av mig själv — ingen
                outsourcing, ingen kö och inga ärendenummer. Fast pris innan vi börjar och raka besked
                hela vägen.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  "Allt görs av mig — ingen outsourcing",
                  "Fast pris innan start, inga överraskningar",
                  "Lokal i Skåne, nåbar på riktigt",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2.5 text-[15px] text-body">
                    <Check size={18} className="text-primary shrink-0" strokeWidth={2.5} />
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "150+", l: "Levererade projekt" },
                { v: "10+ år", l: "Erfarenhet" },
                { v: "24h", l: "Svarstid på vardagar" },
                { v: "Fast pris", l: "Innan vi börjar" },
              ].map((s2) => (
                <div key={s2.l} className="bg-surface rounded-[16px] border border-border p-6">
                  <div className="font-heading font-800 text-[28px] text-heading tracking-tight">{s2.v}</div>
                  <div className="text-[13px] text-muted mt-1">{s2.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-[720px] mx-auto">
          <SectionHeader badge="Vanliga frågor" title={`Frågor om ${s.name.toLowerCase()} i ${c.name}.`} />
          <div className="mt-10 flex flex-col">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.03 + 0.1}>
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
        </div>
      </section>

      {/* ═══ RELATERAT / INTERN LÄNKNING ═══ */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            badge="Mer för dig"
            title={`Fler tjänster i ${c.name} — och ${s.label.toLowerCase()} på fler orter.`}
          />
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-[12px] font-700 text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                <Building2 size={14} className="text-primary" /> Allt i {c.name}
              </p>
              <div className="flex flex-col gap-2.5">
                <a href={c.hub} className="text-[14px] font-600 text-heading hover:text-primary transition-colors">
                  {c.name} — översikt
                </a>
                {otherServices.map((l) => (
                  <a key={l.href} href={l.href} className="text-[14px] text-body hover:text-primary transition-colors">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[12px] font-700 text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> {s.label} på fler orter
              </p>
              <div className="flex flex-col gap-2.5">
                {otherCities.map((l) => (
                  <a key={l.href} href={l.href} className="text-[14px] text-body hover:text-primary transition-colors">
                    {l.label}
                  </a>
                ))}
                <a href={s.relatedService} className="text-[14px] font-600 text-heading hover:text-primary transition-colors">
                  {s.name} — tjänsteöversikt
                </a>
              </div>
            </div>
            <div>
              <p className="text-[12px] font-700 text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText size={14} className="text-primary" /> Läs mer
              </p>
              <div className="flex flex-col gap-2.5">
                {s.blog.map((b) => (
                  <a key={b.href} href={b.href} className="text-[14px] text-body hover:text-primary transition-colors">
                    {b.title}
                  </a>
                ))}
                <a href="/projekt" className="text-[14px] text-body hover:text-primary transition-colors">
                  Se projekt & resultat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(168deg, #EEF2FF 0%, #E0E7FF 40%, #DBEAFE 70%, #EFF6FF 100%)" }}
        />
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <Reveal>
            <h2 className="font-heading font-800 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.025em] text-heading">
              {s.label} i {c.name}? Då snackar vi.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-4 text-[16px] leading-relaxed text-body">
              Boka en kostnadsfri genomgång så går jag igenom ditt nuläge och visar vad som ger
              störst effekt för ditt företag i {c.name}. Svar inom 24h på vardagar.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="/boka" className="premium-btn">
                <span>Boka kostnadsfri genomgång</span>
                <ArrowRight size={16} className="opacity-80" />
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-600 text-heading border border-border bg-surface hover:border-primary/20 transition-colors"
              >
                Kontakta {SITE.founder.split(" ")[0]}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
