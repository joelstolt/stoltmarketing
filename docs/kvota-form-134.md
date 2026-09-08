# Stolt-formuläret till Kvota,134

2026-09-08. Beställt i Kvotas uppdrag, Stolt Marketing uttryckligen vald som första firma. Kvota äger konto och offert, befintliga t_stoltmarketing äger inkommande kontakter. Inga domän-/prisändringar.

Formuläret sparar först en D1-outbox, sedan skickas samma källreferens till en särskilt nyckelskyddad Svar-API-rutt. Kvota visar original, AI-sammanfattning, redigerbart svar och granskad offertförberedelse. Samma inskick/återförsök får samma ärende. Ordinarie företagsnotis behåller avsändare/mottagare och kan skickas även om Kvota tillfälligt inte svarar. Den får en länk till Kvota. Inga personliga svar skickas automatiskt.

Minutjobbet återtar avbrutna leveranser med lease och stabil Resend-idempotens. Mailförsök stoppas efter18h eller8försök med tydlig osäkerstatus. Färdigbehandlade originalkopior gallras efter30dagar; ofullständiga överföringar behålls för felsökning. Kvotas original följer Kundkontaktens befintliga tenantgallring. Dagliga Sajtvakten behåller sin tidigare körning. Gamla /svar- och /api/svar-länkar och lagrade svar finns kvar. Nya formulär kör inte den gamla separata AI-svarsmotorn också.

Installerat: D1-tabell kvota_form_outbox, KVOTA_FORM_KEY i Stolt-worker och källhash i Svar-API. Ingen ny bred administrativ nyckel i frontend.7 isolerade avbrotts-/dubblett-/mailprov i evidence/kvota-form-134.json. Ingen riktig testsändning till verksamhetens ordinarie notismottagare; det kräver separat testadressbehörighet. Kvotas native134 provar källrutt/AI och ett granskat svar till Joels redan godkända testadress.

Bygg/deploy sker från ren commit, utan de tidigare orelaterade ändringarna i app/robots.js och rank-snapshot.json. Tidigare ocommittade /svar,/api/svar,lib/svarsmotor.js samt SVAR_KV-bindning ingår för att bevara relaterade äldre länkar. Privata originalbaslinjer i Kvotas .secrets/suite134/stolt-before. Fullständiga slutversioner/verifiering dokumenteras i Kvotas docs/suite-contact-134.md.
