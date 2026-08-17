"use client";

import BlogArticle from "@/components/BlogArticle";

const blocks = [
  {
    type: "lead",
    text: "Du behöver inte förstå hur AI fungerar under huven för att ha nytta av ChatGPT i vardagen. Här är nio konkreta användningsområden där svenska småföretag faktiskt sparar tid, med exempel på hur du kan skriva prompten för var och en. Längst ner hittar du också fällorna att undvika och när det är läge att ta hjälp i stället för att göra allt själv.",
  },
  {
    type: "p",
    text: "Du behöver inte testa alla nio på en gång. Välj den uppgift som stjäl mest av din tid just nu, testa den på ett riktigt jobb i en vecka, och gå vidare till nästa när den sitter.",
  },
  {
    type: "h2",
    text: "Skriva snabbare: mejl, texter och beskrivningar",
  },
  {
    type: "p",
    text: "Här gör AI störst nytta för de flesta: ett första utkast du sedan putsar, i stället för ett tomt dokument.",
  },
  {
    type: "cards",
    items: [
      { title: "1. Offertmejl och kundsvar", text: "Klistra in vad kunden frågat och be om ett svarsförslag. Prompt: skriv ett kort, personligt svar till en kund som undrar vad det kostar att byta ut ett kök. Vi tar normalt betalt per timme plus material. Håll tonen hjälpsam, inte säljig. Du redigerar sen det som inte stämmer och skickar." },
      { title: "2. Annonstexter", text: "Be om flera korta varianter i stället för en enda lång. Prompt: skriv fem korta annonsrubriker för en lokal målare i Malmö, max 30 tecken var, som betonar snabb offert. Testa vilken som funkar bäst i stället för att gissa dig fram." },
      { title: "3. FAQ-texter till sajten", text: "Låt AI ta första utkastet på svar till frågor du redan får varje vecka. Prompt: här är fem frågor kunder ofta ställer om våra tjänster, lista dem, skriv ett kort och rakt svar på varje som jag kan lägga in på sajten. Byt ut generella påståenden mot dina egna fakta innan du publicerar." },
    ],
  },
  {
    type: "h2",
    text: "Bearbeta det som redan finns",
  },
  {
    type: "p",
    text: "AI är också bra på att göra om text du redan har till något kortare, tydligare eller på ett annat språk.",
  },
  {
    type: "cards",
    items: [
      { title: "4. Sammanfatta långa mejltrådar", text: "Klistra in hela tråden och be om en sammanfattning innan du svarar. Prompt: sammanfatta den här mejltråden i fem punkter, vad kunden vill, vad som redan är beslutat och vad som fortfarande är obesvarat. Sparar dig från att läsa om allt från början varje gång du öppnar tråden." },
      { title: "5. Arbetsbeskrivningar", text: "Bra för att snabbt få ett strukturerat utkast till en jobbannons eller uppdragsbeskrivning. Prompt: skriv en arbetsbeskrivning för en snickare som ska jobba hos oss två dagar i veckan, med tydliga arbetsuppgifter, önskad erfarenhet och vad vi erbjuder. Fyll sedan i dina egna, faktiska villkor." },
      { title: "6. Översättningar", text: "Snabbare än att slå upp ord för ord, särskilt för enklare texter som produktbeskrivningar eller korta mejl. Prompt: översätt den här texten till engelska och håll en enkel, professionell ton. Läs alltid igenom resultatet själv, eller be någon som kan språket kolla innan det går ut till en kund." },
    ],
  },
  {
    type: "h2",
    text: "Strukturera och tänka",
  },
  {
    type: "p",
    text: "Sist: allt som handlar om att få ordning på tankarna eller göra ett snabbt överslag.",
  },
  {
    type: "cards",
    items: [
      { title: "7. Struktur på offerter", text: "Be om en tydlig mall i stället för att bygga offerten från noll varje gång. Prompt: föreslå en struktur för en offert till en villaägare: inledning, vad som ingår, vad som inte ingår, pris och giltighetstid. Fyll sedan i dina egna siffror och villkor." },
      { title: "8. Brainstorma kampanjidéer", text: "Bra när du kört fast och behöver fler infallsvinklar snabbt. Prompt: ge mig tio idéer på inlägg till sociala medier för en lokal bilverkstad inför vintersäsongen. Plocka de två, tre bästa och gör dem till dina egna i stället för att posta alla rakt av." },
      { title: "9. Räkna på enkla kalkyler", text: "Bra för snabba överslag, inte för det som ska stämma på kronan. Prompt: om jag tar 650 kronor i timmen och räknar med 6 fakturerbara timmar per dag, hur mycket blir det på en månad med 20 arbetsdagar? Räkna alltid om själv innan du sätter en riktig offert." },
    ],
  },
  {
    type: "compare",
    left: {
      title: "AI passar bra till",
      items: [
        "Första utkast av text du ändå ska redigera själv.",
        "Uppgifter som upprepar sig men inte kräver hemlig information.",
        "Att komma i gång när du kört fast eller har vita pappret-panik.",
      ],
    },
    right: {
      title: "AI passar sämre till",
      items: [
        "Sista ordet i något som kräver garantier eller juridisk exakthet.",
        "Uppgifter där kunduppgifter eller avtal måste klistras in.",
        "Svar du inte har tid eller möjlighet att dubbelkolla.",
      ],
    },
  },
  {
    type: "h2",
    text: "Tre fällor, var ärlig med dig själv",
  },
  {
    type: "list",
    title: "Sätt gränserna innan du börjar",
    items: [
      "Mata aldrig in kunduppgifter, personnummer eller annan känslig information i ett AI-verktyg där du inte vet var datan lagras.",
      "Dubbelkolla alltid siffror, lagtext, regler och andra påståenden AI:n ger dig. Den gissar ibland fel med exakt samma säkra ton som när den har rätt.",
      "Se AI-texten som ett utkast, inte ett färdigt svar. Läs igenom, korrigera och gör den till din egen innan den går ut till en kund.",
    ],
  },
  {
    type: "tip",
    title: "Ett enkelt test",
    text: "Fråga AI:n om något du redan vet svaret på. Stämmer svaret, bra tecken. Är det fel, eller bara löst hopdiktat, då vet du att du måste dubbelkolla den typen av frågor extra noga framöver.",
  },
  {
    type: "h2",
    text: "När är det läge att ta hjälp i stället för att göra själv?",
  },
  {
    type: "p",
    text: "De nio exemplen ovan är bra för enstaka uppgifter du gör själv vid tangentbordet. Men när samma uppgift upprepar sig varje dag, som att svara på återkommande kundfrågor dygnet runt eller koppla ihop flera olika system, är det ofta värt att bygga en riktig lösning i stället för att klistra in text i ChatGPT varje gång. Det är skillnaden mellan att spara några minuter enstaka gånger och att spara flera timmar varje vecka, år efter år.",
  },
  {
    type: "h2",
    text: "Testa en av de här i dag",
  },
  {
    type: "p",
    text: "Ingen ordning är den enda rätta. Välj den uppgift som känns mest akut för dig just nu.",
  },
  {
    type: "checklist",
    items: [
      "Skriv ett prompt-utkast för den uppgift som stjäl mest tid av dig varje vecka.",
      "Testa det på ett riktigt jobb, inte bara som lek.",
      "Läs igenom och korrigera innan du skickar eller publicerar något AI skrivit.",
      "Spara prompten som fungerade, så slipper du uppfinna den på nytt nästa gång.",
    ],
  },
  {
    type: "h2",
    text: "Vanliga frågor",
  },
  {
    type: "rows",
    items: [
      { label: "Är gratisversionen av ChatGPT tillräcklig?", text: "Ja, för det mesta av det här. Betalversionen ger snabbare svar och fler funktioner, men gratisnivån räcker långt för en vanlig vecka." },
      { label: "Kan jag lita på siffror och fakta som ChatGPT ger mig?", text: "Nej, inte utan att kolla. Dubbelkolla alltid siffror, lagtext och andra påståenden mot en riktig källa innan du använder dem i något som går till en kund." },
      { label: "Är det farligt att skriva in kunduppgifter?", text: "Utgå från att allt du skriver in kan sparas av tjänsten. Skriv aldrig in personnummer, avtal eller annan känslig kundinformation." },
      { label: "Ersätter AI en riktig anställd eller byrå?", text: "Nej. Den tar bort en del av det repetitiva arbetet. Det som kräver omdöme, relation eller ansvar behöver fortfarande en människa." },
      { label: "Vilken AI-modell är bäst för småföretag?", text: "Det finns inget enda rätt svar. ChatGPT är ett bra allroundval att börja med. Testa dig fram och byt om ett annat verktyg passar din uppgift bättre." },
    ],
  },
  {
    type: "p",
    text: "Börja med en enda uppgift från listan i dag. Testa den på ett riktigt jobb, inte bara för skojs skull, och se hur mycket tid den faktiskt sparar innan du bygger ut vidare.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      category="AI & Automation"
      h1="ChatGPT för småföretag: 9 användningsområden som faktiskt sparar tid"
      dateDisplay="17 augusti 2026"
      readTime="9 min"
      breadcrumbName="ChatGPT för småföretag"
      sectionLabel="Guider"
      sectionHref="/guider"
      blocks={blocks}
      related={[
        { title: "AI-automation: tjänsten", href: "/tjanster/ai-automation" },
        { title: "AI-synlighet: tjänsten", href: "/tjanster/ai-synlighet" },
        { title: "Syns ditt företag i AI-sök?", href: "/guider/synas-i-ai-sok" },
      ]}
      cta={{
        heading: "Vill du automatisera mer än ett ChatGPT-fönster i taget?",
        text: "Jag bygger chatbotar, automatiserade offerter och arbetsflöden som gör jobbet åt dig varje dag, inte bara när du kommer ihåg att fråga. Boka en kostnadsfri genomgång.",
      }}
    />
  );
}
