import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const rootDirectory = process.cwd();
const distDirectory = join(rootDirectory, 'dist');
const serverBundle = join(rootDirectory, '.prerender', 'entry-server.js');
const template = await readFile(join(distDirectory, 'index.html'), 'utf8');

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const renderSeoHead = (metadata, jsonLd) => {
  const canonicalUrl = `https://slijpmaat.nl${metadata.path}`;
  const socialImage = `https://slijpmaat.nl${metadata.image ?? '/assets/slijpmaat-homepage-hero.jpg'}`;
  const socialImageAlt = metadata.imageAlt ?? 'Slijpmaat slijpt keukenmessen met de hand in Utrecht';
  const socialType = metadata.datePublished ? 'article' : 'website';
  const robots = metadata.index ? 'index,follow' : 'noindex,follow';
  return [
    '<!-- ROUTE_SEO_START -->',
    `    <title>${escapeHtml(metadata.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `    <meta name="robots" content="${robots}" />`,
    `    <link rel="canonical" href="${canonicalUrl}" />`,
    `    <meta property="og:title" content="${escapeHtml(metadata.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(metadata.description)}" />`,
    `    <meta property="og:type" content="${socialType}" />`,
    '    <meta property="og:site_name" content="Slijpmaat" />',
    '    <meta property="og:locale" content="nl_NL" />',
    `    <meta property="og:url" content="${canonicalUrl}" />`,
    `    <meta property="og:image" content="${socialImage}" />`,
    `    <meta property="og:image:alt" content="${escapeHtml(socialImageAlt)}" />`,
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`,
    `    <meta name="twitter:image" content="${socialImage}" />`,
    `    <meta name="twitter:image:alt" content="${escapeHtml(socialImageAlt)}" />`,
    `    <script id="route-jsonld" type="application/ld+json">${jsonLd}</script>`,
    '    <!-- ROUTE_SEO_END -->',
  ].join('\n');
};

try {
  const { indexablePaths, prerenderPaths, renderRoute } = await import(pathToFileURL(serverBundle).href);

  for (const pathname of prerenderPaths) {
    const { appHtml, metadata, jsonLd } = renderRoute(pathname);
    const html = template
      .replace(/<!-- ROUTE_SEO_START -->[\s\S]*?<!-- ROUTE_SEO_END -->/, renderSeoHead(metadata, jsonLd))
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outputFile = pathname === '/'
      ? join(distDirectory, 'index.html')
      : pathname === '/404/'
        ? join(distDirectory, '404.html')
        : join(distDirectory, pathname.slice(1), 'index.html');

    await mkdir(dirname(outputFile), { recursive: true });
    await writeFile(outputFile, html, 'utf8');

    if (pathname === '/404/') {
      const nested404 = join(distDirectory, '404', 'index.html');
      await mkdir(dirname(nested404), { recursive: true });
      await writeFile(nested404, html, 'utf8');
    }
  }

  const sitemapUrls = indexablePaths
    .map((pathname) => `  <url><loc>https://slijpmaat.nl${pathname}</loc></url>`)
    .join('\n');
  await writeFile(
    join(distDirectory, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
    'utf8',
  );
  await writeFile(
    join(distDirectory, 'robots.txt'),
    'User-agent: *\nAllow: /\n\nSitemap: https://slijpmaat.nl/sitemap.xml\n',
    'utf8',
  );
} finally {
  await rm(join(rootDirectory, '.prerender'), { recursive: true, force: true });
}
