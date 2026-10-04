# Read-only QA av rootändringar 2026-10-04

Granskade filer: components/Header.jsx, ContactWidget.jsx, ChatWidget.jsx, InquiryForm.jsx, components/ui.jsx och app/boka/BokaContent.jsx. Även anropskontrakt i /api/contact, /api/chat och /api/calendar-url lästa. Inga egna kodändringar i dessa filer och inga formulär-/bokningsutskick.

## Hittade och rättade av root under granskningen

1. P2, ChatWidget.jsx, tidigare rader 15-41: en ny sajtkoll återställde kontext/intro medan den äldre strömmen fortsatte att skriva över meddelandena. Root har lagt till AbortController, generationskontroll, avbrott vid close/unmount och återställning av input vid fel. Granskad slutversion har guard före strömuppdatering, catch och finally.
2. P2, BokaContent.jsx, rad 119: hela tidpanelen villkorades på aktuell flik. Fallbackformuläret för tidsönskemål avmonterades därför vid flikbyte och tappade utkast eller ännu inkommande kvittens. Root har tagit bort path-villkoret; formuläret ligger kvar i hidden-panelen.
3. P2, ContactWidget.jsx, tidigare rader 24-35: varje body-childList-mutation stängde en aktiv ruta och satte inert=false på vanliga sidor, vilket kunde skriva över mobilmenyns inert-status. Reproducerat med mockade React-effects/DOM utan nätverk. Root har ändrat till observer som disconnectar när elementet hittats, pathname-/menybaserad stängning och gemensam stolt-menu:change-hantering. Header äger main/footer, ContactWidget äger widgetens hidden/inert.
4. Skip-linkens mål saknades på flera nya page-wrappers. Root körde global id-runda. Ort- och tjänstefilerna har nu main-content. Vid senaste kontroll kvarstod app/blogg/page.js, som bloggagent/root hanterar; även fyra privata analysrapporter saknade id, men ingår inte i den publika sidomfattningen.

## Ytterligare rättat fynd

P3, InquiryForm.jsx rad 27 och 40, mot app/api/contact/route.js rader 74-77: namn tillåter 200 tecken och genererad _subject kunde därför överstiga API:ts gräns på 200 tecken. Root har nu lagt till .slice(0, 200) på den genererade ämnesraden. Slutversionen är läst och rättningen bekräftad. Ingen egen kodändring. Inga kvarvarande funktionella fynd i de sex granskade filerna.

## Positiva kontroller och avgränsningar

- Korrekthet: formuläret kräver både HTTP-framgång och result.reference. API:t returnerar reference efter sparande i D1-outbox. Tysta spamavvisningar utan reference visas därför inte som vanlig lyckad inskickning. Kvittensen betyder lagrad förfrågan, inte verifierad Resend-leverans. Verklig leverans måste fortfarande kontrolleras i Resend-loggen vid ett godkänt test.
- Fokus/tangentbord: Header hanterar Escape, Tab/Shift+Tab, focus tillbaka till menyknapp och återställning av main/footer-inert. Bokningsflikar har aria-selected, kontrollerade paneler och pil/Home/End-stöd. InquiryForm har kopplade labels, autocomplete, mobilstapling, native validering, alert vid fel och fokus till kvittens. Chatten använder native dialog/showModal.
- Widgetkontrakt: den publika widget.js hämtades read-only till /tmp/stolt-widget-review.js. Aktuell kod stödjer data-load=click, data-open-policy=manual, svarslagret-widget.close() och window.SvarslagretWidget. Elementet skapas omedelbart efter document.readyState=complete eller efter window.load. Koden exekverades inte i ett webbläsarfönster.
- Widgetlifecycle efter rättning: mockade kontroller bekräftar observer-disconnect, normal route, menyöppning/stängning, asynkront element som tillkommer efter menyöppning och fortsatt suppression på /kontakt.
- UI: PageHero-rendering synlig direkt, uttrycklig highlight, compact och valbar CTA. Reveal börjar inte på opacity 0 och tar hänsyn till reduced-motion.
- Säkerhet: inga nya direkt exekverade HTML-strängar hittades i dessa formulär/chatkomponenter. Serveranropskontrakten har granskats men detta är inte en full backend-/nyckelrevision.
- Prestanda/underhåll: observers och menylyssnare städas, chatrequest kan avbrytas. En återanvänd InquiryForm ersätter duplicerade kontaktimplementationer.

## Körda kontroller

Next SWC parsade samtliga sex rootfiler utan syntaxfel. /tmp/check-root-review-fixed.cjs verifierade widgetens nya lifecycle med mockad DOM. /tmp/check-root-review.cjs dokumenterar reproduktionen av den tidigare buggen och subject-längdsmismatchen. Ort-/tjänstkontrollerna är separata checkpoints.

Ingen build, devserver, deploy, commit, push, live-interaktion, bokning eller Resend-utskick kördes av denna QA. Root ansvarar för den gemensamma build-/deploy-/livekontrollen.
