# Slijpmaat website — audit, prioriteiten en voortgang

Peildatum: 7 oktober 2026  
Veilige basis: GitHub-commit `164933d` (`main`)

## Besloten werkvolgorde

1. Ontwerp, werking en responsive kwaliteit.
2. Paginastructuur, SEO en migratie.
3. Privacy, cookies en juridische aansluiting op de echte techniek.
4. Beveiliging en veilige verwerking van aanvragen.
5. Metingen, snelheid en toegankelijkheid.
6. Lancering en onderhoud.
7. Volledige Engelse vertaling als laatste fase.

## Technische inventarisatie

### Basis

- React 19, TypeScript, Vite 8 en Tailwind CSS 4.
- De site is een volledig client-side opgebouwde single-page-app.
- Navigatie gebruikt zelfgebouwde `#hash`-routes in `App.tsx`; er is geen routerpakket.
- Er is geen server-API, database of formulierdienst aanwezig.
- Er is geen productie-hostingconfiguratie in de repository vastgelegd.
- De productiebuild werkt. De JavaScript-bundel is circa 543 kB vóór gzip en vraagt later om opsplitsing.

### Pagina's en routes

Actief: home, particulier, zakelijk/horeca, werkwijze, servicegebied, blogs, artikel, over ons, FAQ, contact, voorwaarden en privacy. Enkele oude of ongebruikte paginaonderdelen staan nog in de broncode en moeten later gecontroleerd en opgeruimd worden.

De huidige hashroutes zijn bruikbaar voor de lokale proefsite, maar niet geschikt als definitieve SEO-structuur. Zoekmachines zien geen afzonderlijke normale URL's per pagina. Artikelen hebben bovendien geen eigen blijvende URL op basis van hun slug.

### Formulieren en klantgegevens

- De particuliere calculator berekent lokaal en opent een vooraf ingevuld WhatsApp-bericht.
- De postcodecheck rekent uitsluitend in de browser en slaat geen postcode op.
- Het contactformulier en zakelijke formulier deden vóór deze audit alleen alsof een bericht was verzonden. Ze openen nu een ingevuld WhatsApp-bericht; de bezoeker controleert en verstuurt dit zelf.
- Er worden geen aanvragen naar een eigen server of database gestuurd.
- Tijdelijke invoer blijft alleen in React-state in het browsergeheugen.
- De taalvoorkeur staat in `localStorage`; de huidige taaloplossing schrijft daarnaast een `googtrans`-cookie.

### Externe diensten

- WhatsApp voor aanvragen en contact.
- Google Maps/Bedrijfsprofiel en Google-reviewlink.
- Google Fonts wordt bij paginalaad extern opgehaald.
- Instagram en Facebook via gewone uitgaande links.
- Algemene voorwaarden en privacyverklaring linken momenteel naar Google Docs.
- Geen analytics, advertentiepixel of andere meettracker aangetroffen.
- Geen ingesloten Instagram-, Maps- of YouTube-frame in de actieve pagina's aangetroffen.

### Taalwissel

De site combineert centrale vertalingen met een DOM-vertaler, `localStorage` en oude Google Translate-cookielogica. Niet alle zichtbare teksten zitten in centrale taalbestanden. Dit wordt bewust pas in de laatste fase herbouwd en volledig gecontroleerd.

### SEO en rendering

- Eén statische titel en metabeschrijving voor de volledige app.
- Eén statisch LocalBusiness-schema in `index.html`.
- Geen unieke metadata, canonicals of social metadata per pagina.
- Geen `robots.txt`, sitemap of echte 404-pagina.
- Belangrijke pagina-inhoud ontstaat pas na JavaScript-rendering.
- Geen `/en/`-structuur.

### Privacy en cookies

- Geen analytische of marketingcookies aangetroffen.
- Wel een taalvoorkeur in lokale opslag en een `googtrans`-cookie.
- Google Fonts maakt direct een externe verbinding.
- Er is nog geen cookie-inventaris, voorkeurenpaneel of mechanisme om toestemming in te trekken.
- De juridische pagina's moeten later worden herschreven op basis van de definitieve techniek en bevestigde bedrijfsgegevens.

### Beveiliging

- Geen echte API of server-side verwerking aanwezig; daardoor ontbreken ook servervalidatie, spambeperking en rate limiting.
- Geen echte geheime sleutel in de broncode aangetroffen.
- `.env.example`, `metadata.json` en meerdere dependencies bevatten nog oude AI Studio/Gemini-resten die niet door de actieve site worden gebruikt.
- Securityheaders en Content Security Policy zijn nog niet geconfigureerd.
- De WhatsApp-calculatorprijs wordt uitsluitend in de browser berekend en moet als schatting worden behandeld totdat Slijpmaat de aanvraag bevestigt.

### Snelheid en responsive risico's

- Grote bronafbeeldingen van circa 4,7–5,3 MB.
- Video van circa 3,7 MB.
- Meerdere kaartbestanden waarvan niet allemaal duidelijk is of ze nog nodig zijn.
- Geen routegebaseerde code-splitting.
- Mobiele controle moet per actieve pagina op minimaal 320, 375 en 390 px gebeuren; desktop op minimaal 1280 en 1440 px.

## Prioriteiten

### P0 — noodzakelijk vóór lancering

- [x] Veilige GitHub-back-up van de huidige werkende site.
- [x] Misleidende succesmeldingen uit contact- en zakelijke formulieren verwijderen.
- [x] Contact- en zakelijke formulieren functioneel koppelen aan door de bezoeker te versturen WhatsApp-berichten.
- [x] Kapotte interne sprongen naar zakelijk formulier, FAQ en blogoverzicht herstellen.
- [x] Maatgrens corrigeren: normaal 15–19,99 cm; groot begint bij 20 cm.
- [x] Onbevestigde btw-, betaaltermijn-, postverzending- en garantieclaims neutraliseren.
- [x] Alle actieve routes functioneel testen op mobiel en desktop.
- [x] Alle CTA's, formulieren, calculatorstappen en foutmeldingen end-to-end testen.
- [ ] Pagina's controleren op horizontale overflow, afbrekende tekst en te kleine aanraakvlakken.
- [x] Formulierlabels technisch koppelen aan invoervelden en toetsenbord-/focusgedrag controleren.
- [ ] Definitieve actieve pagina's en dubbele/ongebruikte componenten opschonen.
- [ ] Besluiten en implementeren welke hosting en normale URL-structuur de React-site krijgt.
- [ ] Juridische en fiscale gegevens bevestigen voordat voorwaarden en betaalteksten definitief worden.

### P1 — daarna verbeteren

- [ ] SEO-paginastructuur, H1/H2-overzicht en unieke metadata per pagina uitwerken.
- [ ] Normale URL's en artikel-slugs implementeren; redirecttabel voor oude routes maken.
- [ ] Canonicals, structured data, `robots.txt`, sitemap en echte 404 toevoegen.
- [ ] Bestaande Carrd-URL's, Search Console-data en eventuele analytics-export analyseren.
- [ ] Cookie- en opslagregister maken en juridische pagina's laten aansluiten op de echte inrichting.
- [ ] Google Fonts zelf hosten of het externe verzoek expliciet meenemen in de privacy-inrichting.
- [ ] Securityheaders, CSP en dependency-audit uitvoeren.
- [ ] Grote afbeeldingen comprimeren en moderne formaten/responsive bronnen gebruiken.
- [ ] Routegebaseerde code-splitting en bundeloptimalisatie uitvoeren.
- [ ] Meetplan voor WhatsApp-klikken, formulieropeningen en calculatorgebruik opstellen zonder persoonsgegevens.

### P2 — later uitbreiden

- [ ] Alleen na een concreet meetdoel analytics toevoegen.
- [ ] Alleen bij echte serverformulieren: servervalidatie, spambeperking, rate limiting en veilige opslag toevoegen.
- [ ] Alleen na expliciete bevestiging verzending per post, landelijke bezorging of webshopfunctionaliteit toevoegen.
- [ ] Evaluatie- en onderhoudsritme voor prijzen, teksten, dependencies en juridische pagina's vastleggen.

### Laatste fase — Engels

- [ ] Definitieve Nederlandse inhoud bevriezen.
- [ ] Complete Engelse routes onder `/en/` maken.
- [ ] Alle navigatie, pagina's, formulieren, calculator, foutmeldingen, metadata, alt-teksten en WhatsApp-berichten vertalen.
- [ ] `lang`, hreflang, canonicals en taalwissel per overeenkomstige pagina implementeren.
- [ ] Controle uitvoeren op ontbrekende of gemengde vertalingen.

## Eerstvolgende uitvoerstap

Controleer de resterende kleine aanraakvlakken en tekstafbreking visueel, ruim daarna dubbele en ongebruikte componenten op en besluit vervolgens over hosting en normale URL's.

## QA-voortgang — 7 oktober 2026

- Alle zestien actieve routes zijn bij 320, 375, 390, 1280 en 1440 px gecontroleerd: tachtig route-breedtecombinaties laden met een H1 en zonder horizontale overflow.
- Contact, zakelijk en particulier bevatten geen zichtbare invoervelden zonder technisch label of toegankelijke naam.
- Native verplichte-veldvalidatie zet de focus correct op het eerste ongeldige veld in contact en zakelijk.
- Blogkaarten zijn voortaan met Enter en spatie te openen en hebben een zichtbare toetsenbordfocus.
- De vergrote servicegebiedkaart opent als dialoog en sluit met Escape.
- De terugknoppen van dienstendetailpagina's verwijzen niet langer naar de verwijderde dienstenpagina, maar naar Particulier.
- De belangrijkste interne CTA's zijn gecontroleerd: Home naar particulier en zakelijk, Particulier naar FAQ, Zakelijk naar het aanvraagformulier en het mobiele prijsmenu naar de calculator.
- De calculator is gecontroleerd voor het standaardvoorbeeld, StudentenMaat, twee messen in de ring, twee messen in de buitenring, een postcode buiten het gebied en zelf langsbrengen. De getoonde prijzen en bezorgstatussen sluiten aan op de vastgelegde regels.
- Alle zichtbare WhatsApp-links op de actieve routes zijn gecontroleerd: zestig linkinstanties verwijzen naar het juiste nummer, bevatten een concepttekst en gebruiken veilige nieuwe-tabinstellingen. Het contactformulier opent met fictieve testgegevens een correct gevuld WhatsApp-concept; er is niets verstuurd.
- De resterende hoofdroutes en paginasprongen zijn gecontroleerd, inclusief oude hashredirects, plannen vanaf Werkwijze/FAQ/Over ons, terugkeren vanuit artikelen en juridische pagina's en de servicegebiedsprongen.
- Een dubbele HTML-ID in het zakelijke formulier is opgelost en gerelateerde blogartikelen zijn ook met Enter en spatie te openen. Geen actieve route bevat nu dubbele element-ID's.
