import React from 'react';
import { ReviewMarquee } from './ui/review-marquee';
import { ReviewStars } from './ReviewStars';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CYtVeBVtieCBEAE/review';
export const GOOGLE_REVIEW_COUNT = 29;

export const GOOGLE_REVIEWS = [
  { name: 'Karin F', text: 'De gratis haal- en brengservice vind ik ideaal. En zo ontmoet je ook de mannen achter Slijpmaat. Mijn messen zijn iig weer lekker scherp en dat in 48u.' },
  { name: 'Thomas Brader', text: 'Chille gasten, scherpe messen!' },
  { name: 'sieme raijmakers', text: '' },
  { name: 'Beau Van Winssen', text: '' },
  { name: 'Florine van Galen Last', text: 'geweldif' },
  { name: 'Sophia Hené', text: 'Heel leuk bedrijfje! Communicatie is fijn, ze komen op een geschikt moment de messen ophalen en brengen ze vervolgens ook weer terug. Kwaliteit is goed, ben erg tevreden!' },
  { name: 'Teun Stoop', text: '' },
  { name: 'Angelina Barkhuis', text: '3 messen laten slijpen, geweldig resultaat! Heel leuk initiatief!' },
  { name: 'Emaal Barek', text: '5 sterren voor slijpmaat! Onze messen hielden het niet meer vol, maar zijn ze weer vlijmscherp door deze top service! Binnen een dag de messen weer terug gekregen en ze doen het fantastisch! Mega aanrader.' },
  { name: 'Bo Kaarsgaren', text: 'Echt heel blij met Slijpmaat! M’n messen waren echt mega bot geworden en ik dacht eerlijk gezegd dat ik misschien zelfs nieuwe moest kopen. Maar na het slijpen zijn ze weer super scherp. Ook echt ideaal dat je ze gewoon kunt laten ophalen en weer thuisbezorgd krijgt, scheelt een hoop gedoe. Snelle reactie en de communicatie was ook heel fijn! Zeker een aanrader' },
  { name: 'Pauline', text: 'Zeker een aanrader. De messen zijn weer vlijmscherp en de service is top.' },
  { name: 'Dylan Prins', text: 'Top service!! Snel een afspraak kunnen maken en messen zijn weer als nieuw. Echte aanrader!!' },
  { name: 'Max Hablé', text: 'Ik heb een heel aantal messen meegegeven en binnen de kortste keren vlijmscherp teruggekregen. Ik merk echt een wereld van verschil. Heel goed werk!' },
  { name: 'Indya de Jong', text: 'Perfect!!!' },
  { name: 'Ro We', text: 'Scherper dan scherp! Wij komen elke maand terug voor onze zaak, vertrouwd en kwaliteit' },
  { name: 'Reinout Dekker', text: 'Leuke gasten die dit op hebben gezet! Communicatie verloopt soepel en mijn mes is weer vlijmscherp. Echt top dat het ook opgehaald en weer gebracht wordt, echt perfecte uitkomst voor mij. Aanrader!' },
  { name: 'Maarten Laurs', text: 'Deze startup verdient alle lof. De 4 messen zijn opgehaald, netjes geslepen en terugbezorgd binnen 2 dagen. Contact verliep super soepel. Zeker een aanrader.' },
  { name: 'Rudolf van Raalten', text: '' },
  { name: 'Calandra Culinaria', text: 'Snelle en echt goede service! Misschien nog belangrijker; mijn messen zijn weer echt goed scherp!🔥' },
  { name: 'Huib Botman', text: "Quick Response times, both pickup and drop-off services and quality work. What's not to love?" },
  { name: 'Melle van Sprew', text: 'Strakke prijs voor goede service!' },
  { name: 'Cyril Versteeg', text: 'Fijn dat we nu vlijmscherpe messen hebben en ze werden perfect geleverd.' },
  { name: 'Matthijs', text: 'Leuk initiatief. Ook heel gemakkelijk. Ze komen de messen ophalen en de volgende dag had ik ze al weer terug. Ze waren mooi geslepen en eentje was ook hersteld omdat er een chip in zat. De prijzen zijn goed. Wij zijn alles bij elkaar zeer tevreden. Ik kan slijpmaat dan ook aanraden!' },
  { name: 'Pieke Van Der Nol', text: 'Super goed geslepen, aardige meneer' },
  { name: 'Olivier van Heiningen', text: 'Hele goede service!' },
  { name: 'Suus', text: 'Alles was snel en goed geregeld. Messen waren weer vlijmscherp echt top' },
  { name: 'Jodocus van Lodensteinstraat', text: '5 messen laten slijpen, allemaal perfect scherp teruggekomen en heel makkelijk geregeld!' },
  { name: 'arda brink', text: 'Altijd gedacht dat ik m’n messen zelf prima kon slijpen, maar nu ze door Slijpmaat écht geslepen zijn, merk ik een groot verschil: vlijmscherp! En bovendien een prima service: de geslepen messen werden keurig en veilig ingepakt weer afgeleverd. Fantastisch en bedankt Slijpmaat!' },
  { name: 'K B', text: 'Volle service en vlijmscherpe messen! Aanrader!' },
];

export const GoogleIcon: React.FC = () => (
  <svg viewBox="0 0 48 48" className="h-[22px] w-[22px] shrink-0" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6 29.2 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.7-.4-4z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6 29.2 4 24 4c-7.7 0-14.4 4.4-17.7 10.7z" />
    <path fill="#4CAF50" d="M24 44c5.1 0 9.8-2 13.3-5.2l-6.1-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.4-7.9L6 33.2C9.3 39.6 16.1 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20H42V20H24v8h11.3c-1.1 3.1-3.3 5-4.1 5.6l6.1 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.7-.4-4z" />
  </svg>
);

const ReviewCard = ({ review }: { review: (typeof GOOGLE_REVIEWS)[number] }) => {
  const words = review.name.trim().split(/\s+/);
  const initials = `${words[0][0]}${words.length > 1 ? words[words.length - 1][0] : ''}`;
  const cardWidth = review.text.length > 200 ? 'sm:w-[32rem]' : review.text.length > 100 ? 'sm:w-[24rem]' : 'sm:w-[20rem]';

  return (
    <article className={`w-[min(92vw,26rem)] shrink-0 rounded-2xl border border-[#d9e1d7] bg-white p-4 sm:p-5 shadow-[0_4px_14px_rgba(36,74,48,0.04)] ${cardWidth}`}>
      <div className="flex items-start gap-3">
        <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8EFE8] font-heading text-sm font-bold uppercase text-[#3B7F4B]">{initials}</span>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-[15px] font-bold leading-5 text-[#244A30] [overflow-wrap:anywhere]">{review.name}</h3>
          <span className="mt-1 block text-xs text-[#657068]">Google-review</span>
        </div>
        <GoogleIcon />
      </div>
      <div className="mt-2 sm:mt-3"><ReviewStars /></div>
      {review.text ? <p className="mt-2 whitespace-normal text-sm leading-5 sm:leading-relaxed text-[#4F6354]">{review.text}</p> : null}
    </article>
  );
};

const WRITTEN_REVIEWS = GOOGLE_REVIEWS.filter(review => review.text.trim().length > 0);
const REVIEW_MIDDLE = Math.ceil(WRITTEN_REVIEWS.length / 2);
const REVIEW_ROWS = [WRITTEN_REVIEWS.slice(0, REVIEW_MIDDLE), WRITTEN_REVIEWS.slice(REVIEW_MIDDLE)]
  .map((row) => row.map((review) => <ReviewCard key={review.name} review={review} />));

export const GoogleReviewsSection: React.FC = () => (
    <section id="klantreviews" aria-labelledby="klantreviews-title" className="scroll-mt-32 overflow-hidden bg-white py-6 sm:py-12">
        <div className="px-5 text-center sm:px-10">
          <h2 id="klantreviews-title" className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-[1.04] tracking-[-0.035em] text-[#3B7F4B] sm:text-5xl lg:text-[56px]">
            Scherpe woorden van blije klanten
          </h2>
          <div className="mt-3 sm:mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-semibold text-[#3B7F4B]">
            <span className="inline-flex items-center gap-2"><GoogleIcon />Slijpmaat op Google</span>
            <ReviewStars />
            <span>{GOOGLE_REVIEW_COUNT} reviews</span>
          </div>
        </div>

        <div className="mt-4 sm:hidden"><ReviewMarquee rows={[REVIEW_ROWS.flat()]} /></div>
        <div className="hidden sm:mt-8 sm:block"><ReviewMarquee rows={REVIEW_ROWS} /></div>

        <div className="mx-auto mt-4 flex max-w-4xl flex-col items-center gap-3 px-6 text-center sm:mt-8 sm:flex-row sm:justify-center sm:gap-6 sm:text-left">
          <div>
            <p className="font-heading text-xl font-bold leading-snug text-[#3B7F4B] sm:text-2xl">Heb je jouw messen laten slijpen?</p>
            <p className="mt-2 text-sm leading-relaxed text-[#4F6354]">Deel je ervaring met je Maat en help anderen ook scherp kiezen.</p>
          </div>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-[#3B7F4B] bg-white px-6 py-3 text-sm font-bold text-[#3B7F4B] transition-colors hover:bg-[#E8EFE8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#3B7F4B]">
            Schrijf een review
          </a>
        </div>
    </section>
);
