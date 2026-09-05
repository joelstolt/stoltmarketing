"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Gauge, Video, Tag, Phone } from "lucide-react";
import { Reveal } from "@/components/ui";
import { SITE, PRICING } from "@/lib/local/data";
import { trackConversion } from "@/lib/track";
import { klickId } from "@/lib/klickid";

/* ============================================================
   Annonslandningssida för WordPress-gruppen.

   Medvetna val, ändra dem inte utan att veta varför:
   - Ingen Header/Footer. En annonssida ska ha en väg ut, inte tolv.
     Logga, telefon och integritetspolicy är kvar eftersom Google
     bedömer transparens i landningssideupplevelsen.
   - Heron animeras INTE in. Above the fold får aldrig starta på
     opacity 0, det förstör LCP och därmed klickpriset.
   - Ingen GSAP, ingen canvas. Sidan ska vara tråkigt snabb.
   - Honeypot heter hp_field. Aldrig company/email/url, autofyll
     trippar dem och leads försvinner tyst.
   ============================================================ */

const vadDuFar = [
  {
    icon: Gauge,
    title: "En mätning av din sajt",
    desc: "Laddtid, Core Web Vitals och vad som faktiskt blockerar renderingen. Inte en generisk rapport, utan din adress.",
  },
  {
    icon: Video,
    title: "En video på två minuter",
    desc: "Jag går igenom din sajt och pekar på var problemet sitter. Du hör en människa, inte ett verktyg.",
  },
  {
    icon: Tag,
    title: "Ett fast pris om du vill vidare",
    desc: "Migreringen kostar 0 kr när du tecknar drift, sedan 1 190 kr i månaden. Inga timmar, inga överraskningar.",
  },
];

/* Symptomen, inte diagnosen. Den som söker "wordpress hjälp" vet sällan
   vad felet heter, men känner igen sig i listan. */
const symptom = [
  "Sajten är långsam och besökarna hinner lämna",
  "Sajten har blivit hackad eller visar konstigt innehåll",
  "Uppdateringar har inte gjorts på länge",
  "Ingen svarar när något går sönder",
  "Ni vet inte längre vem som har inloggningarna",
  "Byrån som byggde den finns inte kvar",
];

const overtagande = [
  {
    n: "1",
    title: "Genomgång av sajten",
    desc: "Kostnadsfritt. Jag mäter prestanda, går igenom plugins, säkerhet och backuper, och berättar vad jag hittar.",
  },
  {
    n: "2",
    title: "Jag säkrar och dokumenterar",
    desc: "Uppdateringar, certifikat, backuper och en lista på vem som har vilka inloggningar. Du får dokumentationen oavsett.",
  },
  {
    n: "3",
    title: "Löpande drift till fast pris",
    desc: "Därefter sköter jag sajten månad för månad. Du vet alltid vad det kostar och du får svar inom 24 timmar.",
  },
];

const faqs = [
  {
    q: "Kan du ta över en sajt som någon annan byggt?",
    a: "Ja, det är själva grejen. Jag tar över WordPress-sajter jag inte byggt hela tiden, även när dokumentationen saknas och den förra leverantören inte går att nå. Genomgången visar vad som behöver göras innan jag lämnar ett pris.",
  },
  {
    q: "Måste jag byta plattform?",
    a: "Nej. Vill du bli kvar på WordPress sköter jag den där den står. Migrering till statisk edge är ett erbjudande när prestanda är problemet, inte ett krav för att jag ska ta över driften.",
  },
  {
    q: "Hur snabbt kan du hjälpa?",
    a: "Du får svar inom 24 timmar på vardagar. Är sajten nere eller hackad går det före allt annat, då hör jag av mig samma dag.",
  },
  {
    q: "Behåller jag WordPress som redigeringsverktyg?",
    a: "Ja, om du vill. Du kan fortsätta skriva i WordPress precis som i dag medan besökarna möter en statisk sajt som laddar direkt. Vill du hellre flytta redigeringen också går det, men du bestämmer.",
  },
  {
    q: "Vad händer med mina plugins?",
    a: "Vi går igenom dem i mätningen. De flesta prestandaplugins blir överflödiga när sajten är statisk, och det som verkligen behövs byggs in i stället. Du får listan innan något ändras.",
  },
  {
    q: "Äger jag sajten?",
    a: "Du äger domänen och allt innehåll från dag ett. Säger du upp får du sajten exporterad som färdiga filer, utan extra kostnad. Du blir aldrig inlåst hos mig, du väljer att stanna.",
  },
  {
    q: "Hur lång tid tar en migrering?",
    a: "Det beror på hur många sidor och funktioner som finns. Du får en tidplan tillsammans med det fasta priset, innan du bestämmer dig.",
  },
  {
    q: "Vad kostar det om jag bara vill ha mätningen?",
    a: "Ingenting. Du får mätningen och videon oavsett om vi gör affär eller inte, och jag lägger dig inte i någon uppföljningskedja.",
  },
];

export default function LpWordpressContent() {
  const [form, setForm] = useState({ url: "", name: "", email: "", behov: "", hp_field: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  // Sätts vid sidladdning, submits < 3 s efter denna avvisas server-side.
  const [loadedAt] = useState(() => Date.now());

  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.hp_field) return; // bot
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          klickId: klickId(),
          name: form.name,
          email: form.email,
          message: form.behov
            ? `Vill ha en mätning av ${form.url}\n\nBehöver hjälp med:\n${form.behov}`
            : `Vill ha en mätning av ${form.url}`,
          hp_field: form.hp_field,
          _elapsedMs: Date.now() - loadedAt,
          _subject: `WordPress-mätning: ${form.url} (${form.name})`,
        }),
      });
      if (res.ok) {
        setDone(true);
        trackConversion("lead-lp-wordpress", "sajtkoll");
      }
    } catch (err) {
      console.error(err);
    }
    setSending(false);
  };

  const input =
    "w-full px-4 py-3 rounded-[10px] border border-border bg-surface text-[15px] text-heading placeholder:text-muted focus:outline-none focus:border-[#F2C230] transition-colors";

  const Formular = ({ id }) =>
    done ? (
      <div className="bg-surface rounded-[10px] border border-border p-7 text-center">
        <div className="w-11 h-11 rounded-full bg-[rgba(5,150,105,0.08)] flex items-center justify-center mx-auto">
          <Check size={20} className="text-[#059669]" />
        </div>
        <h3 className="mt-4 font-heading font-700 text-[20px] text-heading">Tack, jag har fått din adress.</h3>
        <p className="mt-2 text-[15px] text-body leading-relaxed">
          Du får mätningen och videon på {SITE.email} inom 24 timmar. Behöver du prata tidigare
          når du mig på {SITE.phone}.
        </p>
      </div>
    ) : (
      <form onSubmit={submit} className="bg-surface rounded-[10px] border border-border p-6 sm:p-7">
        <div className="grid gap-3">
          <input
            id={`${id}-url`}
            name="url"
            value={form.url}
            onChange={change}
            required
            placeholder="dinsajt.se"
            className={input}
            aria-label="Din webbadress"
          />
          <input
            id={`${id}-name`}
            name="name"
            value={form.name}
            onChange={change}
            required
            placeholder="Namn"
            className={input}
            aria-label="Namn"
          />
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            value={form.email}
            onChange={change}
            required
            placeholder="E-post"
            className={input}
            aria-label="E-post"
          />
          <textarea
            id={`${id}-behov`}
            name="behov"
            value={form.behov}
            onChange={change}
            rows={3}
            placeholder="Vad behöver du hjälp med? (valfritt)"
            className={`${input} resize-y min-h-[84px]`}
            aria-label="Vad behöver du hjälp med, valfritt"
          />
          {/* Honeypot. Får inte heta company/url/email, autofyll trippar dem. */}
          <input
            type="text"
            name="hp_field"
            value={form.hp_field}
            onChange={change}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }}
          />
          <button
            type="submit"
            disabled={sending}
            className="w-full mt-1 px-6 py-3.5 rounded-[10px] bg-[#F2C230] text-[#191405] font-heading font-600 text-[16px] cursor-pointer hover:bg-[#F2ECDD] transition-colors disabled:opacity-60"
          >
            {sending ? "Skickar…" : "Mät min sajt"}
          </button>
        </div>
        <p className="mt-3 text-[13px] text-muted text-center">
          Kostnadsfritt. Svar inom 24 timmar. Ingen uppföljningskedja.
        </p>
      </form>
    );

  return (
    <main className="pb-20 lg:pb-0">
      {/* ── Minimal topp. Bara logga och telefon, ingen meny. ── */}
      <header className="border-b border-border">
        <div className="max-w-[1120px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading font-700 text-[19px] text-heading tracking-[-0.01em]">
            sto<span className="text-[#F2C230]">|</span>t
          </Link>
          <a href={SITE.phoneHref} className="text-[15px] font-500 text-heading hover:text-[#F2C230] transition-colors">
            {SITE.phone}
          </a>
        </div>
      </header>

      {/* ── Hero. Ingen intoning: LCP-elementet måste vara målat direkt. ── */}
      <section className="px-5 sm:px-8 pt-12 sm:pt-16 pb-14">
        <div className="max-w-[1120px] mx-auto grid lg:grid-cols-[minmax(0,1fr)_420px] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[13px] font-600 tracking-[0.08em] uppercase text-[#F2C230]">
              WordPress-hjälp
            </p>
            <h1 className="mt-4 font-heading font-700 text-[clamp(34px,5.6vw,54px)] leading-[1.05] tracking-[-0.02em] text-heading">
              Hjälp med WordPress, snabbt och till fast pris
            </h1>
            <p className="mt-5 text-[17px] sm:text-[18px] leading-relaxed text-body max-w-[560px]">
              Långsam, hackad eller övergiven sajt? Jag tar över även WordPress jag inte byggt
              själv. Skicka adressen så mäter jag sajten och spelar in en video på två minuter
              där jag går igenom vad som är fel. Inom 24 timmar, utan kostnad och utan
              säljsamtal.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["86 %", "lättare sidvikt"],
                ["3 × 100", "i Lighthouse"],
                ["0 kr", "för migreringen"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-heading font-700 text-[26px] text-heading leading-none">{v}</div>
                  <div className="mt-1.5 text-[14px] text-muted">{l}</div>
                </div>
              ))}
            </div>

            {/* Dold pa mobil: dar staplas formularet direkt under hero, och de
                har raderna tryckte ner forsta faltet till 794 px pa en 812 px
                skarm. Siffrorna ovanfor bar beviset, det har ar fotnoten till
                dem. Pa desktop ligger formularet i sidokolumnen och texten
                kostar ingenting. */}
            <p className="mt-7 hidden lg:block text-[15px] text-body leading-relaxed max-w-[520px]">
              Siffrorna kommer från EdShare, som låg på WordPress och flyttades till statisk edge.
              Samma innehåll och samma redaktörer, men 86 procent mindre att ladda ner.
            </p>
          </div>

          <div className="lg:sticky lg:top-8">
            <Formular id="top" />
          </div>
        </div>
      </section>

      {/* ── Känner du igen dig? Symptomen först: den som söker "wordpress hjälp"
             vet sällan vad felet heter men känner igen läget. ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-y border-border">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Känner du igen dig?
          </h2>
          <ul className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {symptom.map((s) => (
              <li key={s} className="flex gap-3 text-[16px] text-body leading-snug">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 bg-[#F2C230] shrink-0 mt-2"
                />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[16px] text-heading font-500">
            Allt detta är vanligt, och fixbart.
          </p>
        </div>
      </section>

      {/* ── Så tar jag över ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Så tar jag över
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {overtagande.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="bg-surface rounded-[10px] border border-border p-7 h-full">
                  <div className="font-heading font-700 text-[30px] text-[#F2C230] leading-none">
                    {s.n}
                  </div>
                  <h3 className="mt-4 font-heading font-700 text-[18px] text-heading">{s.title}</h3>
                  <p className="mt-2.5 text-[15px] text-body leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vad du får ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-y border-border">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading max-w-[620px]">
            Du får svaret först. Sedan bestämmer du.
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {vadDuFar.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="bg-surface rounded-[10px] border border-border p-7 h-full">
                  <v.icon size={22} className="text-[#F2C230]" />
                  <h3 className="mt-4 font-heading font-700 text-[18px] text-heading">{v.title}</h3>
                  <p className="mt-2.5 text-[15px] text-body leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pris ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Priset står här, inte i en offert
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Migrering",
                price: "0 kr",
                note: "Ingår när du tecknar drift i 12 månader.",
                items: ["Hela sajten flyttad till edge", "Omdirigeringar och SEO bevarade", "Mätning före och efter"],
              },
              {
                name: "Drift Bas",
                price: PRICING.basManad,
                note: "12 månaders bindning, därefter månadsvis.",
                items: ["Hosting, uppdateringar och säkerhet", "Innehållsändringar när du behöver", "Svar inom 24 timmar"],
              },
              {
                name: "Drift Bredd",
                price: PRICING.bredd,
                note: "Allt i Bas, för dig som behöver mer sajt.",
                items: ["Obegränsat antal sidor", "Skräddarsydd design", "SEO-rapport varje månad"],
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="bg-surface rounded-[10px] border border-border p-7 h-full">
                  <h3 className="font-heading font-700 text-[18px] text-heading">{p.name}</h3>
                  <div className="mt-3 font-heading font-700 text-[30px] text-heading leading-none">{p.price}</div>
                  <p className="mt-2.5 text-[14px] text-muted">{p.note}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[15px] text-body leading-snug">
                        <Check size={17} className="text-[#F2C230] shrink-0 mt-0.5" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-[14px] text-muted">
            Spets {PRICING.spets} när du vill att jag driver SEO och Google Ads löpande.
            E-handel på valfritt paket, {PRICING.ehandel}.
          </p>
        </div>
      </section>

      {/* ── Personen bakom ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-[900px] mx-auto grid sm:grid-cols-[200px_minmax(0,1fr)] gap-8 items-center">
          <Reveal>
            <Image
              src="/joel-stolt.webp"
              alt="Joel Stolt"
              width={400}
              height={400}
              className="w-full max-w-[200px] h-auto rounded-[10px]"
              sizes="200px"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h2 className="font-heading font-700 text-[clamp(22px,3vw,30px)] leading-[1.15] tracking-[-0.015em] text-heading">
                Du pratar med den som fixar
              </h2>
              <p className="mt-4 text-[16px] text-body leading-relaxed">
                Jag heter Joel Stolt. Jag bygger själv, svarar själv och tar ansvar själv.
                Inga projektledare på timpris, ingen sitter emellan och inget faller mellan
                stolarna när något går sönder.
              </p>
              <p className="mt-3 text-[15px] text-muted">
                10+ års erfarenhet av WordPress och WooCommerce · 150+ levererade projekt ·{" "}
                {SITE.baseCity}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Invändningar. Alltid monterade, aldrig conditional mount:
             AnimatePresence gömmer svaren för Google. ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-y border-border">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Det du undrar
          </h2>
          <div className="mt-9 grid gap-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-border pb-6 last:border-0">
                <h3 className="font-heading font-700 text-[17px] text-heading">{f.q}</h3>
                <p className="mt-2.5 text-[15px] text-body leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avslut ── */}
      <section id="kontakt" className="px-5 sm:px-8 py-14 sm:py-20 scroll-mt-4">
        <div className="max-w-[560px] mx-auto text-center">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Skicka adressen, så mäter jag
          </h2>
          <p className="mt-4 text-[16px] text-body leading-relaxed">
            Du får veta vad som är fel oavsett om du anlitar mig eller inte.
          </p>
          <div className="mt-8 text-left">
            <Formular id="bottom" />
          </div>
        </div>
      </section>

      {/* ── Minimal fot. Transparens väger in i landningssideupplevelsen. ── */}
      <footer className="border-t border-border">
        <div className="max-w-[1120px] mx-auto px-5 sm:px-8 py-8 flex flex-wrap gap-x-6 gap-y-2 justify-between text-[14px] text-muted">
          <span>
            {SITE.name} · {SITE.founder} · {SITE.baseCity}
          </span>
          <span className="flex gap-5">
            <a href={SITE.phoneHref} className="hover:text-heading transition-colors">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-heading transition-colors">
              {SITE.email}
            </a>
            <Link href="/integritet" className="hover:text-heading transition-colors">
              Integritetspolicy
            </Link>
          </span>
        </div>
      </footer>

      {/* ── Sticky CTA på mobil. Ringknappen går till telefon, den andra
             till formuläret. Döljs från lg och uppåt där formuläret är
             synligt i sidokolumnen ändå. ── */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-surface/95 backdrop-blur-sm">
        <div className="flex gap-2 px-4 py-3">
          <a
            href={SITE.phoneHref}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[10px] border border-border text-[15px] font-600 text-heading"
          >
            <Phone size={16} />
            Ring
          </a>
          <a
            href="#kontakt"
            className="flex-[1.4] inline-flex items-center justify-center px-4 py-3 rounded-[10px] bg-[#F2C230] text-[#191405] font-heading font-600 text-[15px]"
          >
            Mät min sajt
          </a>
        </div>
      </div>
    </main>
  );
}
