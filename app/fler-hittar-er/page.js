import OmradeSida from "@/components/ny/OmradeSida";
import { OMRADEN } from "@/lib/nav";

export const metadata = {
  title: "Fler hittar er: SEO, AI-sök och Google Ads",
  description:
    "SEO, synlighet i ChatGPT och andra AI-assistenter, Google Ads och mätning av vilka kanaler som ger förfrågningar. Rapport första vardagen varje månad.",
  alternates: { canonical: "https://www.stoltmarketing.se/fler-hittar-er" },
};

const d = {
  key: "hittar",
  namn: "Fler hittar er",
  rubrik: "Rätt personer hittar er, i Google och i AI-sök.",
  ingress:
    "Sökordsarbete, Google Ads med mål ni kan följa och koll på hur ChatGPT och de andra AI-assistenterna beskriver er. Allt mäts, och ni ser vad det gav.",
  panel: {
    titel: "Månadsrapport",
    etikett: "Varje månad",
    rader: [
      ["Google", "Vilka sökningar ni syns på och vad de ger"],
      ["Google Ads", "Förfrågningar per annons och vad de kostade"],
      ["AI-sök", "Hur fyra AI-assistenter beskriver er"],
      ["Nästa steg", "Det jag föreslår att vi testar"],
    ],
    fot: "Skickas första vardagen i månaden.",
  },
  ingarRubrik: "Det här ingår",
  ingarIngress: "Fyra kanaler, en mätning. Ni ser vilken kanal som ger förfrågningar, inte bara klick.",
  delar: [
    {
      titel: "SEO",
      text: "Sidor som svarar på det era kunder söker efter, teknik som Google kan läsa och en plan för vad som ska skrivas härnäst.",
      href: "/tjanster/seo",
      lank: "Läs mer om SEO",
    },
    {
      titel: "Synlighet i AI-sök",
      text: "Allt fler frågar ChatGPT, Gemini, Claude och Perplexity i stället för att googla. Jag mäter vad de svarar om er och vad som behöver ändras.",
      href: "/tjanster/ai-synlighet",
      lank: "Läs mer om AI-sök",
    },
    {
      titel: "Google Ads",
      text: "Annonser med mål ni kan följa: förfrågningar och köp, inte bara klick. Budgeten betalar ni direkt till Google, utan påslag.",
      href: "/tjanster/google-ads",
      lank: "Läs mer om Google Ads",
    },
    {
      titel: "Meta-annonser",
      text: "Annonser i Facebook och Instagram när målgruppen finns där, med samma mätning som allt annat.",
      href: "/tjanster/facebook-annonsering",
      lank: "Läs mer om Meta-annonser",
    },
  ],
  arbete: {
    rubrik: "Allt mäts, och ni ser vad det gav.",
    stycken: [
      "Det är lätt att köpa trafik. Det svåra är att veta vilken trafik som blir förfrågningar och köp. Därför börjar jag med mätningen: vilka sidor, annonser och kanaler som faktiskt ger något.",
      "Varje månad får ni en rapport på fast dag. Där står vad som är gjort, vad det gav och vad jag föreslår härnäst, skrivet så att ni kan ta det vidare utan att vara tekniker.",
    ],
    punkter: [
      "Mätning av förfrågningar, samtal och köp",
      "Rapport första vardagen varje månad",
      "Förslag på nästa test, inte bara siffror",
    ],
  },
  uppdrag:
    "Ett fasadföretag hittade mig via ChatGPT. I dag sköter jag deras två sajter, Google Ads och mätningen av vilka annonser som ger förfrågningar.",
  faq: [
    {
      q: "Hur lång tid tar det innan SEO syns?",
      a: "Oftast flera månader, beroende på hur sajten ser ut i dag och hur hård konkurrensen är. Annonser ger besökare direkt, därför kombinerar jag ofta båda i början.",
    },
    {
      q: "Vad betyder synlighet i AI-sök?",
      a: "Att ChatGPT, Gemini, Claude och Perplexity nämner och beskriver er rätt när någon frågar efter det ni säljer. Jag mäter vad de svarar och ser till att er sajt ger dem rätt underlag.",
    },
    {
      q: "Måste vi annonsera?",
      a: "Nej. Annonser passar när ni behöver förfrågningar snabbt eller vill testa ett erbjudande. Ibland räcker sökordsarbete och en sajt som svarar på rätt frågor.",
    },
    {
      q: "Vad kostar det?",
      a: "Ni får ett fast månadspris efter ett första samtal, så att ni vet vad det kostar innan vi börjar. Annonsbudgeten betalar ni direkt till Google eller Meta.",
    },
  ],
  andra: OMRADEN.filter((o) => o.key !== "hittar"),
};

export default function Page() {
  return <OmradeSida d={d} />;
}
