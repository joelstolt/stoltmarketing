import { Check } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import CityProof from "@/components/CityProof";
import { CITIES, SERVICES, SERVICE_ORDER, PRICING } from "@/lib/local/data";
import { getCombo, cityServiceFaqs } from "@/lib/local/seo";
import { packages } from "@/lib/pricing-packages";

function ServiceOffer({ service, cta }) {
  const offers = service === "hemsida"
    ? packages.map((pkg) => ({ ...pkg, terms: `Exkl. moms. ${PRICING.bindning}. Annonsbudget tillkommer vid Google Ads.` }))
    : service === "seo"
      ? [
          { name: "SEO-audit", price: PRICING.seoAudit, desc: "Genomgång av teknik, innehåll och synlighet med prioriterad åtgärdslista.", terms: "Exkl. moms. Engångsgranskning. Åtgärder och fortsatt arbete avtalas separat." },
          { name: "SEO i Spets", price: PRICING.spets, desc: "Hemsida med löpande innehållsarbete och optimering enligt paketets omfattning. Större SEO-projekt får egen offert.", terms: `Exkl. moms. 0 kr start. ${PRICING.bindning}.` },
        ]
      : service === "google-ads"
        ? [
            { name: "Google Ads i Spets", price: PRICING.spets, desc: "Hemsidepaket med uppsättning och löpande skötsel av Google Ads.", terms: `Exkl. moms. Annonsbudget tillkommer och betalas till Google. 0 kr start. ${PRICING.bindning}.` },
            { name: "Ditt befintliga annonskonto", price: "Enligt offert", desc: "Genomgång, kampanjarbete och uppföljning avgränsas utifrån ditt konto och mål.", terms: "Arbetets omfattning och villkor bekräftas före start. Annonsbudget betalas separat." },
          ]
        : [
            { name: "Rutan för förfrågningar", price: "495 kr/mån", desc: "Förfrågningar från hemsidan, SMS direkt och förslag på svar som du granskar.", terms: "Exkl. moms. 30 dagar gratis, ingen bindning.", href: "/forfragningar", label: "Se rutan och prova gratis" },
            { name: "Ett anpassat arbetsflöde", price: "Enligt offert", desc: "Kalenderbokning, kundsystem, offertautomation och andra systemkopplingar är specialarbete.", terms: "Offerten avgränsar bygge, test, åtkomst och drift. Fast pris för överenskommet arbete före start.", href: "/kontakt", label: "Beskriv ditt arbetsflöde" },
          ];

  return (
    <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-muted" id="pris">
      <div className="max-w-6xl mx-auto">
        <SectionHeader badge="Pris och omfattning" title={service === "hemsida" ? "Välj efter hur mycket din sajt behöver." : "Det här kan du beställa."} />
        <div className={`mt-10 grid gap-5 ${offers.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {offers.map((offer) => (
            <article key={offer.name} className={`bg-surface rounded-[10px] border p-6 sm:p-7 flex flex-col ${offer.featured ? "border-primary" : "border-border"}`}>
              <h3 className="font-heading font-600 text-[22px] text-heading">{offer.name}</h3>
              <p className="mt-3 font-heading text-[27px] text-heading">{offer.price}</p>
              <p className="mt-3 text-[15px] text-body leading-relaxed">{offer.desc}</p>
              {offer.features && (
                <ul className="mt-5 space-y-3">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[14px] text-body leading-relaxed">
                      <Check size={16} aria-hidden="true" className="shrink-0 mt-1 text-primary" />{feature}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-5 text-[13px] text-muted leading-relaxed">{offer.terms}</p>
              <a href={offer.href || cta.href} className="mt-6 text-[15px] font-600 text-primary underline underline-offset-4">{offer.label || cta.label}</a>
            </article>
          ))}
        </div>
        {service === "hemsida" && <p className="mt-5 text-[14px] text-body">Bas: högst fem sidor. Bredd: fler tjänster och sidor. Se hela omfattningen på <a href="/priser" className="text-primary underline underline-offset-4">prissidan</a>.</p>}
      </div>
    </section>
  );
}

export default function CityServicePage({ service, city }) {
  const s = SERVICES[service];
  const c = CITIES[city];
  const combo = getCombo(service, city);
  const faqs = cityServiceFaqs(service, city);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Start", href: "/" }, { label: c.name, href: c.hub }, { label: s.label }]}
        badge={`${s.badge} i ${c.name}`}
        title={combo.h1}
        highlight={c.name}
        compact
        subtitle={combo.heroSubtitle}
        bullets={["Direktkontakt med Joel", "Omfattning före start", "Bas i Hässleholm"]}
        cta={s.cta}
      />

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-14 items-start">
          <div>
            <SectionHeader badge={`${s.label} i ${c.name}`} title={combo.localHeading} />
            <p className="mt-6 text-[17px] leading-[1.8] text-body max-w-[720px]">{combo.localAngle}</p>
          </div>
          <aside className="bg-surface rounded-[10px] border border-border p-6 sm:p-8">
            <h2 className="font-heading font-600 text-[22px] text-heading">{combo.example.title}</h2>
            <p className="mt-4 text-[16px] leading-[1.8] text-body">{combo.example.text}</p>
          </aside>
        </div>
      </section>

      <CityProof city={city} service={service} />
      <ServiceOffer service={service} cta={s.cta} />

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Arbetet" title="Vad jag gör och hur du deltar." subtitle={s.intro} />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {s.features.map((feature) => (
              <article key={feature.title} className="bg-surface rounded-[10px] border border-border p-6">
                <h3 className="font-heading font-600 text-[19px] text-heading">{feature.title}</h3>
                <p className="mt-3 text-[15px] text-body leading-relaxed">{feature.desc}</p>
              </article>
            ))}
          </div>
          <h2 className="mt-12 font-heading font-600 text-[27px] text-heading">Så går det till</h2>
          <ol className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {s.process.map((step, i) => (
              <li key={step.title} className="border-t border-border pt-5">
                <span className="font-heading text-[22px] text-primary" aria-hidden="true">{`0${i + 1}`}</span>
                <h3 className="mt-3 font-heading font-600 text-[18px] text-heading">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-body">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader badge="Vanliga frågor" title={`Frågor om ${s.name.toLowerCase()} i ${c.name}.`} />
          <div className="mt-8 divide-y divide-border">
            {faqs.map((faq) => (
              <details key={faq.q} className="py-5 group">
                <summary className="cursor-pointer font-heading font-600 text-[17px] text-heading">{faq.q}</summary>
                <p className="mt-4 text-[16px] leading-[1.8] text-body">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8">
          <div>
            <h2 className="font-heading font-600 text-[21px] text-heading">Fler tjänster för ditt företag</h2>
            <ul className="mt-5 space-y-3 text-[15px] text-body">
              <li><a href={c.hub} className="hover:text-primary underline underline-offset-4">Översikt för {c.name}</a></li>
              {SERVICE_ORDER.filter((key) => key !== service).map((key) => <li key={key}><a href={`/${city}/${key}`} className="hover:text-primary underline underline-offset-4">{SERVICES[key].label} i {c.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-heading font-600 text-[21px] text-heading">Fördjupning och nästa steg</h2>
            <ul className="mt-5 space-y-3 text-[15px] text-body">
              <li><a href={s.relatedService} className="hover:text-primary underline underline-offset-4">{s.name}, tjänsteöversikt</a></li>
              {s.blog.map((link) => <li key={link.href}><a href={link.href} className="hover:text-primary underline underline-offset-4">{link.title}</a></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-gul py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-heading font-600 text-[clamp(28px,4vw,42px)] text-heading">{service === "hemsida" ? "Se ett förslag för ditt företag." : service === "ai-automation" ? "Börja med dina inkommande förfrågningar." : "Beskriv det du vill förbättra."}</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-body">{service === "hemsida" ? "Skicka din webbadress eller ditt företagsnamn. Jag tar fram ett förslag på startsida och en tjänstesida." : service === "ai-automation" ? "Se vad standardrutan gör och vad som kräver ett separat upplägg." : "Skicka din webbadress, tjänst och mål. Jag återkommer med förslag på ett första steg och dess omfattning."}</p>
          <a href={s.cta.href} className="premium-btn mt-6">{s.cta.label}</a>
        </div>
      </section>
    </>
  );
}
