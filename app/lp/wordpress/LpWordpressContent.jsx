"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Gauge, Video, Tag, Phone } from "lucide-react";
import { Reveal } from "@/components/ui";
import { SITE, PRICING } from "@/lib/local/data";
import { trackConversion } from "@/lib/track";
import { klickId } from "@/lib/klickid";

const vadDuFar = [
  {
    icon: Gauge,
    title: "En mätning av din sajt",
    desc: "Jag testar den publika sidan och visar tekniska hinder. Verkliga Core Web Vitals redovisas bara när det finns tillräckliga fältdata.",
  },
  {
    icon: Video,
    title: "En video på två minuter",
    desc: "Jag går igenom din sajt och pekar på var problemet sitter. Du hör en människa, inte ett verktyg.",
  },
  {
    icon: Tag,
    title: "Ett fast pris om du vill vidare",
    desc: "Bas kostar 1 190 kr/mån exkl. moms för högst fem sidor, med tolv månaders bindning, sedan månadsvis. Migrering kan ingå vid tecknad drift efter genomgång av omfattningen.",
  },
];

const symptom = [
  "Sajten är långsam och besökarna hinner lämna",
  "Sajten har blivit hackad eller visar konstigt innehåll",
  "Uppdateringar har inte gjorts på länge",
  "Ingen svarar när något går sönder",
  "Du vet inte längre vem som har inloggningarna",
  "Byrån som byggde den finns inte kvar",
];

const overtagande = [
  {
    n: "1",
    title: "Genomgång av sajten",
    desc: "Jag börjar med en kostnadsfri kontroll av den publika sidan. Pluginversioner, användare, backuper och intrång kan granskas först när jag har överenskommen åtkomst.",
  },
  {
    n: "2",
    title: "Jag säkrar och dokumenterar",
    desc: "Efter ditt godkännande kontrollerar jag åtkomst, uppdateringar och backup och dokumenterar det överenskomna arbetet.",
  },
  {
    n: "3",
    title: "Löpande drift till fast pris",
    desc: "Därefter sköter jag sajten månad för månad. Du vet alltid vad det kostar och du får svar samma arbetsdag.",
  },
];

const faqs = [
  {
    q: "Kan du ta över en sajt som någon annan byggt?",
    a: "Ja, det är själva grejen. Jag tar över WordPress-sajter jag inte byggt hela tiden, även när dokumentationen saknas och den förra leverantören inte går att nå. Genomgången visar vad som behöver göras innan jag lämnar ett pris.",
  },
  {
    q: "Måste jag byta plattform?",
    a: "Nej. Vill du bli kvar på WordPress sköter jag den där den står. En ombyggnad till annan teknik kan vara ett alternativ, inte ett krav för att jag ska ta över driften.",
  },
  {
    q: "Hur snabbt kan du hjälpa?",
    a: "Du får svar samma arbetsdag. Tid till felsökning och åtgärd beror på åtkomst och felet. Ett första svar betyder inte att problemet är löst samma dag.",
  },
  {
    q: "Behåller jag WordPress som redigeringsverktyg?",
    a: "Jag kan hjälpa dig behålla WordPress. Vid en ombyggnad bestämmer vi vilket redigeringsverktyg som passar och vilka funktioner som måste flyttas. Alla WordPress-funktioner kan inte exporteras som statiska filer.",
  },
  {
    q: "Vad händer med mina plugins?",
    a: "Jag inventerar dem när jag har åtkomst. Vi avgör vad som behövs, vad som kan tas bort och vad som kräver en ersättning före någon ändring.",
  },
  {
    q: "Äger jag sajten?",
    a: "Du äger domänen och innehållet. En export av filer behöver kompletteras med drift för sådant som formulär, CMS och e-post. Vid en flytt dokumenterar jag vilka externa tjänster och funktioner som behöver följa med.",
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

const Formular = ({ id, done, form, sending, error, change, submit, input }) =>
    done ? (
      <div role="status" className="bg-surface rounded-[10px] border border-border p-7 text-center">
        <div className="w-11 h-11 rounded-full bg-[rgba(5,150,105,0.08)] flex items-center justify-center mx-auto">
          <Check aria-hidden="true" size={20} className="text-[#059669]" />
        </div>
        <h3 className="mt-4 font-heading font-700 text-[20px] text-heading">Tack, jag har fått din adress.</h3>
        <p className="mt-2 text-[15px] text-body leading-relaxed">
          Jag återkommer till den e-postadress du angav med min genomgång. Behöver du prata tidigare
          når du mig på {SITE.phone}.
        </p>
      </div>
    ) : (
      <form onSubmit={submit} aria-busy={sending} className="bg-surface rounded-[10px] border border-border p-6 sm:p-7">
        <div className="grid gap-3">
          <label htmlFor={`${id}-url`} className="text-[14px] text-heading">Webbadress</label>
          <input
            id={`${id}-url`}
            autoComplete="url"
            name="url"
            value={form.url}
            onChange={change}
            required
            placeholder="dinsajt.se"
            className={input}

          />
          <label htmlFor={`${id}-name`} className="text-[14px] text-heading">Ditt namn</label>
          <input
            id={`${id}-name`}
            autoComplete="name"
            name="name"
            value={form.name}
            onChange={change}
            required
            placeholder="Namn"
            className={input}

          />
          <label htmlFor={`${id}-email`} className="text-[14px] text-heading">Din e-post</label>
          <input
            id={`${id}-email`}
            autoComplete="email"
            name="email"
            type="email"
            value={form.email}
            onChange={change}
            required
            placeholder="E-post"
            className={input}

          />
          <label htmlFor={`${id}-behov`} className="text-[14px] text-heading">Vad behöver du hjälp med? (valfritt)</label>
          <textarea
            id={`${id}-behov`}
            name="behov"
            value={form.behov}
            onChange={change}
            rows={3}
            placeholder="Vad behöver du hjälp med? (valfritt)"
            className={`${input} resize-y min-h-[84px]`}

          />

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
            {sending ? "Skickar..." : "Mät min sajt"}
          </button>
        </div>
        {error && <p role="alert" className="mt-3 text-[15px] text-heading">{error}</p>}
        <p className="mt-3 text-[13px] text-muted text-center">
          Kostnadsfritt. Svar samma arbetsdag. Ingen uppföljningskedja.{" "}<Link href="/integritet" className="underline underline-offset-4">Så hanteras dina uppgifter</Link>.
        </p>
      </form>
    );

export default function LpWordpressContent() {
  const [form, setForm] = useState({ url: "", name: "", email: "", behov: "", hp_field: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  // Sätts vid sidladdning, submits < 3 s efter denna avvisas server-side.
  const [loadedAt] = useState(() => Date.now());

  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.hp_field) return; // bot
    setSending(true);
    setError("");
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
      const result = await res.json().catch(() => null);
      if (!res.ok || !result?.ok || !result?.reference) throw new Error("send");
      if (result.ok) {
        setDone(true);
        trackConversion("lead-lp-wordpress", "sajtkoll");
      }
    } catch (err) {
      setError("Meddelandet kunde inte skickas. Försök igen eller mejla joel@stoltmarketing.se.");
    }
    setSending(false);
  };

  const input =
    "w-full px-4 py-3 rounded-[10px] border border-border bg-surface text-[16px] text-heading placeholder:text-muted focus:border-[#F2C230] transition-colors";

  return (
    <main id="main-content" className="pb-20 lg:pb-0">

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
              med vad det publika testet kan visa. Jag svarar samma arbetsdag.
              Säkerhet, plugins och backuper kräver åtkomst och en överenskommen granskning.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {[
                ["WordPress", "kan behållas"],
                ["Publikt test", "kostnadsfri första kontroll"],
                ["Åtkomst", "krävs för djupare felsökning"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-heading font-700 text-[26px] text-heading leading-none">{v}</div>
                  <div className="mt-1.5 text-[14px] text-muted">{l}</div>
                </div>
              ))}
            </div>

            <p className="mt-7 text-[15px] text-body leading-relaxed max-w-[520px]">
              I EdShare-caset visar jag en äldre jämförelse där redovisad sidvikt minskade från 2,67 till 0,37 MB.
              Testdatum och resursdefinition saknas i underlaget. <Link href="/projekt/edshare" className="underline underline-offset-4">Läs jämförelsen och begränsningarna i caset</Link>.
            </p>
          </div>

          <div className="lg:sticky lg:top-8">
            <Formular done={done} form={form} sending={sending} error={error} change={change} submit={submit} input={input} id="top" />
          </div>
        </div>
      </section>

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
            Jag börjar med att reda ut felet och vilka åtgärder som behövs.
          </p>
        </div>
      </section>

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

      <section className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-y border-border">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading max-w-[620px]">
            Du får svaret först. Sedan bestämmer du.
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {vadDuFar.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="bg-surface rounded-[10px] border border-border p-7 h-full">
                  <v.icon aria-hidden="true" size={22} className="text-[#F2C230]" />
                  <h3 className="mt-4 font-heading font-700 text-[18px] text-heading">{v.title}</h3>
                  <p className="mt-2.5 text-[15px] text-body leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                note: "Kan ingå vid tecknad drift i tolv månader. Omfattning bekräftas före start.",
                items: ["Överenskomna sidor och funktioner", "Planerade omdirigeringar och SEO-kontroll", "Dokumenterade före- och eftertester"],
              },
              {
                name: "Drift Bas",
                price: PRICING.basManad,
                note: "Exkl. moms. Tolv månaders bindning, därefter månadsvis.",
                items: ["Högst fem sidor", "Hosting och drift enligt omfattningen", "Ändringar klara inom två arbetsdagar"],
              },
              {
                name: "Drift Bredd",
                price: PRICING.bredd,
                note: "Exkl. moms. Tolv månaders bindning, sedan månadsvis. Allt i Bas och fler sidor enligt överenskommen omfattning.",
                items: ["Fler tjänstesidor enligt avtalad omfattning", "Skräddarsydd design", "SEO-rapport varje månad"],
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
                        <Check aria-hidden="true" size={17} className="text-[#F2C230] shrink-0 mt-0.5" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-[14px] text-muted">
            Spets kostar 2 990 kr/mån exkl. moms för löpande innehåll och skötsel av Google Ads.
            Annonsbudget betalas separat. E-handel är ett tillägg för 800 kr/mån exkl. moms, med omfattning och externa avgifter avtalade före start.
          </p>
        </div>
      </section>

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
                Du har direktkontakt med mig vid frågor och ändringar.
              </p>
              <p className="mt-3 text-[15px] text-muted">
                10+ års erfarenhet av WordPress och WooCommerce ·{" "}
                {SITE.baseCity}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

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

      <section id="kontakt" className="px-5 sm:px-8 py-14 sm:py-20 scroll-mt-4">
        <div className="max-w-[560px] mx-auto text-center">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Skicka adressen, så mäter jag
          </h2>
          <p className="mt-4 text-[16px] text-body leading-relaxed">
            Du får resultatet från den publika kontrollen oavsett om du anlitar mig eller inte. Djupare felsökning kan kräva åtkomst.
          </p>
          <div className="mt-8 text-left">
            <Formular done={done} form={form} sending={sending} error={error} change={change} submit={submit} input={input} id="bottom" />
          </div>
        </div>
      </section>

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

      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-surface/95 backdrop-blur-sm">
        <div className="flex gap-2 px-4 py-3">
          <a
            href={SITE.phoneHref}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[10px] border border-border text-[15px] font-600 text-heading"
          >
            <Phone aria-hidden="true" size={16} />
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
