import { once } from 'node:events';
import { readFile } from 'node:fs/promises';
import { createDistServer } from './serve-dist.mjs';

const routes = [
  ['/', true, 'Jouw messenslijper in Utrecht'],
  ['/particulier/', true, 'Je messen weer scherp. Zonder gedoe.'],
  ['/zakelijk/', true, 'Professioneel messen slijpen voor horeca'],
  ['/werkwijze/', true, 'Ieder mes met de hand geslepen.'],
  ['/servicegebied/', true, 'Ophalen, bezorgen &amp; langsbrengen.'],
  ['/blogs/', true, 'Blogs over messen slijpen en onderhoud'],
  ['/blogs/hoe-slijp-je-een-mes/', true, 'Hoe slijp je een mes? Zo krijgt je keukenmes zijn scherpte terug'],
  ['/over-ons/', true, 'Twee Utrechtse vrienden met passie voor scherpte.'],
  ['/veelgestelde-vragen/', true, 'Alles wat je wilt weten over Slijpmaat.'],
  ['/algemene-voorwaarden/', false, 'Algemene voorwaarden Slijpmaat'],
  ['/privacyverklaring/', false, 'Privacyverklaring Slijpmaat'],
];

const match = (html, expression, label, pathname) => {
  const value = html.match(expression)?.[1];
  if (!value) throw new Error(`${pathname}: ${label} ontbreekt`);
  return value;
};

const decodeHtml = (value) => value
  .replace(/<[^>]+>/g, ' ')
  .replace(/•/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const forbiddenClaims = [
  /vanaf\s+(?:drie|3)\s+messen/i,
  /gratis[^.]{0,80}(?:drie|3)\s+messen/i,
  /collegekaart/i,
  /duizenden uren/i,
  /uiterlijk 48 uur/i,
  /200\s*°?C/i,
  /0\s*°?C/i,
  /99%/i,
  /fabriekshardheid/i,
  /vervoerstassen/i,
  /messenbeschermers/i,
  /wurgcontract/i,
];

const server = createDistServer();
server.listen(0, '127.0.0.1');
await once(server, 'listening');
const address = server.address();
if (!address || typeof address === 'string') throw new Error('Testserver heeft geen TCP-poort');
const baseUrl = `http://127.0.0.1:${address.port}`;

try {
  const results = [];
  for (const [pathname, indexable, expectedH1] of routes) {
    const response = await fetch(`${baseUrl}${pathname}`);
    const html = await response.text();
    if (response.status !== 200) throw new Error(`${pathname}: HTTP ${response.status}, verwacht 200`);

    const title = match(html, /<title>(.*?)<\/title>/s, 'title', pathname);
    const description = match(html, /<meta name="description" content="(.*?)"/s, 'description', pathname);
    const canonical = match(html, /<link rel="canonical" href="(.*?)"/s, 'canonical', pathname);
    const robots = match(html, /<meta name="robots" content="(.*?)"/s, 'robots', pathname);
    const rootHtml = match(html, /<div id="root">([\s\S]*)<\/div>\s*<\/body>/s, 'statische rootinhoud', pathname);
    const rootText = decodeHtml(rootHtml);
    if (!rootText.includes('KvK: 42198662')) throw new Error(`${pathname}: KvK-nummer ontbreekt`);
    if (rootHtml.includes('href="/diensten/')) throw new Error(`${pathname}: link naar verwijderde dienstpagina`);
    if (pathname === '/' && description !== 'Mes laten slijpen in Utrecht? Slijpmaat maakt messen van thuiskoks en chefs met de hand weer scherp. We halen ze op en bezorgen ze meestal binnen 48 uur terug.') {
      throw new Error('Homepage gebruikt niet de bevestigde metabeschrijving');
    }
    const jsonLd = match(html, /<script id="route-jsonld" type="application\/ld\+json">(.*?)<\/script>/s, 'JSON-LD', pathname);
    const schema = JSON.parse(jsonLd);
    const schemaTypes = schema['@graph'].map((item) => item['@type']);
    const h1Count = [...rootHtml.matchAll(/<h1\b/gi)].length;
    const socialImage = match(html, /<meta property="og:image" content="(.*?)"/s, 'og:image', pathname);
    const socialImageAlt = match(html, /<meta property="og:image:alt" content="(.*?)"/s, 'og:image:alt', pathname);
    const socialType = match(html, /<meta property="og:type" content="(.*?)"/s, 'og:type', pathname);
    const twitterImage = match(html, /<meta name="twitter:image" content="(.*?)"/s, 'twitter:image', pathname);

    if (!rootHtml.includes(expectedH1)) throw new Error(`${pathname}: verwachte primaire tekst ontbreekt in ruwe HTML`);
    if (h1Count !== 1) throw new Error(`${pathname}: ${h1Count} H1-elementen gevonden, verwacht exact 1`);
    if (canonical !== `https://slijpmaat.nl${pathname}`) throw new Error(`${pathname}: onjuiste canonical ${canonical}`);
    if (robots !== (indexable ? 'index,follow' : 'noindex,follow')) throw new Error(`${pathname}: onjuiste robots ${robots}`);
    if (!socialImage.startsWith('https://slijpmaat.nl/assets/')) throw new Error(`${pathname}: onjuiste absolute og:image`);
    if (!socialImageAlt.trim()) throw new Error(`${pathname}: lege og:image:alt`);
    if (twitterImage !== socialImage) throw new Error(`${pathname}: twitter:image wijkt af van og:image`);
    if (socialType !== (pathname === '/blogs/hoe-slijp-je-een-mes/' ? 'article' : 'website')) throw new Error(`${pathname}: onjuist og:type ${socialType}`);
    const socialImageResponse = await fetch(`${baseUrl}${new URL(socialImage).pathname}`);
    if (socialImageResponse.status !== 200 || !socialImageResponse.headers.get('content-type')?.startsWith('image/')) {
      throw new Error(`${pathname}: social-afbeelding is niet als afbeelding bereikbaar`);
    }
    if (!schemaTypes.includes('WebSite') || !schemaTypes.includes('WebPage')) throw new Error(`${pathname}: WebSite/WebPage-schema ontbreekt`);
    if (pathname !== '/' && !schemaTypes.includes('BreadcrumbList')) throw new Error(`${pathname}: BreadcrumbList ontbreekt`);
    if ((pathname === '/servicegebied/' || pathname === '/veelgestelde-vragen/') !== schemaTypes.includes('FAQPage')) {
      throw new Error(`${pathname}: FAQPage-schema komt niet overeen met zichtbare FAQ-inhoud`);
    }
    const faqSchema = schema['@graph'].find((item) => item['@type'] === 'FAQPage');
    for (const item of faqSchema?.mainEntity ?? []) {
      const question = decodeHtml(item.name);
      const answer = decodeHtml(item.acceptedAnswer?.text ?? '');
      if (!rootText.includes(question) || !rootText.includes(answer)) {
        throw new Error(`${pathname}: FAQ-schema bevat tekst die niet exact zichtbaar is: ${question}`);
      }
    }
    const articleSchema = schema['@graph'].find((item) => item['@type'] === 'BlogPosting');
    if (pathname === '/blogs/hoe-slijp-je-een-mes/') {
      if (!articleSchema?.headline || !articleSchema?.image?.length || !articleSchema?.datePublished || !articleSchema?.dateModified || !articleSchema?.author?.length) {
        throw new Error(`${pathname}: BlogPosting-schema is onvolledig`);
      }
    } else if (articleSchema) {
      throw new Error(`${pathname}: onverwacht BlogPosting-schema`);
    }
    if (schemaTypes.some((type) => type === 'LocalBusiness' || type === 'Organization')) throw new Error(`${pathname}: onbevestigd bedrijfsschema gevonden`);
    for (const expression of forbiddenClaims) {
      if (expression.test(rootText)) throw new Error(`${pathname}: onbevestigde of te absolute claim gevonden: ${expression}`);
    }

    results.push({ pathname, title, description, canonical, rootHtml });
  }

  const unique = (values) => new Set(values).size === values.length;
  if (!unique(results.map((result) => result.title))) throw new Error('Titles zijn niet uniek');
  if (!unique(results.map((result) => result.description))) throw new Error('Descriptions zijn niet uniek');
  if (!unique(results.map((result) => result.canonical))) throw new Error('Canonicals zijn niet uniek');

  const internalHrefs = new Set(
    results.flatMap(({ rootHtml }) => [...rootHtml.matchAll(/href="(\/[^"#?]*)/g)].map((result) => result[1])),
  );
  for (const [pathname, indexable] of routes) {
    if (indexable && pathname !== '/' && !internalHrefs.has(pathname)) {
      throw new Error(`${pathname}: geen crawlbare interne link gevonden`);
    }
  }

  const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
  const robotsText = await robotsResponse.text();
  if (robotsResponse.status !== 200 || !robotsText.includes('Sitemap: https://slijpmaat.nl/sitemap.xml')) throw new Error('robots.txt is niet correct bereikbaar');

  const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
  const sitemap = await sitemapResponse.text();
  if (sitemapResponse.status !== 200) throw new Error('sitemap.xml is niet bereikbaar');
  const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((result) => result[1]);
  const expectedUrls = routes.filter(([, indexable]) => indexable).map(([pathname]) => `https://slijpmaat.nl${pathname}`);
  if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedUrls)) throw new Error('Sitemap bevat niet exact de indexeerbare canonieke routes');

  const redirects = await readFile(new URL('../dist/_redirects', import.meta.url), 'utf8');
  for (const slug of ['keukenmessen-slijpen', 'japanse-messen-slijpen', 'chips-herstellen', 'wat-slijpen-we']) {
    for (const suffix of ['', '/']) {
      const pathname = `/diensten/${slug}${suffix}`;
      if (!redirects.split(/\r?\n/).includes(`${pathname} /particulier/ 301`)) throw new Error(`${pathname}: permanente redirect ontbreekt`);
      const response = await fetch(`${baseUrl}${pathname}`, { redirect: 'manual' });
      if (response.status !== 301 || response.headers.get('location') !== '/particulier/') throw new Error(`${pathname}: onjuiste HTTP-redirect`);
    }
  }
  if (!redirects.split(/\r?\n/).includes('/contact /#home-contact 301')) {
    throw new Error('Permanente redirect van /contact naar /#home-contact ontbreekt');
  }
  if (!redirects.split(/\r?\n/).includes('/contact/ /#home-contact 301')) {
    throw new Error('Permanente redirect van /contact/ naar /#home-contact ontbreekt');
  }

  const missingResponse = await fetch(`${baseUrl}/dit-pad-bestaat-niet-9f3c`);
  const missingHtml = await missingResponse.text();
  if (missingResponse.status !== 404) throw new Error(`Onbekend pad geeft HTTP ${missingResponse.status} in plaats van 404`);
  if (!missingHtml.includes('<meta name="robots" content="noindex,follow"')) throw new Error('404-pagina mist noindex');
  if (!missingHtml.includes('Pagina niet gevonden')) throw new Error('404-pagina mist zichtbare foutmelding');

  console.log(`SEO-verificatie geslaagd: ${routes.length} routes, ${expectedUrls.length} sitemap-URL's, robots.txt en HTTP 404/noindex.`);
} finally {
  server.close();
  await once(server, 'close');
}
