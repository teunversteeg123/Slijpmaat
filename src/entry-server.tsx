import { renderToString } from 'react-dom/server';
import App from './App';
import { getRouteByPath, INDEXABLE_ROUTES, jsonLdString, NOT_FOUND_SEO, PRERENDER_PATHS } from './seo';

export const prerenderPaths = PRERENDER_PATHS;
export const indexablePaths = INDEXABLE_ROUTES.map((route) => route.path);

export const renderRoute = (pathname: string) => ({
  appHtml: renderToString(<App initialPath={pathname} />),
  metadata: getRouteByPath(pathname) ?? NOT_FOUND_SEO,
  jsonLd: jsonLdString(pathname),
});
