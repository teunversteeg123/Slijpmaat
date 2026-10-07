import React from 'react';
import { LegalDocumentPage, LegalSection } from '../components/LegalDocumentPage';
import { PageId } from '../types';

interface PrivacyPageProps { onNavigate: (page: PageId) => void; }

const sections: LegalSection[] = [
  { heading: 'Artikel 1 – Wie is verantwoordelijk voor jouw gegevens?', paragraphs: [
    'Deze privacyverklaring hoort bij Slijpmaat.', 'Handelsnaam: Slijpmaat',
    'Adres: Gerard Noodtstraat 57, 3515 VW Utrecht', 'E-mail: slijpmaat@outlook.com',
    'Telefoon/WhatsApp: 06 82 07 49 67', 'Website: https://slijpmaat.nl',
    'Slijpmaat is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.',
  ] },
  { heading: 'Artikel 2 – Welke persoonsgegevens verwerkt Slijpmaat?', paragraphs: [
    'Slijpmaat verwerkt alleen persoonsgegevens die nodig zijn voor de dienstverlening, klantcommunicatie, administratie en kwaliteitscontrole.',
    'Het kan gaan om de volgende gegevens:', '- naam;', '- adres en woonplaats;',
    '- telefoonnummer en WhatsApp-gegevens;', '- e-mailadres;',
    '- informatie over de opdracht, zoals aantal messen, type messen, ophaal- en bezorgmoment, opmerkingen en prijsafspraken;',
    '- foto’s van messen vóór en/of na het slijpen;',
    '- betaalgegevens, zoals betaalstatus, betaalmethode, factuurgegevens en bankgegevens voor zover zichtbaar bij betaling;',
    '- communicatie via WhatsApp, e-mail, websiteformulier, Google Form, Instagram, Facebook of andere contactkanalen;',
    '- technische gegevens van websitebezoek, voor zover de website of gebruikte tools deze verwerken, zoals browserinformatie, apparaatgegevens of cookies.',
    'Slijpmaat verwerkt geen bijzondere persoonsgegevens, zoals gezondheidsgegevens, religie, politieke voorkeur of BSN, tenzij de Klant deze gegevens ongevraagd zelf deelt en verwerking noodzakelijk is voor afhandeling van de communicatie.',
  ] },
  { heading: 'Artikel 3 – Waarvoor gebruikt Slijpmaat persoonsgegevens?', paragraphs: [
    'Slijpmaat gebruikt persoonsgegevens voor de volgende doelen:',
    '- het aannemen, plannen en uitvoeren van slijpopdrachten;', '- het ophalen en terugbezorgen van messen;',
    '- contact met de Klant via WhatsApp, e-mail, telefoon of andere kanalen;',
    '- het sturen van betaalverzoeken, facturen of betalingsherinneringen;', '- administratie en boekhouding;',
    '- kwaliteitscontrole en interne verbetering van de dienstverlening;',
    '- het maken en bewaren van foto’s van messen voor bewijs, controle en klachtenafhandeling;',
    '- het behandelen van vragen, klachten, schadeclaims of geschillen;', '- het naleven van wettelijke verplichtingen;',
    '- het tonen van promotioneel beeldmateriaal, alleen wanneer dit niet herleidbaar is tot een persoon of wanneer toestemming is gegeven.',
  ] },
  { heading: 'Artikel 4 – Op welke grondslagen verwerkt Slijpmaat gegevens?', paragraphs: [
    'Slijpmaat verwerkt persoonsgegevens op basis van de volgende AVG-grondslagen:',
    'Uitvoering van de overeenkomst: gegevens zijn nodig om de slijpservice uit te voeren, contact te houden, messen op te halen en terug te bezorgen.',
    'Wettelijke verplichting: sommige gegevens moeten worden bewaard voor administratie, belastingverplichtingen of boekhouding.',
    'Gerechtvaardigd belang: Slijpmaat mag gegevens gebruiken voor normale bedrijfsvoering, bewijs van de staat van messen, kwaliteitscontrole, beveiliging, klachtenafhandeling en het voorkomen van misverstanden of schadeclaims. Daarbij weegt Slijpmaat steeds af of de privacy van de Klant niet zwaarder weegt.',
    'Toestemming: voor bepaalde verwerkingen, zoals herkenbaar promotioneel gebruik van beeldmateriaal of marketingberichten, vraagt Slijpmaat vooraf toestemming. De Klant kan deze toestemming later intrekken.',
  ] },
  { heading: 'Artikel 5 – Foto’s van messen', paragraphs: [
    '5.1 Slijpmaat kan vóór en/of na het slijpen foto’s maken van de messen. Deze foto’s worden gebruikt voor interne controle, kwaliteitsbewaking, schadebeoordeling, klachtenafhandeling en bewijs van de staat van de messen bij ontvangst en oplevering.',
    '5.2 Slijpmaat probeert te voorkomen dat op foto’s persoonsgegevens zichtbaar zijn, zoals gezichten, adressen, brieven, kentekens, locatiegegevens of andere herkenbare informatie.',
    '5.3 Foto’s kunnen promotioneel worden gebruikt op bijvoorbeeld de website, Instagram, Facebook of ander marketingmateriaal wanneer de foto’s niet herleidbaar zijn tot een persoon of wanneer de Klant toestemming heeft gegeven.',
    '5.4 De Klant kan voorafgaand aan de opdracht aangeven dat foto’s niet promotioneel gebruikt mogen worden. In dat geval gebruikt Slijpmaat de foto’s alleen intern.',
  ] },
  { heading: 'Artikel 6 – Met wie deelt Slijpmaat persoonsgegevens?', paragraphs: [
    'Slijpmaat verkoopt geen persoonsgegevens aan derden.',
    'Slijpmaat kan persoonsgegevens delen met of laten verwerken door diensten die nodig zijn voor de bedrijfsvoering, zoals:',
    '- e-maildiensten, zoals Outlook of Microsoft;', '- WhatsApp Business of Meta-diensten voor klantcontact;',
    '- Google Forms, Google Sheets of Google Drive voor aanmelding, planning en administratie;',
    '- betaal- of bankdiensten voor betaalverzoeken en betalingen;', '- boekhoudkundige of administratieve diensten;',
    '- website- of hostingdiensten, zoals de aanbieder van de website;',
    '- socialmediaplatforms wanneer de Klant via social media contact opneemt of wanneer beeldmateriaal wordt geplaatst;',
    '- bevoegde instanties wanneer Slijpmaat wettelijk verplicht is gegevens te delen.',
    'Met partijen die namens Slijpmaat persoonsgegevens verwerken, maakt Slijpmaat waar nodig afspraken over beveiliging en vertrouwelijkheid.',
  ] },
  { heading: 'Artikel 7 – Hoe lang bewaart Slijpmaat persoonsgegevens?', paragraphs: [
    'Slijpmaat bewaart persoonsgegevens niet langer dan nodig is voor het doel waarvoor de gegevens zijn verzameld, tenzij een wettelijke bewaartermijn geldt.',
    'Slijpmaat hanteert in principe de volgende bewaartermijnen:',
    '- klant- en opdrachtgegevens: tot maximaal 2 jaar na de laatste opdracht, tenzij langer nodig is voor administratie, klachten of geschillen;',
    '- facturen, betaalgegevens en administratieve gegevens: 7 jaar, voor zover dit nodig is op basis van fiscale bewaarplichten;',
    '- WhatsApp- en e-mailcommunicatie: tot maximaal 2 jaar na de laatste relevante communicatie, tenzij langer nodig is voor klachten, bewijs of administratie;',
    '- foto’s van messen voor interne controle en klachtenafhandeling: tot maximaal 12 maanden na afronding van de opdracht, tenzij langer nodig is vanwege een klacht, schadeclaim of geschil;',
    '- promotioneel beeldmateriaal waarvoor toestemming is gegeven: totdat de toestemming wordt ingetrokken of totdat Slijpmaat het materiaal niet langer gebruikt;',
    '- gegevens van personen die contact opnemen maar geen opdracht plaatsen: tot maximaal 12 maanden na het laatste contactmoment.',
    'Wanneer gegevens niet langer nodig zijn, verwijdert of anonimiseert Slijpmaat deze waar redelijkerwijs mogelijk.',
  ] },
  { heading: 'Artikel 8 – Beveiliging', paragraphs: [
    'Slijpmaat neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik, onbevoegde toegang en ongewenste openbaarmaking.',
    'Voorbeelden hiervan zijn:', '- toegang tot klantgegevens beperken tot personen die deze nodig hebben;',
    '- gebruik van beveiligde accounts en wachtwoorden;', '- zorgvuldig omgaan met foto’s, formulieren en klantcommunicatie;',
    '- geen onnodige persoonsgegevens publiceren;', '- het verwijderen of anonimiseren van gegevens zodra deze niet meer nodig zijn.',
  ] },
  { heading: 'Artikel 9 – Rechten van de Klant', paragraphs: [
    'De Klant heeft op grond van de AVG verschillende rechten. De Klant kan Slijpmaat vragen om:',
    '- inzage in de persoonsgegevens die Slijpmaat verwerkt;', '- correctie van onjuiste of onvolledige gegevens;',
    '- verwijdering van persoonsgegevens;', '- beperking van de verwerking;', '- overdracht van gegevens, voor zover van toepassing;',
    '- bezwaar tegen verwerking op basis van gerechtvaardigd belang;', '- intrekking van eerder gegeven toestemming.',
    'Een verzoek kan worden gestuurd naar slijpmaat@outlook.com. Slijpmaat reageert in principe binnen één maand na ontvangst van het verzoek. Indien een verzoek complex is of wanneer meerdere verzoeken zijn gedaan, kan deze termijn volgens de AVG worden verlengd.',
    'Slijpmaat kan vragen om aanvullende informatie om te controleren of het verzoek door de juiste persoon wordt gedaan.',
  ] },
  { heading: 'Artikel 10 – Marketing en klantcontact', paragraphs: [
    '10.1 Slijpmaat gebruikt contactgegevens voor communicatie over lopende opdrachten, vragen, betalingen en serviceberichten.',
    '10.2 Slijpmaat mag klanten die eerder een bestelling hebben geplaatst benaderen met marketingberichten, acties of promotionele berichten over vergelijkbare diensten. Dit gebeurt alleen wanneer dit wettelijk is toegestaan.',
    '10.3 De Klant kan zich altijd afmelden voor marketingberichten door dit via WhatsApp of e-mail aan Slijpmaat door te geven.',
  ] },
  { heading: 'Artikel 11 – Website en cookies', paragraphs: [
    '11.1 De website van Slijpmaat kan gebruikmaken van technische of functionele cookies die nodig zijn om de website goed te laten werken.',
    '11.2 Indien Slijpmaat analytische of marketingcookies gebruikt waarvoor toestemming nodig is, vraagt Slijpmaat hiervoor vooraf toestemming via de website.',
    '11.3 Externe diensten, zoals socialmediaplatforms, formulierdiensten of websitebouwers, kunnen eigen cookies of vergelijkbare technieken gebruiken wanneer de Klant deze diensten gebruikt of bezoekt.',
  ] },
  { heading: 'Artikel 12 – Minderjarigen', paragraphs: ['Slijpmaat richt haar diensten niet specifiek op minderjarigen. Indien een minderjarige gebruik wil maken van de diensten van Slijpmaat, moet hiervoor toestemming zijn van een ouder of wettelijke vertegenwoordiger.'] },
  { heading: 'Artikel 13 – Wijzigingen in deze privacyverklaring', paragraphs: ['Slijpmaat mag deze privacyverklaring wijzigen wanneer de dienstverlening, wetgeving of gebruikte systemen veranderen. De meest recente versie wordt beschikbaar gesteld via de website of op verzoek toegestuurd.'] },
  { heading: 'Artikel 14 – Vragen of klachten', paragraphs: [
    'Voor vragen over deze privacyverklaring of over de verwerking van persoonsgegevens kan contact worden opgenomen via slijpmaat@outlook.com.',
    'De Klant heeft daarnaast het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens wanneer de Klant vindt dat Slijpmaat niet zorgvuldig met persoonsgegevens omgaat.',
  ] },
];

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => (
  <LegalDocumentPage title="Privacyverklaring Slijpmaat" subtitle="Versie 1.0 — Utrecht — juni 2026" sections={sections} onNavigate={onNavigate} />
);
