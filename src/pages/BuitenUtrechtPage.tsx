import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import {
  MapPin,
  MessageCircle,
  Package,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Clock,
  Car,
  HelpCircle,
  Compass,
  AlertTriangle
} from 'lucide-react';

interface BuitenUtrechtPageProps {
  onNavigate: (page: PageId) => void;
}

export const BuitenUtrechtPage: React.FC<BuitenUtrechtPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik kom van buiten Utrecht en wil graag mijn messen laten slijpen op afspraak!')}`;

  const faqs = [
    {
      q: 'Kan ik zomaar langskomen zonder afspraak?',
      a: 'Nee, Slijpmaat heeft bewust géén traditionele inloopwinkel. We werken geconcentreerd aan de werkbank met vlijmscherp gereedschap. Door vooraf via WhatsApp even af te stemmen, weet je zeker dat Teun of Mike persoonlijk aanwezig is om je messen veilig aan te nemen.'
    },
    {
      q: 'Kan ik wachten terwijl jullie slijpen?',
      a: 'Met de hand slijpen op waterstenen en afstroppen kost tijd en precisie (gemiddeld 15 tot 25 minuten per mes). Wachten is meestal niet praktisch, maar bij spoed kunnen we in overleg kijken wat er dezelfde dag mogelijk is. Veel klanten combineren het met een lunch of koffie in de binnenstad!'
    },
    {
      q: 'Geldt hetzelfde tarief als in Utrecht?',
      a: 'Jazeker! Onze slijptarieven zijn voor iedereen gelijk: vanaf €6,50 voor een klein schilmes, €8,50 voor een normaal koksmes (15–20 cm) en €10,50 voor grote koksmessen. Breng je ze zelf langs, dan betaal je vanzelfsprekend €0,- bezorgkosten.'
    },
    {
      q: 'Hoe verpak ik mijn messen veilig voor de autorit of fietstocht?',
      a: 'Rol elk mes strak in een dikke theedoek of handdoek en doe er eventueel elastiekjes omheen. Ook kun je een stuk karton dubbelvouwen over de snede en vastplakken. Zo beschadig je de snede niet én reis je 100% veilig.'
    },
    {
      q: 'Kan ik mijn messen ook opsturen per post?',
      a: 'Ja, dat kan in overleg! Stuur ons eerst even een appje met foto\'s of het aantal messen. Vervolgens stuur je het pakket goed ingepakt naar ons atelier in Utrecht. Na het slijpen sturen we ze vlijmscherp en verzekerd via PostNL weer naar je terug.'
    },
    {
      q: 'Ik heb een horecakeuken of cateraar buiten Utrecht. Komen jullie dan wel langs?',
      a: 'Voor horeca, restaurants en grotere batches (vanaf ca. 10–15 messen) in de regio (Zeist, Amersfoort, Houten, Nieuwegein, Maarssen, Hilversum) maken we graag een ophaalafspraak op maat. Neem even contact met ons op via WhatsApp of het zakelijke formulier!'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Header Banner */}
      <section className="bg-[#244A30] text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
              Service buiten Utrecht
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Ik kom buiten Utrecht, wat nu?
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Woon of kook je buiten onze Utrechtse bezorgzone? Geen enkel probleem! Wekelijks slijpen we messen voor koks en liefhebbers uit Zeist, Houten, Amersfoort, Hilversum, Nieuwegein en ver daarbuiten.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#E87B5B] hover:bg-[#C95E3E] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Plan afspraak via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('ophalen-bezorgen')}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#A9C89E]" />
                <span>Bekijk Utrecht servicegebied</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Belangrijk kader: Geen inloopwinkel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="p-6 rounded-2xl bg-[#F7F4EC] border border-[#dcd7cb] flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-xs">
          <div className="w-11 h-11 rounded-xl bg-white border border-[#d9e1d7] flex items-center justify-center shrink-0 text-[#E87B5B]">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-slate-900 block font-heading text-base">
              Belangrijk: altijd even een afspraak maken via WhatsApp.
            </strong>
            Slijpmaat heeft géén inloopwinkel met een open balie. We werken geconcentreerd aan de werkbank. Door vooraf even te appen, zorgen we dat we klaarstaan en je messen direct veilig aannemen.
          </div>
        </div>
      </section>

      {/* 2. De 3 Opties voor klanten buiten Utrecht */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
            Jouw mogelijkheden
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 mt-1">
            Hoe krijg je jouw messen vlijmscherp?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Kies de manier die voor jou het makkelijkst werkt:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Optie 1 */}
          <div className="bg-white rounded-3xl border-2 border-[#3B7F4B]/30 p-7 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#E8EFE8] text-[#3B7F4B] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-heading">
              Meest gekozen
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E8EFE8] flex items-center justify-center text-[#3B7F4B]">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                1. Zelf langsbrengen op afspraak
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Breng je messen langs bij ons atelier aan de <strong>Gerard Noodtstraat 57 in Utrecht</strong>. Ideaal te combineren met een werkdag, een rondje stad of familiebezoek.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                  <span><strong>€0,- bezorgkosten</strong> (helemaal gratis)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                  <span>Vaak binnen <strong>24–48 uur</strong> alweer klaar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                  <span>Afspreken wanneer het jou goed uitkomt</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#3B7F4B] hover:bg-[#244A30] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Maak een brengafspraak</span>
              </a>
            </div>
          </div>

          {/* Optie 2 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF4EF] flex items-center justify-center text-[#E87B5B]">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                2. Veilig opsturen per post
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Woon je verder weg in Nederland? Je kunt je messen in overleg met ons veilig verpakt opsturen. Wij slijpen ze zorgvuldig en sturen ze verzekerd weer terug.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                  <span>Vooraf even overleggen via WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                  <span>Duidelijke inpakinstructies van ons</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                  <span>Verzekerd en vlijmscherp retour met PostNL</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <a
                href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik wil graag overleggen over het opsturen van mijn messen per post!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl border-2 border-[#3B7F4B] text-[#3B7F4B] hover:bg-[#E8EFE8] font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Overleg postverzending</span>
              </a>
            </div>
          </div>

          {/* Optie 3 */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E8EFE8] flex items-center justify-center text-[#3B7F4B]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                3. Horeca &amp; grote batches (10+)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Ben je chef, restaurateur of cateraar in Zeist, Nieuwegein, Houten, Amersfoort of Hilversum? Vanaf ca. 10–15 messen komen we graag naar je toe.
              </p>
              <ul className="space-y-2 pt-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                  <span>Ophalen en bezorgen in overleg</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                  <span>Eventueel leenmessen beschikbaar</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                  <span>Vaste slijpcyclus op factuur (excl. btw)</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => onNavigate('horeca')}
                className="w-full py-3 rounded-xl bg-[#F7F4EC] hover:bg-[#E8EFE8] text-[#3B7F4B] font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Bekijk zakelijke service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4-Stappenplan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F4EC] rounded-3xl p-8 sm:p-12 border border-[#dcd7cb]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
              Stap voor stap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mt-1">
              Hoe werkt het als je van buiten Utrecht komt?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-2xl font-black font-heading text-[#3B7F4B]">01</span>
              <h4 className="font-bold text-slate-900 text-sm">Stuur een appje</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Laat ons via WhatsApp weten hoeveel messen je wilt laten slijpen en wanneer je in de buurt bent.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-2xl font-black font-heading text-[#3B7F4B]">02</span>
              <h4 className="font-bold text-slate-900 text-sm">Langsbrengen</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Op het afgesproken tijdstip geef je de messen af aan de Gerard Noodtstraat 57 in Utrecht.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-2xl font-black font-heading text-[#3B7F4B]">03</span>
              <h4 className="font-bold text-slate-900 text-sm">Handmatig geslepen</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We slijpen je messen zorgvuldig op Japanse waterstenen en stroppen de snede haarscherp af.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-2xl font-black font-heading text-[#3B7F4B]">04</span>
              <h4 className="font-bold text-slate-900 text-sm">Ophalen &amp; genieten</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Binnen 24–48 uur ontvang je een seintje dat ze vlijmscherp klaarliggen voor vertrek!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Locatie, route & bereikbaarheid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
              Atelierlocatie
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
              Gerard Noodtstraat 57, Utrecht
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ons atelier ligt in de gezellige wijk <strong>Tuinwijk / Vogelenbuurt</strong> in Utrecht-Oost/Noordoost. Vanaf de A27 of A28 ben je via de Kardinaal de Jongweg binnen enkele minuten bij ons.
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-3">
                <Car className="w-5 h-5 text-[#3B7F4B] shrink-0" />
                <span><strong>Parkeren:</strong> Ruime parkeergelegenheid direct in de straat voor snel afgeven en inladen.</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#3B7F4B] shrink-0" />
                <span><strong>Afhaaltijden:</strong> Maandag t/m zaterdag van 10:00 tot 21:00 uur (op afspraak).</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#3B7F4B] shrink-0" />
                <span><strong>Persoonlijk contact:</strong> Je geeft je messen rechtstreeks af aan de slijper.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/place/Slijpmaat.nl/@52.1032142,5.1191271,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#3B7F4B] hover:bg-[#244A30] text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="px-6 py-3 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Bereken je slijpkosten</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-[#E8EFE8] rounded-2xl p-6 sm:p-8 space-y-4 border border-[#d9e1d7]">
            <h4 className="font-heading font-bold text-[#3B7F4B] text-lg">
              Tips voor veilig messen vervoeren
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Als je messen meeneemt in de auto of op de fiets, is veiligheid belangrijk voor zowel jou als de snede:
            </p>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-start gap-2.5">
                <span className="font-bold text-[#3B7F4B]">1.</span>
                <span><strong>Theedoek-rol:</strong> Rol messen één voor één in een stevige theedoek zodat de lemmeten elkaar niet raken.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-start gap-2.5">
                <span className="font-bold text-[#3B7F4B]">2.</span>
                <span><strong>Kartonnen schede:</strong> Vouw een stuk karton om het lemmet en tape de rand vast als beschermhoes.</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-start gap-2.5">
                <span className="font-bold text-[#3B7F4B]">3.</span>
                <span><strong>Messenmap of doos:</strong> Gebruik een foedraal, doos of tas zodat de messen stabiel liggen tijdens de reis.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Veelgestelde Vragen (FAQ) Buiten Utrecht */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
            Antwoorden op je vragen
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mt-1">
            Veelgestelde vragen over buiten Utrecht
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Afsluitende CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#244A30] rounded-3xl p-8 sm:p-12 text-white text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold font-heading text-white">
              Klaar voor vlijmscherpe messen?
            </h2>
            <p className="text-sm sm:text-base text-[#E8EFE8]/90 leading-relaxed">
              Stuur ons direct een berichtje via WhatsApp. We reageren snel en plannen samen het beste breng- of verzendmoment in.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-[#E87B5B] hover:bg-[#C95E3E] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Stuur je Maat een appje</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
