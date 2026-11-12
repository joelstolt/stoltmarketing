import { Check } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import ServiceExtra from "@/components/ServiceExtra";

export default function ServicePage({ data }) {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Tjänster", href: "/tjanster" }, { label: data.badge }]}
        badge={data.badge} title={data.h1} highlight={data.highlight} compact
        subtitle={data.subtitle} bullets={data.bullets} cta={data.cta}
      />

      {data.proof && (
        <section className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-6xl mx-auto border border-border rounded-[10px] p-6 sm:p-8">
            <h2 className="font-heading font-600 text-[27px] text-heading">{data.proof.title}</h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-body max-w-[800px]">{data.proof.text}</p>
            <a href={data.proof.href} className="inline-block mt-5 text-[15px] text-primary underline underline-offset-4">{data.proof.label}</a>
          </div>
        </section>
      )}

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-muted" id="omfattning">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Pris och omfattning" title="Det här kan du beställa." />
          <div className={`mt-10 grid gap-5 ${data.offers.length === 3 ? "lg:grid-cols-3" : data.offers.length > 1 ? "md:grid-cols-2" : "max-w-[800px]"}`}>
            {data.offers.map((offer) => (
              <article key={offer.name} className="bg-surface rounded-[10px] border border-border p-6 sm:p-8">
                <h3 className="font-heading font-600 text-[22px] text-heading">{offer.name}</h3>
                <p className="mt-3 font-heading text-[30px] text-heading">{offer.price}</p>
                <p className="mt-4 text-[16px] leading-relaxed text-body">{offer.desc}</p>
                {offer.features && <ul className="mt-5 space-y-3">{offer.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-[14px] text-body"><Check size={16} aria-hidden="true" className="shrink-0 mt-1 text-primary" />{feature}</li>)}</ul>}
                <p className="mt-5 text-[14px] leading-relaxed text-muted">{offer.terms}</p>
                <a href={offer.href || data.cta.href} className="inline-block mt-6 text-[15px] text-primary underline underline-offset-4">{offer.label || data.cta.label}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Arbetet" title="Vad jag gör och vad du får." subtitle={data.intro} />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {data.features.map((feature) => (
              <article key={feature.title} className="bg-surface rounded-[10px] border border-border p-6">
                <h3 className="font-heading font-600 text-[20px] text-heading">{feature.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-body">{feature.desc}</p>
              </article>
            ))}
          </div>
          {data.process && (
            <>
              <h2 className="mt-12 font-heading font-600 text-[28px] text-heading">Så går det till</h2>
              <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.process.map((step, i) => (
                  <li key={step.title} className="border-t border-border pt-5">
                    <span className="font-heading text-[23px] text-primary" aria-hidden="true">{`0${i + 1}`}</span>
                    <h3 className="mt-3 font-heading font-600 text-[19px] text-heading">{step.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-body">{step.desc}</p>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>
      </section>

      <ServiceExtra data={data.method} />

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader badge="Vanliga frågor" title={`Frågor om ${data.serviceName.toLowerCase()}.`} />
          <div className="mt-8 divide-y divide-border">
            {data.faqs.map((faq) => (
              <details key={faq.q} className="py-5">
                <summary className="cursor-pointer font-heading font-600 text-[17px] text-heading">{faq.q}</summary>
                <p className="mt-4 text-[16px] leading-[1.8] text-body">{faq.a}</p>
              </details>
            ))}
          </div>
          {data.relatedHref && <a href={data.relatedHref} className="inline-block mt-7 text-[15px] text-primary underline underline-offset-4">{data.relatedLabel}</a>}
        </div>
      </section>

      <section className="section-gul py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-heading font-600 text-[clamp(28px,4vw,42px)] text-heading">{data.ctaTitle}</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-body">{data.ctaText}</p>
          <a href={data.cta.href} className="premium-btn mt-6">{data.cta.label}</a>
        </div>
      </section>
    </>
  );
}
