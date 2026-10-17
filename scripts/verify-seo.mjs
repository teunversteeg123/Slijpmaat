import { once } from 'node:events';
import { createDistServer } from './serve-dist.mjs';

const routes = [
  ['/', true, 'Jouw messenslijper in Utrecht'],
  ['/particulier', true, 'Je messen weer scherp. Zonder gedoe.'],
  ['/zakelijk', true, 'Professioneel messen slijpen voor horeca'],
  ['/diensten/keukenmessen-slijpen', true, 'Keukenmessen slijpen op Japanse waterstenen'],
  ['/diensten/japanse-messen-slijpen', true, 'Japanse messen zorgvuldig laten slijpen'],
  ['/diensten/chips-herstellen', true, 'Chips en beschadigingen in keukenmessen herstellen'],
  ['/diensten/wat-slijpen-we', true, 'Welke messen slijpt Slijpmaat wel en niet?'],
  ['/werkwijze', true, 'Ieder mes met de hand geslepen.'],
  ['/servicegebied', true, 'Ophalen, bezorgen &amp; langsbrengen.'],
  ['/blogs', false, 'Blogs over messen slijpen en onderhoud'],
  ['/over-ons', true, 'Twee Utrechtse vrienden met passie voor scherpte.'],
  ['/veelgestelde-vragen', true, 'Alles wat je wilt weten over Slijpmaat.'],
  ['/contact', true, 'Contact met je Maat.'],
  ['/algemene-voorwaarden', false, 'Algemene voorwaarden Slijpmaat'],
  ['/privacyverklaring', false, 'Privacyverklaring Slijpmaat'],
];

const match = (html, expression, label, pathname) => {
  const value = html.match(expression)?.[1];
  if (!value) throw new Error(`${pathname}: ${label} ontbreekt`);
  return value;
};

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
    const jsonLd = match(html, /<script id="route-jsonld" type="application\/ld\+json">(.*?)<\/script>/s, 'JSON-LD', pathname);
    const schema = JSON.parse(jsonLd);
    const schemaTypes = schema['@graph'].map((item) => item['@type']);

    if (!rootHtml.includes(expectedH1)) throw new Error(`${pathname}: verwachte primaire tekst ontbreekt in ruwe HTML`);
    if (canonical !== `https://slijpmaat.nl${pathname}`) throw new Error(`${pathname}: onjuiste canonical ${canonical}`);
    if (robots !== (indexable ? 'index,follow' : 'noindex,follow')) throw new Error(`${pathname}: onjuiste robots ${robots}`);
    if (!schemaTypes.includes('WebSite') || !schemaTypes.includes('WebPage')) throw new Error(`${pathname}: WebSite/WebPage-schema ontbreekt`);
    if (pathname !== '/' && !schemaTypes.includes('BreadcrumbList')) throw new Error(`${pathname}: BreadcrumbList ontbreekt`);
    if ((pathname === '/servicegebied' || pathname === '/veelgestelde-vragen') !== schemaTypes.includes('FAQPage')) {
      throw new Error(`${pathname}: FAQPage-schema komt niet overeen met zichtbare FAQ-inhoud`);
    }
    if (schemaTypes.some((type) => type === 'LocalBusiness' || type === 'Organization')) throw new Error(`${pathname}: onbevestigd bedrijfsschema gevonden`);

    results.push({ pathname, title, description, canonical });
  }

  const unique = (values) => new Set(values).size === values.length;
  if (!unique(results.map((result) => result.title))) throw new Error('Titles zijn niet uniek');
  if (!unique(results.map((result) => result.description))) throw new Error('Descriptions zijn niet uniek');
  if (!unique(results.map((result) => result.canonical))) throw new Error('Canonicals zijn niet uniek');

  const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
  const robotsText = await robotsResponse.text();
  if (robotsResponse.status !== 200 || !robotsText.includes('Sitemap: https://slijpmaat.nl/sitemap.xml')) throw new Error('robots.txt is niet correct bereikbaar');

  const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
  const sitemap = await sitemapResponse.text();
  if (sitemapResponse.status !== 200) throw new Error('sitemap.xml is niet bereikbaar');
  const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((result) => result[1]);
  const expectedUrls = routes.filter(([, indexable]) => indexable).map(([pathname]) => `https://slijpmaat.nl${pathname}`);
  if (JSON.stringify(sitemapUrls) !== JSON.stringify(expectedUrls)) throw new Error('Sitemap bevat niet exact de indexeerbare canonieke routes');

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
