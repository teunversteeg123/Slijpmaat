import { renderToString } from 'react-dom/server';
import App from './App';
import { getRouteByPath, jsonLdString, NOT_FOUND_SEO, PRERENDER_PATHS } from './seo';

export const prerenderPaths = PRERENDER_PATHS;

export const renderRoute = (pathname: string) => ({
  appHtml: renderToString(<App initialPath={pathname} />),
  metadata: getRouteByPath(pathname) ?? NOT_FOUND_SEO,
  jsonLd: jsonLdString(pathname),
});
