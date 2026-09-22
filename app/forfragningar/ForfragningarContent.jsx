"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal, SectionHeader, PageHero } from "@/components/ui";
import { klickId } from "@/lib/klickid";
import { SITE } from "@/lib/local/data";

/* Svarsspegelns siffror (23 av 30) får visas först när alla 30 firmor fått
   mejlet om att förfrågan var ett test. Slå på när Smartlead visar att
   avslöjandet (sekvens A1) levererats till alla 23, tidigast 2026-09-28.
   Se docs/ny-ingang-2026-09-23/FORSLAG-NY-INGANG.md avsnitt 3.4. */
const VISA_MATNINGEN = false;

const steg = [
  {
    titel: "Kunden skriver i rutan.",
    text: "Den finns på varje sida av din hemsida. Kunden kan skriva ett meddelande, be att bli uppringd eller chatta.",
  },
  {
    titel: "Du får ett SMS direkt.",
    text: "Med namn, nummer eller mejl och början på meddelandet. Har kunden skrivit sin mejl får hen samtidigt en bekräftelse på att förfrågan kommit fram.",
  },
  {
    titel: "Ett förslag på svar ligger färdigt.",
    text: "AI läser förfrågan och skriver ett förslag. Du läser, ändrar om du vill och skickar. Inget går ut i ditt namn utan att du trycker.",
  },
];

const ingarInte = [
  "Samtal till ditt vanliga nummer. Inget telefonsvar, ingen AI i telefon och inget SMS när du missar ett samtal.",
  "Mejl som skickas direkt till din adress, till exempel info@.",
  "Svar som går ut automatiskt i ditt namn.",
  "Bokning i din kalender.",
  "Löften om fler jobb. Rutan ser till att förfrågan via hemsidan når dig. Svaret är ditt.",
];

const pris = [
  "0 kr i start, jag installerar",
  "Första 30 dagarna gratis",
  "Ingen bindning, du säger upp med ett mejl",
  "Upp till 30 uppringningar, 150 samtalsminuter, 100 SMS och 100 chattar i månaden. Räcker det inte hör jag av mig innan något kostar mer.",
];

const fragor = [
  {
    q: "Svarar ni i telefon åt oss?",
    a: "Nej. Samtal till ert vanliga nummer går till er som i dag. Det som ingår är att en kund som hellre vill prata kan trycka Bli uppringd på sajten.",
  },
  {
    q: "Skickar AI svar till mina kunder?",
    a: "Inte på förfrågningarna. Du läser förslaget och trycker skicka. Chatten svarar däremot själv på frågor utifrån din sajt och säger att den är AI.",
  },
  {
    q: "Vem ligger bakom, och var hamnar uppgifterna?",
    a: "Jag, Joel Stolt på Stolt Marketing. Rutan är Kvota Kundkontakt, som jag sätter upp och hjälper dig med. Avtalet tecknas med Invox AB, och du godkänner själv personuppgiftsbiträdesavtalet innan rutan slås på. Databasen ligger i EU-jurisdiktion, och en del av bearbetningen, bland annat AI-sammanfattningen, sker hos leverantörer i USA.",
  },
];

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: "1px solid rgba(242,236,221,0.16)",
  background: "#161309",
  fontSize: 15,
  color: "#F2ECDD",
  fontFamily: "inherit",
  outline: "none",
};

function MatForm() {
  const [falt, setFalt] = useState({ name: "", email: "", sajt: "", ja: false, hp_field: "" });
  const [status, setStatus] = useState("idle");
  const [fel, setFel] = useState("");
  const [laddad, setLaddad] = useState(0);

  useEffect(() => {
    setLaddad(Date.now());
  }, []);

  const satt = (namn) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFalt((f) => ({ ...f, [namn]: v }));
  };

  async function skicka(e) {
    e.preventDefault();
    setFel("");
    if (!falt.ja) {
      setFel("Kryssa i rutan så vet jag att det är okej att mäta er.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          klickId: klickId(),
          name: falt.name,
          email: falt.email,
          company: falt.sajt,
          service: "Gratis svarsmätning",
          message: `Vill bli mätt. Hemsida: ${falt.sajt}. Kryssat: Ja, mät oss.`,
          hp_field: falt.hp_field,
          _elapsedMs: laddad ? Date.now() - laddad : undefined,
          _subject: `Svarsmätning: ${falt.sajt || falt.name}`,
        }),
      });
      if (!res.ok) throw new Error("send");
      setStatus("done");
      if (window.umami) window.umami.track("lead-svarsmatning");
    } catch {
      setStatus("idle");
      setFel(`Det gick inte att skicka just nu. Mejla ${SITE.email} så lägger jag in er ändå.`);
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="bg-surface rounded-[14px] border border-border p-7">
        <p className="font-heading font-600 text-[20px] text-heading flex items-center gap-2.5 m-0">
          <Check size={20} style={{ color: "#F2C230", flexShrink: 0 }} /> Tack. Jag hör av mig samma arbetsdag.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={skicka} className="bg-surface rounded-[14px] border border-border p-7 space-y-4" aria-label="Beställ en gratis svarsmätning">
      <div>
        <label htmlFor="mat-namn" className="block text-[13.5px] font-600 text-heading mb-1.5">Ditt namn</label>
        <input id="mat-namn" required autoComplete="name" value={falt.name} onChange={satt("name")} style={inputStyle} />
      </div>
      <div>
        <label htmlFor="mat-mejl" className="block text-[13.5px] font-600 text-heading mb-1.5">Din mejl (dit resultatet skickas)</label>
        <input id="mat-mejl" type="email" required autoComplete="email" value={falt.email} onChange={satt("email")} style={inputStyle} />
      </div>
      <div>
        <label htmlFor="mat-sajt" className="block text-[13.5px] font-600 text-heading mb-1.5">Företagets hemsida</label>
        <input id="mat-sajt" required placeholder="dittforetag.se" autoCapitalize="none" spellCheck={false} value={falt.sajt} onChange={satt("sajt")} style={inputStyle} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="mat-hp">Lämna tomt</label>
        <input id="mat-hp" tabIndex={-1} autoComplete="off" value={falt.hp_field} onChange={satt("hp_field")} />
      </div>
      <label className="flex items-center gap-3 text-[15px] text-heading cursor-pointer">
        <input type="checkbox" checked={falt.ja} onChange={satt("ja")} style={{ width: 18, height: 18, accentColor: "#F2C230" }} />
        Ja, mät oss.
      </label>
      {fel && <p className="text-[14px] m-0" style={{ color: "#E08A6A" }}>{fel}</p>}
      <button type="submit" className="premium-btn" disabled={status === "sending"} data-umami-event="svarsmatning-skicka">
        {status === "sending" ? "Skickar" : "Mät oss"} <ArrowRight size={15} aria-hidden="true" />
      </button>
    </form>
  );
}

export default function ForfragningarContent() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Förfrågningar" }]}
        badge="För el, VVS och andra hantverksföretag"
        title="Det svåra är att hinna svara innan kunden frågat någon annan."
        subtitle="Jag sätter en ruta på din hemsida. Kunden skriver där, du får ett SMS direkt, och när du sätter dig och tittar ligger ett förslag på svar färdigt. Du ändrar om du vill och skickar."
        bullets={["495 kr/mån exkl moms", "Första 30 dagarna gratis", "Ingen bindning"]}
      />

      <section className="pt-4 pb-6 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href="/kontakt" className="premium-btn" data-umami-event="cta-forfragningar-skriv">
            <span>Skriv till mig</span>
            <ArrowRight size={16} className="opacity-80" />
          </a>
          <p className="text-[15px] text-body m-0">
            eller skriv direkt i rutan nere till höger. Det är samma ruta som du skulle få.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader badge="Tre steg" title="Så fungerar det" maxWidth="680px" />
          <ol className="mt-10 space-y-4 list-none p-0">
            {steg.map((s, i) => (
              <Reveal key={s.titel} delay={i * 0.06}>
                <li className="bg-surface rounded-[12px] border border-border p-6 flex gap-5">
                  <span className="font-heading font-700 text-[22px] leading-none" style={{ color: "#F2C230" }}>{i + 1}</span>
                  <div>
                    <p className="font-heading font-700 text-[17px] text-heading m-0">{s.titel}</p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-body m-0">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.1}>
            <p className="mt-8 text-[15.5px] leading-relaxed text-body max-w-[680px]">
              Vill kunden hellre prata trycker hen Bli uppringd, och din mobil ringer. Under 10 sekunder från klick till
              att mobilen ringer, i mitt test. Utanför era öppettider bokas samtalet till nästa gång ni öppnar. Chatten
              svarar utifrån det som står på din sajt och säger att den är AI.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "var(--color-surface-muted)" }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeader badge="Ärligt" title="Det här ingår inte" subtitle="Hellre att du vet det nu." maxWidth="480px" />
            <ul className="mt-8 space-y-3 list-none p-0">
              {ingarInte.map((t) => (
                <li key={t} className="text-[15px] leading-relaxed text-body pl-5 relative">
                  <span aria-hidden="true" className="absolute left-0 top-[0.7em] w-2 h-[2px]" style={{ background: "rgba(242,236,221,0.4)" }} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader badge="Pris" title="495 kr i månaden exkl moms" maxWidth="480px" />
            <ul className="mt-8 space-y-3 list-none p-0">
              {pris.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-body">
                  <Check size={17} style={{ color: "#F2C230", flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[14.5px] leading-relaxed text-body">
              Du behöver inte byta hemsida. Rutan läggs på den du har, om den tar emot en rad kod. Det kollar jag innan
              du bestämmer dig, och sköter någon annan din sajt skickar jag raden till dem. Går det inte, eller finns
              ingen sajt som fungerar, börjar vi med hemsidan. Priserna för hemsidor står på{" "}
              <a href="/priser" className="underline" style={{ textUnderlineOffset: 4 }}>/priser</a>.
            </p>
          </div>
        </div>
      </section>

      <section id="matning" className="py-16 sm:py-20 px-5 sm:px-8" style={{ scrollMarginTop: 90 }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_380px] gap-12 items-start">
          <div>
            <SectionHeader badge="Gratis" title="Vet du hur snabbt ni svarar i dag?" maxWidth="520px" />
            {VISA_MATNINGEN && (
              <>
                <p className="mt-6 text-[15.5px] leading-relaxed text-body">
                  I september skrev jag till 30 el- och VVS-firmor i Stockholm som en kund med ett vanligt jobb. 23 av dem
                  hade inte svarat en vecka senare. Hos 20 av 30 hittade min automatiska koll inget formulär på sajten.
                </p>
                <p className="mt-4 text-[15.5px] leading-relaxed text-body">
                  Det betyder inte att de struntar i sina kunder. Mejlet kom från en adress de aldrig sett och kan ha
                  hamnat i skräpposten. Men för kunden som väntar ser det likadant ut. Alla 30 har fått ett mejl från mig
                  om att det var ett test, och inga namn publiceras.
                </p>
              </>
            )}
            <p className="mt-6 text-[15.5px] leading-relaxed text-body">
              Vill du veta hur det ser ut hos er? Jag skickar samma sorts förfrågan till er, som mejl och via formuläret på
              sajten, någon dag de närmaste två veckorna. Inga samtal. Du får tiden svart på vitt, gratis.
            </p>
          </div>
          <MatForm />
        </div>
      </section>

      <section className="py-16 sm:py-20 px-5 sm:px-8" style={{ background: "var(--color-surface-muted)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader badge="Min egen sajt" title="Jag kör det själv" maxWidth="680px" />
          <p className="mt-6 text-[15.5px] leading-relaxed text-body max-w-[680px]">
            Rutan nere till höger är samma ruta. Skriv något där, så ser du vad som händer. Jag svarar samma arbetsdag.
          </p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-body max-w-[680px]">
            Du skulle vara bland de första firmorna utanför mitt eget bolag som kör den. Därför sätter jag upp den själv,
            provar hela vägen med dig, och har ingen bindning.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeader badge="Frågor" title="Det folk brukar undra" maxWidth="680px" />
          <div className="mt-8 space-y-4">
            {fragor.map((f) => (
              <div key={f.q} className="bg-surface rounded-[12px] border border-border p-6">
                <h3 className="font-heading font-700 text-[17px] text-heading m-0">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body m-0">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
        <div className="relative z-10 max-w-[620px] mx-auto text-center">
          <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">
            Hör av dig
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-body">
            Skriv i rutan här nere, via <a href="/kontakt" className="underline font-600">kontaktsidan</a> eller ring{" "}
            <a href={SITE.phoneHref} className="underline font-600" data-umami-event="cta-telefon">{SITE.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
