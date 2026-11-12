# Tjänstesidor, genomförande 2026-10-04

Status: genomfört i koden och verifierat utan build/deploy. Omfattning: /tjanster och alla nio tjänstesidor.

- ServicePage och ServiceExtra importeras bara av /tjanster. De ingår därför i denna avgränsade runda.
- Två synliga FAQ-delar finns på fem stora tjänstesidor. Facebook och AI-synlighet har dessutom två FAQPage. Förälderns tjänstebreadcrumb ärvs av nio undersidor.
- Google Ads-sidan lovar noll spill och första veckans resultat; kampanjsida 4 900 kr saknar förklarad avgränsning mot paketets sidor.
- Managed visar Bas-pris men lovar genomförda ändringar inom 24 timmar. Central Bas har två arbetsdagar, Bredd en arbetsdag.
- Meta-ingår-i-Spets tas bort: Meta får separat offert och mediebudget.
- Större e-handel behåller 89 000/149 000 kr och drift 2 495 kr/mån; skillnaden mot +800 kr/mån för en mindre butik beskrivs.
- AI-synlighet ska beskriva avtalat frågeurval, AI-tjänster, upprepade körningar, datum och rapportens underlag; inga ranking-/citatgarantier eller AI-poäng från Lighthouse.

Ingen build, devserver, deploy, commit eller push körs av denna deluppgift.


## Genomfört och exakt täckning
- /tjanster: fyra behovsvägar, med förfrågningsrutan som eget erbjudande. Kort lista till specialuppdragen, utan upprepade paket-/FAQ-block och obelagda effekttal.
- /tjanster/webbutveckling: funktioner, innehåll och redaktörsflöde; dokumenterat Linguista-projekt före teknik, standardhemsida skiljs från specialprojekt. Tidplan efter underlag.
- /tjanster/seo: audit 4 900 kr kontra löpande Spets-arbete; nollmätning, konkret leverans och uppföljning. Obelagda universella sid-/recensions-/AI-regler borttagna.
- /tjanster/google-ads: Spets 2 990 kr med separat annonsbudget och rätt avtalslängd; befintligt konto enligt offert. Den generella kampanjsideavgiften 4 900 kr borttagen, arbete utanför omfattningen får offert. Telefonklick skiljs från samtal och affär. Inga första-veckan- eller noll-spill-löften.
- /tjanster/ai-automation: standardrutan 495 kr, 30 dagar gratis, ingen bindning; kalender/system/offertflöden enligt offert. Kvota visas som underlag, utkast, granskning och beslut. Rutans centrala kapacitetsgränser anges.
- /tjanster/managed-hemsida: drift/underhåll på svenska, plattform/konton/åtkomst före övertagande, svarstid skild från genomförd ändring. Bas två arbetsdagar, Bredd en arbetsdag efter rootens slutliga centrala prisuppdatering. Avtalslängd och moms nära priset.
- /tjanster/e-handel: +800-tillägg för mindre butik skiljs från 89 000 kr butiksfront, 149 000 kr full flytt och 2 495 kr/mån drift. Sortiment, språk, migrering och integrationer avgränsas. Obelagd hastighetsgaranti och universell leveranstid tas bort. Betalning vid lansering från tidigare erbjudande behålls.
- /tjanster/wordpress: redigering och underhåll skiljs från migrering. Pris och villkor visas i eget block. Linguista markeras som ett plattformsbyte, inget påhittat WordPress-bygge.
- /tjanster/facebook-annonsering: Meta-arbete enligt separat offert med separat mediebudget, inga Spets-ingår-löften eller generell garanterad leadkostnad.
- /tjanster/ai-synlighet: tidigare auditpris 4 900 kr bevaras. Föreslaget urval av frågor, AI-tjänster och körningar bekräftas före start. Rapporten dokumenterar datum, svar och källor. Teknisk läsbarhet skiljs från faktiska omnämnanden. Ingen topptio-/citat-/rankinggaranti.

## FAQ, schema och metadata
Nio tjänsters synliga FAQ och FAQPage läser samma services-extra-data. ServiceExtra har endast kort metodfördjupning. Förälderns breadcrumb flyttad från layout till /tjanster/page.js, så den inte ärvs av undersidorna. Alla tio URL:er behålls och har egen canonical, Open Graph och Twitter.

## Filer
- Alla page.js/layout.js under app/tjanster samt TjansterContent.jsx och fem befintliga *Content.jsx-wrappers.
- components/ServicePage.jsx och components/ServiceExtra.jsx (importkontroll: endast /tjanster använder dem).
- lib/services-extra.js och lib/local/service-extra-content.json.
- Centrala lib/pricing-packages.js ägs av root och har inte ändrats av denna deluppgift.

## Verifiering
- 29 tjänste-JS/JSX-filer parsade med Next SWC utan syntaxfel.
- Nio datadrivna undersidor kontrollerade för en FAQPage och en BreadcrumbList, unika frågor och identisk synlig FAQ-/schemakälla.
- Förälderns layout renderar inget ärvt schema. Tjänsteindex har eget breadcrumb och inget onödigt FAQPage.
- Tio routefiler kvar. Nio undersidors egna canonical/Open Graph/Twitter kontrollerade och indexmetadata granskad.
- 13 statiska länkmål från erbjudanden, CTA, fördjupning och projekt verifierade i appträdet.
- Bas två arbetsdagar, Bredd en arbetsdag, Meta separat offert, pris/moms/annonsbudget/bindning och större e-handelsteg verifierade programmatiskt.
- Inga långa tankstreck, typografiska citattecken eller dekorativa textpilar i ändrade tjänstefiler/data.
- Ortverifieringen kördes även om efter central Bredd-uppdatering och passerade på nytt för 25 sidor.
- Kontrollskript: /tmp/check-services.cjs. Visuell kontroll, gemensam build och deploy återstår hos root.
