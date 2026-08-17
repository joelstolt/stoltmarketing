import CaseStudy from "@/components/CaseStudy";

export default function NgtabCase() {
  return (
    <CaseStudy
      namn="Norrlands Gräv & Transport"
      kund="Entreprenad · Sundsvall"
      rubrik="En rad kod kan göra hela sajten osynlig."
      ingress="Norrlands Gräv & Transport gör markarbeten, schakt, dränering och enskilda avlopp i Sundsvall med egen maskinpark. Vi byggde 69 sidor åt dem, och såg till att Google får räkna varenda en."
      punkter={[
        "69 sidor",
        "Korrekt canonical per sida",
        "128 ms serversvar",
      ]}
      url="https://www.ngtab.se"
      utmaningTitel="Den dyraste buggen i lokal SEO syns inte alls."
      utmaning={[
        "I moderna sajtramverk är det lätt att sätta en canonical-tagg på fel ställe. Placeras den i sajtens rotlayout ärver varje undersida samma tagg, och då säger sajten till Google att alla 69 sidor egentligen är startsidan.",
        "Effekten är att sidorna försvinner ur sökresultaten. Inte med ett felmeddelande, inte med en varning, utan tyst. Sajten ser perfekt ut, den laddar snabbt, den fungerar för besökaren, och ändå rankar den inte på något annat än företagsnamnet.",
        "Det är precis den typen av fel som gör att en sajtinvestering inte ger något. Ingen märker det förrän någon mäter, och de flesta mäter aldrig.",
      ]}
      losningTitel="69 sidor som var och en får stå för sig själv."
      losningar={[
        {
          title: "Canonical sätts per sida, aldrig i roten",
          text: "Varje sida deklarerar sin egen kanoniska adress. Det låter trivialt men är skillnaden mellan att ha 69 rankande sidor och att ha en. Vi verifierar det på den skarpa sajten efter varje publicering, inte bara lokalt.",
        },
        {
          title: "Tjänst gånger ort över hela Medelpad",
          text: "Markarbeten, schakt, dränering, enskilt avlopp och transport korsades med orterna i upptagningsområdet. 69 sidor som var och en svarar på en konkret sökning, mot en branschmedian på 17.",
        },
        {
          title: "Byggflagga som styr synligheten",
          text: "Sajten byggs med en flagga som avgör om den ska indexeras eller inte. Under utveckling är den osynlig för Google, vid lansering slås den på. Det gör att ingen halvfärdig version kan råka hamna i sökresultaten.",
        },
        {
          title: "Statisk leverans från edge",
          text: "Färdigbyggda sidor serveras direkt från Cloudflares nätverk. Inget CMS att uppdatera, ingen databas som kan gå ner och inga plugins med säkerhetshål. Serversvaret ligger på 128 millisekunder.",
        },
      ]}
      resultatTitel="Alla 69 sidor räknas."
      siffror={[
        { value: "69", label: "Sidor som kan ranka", not: "branschmedian 17" },
        { value: "128", suffix: " ms", label: "Serversvar", not: "uppmätt på live-sajten" },
        { value: "111", suffix: " kB", label: "Startsidans vikt", not: "laddar direkt i mobil" },
      ]}
      kalla="Sidantalet är hämtat ur sajtens sitemap. Serversvar och sidvikt är uppmätta på live-sajten i augusti 2026. Branschmedianen är beräknad på 136 svenska hantverks- och byggsajter i vår prospektdatabas."
      teknik={["Next.js", "React", "Cloudflare Pages", "Resend", "Lokal SEO"]}
    />
  );
}
