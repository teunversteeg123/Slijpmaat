import React from 'react';
import { LegalDocumentPage, LegalSection } from '../components/LegalDocumentPage';
import { PageId } from '../types';

interface VoorwaardenPageProps { onNavigate: (page: PageId) => void; }

const sections: LegalSection[] = [
  { heading: 'Artikel 1 – Definities', paragraphs: [
    'In deze algemene voorwaarden wordt verstaan onder:',
    'Slijpmaat: de onderneming of handelsnaam Slijpmaat, gevestigd te Utrecht, die diensten aanbiedt op het gebied van het slijpen, onderhouden, ophalen en terugbrengen van keukenmessen en aanverwante snijgereedschappen.',
    'Klant: iedere natuurlijke persoon of rechtspersoon die gebruikmaakt van de diensten van Slijpmaat. Waar in deze voorwaarden onderscheid wordt gemaakt tussen een consument en een zakelijke klant, wordt onder consument verstaan: een natuurlijke persoon die niet handelt voor doeleinden die verband houden met zijn of haar handels-, bedrijfs-, ambachts- of beroepsactiviteit. Onder zakelijke klant wordt verstaan: iedere klant die handelt in de uitoefening van een beroep of bedrijf.',
    'Overeenkomst: iedere afspraak tussen Slijpmaat en de Klant over het slijpen, onderhouden, ophalen, terugbezorgen en/of vervoeren van keukenmessen en aanverwante snijgereedschappen.',
    'Messen: de door de Klant aangeboden keukenmessen en aanverwante snijgereedschappen die door Slijpmaat worden beoordeeld, vervoerd, geslepen, onderhouden of terugbezorgd.',
    'Opdracht: de concrete aanvraag van de Klant voor de dienstverlening van Slijpmaat.',
  ] },
  { heading: 'Artikel 2 – Gegevens van Slijpmaat', paragraphs: [
    'Handelsnaam: Slijpmaat', 'Adres: Gerard Noodtstraat 57, 3515 VW Utrecht',
    'E-mail: slijpmaat@outlook.com', 'Telefoon/WhatsApp: 06 82 07 49 67', 'Website: https://slijpmaat.nl',
  ] },
  { heading: 'Artikel 3 – Toepasselijkheid en aanvaarding', paragraphs: [
    '3.1 Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, prijsopgaven, afspraken, overeenkomsten en diensten van Slijpmaat.',
    '3.2 Door een opdracht te plaatsen, een formulier in te vullen, via WhatsApp akkoord te geven of messen aan Slijpmaat over te dragen, verklaart de Klant zich akkoord met deze algemene voorwaarden, voor zover deze vóór of bij het sluiten van de overeenkomst aan de Klant beschikbaar zijn gesteld.',
    '3.3 Slijpmaat stelt deze algemene voorwaarden beschikbaar via de website, het aanmeldformulier, WhatsApp of een andere digitale route. De Klant krijgt de mogelijkheid om de voorwaarden vooraf te lezen en op te slaan.',
    '3.4 Afwijkingen van deze algemene voorwaarden zijn alleen geldig indien deze uitdrukkelijk schriftelijk of digitaal zijn overeengekomen.',
    '3.5 Indien een bepaling uit deze algemene voorwaarden geheel of gedeeltelijk ongeldig of niet-afdwingbaar blijkt, blijven de overige bepalingen volledig van kracht. Slijpmaat en de Klant zullen de ongeldige bepaling vervangen door een geldige bepaling die zoveel mogelijk aansluit bij het doel en de strekking van de oorspronkelijke bepaling.',
  ] },
  { heading: 'Artikel 4 – Aanbod, prijsinformatie en totstandkoming van de overeenkomst', paragraphs: [
    '4.1 Slijpmaat communiceert prijzen, werkwijze en eventuele bijzonderheden vooraf via de website, WhatsApp, het aanmeldformulier of een offerte.',
    '4.2 Een overeenkomst komt tot stand zodra de Klant akkoord geeft op de opdracht, bijvoorbeeld via WhatsApp, het formulier, e-mail of mondeling bij overdracht van de messen.',
    '4.3 Slijpmaat mag een opdracht weigeren of aanvullende afspraken maken indien de messen onveilig zijn verpakt, ernstig beschadigd zijn, buiten het standaard dienstenaanbod vallen of naar het oordeel van Slijpmaat niet verantwoord kunnen worden geslepen.',
    '4.4 De Klant is verantwoordelijk voor het juist en volledig doorgeven van relevante informatie, zoals het aantal messen, het type messen, zichtbare schade, bijzondere waarde, adresgegevens en gewenste ophaal- of bezorgmomenten.',
  ] },
  { heading: 'Artikel 5 – Uitvoering van de dienst', paragraphs: [
    '5.1 Slijpmaat voert de werkzaamheden uit naar beste inzicht, zorgvuldigheid en vakmanschap, passend bij professioneel handmatig slijpwerk.',
    '5.2 Slijpmaat slijpt messen handmatig op slijpstenen en gebruikt geen industriële slijpmachine voor het standaard slijpproces. Het doel is een scherp en bruikbaar slijpresultaat met zo min mogelijk onnodige materiaalafname.',
    '5.3 Slijpmaat beoordeelt per mes welke behandeling passend is. Daarbij wordt onder meer gekeken naar de staat van het lemmet, de snede, eventuele beschadigingen, roestvorming, eerdere slijpbeurten en het beoogde gebruik.',
    '5.4 Slijpmaat kan niet garanderen dat ieder mes volledig in nieuwstaat wordt hersteld. Het eindresultaat is mede afhankelijk van de oorspronkelijke kwaliteit, constructie, staalsoort, slijtage, beschadigingen en eerdere behandeling van het mes.',
    '5.5 Slijpmaat mag een behandeling beperken, aanpassen of stoppen indien tijdens de werkzaamheden blijkt dat verder slijpen niet verantwoord is of tot disproportioneel materiaalverlies zou leiden. In dat geval informeert Slijpmaat de Klant zo spoedig mogelijk.',
  ] },
  { heading: 'Artikel 6 – Messen buiten het standaard dienstenaanbod', paragraphs: [
    '6.1 Slijpmaat is gespecialiseerd in reguliere Europese keukenmessen en vergelijkbare keukenmessen.',
    '6.2 Traditionele, handgemaakte of hoogwaardige Japanse messen, messen met een eenzijdige slijphoek, damaststalen messen, extreem dun uitgeslepen messen, messen met bijzondere staalsoorten en messen met een zeer hoge vervangingswaarde vallen buiten het standaard dienstenaanbod.',
    '6.3 Slijpmaat behandelt de in artikel 6.2 genoemde messen uitsluitend indien dit vooraf uitdrukkelijk schriftelijk of digitaal is overeengekomen. Zonder zo’n afspraak mag Slijpmaat deze messen weigeren of onbewerkt teruggeven.',
    '6.4 Indien de Klant zonder duidelijke melding een bijzonder, kwetsbaar of kostbaar mes aanbiedt, is Slijpmaat niet aansprakelijk voor afwijkingen in het slijpresultaat die voortvloeien uit de bijzondere eigenschappen, constructie of staat van het mes, voor zover wettelijk toegestaan.',
  ] },
  { heading: 'Artikel 7 – Ophalen, aanlevering, verpakking en terugbezorging', paragraphs: [
    '7.1 Indien overeengekomen, haalt Slijpmaat de messen op bij de Klant en bezorgt Slijpmaat de messen na behandeling terug.',
    '7.2 De Klant is verplicht de messen bij overdracht veilig en deugdelijk te verpakken, bijvoorbeeld in een stevige doos, mesbeschermers, een foudraal of een andere verpakking waardoor letsel en schade worden voorkomen.',
    '7.3 Slijpmaat mag onveilig verpakte messen weigeren, het ophaalmoment verplaatsen of aanvullende verpakkingsmaatregelen verlangen.',
    '7.4 De Klant blijft verantwoordelijk voor schade of letsel die ontstaat doordat de messen vóór overdracht aan Slijpmaat onveilig zijn verpakt of onveilig worden aangeboden.',
    '7.5 Vanaf het moment dat Slijpmaat de messen feitelijk in ontvangst heeft genomen tot het moment van teruglevering aan de Klant, draagt Slijpmaat het risico voor verlies of beschadiging tijdens transport dat door Slijpmaat zelf wordt uitgevoerd, voor zover dit verlies of deze beschadiging aan Slijpmaat kan worden toegerekend.',
    '7.6 De aansprakelijkheid van Slijpmaat tijdens transport is, voor zover wettelijk toegestaan, beperkt tot het factuurbedrag van de betreffende opdracht, met een absoluut maximum van € 250 per opdracht. Deze beperking geldt niet bij opzet of bewuste roekeloosheid van Slijpmaat.',
    '7.7 Indien de Klant messen aanbiedt met een gezamenlijke waarde van meer dan € 250, dient de Klant dit vóór overdracht schriftelijk of digitaal aan Slijpmaat te melden. Slijpmaat kan in dat geval aanvullende afspraken maken, de opdracht weigeren of een andere aansprakelijkheidslimiet schriftelijk overeenkomen.',
  ] },
  { heading: 'Artikel 8 – Fotodocumentatie en gebruik van beeldmateriaal', paragraphs: [
    '8.1 Slijpmaat mag bij ontvangst, vóór aanvang van het slijp- en inspectieproces, foto’s maken van de staat van de messen. Deze foto’s worden gebruikt voor interne controle, kwaliteitsbewaking, schadebeoordeling, klachtenafhandeling en bewijs van de staat van de messen bij ontvangst.',
    '8.2 De foto’s vormen een belangrijk hulpmiddel bij de beoordeling van de staat van de messen, maar sluiten ander bewijs van de Klant of Slijpmaat niet uit.',
    '8.3 Slijpmaat gebruikt foto’s voor promotionele doeleinden, zoals de website of social media, alleen wanneer deze foto’s geen herleidbare persoonsgegevens, adressen, gezichten, kentekens, unieke locatiegegevens of andere identificeerbare informatie bevatten, of wanneer de Klant hiervoor toestemming heeft gegeven.',
    '8.4 De Klant kan voorafgaand aan de opdracht bezwaar maken tegen promotioneel gebruik van foto’s. In dat geval gebruikt Slijpmaat de foto’s uitsluitend intern voor de uitvoering, kwaliteitscontrole en eventuele klachtenafhandeling.',
  ] },
  { heading: 'Artikel 9 – Levertijd', paragraphs: [
    '9.1 Slijpmaat communiceert de verwachte levertijd vooraf of uiterlijk bij ontvangst van de messen. Deze levertijd kan afhankelijk zijn van werkdruk, beschikbaarheid, planning, transport en de staat van de messen.',
    '9.2 Slijpmaat spant zich in om de afgesproken levertijd te halen. Indien vertraging ontstaat, informeert Slijpmaat de Klant zo spoedig mogelijk en wordt een nieuwe redelijke levertijd afgesproken.',
    '9.3 Een overschrijding van de levertijd geeft de Klant niet automatisch recht op schadevergoeding, tenzij sprake is van opzet, bewuste roekeloosheid of een wettelijke verplichting tot schadevergoeding.',
  ] },
  { heading: 'Artikel 10 – Prijzen en betaling', paragraphs: [
    '10.1 Slijpmaat communiceert de prijs vooraf via de website, WhatsApp, het aanmeldformulier of een offerte.',
    '10.2 Voor consumenten worden totaalprijzen vooraf duidelijk gecommuniceerd. Indien Slijpmaat btw-plichtig is, zijn consumentenprijzen inclusief btw. Indien Slijpmaat deelneemt aan de kleineondernemersregeling of op een andere wettelijke grond geen btw in rekening brengt, wordt geen btw op de prijs vermeld of berekend.',
    '10.3 Voor zakelijke klanten wordt vooraf aangegeven of prijzen inclusief of exclusief btw zijn. Indien niets anders is vermeld, gelden voor zakelijke klanten de prijzen zoals bevestigd in de offerte of opdrachtbevestiging.',
    '10.4 Slijpmaat mag tarieven wijzigen. Prijswijzigingen gelden niet voor reeds bevestigde opdrachten, tenzij de Klant en Slijpmaat dit samen schriftelijk of digitaal overeenkomen.',
    '10.5 Particuliere klanten betalen uiterlijk bij teruglevering van de messen, tenzij anders is afgesproken. Betaling kan plaatsvinden via digitaal betaalverzoek, bankoverschrijving, contant of een andere door Slijpmaat geaccepteerde betaalmethode.',
    '10.6 Voor zakelijke klanten geldt een betalingstermijn van 14 dagen na factuurdatum, tenzij anders is overeengekomen.',
    '10.7 Bij niet-tijdige betaling is de Klant in verzuim volgens de wettelijke regels. Bij consumenten brengt Slijpmaat pas wettelijke rente en buitengerechtelijke incassokosten in rekening nadat een kosteloze aanmaning is verzonden en de consument alsnog 14 dagen de tijd heeft gekregen om te betalen, gerekend vanaf de dag na ontvangst van de aanmaning.',
    '10.8 Slijpmaat heeft het recht om de geslepen messen onder zich te houden totdat de Klant alle openstaande bedragen voor de betreffende opdracht heeft betaald, voor zover wettelijk toegestaan. Dit wordt het retentierecht genoemd.',
  ] },
  { heading: 'Artikel 11 – Herroepingsrecht, start binnen bedenktijd en annulering', paragraphs: [
    '11.1 Indien de Klant consument is en de overeenkomst op afstand of buiten de verkoopruimte wordt gesloten, kan de Klant in bepaalde gevallen recht hebben op een wettelijke bedenktijd van 14 dagen.',
    '11.2 De bedenktijd begint bij een dienst op de dag nadat de overeenkomst is gesloten.',
    '11.3 De Klant kan een opdracht kosteloos annuleren tot het moment dat de messen fysiek aan Slijpmaat zijn overhandigd of door Slijpmaat zijn opgehaald, tenzij anders is overeengekomen.',
    '11.4 Indien de Klant wil dat Slijpmaat binnen de wettelijke bedenktijd start met de uitvoering van de dienst, vraagt Slijpmaat hiervoor waar nodig om uitdrukkelijke toestemming. De Klant erkent daarbij dat het herroepingsrecht vervalt zodra Slijpmaat de dienst volledig heeft uitgevoerd.',
    '11.5 Indien de Klant tijdens de bedenktijd herroept nadat Slijpmaat op uitdrukkelijk verzoek van de Klant al met de werkzaamheden is begonnen, maar voordat de dienst volledig is uitgevoerd, mag Slijpmaat een redelijk en evenredig bedrag in rekening brengen voor het reeds uitgevoerde deel van de dienst, voor zover wettelijk toegestaan.',
    '11.6 Na volledige uitvoering van de slijpservice kan de opdracht niet meer worden geannuleerd wanneer de Klant vooraf uitdrukkelijk heeft ingestemd met uitvoering binnen de bedenktijd en heeft erkend dat het herroepingsrecht na volledige uitvoering vervalt.',
    '11.7 Slijpmaat mag een opdracht annuleren indien uitvoering redelijkerwijs niet mogelijk is, bijvoorbeeld door ziekte, overmacht, onveilige aanlevering van messen, ongeschikte messen of een onvoorziene omstandigheid. In dat geval worden reeds overgedragen messen zo spoedig mogelijk en, indien mogelijk, onbewerkt teruggegeven. Kosten worden alleen in rekening gebracht voor werkzaamheden die al met toestemming van de Klant zijn uitgevoerd.',
  ] },
  { heading: 'Artikel 12 – Kwaliteitscontrole, garantie en klachten', paragraphs: [
    '12.1 Slijpmaat controleert het slijpresultaat vóór oplevering. Dit kan onder meer gebeuren met een standaard scherpheidstest, zoals een papier- of tomatentest.',
    '12.2 De Klant dient de messen bij teruglevering zo spoedig mogelijk te controleren op zichtbare gebreken of afwijkingen.',
    '12.3 Klachten over het slijpresultaat moeten zo snel mogelijk en bij voorkeur binnen 14 dagen na teruglevering worden gemeld via e-mail of WhatsApp, met een duidelijke omschrijving van de klacht en, indien mogelijk, foto’s of video’s.',
    '12.4 Een klachttermijn van 14 dagen laat de wettelijke rechten van consumenten onverlet. Een consument behoudt de rechten die voortvloeien uit dwingend consumentenrecht.',
    '12.5 Indien Slijpmaat een klacht gegrond acht, krijgt Slijpmaat de gelegenheid om het betreffende mes kosteloos opnieuw te beoordelen en, indien passend, opnieuw te slijpen of een andere redelijke oplossing aan te bieden.',
    '12.6 Indien Slijpmaat een klacht ongegrond acht, licht Slijpmaat dit gemotiveerd toe. Slijpmaat is niet verplicht verdere gratis herstelwerkzaamheden uit te voeren zolang niet is vastgesteld dat de klacht gegrond is.',
    '12.7 De garantie of herstelmogelijkheid vervalt indien de Klant het mes na teruglevering zelf heeft bewerkt of laten bewerken, of indien sprake is van oneigenlijk gebruik, zoals snijden in botten, diepvriesproducten, steen, glas, metaal of andere harde materialen waarvoor het mes niet is bedoeld.',
  ] },
  { heading: 'Artikel 13 – Aansprakelijkheid', paragraphs: [
    '13.1 Slijpmaat behandelt alle messen met zorgvuldigheid en vakmanschap.',
    '13.2 Slijpmaat is, voor zover wettelijk toegestaan, niet aansprakelijk voor schade die ontstaat door reeds aanwezige of verborgen gebreken aan het mes, waaronder materiaalmoeheid, constructiefouten, interne haarscheurtjes, eerdere ondeskundige slijpbeurten, extreme roestvorming, loszittende handgrepen of beschadigingen die bij ontvangst niet redelijkerwijs zichtbaar waren.',
    '13.3 Slijpmaat is, voor zover wettelijk toegestaan, niet aansprakelijk voor normale slijtage, beperkte materiaalafname die noodzakelijk is voor het slijpproces of een slijpresultaat dat wordt beïnvloed door de oorspronkelijke kwaliteit, staat of constructie van het mes.',
    '13.4 Slijpmaat is, voor zover wettelijk toegestaan, niet aansprakelijk voor indirecte schade of gevolgschade, zoals gederfde winst, gemiste omzet, bedrijfsstagnatie, gemiste reserveringen, vervangende inkoop of schade doordat de Klant de messen tijdelijk niet kan gebruiken.',
    '13.5 De totale aansprakelijkheid van Slijpmaat wegens een toerekenbare tekortkoming in de uitvoering van de overeenkomst is, voor zover wettelijk toegestaan, beperkt tot het factuurbedrag van de betreffende opdracht, met een absoluut maximum van € 125 per opdracht.',
    '13.6 De aansprakelijkheidsbeperkingen in dit artikel gelden niet bij opzet of bewuste roekeloosheid van Slijpmaat en laten dwingende wettelijke rechten van consumenten onverlet.',
    '13.7 Bij schadeclaims of klachten over de staat van de messen worden de door Slijpmaat gemaakte foto’s, communicatie met de Klant en overige beschikbare informatie gebruikt als hulpmiddelen bij de beoordeling.',
  ] },
  { heading: 'Artikel 14 – Overmacht', paragraphs: [
    '14.1 Slijpmaat is niet verplicht verplichtingen na te komen indien zij daartoe wordt verhinderd door een omstandigheid die niet aan haar schuld is te wijten en niet op grond van wet, overeenkomst of verkeersopvattingen voor haar rekening komt.',
    '14.2 Onder overmacht wordt onder meer verstaan: extreme weersomstandigheden, ernstige verkeershinder, diefstal of verlies van transportmiddelen of gereedschap, brand, waterschade, overheidsmaatregelen, ziekte of arbeidsongeschiktheid van de uitvoerder, storingen bij betaal- of communicatiediensten en andere omstandigheden waardoor uitvoering tijdelijk of blijvend onmogelijk of onredelijk bezwarend wordt.',
    '14.3 Indien sprake is van overmacht, informeert Slijpmaat de Klant zo spoedig mogelijk. Slijpmaat en de Klant maken dan redelijke afspraken over uitstel, wijziging of beëindiging van de opdracht.',
  ] },
  { heading: 'Artikel 15 – Privacy', paragraphs: [
    '15.1 Slijpmaat verwerkt persoonsgegevens van de Klant voor de uitvoering van de opdracht, klantcontact, betaling, administratie, kwaliteitscontrole, klachtenafhandeling en bedrijfsvoering.',
    '15.2 De verwerking van persoonsgegevens wordt verder uitgelegd in de aparte privacyverklaring van Slijpmaat.',
    '15.3 Slijpmaat verkoopt geen persoonsgegevens van klanten aan derden.',
  ] },
  { heading: 'Artikel 16 – Toepasselijk recht en geschillen', paragraphs: [
    '16.1 Geschillen tussen Slijpmaat en een zakelijke klant worden in eerste instantie voorgelegd aan de bevoegde rechter in het arrondissement Midden-Nederland, locatie Utrecht, tenzij dwingend recht een andere rechter aanwijst.',
    '16.2 Indien de Klant consument is, heeft deze het recht om binnen één maand nadat Slijpmaat zich schriftelijk op dit artikel beroept te kiezen voor beslechting van het geschil door de wettelijk bevoegde rechter van zijn of haar eigen woonplaats.',
  ] },
  { heading: 'Artikel 17 – Slotbepaling', paragraphs: [
    '17.1 Deze algemene voorwaarden treden in werking op de datum die bovenaan dit document staat vermeld.',
    '17.2 Slijpmaat mag deze algemene voorwaarden wijzigen. De gewijzigde voorwaarden gelden alleen voor nieuwe opdrachten en voor bestaande opdrachten indien de Klant daarmee akkoord gaat of indien de wijziging noodzakelijk is door wet- of regelgeving.',
  ] },
];

export const VoorwaardenPage: React.FC<VoorwaardenPageProps> = ({ onNavigate }) => (
  <LegalDocumentPage title="Algemene voorwaarden Slijpmaat" sections={sections} onNavigate={onNavigate} />
);
