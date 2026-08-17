"use client";

import BlogArticle from "@/components/BlogArticle";

const blocks = [
  {
    type: "lead",
    text: "Recensioner är en av de tyngsta faktorerna för vem som hamnar högst i Googles kartruta när någon söker efter din tjänst i din stad. Den här guiden går igenom hur du tar fram en direktlänk och QR-kod till dina recensioner, hur och när du ber en kund om en recension, vad marknadsföringslagen faktiskt tillåter, och hur du svarar när en recension inte är positiv.",
  },
  {
    type: "p",
    text: "Gäller dig som är hantverkare, driver salong, klinik, butik eller någon annan verksamhet där kunder googlar efter dig lokalt. Upplägget nedan är detsamma oavsett bransch.",
  },
  {
    type: "h2",
    text: "Varför recensioner avgör vem som syns i kartan",
  },
  {
    type: "p",
    text: "När någon söker på till exempel elektriker Malmö visar Google en karta med tre företag överst, det så kallade lokala paketet. Google är själva tydliga med att antal recensioner och genomsnittligt betyg är en av faktorerna som styr vem som hamnar där. Ett företag med många färska recensioner och ett högt snittbetyg slår nästan alltid ett med få recensioner, även om båda gör lika bra jobb i verkligheten.",
  },
  {
    type: "list",
    title: "Det här väger tyngst i kartrutan",
    items: [
      "Antal recensioner totalt, och hur många av dem som är nya de senaste månaderna.",
      "Genomsnittligt betyg.",
      "Om du svarar på recensionerna eller lämnar dem obesvarade.",
      "Om ord som din tjänst eller ort råkar nämnas naturligt i recensionstexterna.",
    ],
  },
  {
    type: "p",
    text: "Det handlar inte om att jaga ett engångsmål och sedan slappna av. Google värderar en jämn ström av nya recensioner högre än en gammal hög som slutade växa för länge sen. Bygg in frågan i din vanliga rutin, så fortsätter strömmen av sig själv.",
  },
  {
    type: "h2",
    text: "Så tar du fram din direktlänk och QR-kod",
  },
  {
    type: "p",
    text: "Be aldrig kunden leta upp dig själv på Google för att skriva en recension. Det är för många steg, och det blir sällan av. Gör det så enkelt som möjligt: en länk att klicka på, eller en kod att skanna.",
  },
  {
    type: "list",
    title: "Steg för steg",
    items: [
      "Logga in på din Google Företagsprofil på business.google.com.",
      "Klicka på Recensioner i menyn, sedan på Be om recensioner. Där hittar du din unika länk.",
      "Hittar du inte knappen: sök på ditt företagsnamn i Google, klicka på stjärnorna under namnet och kopiera länken ur adressfältet när recensionsrutan öppnas.",
      "Klistra in länken i en gratis QR-kodgenerator och ladda ner koden som bild.",
      "Sätt QR-koden där kunden ser den precis efter att jobbet är klart: på fakturan, kvittot, i bilen eller på ett kort du lämnar kvar.",
    ],
  },
  {
    type: "tip",
    title: "Testa länken själv först",
    text: "Klicka på länken från din egen mobil innan du skickar ut den. Den ska gå rakt till rutan där kunden sätter betyg och skriver text, inte bara till din profil där kunden själv måste leta upp recensionerna.",
  },
  {
    type: "h2",
    text: "Så och när du ber om en recension",
  },
  {
    type: "p",
    text: "Bästa tillfället är direkt efter ett avslutat jobb, medan kunden fortfarande är nöjd och minns detaljerna. Vänta en vecka och intresset har svalnat. Vänta en månad och kunden minns knappt vem du var.",
  },
  {
    type: "list",
    title: "Gör så här",
    items: [
      "Fråga muntligt om kunden är nöjd innan du avslutar besöket. Blir svaret ja, säg att en recension betyder mycket för ett litet företag.",
      "Skicka länken samma dag, via SMS eller mejl, med kundens namn och en rad om vad du hjälpte till med.",
      "Skriv som dig själv, inte som ett företag. Ett personligt meddelande får fler att faktiskt klicka.",
      "Tacka den som skriver, oavsett vad de skriver.",
    ],
  },
  {
    type: "p",
    text: "Massutskick till hela kundregistret på en gång ger sällan resultat och känns opersonligt för mottagaren. Be en kund i taget, i nära anslutning till jobbet.",
  },
  {
    type: "cards",
    items: [
      { title: "Jobb hemma hos kunden", text: "Fråga muntligt på plats när du är klar och packar ihop. Skicka länken via SMS samma kväll, medan det fortfarande är färskt." },
      { title: "Butik eller mottagning", text: "Sätt QR-koden vid kassan eller utgången. Den som just haft en bra upplevelse skannar den på väg ut, utan att du behöver fråga varje gång." },
      { title: "Tjänst på distans", text: "Lägg länken sist i slutmejlet eller på fakturan, med en rad om att den betyder mycket för ett litet företag." },
    ],
  },
  {
    type: "h2",
    text: "Viktigt: vad lagen faktiskt tillåter",
  },
  {
    type: "tip",
    title: "Marknadsföringslagen 12 c §: inga rabatter mot recensioner",
    text: "Det är förbjudet att ge rabatt, gåva eller annan ersättning i utbyte mot ett omdöme, oavsett om det gäller ett visst betyg eller bara att kunden skriver något över huvud taget. Det gäller även indirekt, till exempel att erbjuda nästa besök gratis mot att kunden skriver en recension. Be ärligt i stället, utan koppling till någon förmån, och lita på att ett bra utfört jobb ger bra recensioner av sig själv.",
  },
  {
    type: "p",
    text: "Du får absolut påminna en kund om att en recension uppskattas. Det du aldrig får göra är att koppla den påminnelsen till något kunden får i gengäld.",
  },
  {
    type: "h2",
    text: "Så svarar du på recensioner, positiva som negativa",
  },
  {
    type: "p",
    text: "Att svara visar att du är aktiv och bryr dig om vad kunderna tycker. Framtida kunder läser ofta svaren minst lika noga som betyget, särskilt på de negativa recensionerna. Hur du hanterar kritik säger mer om dig än kritiken själv.",
  },
  {
    type: "compare",
    left: {
      title: "Gör så här",
      items: [
        "Tacka kort och konkret för positiva recensioner, gärna med något specifikt från jobbet.",
        "Svara sakligt och lugnt på negativa recensioner, även om du tycker de är orättvisa.",
        "Bekräfta problemet och erbjud en lösning eller en kontaktväg utanför Google.",
        "Svara inom några dagar, inte månader senare.",
      ],
    },
    right: {
      title: "Undvik",
      items: [
        "Gå i affekt eller bli defensiv i ett offentligt svar.",
        "Skriva långa försvarstal som fler läser än bara kunden.",
        "Ignorera negativa recensioner helt och hoppas att de försvinner.",
        "Låtsas att kunden har fel utan att egentligen bemöta det som skrevs.",
      ],
    },
  },
  {
    type: "h2",
    text: "Vanliga misstag",
  },
  {
    type: "p",
    text: "De flesta problemen går att undvika helt om du känner till dem i förväg.",
  },
  {
    type: "list",
    title: "Undvik de här",
    items: [
      "Köpa recensioner eller be anställda skriva falska. Mönstret syns, och det slår hårt tillbaka om det upptäcks.",
      "Bara fråga de kunder du vet är mest nöjda och hoppa över resten. Det ger en skev bild och bryter mot Googles riktlinjer om det görs systematiskt.",
      "Glömma att svara. En obesvarad ström av recensioner ser passiv ut.",
      "Dela fel länk om företaget har flera Google-profiler eller avdelningar.",
      "Vänta för länge efter avslutat jobb med att fråga.",
    ],
  },
  {
    type: "h2",
    text: "Kom i gång idag",
  },
  {
    type: "p",
    text: "Du behöver inte lösa allt på en gång. Gör de här fyra sakerna i ordning, så är du igång inom en timme.",
  },
  {
    type: "checklist",
    items: [
      "Hämta din direktlänk till recensioner från Google Företagsprofil.",
      "Gör en QR-kod av länken och sätt upp den där kunden ser den efter avslutat jobb.",
      "Bestäm en fast rutin: fråga muntligt, skicka länken samma dag.",
      "Sätt av tio minuter i veckan för att svara på nya recensioner.",
    ],
  },
  {
    type: "h2",
    text: "Vanliga frågor",
  },
  {
    type: "rows",
    items: [
      { label: "Får jag påminna en kund som inte skrivit än?", text: "Ja, en vänlig påminnelse är okej. Koppla den aldrig till en rabatt eller gåva." },
      { label: "Kan jag ta bort en orättvis recension?", text: "Du kan rapportera recensioner till Google som bryter mot deras riktlinjer, till exempel är falska eller kommer från en konkurrent. En recension du bara ogillar går inte att ta bort." },
      { label: "Hur många recensioner behöver jag?", text: "Det finns ingen given gräns. Det som räknas är en jämn ström av nya recensioner över tid, inte ett engångsryck." },
      { label: "Måste jag svara på alla recensioner?", text: "Nej, men det lönar sig. Framtida kunder läser svaren, inte bara betyget." },
      { label: "Funkar en skylt med QR-kod i butiken eller bilen?", text: "Ja, det är ett av de enklaste sätten att få in recensioner löpande, så länge du inte kopplar den till en belöning." },
    ],
  },
  {
    type: "p",
    text: "Fler recensioner byggs upp jobb för jobb, inte genom en enskild kampanj. Börja med länken och QR-koden, gör frågan till en rutin efter varje avslutat uppdrag, och du märker skillnad i kartrutan inom några månader.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      category="Lokal synlighet"
      h1="Fler Google-recensioner till ditt företag: så gör du (utan att bryta mot reglerna)"
      dateDisplay="17 augusti 2026"
      readTime="8 min"
      breadcrumbName="Fler Google-recensioner"
      sectionLabel="Guider"
      sectionHref="/guider"
      blocks={blocks}
      related={[
        { title: "Google Business Profile: komplett guide", href: "/blogg/google-business-profile-guide" },
        { title: "Lokal SEO: så syns du i Google Maps", href: "/blogg/lokal-seo-guide" },
        { title: "SEO-tjänster", href: "/tjanster/seo" },
      ]}
      cta={{
        heading: "Vill du ha hjälp att bygga upp fler recensioner?",
        text: "Jag hjälper dig sätta upp rutinen: direktlänk, QR-kod och ett enkelt sätt att be varje nöjd kund. Boka en kostnadsfri genomgång.",
      }}
    />
  );
}
