import { PageHero, SectionHeader } from "@/components/ui";
import CityProof from "@/components/CityProof";
import { CITIES, SERVICES, SERVICE_ORDER, PRICING, cityHubFaqs } from "@/lib/local/data";
import HUB from "@/lib/local/hub-content.json";

/** Hubben hjälper besökaren välja uppdrag. FAQ och schema läser samma data. */
export default function CityHubExtra({ city }) {
  const data = HUB[city];
  const c = CITIES[city];
  if (!data || !c) return null;
  const prices = {
    hemsida: `Från ${PRICING.basManad}`,
    seo: `Audit ${PRICING.seoAudit}`,
    "google-ads": `Arbete i Spets: ${PRICING.spets}`,
    "ai-automation": "Rutan: 495 kr/mån",
  };
  const terms = {
    hemsida: "0 kr start. Högst fem sidor i Bas. 12 månader, sedan månadsvis.",
    seo: "Engångsgranskning. Fortsatt arbete avtalas separat.",
    "google-ads": "Annonsbudget tillkommer. Spets: 12 månader, sedan månadsvis. Separata uppdrag enligt offert.",
    "ai-automation": "30 dagar gratis, ingen bindning. Systemintegrationer enligt offert.",
  };

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Start", href: "/" }, { label: c.name }]}
        badge={`Stolt Marketing för ${c.name}`}
        title={data.title}
        highlight={c.name}
        compact
        subtitle={data.intro}
        bullets={["Direktkontakt med Joel", "Bas i Hässleholm", "Tydlig omfattning före start"]}
        cta={{ href: "#tjanster", label: "Välj den hjälp du behöver" }}
      />

      <section className="py-14 sm:py-20 px-5 sm:px-8" id="tjanster">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Välj ditt nästa steg" title="Vilket problem vill du lösa först?" />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {SERVICE_ORDER.map((key) => {
              const s = SERVICES[key];
              return (
                <a key={key} href={`/${city}/${key}`} className="block bg-surface rounded-[10px] border border-border p-6 sm:p-8 hover:border-primary/40 transition-colors group">
                  <h3 className="font-heading font-600 text-[25px] text-heading group-hover:text-primary">{s.name}</h3>
                  <p className="mt-4 text-[16px] leading-relaxed text-body">{s.intro}</p>
                  <p className="mt-5 font-heading text-[21px] text-heading">{prices[key]} <span className="font-sans text-[13px] text-muted">exkl. moms</span></p>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{terms[key]}</p>
                  <span className="inline-block mt-5 text-[15px] text-primary underline underline-offset-4">Se {s.name.toLowerCase()} i {c.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-20 px-5 sm:px-8">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader badge={`Samarbete för ${c.name}`} title={data.deepHeading} />
          {data.deepParagraphs.map((paragraph) => <p key={paragraph} className="mt-6 text-[17px] leading-[1.8] text-body">{paragraph}</p>)}
          <h2 className="mt-9 font-heading font-600 text-[25px] text-heading">Från underlag till överenskommet arbete</h2>
          <ol className="mt-5 list-decimal pl-5 space-y-3 text-[16px] leading-[1.8] text-body">
            <li>Skicka din webbadress och beskriv vad kunden ska kunna göra.</li>
            <li>Jag föreslår ett första steg med omfattning och pris.</li>
            <li>Efter ditt ja gör jag arbetet och stämmer av det vi har kommit överens om.</li>
          </ol>
        </div>
      </section>

      <CityProof city={city} />

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader badge="Vanliga frågor" title={`Om samarbetet för ditt företag i ${c.name}.`} />
          <div className="mt-8 divide-y divide-border">
            {cityHubFaqs(city).map((faq) => (
              <details key={faq.q} className="py-5">
                <summary className="cursor-pointer font-heading font-600 text-[17px] text-heading">{faq.q}</summary>
                <p className="mt-4 text-[16px] leading-[1.8] text-body">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gul py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-heading font-600 text-[clamp(28px,4vw,42px)] text-heading">Berätta vad du vill förbättra.</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-body">Skicka din webbadress och en kort beskrivning. Jag återkommer med ett förslag på var vi kan börja.</p>
          <a href="/kontakt" className="premium-btn mt-6">Skriv till Joel</a>
          <a href="/hemsida-foretag" className="block mt-5 text-[15px] underline underline-offset-4 text-heading">Vill du ha en hemsida? Se designförslag och paket.</a>
        </div>
      </section>
    </>
  );
}
