// Sync the CV from the personal-assistant source into the website, re-applying
// the two website-specific tweaks (favicon path + back-to-site link).
// Run manually with `node sync-cv.mjs`, or automatically via the pre-commit hook.
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = process.env.CV_SRC ||
  '/Users/ethancparrish/Local Documents/Claude/personal-assistant/references/cv/cv.html';
const DEST = join(__dirname, 'Pages', 'cv.html');

if (!existsSync(SRC)) {
  console.warn('[sync-cv] source not found, skipping: ' + SRC);
  process.exit(0); // never block a commit just because the source is missing
}

let html = readFileSync(SRC, 'utf8');

// 1) Point the favicon at the website's brand assets.
html = html.replace(
  /<link rel="icon" href="[^"]*favicon\.svg"/,
  '<link rel="icon" href="brand_assets/favicon.svg"'
);

// 2) Back-to-site styles — injected once, just before </style>.
if (!html.includes('.back-to-site {')) {
  const css =
`    .back-to-site {
      font-family: 'Josefin Sans', sans-serif;
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--stone);
      text-decoration: none;
      display: inline-block;
      margin-bottom: 24px;
      transition: color 0.18s ease;
    }
    .back-to-site:hover { color: var(--charcoal); }
`;
  html = html.replace(/[ \t]*<\/style>/, css + '  </style>');
}

// 3) Back-to-site link — injected once, at the top of the masthead.
if (!html.includes('class="back-to-site"')) {
  if (html.includes('<header class="masthead">')) {
    html = html.replace(
      '<header class="masthead">',
      '<header class="masthead">\n      <a class="back-to-site" href="index.html">&larr;&nbsp;&nbsp;Whispering River Media</a>'
    );
  } else {
    console.warn('[sync-cv] could not find <header class="masthead"> — back link not added');
  }
}

writeFileSync(DEST, html);
console.log('[sync-cv] Pages/cv.html synced from source');
