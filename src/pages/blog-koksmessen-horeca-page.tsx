import { getRouteByPage, HORECA_SHARPENING_ARTICLE_TITLE, PAGE_PATHS } from '../seo';

const article = getRouteByPage('blog-koksmessen-slijpen-horeca');
const articleLink = 'font-semibold text-[#3B7F4B] underline underline-offset-4 hover:text-[#203728]';
const sectionHeading = 'font-heading text-2xl font-bold text-[#244A30] sm:text-3xl';

export const BlogKoksmessenHorecaPage = () => (
  <div className="bg-[#FAFAF8]">
    <article>
      <header className="border-b border-[#E8EFE8] bg-white px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Kruimelpad" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[#244A30]">
            <a href={PAGE_PATHS.home} className={articleLink}>Home</a>
            <span aria-hidden="true">/</span>
            <a href={PAGE_PATHS.blogs} className={articleLink}>Blogs</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{article.label}</span>
          </nav>
          <h1 className="font-heading text-4xl font-black leading-tight tracking-tight text-[#244A30] sm:text-5xl">
            {HORECA_SHARPENING_ARTICLE_TITLE}
          </h1>
          <p className="mt-4 text-sm text-[#505d54]">
            Teun &amp; Mike van Slijpmaat <span aria-hidden="true">·</span> <time dateTime={article.datePublished}>12 november 2026</time>
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#244A30]">
            Hoe vaak je een koksmes moet slijpen hangt af van hoeveel en wat je ermee snijdt. Geef de messen die elke service meegaan een vaste controle tijdens de mise-en-place. Glijdt een koksmes over een tomatenvel of moet je meer druk zetten dan normaal? Dan is het tijd om de snede te beoordelen.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 pb-14 pt-8 text-base leading-relaxed text-[#244A30] sm:px-6 sm:pb-20">
        <img
          src={article.image}
          alt={article.imageAlt}
          className="aspect-video w-full rounded-[2rem] object-cover"
        />

        <section className="mt-10 space-y-4">
          <h2 className={sectionHeading}>Wanneer is je koksmes toe aan slijpen?</h2>
          <p>
            Let bij het gewone snijwerk op veranderingen. Een mes dat eerder makkelijk door de tomaat ging, duwt de tomaat nu eerst in. Of je merkt bij het snijden van een ui dat je telkens harder moet drukken. Voel je op één plek in de snede steeds weerstand? Kijk dan bij goed licht of je een beschadiging ziet.
          </p>
          <p>
            Gebruikt je team voor dit mes een geschikt aanzetstaal? Kijk dan of aanzetten de snede weer prettig laat snijden. Blijft het mes daarna bot, dan is slijpen de volgende stap. Zie je een hapje in de snede of een beschadigde punt, leg het mes apart en laat het eerst beoordelen. In onze <a href={PAGE_PATHS['blog-hoe-slijp-je-een-mes']} className={articleLink}>gids over slijpen op een slijpsteen</a> lees je meer over het verschil tussen aanzetten en slijpen.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className={sectionHeading}>Plan het slijpen rond de service</h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li><strong>Controleer de messen op een vast moment.</strong> Loop bijvoorbeeld vóór de drukste dagen van de week de veelgebruikte koksmessen langs. Noteer welke messen minder goed snijden.</li>
            <li><strong>Houd genoeg messen over voor de keuken.</strong> Werk je met één set, plan dan rond een sluitingsdag of een rustig moment. Heb je reservemessen, dan kun je de sets in twee rondes laten slijpen.</li>
            <li><strong>Spreek af wanneer je ze weer nodig hebt.</strong> Geef het aantal, de soorten messen en je eerstvolgende drukke service door. Stuur bij schade ook een foto van de snede mee.</li>
          </ol>
          <p>
            Stel dat je vrijdag een volle zaak verwacht en drie van je zes koksmessen bot aanvoelen. Bepaal eerst hoeveel messen je nodig hebt voor de mise-en-place en de service. Kun je met drie uit de voeten, laat de botte messen dan samen slijpen. Spreek vooraf af wanneer de set terug kan zijn.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className={sectionHeading}>Wat bekijken we bij Slijpmaat?</h2>
          <p>
            We controleren de snede van hiel tot punt op botte plekken en schade. Daarna kiezen we de Japanse slijpsteen die past bij de staat van het mes. We slijpen met de hand, verwijderen de braam en werken de snede af op leer. <a href={PAGE_PATHS.werkwijze} className={articleLink}>Bekijk onze werkwijze</a> voor de stappen in de werkplaats.
          </p>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#D9E1D7] bg-[#E8EFE8] p-6 sm:p-8">
          <h2 className={sectionHeading}>Koksmessen laten slijpen voor je restaurant?</h2>
          <p className="mt-3">
            Horeca uit heel Nederland kan bij ons op afspraak messen brengen en ophalen in Utrecht. Zit je zaak in Utrecht, dan stemmen we ook af of ophalen en terugbrengen mogelijk is. Geef je aantallen en planning door, dan kijken we welk moment past.
          </p>
          <a href={PAGE_PATHS.horeca} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#244A30] px-5 py-2 font-semibold text-white hover:bg-[#203728] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244A30]">
            Bekijk de slijpservice voor horeca
          </a>
        </section>
      </div>
    </article>
  </div>
);
