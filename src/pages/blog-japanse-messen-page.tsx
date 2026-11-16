import { BlogMaatNote } from '../components/blog-maat-note';
import { getRouteByPage, JAPANESE_KNIVES_ARTICLE_TITLE, PAGE_PATHS } from '../seo';

const article = getRouteByPage('blog-japanse-messen');
const articleLink = 'font-semibold text-[#3B7F4B] underline underline-offset-4 hover:text-[#203728]';
const sectionHeading = 'font-heading text-[1.375rem] font-bold leading-snug text-[#244A30] sm:text-3xl';

export const BlogJapanseMessenPage = () => (
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
          <h1 className="text-balance font-heading text-[clamp(1.75rem,7.5vw,2.25rem)] font-black leading-tight tracking-tight text-[#244A30] sm:text-5xl">
            {JAPANESE_KNIVES_ARTICLE_TITLE}
          </h1>
          <p className="mt-4 text-sm text-[#505d54]">
            Teun &amp; Mike van Slijpmaat <span aria-hidden="true">·</span> <time dateTime={article.datePublished}>16 november 2026</time>
            <span className="whitespace-nowrap"> <span aria-hidden="true">·</span> 6 min leestijd</span>
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#244A30]">
            Een santoku voor het avondeten, een nakiri voor een berg groenten of een gyuto als dagelijks koksmes. Het model bepaalt hoe je ermee snijdt. De staalsoort en de vorm van de snede bepalen hoe je het onderhoudt en slijpt. We lopen met je langs de verschillen, zodat je weet welk mes bij je past en wanneer je het zelf kunt slijpen en wanneer je je Japanse mes beter kunt laten slijpen.
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
          <h2 className={sectionHeading}>Welke soorten Japanse messen zijn er?</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Gyuto.</strong> Het Japanse koksmes voor vlees zonder bot, vis en groenten. Het langere lemmet geeft je ruimte voor lange halen, bijvoorbeeld als je een gebraden stuk vlees in plakken snijdt.</li>
            <li><strong>Santoku.</strong> Een compact allroundmes voor groenten, vis en vlees zonder bot. Handig als je vaak op een kleine plank werkt of graag met korte, gecontroleerde halen snijdt.</li>
            <li><strong>Bunka.</strong> Een allroundmes dat dicht bij de santoku ligt, met een hoekige, fijne punt. Handig voor precies werk, zoals het uitsnijden van een plekje in een paprika. Geef de punt weinig zijwaartse druk.</li>
            <li><strong>Nakiri.</strong> Een groentemes met een brede, vrij rechte snede. Daarmee snijd je bij een neerwaartse beweging makkelijk helemaal door een rijtje lente-uitjes. De rechthoekige vorm lijkt op een hakmes, maar de dunne snede is bedoeld voor groenten.</li>
            <li><strong>Petty.</strong> Een klein keukenmes voor knoflook, fruit en ander snijwerk waar je met een lang lemmet weinig ruimte hebt.</li>
            <li><strong>Yanagiba, deba en usuba.</strong> Traditionele modellen die vaak enkelzijdig geslepen zijn. De lange yanagiba is voor dunne plakken rauwe vis, de stevige deba voor het schoonmaken en fileren van hele vis en de usuba voor precies groentewerk.</li>
          </ul>
          <p>
            <strong>Een gyuto of santoku kiezen?</strong> Pak een gyuto als je vaak grote ingrediënten snijdt en graag met een lange haal werkt. Een santoku past goed bij kort snijwerk op een kleinere plank. Snijd je vooral groenten en wil je veel contact met de plank, dan is een nakiri het overwegen waard.
          </p>
          <p><a href="https://www.tojiro-japan.com/series/tojiro_basic/" className={articleLink}>Bekijk de mesvormen bij Tojiro</a> en <a href="https://www.japaneseknifeimports.com/pages/faq" className={articleLink}>de traditionele modellen bij Japanese Knife Imports</a>.</p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className={sectionHeading}>Welk staal zit er in Japanse messen?</h2>
          <p>
            Kijk naar het <strong>kernstaal</strong>, het staal dat bij een opgebouwd lemmet de snede vormt. Dat zegt iets over roestgevoeligheid en slijtvastheid. De warmtebehandeling en de dikte van het mes vlak achter de snede bepalen mede hoe het snijdt en hoe gevoelig het is voor chipjes.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>VG10 en Ginsan (Silver 3).</strong> Roestvaste staalsoorten voor wie weinig onderhoud wil. Spoel ze na het snijden af en droog ze meteen, ook als je alleen een tomaat hebt gesneden.</li>
            <li><strong>SG2 (Super Gold 2).</strong> Roestvast poederstaal dat slijtvast kan zijn. Dat helpt de snede lang scherp te blijven, maar als het mes echt bot is kan het langer duren om op de steen een nieuwe snede te vormen.</li>
            <li><strong>Shirogami (White Paper Steel).</strong> Koolstofstaal waarmee je een fijne snede kunt slijpen. Het reageert sneller op vocht en zure ingrediënten. Neem het tijdens het koken zo nodig af en maak het na gebruik meteen schoon en droog.</li>
            <li><strong>Aogami (Blue Paper Steel).</strong> Gelegeerd koolstofstaal. De toevoegingen dragen bij aan de slijtvastheid. Ook bij Aogami en Aogami Super blijft schoonmaken en drogen belangrijk.</li>
          </ul>
          <p>
            <strong>Wat betekent 62 HRC?</strong> HRC is een maat voor hardheid. Hoe lang je mes prettig snijdt, hangt ook af van de slijtvastheid, de slijphoek, de dikte achter de snede en wat je ermee doet. Gebruik de hardheid als één van de gegevens over je mes.
          </p>
          <p>
            <strong>Is damast een staalsoort?</strong> Bij veel Japanse keukenmessen zie je een damastpatroon in de buitenlagen rond de kern. Kijk dan naar de specificatie van het kernstaal. Zelfs met roestvaste buitenlagen kan een kern van koolstofstaal aan de snede nog roesten.
          </p>
          <p><a href="https://e-tokko.com/v_gold_10.php/" className={articleLink}>VG10 bij Takefu</a>, <a href="https://e-tokko.com/spg2.php" className={articleLink}>Super Gold 2 bij Takefu</a> en <a href="https://www.proterial.com/e/yss/search/shironoko.html" className={articleLink}>Japanse staalsoorten bij Proterial</a>.</p>
          <BlogMaatNote variant="fun-fact" title="Japans staal, vernoemd naar papier">
            Shirogami betekent ‘wit papier’ en Aogami ‘blauw papier’. De namen komen van het gekleurde papier waarin de staalmaker het staal verpakte om de soorten uit elkaar te houden. <a href="https://jp-knife-hub.info/en/steel/" className={articleLink}>Lees over de herkomst van de namen</a>.
          </BlogMaatNote>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className={sectionHeading}>Hoe slijp je een Japans mes op een slijpsteen?</h2>
          <p>
            Bekijk bij goed licht hoe de snede aan beide kanten is geslepen. Bij een symmetrische, dubbelzijdig geslepen santoku of gyuto volg je de bestaande hoek aan beide kanten. Een asymmetrische snede vraagt dat je het bestaande verschil tussen de twee kanten behoudt. Zie je een flinke beschadiging of weet je niet welke snede je voor je hebt? Laat het mes eerst beoordelen.
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <h3 className="font-heading text-lg font-bold">Welke korrel gebruik je voor een Japans mes?</h3>
              <p>Begin rond korrel 1000 als je mes bot is en de snede heel is. Kies een fijnere steen voor licht onderhoud of afwerking. Een grove steen neemt sneller staal weg en is vooral bedoeld voor herstelwerk.</p>
            </li>
            <li>
              <h3 className="font-heading text-lg font-bold">Onder welke hoek slijp je een Japans mes?</h3>
              <p>Volg de bestaande slijphoek van jouw model. Tojiro noemt 15 graden per kant voor zijn dubbelzijdige messen. Shun noemt voor veel modellen 16 graden per kant. Bij een symmetrische snede is dat samen respectievelijk 30 of 32 graden.</p>
            </li>
            <li><strong>Werk met lichte, gelijkmatige druk.</strong> Zet de vlakke steen stabiel neer en maak hem nat volgens de instructies van de fabrikant. Werk van hiel tot punt. Vorm bij een dubbelzijdige snede een kleine, gelijkmatige braam en herhaal aan de andere kant.</li>
            <li><strong>Werk de braam weg.</strong> Wissel van kant met steeds lichtere halen. Spoel en droog het mes en kijk of het zonder duwen door een tomatenvel gaat. In onze <a href={PAGE_PATHS['blog-hoe-slijp-je-een-mes']} className={articleLink}>stap-voor-stapgids voor slijpen op een slijpsteen</a> zie je hoe je dat aanpakt.</li>
          </ol>
          <BlogMaatNote
            variant="tip"
            title="Check je slijphoek met een stift"
          >
            Kleur het smalle slijpvlak van je dubbelzijdige mes in met een watervaste stift. Maak één lichte haal over de steen. Verdwijnt de inkt over de hele breedte van het slijpvlak, dan volg je de bestaande hoek. <a href={`${PAGE_PATHS['blog-hoe-slijp-je-een-mes']}#slijphoek`} className={articleLink}>Bekijk de stifttruc stap voor stap</a>.
          </BlogMaatNote>
          <p>
            <strong>Hoe slijp je een enkelzijdig Japans mes?</strong> Een traditionele yanagiba, deba of usuba heeft doorgaans een brede slijpkant en een holle rug, de <em>ura</em>. Bij het slijpen volg je de brede slijpkant en behandel je de achterkant zeer licht en vlak op een fijne steen, zodat de uitholling intact blijft. Dit vraagt een andere techniek dan een dubbelzijdige snede slijpen. Zeker bij je eerste enkelzijdige mes loont het om eerst advies te vragen.
          </p>
          <p><a href="https://tojiroknives.com/about/" className={articleLink}>Onderhoudsadvies van Tojiro</a>, <a href="https://shun.kaiusa.com/faq" className={articleLink}>slijphoeken bij Shun</a> en <a href="https://www.japaneseknifeimports.com/pages/about-knife-care" className={articleLink}>onderhoud van enkelzijdige messen bij Japanese Knife Imports</a>.</p>
        </section>

        <section className="mt-10 space-y-4">
          <h2 className={sectionHeading}>Hoe houd je een Japans keukenmes scherp?</h2>
          <p>
            Snijd op hout of een geschikte kunststof snijplank. Pak voor diepvriesproducten en botten een mes dat daarvoor bedoeld is. Gebruik een dunne snede ook niet om iets los te wrikken of eten van de plank te schrapen. Draai daarvoor het mes om en gebruik de rug. Was je mes met de hand, droog het af en berg het op met de snede beschermd.
          </p>
          <p>
            <strong>Kun je een Japans mes aanzetten?</strong> Volg het advies van de maker. Een passende aanzetstaaf kan bij bepaalde messen helpen met licht onderhoud. Een bot mes kun je met een passende slijpsteen weer scherp maken. Gebruik een doortrekslijper alleen als de fabrikant aangeeft dat die geschikt is voor jouw model en snede.
          </p>
          <p>
            <strong>Hoe vaak moet je een Japans mes slijpen?</strong> Kijk naar hoe het snijdt. Als je mes wegglijdt op het vel van een tomaat of je steeds harder moet drukken om door een ui te komen, controleer dan de snede. Zie je een chip of een afgebroken punt, stuur ons een scherpe foto. Dan kunnen we met je meekijken.
          </p>
          <p><a href="https://shun.kaiusa.com/shun-cutlery-blog-caring-for-your-japanese-knives" className={articleLink}>Lees de onderhoudsgids van Shun</a>.</p>
        </section>

        <section className="mt-10 rounded-[2rem] border border-[#D9E1D7] bg-[#E8EFE8] p-6 sm:p-8">
          <h2 className={sectionHeading}>Japans mes laten slijpen?</h2>
          <p className="mt-3">
            Een santoku, gyuto of nakiri laten slijpen? Bij Slijpmaat doen we dat met de hand op Japanse slijpstenen. We bekijken de snede van hiel tot punt en kiezen een steen die past bij de staat van je mes. Heb je een enkelzijdig mes of zie je schade? Stuur je Maat vooraf een foto van beide kanten en een close-up van de snede. Dan kijken we wat er mogelijk is.
          </p>
          <p className="mt-3">
            Woon je buiten Utrecht? Ook dan kun je je messen op afspraak bij ons in Utrecht brengen en later ophalen. Op de <a href={PAGE_PATHS['ophalen-bezorgen']} className={articleLink}>pagina over ophalen en langsbrengen</a> lees je hoe je een afspraak maakt.
          </p>
          <a href={PAGE_PATHS.particulieren} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[#244A30] px-5 py-2 font-semibold text-white hover:bg-[#203728] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244A30]">
            Bekijk de slijpservice
          </a>
        </section>
      </div>
    </article>
  </div>
);
