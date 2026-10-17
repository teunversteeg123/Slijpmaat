import type { FC } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Clock3,
  MapPin,
  Check,
  MessageCircle,
  FileText,
  AlertCircle,
} from 'lucide-react';
import type { PageId } from '../types';
import { SLIJPMAAT_INFO } from '../data/siteData';
import { GoogleIcon, GOOGLE_REVIEW_COUNT } from '../components/GoogleReviewsSection';
import { OrganicSectionDivider } from '../components/OrganicSectionDivider';
import { ResultatenSlider } from '../components/ResultatenSlider';

interface BlogHoeSlijpJeEenMesPageProps {
  onNavigate: (page: PageId) => void;
}

export const BlogHoeSlijpJeEenMesPage: FC<BlogHoeSlijpJeEenMesPageProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${SLIJPMAAT_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('Hoi Teun en Mike, ik las jullie blog over messen slijpen en wil graag advies over mijn mes.')}`;

  return (
    <article className="overflow-hidden bg-[#FAFAF8]">
      {/* 1. KRUIMELPAD */}
      <nav aria-label="Kruimelpad" className="border-b border-[#d9e1d7] bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl items-center gap-2 text-xs font-medium text-[#657068] sm:text-sm">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="transition hover:text-[#3B7F4B]"
          >
            Home
          </button>
          <span aria-hidden="true" className="text-[#a1aca4]">/</span>
          <button
            type="button"
            onClick={() => onNavigate('blogs')}
            className="transition hover:text-[#3B7F4B]"
          >
            Blogs
          </button>
          <span aria-hidden="true" className="text-[#a1aca4]">/</span>
          <span className="truncate text-[#244A30] font-semibold" aria-current="page">
            Hoe slijp je een mes?
          </span>
        </div>
      </nav>

      {/* 2. HERO SECTIE */}
      <header className="relative px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <button
            type="button"
            onClick={() => onNavigate('blogs')}
            className="group mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#3B7F4B] transition hover:text-[#203728] sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Terug naar alle blogs
          </button>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="inline-flex items-center rounded-full bg-[#E8EFE8] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#3B7F4B]">
              Stappenplan &amp; Ambacht
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#657068] sm:text-sm">
              <Calendar className="h-3.5 w-3.5 text-[#3B7F4B]" aria-hidden="true" />
              15 oktober 2026
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-[#657068] sm:text-sm">
              <Clock className="h-3.5 w-3.5 text-[#3B7F4B]" aria-hidden="true" />
              7 min leestijd
            </span>
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-tight text-[#203728] sm:text-4xl lg:text-5xl">
            Hoe slijp je een mes? Zo krijgt je keukenmes zijn scherpte terug
          </h1>

          {/* Auteursblok Teun & Mike */}
          <div className="mt-6 flex items-center justify-between border-y border-[#d9e1d7] py-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8EFE8] text-sm font-bold text-[#3B7F4B]">
                S
              </div>
              <div>
                <p className="text-sm font-bold text-[#203728] sm:text-base">
                  Door Teun en Mike van Slijpmaat
                </p>
                <p className="text-xs text-[#657068]">
                  Ambachtelijke messenslijpers uit Utrecht · Laatst gecontroleerd: 15 oktober 2026
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-full bg-[#FCEEE8] px-3.5 py-1 text-xs font-bold text-[#C95E3E]">
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Geverifieerd vakkennis</span>
            </div>
          </div>

          {/* Lead introductie */}
          <p className="mt-8 text-lg font-medium leading-relaxed text-[#203728] sm:text-xl sm:leading-relaxed">
            Een keukenmes slijp je door met een slijpsteen gecontroleerd een klein beetje staal van beide kanten van de snede te verwijderen. Houd de bestaande slijphoek zo constant mogelijk, werk van de hiel naar de punt en slijp door tot je over de hele snede een kleine braam voelt. Daarna verfijn je de snede met lichte halen.
          </p>

          <p className="mt-4 text-base leading-7 text-[#657068] sm:text-lg">
            Dat is het korte antwoord. Klinkt overzichtelijk, toch? Dat is het ook, zolang je rustig werkt en weet waarop je moet letten. In deze blog nemen we je stap voor stap mee in ons ambacht.
          </p>

          {/* Afbakeningskader */}
          <aside className="mt-8 rounded-2xl border-l-4 border-[#3B7F4B] bg-[#E8EFE8]/70 p-5 text-sm leading-relaxed text-[#203728]" aria-label="Belangrijke afbakening">
            <div className="flex items-center gap-2 font-bold text-[#3B7F4B]">
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
              <span>Belangrijke afbakening</span>
            </div>
            <p className="mt-1 text-[#505d54]">
              Deze uitleg is bedoeld voor gewone stalen keukenmessen met een gladde, aan twee kanten geslepen snede. Kartelmessen, keramische messen en bijzondere enkelzijdig geslepen messen vragen een heel andere aanpak.
            </p>
          </aside>

          {/* Uitgelichte foto */}
          <figure className="mt-8 overflow-hidden rounded-[2.5rem] border border-[#d9e1d7] bg-white shadow-md">
            <img
              src="/assets/werkwijze/03-slijpen.jpg"
              alt="Handmatig messen slijpen op Japanse waterstenen bij Slijpmaat in Utrecht"
              className="h-[280px] w-full object-cover sm:h-[400px] lg:h-[460px]"
            />
            <figcaption className="bg-white px-5 py-3 text-xs text-[#657068] sm:text-sm">
              Handmatig slijpen op Japanse waterstenen in onze Utrechtse werkplaats. Constante hoek, waterkoeling en minimale staalafname staan centraal.
            </figcaption>
          </figure>
        </div>
      </header>

      {/* 3. TRUST BAR */}
      <section aria-label="Zekerheden" className="relative z-20 px-4 py-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#d9e1d7]/70 bg-white/95 px-6 py-4 shadow-[0_4px_24px_rgba(36,74,48,0.04)] backdrop-blur-xs">
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            <div className="flex flex-wrap items-center gap-2 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-4">
              <GoogleIcon />
              <span className="text-sm leading-none tracking-[0.06em] text-[#FABB05]" aria-label="5 van de 5 sterren">★★★★★</span>
              <span className="text-sm font-bold text-[#3B7F4B]">{GOOGLE_REVIEW_COUNT} reviews · 5,0</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:border-r sm:border-[#d9e1d7]/70 sm:px-4">
              <Clock3 className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Doorgaans binnen 24-48 uur retour</span>
            </div>
            <div className="flex items-center gap-3 sm:justify-center sm:px-4">
              <MapPin className="h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#3B7F4B]">Gratis ophalen &amp; bezorgen vanaf €35</span>
            </div>
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FAFAF8"
        middleColor="#E8EFE8"
        toColor="#F7F4EC"
        variant="calm"
      />

      {/* 4. INHOUDSSECTIE IN WARM CREAM #F7F4EC (Wanneer slijpen & Benodigdheden) */}
      <section className="relative overflow-hidden bg-[#F7F4EC] px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        <div className="relative mx-auto max-w-4xl space-y-16">

          {/* SECTIE: WANNEER IS JE MES TOE AAN EEN SLIJPBEURT */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C95E3E]">
              Diagnose &amp; Signalen
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
              Wanneer is je mes toe aan een slijpbeurt?
            </h2>
            <p className="mt-4 leading-7 text-[#505d54]">
              Een bot mes herken je meestal tijdens het koken. De tomaat wordt eerder geplet dan gesneden, een ui glijdt onder de snede vandaan of je moet ineens veel meer kracht zetten. Dat is niet alleen irritant: door harder te duwen heb je ook minder controle over je mes, waardoor het risico op uitschieten flink toeneemt.
            </p>

            <p className="mt-4 font-semibold text-[#203728]">
              Twijfel je over de scherpte? Doe een van deze twee simpele tests:
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-[2.25rem] border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDF0EC] text-[#E87B5B]">
                    <Check className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#203728]">De tomatentest</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#657068]">
                  Zet het mes op de gladde schil en maak zonder veel neerwaartse druk een rustige snijbeweging. Een scherp mes pakt direct in de schil zonder de tomaat in te drukken of te kneuzen.
                </p>
              </div>

              <div className="rounded-[2.25rem] border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8EFE8] text-[#3B7F4B]">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#203728]">De papiertest</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#657068]">
                  Probeer vanaf de bovenrand soepel door een los vel printpapier te snijden. Blijft het mes halverwege haken of scheurt het papier? Dan is de snede micro-beschadigd of bot.
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-[#657068] italic">
              Hoe vaak je moet slijpen, verschilt per mes en gebruiker. Het staal, je snijplank, de manier van opbergen en hoe vaak je kookt spelen allemaal mee. Kijk daarom vooral naar hoe het mes snijdt, niet alleen naar de kalender.
            </p>
          </div>

          {/* SECTIE: BENODIGDHEDEN */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#3B7F4B]">
              Gereedschap &amp; Voorbereiding
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
              Wat heb je nodig om zelf een mes te slijpen?
            </h2>
            <p className="mt-4 leading-7 text-[#505d54]">
              Voor een bot maar onbeschadigd keukenmes heb je geen complete machinale werkplaats nodig. Met deze ambachtelijke basis kom je een heel eind:
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { title: 'Vlakke slijpsteen korrel 1000', desc: 'Het meest praktische beginpunt voor normaal periodiek onderhoud.' },
                { title: 'Water of voorgeschreven vloeistof', desc: 'Koelt de snede en spoelt het slijpresidu continu weg.' },
                { title: 'Steenhouder of vochtige doek', desc: 'Houdt de steen stevig op zijn plek tegen wegglijden.' },
                { title: 'Schone zachte theedoek', desc: 'Voor het drogen en tussentijds schoonvegen van het lemmet.' },
                { title: 'Optioneel: fijnere steen (3000-5000)', desc: 'Voor het polijsten en verfijnen van de snede.' },
                { title: 'Optioneel: watervaste stift', desc: 'Onmisbaar om direct visueel je slijphoek te controleren.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-2xl border border-[#d9e1d7] bg-white p-5 shadow-xs">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
                  <div>
                    <h4 className="text-sm font-bold text-[#203728]">{item.title}</h4>
                    <p className="text-xs leading-5 text-[#657068]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-[#E87B5B]/30 bg-[#FCEEE8] p-5 text-sm leading-relaxed text-[#203728]">
              <strong className="block font-bold text-[#C95E3E]">Let op bij zichtbare schade:</strong>
              Heeft de snede duidelijke chips, happen of een afgebroken punt? Dan is vaak een grovere steen en meer ervaring nodig. Met een grove steen verdwijnt veel sneller materiaal. Dat is handig bij reparaties, maar minder vergevingsgezind als je nog aan het oefenen bent.
            </div>
          </div>

          {/* SECTIE: MOET EEN WETSTEEN ALTIJD WEKEN? */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#3B7F4B]">
              Feit of Fabel
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
              Moet een wetsteen altijd in het water?
            </h2>
            <p className="mt-4 leading-7 text-[#505d54]">
              Nee. Dit is een van de tips die online vaak te algemeen wordt uitgelegd.
            </p>
            <p className="mt-3 leading-7 text-[#505d54]">
              Sommige traditionele waterstenen moeten enkele minuten weken totdat er geen belletjes meer opstijgen. Andere zijn direct klaar voor gebruik en hebben alleen wat water op het oppervlak nodig. De Shapton-stenen waarmee wij in de werkplaats slijpen zijn bijvoorbeeld zogeheten <code className="rounded bg-[#E8EFE8] px-1.5 py-0.5 text-xs font-mono font-bold text-[#3B7F4B]">splash-and-go</code> stenen. Volgens Shapton hoeven deze na een korte voorbereiding vóór het eerste gebruik niet telkens langdurig te worden geweekt.
            </p>
            <p className="mt-3 leading-7 text-[#505d54]">
              Controleer dus altijd de instructies van jouw specifieke steen. Te lang weken kan bepaalde slijpstenen juist poreus, zacht of breekbaar maken.
            </p>

            <div className="mt-6 rounded-[2.25rem] border border-[#d9e1d7] bg-white p-6 shadow-xs">
              <h3 className="font-heading text-base font-bold text-[#203728]">Belangrijk: houd je slijpsteen altijd vlak</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#657068]">
                Een slijpsteen slijt tijdens gebruik langzaam hol in het midden. Op een holle steen wordt het onmogelijk om de snede gelijkmatig en strak onder dezelfde hoek te raken. Vlak de steen daarom regelmatig af met een afvlakplaat of diamantsteen.
              </p>
            </div>
          </div>

          {/* SECTIE: WELKE SLIJPHOEK GEBRUIKEN? */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C95E3E]">
              Geometrie &amp; Scherpte
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
              Welke slijphoek moet je gebruiken?
            </h2>
            <p className="mt-4 leading-7 text-[#505d54]">
              De bestaande hoek van je mes is altijd het beste vertrekpunt. Veel Japanse keukenmessen worden rond <strong>15 graden per kant</strong> geslepen en veel westerse messen rond <strong>20 graden per kant</strong>. Zie dat als een richtlijn, niet als een natuurwet. Het merk, het staal en de manier waarop het mes is gemaakt kunnen daarvan afwijken.
            </p>
            <p className="mt-3 leading-7 text-[#505d54]">
              Een kleinere hoek kan extreem soepel snijden, maar maakt de snede ook kwetsbaarder. Een grotere hoek geeft de snede meer ondersteuning en duurzaamheid. Voor een beginner is een <em>constante</em> hoek veel belangrijker dan een perfect getal dat tijdens iedere haal verandert.
            </p>

            {/* STIFTRUC KAART */}
            <div className="mt-6 rounded-[2.25rem] border-2 border-[#3B7F4B]/30 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#3B7F4B] text-white">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#203728]">
                    Handige pro-tip: controleer de hoek met een stift
                  </h3>
                  <p className="text-xs text-[#657068]">Zo zie je exact waar de steen het metaal raakt</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#505d54]">
                Kleur het smalle slijpvlak direct boven de snede licht in met een watervaste stift. Maak één of twee rustige halen over de steen en bekijk waar de inkt is verdwenen:
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#FCEEE8] p-4 text-xs text-[#203728]">
                  <strong className="block font-bold text-[#C95E3E] mb-1">Inkt bovenaan weg?</strong>
                  Je houdt het mes waarschijnlijk te vlak. Til de rug een fractie op.
                </div>
                <div className="rounded-2xl bg-[#FCEEE8] p-4 text-xs text-[#203728]">
                  <strong className="block font-bold text-[#C95E3E] mb-1">Alleen onderkant weg?</strong>
                  Het mes staat te steil. Laat de rug van het mes iets zakken.
                </div>
                <div className="rounded-2xl bg-[#E8EFE8] p-4 text-xs text-[#203728]">
                  <strong className="block font-bold text-[#3B7F4B] mb-1">Gelijkmatig verdwenen?</strong>
                  Je volgt de bestaande hoek en geometrie uitstekend!
                </div>
              </div>

              <p className="mt-4 text-xs text-[#657068]">
                Maak het lemmet daarna even schoon met een doekje en je kunt vol vertrouwen beginnen.
              </p>
            </div>
          </div>

        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#F7F4EC"
        middleColor="#E8EFE8"
        toColor="#FFFFFF"
        variant="calm"
      />

      {/* 5. HET 7-STAPPENPLAN IN HET WIT #FFFFFF */}
      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#3B7F4B]">
              Stap voor Stap
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              Een mes slijpen in zeven stappen
            </h2>
            <p className="mt-3 text-base text-[#657068]">
              Neem rustig de tijd. Snelheid is niet belangrijk bij handmatig slijpen; controle, rust en een vaste hoek wel.
            </p>
          </div>

          <ol className="space-y-6">
            {[
              {
                step: '01',
                title: 'Maak de slijpsteen klaar',
                content:
                  'Week of bevochtig de steen volgens de instructies van de fabrikant. Leg hem op een stevige, stroeve ondergrond (bijvoorbeeld een rubberen houder of een vochtige theedoek) en houd tijdens het slijpen voldoende water op het oppervlak.',
                highlight: 'Stabiel & watergekoeld',
              },
              {
                step: '02',
                title: 'Zoek de bestaande slijphoek',
                content:
                  'Plaats de hiel van het mes op de steen. Kantel het lemmet totdat het bestaande slijpvlak goed contact maakt. Houd het handvat stevig vast. Met de vingers van je andere hand geef je lichte druk op het deel van de snede waaraan je werkt.',
                highlight: 'Bestaande geometrie volgen',
              },
              {
                step: '03',
                title: 'Werk rustig van hiel naar punt',
                content:
                  'Beweeg het mes gecontroleerd over de steen. Je kunt lange halen maken of de snede in kleinere delen behandelen. Zorg in beide gevallen dat de hiel, het midden en de punt allemaal aan bod komen. Bij de ronde punt til je het handvat geleidelijk iets op, zodat de slijphoek contact blijft houden met de steen.',
                highlight: 'Volledige snede behandelen',
              },
              {
                step: '04',
                title: 'Slijp tot je een braam voelt',
                content:
                  'Een braam is een flinterdun opstaand randje metaal aan de andere kant van de snede. De braam vertelt je dat je helemaal tot aan de apex hebt geslepen. Controleer de hiel, het midden en de punt. Beweeg je vingertop voorzichtig vanaf het blad richting de snede (dwars op de snede). Ga NOOIT met je vinger in de lengterichting langs een scherp mes! Voel je de braam over de volledige lengte? Dan is deze zijde klaar.',
                highlight: 'Braamcontrole over hele lengte',
              },
              {
                step: '05',
                title: 'Draai het mes om',
                content:
                  'Herhaal dezelfde beweging aan de andere zijde. Houd opnieuw de hoek zo constant mogelijk en werk door tot de braam naar de eerste kant is verplaatst. Je hoeft geen vast aantal halen te tellen. Het ene mes vormt sneller een braam dan het andere. Kijk en voel wat er daadwerkelijk met de snede gebeurt.',
                highlight: 'Gelijke afname aan beide kanten',
              },
              {
                step: '06',
                title: 'Verfijn en ontbraam de snede',
                content:
                  'Gebruik steeds minder druk. Heb je een fijnere steen, dan kun je daarmee de slijpsporen verfijnen. Was bij het wisselen van steen eerst het mes en je handen, zodat achtergebleven grove slijpdeeltjes geen krassen veroorzaken. Eindig met een paar heel lichte, afwisselende halen. Voor een extra nette afwerking kun je het mes daarna op leer stroppen. Beweeg het mes op een strop altijd met de rug voorop, anders snijd je in het leer.',
                highlight: 'Afstroppen op leer met diamantpasta',
              },
              {
                step: '07',
                title: 'Maak het mes schoon en test de scherpte',
                content:
                  'Spoel het slijpresidu weg en droog het mes direct goed af. Pak vervolgens opnieuw een vel papier of een tomaat. Snijdt het mes over de hele lengte soepel, zonder veel druk? Dan heb je goed werk geleverd.',
                highlight: 'Schoon, droog & vlijmscherp',
              },
            ].map((item) => (
              <li
                key={item.step}
                className="group relative flex flex-col justify-between rounded-[2.25rem] border border-[#d9e1d7] bg-[#FAFAF8] p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#3B7F4B]/50 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8EFE8] font-heading text-sm font-bold text-[#3B7F4B] transition-colors group-hover:bg-[#3B7F4B] group-hover:text-white">
                      {item.step}
                    </span>
                    <span className="rounded-full bg-[#E8EFE8] px-3.5 py-1 text-xs font-bold text-[#3B7F4B]">
                      Stap {item.step}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-bold text-[#203728]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#505d54] sm:text-base sm:leading-relaxed">
                    {item.content}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-[#d9e1d7]/60 pt-4 text-xs font-bold text-[#3B7F4B]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
                  <span>{item.highlight}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FFFFFF"
        middleColor="#E8EFE8"
        toColor="#FAFAF8"
        variant="rolling"
      />

      {/* 6. DE 5 MEEST GEMAAKTE FOUTEN & AANZETTEN VS SLIJPEN */}
      <section className="relative overflow-hidden bg-[#FAFAF8] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-16">

          {/* DE 5 FOUTEN */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C95E3E]">
              Valkuilen Voorkomen
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
              De vijf fouten die we het vaakst zien
            </h2>
            <p className="mt-3 text-base text-[#657068]">
              Bij het beoordelen van messen in onze werkplaats zien we regelmatig dezelfde problemen terugkomen.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  num: '1',
                  fout: 'Steeds van hoek veranderen',
                  uitleg: 'Als je bij iedere beweging een andere hoek gebruikt, wordt de snede rond (convex) in plaats van strak scherp. Maak je beweging kleiner, werk langzamer en controleer tussendoor met de stifttruc.',
                },
                {
                  num: '2',
                  fout: 'Te veel druk zetten',
                  uitleg: 'Harder duwen betekent niet automatisch sneller of beter slijpen. Veel druk maakt het lastiger om de beweging te controleren en kan een grote, hardnekkige braam veroorzaken. Verminder de druk steeds verder tijdens de afwerking.',
                },
                {
                  num: '3',
                  fout: 'Alleen het aantal halen tellen',
                  uitleg: 'Twintig halen helpen weinig als de hiel al goed is en de punt nog niet geraakt wordt. De braam en het slijpbeeld vertellen je meer dan een willekeurig getal.',
                },
                {
                  num: '4',
                  fout: 'Te snel naar een fijne steen gaan',
                  uitleg: 'Een fijne steen kan een goede snede polijsten en verfijnen, maar geen onvoltooide snede redden. Zorg eerst dat je op de eerdere steen over de hele lengte een duidelijke braam hebt gevormd.',
                },
                {
                  num: '5',
                  fout: 'Iedere slijpsteen op dezelfde manier behandelen',
                  uitleg: 'Niet iedere steen moet weken en niet iedere steen gebruikt hetzelfde slijpmiddel. Volg de aanwijzingen van de fabrikant. Dat scheelt frustratie en een beschadigde steen.',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="flex items-start gap-4 rounded-[2rem] border border-[#d9e1d7] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#FCEEE8] font-heading text-sm font-bold text-[#C95E3E]">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#203728] sm:text-lg">
                      {item.fout}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#657068]">
                      {item.uitleg}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AANZETTEN VS SLIJPEN */}
          <div className="rounded-[2.5rem] border border-[#d9e1d7] bg-white p-7 sm:p-10 shadow-xs">
            <span className="rounded-full bg-[#E8EFE8] px-3.5 py-1 text-xs font-bold text-[#3B7F4B]">
              Belangrijk verschil
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
              Aanzetten en slijpen zijn niet hetzelfde
            </h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#FAFAF8] p-5 border border-[#d9e1d7]/60">
                <h3 className="font-heading text-base font-bold text-[#203728]">Aanzetten (staal richten)</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#657068]">
                  Een traditioneel glad of geribbeld aanzetstaal haalt <em>geen</em> staal weg. Het duwt alleen een omgekrulde microbraam weer rechtop. Een mes dat echt bot is, wordt hier niet meer scherp van.
                </p>
              </div>

              <div className="rounded-2xl bg-[#E8EFE8]/60 p-5 border border-[#3B7F4B]/20">
                <h3 className="font-heading text-base font-bold text-[#3B7F4B]">Slijpen (nieuwe snede)</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#505d54]">
                  Bij slijpen neem je met waterstenen gecontroleerd een micro-laagje metaal af om twee nieuwe facetten te laten samenkomen in een vlijmscherpe apex.
                </p>
              </div>
            </div>
          </div>

          {/* WANNEER LATEN SLIJPEN */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#3B7F4B]">
              Professioneel Uitbesteden
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
              Wanneer kun je een mes beter laten slijpen?
            </h2>
            <p className="mt-3 text-base text-[#657068]">
              Zelf slijpen is fantastisch als hobby. In deze situaties is professionele hulp vaak een verstandigere keuze:
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Er zitten chips of happen in de snede',
                'De punt van het mes is verbogen of afgebroken',
                'Het mes heeft een complexe of onbekende geometrie',
                'Je krijgt de slijphoek met de hand niet constant',
                'Het betreft een dierbaar of kostbaar koksmes',
                'Je wilt geen waterstenen aanschaffen of onderhouden',
              ].map((reason, idx) => (
                <li key={idx} className="flex items-center gap-3 rounded-2xl border border-[#d9e1d7] bg-white px-5 py-4 text-sm text-[#203728] shadow-xs">
                  <Check className="h-4 w-4 shrink-0 text-[#3B7F4B]" aria-hidden="true" />
                  <span className="font-medium">{reason}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-xl bg-[#F4F7F4] p-4 text-xs leading-5 text-[#657068]">
              <strong>Let op:</strong> Kartelmessen vragen specialistisch gereedschap en vallen buiten dit stappenplan. Slijpmaat neemt kartelmessen niet aan.
            </div>
          </div>

          {/* GOUDEN REGELS VOOR ONDERHOUD */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C95E3E]">
              Scherptebehoud
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-[#3B7F4B] sm:text-3xl">
              Zo blijft je mes langer scherp
            </h2>
            <p className="mt-3 text-base text-[#657068]">
              Wat je tussen twee slijpbeurten door doet is minstens zo belangrijk voor het behoud van fabrieksscherpte:
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Snijd alleen op hout of zacht kunststof', desc: 'Vermijd glas, marmer, graniet of keramiek; die maken een snede direct bot.' },
                { title: 'Was altijd met de hand', desc: 'Nooit in de vaatwasser. Agressieve zouten en hitte tasten staal en hecht onherroepelijk aan.' },
                { title: 'Berg je mes beschermd op', desc: 'In een houten messenblok, aan een magneetstrip of in een stevige beschermhoes.' },
                { title: 'Schuif met de rug van het mes', desc: 'Schuif gesneden uien of kruiden altijd met de botte rug van de snijplank, nooit met de snede.' },
              ].map((tip, idx) => (
                <div key={idx} className="rounded-[2.25rem] border border-[#d9e1d7] bg-white p-6 shadow-xs">
                  <h3 className="font-heading text-base font-bold text-[#3B7F4B]">{tip.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#657068]">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. RESULTATEN SLIDER (Authentieke waslijn van geslepen messen) */}
      <section className="relative w-full overflow-hidden bg-white py-12 sm:py-16">
        <div className="mb-6 px-4 text-center sm:mb-8 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C95E3E]">
            Sfeer &amp; Resultaten
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#3B7F4B] sm:text-4xl">
            Vers van de slijpsteen
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-[#657068]">
            Elk mes dat we slijpen wordt met de hand behandeld en vlijmscherp afgeleverd.
          </p>
        </div>

        <ResultatenSlider />
      </section>

      {/* 8. GROENE CTA BANNER */}
      <section className="px-4 pb-20 pt-6 sm:px-6 sm:pb-28 sm:pt-10 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#3B7F4B] p-8 text-white shadow-md sm:p-12 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#E8EFE8]">
              Slijpmaat Service Utrecht
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Liever scherp zonder zelf te slijpen?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#E8EFE8] sm:text-lg">
              Een slijpsteen kopen, de juiste hoek zoeken en rustig oefenen kan verrassend leuk zijn. Heb je daar geen tijd voor of wil je je favoriete keukenmes niet als proefkonijn gebruiken? Dan regelen wij het graag voor je.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#E8EFE8]">
              Slijpmaat slijpt gladde keukenmessen met de hand op Japanse Shapton Pro-stenen. Daarna stroppen we de snede af op leer. Binnen Utrecht halen we messen volgens ons servicegebied op en brengen we ze doorgaans binnen 24 tot 48 uur terug. Je kunt je messen ook op afspraak in Utrecht brengen en later weer ophalen.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onNavigate('particulieren')}
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#E87B5B] px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#C95E3E] cursor-pointer"
              >
                <span>Bekijk de prijzen en plan je slijpbeurt</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Stel een vraag via WhatsApp</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-[#E8EFE8]/80 font-medium">
              Je messen weer scherp. Zonder gedoe.
            </p>
          </div>

          {/* ONDERSTE NAVIGATIEKNOPPEN */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#d9e1d7] pt-8 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('blogs')}
              className="inline-flex items-center gap-2 rounded-full border border-[#d9e1d7] bg-white px-6 py-3 text-sm font-bold text-[#203728] shadow-xs transition hover:bg-[#E8EFE8]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Terug naar alle blogs
            </button>

            <button
              type="button"
              onClick={() => onNavigate('particulieren')}
              className="inline-flex items-center gap-2 rounded-full bg-[#3B7F4B] px-6 py-3 text-sm font-bold text-white shadow-xs transition hover:bg-[#203728]"
            >
              Prijzen &amp; Slijpbeurt plannen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <OrganicSectionDivider
        fromColor="#FAFAF8"
        middleColor="#A9C89E"
        toColor="#FFFFFF"
        variant="rolling"
      />
    </article>
  );
};
