import OmradeSida from "@/components/ny/OmradeSida";
import { OMRADEN } from "@/lib/nav";

export const metadata = {
  title: "Fler blir kunder: hemsidor, webbshoppar och bokning",
  description:
    "Hemsidor, webbshoppar, kassa och bokning som är snabba, lätta att använda och kopplade till det ni redan har. Fast pris innan jag börjar.",
  alternates: { canonical: "https://www.stoltmarketing.se/fler-blir-kunder" },
};

const d = {
  key: "kunder",
  namn: "Fler blir kunder",
  rubrik: "Från besök till beställning, utan att något krånglar.",
  ingress:
    "Hemsidor, webbshoppar och bokning som är snabba, lätta att använda och kopplade till det ni redan har. WooCommerce när det räcker, egen kod när det behövs.",
  panel: {
    titel: "Vägen till en beställning",
    etikett: "Följs upp",
    rader: [
      ["Besök", "Snabb sida som fungerar i mobilen"],
      ["Val", "Produkt, kurs eller tid, utan omvägar"],
      ["Kassa", "Betalningen går igenom, och ni ser det"],
      ["Bekräftelse", "Kunden får besked direkt, ni med"],
    ],
    fot: "Varje steg mäts, så att det syns var kunder hoppar av.",
  },
  ingarRubrik: "Det här ingår",
  ingarIngress: "Allt som behövs för att en besökare ska bli kund, och för att det ska fortsätta fungera.",
  delar: [
    {
      titel: "Hemsidor",
      text: "Snabba sajter som säger vad ni gör och gör det lätt att höra av sig. På svenska och fler språk.",
      href: "/tjanster/webbutveckling",
      lank: "Läs mer om hemsidor",
    },
    {
      titel: "Webbshoppar",
      text: "WooCommerce eller egen kod, med kassa, frakt och betalningar som går igenom.",
      href: "/tjanster/e-handel",
      lank: "Läs mer om webbshoppar",
    },
    {
      titel: "WordPress",
      text: "Jag jobbar i den sajt ni har: rättar fel, snabbar upp och bygger vidare i stället för att börja om.",
      href: "/tjanster/wordpress",
      lank: "Läs mer om WordPress",
    },
    {
      titel: "Drift och support",
      text: "Hosting, säkerhet, uppdateringar och backup för allt jag byggt, och svar när något händer.",
      href: "/tjanster/managed-hemsida",
      lank: "Läs mer om drift",
    },
  ],
  arbete: {
    rubrik: "Byggt för att sälja, inte bara synas.",
    stycken: [
      "En sajt ska göra det lätt att förstå vad ni gör och lätt att köpa eller höra av sig. Jag bygger det som behövs, och inte mer.",
      "Innan något byggs får ni se ett förslag ni kan klicka i. Ni ser hur det blir innan ni bestämmer er.",
    ],
    punkter: [
      "Förslag att klicka i innan ni bestämmer er",
      "Fast pris innan jag börjar, skriftligt",
      "Ni äger sajten, innehållet och koden",
      "Mätning av varje steg fram till beställning",
    ],
  },
  uppdrag:
    "En restaurangkoncern i Umeå fick först se ett förslag på sin nya sajt. Sedan byggde jag den, och i dag sköter jag driften.",
  faq: [
    {
      q: "Bygger du i WordPress eller egen kod?",
      a: "Båda. WordPress och WooCommerce när ni vill redigera själva i ett välkänt verktyg, egen kod när det behövs snabbhet, kopplingar eller funktioner som WordPress inte klarar bra. Ni äger det som byggs.",
    },
    {
      q: "Kan du ta över vår befintliga sajt?",
      a: "Ja, oftast. Jag går igenom vad ni har och säger ärligt om det är värt att bygga vidare eller bättre att börja om.",
    },
    {
      q: "Kan webbshoppen kopplas till vårt affärssystem?",
      a: "Ofta, beroende på system. Det klarläggs i genomgången, innan ni får ett fast pris.",
    },
    {
      q: "Vad kostar en ny sajt eller webbshop?",
      a: "Ni får ett fast pris efter ett första samtal, skriftligt, innan jag börjar. Första samtalet kostar ingenting.",
    },
  ],
  andra: OMRADEN.filter((o) => o.key !== "kunder"),
};

export default function Page() {
  return <OmradeSida d={d} />;
}
