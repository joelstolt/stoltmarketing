import BlogArticle from "@/components/BlogArticle";

const blocks = [
  {
    "type": "lead",
    "text": "Recensioner hjälper en ny kund att bedöma ditt företag. Google tar också hänsyn till dem i lokala sökresultat, tillsammans med relevans och avstånd. Ett visst antal omdömen garanterar ingen placering."
  },
  {
    "type": "h2",
    "text": "Hämta en länk som kunden kan använda direkt"
  },
  {
    "type": "list",
    "title": "Gör så här i Google Företagsprofil",
    "items": [
      "Öppna den Google Företagsprofil du hanterar och välj Läs recensioner eller Recensioner.",
      "Välj Få fler recensioner och kopiera länken. Menynamn kan variera mellan vyer.",
      "Dela länken i ditt avslutande mejl eller SMS. Du kan också använda profilens QR-kod om den visas i din vy.",
      "Testa länken och eventuell QR-kod på mobilen. Kontrollera att rätt företag visas och att kunden kan lämna ett omdöme."
    ]
  },
  {
    "type": "h2",
    "text": "Be alla verkliga kunder på samma sätt"
  },
  {
    "type": "p",
    "text": "Välj en bestämd tidpunkt efter ett avslutat uppdrag, till exempel i slutmejlet. Fråga inte först om kunden är nöjd för att sedan ge bara nöjda kunder recensionslänken. Hantera gärna synpunkter direkt, men gör möjligheten att lämna ett offentligt omdöme lika för alla."
  },
  {
    "type": "code",
    "title": "Exempel på SMS efter ett avslutat uppdrag",
    "text": "Hej [förnamn]! Tack för att jag fick hjälpa dig med [uppdraget]. Om du vill får du gärna lämna ett ärligt omdöme om din upplevelse här: [recensionslänk]. Alla synpunkter är välkomna. Hälsningar, [ditt namn]"
  },
  {
    "type": "p",
    "text": "Det är frivilligt att recensera. Pressa inte kunden att skriva på plats, be inte om ett visst betyg och diktera inte vad recensionen ska innehålla. En enkel skylt med länken eller QR-koden kan ge samma möjlighet till alla kunder."
  },
  {
    "type": "h2",
    "text": "Skilj Googles regler från marknadsföringslagen"
  },
  {
    "type": "tip",
    "title": "Google förbjuder belöningar och selektivt efterfrågade positiva omdömen",
    "text": "Ge inte rabatt, gåva, betalning eller annan förmån i utbyte mot en Google-recension. Regeln gäller oavsett betyg. Erbjud inte heller ersättning för att kunden ändrar eller tar bort en negativ recension. Google förbjuder också att företag motverkar negativa omdömen eller selektivt efterfrågar positiva."
  },
  {
    "type": "p",
    "text": "Marknadsföringslagen 12 c § handlar om information: den som ger konsumenter tillgång till produktrecensioner ska berätta om och hur det säkerställs att omdömena kommer från personer som använt eller köpt produkten. Paragrafen är inte ett generellt rabattförbud. Om du visar recensioner på din egen sajt behöver informationen om ursprung och eventuell kontroll stämma med hur du faktiskt arbetar."
  },
  {
    "type": "h2",
    "text": "Svara utan att lämna ut kunduppgifter"
  },
  {
    "type": "compare",
    "left": {
      "title": "Gör",
      "items": [
        "Tacka för återkopplingen.",
        "Bemöt kritik lugnt och sakligt.",
        "Erbjud en kontaktväg för att reda ut problemet.",
        "Rapportera innehåll som bryter mot Googles policy."
      ]
    },
    "right": {
      "title": "Undvik",
      "items": [
        "Publicera ordernummer, avtal eller privata detaljer.",
        "Kräva att kritik tas bort för att kunden ska få hjälp.",
        "Lova belöning för att ändra ett betyg.",
        "Påstå att en negativ recension måste vara falsk."
      ]
    }
  },
  {
    "type": "h2",
    "text": "Följ rutinen, inte bara stjärnorna"
  },
  {
    "type": "checklist",
    "items": [
      "Recensionslänken öppnar rätt företag.",
      "Samma rutin används efter avslutade uppdrag, oavsett kundens omdöme.",
      "Meddelandet efterfrågar en ärlig upplevelse utan belöning.",
      "Jag har en rutin för att läsa och svara på synpunkter.",
      "Eventuella recensioner på min egen sajt har korrekt information om ursprung."
    ]
  },
  {
    "type": "p",
    "text": "Följ hur många kunder du bjuder in och hur många nya omdömen som kommer. Det visar om rutinen används. En förändrad kartplacering kan samtidigt påverkas av flera faktorer och bevisar inte effekten av recensionerna ensamt."
  }
];

export default function Page() {
  return <BlogArticle
    category="Lokal synlighet"
    h1="Fler Google-recensioner: en neutral rutin efter varje uppdrag"
    dateDisplay="17 augusti 2026"
    updatedDate="2026-10-04"
    summary="Hämta Googles recensionslänk och be verkliga kunder om ett ärligt omdöme. Använd samma rutin oavsett om kunden är nöjd. Ge inga belöningar och påverka inte betyget."
    breadcrumbName="Fler Google-recensioner: en neutral rutin efter varje uppdrag"
    sectionLabel="Guider" sectionHref="/guider"
    blocks={blocks}
    sources={[{"title": "Google: få fler recensioner", "href": "https://support.google.com/business/answer/3474122"}, {"title": "Google: regler för recensioner", "href": "https://support.google.com/contributionpolicy/answer/7400114"}, {"title": "Google: lokal ranking", "href": "https://support.google.com/business/answer/7091"}, {"title": "Riksdagen: marknadsföringslagen, 12 c §", "href": "https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/marknadsforingslag-2008486_sfs-2008-486/"}]}
    related={[{"title": "Google Företagsprofil: guide", "href": "/blogg/google-business-profile-guide"}, {"title": "Lokal SEO", "href": "/blogg/lokal-seo-guide"}]}
    cta={{"heading": "Vill du få en enkel recensionsrutin på plats?", "text": "Jag hjälper dig med rätt länk, QR-kod och ett neutralt meddelande efter avslutade uppdrag. Beskriv hur du följer upp kunder i dag.", "label": "Skriv till Joel", "href": "/kontakt"}}
  />;
}
