"use client";

import BlogArticle from "@/components/BlogArticle";

const blocks = [
  {
    type: "lead",
    text: "SEO behöver inte vara krångligt eller dyrt. Efter 150+ webbprojekt vet jag att de flesta småföretag rankar dåligt av samma enkla anledningar, och att ett fåtal rätt saker gör större skillnad än allt annat tillsammans. Här är 17 konkreta SEO-tips du kan börja med idag.",
  },
  {
    type: "p",
    text: "Ingen teori och inga hack som slutar funka vid nästa Google-uppdatering. Bara sådant som faktiskt flyttar dig uppåt och drar in fler förfrågningar. Ta ett tips i taget, du behöver inte göra allt på en gång.",
  },
  {
    type: "h2",
    text: "Grunderna: det här måste sitta först",
  },
  {
    type: "p",
    text: "Innan du gör något avancerat: se till att basen är på plats. Det är här flest företag tappar poäng helt i onödan.",
  },
  {
    type: "list",
    title: "Tips 1 till 5",
    items: [
      "Ge varje sida en unik titel (title tag) med sökordet först och företagsnamnet sist.",
      "Skriv en lockande metabeskrivning per sida. Den är din gratis annonstext i Google.",
      "Använd en enda tydlig H1 per sida som direkt säger vad sidan handlar om.",
      "Håll URL:erna korta och läsbara, med ord i stället för siffror och koder.",
      "Ge varje tjänst du säljer en egen sida, inte bara en rad på startsidan.",
    ],
  },
  {
    type: "h2",
    text: "Innehåll: skriv för människor som är redo att köpa",
  },
  {
    type: "p",
    text: "Google belönar sidor som faktiskt besvarar det besökaren undrar. Skriv för kunden först, för sökmotorn sen, så får du ofta båda på köpet.",
  },
  {
    type: "list",
    title: "Tips 6 till 10",
    items: [
      "Svara på riktiga kundfrågor: vad kostar det, hur går det till, hur lång tid tar det.",
      "En sida per sökintention. Blanda inte ihop tre ämnen på samma sida.",
      "Uppdatera gamla sidor i stället för att bara skriva nya. Färskt innehåll rankar bättre.",
      "Länka internt mellan dina sidor så Google förstår hur de hänger ihop.",
      "Lägg till bilder med beskrivande alt-text. Det hjälper både SEO och tillgänglighet.",
    ],
  },
  {
    type: "h2",
    text: "Lokalt: syns där dina kunder faktiskt söker",
  },
  {
    type: "p",
    text: "De flesta sökningar från mobilen är lokala. Söker någon efter din tjänst plus din ort vill du finnas där, både i kartan och i den vanliga listan.",
  },
  {
    type: "list",
    title: "Tips 11 till 13",
    items: [
      "Skapa och fyll i en Google Business Profile. Den avgör om du syns i kartresultaten.",
      "Ha med din ort i titlar och rubriker på de sidor där det är relevant.",
      "Håll namn, adress och telefon identiska överallt på nätet, så kallad NAP-konsistens.",
    ],
  },
  {
    type: "tip",
    title: "Recensioner är också lokal-SEO",
    text: "Be nöjda kunder om en recension på Google. Fler och färskare recensioner lyfter både din placering i kartan och andelen som faktiskt hör av sig efter att de hittat dig.",
  },
  {
    type: "h2",
    text: "Teknik och hastighet: ta bort det som håller dig tillbaka",
  },
  {
    type: "p",
    text: "Du behöver inte vara utvecklare, men de här tre sakerna avgör om Google överhuvudtaget kan hitta och gilla din sajt.",
  },
  {
    type: "list",
    title: "Tips 14 till 16",
    items: [
      "Se till att sajten laddar snabbt, särskilt på mobil. Varje sekund kostar dig besökare.",
      "Kontrollera i Google Search Console att dina viktiga sidor faktiskt är indexerade.",
      "Ha en sitemap och en vettig robots-fil så Google hittar allt du vill visa.",
    ],
  },
  {
    type: "h2",
    text: "Trovärdighet: den sista pusselbiten",
  },
  {
    type: "p",
    text: "Google vill ranka företag som verkar seriösa och verkliga. Det sista tipset handlar om just det.",
  },
  {
    type: "list",
    title: "Tips 17",
    items: [
      "Bygg trovärdighet med en riktig om-sida, tydliga case och länkar från lokala aktörer och branschregister.",
    ],
  },
  {
    type: "h2",
    text: "Om du bara har en timme i veckan",
  },
  {
    type: "p",
    text: "Försök inte göra allt samtidigt. Gör du bara de här fem sakerna, i den här ordningen, kommer du längre än de flesta av dina konkurrenter.",
  },
  {
    type: "checklist",
    items: [
      "Google Business Profile ifylld och verifierad.",
      "Unika titlar och metabeskrivningar på dina viktigaste sidor.",
      "En egen sida per tjänst med svar på de vanligaste kundfrågorna.",
      "En snabb sajt på mobil.",
      "Be om en recension efter varje nöjd kund.",
    ],
  },
  {
    type: "p",
    text: "SEO är ett maraton, inte en sprint. Men det fina är att arbetet du gör nu fortsätter dra in kunder i åratal, utan att du betalar för varje klick. Börja idag med tips 1, så är du redan igång.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      category="SEO"
      h1="17 SEO-tips för småföretag som faktiskt ger resultat"
      dateDisplay="18 juli 2026"
      readTime="11 min"
      breadcrumbName="17 SEO-tips"
      blocks={blocks}
      related={[
        { title: "SEO för småföretag: 7 steg som fungerar", href: "/blogg/seo-for-smaforetag" },
        { title: "Teknisk SEO: nybörjarguiden", href: "/blogg/teknisk-seo-guide" },
        { title: "SEO-tjänster", href: "/tjanster/seo" },
      ]}
      cta={{
        heading: "Vill du ha en SEO-plan gjord för ditt företag?",
        text: "Boka en kostnadsfri genomgång så prioriterar vi de tips som ger mest för just din bransch och ort.",
      }}
    />
  );
}
