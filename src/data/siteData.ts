export const SLIJPMAAT_INFO = {
  fullAddress: 'Gerard Noodtstraat 57, 3515 VW Utrecht',
  whatsappNumber: '+31682074967',
  whatsappDisplay: '06 82 07 49 67',
  email: 'slijpmaat@outlook.com',
  prices: {
    small: { name: 'Klein mes', size: 'Korter dan 15 cm', price: 6.50, desc: 'Schilmessen, officemessen, kleine tourneermessen' },
    normal: { name: 'Normaal mes', size: '15 tot 19,99 cm', price: 8.50, desc: 'Kleine koksmessen, santoku’s, universele messen' },
    large: { name: 'Groot mes', size: '20 tot en met 25 cm', price: 10.50, desc: 'Chefsmessen, vleesmessen, grote santoku’s' },
    extraLarge: { name: 'Extra groot mes', size: 'Langer dan 25 cm', price: 0, custom: true, desc: 'Zalmmessen, grote trancheermessen (prijs op aanvraag)' },
    student: { name: 'StudentenMaat', price: 5.00, desc: 'Speciaal studententarief per mes (op vertoon geldige collegekaart, extra groot uitgesloten)' },
    chipRepair: { name: 'Kleine chip herstellen', price: 2.50, desc: 'Verwijderen van een kleine hap uit de snede op grove korrelsteen' },
    profileRepair: { name: 'Nieuw profiel aanbrengen', price: 8.50, desc: 'Herstellen van een ernstig vervormde snede, doorgebogen buik of afgebroken punt' }
  }
};

export const SERVICE_AREAS = [
  { district: 'Binnenstad', zip: '3511, 3512', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Oost / Wilhelminapark', zip: '3581, 3582, 3583', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Wittevrouwen / Buiten Wittevrouwen', zip: '3572', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Noordoost / Tuindorp / Tuinwijk', zip: '3571, 3573', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Lombok / Nieuw Engeland', zip: '3531, 3532', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Zuid / Tolsteeg / Hoograven', zip: '3523, 3524, 3525', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'West / Oog in Al', zip: '3533', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Noordwest / Ondiep / Pijlsweerd', zip: '3513, 3551, 3552', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Overvecht', zip: '3561 - 3564', note: 'Gratis ophalen/bezorgen vanaf 3 messen' },
  { district: 'Leidsche Rijn / Vleuten / De Meern', zip: '3451 - 3545', note: 'In overleg / vaste ophaaldagen' },
  { district: 'Buiten Utrecht (bijv. Zeist, Hilversum, Amersfoort)', zip: 'Overig NL', note: 'Op afspraak langsbrengen en ophalen in Utrecht' }
];

export const FAQS = [
  {
    q: 'Hoe geef ik mijn messen veilig mee?',
    a: 'We vervoeren je messen veilig in onze eigen ophaal- en bezorgtas. Verpak je messen bij voorkeur extra in een theedoek, krant of messenhoes. Zo blijven je messen én onze vingers heel.'
  },
  {
    q: 'Welke typen / soorten messen slijpt mijn Maat?',
    a: 'Wij slijpen alle gladde messen, zoals koksmessen, schilmessen en andere gladde messen. Speciale messen beoordelen we vooraf. Kartelmessen slijpen we op dit moment niet.'
  },
  {
    q: 'Slijpt mijn Maat ook Japanse messen?',
    a: 'Ja, Japanse messen slijpen we, maar door het staal en de slijphoek vragen ze vaak om een andere aanpak. Stuur daarom vooraf via WhatsApp een foto en het merk of type van je mes. Je Maat beoordeelt dan of we het mes zorgvuldig kunnen slijpen. Kartelmessen slijpen we op dit moment niet.'
  },
  {
    q: 'Hoe lang duurt het voordat ik weer scherpe messen heb?',
    a: 'We streven ernaar om je messen binnen 48 uur na het ophalen weer vlijmscherp terug te brengen. De exacte doorlooptijd kan variëren door drukte. We spreken daarom vooraf duidelijk af wanneer je messen worden opgehaald en teruggebracht.'
  },
  {
    q: 'Hoe gaat mijn Maat te werk met het slijpen van mijn messen?',
    a: 'We controleren eerst de staat van je mes. Daarna slijpen we met professionele Shapton Pro-slijpstenen in meerdere stappen. Vervolgens werken we het mes af op leer voor een strak en scherp resultaat.'
  },
  {
    q: 'Hoe kom ik in contact met mijn Maat?',
    a: 'Heel makkelijk via WhatsApp. Stuur een berichtje met hoeveel messen je wilt laten slijpen en waar je woont. Dan plant je Maat de rest met je in. Heb je nog vragen? Stel ze gerust.'
  },
  {
    q: 'Hoe kan ik mijn Maat betalen?',
    a: 'Betalen kan makkelijk via Tikkie, betaalverzoek, factuur of contant bij het terugbrengen van de messen.'
  },
  {
    q: 'Heeft Slijpmaat een winkel of komt mijn Maat aan huis?',
    a: 'Slijpmaat heeft geen inloopwinkel. Je kunt wel op afspraak bij ons langskomen om je messen af te geven en weer op te halen. Daarnaast halen we je messen bij je thuis op en brengen we ze na het slijpen netjes terug.'
  },
  {
    q: 'In welke Utrechtse wijken en postcodes haalt mijn Maat messen op?',
    a: 'Je Maat haalt keukenmessen op in de volgende Utrechtse wijken en postcodegebieden:\n• Binnenstad en centrum: 3511 en 3512\n• Noordwest – Pijlsweerd, Ondiep en Zuilen: 3513 en 3551 t/m 3555\n• Noordoost – Tuinwijk, Tuindorp, Wittevrouwen en Voordorp: 3514, 3515 en 3571 t/m 3573\n• Overvecht: 3561 t/m 3566\n• Oost – Oudwijk, Abstede, Wilhelminapark en Rijnsweerd: 3581 t/m 3585\n• Zuid – Tolsteeg, Hoograven en Lunetten: 3523 t/m 3525\n• Zuidwest – Dichterswijk, Rivierenwijk, Transwijk en Kanaleneiland: 3521, 3522, 3526 en 3527\n• West – Lombok, Oog in Al en Nieuw Engeland: 3531 t/m 3534 en 3542\n• Leidsche Rijn – Terwijde, Het Zand, Parkwijk en Langerak: 3528, 3541 en 3543 t/m 3545\n\nVul in het bestelformulier je postcode in om de bezorgprijs te bekijken. Vanaf drie messen komen we gratis langs.',
    items: [
      'Binnenstad en centrum: 3511 en 3512',
      'Noordwest – Pijlsweerd, Ondiep en Zuilen: 3513 en 3551 t/m 3555',
      'Noordoost – Tuinwijk, Tuindorp, Wittevrouwen en Voordorp: 3514, 3515 en 3571 t/m 3573',
      'Overvecht: 3561 t/m 3566',
      'Oost – Oudwijk, Abstede, Wilhelminapark en Rijnsweerd: 3581 t/m 3585',
      'Zuid – Tolsteeg, Hoograven en Lunetten: 3523 t/m 3525',
      'Zuidwest – Dichterswijk, Rivierenwijk, Transwijk en Kanaleneiland: 3521, 3522, 3526 en 3527',
      'West – Lombok, Oog in Al en Nieuw Engeland: 3531 t/m 3534 en 3542',
      'Leidsche Rijn – Terwijde, Het Zand, Parkwijk en Langerak: 3528, 3541 en 3543 t/m 3545'
    ]
  },
  {
    q: 'Kan mijn Maat ook buiten het vaste bezorggebied langskomen?',
    a: 'Ja, op aanvraag halen we ook keukenmessen op in Vleuten-De Meern en verschillende plaatsen rondom Utrecht:\n• Vleuten en Vleuterweide: 3451 en 3452\n• De Meern en Veldhuizen: 3453 en 3454\n• Haarzuilens: 3455\n• Rijnenburg: 3546\n• Nieuwegein: 3431 t/m 3439\n• Houten: 3991 t/m 3995\n• Maarssen: 3601 t/m 3608\n• De Bilt: 3731 en 3732\n\nWoon je in een van deze gebieden? Stuur je Maat via WhatsApp je postcode en het aantal messen. Dan laten we je weten wanneer we kunnen langskomen en wat de bezorgkosten zijn.',
    items: [
      'Vleuten en Vleuterweide: 3451 en 3452',
      'De Meern en Veldhuizen: 3453 en 3454',
      'Haarzuilens: 3455',
      'Rijnenburg: 3546',
      'Nieuwegein: 3431 t/m 3439',
      'Houten: 3991 t/m 3995',
      'Maarssen: 3601 t/m 3608',
      'De Bilt: 3731 en 3732'
    ]
  },
  {
    q: 'Wat kost het om mijn keukenmessen te laten slijpen?',
    a: 'Een klein keukenmes korter dan 15 centimeter kost €6,50. Voor een normaal keukenmes van 15 tot 19,99 centimeter betaal je €8,50. Een groot keukenmes van 20 tot en met 25 centimeter kost €10,50. Messen langer dan 25 centimeter beoordelen we vooraf en slijpen we op aanvraag. In het bestelformulier zie je vooraf de berekende prijs; reparaties bespreken we altijd eerst.'
  },
  {
    q: 'Kan mijn Maat chips en beschadigingen in een mes herstellen?',
    a: 'Ja, kleine chips en beschadigingen kunnen we vaak tijdens de slijpbeurt herstellen. Een kleine chip herstellen kost €2,50 extra. Is het profiel van het mes beschadigd? Dan kunnen we voor €8,50 extra een nieuw profiel aanbrengen. Reparaties voeren we alleen uit in combinatie met een slijpbeurt.'
  },
  {
    q: 'Waarom slijpt mijn Maat keukenmessen met de hand?',
    a: 'We slijpen jouw keukenmessen met de hand op professionele Shapton Pro-slijpstenen. Zo houden we controle over de slijphoek en halen we zo min mogelijk materiaal van het mes weg. Daarna verwijderen we de braam en werken we de snede af op leer voor een strak en scherp resultaat.'
  },
  {
    q: 'Krijg ik als student korting op mijn slijpbeurt?',
    a: 'Ja. Als StudentenMaat betaal je €5 per keukenmes. Selecteer in het bestelformulier de optie ‘Ik ben een StudentenMaat’. De studentenkorting wordt dan automatisch in de totaalprijs verwerkt.'
  }
];
