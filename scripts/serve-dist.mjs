import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
};

export const createDistServer = (distDirectory = join(process.cwd(), 'dist')) => createServer((request, response) => {
  let requestPath = '/';
  try {
    requestPath = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
  } catch {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Ongeldig verzoek');
    return;
  }

  const redirectsPath = join(distDirectory, '_redirects');
  const redirect = existsSync(redirectsPath)
    ? readFileSync(redirectsPath, 'utf8').split(/\r?\n/)
      .map((line) => line.trim().split(/\s+/))
      .find(([source, , status]) => source === requestPath && /^30[12378]$/.test(status))
    : null;
  if (redirect) {
    response.writeHead(Number(redirect[2]), { Location: redirect[1] });
    response.end();
    return;
  }

  const safePath = normalize(requestPath).replace(/^(\.\.[/\\])+/, '');
  const relativePath = safePath === '/' ? 'index.html' : safePath.replace(/^[/\\]/, '');
  let filePath = join(distDirectory, relativePath);

  if (existsSync(filePath) && statSync(filePath).isDirectory()) filePath = join(filePath, 'index.html');
  if (!existsSync(filePath) && !extname(filePath)) filePath = join(filePath, 'index.html');

  const found = existsSync(filePath) && statSync(filePath).isFile();
  const outputPath = found ? filePath : join(distDirectory, '404.html');
  response.writeHead(found ? 200 : 404, {
    'Content-Type': mimeTypes[extname(outputPath)] ?? 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
  });
  createReadStream(outputPath).pipe(response);
});

if (resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url)) {
  const port = Number.parseInt(process.env.PORT ?? '4173', 10);
  const server = createDistServer();
  server.listen(port, '0.0.0.0', () => {
    console.log(`Slijpmaat production preview: http://localhost:${port}`);
  });
}
