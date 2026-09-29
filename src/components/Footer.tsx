import React from 'react';
import { SlijpmaatLogo } from './SlijpmaatLogo';
import { PageId } from '../types';
import { MessageCircle, MapPin, Clock, ShieldCheck, Mail, Phone, ExternalLink } from 'lucide-react';
import { SLIJPMAAT_INFO } from '../data/siteData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAFAFA] text-[#244A30] pt-16 pb-12 border-t-2 border-[#3B7F4B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3B7F4B]/20">
          {/* Col 1 & 2: Brand & Utrecht Location info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B7F4B] rounded-lg"
            >
              <SlijpmaatLogo variant="dark" showTagline={true} />
            </button>
            <p className="text-sm text-[#203728] leading-relaxed max-w-sm">
              Slijpmaat is dé professionele messenslijper in Utrecht. Met de hand geslepen op traditionele Japanse whetstones voor maximale scherpte en minimale materiaalafname.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-[#203728]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#244A30]">{SLIJPMAAT_INFO.fullAddress}</strong>
                  <br />
                  <span className="text-[#657068]">{SLIJPMAAT_INFO.addressNote}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                <span>Openingstijden: {SLIJPMAAT_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                <a href={`tel:${SLIJPMAAT_INFO.whatsappNumber}`} className="font-semibold hover:underline">
                  {SLIJPMAAT_INFO.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#3B7F4B] shrink-0" />
                <a href={`mailto:${SLIJPMAAT_INFO.email}`} className="font-semibold hover:underline">
                  {SLIJPMAAT_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={`https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik heb een vraag over het slijpen van mijn messen!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B7F4B] text-white font-bold text-xs hover:bg-[#244A30] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Stuur je Maat een appje</span>
              </a>

              <a
                href="https://www.google.com/maps/place/Slijpmaat.nl/@52.1032142,5.1191271,17z/data=!3m1!4b1!4m6!3m5!1s0x2db61c15d9f3a351:0x81e0896d1578558b!8m2!3d52.1032142!4d5.1191271!16s%2Fg%2F11njwnblms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#E8EFE8] text-[#244A30] font-semibold text-xs hover:bg-[#d5e2d5] transition-colors"
              >
                <span>Bekijk op Google</span>
                <ExternalLink className="w-3 h-3 text-[#3B7F4B]" />
              </a>
            </div>
          </div>

          {/* Col 3: Diensten & Doelgroep */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#244A30] font-heading">
              Diensten &amp; Doelgroep
            </h4>
            <ul className="space-y-2 text-sm text-[#203728]">
              <li>
                <button
                  onClick={() => handleNav('particulieren')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Voor Particulieren &amp; Thuiskoks
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('horeca')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Voor Horeca &amp; Restaurants
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('dienst-keukenmessen')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Keukenmessen slijpen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('dienst-japanse-messen')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Japanse messen slijpen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('dienst-chips-herstellen')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Chips &amp; beschadigingen herstellen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('dienst-wel-niet')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer font-medium"
                >
                  Wat slijpen we wel &amp; niet?
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Slijpen & Bestellen */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#244A30] font-heading">
              Slijpen &amp; Bestellen
            </h4>
            <ul className="space-y-2 text-sm text-[#203728]">
              <li>
                <button
                  onClick={() => handleNav('werkwijze')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Onze Whetstone Werkwijze
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('prijzen-bestellen')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer font-bold text-[#3B7F4B]"
                >
                  Prijzen &amp; direct bestellen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ophalen-bezorgen')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Ophalen, bezorgen &amp; langsbrengen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reviews')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Reviews &amp; Resultaten
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Veelgestelde vragen (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Bedrijf & Informatie */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#244A30] font-heading">
              Bedrijf &amp; Kennis
            </h4>
            <ul className="space-y-2 text-sm text-[#203728]">
              <li>
                <button
                  onClick={() => handleNav('kennisbank')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Kennisbank over messen
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('over-ons')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Over Teun &amp; Mike
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer"
                >
                  Contact &amp; Afspraak maken
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('algemene-voorwaarden')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer text-xs text-[#657068]"
                >
                  Algemene voorwaarden
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="hover:text-[#3B7F4B] transition-colors text-left cursor-pointer text-xs text-[#657068]"
                >
                  Privacyverklaring
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#657068]">
          <p>© {new Date().getFullYear()} Slijpmaat.nl &middot; Gerard Noodtstraat 57, Utrecht &middot; Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#3B7F4B] font-semibold">Handgeslepen op Shapton Pro whetstones</span>
            <span>&middot;</span>
            <span>Meer snijden, minder zagen!</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
