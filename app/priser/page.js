"use client";

import { Check, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero, SectionHeader, Reveal } from "@/components/ui";
import { packages, tillagg, engangs, websiteTerms, requestBox, priceFaqs } from "@/lib/pricing-packages";

/* Sajtens ENDA publika prislista. Paketen läses från lib/pricing-packages.js
   (samma källa som /tjanster). Managed-stegen 390/790/1 290 är avvecklad:
   drift ingår i månadspriset, ta-över-sajter går på Bas. FAQ:n renderas
   alltid synlig (h3+p) så Google läser svaren i SSR-HTML, ingen accordion. */

const villkor = [
  {
    title: "0 kr i startavgift",
    text: "Först får du ett gratis förslag med startsida och en tjänstesida. Resten byggs efter ditt ja.",
  },
  {
    title: "12 månader, sedan månadsvis",
    text: "Efter bindningstiden rullar allt månadsvis till samma pris. Uppsägning med ett mejl, till nästa månadsskifte.",
  },
  {
    title: "Ägande och överlämning",
    text: "Sajten, innehållet och domänen är dina enligt avtalet. Jag hjälper till med överlämning. Extern drift och tjänster behöver egna aktiva avtal efter en flytt.",
  },
];


export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <PageHero compact cta={false}
          breadcrumbs={[{ label: "Start", href: "/" }, { label: "Priser" }]}
          badge="Priser"
          title="Öppna priser, inget finstilt"
          subtitle="Rutan för förfrågningar kostar 495 kr i månaden. Hemsidor har ett fast månadspris där sajt, hosting, drift och ändringar ingår. Alla priser exklusive moms. Större webbutiker och AI-projekt får fast pris efter omfattning innan jag börjar."
          bullets={["Rutan: 30 dagar gratis, ingen bindning", "Hemsida: 0 kr i startavgift", "Hemsida: 12 månader, sedan månadsvis"]}
        />

        {/* Rutan för förfrågningar, eget erbjudande före hemsidepaketen */}
        <section className="pt-16 sm:pt-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Förfrågningar"
              title="Rutan för förfrågningar."
              subtitle="En ruta på din hemsida. Kunden skriver, du får ett SMS direkt och ett förslag på svar som du skickar när du hinner. Fungerar på den hemsida du har, om den tar emot en rad kod."
            />
            <Reveal delay={0.1}>
              <div className="mt-12 relative rounded-[10px] p-7 bg-surface border-2 border-primary/20 shadow-[0_4px_20px_rgba(242,194,48,0.18)] grid md:grid-cols-[1fr_1.4fr] gap-8">
                <div>
                  <h2 className="font-heading font-700 text-[18px] text-heading">Rutan</h2>
                  <p className="mt-1 text-[13px] text-muted">För hantverksföretag med en hemsida</p>
                  <div className="mt-3 font-heading font-600 text-[26px] tracking-tight text-heading">{requestBox.monthly} kr/mån</div>
                  <p className="mt-2 text-[14px] text-muted leading-relaxed">0 kr i start, första 30 dagarna gratis, ingen bindning. Jag installerar.</p>
                  <a href="/forfragningar" data-umami-event="priser-rutan" className="premium-btn mt-7 inline-flex">
                    Så fungerar det
                  </a>
                </div>
                <div>
                  <ul className="flex flex-col gap-3">
                    {[
                      "Rutan på varje sida: skriva ett meddelande, bli uppringd eller chatta",
                      "SMS och mejl till dig direkt när något kommer in",
                      "Förslag på svar som du läser, ändrar och skickar",
                      "Bekräftelse till kunden som lämnat sin mejl",
                      "Upp till 30 uppringningar, 150 samtalsminuter, 100 SMS och 100 chattar i månaden",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14px] text-body">
                        <Check size={15} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[13.5px] text-muted leading-relaxed">
                    Ingår inte: samtal till ditt vanliga nummer, telefonsvar, SMS när du missar ett samtal, mejl direkt till din adress och svar som går ut automatiskt i ditt namn. Rutan ingår i Spets.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Paketen */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Hemsidor"
              title="Tre paket, en modell."
              subtitle="Välj efter antalet tjänster och hur mycket löpande arbete du behöver. Alla priser är exklusive moms. Hemsidor har 12 månaders bindning, därefter månadsvis."
            />
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {packages.map((pkg, i) => (
                <Reveal key={pkg.name} delay={i * 0.08 + 0.1}>
                  <div
                    className={`relative h-full rounded-[10px] p-7 transition-all duration-300 ${
                      pkg.featured
                        ? "bg-surface border-2 border-primary/20 shadow-[0_4px_20px_rgba(242,194,48,0.18)]"
                        : "bg-surface border border-border shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-primary/15"
                    }`}
                  >
                    {pkg.featured && (
                      <span className="absolute -top-3 left-7 text-[11px] font-700 text-[#191405] bg-primary px-3 py-1 rounded-full uppercase tracking-wider">
                        {pkg.badge}
                      </span>
                    )}
                    <h2 className="font-heading font-700 text-[18px] text-heading">{pkg.name}</h2>
                    <p className="mt-1 text-[13px] text-muted">{pkg.for}</p>
                    <div className="mt-3 font-heading font-600 text-[26px] tracking-tight text-heading">
                      {pkg.price}
                    </div>
                    <p className="mt-2 text-[13px] text-body">{(pkg.monthly * 12).toLocaleString("sv-SE")} kr under första 12 månaderna, exkl moms.</p>
                    <p className="mt-2 text-[14px] text-muted leading-relaxed">{pkg.desc}</p>
                    <ul className="mt-6 flex flex-col gap-3">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[14px] text-body">
                          <Check size={15} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/boka?amne=pris&paket=${pkg.name}`}
                      data-umami-event={`priser-paket-${pkg.name.toLowerCase()}`}
                      className={`mt-7 flex justify-center text-center text-[14px] font-600 py-3 rounded-[10px] transition-all duration-200 ${
                        pkg.featured ? "premium-btn" : "secondary-btn w-full"
                      }`}
                    >
                      Fråga om {pkg.name}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 max-w-3xl mx-auto text-[15px] space-y-3"><p>{websiteTerms.scope}</p><p>Bas och Bredd lägger SEO-grunden. Spets omfattar även löpande innehåll och Google Ads-arbete. Annonsbudgeten betalas separat till Google. Meta-annonsering offereras separat.</p><p>Supportens svarstid är tiden tills du får svar. Tiden för att genomföra en avtalad innehållsändring framgår i respektive paket.</p></div>
            <p className="mt-8 text-[14px] text-muted text-center max-w-[560px] mx-auto">
              Har du redan en sajt? Jag kontrollerar teknik och omfattning innan ett övertagande. Bas för 1 190 kr/mån gäller upp till fem sidor. Större sajter och särskilda integrationer behöver ett anpassat upplägg.
            </p>
          </div>
        </section>

        {/* Tillägg och engångstjänster */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Tillägg"
              title="Tillägg och avgränsade uppdrag."
              subtitle="Här finns fasta tillägg. Större webbshoppar, integrationer och särskilda funktioner får en egen offert."
            />
            <div className="mt-12 grid sm:grid-cols-2 gap-5">
              {[...tillagg, ...engangs].map((t, i) => (
                <Reveal key={t.name} delay={i * 0.06 + 0.1}>
                  <div className="h-full p-6 bg-surface rounded-[10px] border border-border">
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <h3 className="font-heading font-600 text-[16px] text-heading">{t.name}</h3>
                      <span className="text-[14px] font-600 text-primary whitespace-nowrap">{t.price}</span>
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">
                      {t.desc}
                      {t.href ? (
                        <>
                          {" "}
                          <a href={t.href} className="text-primary underline underline-offset-2">
                            Läs mer
                          </a>
                        </>
                      ) : null}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-[14px] text-muted text-center max-w-[560px] mx-auto">
              Kör du Spets tillkommer din annonsbudget till Google. Den är din och betalas
              direkt till Google, jag lägger inget påslag på den.
            </p>
          </div>
        </section>

        {/* Villkoren */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge="Så funkar det" title="Villkoren, utan finstilt." />
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {villkor.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.06 + 0.1}>
                  <div className="h-full p-6 bg-surface rounded-[10px] border border-border">
                    <h3 className="font-heading font-600 text-[16px] text-heading">{v.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ, alltid synlig så svaren finns i SSR-HTML */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-[720px] mx-auto">
            <SectionHeader badge="FAQ" title="Vanliga frågor om priset." />
            <div className="mt-10 flex flex-col gap-8">
              {priceFaqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-heading font-600 text-[16px] text-heading">{faq.q}</h3>
                  <p className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-body">{faq.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-[14px] text-muted">
              Undrar du vad en hemsida kostar generellt, med marknadens spann och fällor?
              Läs guiden{" "}
              <a href="/vad-kostar-en-hemsida" className="text-primary underline underline-offset-2">
                Vad kostar en hemsida?
              </a>
            </p>
          </div>
        </section>

        {/* Final */}
        <section className="section-gul relative py-16 sm:py-24 px-5 sm:px-8 overflow-hidden">
          <div className="relative z-10 max-w-[600px] mx-auto text-center">
            <Reveal>
              <h2 className="font-heading font-600 text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.012em] text-heading">
                Se ett förslag innan du bestämmer dig.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-4 text-[16px] leading-relaxed text-body">
                Boka en kostnadsfri genomgång, 30 minuter. Du får en ärlig
                bedömning och ett fast pris, inga förpliktelser.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <a href="/boka" data-umami-event="priser-cta-final" className="premium-btn mt-8 mx-auto">
                <span>Boka kostnadsfri genomgång</span>
                <ArrowRight size={16} className="opacity-80" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
