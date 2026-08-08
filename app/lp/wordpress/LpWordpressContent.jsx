"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Gauge, Video, Tag } from "lucide-react";
import { Reveal } from "@/components/ui";
import { SITE } from "@/lib/local/data";
import { trackConversion } from "@/lib/track";

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
    desc: "4 900 kr för migreringen, eller 0 kr om du samtidigt tecknar drift. Inga timmar, inga överraskningar.",
  },
];

const faqs = [
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
  const [form, setForm] = useState({ url: "", name: "", email: "", hp_field: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  // Sätts vid sidladdning — submits < 3 s efter denna avvisas server-side.
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
          name: form.name,
          email: form.email,
          message: `Vill ha en mätning av ${form.url}`,
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
    "w-full px-4 py-3 rounded-[10px] border border-border bg-white text-[15px] text-heading placeholder:text-muted focus:outline-none focus:border-[#9A7409] transition-colors";

  const Formular = ({ id }) =>
    done ? (
      <div className="bg-white rounded-[10px] border border-border p-7 text-center">
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
      <form onSubmit={submit} className="bg-white rounded-[10px] border border-border p-6 sm:p-7">
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
            className="w-full mt-1 px-6 py-3.5 rounded-[10px] bg-[#1A1611] text-[#FAF5EC] font-heading font-600 text-[16px] cursor-pointer hover:bg-[#2b2318] transition-colors disabled:opacity-60"
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
    <main>
      {/* ── Minimal topp. Bara logga och telefon, ingen meny. ── */}
      <header className="border-b border-border">
        <div className="max-w-[1120px] mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading font-700 text-[19px] text-heading tracking-[-0.01em]">
            sto<span className="text-[#F2BC1B]">|</span>t
          </Link>
          <a href={SITE.phoneHref} className="text-[15px] font-500 text-heading hover:text-[#9A7409] transition-colors">
            {SITE.phone}
          </a>
        </div>
      </header>

      {/* ── Hero. Ingen intoning: LCP-elementet måste vara målat direkt. ── */}
      <section className="px-5 sm:px-8 pt-12 sm:pt-16 pb-14">
        <div className="max-w-[1120px] mx-auto grid lg:grid-cols-[1fr,420px] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[13px] font-600 tracking-[0.08em] uppercase text-[#9A7409]">
              WordPress-hjälp i Skåne
            </p>
            <h1 className="mt-4 font-heading font-700 text-[clamp(34px,5.6vw,54px)] leading-[1.05] tracking-[-0.02em] text-heading">
              WordPress som laddar direkt
            </h1>
            <p className="mt-5 text-[17px] sm:text-[18px] leading-relaxed text-body max-w-[560px]">
              Är din WordPress långsam? Skicka adressen så mäter jag sajten och spelar in en
              video på två minuter där jag går igenom exakt vad som håller den tillbaka.
              Inom 24 timmar, utan kostnad och utan säljsamtal.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["86 %", "lättare sidvikt"],
                ["3 × 100", "i Lighthouse"],
                ["4 900 kr", "fast pris på migrering"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-heading font-700 text-[26px] text-heading leading-none">{v}</div>
                  <div className="mt-1.5 text-[14px] text-muted">{l}</div>
                </div>
              ))}
            </div>

            <p className="mt-7 text-[15px] text-body leading-relaxed max-w-[520px]">
              Siffrorna kommer från EdShare, som låg på WordPress och flyttades till statisk edge.
              Samma innehåll och samma redaktörer, men 86 procent mindre att ladda ner.
            </p>
          </div>

          <div className="lg:sticky lg:top-8">
            <Formular id="top" />
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
                <div className="bg-white rounded-[10px] border border-border p-7 h-full">
                  <v.icon size={22} className="text-[#9A7409]" />
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
          <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-[760px]">
            {[
              {
                name: "Migrering",
                price: "4 900 kr",
                note: "0 kr om du samtidigt tecknar drift i 12 månader.",
                items: ["Hela sajten flyttad till edge", "Omdirigeringar och SEO bevarade", "Mätning före och efter"],
              },
              {
                name: "Drift",
                price: "1 190 kr/mån",
                note: "12 månaders bindning, därefter månadsvis.",
                items: ["Hosting, uppdateringar och säkerhet", "Innehållsändringar när du behöver", "Svar inom 24 timmar"],
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="bg-white rounded-[10px] border border-border p-7 h-full">
                  <h3 className="font-heading font-700 text-[18px] text-heading">{p.name}</h3>
                  <div className="mt-3 font-heading font-700 text-[30px] text-heading leading-none">{p.price}</div>
                  <p className="mt-2.5 text-[14px] text-muted">{p.note}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[15px] text-body leading-snug">
                        <Check size={17} className="text-[#9A7409] shrink-0 mt-0.5" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
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
      <section className="px-5 sm:px-8 py-14 sm:py-20">
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
    </main>
  );
}
