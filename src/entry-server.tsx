import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'node:stream';
import App from './App';
import { getRouteByPath, INDEXABLE_ROUTES, jsonLdString, NOT_FOUND_SEO, PRERENDER_PATHS } from './seo';

export const prerenderPaths = PRERENDER_PATHS;
export const indexablePaths = INDEXABLE_ROUTES.map((route) => route.path);

export const renderRoute = async (pathname: string) => {
  // Wait for route chunks before writing static HTML: SEO content stays complete.
  const appHtml = await new Promise<string>((resolve, reject) => {
    const output = new PassThrough();
    let html = '';
    output.setEncoding('utf8');
    output.on('data', (chunk: string) => { html += chunk; });
    output.on('end', () => resolve(html));
    output.on('error', reject);
    const stream = renderToPipeableStream(<App initialPath={pathname} />, {
      onAllReady() { stream.pipe(output); },
      onError(error) { reject(error); },
    });
  });
  return { appHtml, metadata: getRouteByPath(pathname) ?? NOT_FOUND_SEO, jsonLd: jsonLdString(pathname) };
};
