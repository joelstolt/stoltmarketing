import { PageHero, SectionHeader } from "@/components/ui";
import { PRICING } from "@/lib/local/data";
import { EXTRA_SERVICES } from "@/lib/services-extra";

const mainPaths = [
  { title: "Jag vill hantera förfrågningar bättre", text: "Rutan tar emot förfrågningar från hemsidan, skickar SMS och ger ett svarsförslag som du granskar.", price: "495 kr/mån", terms: "Exkl. moms. 30 dagar gratis och ingen bindning.", href: "/forfragningar", label: "Se rutan och prova gratis" },
  { title: "Jag behöver en hemsida", text: "En företagssajt med tydliga tjänster och kontaktvägar. Du kan börja med ett gratis förslag på startsida och en tjänstesida.", price: `Från ${PRICING.basManad}`, terms: `Exkl. moms. 0 kr start. Bas: högst fem sidor. ${PRICING.bindning}.`, href: "/hemsida-foretag", label: "Se hemsidor och designförslag" },
  { title: "Mina kunder hittar inte min sajt", text: "En SEO-audit granskar teknik, innehåll och synlighet. Du får en prioriterad åtgärdslista innan du beställer fortsatt arbete.", price: `Audit ${PRICING.seoAudit}`, terms: "Exkl. moms. Engångsgranskning. Åtgärder avtalas separat.", href: "/tjanster/seo", label: "Se SEO-audit och arbetssätt" },
  { title: "Jag vill annonsera ett erbjudande", text: "Google Ads med ett tydligt kontaktmål och uppföljning. Ett befintligt annonskonto kan få ett separat upplägg.", price: `Arbete i Spets: ${PRICING.spets}`, terms: `Exkl. moms. Annonsbudget tillkommer. Spets: ${PRICING.bindning}. Meta får separat offert.`, href: "/tjanster/google-ads", label: "Se Google Ads" },
];
const specialistKeys = ["webbutveckling", "e-handel", "wordpress", "managed-hemsida", "ai-automation", "facebook-annonsering", "ai-synlighet"];

export default function TjansterContent() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Start", href: "/" }, { label: "Tjänster" }]}
        badge="Välj hjälp" title="Börja med det du vill förbättra." highlight="vill förbättra" compact
        subtitle="Hemsida, synlighet, annonsering eller inkommande förfrågningar. Jag heter Joel och hjälper dig välja ett avgränsat första steg."
        bullets={["Direktkontakt med Joel", "Tydlig omfattning", "Bas i Hässleholm"]}
        cta={{ href: "#valj-hjalp", label: "Hitta rätt första steg" }}
      />

      <section className="py-14 sm:py-20 px-5 sm:px-8" id="valj-hjalp">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Fyra ingångar" title="Vad behöver ditt företag just nu?" />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {mainPaths.map((item) => (
              <a key={item.href} href={item.href} className="block bg-surface rounded-[10px] border border-border p-6 sm:p-8 hover:border-primary/40 transition-colors group">
                <h3 className="font-heading font-600 text-[25px] text-heading group-hover:text-primary">{item.title}</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-body">{item.text}</p>
                <p className="mt-5 font-heading text-[25px] text-heading">{item.price}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{item.terms}</p>
                <span className="inline-block mt-5 text-[15px] text-primary underline underline-offset-4">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-muted">
        <div className="max-w-6xl mx-auto">
          <SectionHeader badge="Ett mer specifikt behov" title="Funktioner, drift och specialuppdrag." />
          <ul className="mt-8 divide-y divide-border">
            {specialistKeys.map((key) => {
              const service = EXTRA_SERVICES[key];
              return (
                <li key={key} className="py-5 sm:py-6">
                  <a href={`/tjanster/${key}`} className="block sm:grid sm:grid-cols-[240px_1fr] gap-8 group">
                    <h3 className="font-heading font-600 text-[21px] text-heading group-hover:text-primary">{service.serviceName}</h3>
                    <p className="mt-2 sm:mt-0 text-[15px] leading-relaxed text-body">{service.intro}</p>
                  </a>
                </li>
              );
            })}
            <li className="py-5 sm:py-6"><a href="/tillganglighet" className="block sm:grid sm:grid-cols-[240px_1fr] gap-8 group"><h3 className="font-heading font-600 text-[21px] text-heading group-hover:text-primary">Tillgänglighet</h3><p className="mt-2 sm:mt-0 text-[15px] leading-relaxed text-body">Granskning av hur sajten fungerar med tangentbord, hjälpmedel och olika skärmstorlekar, med prioriterad rapport.</p></a></li>
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader badge="Underlag för ditt val" title="Se tidigare leveranser och hela prislistan." />
          <p className="mt-6 text-[17px] leading-[1.8] text-body">Kundprojekten visar vad jag byggt och hur arbetet avgränsats. Prissidan samlar hemsidepaket, tillägg och engångsgranskningar.</p>
          <div className="mt-6 flex flex-wrap gap-5 text-[16px] text-primary"><a href="/projekt" className="underline underline-offset-4">Se kundprojekten</a><a href="/priser" className="underline underline-offset-4">Jämför priser och omfattning</a></div>
        </div>
      </section>

      <section className="section-gul py-14 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[760px] mx-auto">
          <h2 className="font-heading font-600 text-[clamp(28px,4vw,42px)] text-heading">Osäker på var du ska börja?</h2>
          <p className="mt-4 text-[17px] leading-relaxed text-body">Skicka din webbadress och berätta vad som inte fungerar idag. Jag föreslår ett avgränsat nästa steg.</p>
          <a href="/kontakt" className="premium-btn mt-6">Skriv till Joel</a>
        </div>
      </section>
    </>
  );
}
