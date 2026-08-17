import CaseStudy from "@/components/CaseStudy";

export default function NiklassonsCase() {
  return (
    <CaseStudy
      namn="Niklassons Flytt"
      kund="Flytt · Helsingborg"
      rubrik="32 offertförfrågningar på 30 dagar."
      ingress="Niklassons Flytt sköter bohagsflytt, företagsflytt, packning och flyttstädning i hela Skåne. Vi byggde en sajt där varje förfrågan mäts, så att det går att se exakt vilka sidor som drar in jobb i stället för att gissa."
      punkter={[
        "32 offertförfrågningar senaste 30 dagarna",
        "38 sidor",
        "Kunden publicerar själv",
      ]}
      url="https://www.niklassonsflytt.se"
      utmaningTitel="Marknadsföring utan mätning är utgifter utan svar."
      utmaning={[
        "De flesta hantverks- och tjänsteföretag vet inte vilka sidor som ger dem jobb. Förfrågningar kommer in via mejl och telefon, och när någon frågar om sajten lönar sig blir svaret en känsla i stället för en siffra.",
        "Niklassons behövde två saker samtidigt: en sajt som fångar upp sökningar i hela Skåne, och ett sätt att faktiskt se vad den levererar. Utan det andra går det inte att avgöra om det första fungerar.",
        "Dessutom skulle de kunna uppdatera priser, tjänster och texter själva. En flyttfirma ska inte behöva ringa en utvecklare för att ändra en prisuppgift inför säsongen.",
      ]}
      losningTitel="Varje förfrågan räknas, varje ändring publiceras direkt."
      losningar={[
        {
          title: "Konverteringsmätning på riktigt",
          text: "Varje skickad offertförfrågan loggas som ett eget event. Det gör att det går att följa hur många jobb sajten drar in per månad, och vilka sidor besökarna kom från. Senaste 30 dagarna: 32 förfrågningar.",
        },
        {
          title: "Eget CMS med automatisk publicering",
          text: "Innehållet ligger i Sanity. När kunden ändrar en text eller ett pris byggs sajten om automatiskt och ändringen är live inom minuter, helt utan utvecklare.",
        },
        {
          title: "38 sidor över hela upptagningsområdet",
          text: "Tjänsterna korsades med orterna i Skåne så att sökningar som flyttfirma Landskrona och flyttstädning Helsingborg landar på en sida som faktiskt handlar om just det. Branschmedianen ligger på 17 sidor.",
        },
        {
          title: "Fasta priser och RUT synligt",
          text: "50 procent RUT-avdrag direkt på fakturan och fasta priser lyfts fram där kunden fattar beslutet, inte gömt på en undersida. Det är den vanligaste invändningen i branschen och den besvaras innan den ställs.",
        },
      ]}
      resultatTitel="Det enda som räknas är förfrågningar."
      resultatIngress="Siffrorna nedan är hämtade ur sajtens egen mätning, inte uppskattade."
      siffror={[
        { value: "32", label: "Offertförfrågningar", not: "senaste 30 dagarna" },
        { value: "38", label: "Sidor som kan ranka", not: "branschmedian 17" },
        { value: "73", suffix: " ms", label: "Serversvar", not: "uppmätt på live-sajten" },
      ]}
      kalla="Antalet offertförfrågningar är hämtat ur sajtens egen händelsemätning i Umami, rullande 30 dagar per augusti 2026. Branschmedianen är beräknad på 136 svenska hantverks- och byggsajter i vår prospektdatabas."
      teknik={["Next.js", "Sanity CMS", "Cloudflare Pages", "GitHub Actions", "Resend", "Umami"]}
    />
  );
}
