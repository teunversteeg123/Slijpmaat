# Slijpmaat website - audit, prioriteiten en voortgang

Peildatum: 26 oktober 2026
Releasebasis: GitHub-commit `433b13d` (`main`). Deze versie bevat de auditverbeteringen en homepage-SEO van 26 oktober; de exacte publicatiecommit staat in de Gitgeschiedenis.

## Actuele status

- Productie draait op React/Vite via GitHub en Cloudflare Pages, op `slijpmaat.nl`.
- Elf actieve pagina's, negen sitemap-URL's. De vier dienstpagina's en de losse contactpagina zijn verwijderd met permanente redirects.
- Prerendering, eigen metadata, beveiligingsheaders, cookievoorkeuren en Advanced Consent Mode zijn al uitgevoerd.
- Afgerond na de audit: directe particuliere bestel-CTA, consistente studentenkorting/aanvraagbon, reparatiemelding, contrastverbetering, zakelijke telefoonvalidatie en toetsenborddropdown, actuele servicecopy, verborgen ongepubliceerde blogkaarten, routechunks en video laden/pauzeren op zichtbaarheid.
- Nieuwe privacyarme bestelfunnel: zie `analytics-order-flow.md`. Een concept openen is geen ontvangen aanvraag of verkoop.
- Controles: lint, zeven bezorgtests, twee Analytics-tests, twee orderflowtests, productiebuild, SEO (elf routes/negen sitemap-URL's) en browsercontrole op 320, 390 en 1280 px.
- Teun heeft op 26 oktober opdracht gegeven deze versie via GitHub en Cloudflare Pages te publiceren. GA4-rapporten moeten op de nieuwe eventnamen aansluiten; echte gebruikersprestaties blijven apart te meten. De kleinere bundel is geen gemeten conversie- of snelheidsscore.
- Open inhoudelijke beslissingen blijven de bevestiging van fiscale status en een ingangsdatum voor de voorwaarden. Deze zijn niet verzonnen of automatisch gewijzigd.

## Historische audit van 12 oktober 2026

Onderstaande inventarisatie en vinklijsten zijn historie, niet de actuele lijst met ontbrekende functies. Bovenstaande status en `docs/CURRENT_STATUS.md` in de centrale kennisbank zijn leidend.

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
- De site gebruikt React in de browser en rendert alle actieve routes tijdens de productiebuild vooraf naar statische HTML.
- Navigatie gebruikt normale paden via de zelfgebouwde router in `App.tsx`; oude `#hash`-links worden voor compatibiliteit omgezet.
- Er is geen server-API, database of formulierdienst aanwezig.
- Voor statische hosts met Netlify-achtige redirects staat een 404-fallback in `public/_redirects`; de definitieve hostingprovider is nog niet gekozen.
- De productiebuild werkt. De JavaScript-bundel is circa 539 kB vóór gzip en vraagt later om opsplitsing.

### Pagina's en routes

Actief: home, particulier, zakelijk/horeca, vier dienstendetails, werkwijze, servicegebied, blogs, over ons, FAQ, contact, voorwaarden en privacy. Oude zelfstandige pagina's voor diensten, prijzen/bestellen, reviews en het niet-gepubliceerde voorbeeldartikel zijn uit de broncode verwijderd; relevante inhoud en oude hashredirects blijven via de actieve structuur beschikbaar.

Alle vijftien actieve pagina's hebben een normaal canoniek pad en een eigen vooraf gerenderd HTML-bestand. `Blogs`, `Algemene voorwaarden` en `Privacyverklaring` zijn bewust niet indexeerbaar; de twaalf indexeerbare routes staan in de sitemap.

### Formulieren en klantgegevens

- De particuliere calculator berekent lokaal en opent een vooraf ingevuld WhatsApp-bericht.
- De postcodecheck rekent uitsluitend in de browser en slaat geen postcode op.
- Het contactformulier en zakelijke formulier deden vóór deze audit alleen alsof een bericht was verzonden. Ze openen nu een ingevuld WhatsApp-bericht; de bezoeker controleert en verstuurt dit zelf.
- Er worden geen aanvragen naar een eigen server of database gestuurd.
- Tijdelijke invoer blijft alleen in React-state in het browsergeheugen.

### Externe diensten

- WhatsApp voor aanvragen en contact.
- Google Maps/Bedrijfsprofiel en Google-reviewlink.
- Google Fonts wordt bij paginalaad extern opgehaald.
- Instagram en Facebook via gewone uitgaande links.
- Algemene voorwaarden en privacyverklaring linken momenteel naar Google Docs.
- Google Analytics 4 is technisch voorbereid, maar wordt pas actief zodra het bevestigde meet-ID via `VITE_GA_MEASUREMENT_ID` is ingesteld en een bezoeker expliciet toestemming geeft. Er is geen advertentiepixel.
- Geen ingesloten Instagram-, Maps- of YouTube-frame in de actieve pagina's aangetroffen.

### Taal

De actieve website is volledig Nederlandstalig. De tijdelijke NL/EN-schakelaar, Engelse vertaallaag, taalopslag en Google Translate-cookielogica zijn verwijderd. Een volledige Engelse versie wordt pas in een latere fase opnieuw ontworpen en gecontroleerd.

### SEO en rendering

- Alle actieve routes hebben unieke statisch aanwezige titels, metabeschrijvingen, canonicals, robots-instructies en Open Graph-/Twittermetadata.
- De productiebuild rendert H1 en primaire pagina-inhoud naar de ruwe HTML voordat JavaScript draait.
- Structured data gebruikt WebSite, WebPage en BreadcrumbList; FAQPage staat alleen op routes met overeenkomende zichtbare FAQ-inhoud.
- Een fysiek `robots.txt`, een sitemap met twaalf indexeerbare canonieke routes en een eigen `noindex`-404 zijn aanwezig.
- Een lokale HTTP-verificatietest controleert vijftien routes, schema, metadata, statische inhoud, crawlerbestanden en HTTP 404.
- Geen `/en/`-structuur; de volledige Engelse uitwerking blijft een latere fase.

### Privacy en cookies

- Google Analytics 4 en de bijbehorende `_ga`-cookies worden uitsluitend na expliciete toestemming geactiveerd. De Analytics-cookies zijn technisch beperkt tot maximaal 90 dagen; advertentieopslag, Google Signals en advertentiepersonalisatie staan uit.
- De maximaal zes maanden geldige cookievoorkeur staat in lokale opslag; er wordt geen taalvoorkeur opgeslagen en de website schrijft geen `googtrans`-cookie meer.
- Google Fonts maakt direct een externe verbinding.
- De site heeft een gelijkwaardige accepteren/weigeren-banner en een blijvende ingang `Cookievoorkeuren` in de footer. Intrekken schakelt Analytics uit, verwijdert de bereikbare `_ga`-cookies en herlaadt de pagina zonder Google-tag.
- Artikel 11 van de privacyverklaring beschrijft de actuele browseropslag, Google Analytics en de mogelijkheid om toestemming in te trekken. De volledige juridische tekst en bedrijfsgegevens blijven vóór lancering een afzonderlijk controlepunt.

### Beveiliging

- Geen echte API of server-side verwerking aanwezig; daardoor ontbreken ook servervalidatie, spambeperking en rate limiting.
- Geen echte geheime sleutel in de broncode aangetroffen.
- Oude AI Studio/Gemini-configuratie, ongebruikte serverdependencies en de browserworkaround uit de proefomgeving zijn op 8 oktober verwijderd.
- Securityheaders en Content Security Policy zijn nog niet geconfigureerd.
- De WhatsApp-calculatorprijs wordt uitsluitend in de browser berekend en moet als schatting worden behandeld totdat Slijpmaat de aanvraag bevestigt.

### Snelheid en responsive risico's

- Grote bronafbeeldingen van circa 4,7-5,3 MB.
- Video van circa 3,7 MB.
- Alleen de actieve HD-servicegebiedkaart is behouden; de vier eerdere kaartvarianten zijn verwijderd.
- Geen routegebaseerde code-splitting.
- Mobiele controle moet per actieve pagina op minimaal 320, 375 en 390 px gebeuren; desktop op minimaal 1280 en 1440 px.

## Prioriteiten

### P0 - noodzakelijk vóór lancering

- [x] Veilige GitHub-back-up van de huidige werkende site.
- [x] Misleidende succesmeldingen uit contact- en zakelijke formulieren verwijderen.
- [x] Contact- en zakelijke formulieren functioneel koppelen aan door de bezoeker te versturen WhatsApp-berichten.
- [x] Kapotte interne sprongen naar zakelijk formulier, FAQ en blogoverzicht herstellen.
- [x] Maatgrens corrigeren: normaal 15-19,99 cm; groot begint bij 20 cm.
- [x] Onbevestigde btw-, betaaltermijn-, postverzending- en garantieclaims neutraliseren.
- [x] Alle actieve routes functioneel testen op mobiel en desktop.
- [x] Alle CTA's, formulieren, calculatorstappen en foutmeldingen end-to-end testen.
- [x] Pagina's controleren op horizontale overflow, afbrekende tekst en te kleine aanraakvlakken.
- [x] Formulierlabels technisch koppelen aan invoervelden en toetsenbord-/focusgedrag controleren.
- [x] Definitieve actieve pagina's en dubbele/ongebruikte componenten opschonen.
- [ ] Definitieve hosting kiezen en de voorbereide normale URL-/404-structuur in die omgeving bevestigen.
- [ ] Juridische en fiscale gegevens bevestigen voordat voorwaarden en betaalteksten definitief worden.

### P1 - daarna verbeteren

- [x] SEO-paginastructuur, H1-verdeling en unieke metadata per actieve pagina uitwerken.
- [x] Normale URL's implementeren en redirects voor oude actieve hashlinks behouden.
- [x] Canonicals, veilige structured data, `robots.txt`, sitemap, statische prerendering en echte 404 toevoegen.
- [ ] Bestaande Carrd-URL's, Search Console-data en eventuele analytics-export analyseren.
- [x] Toestemmingsmechanisme en privacytekst laten aansluiten op de Analytics-inrichting.
- [ ] Definitief cookie- en opslagregister afronden nadat het echte meet-ID en de GA4-propertyinstellingen zijn bevestigd.
- [ ] Google Fonts zelf hosten of het externe verzoek expliciet meenemen in de privacy-inrichting.
- [ ] Securityheaders, CSP en dependency-audit uitvoeren.
- [ ] Grote afbeeldingen comprimeren en moderne formaten/responsive bronnen gebruiken.
- [ ] Routegebaseerde code-splitting en bundeloptimalisatie uitvoeren.
- [ ] Meetplan voor WhatsApp-klikken, formulieropeningen en calculatorgebruik opstellen zonder persoonsgegevens.

### P2 - later uitbreiden

- [x] Google Analytics 4 technisch achter expliciete toestemming plaatsen; definitief GA4-meet-ID en meetplan blijven nodig voor activering.
- [ ] Alleen bij echte serverformulieren: servervalidatie, spambeperking, rate limiting en veilige opslag toevoegen.
- [ ] Alleen na expliciete bevestiging verzending per post, landelijke bezorging of webshopfunctionaliteit toevoegen.
- [ ] Evaluatie- en onderhoudsritme voor prijzen, teksten, dependencies en juridische pagina's vastleggen.

### Laatste fase - Engels

- [ ] Definitieve Nederlandse inhoud bevriezen.
- [ ] Complete Engelse routes onder `/en/` maken.
- [ ] Alle navigatie, pagina's, formulieren, calculator, foutmeldingen, metadata, alt-teksten en WhatsApp-berichten vertalen.
- [ ] `lang`, hreflang, canonicals en taalwissel per overeenkomstige pagina implementeren.
- [ ] Controle uitvoeren op ontbrekende of gemengde vertalingen.

## Eerstvolgende uitvoerstap

Kies de hostingprovider en publiceer de huidige build eerst op een tijdelijk testadres of subdomein. Controleer daarna de metadata, redirects en formulieren in die productieachtige omgeving voordat `slijpmaat.nl` wordt omgeschakeld.

## URL- en blogvoorbereiding - 8 oktober 2026

- Alle actieve pagina's gebruiken lokaal normale, leesbare paden zonder hash; browserterug en directe paginalinks werken.
- Oude hashlinks blijven behouden als compatibele redirects naar de nieuwe paden.
- Een generieke statische SPA-fallback is toegevoegd, zodat directe paginalinks bij geschikte hosting naar de React-app terugvallen.
- De blogpagina bevat geen gepubliceerde artikelen, conceptblogs of voorbeeldtegels meer. Ook de artikelroute, voorbeelddata, zoekfunctie en filters zijn verwijderd.
- De definitieve hostingprovider en DNS-omschakeling van `slijpmaat.nl` zijn nog niet vastgesteld.

## Opschoonronde - 8 oktober 2026

- Negen ongebruikte pagina- en componentbestanden verwijderd, waaronder de oude diensten-, review- en prijzenpagina, twee embedded calculators en het ontwerppaneel.
- Ongebruikte fictieve reviewdata verwijderd; de actieve Google-reviewcomponent met aangeleverde reviewteksten blijft behouden.
- Tweeëntwintig dubbele of ongebruikte mediabestanden verwijderd; daarnaast zijn twee oude calculatorbestanden en twee overbodige configuratiebestanden opgeruimd. Alle actieve beelden en video's blijven aanwezig.
- Ongebruikte AI-, server- en animatiedependencies verwijderd. Het dependencybestand bevat alleen nog pakketten die de actieve frontend of build nodig heeft.
- De Vite-configuratie en `index.html` zijn ontdaan van AI Studio-specifieke logica. De favicon is expliciet gekoppeld.
- TypeScript controleert nu standaard op ongebruikte imports, variabelen en parameters.
- De oude route `#prijzen-bestellen` stuurt bezoekers door naar de actieve particuliere calculator; bestaande redirects voor kennisbank, reviews, Onze Maten en buiten Utrecht blijven behouden.

## QA-voortgang - 7 oktober 2026

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
