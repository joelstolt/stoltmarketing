import { Code, Search, Megaphone, Workflow } from "lucide-react";
import CityProof from "@/components/CityProof";
import { Sida, SidHero, Sektion, Celler, Delad, Text, Fragor, Avslut } from "@/components/ny/Sida";
import { CITIES, SERVICES, SERVICE_ORDER, cityHubFaqs } from "@/lib/local/data";
import HUB from "@/lib/local/hub-content.json";

/** Stadssidan (/malmo m.fl.), ny profil v2 2026-11-17. Hjälper besökaren välja uppdrag.
    FAQ och schema läser samma data (cityHubFaqs), texten är oförändrad. */

const IKON = { hemsida: Code, seo: Search, "google-ads": Megaphone, "ai-automation": Workflow };

const STEG = [
  { titel: "Ditt underlag", text: "Skicka din webbadress och beskriv vad kunden ska kunna göra." },
  { titel: "Förslag med fast pris", text: "Jag föreslår ett första steg med omfattning och pris, skriftligt." },
  { titel: "Arbetet", text: "Efter ditt ja gör jag arbetet och stämmer av det vi har kommit överens om." },
];

export default function CityHubExtra({ city }) {
  const data = HUB[city];
  const c = CITIES[city];
  if (!data || !c) return null;

  return (
    <Sida>
      <SidHero
        crumbs={[{ label: "Start", href: "/" }, { label: c.name }]}
        kicker={`Stolt Marketing för företag i ${c.name}`}
        title={data.title}
        lead={data.intro}
        punkter={["Direktkontakt med Joel", "Bas i Hässleholm", "Fast pris före start"]}
        cta={{ href: "/kontakt", label: "Berätta vad ni behöver" }}
        sekundar={{ href: "#tjanster", label: "Välj den hjälp ni behöver" }}
        omrade="kunder"
      />

      <Sektion id="tjanster" rubrik="Vad vill ni lösa först?" ingress="Fast pris skriftligt innan jag börjar, för allt.">
        <Celler
          kolumner={2}
          items={SERVICE_ORDER.map((key) => ({
            ikon: IKON[key],
            titel: SERVICES[key].name,
            text: SERVICES[key].intro,
            href: `/${city}/${key}`,
            lank: `${SERVICES[key].label} i ${c.name}`,
          }))}
        />
      </Sektion>

      <Sektion>
        <Delad rubrik={data.deepHeading}>
          <Text stycken={data.deepParagraphs} />
        </Delad>
      </Sektion>

      <Sektion rubrik="Från underlag till överenskommet arbete">
        <Celler items={STEG} />
      </Sektion>

      <CityProof city={city} />

      <Sektion>
        <Delad rubrik="Vanliga frågor" ingress={`Om samarbetet för ditt företag i ${c.name}.`}>
          <Fragor faqs={cityHubFaqs(city)} />
        </Delad>
      </Sektion>

      <Avslut
        rubrik="Berätta vad du vill förbättra."
        text="Skicka din webbadress och en kort beskrivning. Jag återkommer med ett förslag på var vi kan börja."
        cta={{ href: "/kontakt", label: "Skriv till Joel" }}
      />
    </Sida>
  );
}
