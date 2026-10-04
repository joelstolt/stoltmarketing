"use client";

import { useRef, useState } from "react";
import { trackConversion } from "@/lib/track";
import { klickId } from "@/lib/klickid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/ui";
import { accessFaqs, accessSources } from "./data";

const steps = [
  { title: "Granskning", price: "4 900 kr exkl. moms", text: "Jag kombinerar automatiska kontroller med manuella tester av överenskomna sidmallar och flöden. Du får en prioriterad rapport med testomfattning, brister och åtgärdsförslag." },
  { title: "Åtgärder i befintlig sajt", price: "Från 24 500 kr exkl. moms", text: "Efter granskningen får du ett fast pris för ett avgränsat åtgärdspaket. Jag dokumenterar ändringarna och kontrollerar de åtgärdade delarna igen." },
  { title: "Ny hemsida Bas", price: "0 kr start, 1 190 kr/mån exkl. moms", text: "För högst fem sidor. Hosting, drift och ändringar enligt paketets omfattning ingår. Tolv månaders bindning, sedan månadsvis. Tillgänglighet ingår i arbetet; en full juridisk revision är en egen omfattning." },
];

export default function TillganglighetPage() {
  const started = useRef(false);
  const trackForm = (event) => { try { window.umami?.track(event, { form_id: "tillganglighet", language: "sv" }); } catch {} };
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [loadedAt] = useState(() => Date.now());
  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const sajt = String(fd.get("sajt") || "").trim();
    const payload = { name: fd.get("name"), email: fd.get("email"), message: `${sajt ? `Sajt: ${sajt}\n\n` : ""}${fd.get("message")}`, hp_field: fd.get("hp_field"), _subject: "Tillgänglighetsförfrågan (EAA)", klickId: klickId(), _elapsedMs: Date.now() - loadedAt };
    setStatus("sending"); setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await res.json().catch(() => null);
      if (!res.ok || !result?.ok || !result?.reference) throw new Error("send");
      trackConversion("lead-tillganglighet", "lead", { form_id: "tillganglighet", language: "sv" });
      setStatus("sent"); form.reset();
    } catch {
      trackForm("form-error-tillganglighet");
      setStatus("idle"); setError("Meddelandet kunde inte skickas. Försök igen eller mejla joel@stoltmarketing.se.");
    }
  }
  const inputClass = "w-full rounded-lg border border-border bg-surface px-4 py-3 text-[16px] text-heading";
  return <>
    <Header />
    <main id="main-content">
      <PageHero breadcrumbs={[{ label: "Start", href: "/" }, { label: "Tillgänglighet" }]} badge="Webbtillgänglighet"
        title="Hjälp fler att använda din hemsida." highlight="använda din hemsida" compact cta={false}
        subtitle="Jag granskar navigation, innehåll och viktiga flöden och föreslår konkreta åtgärder. Börja med att avgränsa vad som behöver testas och vilka krav som berör din verksamhet." />
      <section className="px-5 sm:px-8 py-10 sm:py-14"><div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-[30px] text-heading">Granska, åtgärda eller bygga om</h2>
        <div className="mt-7 grid md:grid-cols-3 gap-5">{steps.map(s => <article key={s.title} className="bg-surface border border-border rounded-xl p-6"><h3 className="font-heading text-[24px] text-heading">{s.title}</h3><p className="mt-3 text-[17px] text-primary">{s.price}</p><p className="mt-4 text-[16px] leading-relaxed text-body">{s.text}</p></article>)}</div>
        <div className="mt-7 max-w-3xl text-[16px] leading-relaxed text-body space-y-3"><p>För granskningen bestämmer jag och du antal sidmallar och flöden skriftligt före beställning. Rapporten visar exakt vad som testats. Behöver du en komplett revision av en stor sajt eller fler språk avgränsas det separat före offert.</p><p>En automatisk skanning hittar vissa brister. Tangentbord, fokus, läsordning, felmeddelanden och begriplighet behöver även kontrolleras manuellt. Jag lämnar inget certifieringslöfte.</p></div>
      </div></section>
      <section className="px-5 sm:px-8 py-12 bg-surface-muted"><div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-[30px] text-heading">Vilka verksamheter omfattas?</h2>
        <div className="mt-5 space-y-4 text-[17px] leading-[1.8] text-body">
          <p>Lag 2023:254 gäller sedan den 28 juni 2025 för utpekade produkter och konsumenttjänster. Bland tjänsterna finns e-handel, banktjänster och elektronisk kommunikation. En vanlig informationssajt omfattas inte enbart för att företaget bedriver kommersiell verksamhet.</p>
          <p>Mikroföretag som tillhandahåller tjänster är undantagna: färre än tio anställda och årsomsättning eller årlig balansomslutning högst två miljoner euro. Undantaget gäller inte automatiskt produktkrav eller andra regelverk.</p>
          <p>PTS bedömer att e-handelskraven omfattar de delar som hör till e-handelstjänsten. Aktören behöver själv bedöma omfattningen. WCAG A och AA är en del av den tekniska vägledningen, men täcker inte alla krav i EN 301 549 eller hela lagens omfattning.</p>
          <p>Regler om offentlig digital service kan gälla separat. Jag hjälper dig kartlägga webbplatsens brister. Om lagens omfattning är oklar behövs en bedömning av verksamheten och tjänsten, inte bara en webbskanning.</p>
        </div>
        <p className="mt-6 text-[14px] text-body">Faktakontrollerad 4 oktober 2026. Källor: {accessSources.map((s,i) => <span key={s.href}>{i > 0 ? ", " : ""}<a href={s.href} className="text-primary underline underline-offset-4">{s.title}</a></span>)}.</p>
      </div></section>
      <section className="px-5 sm:px-8 py-12"><div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        <div><h2 className="font-heading text-[30px] text-heading">Se ett konkret ombyggnadsprojekt</h2><a href="/projekt/linguista" className="block mt-6"><img src="/case-linguista.webp" alt="Linguistas ombyggda webbplats" width="1440" height="900" loading="lazy" className="w-full h-[280px] object-cover object-top rounded-xl border border-border"/></a><p className="mt-5 text-[17px] leading-relaxed text-body">I <a href="/projekt/linguista" className="text-primary underline underline-offset-4">Linguista-caset</a> visar jag leveransen och redovisade Lighthouse-tester. Tillgänglighetspoängen steg från 82 till 100 i det äldre desktop-testet. Det är ett automatiskt deltest och inget intyg om full WCAG-uppfyllelse eller lagefterlevnad.</p></div>
        <div id="tillganglighet-kontakt" className="bg-surface border border-border rounded-xl p-6 sm:p-7 scroll-mt-24">
          <h2 className="font-heading text-[28px] text-heading">Beskriv din sajt</h2><p className="mt-3 mb-6 text-[16px] text-body">Skriv vad besökaren ska kunna göra och om det finns ett köp- eller bokningsflöde. Jag återkommer med förslag på omfattning.</p>
          {status === "sent" ? <div role="status" className="p-4 border border-border rounded-lg"><p className="text-[16px] text-heading">Tack! Din förfrågan har tagits emot. Jag återkommer till e-postadressen du angav.</p></div> : <form onFocusCapture={() => { if (!started.current) { started.current = true; trackForm("form-start-tillganglighet"); } }} onInvalidCapture={() => trackForm("form-validation-tillganglighet")} onSubmit={handleSubmit} className="flex flex-col gap-4" aria-busy={status === "sending"}>
            <div><label htmlFor="access-name" className="block mb-2 text-[15px] text-heading">Ditt namn</label><input id="access-name" name="name" required autoComplete="name" className={inputClass}/></div>
            <div><label htmlFor="access-email" className="block mb-2 text-[15px] text-heading">Din e-post</label><input id="access-email" name="email" type="email" required autoComplete="email" className={inputClass}/></div>
            <div><label htmlFor="access-url" className="block mb-2 text-[15px] text-heading">Webbadress (valfritt)</label><input id="access-url" name="sajt" inputMode="url" autoComplete="url" className={inputClass}/></div>
            <div><label htmlFor="access-message" className="block mb-2 text-[15px] text-heading">Vad behöver du hjälp med?</label><textarea id="access-message" name="message" required rows={4} className={inputClass} style={{ resize: "vertical" }} aria-describedby={error ? "access-error" : undefined}/></div>
            <input name="hp_field" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden"/>
            <p className="text-[14px] text-body">Jag använder uppgifterna för att svara på din förfrågan. <a href="/integritet" className="text-primary underline underline-offset-4">Läs om personuppgifter</a>.</p>
            <button type="submit" disabled={status === "sending"} className="premium-btn w-full" style={{ opacity: status === "sending" ? 0.7 : 1 }}>{status === "sending" ? "Skickar..." : "Skicka förfrågan"}</button>
            {error && <p id="access-error" role="alert" className="text-[15px] text-heading">{error} <a href="mailto:joel@stoltmarketing.se" className="text-primary underline">Mejla Joel</a></p>}
          </form>}
        </div>
      </div></section>
      <section className="px-5 sm:px-8 py-12 bg-surface-muted"><div className="max-w-3xl mx-auto"><h2 className="font-heading text-[30px] text-heading">Vanliga frågor</h2><div className="mt-6 divide-y divide-border">{accessFaqs.map(f => <div key={f.q} className="py-5"><h3 className="font-heading text-[22px] text-heading">{f.q}</h3><p className="mt-3 text-[16px] leading-relaxed text-body">{f.a}</p></div>)}</div><div className="mt-8 flex flex-wrap gap-3"><a href="#tillganglighet-kontakt" className="premium-btn">Fråga om din sajt</a><a href="/boka?flik=kalender" className="secondary-btn">Boka en genomgång</a></div></div></section>
    </main>
    <Footer />
  </>;
}
