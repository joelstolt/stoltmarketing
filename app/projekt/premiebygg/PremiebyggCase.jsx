import CaseStudy from "@/components/CaseStudy";

export default function PremiebyggCase() {
  return (
    <CaseStudy
      namn="Premie Bygg"
      kund="Bygg · Örebro"
      rubrik="Formuläret som faktiskt når fram."
      ingress="Premie Bygg gör totalentreprenad, badrum, kök, mark och försäkringsskador i Örebro. Vi byggde 47 sidor åt dem, och lade lika mycket omsorg på att offertförfrågningarna kommer fram som på hur sajten ser ut."
      punkter={[
        "47 sidor",
        "Spamhärdat offertformulär",
        "88 ms serversvar",
      ]}
      url="https://www.premiebygg.se"
      utmaningTitel="En byggfirma som tappar förfrågningar tyst."
      utmaning={[
        "Det vanligaste allvarliga felet vi ser på hantverkssajter är inte designen. Det är kontaktformuläret. Det postar till en adress som inte längre bevakas, till en tredjepartstjänst kunden glömt bort, eller till ett skript som slutade fungera vid någon uppdatering.",
        "Ingen märker det, för ett formulär som inte skickar ger inget felmeddelande till mottagaren. Kunden tror att det är lugnt på marknaden. I själva verket ligger jobben och studsar.",
        "Den andra halvan av samma problem är skräppost. Ett formulär utan skydd fylls av automatiska inskick, och när riktiga förfrågningar drunknar i bruset slutar folk läsa inkorgen.",
      ]}
      losningTitel="Byggd för att förfrågningar ska landa rätt."
      losningar={[
        {
          title: "Formulärkedjan verifierad hela vägen",
          text: "Offertförfrågan går via Resend till rätt inkorg, och vi verifierar leveransen i utskicksloggen efter varje ändring. Ett svar från formuläret räcker inte som bevis på att mejlet kom fram, det måste synas i loggen.",
        },
        {
          title: "Spamhärdning som inte stoppar kunder",
          text: "Osynligt honeypot-fält, kontroll av var inskicket kommer ifrån och innehållsheuristik sorterar bort automatiska inskick. Fältet är döpt så att webbläsarens autofyll inte råkar trigga det, vilket annars tyst kastar bort riktiga leads.",
        },
        {
          title: "47 sidor över Örebro med omnejd",
          text: "Tjänsterna korsades med orterna i upptagningsområdet. Sökningar som badrumsrenovering Örebro och försäkringsskada Kumla landar på en sida som handlar om just det, i stället för på en startsida som handlar om allt.",
        },
        {
          title: "Snabb även med tunga projektbilder",
          text: "Byggföretag lever på referensbilder, och bilder är det som gör sajter långsamma. Bilderna komprimeras och serveras i modernt format, vilket ger 88 millisekunders serversvar trots ett bildtungt innehåll.",
        },
      ]}
      resultatTitel="Snabb sajt, härdat formulär, 47 ingångar."
      siffror={[
        { value: "47", label: "Sidor som kan ranka", not: "branschmedian 17" },
        { value: "88", suffix: " ms", label: "Serversvar", not: "uppmätt på live-sajten" },
        { value: "100", suffix: "/100", label: "SEO-poäng", not: "Google Lighthouse" },
      ]}
      kalla="Sidantalet är hämtat ur sajtens sitemap och serversvaret är uppmätt på live-sajten i augusti 2026. Branschmedianen är beräknad på 136 svenska hantverks- och byggsajter i vår prospektdatabas."
      teknik={["Next.js", "React", "Cloudflare Pages", "Resend", "Umami", "Lokal SEO"]}
    />
  );
}
