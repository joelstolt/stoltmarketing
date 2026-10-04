import BlogArticle from "@/components/BlogArticle";

const blocks = [
  {
    "type": "lead",
    "text": "ChatGPT kan hjälpa dig att komma från ett tomt dokument till ett utkast. Börja med en liten uppgift som du själv kan granska. Mät din egen tidsåtgång innan du drar slutsatsen att arbetet går snabbare."
  },
  {
    "type": "tip",
    "title": "Rensa materialet innan första prompten",
    "text": "Ta bort namn, e-post, telefonnummer, adresser, ordernummer och andra detaljer som kan identifiera kunden. Utelämna avtal, lösenord och känslig information. Att bara byta namn räcker inte om resten av texten identifierar personen. Använd ett uppdiktat exempel eller en kort avidentifierad sammanfattning om du är osäker."
  },
  {
    "type": "p",
    "text": "Skilj ett privat konsumentkonto från ett företagsverktyg som din verksamhet har godkänt med rätt villkor, åtkomst och dataskydd. OpenAI beskriver olika regler för konsumenttjänster och företagsprodukter. Att en tjänst inte tränar på materialet som standard betyder inte att allt kundmaterial är lämpligt att skicka dit."
  },
  {
    "type": "h2",
    "text": "Nio uppgifter att prova"
  },
  {
    "type": "cards",
    "items": [
      {
        "title": "1. Offertmejl och kundsvar",
        "text": "Gör ett svarsförslag från en avidentifierad sammanfattning. Lägg inte in hela kundmejlet."
      }
    ]
  },
  {
    "type": "code",
    "title": "Prompt att anpassa",
    "text": "Skriv ett kort, personligt svar till en kund som frågar om [tjänst]. Utgå endast från dessa fakta: [godkända uppgifter om pris och omfattning]. Markera sådant som jag behöver komplettera. Hitta inte på villkor."
  },
  {
    "type": "cards",
    "items": [
      {
        "title": "2. Annonstexter",
        "text": "Variera formuleringen, men kontrollera att varje löfte stämmer."
      }
    ]
  },
  {
    "type": "code",
    "title": "Prompt att anpassa",
    "text": "Skriv fem annonsrubriker för [tjänst] i [ort]. Varje rubrik får vara högst 30 tecken. Använd bara dessa styrkor: [verifierade fakta]. Visa teckenantalet."
  },
  {
    "type": "cards",
    "items": [
      {
        "title": "3. Vanliga frågor till sajten",
        "text": "Utgå från verkliga återkommande frågor och dina egna svar."
      }
    ]
  },
  {
    "type": "code",
    "title": "Prompt att anpassa",
    "text": "Här är frågor kunder brukar ställa: [frågor]. Här är mina svar i kortform: [fakta]. Skriv tydliga FAQ-svar. Behåll sakuppgifterna och markera luckor."
  },
  {
    "type": "cards",
    "items": [
      {
        "title": "4. Sammanfatta en mejltråd",
        "text": "Ta bort personuppgifter och hemligheter innan du arbetar med ett utdrag. En sammanfattning kan missa detaljer."
      }
    ]
  },
  {
    "type": "code",
    "title": "Prompt att anpassa",
    "text": "Sammanfatta följande avidentifierade utdrag i fem punkter: vad kunden vill, vad som är beslutat och vad som är obesvarat. Skilj fakta från antaganden. Utdrag: [rensad text]."
  },
  {
    "type": "cards",
    "items": [
      {
        "title": "5. Arbetsbeskrivningar",
        "text": "Be om struktur och fyll själv i korrekta arbetsvillkor."
      }
    ]
  },
  {
    "type": "code",
    "title": "Prompt att anpassa",
    "text": "Skriv ett utkast till arbetsbeskrivning för [roll]. Uppgifter: [uppgifter]. Krav: [faktiska krav]. Villkor: [villkor]. Lägg inte till andra krav eller förmåner."
  },
  {
    "type": "cards",
    "items": [
      {
        "title": "6. Översättningar",
        "text": "Låt någon som behärskar språket granska kundtext där precisionen spelar roll."
      }
    ]
  },
  {
    "type": "code",
    "title": "Prompt att anpassa",
    "text": "Översätt följande text till [språk] med enkel, professionell ton. Behåll priser, namn och villkor exakt. Markera tvetydiga uttryck. Text: [text utan personuppgifter]."
  },
  {
    "type": "cards",
    "items": [
      {
        "title": "7. Struktur på offerter",
        "text": "En mall sparar uppstart, men AI ska inte fatta beslut om pris eller avtal."
      }
    ]
  },
  {
    "type": "code",
    "title": "Prompt att anpassa",
    "text": "Föreslå en tom offertmall med rubriker för omfattning, leverans, avgränsningar, pris, betalning och giltighet. Använd [hakparenteser] för uppgifter som jag ska fylla i."
  },
  {
    "type": "cards",
    "items": [
      {
        "title": "8. Kampanjidéer",
        "text": "Välj och utveckla idéer som passar verksamheten."
      }
    ]
  },
  {
    "type": "code",
    "title": "Prompt att anpassa",
    "text": "Ge tio idéer på inlägg för [verksamhet] inför [säsong]. Utgå från [kundbehov]. Hitta inte på kundcitat eller resultat. Förklara vilken fråga varje idé besvarar."
  },
  {
    "type": "cards",
    "items": [
      {
        "title": "9. Enkla kalkyler",
        "text": "Använd AI till att ställa upp beräkningen. Kontrollräkna i kalkylblad eller miniräknare."
      }
    ]
  },
  {
    "type": "code",
    "title": "Prompt att anpassa",
    "text": "Visa uträkningen för 650 kr per timme, 6 fakturerbara timmar per dag och 20 arbetsdagar. Beskriv beloppet som omsättning före kostnader, inte som vinst. Håll moms och kostnader separata."
  },
  {
    "type": "h2",
    "text": "Kontrollera innan något går till kund"
  },
  {
    "type": "checklist",
    "items": [
      "Materialet är rensat innan det läggs in.",
      "Priser, villkor, datum och faktapåståenden är kontrollerade mot egna uppgifter eller primärkällor.",
      "Utkastet innehåller inga påhittade kundcitat, garantier eller meriter.",
      "Jag har läst resultatet och ansvarar för det som skickas.",
      "Jag har jämfört total tid inklusive granskning med mitt tidigare arbetssätt."
    ]
  },
  {
    "type": "tip",
    "title": "Ett rätt testsvar räcker inte",
    "text": "Fråga gärna om något du kan kontrollera för att upptäcka fel. Ett korrekt svar på den frågan visar bara att just det svaret blev rätt. Fortsätt kontrollera varje leverans, särskilt siffror och regler."
  },
  {
    "type": "h2",
    "text": "När ett arbetsflöde behöver mer än ett chattfönster"
  },
  {
    "type": "p",
    "text": "Om du upprepar samma uppgift ofta kan en mall eller vanlig regelstyrd automation räcka. AI kan vara ett steg i ett större flöde, men behöver tydligt underlag, felhantering och kontroll före utskick. Vilken tidsvinst du får måste mätas i din verksamhet. Börja med att dokumentera var tiden går."
  },
  {
    "type": "rows",
    "items": [
      {
        "label": "Behöver jag en betalversion?",
        "text": "Det beror på funktioner och dina datakrav. Jämför aktuell produktinformation och villkor. Välj inte ett privat konto enbart för att det är gratis om uppgiften kräver ett godkänt företagsverktyg."
      },
      {
        "label": "Kan AI bestämma pris eller ge juridiskt råd?",
        "text": "Använd utkastet som hjälp med formulering och struktur. Kontrollera ekonomi och regler mot tillförlitliga källor och ta sakkunnig hjälp när det behövs."
      },
      {
        "label": "Hur vet jag om jag sparar tid?",
        "text": "Räkna med tiden för att rensa underlag, skriva prompten, korrigera svaret och kontrollera resultatet. Jämför flera liknande uppgifter innan du ändrar arbetssätt."
      }
    ]
  }
];

export default function Page() {
  return <BlogArticle
    category="AI och automation"
    h1="ChatGPT för småföretag: nio uppgifter med promptmallar"
    dateDisplay="17 augusti 2026"
    updatedDate="2026-10-04"
    summary="Börja med avidentifierat underlag och en uppgift du kan kontrollera. Använd AI till utkast, granska resultatet själv och mät tidsvinsten inklusive korrigeringar."
    breadcrumbName="ChatGPT för småföretag: nio uppgifter med promptmallar"
    sectionLabel="Guider" sectionHref="/guider"
    blocks={blocks}
    sources={[{"title": "OpenAI: hur data används i konsument- och företagsprodukter", "href": "https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance"}]}
    related={[{"title": "AI-automation: upplägg", "href": "/tjanster/ai-automation"}, {"title": "Åtta exempel på arbetsflöden", "href": "/blogg/automatisera-med-ai"}, {"title": "Synas i AI-sök", "href": "/guider/synas-i-ai-sok"}]}
    cta={{"heading": "Vill du förenkla en återkommande uppgift?", "text": "Beskriv stegen du gör i dag. Jag bedömer om en mall, vanlig automation eller AI-stöd passar och var du behöver behålla kontrollen.", "label": "Beskriv ditt arbetsflöde", "href": "/kontakt"}}
  />;
}
