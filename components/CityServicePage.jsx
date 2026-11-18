import CityProof from "@/components/CityProof";
import {
  Sida,
  SidHero,
  Sektion,
  Celler,
  Erbjudanden,
  Delad,
  Text,
  Ruta,
  Fragor,
  Lankkolumner,
  Avslut,
  TJANST_OMRADE,
} from "@/components/ny/Sida";
import { CITIES, SERVICES, SERVICE_ORDER } from "@/lib/local/data";
import { getCombo, cityServiceFaqs } from "@/lib/local/seo";

/* Tjänst i en stad (/malmo/seo m.fl.), ny profil v2 2026-11-17. Texterna kommer ur
   lib/local; FAQ-texten är oförändrad så att FAQ-datan stämmer med det som visas. */

const FAST = "Fast pris skriftligt innan jag börjar. Första samtalet kostar ingenting.";
/* Joels USP, bara där något byggs (hemsida och AI/automation), se lib/usp.js. */
const FAST_DEMO = "Klickbar demo efter första samtalet, helt riskfritt. Fast pris skriftligt innan jag börjar.";

function erbjudanden(service) {
  if (service === "hemsida") {
    return [
      { name: "Hemsida eller webbshop", price: "Fast pris innan jag börjar", desc: "Jag bygger det ni behöver, med omfattning och pris avtalat skriftligt i förväg.", terms: FAST_DEMO, href: "/sa-funkar-det", label: "Så funkar det" },
      { name: "Löpande hjälp", price: "Fast månadspris i förväg", desc: "Drift, säkerhet och ändringar efter lansering, med svar nästa arbetsdag.", terms: "Ni vet månadspriset i förväg. Annonsbudget tillkommer vid Google Ads." },
    ];
  }
  if (service === "seo") {
    return [
      { name: "SEO-audit", price: "Fast pris innan jag börjar", desc: "Genomgång av teknik, innehåll och synlighet med prioriterad åtgärdslista.", terms: "Engångsgranskning. Åtgärder och fortsatt arbete avtalas separat." },
      { name: "Löpande SEO-arbete", price: "Fast månadspris i förväg", desc: "Löpande innehållsarbete och optimering enligt överenskommen omfattning. Större SEO-projekt får egen offert.", terms: FAST },
    ];
  }
  if (service === "google-ads") {
    return [
      { name: "Google Ads, uppsättning och skötsel", price: "Fast pris innan jag börjar", desc: "Uppsättning och löpande skötsel av Google Ads enligt överenskommen omfattning.", terms: "Annonsbudget tillkommer och betalas till Google. Löpande skötsel har ett fast månadspris som du vet i förväg." },
      { name: "Ditt befintliga annonskonto", price: "Fast pris innan jag börjar", desc: "Genomgång, kampanjarbete och uppföljning avgränsas utifrån ditt konto och mål.", terms: "Arbetets omfattning och villkor bekräftas före start. Annonsbudget betalas separat." },
    ];
  }
  return [
    { name: "Ett flöde i taget", price: "Fast pris per flöde", desc: "CRM, portaler och bokning, agenter som skriver utkast till svar och offerter som du godkänner, eller kopplingar mellan system.", terms: FAST_DEMO, href: "/mindre-handarbete", label: "Se hur automation fungerar" },
    { name: "Ett anpassat arbetsflöde", price: "Fast pris innan jag börjar", desc: "Kalenderbokning, CRM, offertautomation och andra systemkopplingar är specialarbete.", terms: "Offerten avgränsar bygge, test, åtkomst och drift. Fast pris för överenskommet arbete före start.", href: "/kontakt", label: "Beskriv ditt arbetsflöde" },
  ];
}

const AVSLUT = {
  hemsida: {
    rubrik: "Se er nya hemsida innan ni bestämmer er.",
    text: "Berätta vad sajten ska göra. Efter första samtalet får ni en klickbar demo, helt riskfritt, och sedan ett fast pris skriftligt.",
  },
  "ai-automation": {
    rubrik: "Börja med ett flöde som tar tid.",
    text: "Berätta vad som tar tid idag. Jag föreslår ett första flöde med fast pris efter en genomgång.",
  },
};

export default function CityServicePage({ service, city }) {
  const s = SERVICES[service];
  const c = CITIES[city];
  const combo = getCombo(service, city);
  const faqs = cityServiceFaqs(service, city);
  const slut = AVSLUT[service] || {
    rubrik: "Beskriv det du vill förbättra.",
    text: "Skicka din webbadress, tjänst och mål. Jag återkommer med förslag på ett första steg och dess omfattning.",
  };

  return (
    <Sida>
      <SidHero
        crumbs={[{ label: "Start", href: "/" }, { label: c.name, href: c.hub }, { label: s.label }]}
        kicker={`${s.badge} i ${c.name}`}
        title={combo.h1}
        lead={combo.heroSubtitle}
        punkter={["Direktkontakt med Joel", "Fast pris före start", "Bas i Hässleholm"]}
        cta={s.cta}
        sekundar={{ href: "#pris", label: "Så kan du köpa" }}
        omrade={TJANST_OMRADE[service]}
      />

      <Sektion>
        <Delad rubrik={combo.localHeading}>
          <Text stycken={[combo.localAngle]} />
          <div style={{ marginTop: 28 }}>
            <Ruta titel={combo.example.title} text={combo.example.text} />
          </div>
        </Delad>
      </Sektion>

      <CityProof city={city} service={service} />

      <Sektion
        id="pris"
        rubrik="Så kan du köpa"
        ingress="Ni får ett fast pris skriftligt innan jag börjar. Första samtalet kostar ingenting."
      >
        <Erbjudanden offers={erbjudanden(service)} fallback={s.cta} />
      </Sektion>

      <Sektion rubrik="Vad jag gör och hur du deltar" ingress={s.intro}>
        <Celler items={s.features.map((f) => ({ titel: f.title, text: f.desc }))} />
      </Sektion>

      <Sektion rubrik="Så går det till">
        <Celler
          kolumner={s.process.length === 4 ? 4 : s.process.length === 2 ? 2 : 3}
          items={s.process.map((p) => ({ titel: p.title, text: p.desc }))}
        />
      </Sektion>

      <Sektion>
        <Delad rubrik="Vanliga frågor" ingress={`För företag i ${c.name} och runt om.`}>
          <Fragor faqs={faqs} />
        </Delad>
      </Sektion>

      <Sektion>
        <Lankkolumner
          kolumner={[
            {
              titel: `Mer för företag i ${c.name}`,
              lankar: [
                { href: c.hub, label: `Översikt för ${c.name}` },
                ...SERVICE_ORDER.filter((key) => key !== service).map((key) => ({
                  href: `/${city}/${key}`,
                  label: `${SERVICES[key].label} i ${c.name}`,
                })),
              ],
            },
            {
              titel: "Fördjupning",
              lankar: [{ href: s.relatedService, label: `${s.name}, översikt` }, ...s.blog.map((b) => ({ href: b.href, label: b.title }))],
            },
          ]}
        />
      </Sektion>

      <Avslut rubrik={slut.rubrik} text={slut.text} cta={s.cta} />
    </Sida>
  );
}
