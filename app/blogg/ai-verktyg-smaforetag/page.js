"use client";

import BlogArticle from "@/components/BlogArticle";

const blocks = [
  {
    type: "lead",
    text: "AI ersätter inte dig som företagare. Men den kan ta bort tidstjuvarna, alltså det där repetitiva som äter timmar varje vecka utan att göra dig en krona rikare. Här är 12 praktiska AI-verktyg som svenska småföretag faktiskt har nytta av, grupperade efter vad de löser. Flera är gratis att komma igång med.",
  },
  {
    type: "p",
    text: "Du behöver inte börja med alla. Välj en uppgift som stjäl mest tid just nu och testa ett verktyg mot den. När det sitter tar du nästa. Ett litet råd innan vi börjar: mata aldrig in känsliga kund- eller personuppgifter i verktyg du inte vet var de lagrar datan.",
  },
  {
    type: "h2",
    text: "Text och innehåll",
  },
  {
    type: "p",
    text: "Här gör AI mest nytta för de flesta: utkast, mejl, produkttexter och sammanfattningar. Se det som en snabb praktikant som skriver första versionen, du putsar och godkänner.",
  },
  {
    type: "cards",
    items: [
      { title: "1. ChatGPT", text: "Allroundverktyget för att skriva utkast, svara på mejl, sammanfatta långa dokument och bolla idéer. Gratisversionen räcker långt för de flesta." },
      { title: "2. Claude", text: "Stark på längre texter och nyanserat språk. Bra när du vill ha genomtänkta utkast eller hjälp att strukturera ett längre innehåll." },
      { title: "3. DeepL", text: "Översätter texter till och från svenska med en kvalitet som ofta slår vanliga översättningsverktyg. Praktiskt om du säljer utomlands." },
    ],
  },
  {
    type: "h2",
    text: "Bild och design",
  },
  {
    type: "p",
    text: "Behöver du en enkel bild, en produktbakgrund eller snygg grafik till sociala medier utan att anlita en designer? Då räcker de här långt.",
  },
  {
    type: "cards",
    items: [
      { title: "4. Canva", text: "Design för icke-designers, med inbyggda AI-funktioner för att skapa bilder, ta bort bakgrunder och fixa texter. Perfekt för inlägg, annonser och enkla trycksaker." },
      { title: "5. Adobe Firefly", text: "Skapar och redigerar bilder från en textbeskrivning, med fokus på att vara tryggt att använda kommersiellt." },
      { title: "6. Bakgrundsborttagning", text: "Verktyg som tar bort bakgrunden på produktbilder automatiskt ger dig rena, proffsiga bilder till webbutiken på sekunder." },
    ],
  },
  {
    type: "h2",
    text: "Kundservice",
  },
  {
    type: "p",
    text: "Många besökare hör aldrig av sig, och de som gör det vill ha svar direkt. AI hjälper dig svara snabbare utan att sitta klistrad vid inkorgen.",
  },
  {
    type: "cards",
    items: [
      { title: "7. En AI-chatbot på sajten", text: "Svarar på vanliga frågor dygnet runt, kvalificerar besökaren och fångar kontaktuppgifter även när du sover. Det här bygger vi ofta åt kunder." },
      { title: "8. Smarta svarsmallar", text: "Låt AI föreslå svar på återkommande mejl och meddelanden. Du läser, justerar och skickar, på en bråkdel av tiden." },
    ],
  },
  {
    type: "tip",
    title: "Håll en människa i loopen",
    text: "AI är utmärkt på det vanliga och repetitiva. Men se till att en riktig person tar över när frågan är känslig, komplicerad eller värd mycket pengar. Det är där kundrelationen avgörs.",
  },
  {
    type: "h2",
    text: "Admin och ekonomi",
  },
  {
    type: "p",
    text: "Det tråkigaste av allt, och därför tacksammast att automatisera. Här sparar du ofta flest timmar med minst ansträngning.",
  },
  {
    type: "cards",
    items: [
      { title: "9. Transkribering", text: "Verktyg som Otter eller liknande gör om inspelade möten och röstmemon till sökbar text. Slut på att anteckna under samtalet." },
      { title: "10. Mötesassistenter", text: "Sitter med på dina digitala möten, skriver sammanfattning och plockar ut vad som ska göras och av vem." },
      { title: "11. Kvitto- och bokföringshjälp", text: "Moderna bokföringstjänster använder AI för att tolka kvitton och föreslå kontering, så mindre tid går åt till pappersarbete." },
    ],
  },
  {
    type: "h2",
    text: "Marknadsföring",
  },
  {
    type: "p",
    text: "AI är en outtröttlig idéspruta. Använd den för att aldrig mer stirra på ett tomt dokument när det är dags att marknadsföra.",
  },
  {
    type: "cards",
    items: [
      { title: "12. Idé- och planeringshjälp", text: "Be ChatGPT eller Claude om en månads innehållsidéer för din bransch, utkast till nyhetsbrev eller rubriker till annonser. Du väljer och finslipar." },
    ],
  },
  {
    type: "h2",
    text: "Så kommer du igång utan att bränna tid",
  },
  {
    type: "p",
    text: "Nyckeln är att inte försöka allt på en gång. Följ den här enkla ordningen:",
  },
  {
    type: "checklist",
    items: [
      "Skriv ner den uppgift som stjäl mest av din tid varje vecka.",
      "Välj ett verktyg ovan som är gjort för just den uppgiften.",
      "Testa i en vecka på riktiga arbetsuppgifter, inte bara på lek.",
      "Behåll det som sparar tid, släng resten utan dåligt samvete.",
      "Se till att inga känsliga kunduppgifter matas in i verktyg du inte litar på.",
    ],
  },
  {
    type: "p",
    text: "Det största misstaget är att tro att man måste förstå allt om AI innan man börjar. Det gör man inte. Välj en sak, spara några timmar den här veckan, och bygg vidare därifrån. Vill du att vi hjälper dig koppla ihop rätt verktyg för dina flöden, hör av dig.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      category="AI"
      h1="12 AI-verktyg varje småföretagare borde testa 2026"
      dateDisplay="4 augusti 2026"
      readTime="9 min"
      breadcrumbName="AI-verktyg"
      blocks={blocks}
      related={[
        { title: "Automatisera det tråkiga: 8 AI-exempel", href: "/blogg/automatisera-med-ai" },
        { title: "Chatbot för företag", href: "/blogg/chatbot-for-foretag" },
        { title: "AI-automation", href: "/tjanster/ai-automation" },
      ]}
      cta={{
        heading: "Vill du få AI att jobba åt ditt företag?",
        text: "Vi hjälper dig hitta och koppla ihop rätt AI-verktyg för dina flöden. Boka en kostnadsfri genomgång.",
      }}
    />
  );
}
