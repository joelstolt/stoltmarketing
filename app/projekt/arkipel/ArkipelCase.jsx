import CaseStudy from "@/components/CaseStudy";

export default function ArkipelCase() {
  return (
    <CaseStudy
      namn="Arkipel Entreprenad"
      kund="Bygg · Norrköping"
      rubrik="61 sidor i stället för 17. Därför syns de."
      ingress="Arkipel Entreprenad tar helhetsansvar för totalentreprenad, renovering, poolhus, stall och altaner i Norrköping med omnejd. Vi byggde en sajt där varje tjänst och varje ort har en egen sida, för det är så en byggfirma faktiskt hittas."
      punkter={[
        "61 sidor mot branschmedianen 17",
        "65 ms serversvar",
        "80 kB startsida",
      ]}
      url="https://www.arkipel.se"
      utmaningTitel="En bra byggfirma som bara syntes på sitt eget namn."
      utmaning={[
        "Arkipel hade jobben, referenserna och betygen på Reco. Det de saknade var sidor. En sajt med ett tiotal sidor kan bara ranka på företagsnamnet, och den som googlar företagsnamnet är redan kund.",
        "De sökningar som ger nya uppdrag ser annorlunda ut. Folk söker på tjänsten plus orten: altan Norrköping, renovering Söderköping, poolhus Finspång. Finns ingen sida som svarar på exakt den frågan finns företaget inte i resultatet, oavsett hur bra de är på jobbet.",
        "Vi mätte 136 svenska hantverkssajter i samma segment. Medianen har 17 sidor i sin sitemap. Det är helt enkelt för smalt för att fånga upp mer än en bråkdel av sökningarna i ett upptagningsområde.",
      ]}
      losningTitel="En sida per fråga kunden faktiskt ställer."
      losningar={[
        {
          title: "Tjänst gånger ort som arkitektur",
          text: "Varje tjänst korsades med varje ort i upptagningsområdet och blev en egen sida med eget innehåll, egen titel och egen beskrivning. Resultatet är 61 sidor som var och en svarar på en konkret sökning i stället för en startsida som försöker svara på allt.",
        },
        {
          title: "Statisk sajt på Cloudflares edge",
          text: "Ingen server, ingen databas, inga plugins att hålla uppdaterade. Sidorna byggs en gång och serveras färdiga från närmaste datacenter. Serversvaret ligger på 65 millisekunder och startsidan väger 80 kB.",
        },
        {
          title: "Offertformulär som når fram",
          text: "Förfrågningar går via Resend direkt till rätt inkorg, med spamhärdning och honeypot så att bara riktiga kunder kommer igenom. Varje inskick loggas som en konvertering så att det går att se vilka sidor som faktiskt drar in jobb.",
        },
        {
          title: "Byggd för att kunna växa",
          text: "Nya tjänster och nya orter läggs till som data, inte som handbyggda sidor. Att gå från 61 till 100 sidor är en textredigering, inte ett nytt projekt.",
        },
      ]}
      resultatTitel="Mätt mot 136 sajter i samma bransch."
      resultatIngress="Siffrorna till höger är Arkipels. Jämförelsen är medianen från 136 svenska hantverks- och byggsajter vi mätt i vår egen databas."
      siffror={[
        { value: "61", label: "Sidor som kan ranka", not: "branschmedian 17" },
        { value: "65", suffix: " ms", label: "Serversvar", not: "uppmätt på live-sajten" },
        { value: "80", suffix: " kB", label: "Startsidans vikt", not: "laddar direkt i mobil" },
      ]}
      matvarden={[
        { label: "Sidor i sitemap", before: "17", after: "61", delta: "3,6x" },
        { label: "Prestandapoäng", before: "62", after: "God", delta: "över median" },
        { label: "Andel under 50 i prestanda", before: "20 %", after: "nej", delta: "utanför" },
      ]}
      kalla="Jämförelsetalen är medianer från 136 svenska hantverks- och byggsajter uppmätta med Google PageSpeed i vår egen prospektdatabas. Arkipels siffror är uppmätta på live-sajten i augusti 2026."
      teknik={["Next.js", "React", "Cloudflare Pages", "Resend", "Umami", "Lokal SEO"]}
    />
  );
}
