import BlogArticle from "@/components/BlogArticle";

const blocks = [
  {
    "type": "lead",
    "text": "När en kund frågar ChatGPT, Copilot eller Googles AI-funktioner kan svaret innehålla företag och länkar. Vilka som nämns varierar med frågan, tjänsten och tillfället. En enda fråga räcker därför inte för att bedöma din synlighet."
  },
  {
    "type": "h2",
    "text": "Skilj på läsbarhet, omnämnande och affär"
  },
  {
    "type": "rows",
    "items": [
      {
        "label": "Teknisk läsbarhet",
        "text": "Går den testade sidan att hämta och förstå? Det säger inget säkert om den väljs som källa."
      },
      {
        "label": "Synlighet i ett svar",
        "text": "Nämns företaget eller länkas sidan i en sparad körning? Det gäller just den tjänsten, frågan och tidpunkten."
      },
      {
        "label": "Affärsresultat",
        "text": "Kommer någon vidare till sajten, kontaktar dig och köper? Följ dessa steg separat, med den attribution som faktiskt finns."
      }
    ]
  },
  {
    "type": "tip",
    "title": "Mitt kundexempel är just ett exempel",
    "text": "En kund har berättat att kontakten började via ChatGPT. Det visar att kanalen kan spela en roll, men ett enskilt exempel visar varken en vanlig effekt eller vad som orsakade omnämnandet."
  },
  {
    "type": "h2",
    "text": "Börja med korrekt information på vanliga sidor"
  },
  {
    "type": "p",
    "text": "Besvara frågor du redan får: vad du gör, var du arbetar, vad som ingår och hur kunden kommer vidare. Visa verkliga referenser och håll pris- och kontaktuppgifter aktuella. Strukturerad data ska beskriva samma innehåll som besökaren kan läsa."
  },
  {
    "type": "p",
    "text": "För Googles AI-funktioner gäller den vanliga SEO-grunden. Google anger inget krav på en särskild AI-fil eller särskild schema-märkning. En sida behöver vara indexerad och kunna visas med ett utdrag för att vara en möjlig stödlänk. Det är ingen garanti att den väljs. Råd för Google är inte automatiskt dokumenterade regler för ChatGPT eller Copilot."
  },
  {
    "type": "checklist",
    "items": [
      "Min viktigaste tjänst har en sida med ett direkt svar på vad jag erbjuder.",
      "Kontaktuppgifter och priser är korrekta på sajten och företagsprofilen.",
      "Viktigt innehåll finns i läsbar text, inte bara i bilder.",
      "Google kan hämta och indexera de sidor som ska vara publika.",
      "Schema beskriver synligt innehåll och används där typen passar."
    ]
  },
  {
    "type": "h2",
    "text": "Gör ett test du kan upprepa"
  },
  {
    "type": "list",
    "title": "Spara förutsättningarna",
    "items": [
      "Skriv ett litet fast urval av verkliga kundfrågor. Ta med tjänst, ort och olika köpbehov. Håll frågor med och utan ditt företagsnamn isär.",
      "Välj de tjänster du ska jämföra och notera produkt, läge och om webbsökning används.",
      "Gör flera separata körningar per fråga. Spara datum, exakt fråga, svar, omnämnda företag och källänkar.",
      "Notera språk, plats och inloggningsläge där det går. Personalisering och produktändringar kan påverka utfallet.",
      "Redovisa antal omnämnanden som andel av just dina körningar. Jämför samma frågor och tjänster när du följer upp."
    ]
  },
  {
    "type": "p",
    "text": "Ett exempel: om ditt företag nämns i två av tio sparade svar är utfallet 2 av 10 i det testet. Det är inte 20 procent av alla kunder eller en generell marknadsandel. Kontrollera också att svaren beskriver företaget rätt, inte bara att namnet finns med."
  },
  {
    "type": "h2",
    "text": "Vanliga frågor"
  },
  {
    "type": "rows",
    "items": [
      {
        "label": "Måste jag ligga i Googles topp tio?",
        "text": "Det finns ingen generell sådan regel för AI-citeringar. Egna samband i ett urval kan vara intressanta, men visar inte ett universellt krav eller orsakssamband."
      },
      {
        "label": "Behöver jag FAQ-schema?",
        "text": "En användbar frågesida kan hjälpa läsaren. Avsaknad av samband i ett eget test bevisar inte att en viss märkning alltid saknar effekt. Välj schema efter innehållet."
      },
      {
        "label": "Kan jag köpa en garanterad rekommendation?",
        "text": "Jag kan förbättra innehåll och tekniska förutsättningar och göra ett dokumenterat test. Jag kan inte lova vilka företag en extern AI-tjänst väljer att rekommendera."
      }
    ]
  },
  {
    "type": "p",
    "text": "Följ även besök, mottagna förfrågningar och affärer. En hänvisande URL kan visa en besökskälla, men identifierar inte alltid hela kundresan. Jämför gärna testresultat med det kunden själv berättar."
  }
];

export default function Page() {
  return <BlogArticle
    category="AI-synlighet"
    h1="Synas i AI-sök: förbättra grunden och mät vad som händer"
    dateDisplay="17 augusti 2026"
    updatedDate="2026-10-04"
    summary="Gör tjänster, priser och företagsuppgifter tydliga och möjliga att hitta. Testa relevanta frågor i flera AI-tjänster och spara svaren. Tydlighet hjälper läsaren men garanterar inget omnämnande."
    breadcrumbName="Synas i AI-sök: förbättra grunden och mät vad som händer"
    sectionLabel="Guider" sectionHref="/guider"
    blocks={blocks}
    sources={[{"title": "Google: AI-funktioner och din webbplats", "href": "https://developers.google.com/search/docs/appearance/ai-features"}]}
    related={[{"title": "AI-synlighet: granskning", "href": "/tjanster/ai-synlighet"}, {"title": "Så fungerar SEO", "href": "/sokmotoroptimering"}, {"title": "Praktisk ChatGPT-guide", "href": "/guider/chatgpt-for-smaforetag"}]}
    cta={{"heading": "Vill du dokumentera din synlighet?", "text": "Jag kan granska tekniken och göra ett avgränsat test av frågor och AI-tjänster. Du får metod, resultat och förslag på nästa steg.", "label": "Beskriv ditt behov", "href": "/kontakt"}}
  />;
}
