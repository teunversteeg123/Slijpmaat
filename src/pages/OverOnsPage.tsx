import React from 'react';
import { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { SlijpmaatLogo } from '../components/SlijpmaatLogo';
import {
  Sparkles,
  ShieldCheck,
  MapPin,
  Heart,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Check
} from 'lucide-react';

interface OverOnsPageProps {
  onNavigate: (page: PageId) => void;
}

export const OverOnsPage: React.FC<OverOnsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20 bg-[#FAFAFA]">
      {/* Header */}
      <section className="bg-[#244A30] text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
              De gezichten achter Slijpmaat
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Over Teun &amp; Mike.
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Twee vrienden uit Utrecht met een gedeelde passie voor lekker eten, goed gereedschap en de kunst van traditioneel Japans watersteenslijpen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Authentic Brand Card (NO PHOTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
              Ons Verhaal
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-[#3B7F4B] leading-tight">
              Jouw maten voor scherpe messen.
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#203728] leading-relaxed">
              <p>
                Messenslijpen is een oud vak, maar de service eromheen mag best van nu zijn. We zagen hoeveel goede messen werden weggegooid terwijl ze vaak alleen bot waren. Zonde, vonden wij.
              </p>
              <p>
                Daarom begonnen we Slijpmaat: goed slijpwerk, persoonlijk contact en service waar je graag voor terugkomt. Geen agressieve machines die je lemmet verhitten of hol schuren, maar handmatig werk op Japanse Shapton Pro waterstenen.
              </p>
              <p>
                Of je nu thuiskok bent met twee fijne messen of een chef met een hele messenrol: wij behandelen elk lemmet met dezelfde toewijding.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#203728]">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span>Geen industriële massaproductie, maar persoonlijke zorg per mes.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                <span>Minimale staalafname zodat je mes een leven lang meegaat.</span>
              </div>
            </div>
          </div>

          {/* Founders Badge Card (Replacing Photo) */}
          <div className="lg:col-span-6">
            <div className="bg-[#F7F4EC] rounded-3xl p-8 border-2 border-[#3B7F4B]/30 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#3B7F4B]/20">
                <SlijpmaatLogo variant="green-badge" size="sm" />
                <div className="text-right">
                  <span className="text-xs font-bold text-[#3B7F4B] block">Teun &amp; Mike</span>
                  <span className="text-[11px] text-[#657068]">Oprichters Slijpmaat</span>
                </div>
              </div>

              <blockquote className="p-4 bg-white rounded-2xl border border-[#d9e1d7] text-xs sm:text-sm italic text-[#203728] leading-relaxed">
                &ldquo;Een koksmes is een verlengstuk van je hand. Zodra je moet duwen of zagen, verdwijnt het kookplezier. Wij zorgen dat jouw messen binnen 48 uur weer fluweelzacht door elke tomaat glijden.&rdquo;
              </blockquote>

              <div className="grid grid-cols-2 gap-3 text-xs text-[#3B7F4B]">
                <div className="p-3 bg-white rounded-xl border border-[#d9e1d7]">
                  <span className="text-slate-500 block text-[11px]">Vestiging</span>
                  <strong>{SLIJPMAAT_INFO.fullAddress}</strong>
                  <span className="text-[#3B7F4B] block text-[10px]">Alleen op afspraak</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#d9e1d7]">
                  <span className="text-slate-500 block text-[11px]">Direct Contact</span>
                  <strong>{SLIJPMAAT_INFO.whatsappDisplay}</strong>
                  <span className="text-[#3B7F4B] block text-[10px]">Stuur gerust een appje</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Kernwaarden */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F4EC] rounded-3xl p-8 sm:p-12 border border-[#d9e1d7]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
              Waar wij voor staan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#3B7F4B] mt-1">
              De Slijpmaat belofte
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#d9e1d7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] text-[#3B7F4B] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-bold text-[#3B7F4B] text-base font-heading">Eerlijk en transparant</h3>
              <p className="text-xs text-[#203728] leading-relaxed">
                Vaste, heldere prijzen per mesformaat. Geen verborgen toeslagen achteraf. Is een mes niet veilig te slijpen of raden we het af? Dan zeggen we dat eerlijk.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#d9e1d7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] text-[#3B7F4B] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-bold text-[#3B7F4B] text-base font-heading">Respect voor het staal</h3>
              <p className="text-xs text-[#203728] leading-relaxed">
                We behandelen elk koksmes alsof het ons eigen gereedschap is. Alleen professionele Shapton Pro stenen, waterkoeling en lederen strops.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#d9e1d7] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#E8EFE8] text-[#3B7F4B] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-bold text-[#3B7F4B] text-base font-heading">Lokaal &amp; benaderbaar</h3>
              <p className="text-xs text-[#203728] leading-relaxed">
                Snel schakelen via WhatsApp met &lsquo;je Maat&rsquo;. Geen logge ticketsystemen: gewoon direct contact met Teun of Mike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3B7F4B] rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Kom je messen toevertrouwen aan je Maat.
            </h3>
            <p className="text-sm text-white/90">
              Vanaf 3 messen gratis ophalen in Utrecht &middot; Buiten Utrecht welkom op afspraak.
            </p>
          </div>
          <button
            onClick={() => onNavigate('particulieren')}
            className="px-8 py-4 rounded-full bg-white text-[#3B7F4B] font-bold text-sm hover:bg-[#F7F4EC] transition-colors shadow-xs cursor-pointer whitespace-nowrap"
          >
            Plan je slijpbeurt
          </button>
        </div>
      </section>
    </div>
  );
};
