"use client";

import BlogArticle from "@/components/BlogArticle";

const blocks = [
  {
    type: "lead",
    text: "Du behöver inga dyra verktyg för att förstå varför du inte rankar på Google. Med en halvtimme och gratis verktyg kan du göra en enkel SEO-analys av din egen sajt och hitta de flesta problemen själv. Här är exakt hur jag gör en snabb genomgång, steg för steg.",
  },
  {
    type: "p",
    text: "En SEO-analys svarar på tre frågor: syns du på Google, för vad, och vad är det som håller dig tillbaka. Sätt en timer på 30 minuter och följ stegen nedan. Anteckna allt du hittar, så har du din egen åtgärdslista när du är klar.",
  },
  {
    type: "h2",
    text: "Steg 1 (5 min): är du ens med i Google?",
  },
  {
    type: "p",
    text: "Först och viktigast: kollar Google överhuvudtaget dina sidor? Om de inte är indexerade spelar inget annat någon roll.",
  },
  {
    type: "list",
    title: "Gör så här",
    items: [
      "Sök på site:dindoman.se i Google. Antalet träffar visar ungefär hur många av dina sidor Google känner till.",
      "Saknas viktiga sidor, eller dyker konstiga sidor upp? Notera det.",
      "Har du Google Search Console? Kolla rapporten Sidor för att se vad som är indexerat och vad som exkluderats.",
      "Kontrollera att du inte råkat blockera sajten i robots-filen eller lämnat kvar en noindex-tagg från bygget.",
    ],
  },
  {
    type: "h2",
    text: "Steg 2 (5 min): teknik och hastighet",
  },
  {
    type: "p",
    text: "En långsam sajt tappar både besökare och placeringar. Det här mäter du gratis på några minuter.",
  },
  {
    type: "list",
    title: "Gör så här",
    items: [
      "Kör din startsida och en tjänstesida i Googles PageSpeed Insights.",
      "Titta särskilt på mobilresultatet, det är det Google prioriterar.",
      "Notera de största bovarna, ofta stora bilder som inte komprimerats.",
      "Öppna sajten i mobilen och känn efter: laddar den snabbt och är allt lätt att trycka på?",
    ],
  },
  {
    type: "h2",
    text: "Steg 3 (10 min): innehåll och sökintention",
  },
  {
    type: "p",
    text: "Det här är där de flesta vinner eller förlorar. Gå igenom dina viktigaste sidor med kundens ögon.",
  },
  {
    type: "cards",
    items: [
      { title: "En tydlig titel och H1", text: "Säger sidan direkt vad du erbjuder och för vem? Finns sökordet med, tidigt?" },
      { title: "Svarar sidan på frågan?", text: "Om någon söker på din tjänst, får de svaret här, eller måste de leta vidare?" },
      { title: "Tunna sidor", text: "Har du sidor med två meningar text? De rankar sällan. Slå ihop eller bygg ut dem." },
      { title: "En tydlig nästa åtgärd", text: "Finns en synlig knapp eller ett formulär som ber besökaren att höra av sig?" },
    ],
  },
  {
    type: "h2",
    text: "Steg 4 (5 min): vad rankar du redan på?",
  },
  {
    type: "p",
    text: "Google Search Console är helt gratis och guld värt. Under Resultat ser du exakt vilka sökord som redan ger dig visningar och klick.",
  },
  {
    type: "list",
    title: "Leta efter",
    items: [
      "Sökord där du ligger på position 5 till 15. De är nära första sidan och lättast att lyfta.",
      "Sökord med många visningar men få klick. Där kan en bättre titel ge snabb effekt.",
      "Sökord du inte visste att du rankade på. De kan vara uppslag till nya sidor.",
    ],
  },
  {
    type: "tip",
    title: "Har du ingen Search Console ännu?",
    text: "Sätt upp den idag, det tar tio minuter och kostar inget. Det är den enskilt viktigaste gratiskällan till vad dina kunder faktiskt söker på för att hitta dig.",
  },
  {
    type: "h2",
    text: "Steg 5 (5 min): kolla tre konkurrenter",
  },
  {
    type: "p",
    text: "Sök på dina viktigaste sökord och titta på de som ligger överst. Du letar inte efter att kopiera, utan efter gapet du kan fylla.",
  },
  {
    type: "list",
    title: "Fråga dig",
    items: [
      "Vad tar de upp på sina sidor som du helt saknar?",
      "Har de fler och bättre recensioner än du?",
      "Är deras sidor djupare och mer hjälpsamma, eller kan du göra bättre?",
    ],
  },
  {
    type: "h2",
    text: "Din gratis checklista",
  },
  {
    type: "p",
    text: "Gör om den här genomgången en gång i kvartalet, så håller du koll på både framsteg och nya problem. Bocka av:",
  },
  {
    type: "checklist",
    items: [
      "Viktiga sidor är indexerade (site:-sökning och Search Console).",
      "Sajten laddar snabbt på mobil (PageSpeed).",
      "Varje viktig sida har unik titel, H1 och svarar på kundens fråga.",
      "Inga tunna sidor med bara ett par meningar.",
      "Sökord på position 5 till 15 identifierade och förbättrade.",
      "Minst en konkret sak du kan göra bättre än närmaste konkurrent.",
    ],
  },
  {
    type: "p",
    text: "Kommer du inte vidare på egen hand, eller vill ha en djupare analys med riktiga sökordsdata och en prioriterad åtgärdslista? Då hjälper vi gärna till.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      category="SEO"
      h1="SEO-analys: så gör du en själv på 30 minuter"
      dateDisplay="25 juli 2026"
      readTime="10 min"
      breadcrumbName="SEO-analys själv"
      blocks={blocks}
      related={[
        { title: "Sökordsanalys för nybörjare", href: "/blogg/sokordsanalys-nyborjare" },
        { title: "Teknisk SEO: nybörjarguiden", href: "/blogg/teknisk-seo-guide" },
        { title: "SEO-tjänster", href: "/tjanster/seo" },
      ]}
      cta={{
        heading: "Vill du ha en djupare SEO-analys?",
        text: "Vi gör en komplett genomgång med riktiga sökordsdata och en prioriterad åtgärdslista. Boka en kostnadsfri första titt.",
      }}
    />
  );
}
