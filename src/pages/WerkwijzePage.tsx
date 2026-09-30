import React from 'react';
import { PageId } from '../types';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Clock,
  Layers,
  Award,
  AlertTriangle
} from 'lucide-react';

interface WerkwijzePageProps {
  onNavigate: (page: PageId) => void;
}

export const WerkwijzePage: React.FC<WerkwijzePageProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Beoordeling van de snede',
      desc: 'We inspecteren het lemmet met strijklicht en microscopisch gevoel. We controleren op micro-chips, bramen, scheve snedes en bepalen de exacte geometrie en de staalsoort.'
    },
    {
      num: '02',
      title: 'Keuze van whetstone en korrel',
      desc: 'Afhankelijk van de staat van het mes selecteren we de juiste combinatie professionele Shapton Pro keramische waterstenen: van korrel 320 voor correcties tot 1000, 2000 en 5000+ voor verfijning.'
    },
    {
      num: '03',
      title: 'Handmatig slijpen onder vaste hoek',
      desc: 'Geen elektrische machines. Het lemmet wordt met water gekoeld en met getrainde spiergeheugenvingers onder een constante hoek (12-15° voor Japans, 15-20° voor Europees) over de steen bewogen.'
    },
    {
      num: '04',
      title: 'Opbouw van hiel tot punt',
      desc: 'We bouwen de nieuwe snijvouw (de apex) gelijkmatig op over de volle lengte van het lemmet, zodat de buik zijn natuurlijke snijdynamiek behoudt zonder holle plekken.'
    },
    {
      num: '05',
      title: 'Braamvorming en ontbramen',
      desc: 'We voelen langs het lemmet naar de micro-braam (burr) die aangeeft dat de twee facetten elkaar perfect raken. Vervolgens verwijderen we de braam zorgvuldig met vederlichte halen over een fijnere steen.'
    },
    {
      num: '06',
      title: 'Afstroppen op leder met polijstpasta',
      desc: 'Het mes wordt afgestropt op een plantaardig gelooide lederen riem geïmpregneerd met ultrafijne chroomoxide/diamantpolijstpasta. Dit verwijdert microscopische rafeltjes en geeft een spiegelglans.'
    },
    {
      num: '07',
      title: 'Controle & scherptetests',
      desc: 'We testen de snede op glad A4 papier en controleren of het mes zonder enige neerwaartse druk door een rijpe tomaat glijdt. Pas als het mes aan al onze kwaliteitseisen voldoet, wordt het goedgekeurd.'
    },
    {
      num: '08',
      title: 'Veilig inpakken & overdracht',
      desc: 'Het mes wordt veilig verpakt met beschermend materiaal om de snijkant te beschermen en binnen 48 uur na ophalen weer bij jou thuis of in de horecakeuken bezorgd.'
    }
  ];

  const gritStages = [
    { grit: '#320', name: 'Shapton Pro Rough', purpose: 'Voor chips, vervormde snedes en profielherstel' },
    { grit: '#1000', name: 'Shapton Pro Medium', purpose: 'Opbouw van de strakke basis-snijvouw (apex)' },
    { grit: '#2000', name: 'Shapton Pro Fine', purpose: 'Verfijnen van kraspatronen en scherpteopbouw' },
    { grit: '#5000', name: 'Shapton Pro Super Fine', purpose: 'Zijdezachte afwerking en verwijderen micro-bramen' },
    { grit: '#8000', name: 'Shapton Pro Polish', purpose: 'Hoogglans spiegelafwerking voor Japanse staalsoorten' },
    { grit: 'Strop', name: 'Plantaardig Leder', purpose: 'Afstroppen met chroomoxide polijstpasta voor fluweelzachte snede' },
  ];

  return (
    <div className="space-y-16 pb-20 bg-[#FAFAFA]">
      {/* Header */}
      <section className="bg-[#244A30] text-white py-14 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-[#A9C89E] tracking-wider uppercase font-heading bg-[#315F3B] px-3.5 py-1.5 rounded-full inline-block">
              Het Slijpmaat Ambacht
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Onze 8-staps werkwijze op whetstones.
            </h1>
            <p className="text-base sm:text-lg text-[#E8EFE8]/90 leading-relaxed">
              Waarom wij weigeren droge slijpmachines te gebruiken: handmatig watergekoeld slijpen garandeert maximale scherpte zonder dat het staal zijn harding verliest.
            </p>
          </div>
        </div>
      </section>

      {/* Waarom Whetstones vs Machinaal (Diagrammatic / Typographic - NO PHOTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d9e1d7] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
                De wetenschap van scherpte
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#244A30]">
                Whetstones vs. droge slijpmachines
              </h2>
              <p className="text-xs sm:text-sm text-[#203728] leading-relaxed">
                Een modern keukenmes bestaat uit speciaal gehard staal (56 tot 64 Rockwell C). Deze kristalstructuur ontstaat door gecontroleerde verhitting en afkoeling tijdens de productie.
              </p>
              <div className="space-y-2.5 text-xs sm:text-sm text-[#203728]">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-[#E87B5B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#244A30]">Het gevaar van droge machines:</strong> Een ronddraaiende schuurband creëert binnen 2 seconden een temperatuur van &gt;200°C op de uiterste snede. Het staal ontlaat, wordt zacht en blijft na het slijpen nog maar heel even scherp.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#3B7F4B] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#244A30]">Het voordeel van Japanse waterstenen:</strong> De stenen worden constant gespoeld met water. Geen wrijvingshitte, 100% behoud van de fabrieksgeharde kristalstructuur en minimale staalafname.
                  </span>
                </div>
              </div>
            </div>

            {/* Clean Grit Progression Diagram (Replacing previous photo) */}
            <div className="bg-[#F7F4EC] rounded-2xl p-6 border border-[#d9e1d7] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#d9e1d7]">
                <h3 className="font-bold font-heading text-sm text-[#244A30]">
                  Onze Shapton Pro Waterstenenreeks
                </h3>
                <span className="text-[11px] font-bold text-[#3B7F4B]">Watergekoeld</span>
              </div>

              <div className="space-y-2.5">
                {gritStages.map((stage, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-white border border-[#d9e1d7] flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="w-14 text-center py-1 px-1.5 rounded bg-[#E8EFE8] font-mono font-bold text-[#244A30] text-[11px]">
                        {stage.grit}
                      </span>
                      <div>
                        <span className="font-bold text-[#244A30] block">{stage.name}</span>
                        <span className="text-[#657068] text-[11px]">{stage.purpose}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Steps Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-[#3B7F4B] font-heading">
            Stap voor stap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#244A30] mt-1">
            Het volledige slijpproces
          </h2>
          <p className="text-xs sm:text-sm text-[#657068] mt-2">
            Elk mes doorloopt dit gecontroleerde traject in onze Utrechtse slijpstudio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="bg-white rounded-2xl p-6 border border-[#d9e1d7] shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-2xl font-black font-heading text-[#3B7F4B] block mb-2">
                  {step.num}
                </span>
                <h3 className="font-bold text-base font-heading text-[#244A30] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#203728] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3B7F4B] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Ervaar het verschil van echt whetstone slijpwerk.
            </h3>
            <p className="text-sm text-white/90 max-w-xl">
              Vanaf 3 messen gratis opgehaald en binnen 48 uur vlijmscherp terugbezorgd in Utrecht.
            </p>
          </div>
          <button
            onClick={() => onNavigate('particulieren')}
            className="px-8 py-4 rounded-full bg-white text-[#244A30] font-bold text-sm hover:bg-[#F7F4EC] transition-all shadow-xs cursor-pointer whitespace-nowrap"
          >
            Plan je slijpbeurt
          </button>
        </div>
      </section>
    </div>
  );
};
