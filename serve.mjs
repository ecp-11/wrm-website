import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { extname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PORT = process.env.PORT || 3000;

// HTML pages live in Pages/; shared assets (images, brand_assets, img, …) live
// in the project root. Serve both at clean root URLs by checking Pages/ first,
// then falling back to root. This mirrors the published site structure.
const PAGES = join(__dirname, 'Pages');
const ROOT = __dirname;

const mime = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
};

createServer(async (req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel === '/') rel = 'index.html';
  if (!extname(rel)) rel += '.html';

  for (const base of [PAGES, ROOT]) {
    try {
      const data = await readFile(join(base, rel));
      res.writeHead(200, { 'Content-Type': mime[extname(rel)] || 'text/plain' });
      res.end(data);
      return;
    } catch { /* try next base */ }
  }

  res.writeHead(404);
  res.end('Not found');
}).listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
