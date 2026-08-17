"use client";

import BlogArticle from "@/components/BlogArticle";

const blocks = [
  {
    type: "lead",
    text: "Fler och fler kunder skriver frågan direkt till ChatGPT, Copilot eller Googles AI-läge i stället för att googla på det gamla sättet med tio blå länkar. Den här guiden förklarar hur AI-assistenter väljer vilka företag de nämner i sina svar, vad som skiljer AI-synlighet från vanlig SEO, och vad du som småföretagare konkret kan göra för att synas när kunden frågar i stället för att söka.",
  },
  {
    type: "p",
    text: "Skillnaden är enkel att förstå. En vanlig sökning ger en lista med länkar som besökaren själv klickar sig igenom. En AI-sökning ger ett sammanfattat svar direkt, ofta med bara ett fåtal företag nämnda. Hamnar du inte bland dem syns du inte alls i det svaret, oavsett hur bra du egentligen är.",
  },
  {
    type: "h2",
    text: "Varför det spelar roll redan nu",
  },
  {
    type: "p",
    text: "Det här är inte längre något som kanske händer om några år. AI-assistenter används redan dagligen av vanliga konsumenter, som ett förstahandsval för att jämföra alternativ, ställa uppföljningsfrågor och hitta en leverantör i sitt område. För dig som företagare betyder det en ny yta att synas på, parallellt med den vanliga sökningen, inte i stället för den. Den som redan har det svårt att synas i vanlig sökning riskerar nu att tappa ytterligare en yta om inget görs.",
  },
  {
    type: "tip",
    title: "Det här är inte teoretiskt för oss",
    text: "Vi har själva märkt av det. En kund hörde av sig efter att ha hittat oss via ChatGPT i stället för en vanlig Google-sökning. Ett enda exempel bevisar inget stort på egen hand, men det visar att trafiken från AI-sök redan är verklig i dag, inte bara något som kan hända i framtiden.",
  },
  {
    type: "h2",
    text: "Ett exempel: samma fråga, två sätt att söka",
  },
  {
    type: "cards",
    items: [
      { title: "Klassisk sökning", text: "Kunden googlar elektriker Malmö pris, får en lista med tio länkar och klickar sig runt själv för att jämföra." },
      { title: "AI-sökning", text: "Kunden frågar en AI-assistent vad det brukar kosta att byta ett säkringsskåp i Malmö, och får ett kort svar med bara ett fåtal företag nämnda direkt i texten." },
      { title: "Vad det betyder för dig", text: "Du tävlar inte längre bara om en plats i en lång lista. Du tävlar om att vara ett av de få namn som faktiskt nämns i själva svaret." },
    ],
  },
  {
    type: "h2",
    text: "Hur AI-assistenter väljer vilka företag de nämner",
  },
  {
    type: "p",
    text: "AI-modellerna svarar utifrån det de tränats på och, för många av dagens verktyg, en sökning i realtid som fyller på med färsk information. Precis som en person med bråttom föredrar de källor som är lätta att förstå och som ger ett rakt svar utan att läsaren behöver leta.",
  },
  {
    type: "list",
    title: "Det AI-motorer föredrar",
    items: [
      "Sidor med tydlig struktur: rubriker, korta stycken och punktlistor i stället för en enda lång textvägg.",
      "Sidor som svarar rakt på en fråga i stället för att kräva att läsaren själv drar slutsatsen.",
      "Strukturerad data, så kallad schema-märkning, som beskriver vad sidan handlar om i maskinläsbar form.",
      "Omnämnanden på andra ställen än din egen sajt: branschregister, kataloger, nyheter eller andra företags sidor som nämner dig.",
      "Uppdaterad och korrekt information, som öppettider, adress, priser och vad ni faktiskt erbjuder just nu.",
    ],
  },
  {
    type: "h2",
    text: "AI-synlighet är i praktiken god SEO, plus lite till",
  },
  {
    type: "p",
    text: "Den goda nyheten är att du inte behöver börja om från noll eller lära dig ett helt nytt hantverk. Samma grund som ger dig bra placeringar i vanlig Google-sökning, tydligt innehåll, rätt uppgifter och en sajt som fungerar, ger dig också synlighet i AI-svaren. Skillnaden är att AI-motorerna belönar tydlighet ännu hårdare. En sida som svävar runt ett ämne utan att någonsin landa i ett konkret svar blir sällan citerad, även om den rankar hyfsat i den vanliga sökningen.",
  },
  {
    type: "compare",
    left: {
      title: "Syns ofta i AI-svar",
      items: [
        "Sidor som besvarar en specifik fråga redan i första meningen.",
        "Priser, öppettider och kontaktuppgifter som stämmer överens överallt.",
        "Innehåll som nämns eller länkas till från andra sajter.",
      ],
    },
    right: {
      title: "Syns sällan i AI-svar",
      items: [
        "Långa introtexter innan sidan kommer till poängen.",
        "Motstridig information mellan sajten, Google Företagsprofil och kataloger.",
        "En sajt som bara finns på en enda plats på nätet.",
      ],
    },
  },
  {
    type: "h2",
    text: "Checklista: vad du kan göra själv",
  },
  {
    type: "p",
    text: "Du behöver inte vänta på oss eller någon annan för att komma i gång. De här fem sakerna kan du börja med redan i dag.",
  },
  {
    type: "checklist",
    items: [
      "Skriv riktiga svar på de frågor kunder faktiskt ställer, i löpande text på sajten, inte gömda i en meny.",
      "Håll företagsnamn, adress, telefon och öppettider identiska och uppdaterade överallt, inte bara på hemsidan.",
      "Lägg till grundläggande schema-märkning, till exempel Organization och Service, så innehållet går att tolka maskinellt.",
      "Se till att du är omnämnd på fler ställen än din egen sajt: branschregister, lokala kataloger och din Google Företagsprofil.",
      "Skriv en kort, tydlig sammanfattning högst upp på dina viktigaste sidor i stället för att gömma svaret långt ner.",
    ],
  },
  {
    type: "p",
    text: "Gör en punkt i taget. Redan efter den första märker du att sidan blir tydligare, både för besökare och för AI-motorer.",
  },
  {
    type: "h2",
    text: "Vanliga frågor",
  },
  {
    type: "rows",
    items: [
      { label: "Behöver jag göra något helt nytt för AI-sök?", text: "Nej. Grunden är densamma som för vanlig SEO. Skillnaden är att du belönas extra för att svara tydligt och rakt på riktiga frågor." },
      { label: "Syns jag i ChatGPT om jag redan rankar bra i Google?", text: "Det hjälper, men är ingen garanti. AI-assistenter väger också in hur lätt sidan är att förstå och om du nämns på andra ställen än din egen sajt." },
      { label: "Behöver jag FAQ-schema för att synas i AI-svar?", text: "Nej. Vår egen erfarenhet av lokal SEO visar att FAQ-schema inte gör någon mätbar skillnad, varken i vanlig sökning eller i AI-svar. Lägg tiden på att skriva raka svar i den vanliga texten i stället." },
      { label: "Hur mäter jag om jag syns i AI-sök?", text: "Fråga en AI-assistent samma sak som en kund skulle fråga, till exempel bästa i din bransch i din stad, och se om och hur du nämns. Gör om testet med jämna mellanrum." },
      { label: "Är AI-sök bara relevant för stora företag?", text: "Nej, snarare tvärtom. Mindre företag med tydligt och ärligt innehåll om sin egen ort och tjänst har goda chanser att nämnas, precis som i vanlig lokal SEO." },
    ],
  },
  {
    type: "p",
    text: "AI-sök är fortfarande i sin linda för svenska småföretag, men grunden du lägger nu betalar sig länge framöver. Skriv tydligt, håll uppgifterna korrekta och se till att du finns nämnd på fler ställen än bara din egen sajt, så följer resten med av sig självt.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      category="AI-synlighet"
      h1="Syns ditt företag när kunder frågar ChatGPT? Så fungerar AI-sök"
      dateDisplay="17 augusti 2026"
      readTime="7 min"
      breadcrumbName="Synas i AI-sök"
      sectionLabel="Guider"
      sectionHref="/guider"
      blocks={blocks}
      related={[
        { title: "AI-synlighet: tjänsten", href: "/tjanster/ai-synlighet" },
        { title: "Sökmotoroptimering: så fungerar SEO", href: "/sokmotoroptimering" },
        { title: "SEO-tjänster", href: "/tjanster/seo" },
      ]}
      cta={{
        heading: "Vill du veta om ditt företag syns i AI-svaren?",
        text: "Jag mäter var du står i dag och bygger innehållet som AI-motorerna faktiskt citerar. Boka en kostnadsfri genomgång.",
      }}
    />
  );
}
