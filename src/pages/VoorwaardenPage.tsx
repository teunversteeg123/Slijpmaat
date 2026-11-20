import React from 'react';
import { LegalDocumentPage, LegalSection } from '../components/LegalDocumentPage';
import { PageId } from '../types';

interface VoorwaardenPageProps { onNavigate: (page: PageId) => void; }

const sections: LegalSection[] = [
  { heading: 'Artikel 1 - Definities', paragraphs: [
    'In deze algemene voorwaarden wordt verstaan onder:',
    'Slijpmaat: de onder KvK-nummer 42198662 ingeschreven dienstverlener, handelend onder de naam Slijpmaat en gevestigd te Utrecht, die diensten aanbiedt op het gebied van het slijpen, onderhouden, ophalen en terugbrengen van gladde messen.',
    'Klant: iedere natuurlijke persoon of rechtspersoon die gebruikmaakt van de diensten van Slijpmaat. Waar in deze voorwaarden onderscheid wordt gemaakt tussen een consument en een zakelijke klant, wordt onder consument verstaan: een natuurlijke persoon die niet handelt voor doeleinden die verband houden met zijn of haar handels-, bedrijfs-, ambachts- of beroepsactiviteit. Onder zakelijke klant wordt verstaan: iedere klant die handelt in de uitoefening van een beroep of bedrijf.',
    'Overeenkomst: iedere afspraak tussen Slijpmaat en de Klant over het slijpen, onderhouden, ophalen, terugbezorgen en/of vervoeren van gladde messen.',
    'Messen: de door de Klant aangeboden gladde messen die door Slijpmaat worden beoordeeld, vervoerd, geslepen, onderhouden of terugbezorgd.',
    'Opdracht: de concrete aanvraag van de Klant voor de dienstverlening van Slijpmaat.',
  ] },
  { heading: 'Artikel 2 - Gegevens van Slijpmaat', paragraphs: [
    'KvK-nummer: 42198662', 'Btw-identificatienummer: NL870142847B01',
    'Handelsnaam: Slijpmaat', 'Adres: Gerard Noodtstraat 57, 3515 VW Utrecht',
    'E-mail: slijpmaat@outlook.com', 'Telefoon/WhatsApp: 06 82 07 49 67', 'Website: https://slijpmaat.nl',
  ] },
  { heading: 'Artikel 3 - Toepasselijkheid en aanvaarding', paragraphs: [
    '3.1 Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, prijsopgaven, afspraken, overeenkomsten en diensten van Slijpmaat.',
    '3.2 Een vrijblijvende aanvraag verplicht de Klant niet tot afname. Deze voorwaarden zijn van toepassing op de overeenkomst wanneer Slijpmaat ze vóór of bij het sluiten daarvan beschikbaar heeft gesteld en de toepasselijkheid is overeengekomen.',
    '3.3 Slijpmaat stelt deze voorwaarden vóór het sluiten van de overeenkomst beschikbaar op een manier waarop de Klant ze kan lezen en bewaren. Bij de digitale opdrachtbevestiging ontvangt de Klant de geldende voorwaarden als bewaarbare tekst of bestand.',
    '3.4 Afwijkingen van deze algemene voorwaarden zijn alleen geldig indien deze uitdrukkelijk schriftelijk of digitaal zijn overeengekomen.',
    '3.5 Als een bepaling ongeldig of vernietigd is, blijven de overige bepalingen gelden voor zover de overeenkomst zonder die bepaling kan voortbestaan. De gevolgen worden bepaald door het toepasselijke recht.',
  ] },
  { heading: 'Artikel 4 - Aanbod, prijsinformatie en totstandkoming van de overeenkomst', paragraphs: [
    '4.1 Slijpmaat communiceert prijzen, werkwijze en eventuele bijzonderheden vooraf via de website, WhatsApp, het aanmeldformulier of een offerte.',
    '4.2 Een aanvraag via de website, WhatsApp of e-mail is vrijblijvend. De overeenkomst komt tot stand zodra de Klant en Slijpmaat overeenstemming hebben bereikt over de werkzaamheden, de prijs of berekeningswijze en de uitvoering. Slijpmaat bevestigt deze afspraken schriftelijk of digitaal.',
    '4.3 Slijpmaat mag een opdracht weigeren of aanvullende afspraken maken indien de messen onveilig zijn verpakt, ernstig beschadigd zijn, buiten het standaard dienstenaanbod vallen of naar het oordeel van Slijpmaat niet verantwoord kunnen worden geslepen.',
    '4.4 De Klant is verantwoordelijk voor het juist en volledig doorgeven van relevante informatie, zoals het aantal messen, het type messen, zichtbare schade, bijzondere waarde, adresgegevens en gewenste ophaal- of bezorgmomenten.',
  ] },
  { heading: 'Artikel 5 - Uitvoering van de dienst', paragraphs: [
    '5.1 Slijpmaat voert de werkzaamheden uit naar beste inzicht, zorgvuldigheid en vakmanschap, passend bij professioneel handmatig slijpwerk.',
    '5.2 Slijpmaat slijpt messen handmatig op Japanse slijpstenen en gebruikt geen industriële slijpmachine voor het standaard slijpproces. Het doel is een scherp en bruikbaar slijpresultaat met zo min mogelijk onnodige materiaalafname.',
    '5.3 Slijpmaat beoordeelt per mes welke behandeling passend is. Daarbij wordt onder meer gekeken naar de staat van het lemmet, de snede, eventuele beschadigingen, roestvorming, eerdere slijpbeurten en het beoogde gebruik.',
    '5.4 Slijpmaat kan niet garanderen dat ieder mes volledig in nieuwstaat wordt hersteld. Het eindresultaat is mede afhankelijk van de oorspronkelijke kwaliteit, constructie, staalsoort, slijtage, beschadigingen en eerdere behandeling van het mes.',
    '5.5 Slijpmaat mag een behandeling onderbreken als verder slijpen onveilig is of tot onevenredige materiaalafname kan leiden. Slijpmaat informeert de Klant en bespreekt voortzetting of beëindiging, teruglevering en de financiële afwikkeling met behoud van de wettelijke rechten van de Klant.',
    '5.6 Voor aanvullende werkzaamheden, extra kosten of een wezenlijke wijziging van het mesprofiel vraagt Slijpmaat vooraf digitaal of schriftelijk akkoord. Bij het uitblijven van akkoord bespreken partijen de verdere afwikkeling.',
  ] },
  { heading: 'Artikel 6 - Messen buiten het standaard dienstenaanbod', paragraphs: [
    '6.1 Slijpmaat slijpt reguliere gladde Europese en Japanse messen. Slijpmaat neemt geen kartelmessen aan. Ander gereedschap valt buiten het dienstenaanbod, tenzij vooraf uitdrukkelijk anders is afgesproken.',
    '6.2 Zowel consumenten als zakelijke klanten moeten vóór overdracht schriftelijk of digitaal melden wanneer een mes antiek is, een verzamelstuk of limited edition betreft, of een bijzondere financiële, historische of persoonlijke waarde heeft. Dit geldt ook voor handgemaakte, zeer kostbare of enkelzijdig geslepen messen en messen met een uitzonderlijk dunne geometrie of bijzondere staalsoort. De Klant vermeldt de bijzonderheden uitdrukkelijk in de aanvraag of in een bericht via WhatsApp of e-mail en geeft, voor zover bekend, de geschatte waarde en relevante informatie over herkomst, eerdere restauraties en kwetsbaarheden door. Slijpmaat beoordeelt deze messen vooraf afzonderlijk.',
    '6.3 Slijpmaat behandelt de in artikel 6.2 genoemde messen alleen nadat vooraf digitaal of schriftelijk is afgestemd welke behandeling passend is. Daarbij wordt besproken dat slijpen materiaal wegneemt en het uiterlijk, de originaliteit of de verzamelwaarde kan beïnvloeden. Zonder zo’n afspraak mag Slijpmaat deze messen weigeren of onbewerkt teruggeven.',
    '6.4 Als de Klant relevante bijzonderheden niet meldt, wordt bij de beoordeling van eventuele schade rekening gehouden met de informatie die Slijpmaat kende of redelijkerwijs had moeten kennen en met het verband tussen de ontbrekende informatie en de schade. De meldplicht laat de zorgplicht van Slijpmaat en de wettelijke rechten van consumenten onverlet.',
  ] },
  { heading: 'Artikel 7 - Ophalen, aanlevering, verpakking en terugbezorging', paragraphs: [
    '7.1 Indien overeengekomen, haalt Slijpmaat de messen op bij de Klant en bezorgt Slijpmaat de messen na behandeling terug.',
    '7.2 De Klant is verplicht de messen bij overdracht veilig en deugdelijk te verpakken, bijvoorbeeld in een stevige doos, mesbeschermers, een foudraal of een andere verpakking waardoor letsel en schade worden voorkomen.',
    '7.3 Slijpmaat mag onveilig verpakte messen weigeren, het ophaalmoment verplaatsen of aanvullende verpakkingsmaatregelen verlangen.',
    '7.4 De Klant is verantwoordelijk voor een veilige verpakking en aanbieding vóór overdracht. De aansprakelijkheid voor schade door onveilige verpakking of aanbieding wordt beoordeeld volgens de wet, rekening houdend met de omstandigheden en het handelen van beide partijen.',
    '7.5 Slijpmaat behandelt en bewaart de messen zorgvuldig vanaf ontvangst tot teruglevering. Bij verlies of beschadiging tijdens vervoer door Slijpmaat, bewaring of behandeling wordt de aansprakelijkheid beoordeeld volgens artikel 13.',
    '7.6 Slijpmaat controleert bij ontvangst of de verpakking geschikt is voor het verdere vervoer en zorgt voor een veilige verpakking bij teruglevering.',
    '7.7 De meldplicht voor bijzondere en kostbare messen uit artikel 6 geldt voor consumenten en zakelijke klanten. Slijpmaat kan na de melding aanvullende afspraken over behandeling en vervoer voorstellen of de opdracht vóór aanvaarding weigeren. Een melding is geen automatische toezegging van verzekering of vergoeding van de opgegeven waarde.',
  ] },
  { heading: 'Artikel 8 - Fotodocumentatie en gebruik van beeldmateriaal', paragraphs: [
    '8.1 Slijpmaat mag bij ontvangst, vóór aanvang van het slijp- en inspectieproces, foto’s maken van de staat van de messen. Deze foto’s worden gebruikt voor interne controle, kwaliteitsbewaking, schadebeoordeling, klachtenafhandeling en bewijs van de staat van de messen bij ontvangst.',
    '8.2 De foto’s vormen een belangrijk hulpmiddel bij de beoordeling van de staat van de messen, maar sluiten ander bewijs van de Klant of Slijpmaat niet uit.',
    '8.3 Slijpmaat gebruikt foto’s voor promotionele doeleinden, zoals de website of social media, alleen wanneer deze foto’s geen herleidbare persoonsgegevens, adressen, gezichten, kentekens, unieke locatiegegevens of andere identificeerbare informatie bevatten, of wanneer de Klant hiervoor toestemming heeft gegeven.',
    '8.4 De Klant kan via WhatsApp of e-mail bezwaar maken tegen promotioneel gebruik van foto’s. Toestemming voor gebruik van herleidbaar beeldmateriaal is vrijwillig en kan op ieder moment even eenvoudig worden ingetrokken als zij is gegeven. Slijpmaat staakt dan het gebruik waarvoor die toestemming nodig is en verwijdert het materiaal uit de eigen publicatiekanalen. Rechtmatig gebruik vóór de intrekking blijft onverlet. Intern bewaren gebeurt uitsluitend zolang daarvoor een geldige grondslag bestaat, zoals uitgelegd in de privacyverklaring.',
  ] },
  { heading: 'Artikel 9 - Levertijd', paragraphs: [
    '9.1 Slijpmaat bevestigt de verwachte doorlooptijd. Als een specifiek teruglevermoment essentieel is voor de Klant, moet dit vooraf uitdrukkelijk worden afgesproken.',
    '9.2 Slijpmaat spant zich in om de afgesproken levertijd te halen. Indien vertraging ontstaat, informeert Slijpmaat de Klant zo spoedig mogelijk en wordt een nieuwe redelijke levertijd afgesproken.',
    '9.3 De wettelijke rechten van de Klant bij vertraging blijven gelden, waaronder waar van toepassing het stellen van een aanvullende termijn, ontbinding en schadevergoeding.',
  ] },
  { heading: 'Artikel 10 - Prijzen en betaling', paragraphs: [
    '10.1 Slijpmaat bevestigt vóór het sluiten van de overeenkomst de totaalprijs of een duidelijke berekeningswijze, inclusief vooraf bekende ophaal-, bezorg- en herstelkosten.',
    '10.2 Consumentenprijzen zijn inclusief 21% btw. Slijpmaat brengt aanvullende kosten uitsluitend in rekening nadat de Klant daarmee heeft ingestemd.',
    '10.3 Voor zakelijke klanten vermeldt de offerte of opdrachtbevestiging uitdrukkelijk of bedragen inclusief of exclusief btw zijn. De basistarieven op de website zijn inclusief btw.',
    '10.4 Slijpmaat mag tarieven wijzigen. Prijswijzigingen gelden niet voor reeds bevestigde opdrachten, tenzij de Klant en Slijpmaat dit samen schriftelijk of digitaal overeenkomen.',
    '10.5 Particuliere klanten betalen uiterlijk bij teruglevering van de messen, tenzij anders is afgesproken. Betaling kan plaatsvinden via digitaal betaalverzoek, bankoverschrijving, contant of een andere door Slijpmaat geaccepteerde betaalmethode.',
    '10.6 Voor zakelijke klanten geldt een betalingstermijn van 14 dagen na factuurdatum, tenzij anders is overeengekomen.',
    '10.7 Bij niet-tijdige betaling gelden de wettelijke regels voor verzuim en wettelijke rente. Bij consumenten berekent Slijpmaat buitengerechtelijke incassokosten uitsluitend nadat een kosteloze aanmaning met het toepasselijke bedrag aan incassokosten is ontvangen en de daarin geboden termijn van veertien dagen, vanaf de dag na ontvangst, zonder volledige betaling is verstreken. Incassokosten worden berekend volgens de wettelijke regeling.',
    '10.8 Slijpmaat heeft het recht om de geslepen messen onder zich te houden totdat de Klant alle openstaande bedragen voor de betreffende opdracht heeft betaald, voor zover wettelijk toegestaan. Dit wordt het retentierecht genoemd.',
  ] },
  { heading: 'Artikel 11 - Herroepingsrecht, start binnen bedenktijd en annulering', paragraphs: [
    '11.1 Bij een consumentenovereenkomst op afstand, bijvoorbeeld via internet of WhatsApp binnen de daarvoor geldende wettelijke regels, geldt een wettelijke bedenktijd van veertien dagen, tenzij een wettelijke uitzondering van toepassing is. Bij overeenkomsten buiten de verkoopruimte geldt dit recht voor zover de wettelijke regels daarop van toepassing zijn; de wettelijke uitzondering voor overeenkomsten van minder dan € 50 kan daarbij relevant zijn. Voor zakelijke klanten geldt geen wettelijk consumentenherroepingsrecht.',
    '11.2 De bedenktijd voor een dienst begint op de dag na het sluiten van de overeenkomst. De consument kan binnen deze termijn zonder opgave van redenen herroepen met een duidelijke verklaring aan slijpmaat@outlook.com of via WhatsApp op 06 82 07 49 67. Vermeld daarbij de naam, de opdracht en de datum van de overeenkomst. Het modelformulier onderaan deze voorwaarden mag hiervoor worden gebruikt, maar is niet verplicht.',
    '11.3 Tot het moment van overdracht van de messen kan de Klant kosteloos annuleren. Ook daarna kan de Klant verzoeken de werkzaamheden te beëindigen. Slijpmaat stopt voor zover dit redelijkerwijs mogelijk is en specificeert welke vergoeding volgens de wet en de gemaakte afspraken verschuldigd is. De wettelijke bedenktijd en overige wettelijke beëindigingsrechten blijven gelden.',
    '11.4 Slijpmaat begint tijdens een toepasselijke wettelijke bedenktijd uitsluitend op uitdrukkelijk verzoek van de consument. Slijpmaat vraagt daarbij afzonderlijk de bevestiging dat de consument begrijpt dat het herroepingsrecht vervalt na volledige uitvoering van de dienst. Slijpmaat legt het verzoek en deze bevestiging vast op een bewaarbare manier. Bij een overeenkomst buiten de verkoopruimte wordt het verzoek gedaan op een duurzame gegevensdrager.',
    '11.5 Bij herroeping vóór volledige uitvoering betaalt de consument uitsluitend een evenredig bedrag voor het uitgevoerde deel wanneer vooraf uitdrukkelijk om die uitvoering is verzocht en aan de wettelijke informatievereisten is voldaan. Ontbreekt de vereiste toestemming of informatie, dan gelden de wettelijke gevolgen daarvan.',
    '11.6 Het herroepingsrecht vervalt na volledige uitvoering uitsluitend wanneer de consument vooraf uitdrukkelijk heeft ingestemd met uitvoering binnen de bedenktijd en heeft erkend dat het herroepingsrecht daardoor vervalt. Rechten wegens een tekortkoming in de uitvoering blijven gelden.',
    '11.7 Als uitvoering door Slijpmaat moet worden beëindigd, informeert Slijpmaat de Klant en geeft de messen zo spoedig mogelijk veilig terug. Slijpmaat specificeert de financiële afwikkeling volgens de wet en de gemaakte afspraken. Vooruitbetalingen voor niet-uitgevoerde werkzaamheden worden terugbetaald. Eventuele verdere aanspraken van de Klant blijven gelden.',
    '11.8 Bij geldige herroeping betaalt Slijpmaat ontvangen betalingen onverwijld en uiterlijk binnen veertien dagen na ontvangst van de herroepingsverklaring terug, onder aftrek van een eventuele wettelijk verschuldigde evenredige vergoeding. Terugbetaling gebeurt via hetzelfde betaalmiddel, tenzij de consument kosteloos met een andere methode instemt.',
  ] },
  { heading: 'Artikel 12 - Kwaliteitscontrole, garantie en klachten', paragraphs: [
    '12.1 Slijpmaat controleert het slijpresultaat vóór oplevering. Dit kan onder meer gebeuren met een standaard scherpheidstest, zoals een papier- of tomatentest.',
    '12.2 De Klant dient de messen bij teruglevering zo spoedig mogelijk te controleren op zichtbare gebreken of afwijkingen.',
    '12.3 De Klant meldt klachten zo spoedig mogelijk na ontdekking via e-mail of WhatsApp, met een duidelijke omschrijving en waar mogelijk foto’s of video’s. Een gebrek dat pas later zichtbaar wordt, kan ook na teruglevering worden gemeld.',
    '12.4 Deze klachtenregeling beperkt de wettelijke rechten van consumenten niet. Slijpmaat reageert binnen vijf werkdagen inhoudelijk of laat binnen die termijn weten wanneer een inhoudelijke reactie volgt.',
    '12.5 Bij een tekortkoming die aan Slijpmaat kan worden toegerekend, krijgt Slijpmaat waar redelijk en wettelijk vereist de gelegenheid tot kosteloos herstel binnen een redelijke termijn en zonder ernstige overlast. Als herstel uitblijft, onmogelijk is of onvoldoende resultaat heeft, behoudt de Klant de wettelijke rechten, waaronder waar van toepassing prijsvermindering, ontbinding en schadevergoeding.',
    '12.6 Als Slijpmaat een klacht afwijst, wordt dit gemotiveerd toegelicht. De Klant kan de beoordeling betwisten en ander bewijs of een deskundigenoordeel aandragen. De wettelijke mogelijkheden om het geschil te laten beoordelen blijven gelden.',
    '12.7 Schade die is ontstaan door verkeerd gebruik of een latere behandeling door de Klant of een derde komt niet voor rekening van Slijpmaat voor zover die schade daardoor is veroorzaakt. Dit laat aanspraken wegens een eerdere tekortkoming van Slijpmaat onverlet.',
  ] },
  { heading: 'Artikel 13 - Aansprakelijkheid', paragraphs: [
    '13.1 Slijpmaat is aansprakelijk voor schade die volgens de wet aan Slijpmaat kan worden toegerekend. Dit geldt voor behandeling, bewaring en vervoer door Slijpmaat.',
    '13.2 Bij de beoordeling van schade wordt rekening gehouden met reeds aanwezige gebreken, de vooraf verstrekte informatie en eigenschappen of kwetsbaarheden die Slijpmaat kende of redelijkerwijs had moeten kennen. Slijpmaat blijft verantwoordelijk voor een zorgvuldige beoordeling en uitvoering.',
    '13.3 Normale materiaalafname die noodzakelijk is voor de zorgvuldig uitgevoerde, afgesproken slijpbehandeling wordt betrokken bij de beoordeling van een klacht. Bijzondere gevolgen voor uiterlijk, originaliteit of verzamelwaarde worden vooraf besproken volgens artikel 6.',
    '13.4 Voor consumenten gelden de wettelijke aansprakelijkheidsregels. Voor zakelijke klanten gelden eveneens de wettelijke regels, tenzij vóór het sluiten van de overeenkomst afzonderlijk schriftelijk een rechtsgeldige beperking is overeengekomen.',
    '13.5 Bij beschadiging of verlies wordt de omvang van de schade volgens de wet vastgesteld, rekening houdend met onder meer herstelmogelijkheden en de ouderdom, staat en waarde van het mes vóór het schadevoorval. Een door de Klant opgegeven waarde is relevante informatie en is op zichzelf geen overeengekomen schadevergoeding.',
    '13.6 Afzonderlijk overeengekomen beperkingen gelden uitsluitend voor zover rechtsgeldig en laten dwingende wettelijke rechten onverlet.',
    '13.7 Bij schadeclaims of klachten over de staat van de messen worden de door Slijpmaat gemaakte foto’s, communicatie met de Klant en overige beschikbare informatie gebruikt als hulpmiddelen bij de beoordeling.',
  ] },
  { heading: 'Artikel 14 - Overmacht', paragraphs: [
    '14.1 Van overmacht is sprake als een tekortkoming volgens de wet niet aan Slijpmaat kan worden toegerekend.',
    '14.2 Omstandigheden zoals extreme weersomstandigheden, brand, overheidsmaatregelen, ziekte of storingen vormen uitsluitend overmacht wanneer in het concrete geval aan de wettelijke maatstaf wordt voldaan. Het enkele optreden van een genoemde omstandigheid is daarvoor onvoldoende.',
    '14.3 Slijpmaat informeert de Klant zo spoedig mogelijk over overmacht en de verwachte gevolgen. Bij blijvende onmogelijkheid of wanneer verder uitstel redelijkerwijs niet kan worden verlangd, wordt de opdracht afgewikkeld volgens de wet. Slijpmaat geeft de messen zo spoedig mogelijk veilig terug en betaalt vooruitbetaalde bedragen voor niet-uitgevoerde werkzaamheden terug.',
  ] },
  { heading: 'Artikel 15 - Privacy', paragraphs: [
    '15.1 Slijpmaat verwerkt persoonsgegevens van de Klant voor de uitvoering van de opdracht, klantcontact, betaling, administratie, kwaliteitscontrole, klachtenafhandeling en bedrijfsvoering.',
    '15.2 Slijpmaat verwerkt persoonsgegevens volgens de toepasselijke privacywetgeving en de privacyverklaring. Toestemming voor herkenbaar promotioneel beeldmateriaal of andere verwerkingen waarvoor toestemming nodig is, wordt afzonderlijk gevraagd en kan worden ingetrokken.',
    '15.3 Slijpmaat verkoopt geen persoonsgegevens van klanten aan derden.',
  ] },
  { heading: 'Artikel 16 - Toepasselijk recht en geschillen', paragraphs: [
    '16.1 Op de overeenkomst is Nederlands recht van toepassing. Voor consumenten blijven eventueel toepasselijke dwingende beschermingsregels van het recht van hun gewone verblijfplaats gelden.',
    '16.2 Geschillen met consumenten worden behandeld door de volgens de wet bevoegde rechter. Geschillen met zakelijke klanten worden voorgelegd aan de bevoegde rechter in het arrondissement Midden-Nederland, voor zover deze keuze rechtsgeldig is.',
  ] },
  { heading: 'Artikel 17 - Slotbepaling', paragraphs: [
    '17.1 Op een opdracht is de versie van deze voorwaarden van toepassing die vóór of bij het sluiten van de overeenkomst beschikbaar is gesteld en waarvan de toepasselijkheid is overeengekomen.',
    '17.2 Wijzigingen gelden voor nieuwe opdrachten. Op bestaande opdrachten worden wijzigingen uitsluitend toegepast na overeenstemming met de Klant. Rechtstreeks toepasselijke wettelijke verplichtingen blijven gelden.',
  ] },
  { heading: 'Modelformulier voor herroeping', paragraphs: [
    'Vul dit formulier alleen in en stuur het terug als u de overeenkomst wilt herroepen.',
    'Aan: Slijpmaat, Gerard Noodtstraat 57, 3515 VW Utrecht, slijpmaat@outlook.com.',
    'Ik/Wij (*) deel/delen (*) u hierbij mede dat ik/wij (*) onze overeenkomst betreffende de verrichting van de volgende dienst herroep/herroepen (*):',
    'Omschrijving van de dienst:',
    'Besteld op / overeenkomst gesloten op:',
    'Naam/Namen consument(en):',
    'Adres consument(en):',
    'Handtekening consument(en), uitsluitend wanneer dit formulier op papier wordt ingediend:',
    'Datum:',
    '(*) Doorhalen wat niet van toepassing is.',
  ] },
];

export const VoorwaardenPage: React.FC<VoorwaardenPageProps> = ({ onNavigate }) => (
  <LegalDocumentPage title="Algemene voorwaarden Slijpmaat" subtitle="Conceptversie 2.0 — opgesteld op 20 november 2026 — ingangsdatum nog vast te stellen" sections={sections} onNavigate={onNavigate} />
);
