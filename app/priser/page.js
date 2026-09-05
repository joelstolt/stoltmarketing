"use client";

import { Check, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero, SectionHeader, Reveal } from "@/components/ui";
import { packages, tillagg, engangs } from "@/lib/pricing-packages";

/* Sajtens ENDA publika prislista. Paketen läses från lib/pricing-packages.js
   (samma källa som /tjanster). Managed-stegen 390/790/1 290 är avvecklad:
   drift ingår i månadspriset, ta-över-sajter går på Bas. FAQ:n renderas
   alltid synlig (h3+p) så Google läser svaren i SSR-HTML, ingen accordion. */

const villkor = [
  {
    title: "0 kr i startavgift",
    text: "Sajten byggs färdig innan du betalar. Du tittar, klickar runt och bestämmer sedan.",
  },
  {
    title: "12 månader, sedan månadsvis",
    text: "Efter bindningstiden rullar allt månadsvis till samma pris. Uppsägning med ett mejl, till nästa månadsskifte.",
  },
  {
    title: "Du äger allt",
    text: "Sajten, innehållet och domänen är dina. Vill du flytta hjälper jag till med flytten.",
  },
];

const faqs = [
  {
    q: "Varför 0 kr i startavgift?",
    a: "Du ska inte behöva ta risken. Sajten byggs färdig först, du tittar och klickar runt i den, och betalar först när du bestämt dig. Månadspriset täcker bygget, hostingen, driften och ändringarna.",
  },
  {
    q: "Vem äger sajten om vi avslutar?",
    a: "Du. Sajten, innehållet och domänen är dina, och vill du flytta någon annanstans hjälper jag till med flytten. Ingen inlåsning: poängen med månadsmodellen är att jag ska förtjäna nästa månad, inte att avtalet ska hålla dig kvar.",
  },
  {
    q: "Vad händer efter de första 12 månaderna?",
    a: "Allt löper vidare månadsvis till samma pris och avslutas när som helst till nästa månadsskifte. Ett mejl räcker, och du behåller sajten.",
  },
  {
    q: "Finns det dolda kostnader?",
    a: "Nej. Det enda som tillkommer är sådant du väljer själv: e-handel för 800 kr per månad och din annonsbudget till Google om du kör Spets. Engångstjänsterna har fasta priser som står här på sidan.",
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          breadcrumbs={[{ label: "Start", href: "/" }, { label: "Priser" }]}
          badge="Priser"
          title="Öppna priser, färdig sajt innan du betalar"
          subtitle="Ett fast månadspris där sajt, hosting, drift och ändringar ingår. Det här är hela prislistan, det finns inga fler rader någon annanstans."
          bullets={["0 kr i startavgift", "12 månaders bindning, därefter månadsvis", "Du ser sajten färdig först"]}
        />

        {/* Paketen */}
        <section className="py-16 sm:py-24 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Månadsabonnemang"
              title="Tre paket, en modell."
              subtitle="De flesta landar på Bredd. Osäker? Boka en genomgång så pekar jag på rätt nivå för just din verksamhet, även om det är den billigaste."
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
                      <span className="absolute -top-3 left-7 text-[11px] font-700 text-heading bg-primary px-3 py-1 rounded-full uppercase tracking-wider">
                        {pkg.badge}
                      </span>
                    )}
                    <h2 className="font-heading font-700 text-[18px] text-heading">{pkg.name}</h2>
                    <p className="mt-1 text-[13px] text-muted">{pkg.for}</p>
                    <div className="mt-3 font-heading font-600 text-[26px] tracking-tight text-heading">
                      {pkg.price}
                    </div>
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
                      href="/boka"
                      data-umami-event={`priser-paket-${pkg.name.toLowerCase()}`}
                      className={`mt-7 flex justify-center text-center text-[14px] font-600 py-3 rounded-[10px] transition-all duration-200 ${
                        pkg.featured ? "premium-btn" : "secondary-btn w-full"
                      }`}
                    >
                      Boka genomgång
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-[14px] text-muted text-center max-w-[560px] mx-auto">
              Har du redan en sajt du vill att jag tar över? Drift, säkerhet och ändringar
              ingår i Bas, 1 190 kr/mån, oavsett vem som byggt den.
            </p>
          </div>
        </section>

        {/* Tillägg och engångstjänster */}
        <section className="py-16 sm:py-24 px-5 sm:px-8 bg-surface-muted">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Tillägg"
              title="Det enda som kan tillkomma."
              subtitle="Väljer du till något står priset här. Annars gäller månadspriset, punkt."
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
              {faqs.map((faq) => (
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
                Se din sajt färdig innan du betalar.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-4 text-[16px] leading-relaxed text-body">
                Boka en kostnadsfri genomgång, 15 till 20 minuter. Du får en ärlig
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
