import OmradeSida from "@/components/ny/OmradeSida";
import { OMRADEN } from "@/lib/nav";

export const metadata = {
  title: "Mindre handarbete: eget CRM, AI-agenter och system som pratar med varandra",
  description:
    "Ett system byggt för hur ni jobbar, med en AI-agent som gör grovjobbet: svar, uppföljning, bokning och kundregister. Ni godkänner det som går till kund. Fast pris.",
  alternates: { canonical: "https://www.stoltmarketing.se/mindre-handarbete" },
};

const d = {
  key: "handarbete",
  namn: "Mindre handarbete",
  rubrik: "Det ni gör för hand varje vecka, gjort av system.",
  ingress:
    "CRM, portaler, bokningssystem och automation som tar bort manuellt arbete. Jag börjar med ett flöde, visar att det sparar tid och tar sedan nästa.",
  panel: {
    titel: "Exempel på ett flöde",
    etikett: "Automatiskt",
    rader: [
      ["Förfrågan", "Kommer in via sajten"],
      ["CRM", "Blir ett kort med allt kunden skrivit"],
      ["Agent", "Skriver ett utkast till svar"],
      ["Du", "Läser, ändrar och skickar"],
    ],
    fot: "Inget skickas i ditt namn utan att du har läst det.",
  },
  ingarRubrik: "Det här ingår",
  ingarIngress: "System byggda för hur ni faktiskt jobbar, i stället för att ni ska anpassa er efter systemet.",
  delar: [
    {
      id: "crm",
      titel: "CRM och kundregister",
      text: "Förfrågningar, offerter och kunder på ett ställe. Ni ser vad som är på gång och vad som behöver följas upp.",
    },
    {
      titel: "Portaler och bokning",
      text: "Bokning av kurser och tider, och portaler för kunder och partner, med inloggning där det behövs.",
    },
    {
      titel: "Agenter och automation",
      text: "Agenter som skriver utkast till svar och offerter, sorterar förfrågningar och påminner om det som annars glöms. Ni läser och godkänner.",
      href: "/tjanster/ai-automation",
      lank: "Läs mer om AI och automation",
    },
    {
      id: "kopplingar",
      titel: "Kopplingar mellan system",
      text: "Sajt, kassa, CRM och affärssystem som pratar med varandra, så att samma sak inte skrivs in två gånger.",
    },
  ],
  arbete: {
    rubrik: "Ett flöde i taget.",
    stycken: [
      "Automation som ingen använder är dyr. Därför börjar jag med ett flöde som tar tid i dag, bygger det och visar vad det sparar innan vi tar nästa.",
      "Det jag bygger åt er bygger jag också åt mig själv: mitt eget CRM, offertagenten i Kvota och mätningen i Refora är gjorda på samma sätt.",
    ],
    punkter: [
      "Klickbar demo efter första samtalet, helt riskfritt",
      "Ni godkänner allt som skickas i ert namn",
      "Ni äger det som byggs",
      "Fast pris per flöde efter en genomgång",
    ],
  },
  uppdrag: "Kursbokning åt en teknisk grossist, byggd från grunden och kopplad till deras utbildningar.",
  faq: [
    {
      q: "Vad är en agent?",
      a: "Ett program som gör ett avgränsat jobb åt er, till exempel läser en förfrågan och skriver ett utkast till svar. Ni bestämmer vad den får göra, och inget skickas utan att ni har läst det.",
    },
    {
      q: "Behöver vi byta system?",
      a: "Sällan. Oftast kopplar jag ihop det ni redan har. Ibland är ett eget enkelt system billigare än att anpassa ett stort.",
    },
    {
      q: "Hur vet vi att det lönar sig?",
      a: "Vi väljer ett flöde som tar tid i dag och jämför före och efter. Visar det inte att det sparar tid tar vi inte nästa.",
    },
    {
      q: "Vad kostar det?",
      a: "Fast pris per flöde efter en genomgång av hur ni jobbar i dag. Första samtalet kostar ingenting, och efter det får ni en klickbar demo, helt riskfritt.",
    },
  ],
  andra: OMRADEN.filter((o) => o.key !== "handarbete"),
};

export default function Page() {
  return <OmradeSida d={d} />;
}
