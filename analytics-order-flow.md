# Bestelfunnel

Implementatie: 26 oktober 2026. Publicatieversie: zie de Gitgeschiedenis en de centrale projectstatus.

| Event | Betekenis | Parameters |
| --- | --- | --- |
| `order_form_start` | Eerste focus/klik in een formulier; maximaal eenmaal per gemount formulier | `form_type`: consumer/business |
| `order_selection` | Een aantal, aantalsband, service of studententarief gewijzigd | `form_type`, `selection`: knife_quantity/estimate_band/service/student_rate |
| `order_validation_error` | Aanvraag geblokkeerd door ontbrekende/ongeldige invoer | `form_type`, `field`: gecontroleerde veldcategorie, nooit de invoer |
| `request_open` | Gevalideerd WhatsApp-/e-mailconcept aangeboden aan de eigen app | `form_type`, `contact_method`: whatsapp/email, `request_status`: draft_opened_not_sent |

Namen, telefoon, zaaknaam, postcode, adres, opmerkingen en berichtinhoud worden niet meegestuurd. Bestaande Google Advanced Consent Mode blijft behouden. Zonder toestemming voor statistiekopslag gelden de bestaande beperkte cookieloze metingen, geen nieuwe opslag.

`request_open` vervangt `generate_lead` uit de twee formulieren. Gebruik dit na publicatie in GA4-verkenningen en vergelijk de twee doelgroepen en apparaatcategorieën apart. Bestaande contact-/navigatie-events blijven bestaan. Stel een geopend concept niet gelijk aan een verzonden bericht, ontvangen aanvraag, betaling of omzet. Slijpmaat heeft hiervoor geen automatische terugkoppeling uit WhatsApp of de eigen mailapp. Vergelijk ontvangen aanvragen/orders apart met het operationele orderoverzicht; voeg geen klantgegevens aan Analytics toe.

## Controle

- `npm run test:order-flow`: telefoonvalidatie en eventcontract.
- `npm run test:analytics`: bestaande toestemming en taginitialisatie.
- `scripts/verify-order-flow.mjs`: lokale productiepreview, 320/390/1280 px, bonnen, validatie, toetsenbord, conceptoverdracht en video. Playwright is testgereedschap, geen productieafhankelijkheid; gebruik een geïnstalleerde versie of stel `SLIJPMAAT_PLAYWRIGHT_MODULE` in op het importeerbare pad van de beschikbare runtime.
- Voor eventtests: bouw lokaal met tijdelijk `VITE_GA_MEASUREMENT_ID=G-LOCALTEST`, zet `SLIJPMAAT_REQUIRE_ANALYTICS=true` bij de browsertest en blokkeer extern verkeer (het script doet dit standaard). Verwijder het test-ID en bouw opnieuw na afloop. Nooit een test-ID naar de productieconfiguratie kopiëren.

De browsercontrole vangt WhatsApp-openacties af en leest de mailto-navigatie; hij verstuurt geen berichten. Het e-mailconcept is gericht aan `slijpmaat@outlook.com`; de bezoeker verstuurt het vanuit diens eigen e-mailapp/account.
