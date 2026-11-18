import {
  Sida,
  SidHero,
  Sektion,
  Celler,
  Erbjudanden,
  Bevis,
  Delad,
  Text,
  Fragor,
  Avslut,
  TJANST_OMRADE,
  sidaStil as k,
} from "@/components/ny/Sida";
import Link from "next/link";

/* Tjänstesidorna (/tjanster/*), ny profil v2 2026-11-17. Samma data som förut
   (lib/services-extra.js); FAQ-texten är oförändrad så att FAQ-datan i layouten stämmer. */
export default function ServicePage({ data }) {
  return (
    <Sida>
      <SidHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Det jag gör", href: "/tjanster" }, { label: data.badge }]}
        kicker={data.serviceName}
        title={data.h1}
        lead={data.subtitle}
        punkter={data.bullets}
        cta={data.cta}
        sekundar={{ href: "#omfattning", label: "Så kan du köpa" }}
        omrade={TJANST_OMRADE[data.slug]}
      />

      {data.proof && (
        <Sektion pad={false}>
          <div style={{ paddingTop: 56, paddingBottom: 56 }}>
            <Bevis
              etikett="Från ett uppdrag"
              titel={data.proof.title}
              text={data.proof.text}
              href={data.proof.href}
              lank={data.proof.label}
            />
          </div>
        </Sektion>
      )}

      <Sektion id="omfattning" rubrik="Så kan du köpa" ingress="Ni får ett fast pris skriftligt innan jag börjar. Första samtalet kostar ingenting.">
        <Erbjudanden offers={data.offers} fallback={data.cta} />
      </Sektion>

      <Sektion rubrik="Vad jag gör och vad du får" ingress={data.intro}>
        <Celler items={data.features.map((f) => ({ titel: f.title, text: f.desc }))} />
      </Sektion>

      {data.process && (
        <Sektion rubrik="Så går det till">
          <Celler
            kolumner={data.process.length === 4 ? 4 : data.process.length === 2 ? 2 : 3}
            items={data.process.map((p) => ({ titel: p.title, text: p.desc }))}
          />
        </Sektion>
      )}

      {data.method && (
        <Sektion>
          <Delad rubrik={data.method.deepHeading}>
            <Text stycken={data.method.deepParagraphs} />
          </Delad>
        </Sektion>
      )}

      <Sektion>
        <Delad rubrik="Vanliga frågor">
          <Fragor faqs={data.faqs} />
          {data.relatedHref && (
            <Link href={data.relatedHref} className={k.link}>
              {data.relatedLabel}
            </Link>
          )}
        </Delad>
      </Sektion>

      <Avslut rubrik={data.ctaTitle} text={data.ctaText} cta={data.cta} />
    </Sida>
  );
}
