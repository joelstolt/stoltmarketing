"use client";

import { useState } from "react";
import { ArrowRight, Check, ShieldCheck, Search, Hammer, RefreshCw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero, SectionHeader, Reveal } from "@/components/ui";

const GUL = "#F2C230";
const LINE = "rgba(242,236,221,0.14)";

/* Lagfakta, uppdaterad 2026-08-17. Granska-reglerna gäller: specifika
   myndigheter och paragrafer, aldrig compliance-löften, alltid 30-40 %-
   ärligheten om automatisk skanning. */

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Granskning",
    price: "4 900 kr",
    text: "Vi går igenom sajten mot WCAG 2.1 AA: automatisk skanning plus manuell genomgång av navigering, formulär och innehåll. Du får en prioriterad rapport med de brister som utgör störst risk, förklarade på svenska.",
  },
  {
    icon: Hammer,
    num: "02",
    title: "Åtgärdspaket",
    price: "från 24 500 kr",
    text: "Vi genomför fixarna i din befintliga sajt och dokumenterar vad som gjorts. Fast pris efter granskningen, inga löpande timmar. Fungerar för WordPress, WooCommerce, Shopify och moderna ramverk.",
  },
  {
    icon: RefreshCw,
    num: "03",
    title: "Eller: bygg rätt från grunden",
    price: "0 kr start, 1 190 kr/mån",
    text: "Är sajten gammal blir lappandet ofta dyrare än ett omtag. Vi bygger nytt med tillgängligheten inbyggd från start, som en del av vanliga månadspriset där hosting, drift och ändringar ingår.",
  },
];

const lawFacts = [
  "Lagen om vissa produkters och tjänsters tillgänglighet (2023:254) gäller sedan 28 juni 2025. Den bygger på EU:s tillgänglighetsdirektiv, ofta kallat EAA.",
  "Den träffar företag som säljer produkter och tjänster till konsumenter digitalt: e-handel, bokningstjänster, banktjänster och liknande.",
  "Tjänsteföretag med färre än 10 anställda och under 2 miljoner euro i omsättning är undantagna. Många småföretag slipper alltså kravet, men inte nyttan.",
  "Post- och telestyrelsen (PTS) utövar tillsyn över de digitala tjänsterna. Tillsyn kan leda till förelägganden och viten.",
  "I praktiken är WCAG 2.1 nivå AA måttstocken för vad en tillgänglig webbplats ska klara.",
];

const faqs = [
  {
    q: "Måste mitt företag följa tillgänglighetslagen?",
    a: "Lag 2023:254 gäller företag som säljer produkter och tjänster till konsumenter digitalt, till exempel e-handel. Tjänsteföretag med färre än 10 anställda och under 2 miljoner euro i omsättning är undantagna. Men även för undantagna företag lönar sig en tillgänglig sajt: den fungerar för fler kunder, ger färre tappade köp och rankar bättre.",
  },
  {
    q: "Vad kostar det?",
    a: "Granskning med prioriterad rapport kostar 4 900 kr. Åtgärdspaket där vi genomför fixarna kostar från 24 500 kr, alltid fast pris efter granskningen. Är sajten gammal är det ofta bättre att bygga rätt från grunden: 0 kr i start och 1 190 kr per månad, allt ingår.",
  },
  {
    q: "Räcker det med en tillgänglighetswidget eller ett plugin?",
    a: "Nej. Overlays och widgets ändrar inte koden där bristerna sitter, och de har kritiserats hårt av både tillgänglighetsexperter och användarna de påstås hjälpa. Kraven gäller själva sajten. Det som hjälper är att åtgärda grundproblemen i kod, struktur och innehåll.",
  },
  {
    q: "Hittar en automatisk skanning alla fel?",
    a: "Nej, och var skeptisk mot den som påstår det. Automatiserad skanning fångar ungefär 30 till 40 procent av WCAG-bristerna. Resten kräver manuell genomgång: tangentbordsnavigering, läsordning, formulärflöden och begriplighet. Vår granskning kombinerar båda.",
  },
  {
    q: "Vem kontrollerar att lagen följs?",
    a: "Post- och telestyrelsen (PTS) är huvudansvarig tillsynsmyndighet för de digitala tjänsterna, med Myndigheten för delaktighet (MFD) i en stödjande roll. Vi lovar aldrig att en sajt blir immun mot tillsyn, det kan ingen. Vi identifierar riskerna och åtgärdar dem, med dokumentation på vad som gjorts.",
  },
];

export default function TillganglighetPage() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const sajt = String(fd.get("sajt") || "").trim();
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      message: `${sajt ? `Sajt: ${sajt}\n\n` : ""}${fd.get("message")}`,
      hp_field: fd.get("hp_field"),
      _subject: "Tillgänglighetsförfrågan (EAA)",
    };
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("idle");
      setError("Något gick fel. Testa igen, eller mejla joel@stoltmarketing.se direkt.");
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "13px 15px",
    borderRadius: 10,
    border: `1px solid ${LINE}`,
    background: "#161309",
    color: "#F2ECDD",
    fontSize: 16,
    outline: "none",
  };

  return (
    <>
      <Header />
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Start", href: "/" },
            { label: "Tjänster", href: "/tjanster" },
            { label: "Tillgänglighet & EAA" },
          ]}
          badge="Tillgänglighet & EAA"
          title="Tillgänglighetskraven är lag. Vi gör din sajt redo."
          subtitle="Sedan 28 juni 2025 ställer lag 2023:254 krav på digitala konsumenttjänster. Vi granskar din sajt mot WCAG 2.1 AA, åtgärdar bristerna till fast pris och bygger nytt när det är den smartare vägen."
          bullets={["Granskning med prioriterad rapport", "Åtgärder till fast pris", "Byggt rätt från grunden när det behövs"]}
        />

        {/* Vad lagen kräver */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Vad lagen säger"
              title="Det här gäller sedan juni 2025."
              subtitle="Kort och utan jurist-svenska. Uppdaterad 17 augusti 2026."
            />
            <div className="mt-10 max-w-[720px]">
              {lawFacts.map((f, i) => (
                <Reveal key={i} delay={0.04 * i}>
                  <div className="flex items-start gap-3.5 py-4" style={{ borderBottom: `1px solid ${LINE}` }}>
                    <Check size={17} strokeWidth={2.5} style={{ color: GUL, flexShrink: 0, marginTop: 4 }} />
                    <p className="text-[15.5px] leading-relaxed text-body m-0">{f}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Så hjälper vi dig: pristrappa */}
        <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: "#0B0A06" }}>
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Så hjälper vi dig"
              title="Tre vägar, alla till fast pris."
              subtitle="Vi börjar alltid med en kostnadsfri genomgång där du får en ärlig bedömning av vilken väg som passar din sajt."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {steps.map((s, i) => (
                <Reveal key={s.num} delay={0.06 * i}>
                  <div
                    className="p-7 rounded-[12px] h-full flex flex-col"
                    style={{ background: "#161309", border: `1px solid ${LINE}` }}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <s.icon size={22} style={{ color: GUL }} strokeWidth={1.8} />
                      <span
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.22em",
                          color: GUL,
                        }}
                      >
                        {s.num}
                      </span>
                    </div>
                    <h3 className="font-heading text-[22px] text-heading m-0" style={{ fontWeight: 520 }}>
                      {s.title}
                    </h3>
                    <div
                      className="mt-1.5 mb-4"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontStyle: "italic",
                        color: GUL,
                        fontSize: 17,
                      }}
                    >
                      {s.price}
                    </div>
                    <p className="text-[14.5px] leading-relaxed text-body m-0">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <p className="mt-8 text-[14px] text-muted max-w-[680px]">
                Ärlighet först: automatisk skanning hittar ungefär 30 till 40 procent av bristerna.
                Resten kräver att en människa går igenom sajten. Därför säljer vi aldrig en robot-rapport
                som facit, och vi lovar aldrig immunitet mot tillsyn. Vi hittar riskerna och åtgärdar dem.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Bevis + cross-sell */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                badge="Därför kan vi det här"
                title="Vi bygger tillgängligt som standard."
                subtitle="Tillgänglighet är inte ett tillägg vi säljer på slutet. Det är så vi bygger allt."
              />
              <div className="mt-8 flex flex-col gap-4">
                <Reveal>
                  <div className="flex items-start gap-3.5">
                    <ShieldCheck size={19} style={{ color: GUL, flexShrink: 0, marginTop: 3 }} strokeWidth={2} />
                    <p className="text-[15px] leading-relaxed text-body m-0">
                      <a href="/projekt/linguista" className="text-heading underline decoration-1 underline-offset-4 hover:text-primary transition-colors">Linguista</a>
                      {" "}(AcadeMedia) fick 100 av 100 i tillgänglighet i Lighthouse, tillsammans med full pott i prestanda, best practices och SEO. Fyra hundror, mätt, inte påstått.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.06}>
                  <div className="flex items-start gap-3.5">
                    <ShieldCheck size={19} style={{ color: GUL, flexShrink: 0, marginTop: 3 }} strokeWidth={2} />
                    <p className="text-[15px] leading-relaxed text-body m-0">
                      Kontraster, tangentbordsnavigering, läsordning och formulär som fungerar med skärmläsare ingår i varje bygge vi lämnar ifrån oss. Det är därför omtaget ofta slår lappandet: du får en sajt där kraven är lösta i grunden.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Formulär */}
            <Reveal delay={0.1}>
              <div className="p-7 rounded-[12px]" style={{ background: "#161309", border: `1px solid ${LINE}` }}>
                <h3 className="font-heading text-[20px] text-heading mt-0 mb-1" style={{ fontWeight: 520 }}>
                  Undrar du om din sajt träffas?
                </h3>
                <p className="text-[14px] text-muted mt-0 mb-5">
                  Skriv en rad så återkommer Joel inom 24 timmar på vardagar med en ärlig första bedömning. Inga förpliktelser.
                </p>
                {status === "sent" ? (
                  <div className="flex items-start gap-3 p-4 rounded-[10px]" style={{ background: "rgba(242,194,48,0.1)", border: "1px solid rgba(242,194,48,0.3)" }}>
                    <Check size={18} style={{ color: GUL, flexShrink: 0, marginTop: 2 }} />
                    <p className="text-[14.5px] text-body m-0">Tack! Ditt meddelande är skickat. Du hör från mig inom 24 timmar på vardagar.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                    <input name="name" required placeholder="Ditt namn" autoComplete="name" style={inputStyle} />
                    <input name="email" type="email" required placeholder="Din e-post" autoComplete="email" style={inputStyle} />
                    <input name="sajt" placeholder="Din webbadress (valfritt)" inputMode="url" style={inputStyle} />
                    <textarea name="message" required rows={4} placeholder="Berätta kort om sajten och vad du säljer" style={{ ...inputStyle, resize: "vertical" }} />
                    <input name="hp_field" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }} aria-hidden="true" />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="premium-btn"
                      data-umami-event="lead-tillganglighet"
                      style={{ width: "100%", opacity: status === "sending" ? 0.7 : 1 }}
                    >
                      {status === "sending" ? "Skickar..." : "Skicka"}
                      <ArrowRight size={15} />
                    </button>
                    {error && <p className="text-[13.5px] m-0" style={{ color: "#E8A87C" }}>{error}</p>}
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ: alltid monterad, crawlbar */}
        <section className="py-16 sm:py-24 px-5 sm:px-8" style={{ background: "#0B0A06" }}>
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge="Vanliga frågor" title="Raka svar om tillgänglighetskraven." />
            <div className="mt-10 max-w-[760px]">
              {faqs.map((f, i) => (
                <div key={i} className="py-6" style={{ borderBottom: `1px solid ${LINE}` }}>
                  <h3 className="font-heading text-[19px] text-heading mt-0 mb-2.5" style={{ fontWeight: 500 }}>
                    {f.q}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-body m-0">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="/boka" className="premium-btn">
                Boka genomgång <ArrowRight size={15} />
              </a>
              <a href="/kontakt" className="secondary-btn">Kontakta oss</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
