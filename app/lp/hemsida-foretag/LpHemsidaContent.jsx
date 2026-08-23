"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui";
import { SITE, PRICING } from "@/lib/local/data";
import { trackConversion } from "@/lib/track";
import { klickId } from "@/lib/klickid";

/* ============================================================
   Annonslandningssida för hemsida-, pris- och webbyråorden.
   Täcker fyra annonsgrupper: Hemsida företag, Ny hemsida,
   Pris & kostnad (#priser) och Webbyrå, plus Skåne-vinkeln
   (#skane, #seo, #ads) som ligger som sektioner här i stället
   för på en egen sida. Volymen bär inte två sidor i fas 1.

   Medvetna val, ändra dem inte utan att veta varför:
   - Ingen Header/Footer. En annonssida ska ha en väg ut, inte tolv.
     Logga, telefon och integritetspolicy är kvar eftersom Google
     bedömer transparens i landningssideupplevelsen.
   - Heron animeras INTE in. Above the fold får aldrig starta på
     opacity 0, det förstör LCP och därmed klickpriset.
   - Ingen gtag, ingen kaka, ingen localStorage. Klick-id:t bärs av
     lib/klickid.js i modulminne och konverteringen skickas server-
     side av /api/contact till Kontrollrummets uppladdare. Lägg inte
     tillbaka en pixel här, sajten är kakfri med flit.
   - Honeypot heter hp_field. Aldrig company/email/url, autofyll
     trippar dem och leads försvinner tyst.
   ============================================================ */

const steg = [
  {
    n: "1",
    title: "Boka en kostnadsfri genomgång",
    desc: "Femton till tjugo minuter över video. Jag frågar vad företaget gör, vilka du vill nå och vad som inte fungerar idag.",
  },
  {
    n: "2",
    title: "Du får ett färdigt designförslag",
    desc: "Inom två arbetsdagar, gratis. Inte en skiss i en PDF utan en riktig sida du kan klicka runt i.",
  },
  {
    n: "3",
    title: "Gillar du det lanserar vi",
    desc: "Gör du inte det kostar det ingenting. Du har inte skrivit på något och du är inte skyldig mig en krona.",
  },
];

const ingar = [
  "Sajt och design, byggd för din bransch",
  "Hosting och drift på snabb edge",
  "Säkerhet, certifikat och backuper",
  "Innehållsändringar när du behöver",
  "Support med svar inom 24 timmar",
  "SEO-grund och AI-läsbarhet från start",
];

const paket = [
  {
    name: "Bas",
    price: PRICING.basManad,
    note: "För dig som behöver en sajt som gör jobbet.",
    items: ["Upp till sex sidor", "Design efter din profil", "Drift, support och ändringar"],
  },
  {
    name: "Bredd",
    price: PRICING.bredd,
    note: "Allt i Bas, för dig som behöver mer sajt.",
    items: ["Upp till tolv sidor", "Skräddarsydd design", "SEO-rapport varje månad"],
    highlight: true,
  },
  {
    name: "Spets",
    price: PRICING.spets,
    note: "Allt i Bredd, plus att jag driver synligheten.",
    items: ["Obegränsat antal sidor", "Aktiv SEO varje månad", "Google Ads med rapportering"],
  },
];

const faqs = [
  {
    q: "Vem äger sajten om vi avslutar?",
    a: "Du. Domänen och allt innehåll är ditt från dag ett, och säger du upp får du sajten exporterad som färdiga filer utan extra kostnad. Du blir aldrig inlåst hos mig, du väljer att stanna.",
  },
  {
    q: "Hur säger jag upp?",
    a: "Ett mejl räcker. Bindningen är tolv månader, därefter löper avtalet månadsvis med en månads uppsägning. Inga uppsägningsavgifter och ingen förhandling.",
  },
  {
    q: "Hur lång tid tar det?",
    a: "Designförslaget får du inom två arbetsdagar. Från godkänt förslag till lansering tar det oftast två till fyra veckor, beroende på hur många sidor det handlar om och hur snabbt jag får innehållet.",
  },
  {
    q: "Jobbar du bara i Hässleholm?",
    a: "Nej. Jag sitter i Hässleholm och träffar gärna företag i Skåne på plats, men merparten av kunderna finns i hela Sverige och vi jobbar över video. Det har aldrig varit ett hinder.",
  },
];

export default function LpHemsidaContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    url: "",
    hp_field: "",
  });
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
      // De valfria fälten bakas in i message: /api/contact kräver name, email
      // och message, och vill inte veta något om den här sidans fältuppsättning.
      const rader = [
        "Vill ha ett gratis designförslag (LP hemsida-foretag).",
        form.phone ? `Telefon: ${form.phone}` : null,
        form.url ? `Nuvarande sajt: ${form.url}` : null,
      ].filter(Boolean);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          klickId: klickId(),
          name: form.name,
          email: form.email,
          message: rader.join("\n"),
          hp_field: form.hp_field,
          _elapsedMs: Date.now() - loadedAt,
          _subject: `Designförslag: ${form.name}${form.url ? ` (${form.url})` : ""}`,
        }),
      });
      if (res.ok) {
        setDone(true);
        trackConversion("lead-lp-hemsida", "lead");
      }
    } catch (err) {
      console.error(err);
    }
    setSending(false);
  };

  const input =
    "w-full px-4 py-3 rounded-[10px] border border-border bg-surface text-[15px] text-heading placeholder:text-muted focus:outline-none focus:border-[#F2C230] transition-colors";

  const Formular = ({ id, rubrik }) =>
    done ? (
      <div className="bg-surface rounded-[10px] border border-border p-7 text-center">
        <div className="w-11 h-11 rounded-full bg-[rgba(5,150,105,0.08)] flex items-center justify-center mx-auto">
          <Check size={20} className="text-[#059669]" />
        </div>
        <h3 className="mt-4 font-heading font-700 text-[20px] text-heading">
          Tack, jag hör av mig inom 24 timmar.
        </h3>
        <p className="mt-2 text-[15px] text-body leading-relaxed">
          Du får ditt designförslag inom två arbetsdagar. Vill du prata tidigare når du mig
          direkt på {SITE.phone}.
        </p>
      </div>
    ) : (
      <form onSubmit={submit} className="bg-surface rounded-[10px] border border-border p-6 sm:p-7">
        {rubrik && (
          <h3 className="font-heading font-700 text-[19px] text-heading mb-4">{rubrik}</h3>
        )}
        <div className="grid gap-3">
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
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            value={form.phone}
            onChange={change}
            placeholder="Telefon (valfritt)"
            className={input}
            aria-label="Telefon, valfritt"
          />
          <input
            id={`${id}-url`}
            name="url"
            value={form.url}
            onChange={change}
            placeholder="Nuvarande webbadress (valfritt)"
            className={input}
            aria-label="Nuvarande webbadress, valfritt"
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
            {sending ? "Skickar…" : "Skicka, svar inom 24 h vardagar"}
          </button>
        </div>
        <p className="mt-3 text-[13px] text-muted leading-relaxed">
          Uppgifterna används bara för att svara dig. Ingen uppföljningskedja, inget nyhetsbrev.{" "}
          <Link href="/integritet" className="underline hover:text-heading transition-colors">
            Så hanteras de
          </Link>
          .
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
          <a
            href={SITE.phoneHref}
            className="text-[15px] font-500 text-heading hover:text-[#F2C230] transition-colors"
          >
            {SITE.phone}
          </a>
        </div>
      </header>

      {/* ── Hero. Ingen intoning: LCP-elementet måste vara målat direkt. ── */}
      <section className="px-5 sm:px-8 pt-12 sm:pt-16 pb-14">
        <div className="max-w-[1120px] mx-auto grid lg:grid-cols-[minmax(0,1fr)_420px] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[13px] font-600 tracking-[0.08em] uppercase text-[#F2C230]">
              Hemsida till fast pris
            </p>
            <h1 className="mt-4 font-heading font-700 text-[clamp(34px,5.6vw,54px)] leading-[1.05] tracking-[-0.02em] text-heading">
              Ny hemsida till ditt företag, se den färdig innan du betalar
            </h1>
            <p className="mt-5 text-[17px] sm:text-[18px] leading-relaxed text-body max-w-[560px]">
              Enterprise-kvalitet till småföretag, byggd av personen du pratar med. Fast pris
              från {PRICING.basManad}, 0 kr i startavgift och allt ingår.
            </p>

            {/* Beviset direkt, inte pa skarm fyra. I den har branschen kopper
                folk pa resultat: case-sidor korrelerar starkast med trafik
                (+0,64) av allt vi matt, starkare an bade ortssidor och
                tjanstedjup. En resultatsiffra ovanfor vecket gor mer an
                ytterligare en knapp. */}
            <p className="mt-6 text-[15px] text-body leading-relaxed max-w-[520px]">
              <span className="font-heading font-700 text-heading text-[19px]">
                32 offertförfrågningar på 30 dagar
              </span>
              <br />
              för Niklassons Flytt, senast levererade sajten.
            </p>

            {/* Knapparna ar dolda pa mobil med flit: dar ligger formularet
                direkt under den har texten, och sticky-raden i botten bar bade
                ring och boka. Tva extra knappar hade bara tryckt ner formularet
                under vecket och gett fem klickbara mal i forsta vyn. */}
            <div className="mt-8 hidden lg:flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[10px] bg-[#F2C230] text-[#191405] font-heading font-600 text-[16px] hover:bg-[#F2ECDD] transition-colors"
              >
                Få gratis designförslag inom 2 dagar
                <ArrowRight size={16} className="opacity-80" />
              </a>
            </div>

            <p className="mt-7 text-[14px] text-muted">
              10+ år i branschen · 150+ levererade projekt · Kunder i hela Sverige
            </p>
          </div>

          <div className="lg:sticky lg:top-8">
            <Formular id="top" rubrik="Få ditt gratis designförslag" />
          </div>
        </div>
      </section>

      {/* ── Prisankaret. Den största invändningen är engångskostnaden,
             så den möts före allt annat. ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-y border-border">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading max-w-[620px]">
            Vad kostar en hemsida egentligen?
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="rounded-[10px] border border-border p-7 h-full">
                <p className="text-[13px] font-600 tracking-[0.08em] uppercase text-muted">
                  Traditionell byrå
                </p>
                <div className="mt-3 font-heading font-700 text-[30px] text-heading leading-none">
                  80 000 till 200 000 kr
                </div>
                <p className="mt-2.5 text-[14px] text-muted">i engångskostnad</p>
                <ul className="mt-5 grid gap-2.5 text-[15px] text-body leading-snug">
                  <li>Hosting och driftavtal tillkommer</li>
                  <li>Byråtimmar vid varje ändring</li>
                  <li>Projektledare mellan dig och den som bygger</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[10px] border-2 border-[#F2C230] p-7 h-full">
                <p className="text-[13px] font-600 tracking-[0.08em] uppercase text-[#F2C230]">
                  Här
                </p>
                <div className="mt-3 font-heading font-700 text-[30px] text-heading leading-none">
                  Från {PRICING.basManad}
                </div>
                <p className="mt-2.5 text-[14px] text-muted">0 kr i startavgift</p>
                <ul className="mt-5 grid gap-2.5">
                  {[
                    "Sajt, hosting, drift och säkerhet ingår",
                    "Innehållsändringar ingår, inga timmar",
                    "Du äger sajten och domänen",
                  ].map((it) => (
                    <li key={it} className="flex gap-2.5 text-[15px] text-body leading-snug">
                      <Check size={17} className="text-[#F2C230] shrink-0 mt-0.5" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Så funkar det ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Så funkar det
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {steg.map((s, i) => (
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

      {/* ── Bevis ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-y border-border">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading max-w-[620px]">
            En sajt som gör jobbet, inte bara ser bra ut
          </h2>

          <div className="mt-10 grid lg:grid-cols-[420px_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
            <Reveal>
              <Link href="/projekt/niklassonsflytt" className="block group">
                <div className="rounded-[10px] border border-border overflow-hidden bg-surface">
                  <Image
                    src="/case-niklassonsflytt.webp"
                    alt="Niklassons Flytt, sajt byggd av Stolt Marketing"
                    width={840}
                    height={560}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
                <div className="mt-4">
                  <div className="font-heading font-700 text-[26px] text-heading leading-none">
                    32 offertförfrågningar
                  </div>
                  <div className="mt-1.5 text-[14px] text-muted">
                    på 30 dagar, Niklassons Flytt
                  </div>
                  <p className="mt-3 text-[15px] text-body leading-relaxed">
                    38 sidor över Skåne, och varje förfrågan mäts. Kunden sköter innehållet
                    själv.{" "}
                    <span className="text-[#F2C230] group-hover:underline">Läs caset</span>
                  </p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-5">
                {/* Google-recensionerna forst. De ar verifierbara: besokaren kan
                    klicka och se dem hos Google, till skillnad fran en citatruta
                    vi skrivit sjalva. Antalet skyltas medvetet INTE, branschens
                    median i local pack ar 11 och tva ser svagt ut i jamforelse.
                    Betyget staller sig starkare an rakningen. */}
                {[
                  {
                    quote:
                      "Vi har arbetat med ett flertal webbyråer genom åren och ingenting kan mäta sig med Stolt Marketing. En liten byrå med den mest otroliga servicementaliteten. Otroligt snabb, lösningsorienterad och ingenting känns någonsin krångligt eller omöjligt.",
                    name: "Claudia, Omniway",
                    role: "recension på Google",
                    google: true,
                  },
                  {
                    quote:
                      "Grymt nöjd med vår nya hemsida! Stolt Marketing var supersmidiga att ha att göra med och levererade precis det vi kom överens om. Riktigt bra jobbat, rekommenderas.",
                    name: "Lukas Andersson",
                    role: "recension på Google",
                    google: true,
                  },
                  {
                    quote:
                      "Vi behövde en helhetsleverans, ny grafisk profil, ny sajt och integration mot våra system. Joel levererade allt under en och samma kontakt. Proffsigt, strukturerat och med en tydlig plan hela vägen.",
                    name: "Robin, RBN Utbildning",
                    role: "Ny webb, API-integration och SEO",
                  },
                ].map((t) => (
                  <blockquote
                    key={t.name}
                    className="rounded-[10px] border border-border p-7 bg-surface"
                  >
                    {t.google && (
                      <div
                        className="flex items-center gap-2 mb-3 text-[13px] text-muted"
                        aria-label="Betyg 5 av 5"
                      >
                        <span aria-hidden="true" className="text-[#F2C230] tracking-[0.1em]">
                          ★★★★★
                        </span>
                      </div>
                    )}
                    <p className="text-[15.5px] text-body leading-relaxed">&quot;{t.quote}&quot;</p>
                    <footer className="mt-4 text-[14px]">
                      <span className="font-600 text-heading">{t.name}</span>
                      {t.google ? (
                        <>
                          <span className="text-muted"> · </span>
                          <a
                            href="https://www.google.com/maps?cid=8357467268890589983"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted underline underline-offset-2 hover:text-heading transition-colors"
                          >
                            {t.role}
                          </a>
                        </>
                      ) : (
                        <span className="text-muted"> · {t.role}</span>
                      )}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </Reveal>
          </div>
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
                Du pratar med den som bygger
              </h2>
              <p className="mt-4 text-[16px] text-body leading-relaxed">
                Jag heter Joel Stolt. Jag bygger själv, svarar själv och tar ansvar själv.
                Inga projektledare på timpris, ingen sitter emellan och ingen ringer upp dig
                som inte vet vad du beställt.
              </p>
              <p className="mt-3 text-[15px] text-muted">
                10+ års erfarenhet · 150+ levererade projekt · {SITE.baseCity}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Detta ingår ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-y border-border">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Detta ingår varje månad
          </h2>
          <ul className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {ingar.map((it) => (
              <li key={it} className="flex gap-3 text-[16px] text-body leading-snug">
                <Check size={19} className="text-[#F2C230] shrink-0 mt-0.5" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Priser. Ankarmål för annonsgruppen Pris & kostnad. ── */}
      <section id="priser" className="px-5 sm:px-8 py-14 sm:py-20 scroll-mt-4">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Priset står här, inte i en offert
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paket.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div
                  className={`bg-surface rounded-[10px] p-7 h-full ${
                    p.highlight ? "border-2 border-[#F2C230]" : "border border-border"
                  }`}
                >
                  <h3 className="font-heading font-700 text-[18px] text-heading">{p.name}</h3>
                  <div className="mt-3 font-heading font-700 text-[30px] text-heading leading-none">
                    {p.price}
                  </div>
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
            0 kr i startavgift på alla paket. {PRICING.bindning}. Du äger sajt, innehåll och
            domän. E-handel som tillägg, {PRICING.ehandel}.
          </p>
        </div>
      </section>

      {/* ── Skåne. Ankarmål för de lokala annonsgrupperna, som ligger här
             i stället för på en egen sida: volymen bär inte två sidor. ── */}
      <section id="skane" className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-y border-border scroll-mt-4">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading max-w-[620px]">
            Lokal webbyrå i Skåne
          </h2>
          <p className="mt-4 text-[16px] text-body leading-relaxed max-w-[620px]">
            Jag sitter i {SITE.baseCity} och jobbar med företag i Kristianstad, Malmö, Lund,
            Helsingborg och resten av Skåne. Vi ses över video eller på plats, och du får tag
            på mig direkt när något behöver fixas. Kunderna finns i hela Sverige, men Skåne
            ligger närmast.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <Reveal>
              <div id="seo" className="rounded-[10px] border border-border p-7 h-full bg-surface scroll-mt-4">
                <h3 className="font-heading font-700 text-[19px] text-heading">
                  Synas på Google i Skåne
                </h3>
                <p className="mt-3 text-[15px] text-body leading-relaxed">
                  En sida per tjänst och ort, en teknisk grund som faktiskt går att indexera,
                  och mätning som visar förfrågningar i stället för klick. Så byggs synlighet
                  som håller över tid, till fast månadspris.
                </p>
                <a
                  href="#kontakt"
                  className="mt-5 inline-flex items-center gap-2 text-[15px] font-600 text-[#F2C230] hover:underline"
                >
                  Boka kostnadsfri genomgång
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div id="ads" className="rounded-[10px] border border-border p-7 h-full bg-surface scroll-mt-4">
                <h3 className="font-heading font-700 text-[19px] text-heading">
                  Google Ads som ger förfrågningar
                </h3>
                <p className="mt-3 text-[15px] text-body leading-relaxed">
                  Rätt struktur från start, spårning mot riktiga förfrågningar och löpande
                  optimering. Fast pris utan procentpåslag på annonsbudgeten, så du vet vad
                  rådgivningen kostar.
                </p>
                <a
                  href="#kontakt"
                  className="mt-5 inline-flex items-center gap-2 text-[15px] font-600 text-[#F2C230] hover:underline"
                >
                  Boka kostnadsfri genomgång
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Invändningar. Alltid monterade, aldrig conditional mount:
             AnimatePresence gömmer svaren för Google. ── */}
      <section className="px-5 sm:px-8 py-14 sm:py-20">
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
      <section id="kontakt" className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-t border-border scroll-mt-4">
        <div className="max-w-[560px] mx-auto text-center">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Få ditt gratis designförslag
          </h2>
          <p className="mt-4 text-[16px] text-body leading-relaxed">
            Inom två arbetsdagar ser du din nya sajt. Gillar du den inte kostar det ingenting.
          </p>
          <div className="mt-8 text-left">
            <Formular id="bottom" />
          </div>
          <p className="mt-5 text-[15px] text-muted">
            Hellre prata direkt?{" "}
            <a href={SITE.phoneHref} className="text-heading hover:text-[#F2C230] transition-colors">
              {SITE.phone}
            </a>{" "}
            eller{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-heading hover:text-[#F2C230] transition-colors"
            >
              {SITE.email}
            </a>
          </p>
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
          {/* Samma lofte som formularets rubrik. Stod tidigare "Boka genomgang",
              vilket lovade ett mote men landade i ett formular som erbjod ett
              designforslag: tva olika loften for samma klick. */}
          <a
            href="#kontakt"
            className="flex-[1.4] inline-flex items-center justify-center px-4 py-3 rounded-[10px] bg-[#F2C230] text-[#191405] font-heading font-600 text-[15px]"
          >
            Få gratis förslag
          </a>
        </div>
      </div>
    </main>
  );
}
