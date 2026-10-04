"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { Reveal } from "@/components/ui";
import { SITE, PRICING } from "@/lib/local/data";
import { trackConversion } from "@/lib/track";
import { klickId } from "@/lib/klickid";
import { CASES } from "@/lib/case-data";
import { packages } from "@/lib/pricing-packages";

const niklassonsOffert = CASES.niklassonsflytt.results[0].value;

const steg = [
  {
    n: "1",
    title: "Skicka formuläret",
    desc: "Namn och mejl räcker och det tar en minut. Inget möte, inget säljsamtal. Har du en hemsida idag skriver du adressen, annars lämnar du fältet tomt.",
  },
  {
    n: "2",
    title: "Du får ett färdigt designförslag",
    desc: "Ett gratis, klickbart förslag med startsida och en tjänstesida inom två arbetsdagar. Resten byggs efter ditt ja.",
  },
  {
    n: "3",
    title: "Säg ja till upplägget",
    desc: "Gillar du förslaget kommer vi överens om paket, omfattning och tidplan. Därefter bygger jag klart och publicerar sajten. Tackar du nej till förslaget kostar det inget.",
  },
];

const ingar = [
  "Sajt och design, byggd för din bransch",
  "Hosting och löpande drift",
  "Säkerhet, certifikat och backuper",
  "Innehållsändringar inom paketets omfattning",
  "Support med svar samma arbetsdag",
  "Teknisk SEO-grund och läsbart innehåll",
];

const paket = packages.map(p => ({ name: p.name, price: `${p.monthly.toLocaleString("sv-SE")} kr/mån`, note: p.desc, items: p.features, highlight: p.featured }));

const faqs = [
  {
    q: "Vem äger sajten vid avslut?",
    a: "Du äger domänen och innehållet. Vid avslut får du en export av sajtens filer. Formulär, CMS, e-post och andra externa tjänster behöver en fortsatt eller ny driftlösning. Jag går igenom vad som behövs för att flytta funktionerna.",
  },
  {
    q: "Hur säger jag upp?",
    a: "Ett mejl räcker. Bindningen är tolv månader, därefter löper avtalet månadsvis och avslutas till nästa månadsskifte. Inga uppsägningsavgifter och ingen förhandling.",
  },
  {
    q: "Hur lång tid tar det?",
    a: "Förslaget med startsida och en tjänstesida får du inom två arbetsdagar. När du sagt ja bestämmer vi tidplanen för resten utifrån omfattning och när materialet finns.",
  },
  {
    q: "Jobbar du bara i Hässleholm?",
    a: "Nej. Jag sitter i Hässleholm och träffar gärna företag i Skåne på plats, men merparten av kunderna finns i hela Sverige och vi jobbar över video. Det har aldrig varit ett hinder.",
  },
];

const Formular = ({ id, rubrik, done, form, sending, error, change, submit, input }) =>
    done ? (
      <div role="status" className="bg-surface rounded-[10px] border border-border p-7 text-center">
        <div className="w-11 h-11 rounded-full bg-[rgba(5,150,105,0.08)] flex items-center justify-center mx-auto">
          <Check aria-hidden="true" size={20} className="text-[#059669]" />
        </div>
        <h3 className="mt-4 font-heading font-700 text-[20px] text-heading">
          Tack, jag hör av mig samma arbetsdag.
        </h3>
        <p className="mt-2 text-[15px] text-body leading-relaxed">
          Du får ett förslag med startsida och en tjänstesida inom två arbetsdagar. Resten byggs efter ditt ja. Vill du prata tidigare når du mig
          direkt på {SITE.phone}.
        </p>
      </div>
    ) : (
      <form onSubmit={submit} aria-busy={sending} className="bg-surface rounded-[10px] border border-border p-6 sm:p-7">
        {rubrik && (
          <h3 className="font-heading font-700 text-[19px] text-heading mb-4">{rubrik}</h3>
        )}
        <div className="grid gap-3">
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
          <label htmlFor={`${id}-phone`} className="text-[14px] text-heading">Telefon (valfritt)</label>
          <input
            id={`${id}-phone`}
            autoComplete="tel"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={change}
            placeholder="Telefon (valfritt)"
            className={input}

          />
          <label htmlFor={`${id}-url`} className="text-[14px] text-heading">Webbadress (valfritt)</label>
          <input
            id={`${id}-url`}
            autoComplete="url"
            name="url"
            value={form.url}
            onChange={change}
            placeholder="Nuvarande webbadress (valfritt)"
            className={input}

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
            {sending ? "Skickar..." : "Be om gratis förslag"}
          </button>
        </div>
        {error && <p role="alert" className="mt-3 text-[15px] text-heading">{error}</p>}
        <p className="mt-3 text-[13px] text-muted leading-relaxed">
          Gratis förslag: startsida och en tjänstesida inom två arbetsdagar, resten efter ditt ja. Uppgifterna används för att svara dig. Ingen uppföljningskedja, inget nyhetsbrev.{" "}
          <Link href="/integritet" className="underline hover:text-heading transition-colors">
            Så hanteras de
          </Link>
          .
        </p>
      </form>
    );

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
      const result = await res.json().catch(() => null);
      if (!res.ok || !result?.ok || !result?.reference) throw new Error("send");
      if (result.ok) {
        setDone(true);
        trackConversion("lead-lp-hemsida", "lead");
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
          <a
            href={SITE.phoneHref}
            className="text-[15px] font-500 text-heading hover:text-[#F2C230] transition-colors"
          >
            {SITE.phone}
          </a>
        </div>
      </header>

      <section className="px-5 sm:px-8 pt-12 sm:pt-16 pb-14">
        <div className="max-w-[1120px] mx-auto grid lg:grid-cols-[minmax(0,1fr)_420px] gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-[13px] font-600 tracking-[0.08em] uppercase text-[#F2C230]">
              Hemsida till fast pris
            </p>
            <h1 className="mt-4 font-heading font-700 text-[clamp(34px,5.6vw,54px)] leading-[1.05] tracking-[-0.02em] text-heading">
              Ny hemsida till ditt företag. Börja med ett gratis förslag.
            </h1>
            <p className="mt-5 text-[17px] sm:text-[18px] leading-relaxed text-body max-w-[560px]">
              Byggd av personen du pratar med. Fast pris från {PRICING.basManad} exkl. moms,
              0 kr i startavgift. Bas omfattar högst fem sidor med drift, support och ändringar enligt paketet. Tolv månaders bindning, sedan månadsvis.
            </p>

            <p className="mt-6 text-[15px] text-body leading-relaxed max-w-[520px]">
              <span className="font-heading font-700 text-heading text-[19px]">
                {niklassonsOffert} registrerade offert-events i ett historiskt 30-dagarsutdrag
              </span>
              <br />
              för Niklassons Flytt. Hämtat 5 september 2026 från Umami. Events är inte verifierade unika kunder. Se period och begränsningar i caset.
            </p>

            <div className="mt-8 hidden lg:flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[10px] bg-[#F2C230] text-[#191405] font-heading font-600 text-[16px] hover:bg-[#F2ECDD] transition-colors"
              >
                Få gratis förslag inom två arbetsdagar
                    </a>
            </div>

            <p className="mt-7 text-[14px] text-muted">
              10+ år i branschen · Direktkontakt med mig · Kunder i hela Sverige
            </p>
          </div>

          <div className="lg:sticky lg:top-8">
            <Formular done={done} form={form} sending={sending} error={error} change={change} submit={submit} input={input} id="top" rubrik="Få ditt gratis designförslag" />
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-y border-border">
        <div className="max-w-[1120px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading max-w-[620px]">
            Vad kostar en hemsida egentligen?
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            <Reveal>
              <div className="rounded-[10px] border border-border p-7 h-full">
                <p className="text-[13px] font-600 tracking-[0.08em] uppercase text-muted">
                  När du jämför offerter
                </p>
                <div className="mt-3 font-heading font-700 text-[30px] text-heading leading-none">
                  Jämför hela kostnaden
                </div>
                <p className="mt-2.5 text-[14px] text-muted">över samma tidsperiod</p>
                <ul className="mt-5 grid gap-2.5 text-[15px] text-body leading-snug">
                  <li>Ingår hosting, drift och underhåll?</li>
                  <li>Vad ingår vid innehållsändringar?</li>
                  <li>Vilka sidor och funktioner ingår?</li>
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
                <p className="mt-2.5 text-[14px] text-muted">0 kr i startavgift. Exkl. moms. Tolv månader, sedan månadsvis.</p>
                <ul className="mt-5 grid gap-2.5">
                  {[
                    "Bas: högst fem sidor, hosting och drift",
                    "Ändringar inom avtalad omfattning",
                    "Du äger innehållet och domänen",
                  ].map((it) => (
                    <li key={it} className="flex gap-2.5 text-[15px] text-body leading-snug">
                      <Check aria-hidden="true" size={17} className="text-[#F2C230] shrink-0 mt-0.5" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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
                    {niklassonsOffert} registrerade offert-events
                  </div>
                  <div className="mt-1.5 text-[14px] text-muted">
                    historiskt 30-dagarsutdrag, hämtat 5 september 2026
                  </div>
                  <p className="mt-3 text-[15px] text-body leading-relaxed">
                    38 sitemap-URL:er. Formulärevents är kontaktaktiviteter, inte genomförda affärer. Kunden redigerar innehållet
                    själv.{" "}
                    <span className="text-[#F2C230] group-hover:underline">Läs caset</span>
                  </p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-5">

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
                10+ års erfarenhet · {SITE.baseCity}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-y border-border">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Detta ingår varje månad
          </h2>
          <ul className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {ingar.map((it) => (
              <li key={it} className="flex gap-3 text-[16px] text-body leading-snug">
                <Check aria-hidden="true" size={19} className="text-[#F2C230] shrink-0 mt-0.5" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

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
            Alla priser exkl. moms. 0 kr start. Tolv månaders bindning, sedan månadsvis.
            Bas har högst fem sidor. Sidor, ändringar och nya funktioner följer avtalad omfattning.
            Annonsbudget betalas separat. E-handel kan läggas till för 800 kr/mån exkl. moms, med omfattning och externa avgifter avtalade före start.
          </p>
        </div>
      </section>

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
                  och uppföljning som skiljer formulärevents från mottagna förfrågningar.
                  Innehållet förbättras utifrån vad kunderna behöver och vad mätningen visar.
                </p>
                <a
                  href="#kontakt"
                  className="mt-5 inline-flex items-center gap-2 text-[15px] font-600 text-[#F2C230] hover:underline"
                >
                  Få gratis förslag
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div id="ads" className="rounded-[10px] border border-border p-7 h-full bg-surface scroll-mt-4">
                <h3 className="font-heading font-700 text-[19px] text-heading">
                  Google Ads med uppföljning
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
                  Få gratis förslag
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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

      <section id="kontakt" className="px-5 sm:px-8 py-14 sm:py-20 bg-surface border-t border-border scroll-mt-4">
        <div className="max-w-[560px] mx-auto text-center">
          <h2 className="font-heading font-700 text-[clamp(24px,3.4vw,34px)] leading-[1.15] tracking-[-0.015em] text-heading">
            Få ditt gratis designförslag
          </h2>
          <p className="mt-4 text-[16px] text-body leading-relaxed">
            Inom två arbetsdagar får du ett klickbart förslag med startsida och en tjänstesida. Resten byggs efter ditt ja. Tackar du nej till förslaget kostar det inget.
          </p>
          <div className="mt-8 text-left">
            <Formular done={done} form={form} sending={sending} error={error} change={change} submit={submit} input={input} id="bottom" />
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
            Få gratis förslag
          </a>
        </div>
      </div>
    </main>
  );
}
