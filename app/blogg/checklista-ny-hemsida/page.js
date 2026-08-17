"use client";

import { ArrowRight, ArrowLeft, Clock, Calendar, Check, X, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/ui";

export default function Article() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="hero-dark relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 sm:pb-20">
            <Reveal>
              <nav className="flex items-center gap-2 text-[13px] text-muted mb-6">
                <a href="/" className="hover:text-heading transition-colors">Start</a>
                <span className="text-border">·</span>
                <a href="/blogg" className="hover:text-heading transition-colors">Blogg</a>
                <span className="text-border">·</span>
                <span className="text-heading font-500">Checklista go-live</span>
              </nav>
            </Reveal>
            <Reveal delay={0.04}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-600 tracking-wide text-primary bg-primary-light border border-primary/10 uppercase mb-4">
                Guide
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading font-600 text-[clamp(28px,4.5vw,44px)] leading-[1.1] tracking-[-0.012em] text-heading mb-5">
                Lansera ny hemsida: 25-punkters checklista innan du går live
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> 18 augusti 2026
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> 9 min läsning
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Article */}
        <article className="py-12 sm:py-16 px-5 sm:px-8">
          <div className="max-w-3xl mx-auto">

            <p className="text-[17px] text-body leading-relaxed mb-6">
              Du har lagt veckor på en ny sajt. Den är snygg, texten sitter, allt känns klart. Och det är precis här de flesta tappar pengar utan att märka det: i själva lanseringen. En kvarglömd noindex-tagg, en bruten omdirigering eller ett formulär som tyst slutar skicka kan kosta dig kunder i flera månader innan du ens fattar att något är fel.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Efter 150+ lanseringar under tio år har jag sett samma misstag om och om igen, och nästan alla är osynliga. Sidan ser perfekt ut i webbläsaren medan Google avindexerar dig eller leadsen försvinner i tomma intet. Den här checklistan går igenom de 25 punkter jag bockar av på varje go-live, grupperade så att du kan ta dem i tur och ordning. Spara den och kör igenom hela listan innan du trycker på publicera.
            </p>

            {/* Section 1: Varför lansering är där leads tappas tyst */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Därför tappas flest kunder just vid lanseringen
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Under bygget lever sajten oftast på en testadress som är blockerad för Google, med spårning avstängd och formulär som pekar åt sidan. Det är helt rätt medan man jobbar. Problemet är att flera av de inställningarna ska vändas tvärtom vid lansering, och gör du inte det så märks det inte i webbläsaren. Sidan ser identisk ut oavsett om Google får indexera den eller inte.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              De tre klassiska tysta misstagen är: noindex som glömdes kvar från testmiljön så att Google plockar bort dig ur sökresultatet, gamla adresser som inte får någon omdirigering så att all rankinghistorik nollställs, och spårning som aldrig aktiverades så att du inte har en aning om var besökarna tar vägen. Inget av det ger ett felmeddelande. Du ser det bara på att telefonen slutar ringa.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Den vanligaste tabben: noindex följer med</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Testmiljöer sätts nästan alltid till noindex så att de inte hamnar på Google i förtid. När sajten flyttas till den skarpa domänen glöms den inställningen kvar, och då tar Google bort dig ur sökresultatet inom några veckor. Kontrollera robots-taggen på den riktiga adressen efter lansering, inte bara i testmiljön.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Innehåll och SEO */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Innehåll och SEO: det Google ser först
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Det här är grunden för att en ny sida över huvud taget ska kunna ranka. Poängen är att varje sida ska vara begriplig för Google på egen hand: vad handlar den om, för vem, och varför ska den visas. Det avgörs långt innan någon läser en enda mening av din brödtext.
            </p>

            <div className="bg-surface border border-border rounded-xl p-5 mb-6">
              <p className="text-[15px] font-700 text-heading mb-3">Bocka av per sida:</p>
              <div className="space-y-2">
                {[
                  "Unik och beskrivande sidtitel på varje sida, med det viktigaste ordet först och gärna under 60 tecken",
                  "En meta-beskrivning som lockar till klick, satt per sida (inte samma text överallt)",
                  "Exakt en H1 per sida som säger vad sidan handlar om",
                  "Alt-text på alla bilder som betyder något, för både Google och skärmläsare",
                  "Rätt delningsbild och delningstext så att länken ser bra ut i sociala medier och chattar",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                    <span className="text-[15px] text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              En detalj som sänker fler sajter än man tror: canonical-taggen. Den ska sättas per sida och peka på sidan själv. Sätts den i stället globalt för hela sajten pekar varje undersida tillbaka på startsidan, och då säger du åt Google att alla dina sidor egentligen är samma sida. Resultatet är att undersidorna aldrig rankar. Kontrollera att varje viktig sida har sin egen canonical mot sin egen adress.
            </p>

            {/* Section 3: Teknik */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Teknik: tappa inte det du redan byggt upp
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Byter du ut en befintlig sajt sitter det år av rankinghistorik på de gamla adresserna. Om de gamla adresserna slutar fungera utan att du skickar besökaren vidare, så förlorar du både placeringarna och de som klickar på din gamla länk i Google. Lösningen är permanenta omdirigeringar (301) från varje gammal adress till motsvarande ny sida.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-primary uppercase tracking-wide mb-3">Gör</p>
                <div className="space-y-2">
                  {[
                    "301-omdirigera varje gammal adress till rätt ny sida",
                    "Testa varje omdirigering med efterföljande snedstreck",
                    "Lämna in en färsk sitemap i Search Console",
                    "Bygg en egen 404-sida som leder vidare",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface border border-border rounded-xl p-5">
                <p className="text-[13px] font-700 text-red-500 uppercase tracking-wide mb-3">Undvik</p>
                <div className="space-y-2">
                  {[
                    "Skicka alla gamla adresser rakt till startsidan",
                    "Lita på redirects utan att klicka dig igenom dem",
                    "Lämna kvar en Disallow som blockerar hela sajten",
                    "Släppa live utan att testa på riktig mobil",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <X size={14} className="text-red-400 mt-1 flex-shrink-0" />
                      <span className="text-[14px] text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              En fälla värd att nämna extra: en omdirigering som saknar efterföljande snedstreck matchar ofta inte den form som ligger i Googles index. Det gör att en redirect du tror är på plats i själva verket landar i en 404. Testa därför alltid med adressen precis som den ser ut i Google, med snedstreck på slutet.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Sen kommer hastighet och mobil. Merparten av dina besökare är på telefon, och en trög sida tappar folk innan den ens laddat klart. Kör den skarpa adressen genom ett hastighetstest, titta särskilt på hur snabbt det största elementet högst upp dyker upp, och öppna varje sidtyp på en riktig mobil. Se också till att allt går via https och att låset i adressfältet är grönt.
            </p>

            {/* Section 4: Spårning och mål */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Spårning och mål: annars flyger du blint
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Utan spårning vet du inte om lanseringen gick bra eller dåligt. Du gissar. Och gissningar går inte att förbättra. Det viktiga är inte att samla mest data, utan att kunna svara på två frågor: kommer det folk, och hör de av sig. Sätt upp det här innan du släpper live, inte efteråt.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { tool: "Webbanalys installerad", what: "Ett analysverktyg på plats så att du ser antal besökare, varifrån de kommer och vilka sidor de tittar på. Glöm inte att lägga till själva sajten i verktyget, annars registreras ingenting." },
                { tool: "Lead-händelse vid formulärsändning", what: "En egen händelse som triggas när ett formulär faktiskt gått iväg, taggad med vilken sida den skickades från. Då ser du inte bara att någon hört av sig, utan varifrån affären kom." },
                { tool: "Search Console verifierad", what: "Koppla domänen till Google Search Console och lämna in sitemapen. Det är här du ser vad du börjar ranka på och får larm om Google hittar tekniska fel." },
                { tool: "Mål och avhopp", what: "Definiera vad en lyckad besökare gör (skickar formulär, ringer, bokar) så att du kan se var i flödet folk faller ifrån och åtgärda just det steget." },
              ].map((item) => (
                <div key={item.tool} className="bg-surface border border-border rounded-xl p-5">
                  <p className="text-[15px] font-700 text-heading mb-1">{item.tool}</p>
                  <p className="text-[14px] text-body leading-relaxed">{item.what}</p>
                </div>
              ))}
            </div>

            {/* Section 5: Formulär och konvertering */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Formulär och konvertering: testa att det landar
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Kontaktformuläret är hela poängen med de flesta företagssajter, och ändå är det den punkt som testas slarvigast. Skicka ett riktigt testmeddelande genom varje formulär på sajten och kontrollera att det faktiskt dyker upp i inkorgen. Det räcker inte att sidan säger tack. Ett formulär kan visa en bekräftelse för besökaren samtidigt som mejlet aldrig kommer fram.
            </p>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Verifiera leveransen i utskickstjänstens egen logg, inte bara på att sidan svarade att allt gick bra. Ett lyckat svar från servern betyder att meddelandet togs emot för sändning, inte att det nådde din inkorg. Och ge besökaren en tydlig tack-sida eller bekräftelse efteråt, dels för att hen ska känna sig trygg, dels för att du ska kunna räkna en sändning som ett mål i din spårning.
            </p>

            <div className="bg-primary-subtle border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[15px] font-700 text-heading mb-1">Spamskydd som inte äter dina riktiga leads</p>
                  <p className="text-[14px] text-body leading-relaxed">
                    Ett dolt honungsfält är ett enkelt och effektivt spamskydd, men bara om det är rätt döpt. Heter det fält som webbläsaren gärna autofyller, som namn, företag, webbplats eller e-post, så fyller besökarens autofyll i det åt hen, och då kastas riktiga förfrågningar bort tyst. Ge fältet ett neutralt namn och göm det så att autofyll inte triggar det.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Juridik och förtroende */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Juridik och förtroende: det som gör dig trovärdig
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Den sista biten handlar om att sajten ska vara både laglig och trovärdig. En besökare som är osäker på om du är ett riktigt företag hör inte av sig, och saknad grundjuridik kan bli dyrt i onödan. Det här är snabba punkter att fixa, men lätta att missa i lanseringsstressen.
            </p>

            <div className="space-y-3 mb-8">
              {[
                "Cookiebanner som frågar om samtycke innan spårning startar, inte efter",
                "Integritetspolicy publicerad och länkad i sidfoten",
                "Fullständiga kontaktuppgifter synliga: organisationsnummer, adress, telefon och e-post",
                "Telefonnummer och e-postadresser klickbara, så mobilanvändaren kan ringa direkt",
                "SSL aktivt så att låset i adressfältet är grönt på varje sida",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check size={14} className="text-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[15px] text-body">{item}</span>
                </div>
              ))}
            </div>

            {/* Section 7: Hela checklistan */}
            <h2 className="text-[22px] sm:text-[26px] font-600 text-heading font-heading tracking-tight mt-12 mb-5">
              Hela 25-punkters checklistan att bocka av
            </h2>

            <p className="text-[16px] text-body leading-relaxed mb-4">
              Här är allt samlat i en lista du kan gå igenom uppifrån och ner sista dagen före lansering. Gå inte live förrän varje rad är bockad.
            </p>

            <div className="space-y-2 mb-8">
              {[
                "☐ 1. Unik, beskrivande sidtitel på varje sida",
                "☐ 2. Egen meta-beskrivning per sida",
                "☐ 3. Exakt en H1 per sida med rätt sökord",
                "☐ 4. Alt-text på alla bilder som betyder något",
                "☐ 5. Canonical satt per sida, mot sidan själv (inte mot startsidan)",
                "☐ 6. Delningsbild och delningstext satta",
                "☐ 7. 301-omdirigeringar från alla gamla adresser till rätt ny sida",
                "☐ 8. Varje omdirigering testad med efterföljande snedstreck",
                "☐ 9. Sitemap genererad och inlämnad i Search Console",
                "☐ 10. robots släpper in Google (ingen kvarglömd blockering)",
                "☐ 11. noindex borttaget på den skarpa domänen",
                "☐ 12. Egen 404-sida som leder besökaren vidare",
                "☐ 13. Snabb på mobil, kollad i ett hastighetstest",
                "☐ 14. SSL aktivt, allt går via https",
                "☐ 15. Webbanalys installerad och sajten tillagd i verktyget",
                "☐ 16. Lead-händelse triggas vid lyckad formulärsändning",
                "☐ 17. Search Console verifierad",
                "☐ 18. Mål uppsatta så du ser var folk hoppar av",
                "☐ 19. Testmeddelande skickat genom varje formulär",
                "☐ 20. Leverans verifierad i utskicksloggen, inte bara på serversvaret",
                "☐ 21. Tack-sida eller tydlig bekräftelse efter sändning",
                "☐ 22. Spamskydd på plats, med ett honungsfält som inte autofylls",
                "☐ 23. Cookiebanner som frågar innan spårning startar",
                "☐ 24. Integritetspolicy publicerad och länkad",
                "☐ 25. Kontaktuppgifter synliga och klickbara på varje sida",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-surface border border-border rounded-lg">
                  <span className="text-[15px] text-body flex-1">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-[16px] text-body leading-relaxed mb-8">
              Känns listan lång? Det är den med flit. En lansering är inte platsen att chansa, för misstagen kostar tyst och upptäcks sent. Går du igenom de här 25 punkterna varje gång slipper du den vanligaste sortens huvudvärk: en ny, fin sajt som ingen hittar och ingen hör av sig till.
            </p>

            {/* Related */}
            <h3 className="text-[17px] font-700 text-heading mt-12 mb-3">Läs också</h3>
            <div className="space-y-2 mb-2">
              {[
                { title: "Vad kostar en hemsida 2026?", href: "/vad-kostar-en-hemsida" },
                { title: "Varför en snabb hemsida ger fler kunder", href: "/blogg/varfor-snabb-hemsida" },
                { title: "Webbutveckling och design", href: "/tjanster/webbutveckling" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block bg-surface-muted hover:bg-surface border border-border rounded-lg p-4 transition-colors"
                >
                  <span className="text-[14px] font-600 text-heading hover:text-primary transition-colors">
                    {link.title} →
                  </span>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-surface-dark rounded-2xl px-6 sm:px-8 py-8 sm:py-10 mt-12">
              <h3 className="text-[22px] sm:text-[26px] font-600 text-white font-heading tracking-tight mb-3">
                Ska du snart lansera en ny sajt?
              </h3>
              <p className="text-[15px] text-white/60 leading-relaxed mb-6">
                Vi bygger, kvalitetssäkrar och lanserar utan att tappa ranking eller leads. Boka en kostnadsfri genomgång.
              </p>
              <a href="/boka" className="premium-btn">
                <span>Boka kostnadsfri genomgång</span>
                <ArrowRight size={16} className="opacity-80" />
              </a>
            </div>

            {/* Back */}
            <div className="mt-10 pt-6 border-t border-border">
              <a href="/blogg" className="inline-flex items-center gap-2 text-[14px] text-muted hover:text-heading transition-colors font-500">
                <ArrowLeft size={16} /> Alla artiklar
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
