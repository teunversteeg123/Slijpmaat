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
  const robots = metadata.index ? 'index,follow' : 'noindex,follow';
  return [
    '<!-- ROUTE_SEO_START -->',
    `    <title>${escapeHtml(metadata.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `    <meta name="robots" content="${robots}" />`,
    `    <link rel="canonical" href="${canonicalUrl}" />`,
    `    <meta property="og:title" content="${escapeHtml(metadata.title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(metadata.description)}" />`,
    '    <meta property="og:type" content="website" />',
    '    <meta property="og:site_name" content="Slijpmaat.nl" />',
    `    <meta property="og:url" content="${canonicalUrl}" />`,
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`,
    `    <script id="route-jsonld" type="application/ld+json">${jsonLd}</script>`,
    '    <!-- ROUTE_SEO_END -->',
  ].join('\n');
};

try {
  const { prerenderPaths, renderRoute } = await import(pathToFileURL(serverBundle).href);

  for (const pathname of prerenderPaths) {
    const { appHtml, metadata, jsonLd } = renderRoute(pathname);
    const html = template
      .replace(/<!-- ROUTE_SEO_START -->[\s\S]*?<!-- ROUTE_SEO_END -->/, renderSeoHead(metadata, jsonLd))
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outputFile = pathname === '/'
      ? join(distDirectory, 'index.html')
      : pathname === '/404'
        ? join(distDirectory, '404.html')
        : join(distDirectory, pathname.slice(1), 'index.html');

    await mkdir(dirname(outputFile), { recursive: true });
    await writeFile(outputFile, html, 'utf8');

    if (pathname === '/404') {
      const nested404 = join(distDirectory, '404', 'index.html');
      await mkdir(dirname(nested404), { recursive: true });
      await writeFile(nested404, html, 'utf8');
    }
  }
} finally {
  await rm(join(rootDirectory, '.prerender'), { recursive: true, force: true });
}
