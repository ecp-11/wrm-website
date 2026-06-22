# Plan: PhD Research page (`research.html`)

## Context
The About page has a "Research" link that currently points to `#`. The user wants a real
page behind it that tastefully combines two pages from their old website — a **Research**
(geology) page and a **Geoscience Education** page — into one cohesive page that matches the
current site's dark, editorial design system (Josefin Sans + EB Garamond, `#151310` ground,
parchment/ash/sage palette).

Decisions from the user:
- **Scope: Curated.** Research intro + publications + media, then a Geoscience Education
  section (intro + videos), a **short excerpt** of the Teaching Philosophy, and **no** formal
  References list (those live in the CV).
- **Videos:** real embeds — user will paste YouTube/Vimeo URLs.
- **Hero:** user will provide a fieldwork photo.
- **Extras:** include the *Visit a Virtual Outcrop* button, the inline *3D models* link, and a
  bottom **field-photo gallery**.

## New file: `Pages/research.html`
Built from the same skeleton as `Pages/info.html` / `Pages/about.html` (nav, grain overlay,
tokens, footer, `fade-up` + IntersectionObserver scroll reveal). Page outline:

1. **Nav** — identical to other interior pages (`WRM` home link, Film / Photo / Info).
2. **Full-bleed hero** — reuse the `.info-hero` / `.about-hero` pattern (image + gradient
   scrim + overlaid eyebrow + title). Eyebrow `Geoscience`, title `Research`. Uses the
   user-provided field photo at `images/research/hero.jpg`.
3. **Research intro** — centered editorial column (reuse `.about-intro`/`.lede` styling).
   Verbatim from the old Research page ("I recently earned a Ph.D. in Geology…"). The phrase
   **"3D models"** at the end becomes an inline link to the user's 3D-models URL.
4. **Virtual Outcrop CTA** — lead-in line ("Step into the boots of a field geologist…") + a
   bordered button **"Visit a Virtual Outcrop"** (reuse `.btn` style from About/Info) linking
   to the user's outcrop URL.
5. **Publications + Media** — two-column on desktop, stacked on mobile:
   - *Publications*: reuse the `ol.pubs` / `.work-title` / `.status-tag` markup+CSS from
     `Pages/cv.html` (lines ~318–356 CSS; the geology entries Smith 2023, Parrish 2023,
     Hammond 2019 already exist there). Adapt tokens to this page.
   - *Media*: two video embeds (PhD defense recording + research "elevator pitch") using the
     16:9 iframe **video-card** pattern from the film page's Screening Room
     (`Pages/film.html`), each with a caption.
6. **Section divider → Geoscience Education** (reuse `.section-divider` rule from film.html or a
   simple labeled rule).
   - *Education intro* — the two verbatim paragraphs ("I'm interested in the use of film…" /
     "I found that the incorporation of art…").
   - *Educational video grid* — Sedimentary Rocks 101, Igneous Rocks 101 (Part 1), + any
     additional URLs the user supplies; same video-card embed pattern.
   - *Teaching Philosophy (excerpt)* — the opening 1–2 paragraphs of the old Teaching
     Philosophy text, verbatim (not paraphrased), styled like the body copy. Optional small
     "Full teaching philosophy in CV →" link to `cv.html`.
7. **Field-photo gallery** — a horizontal `gallery-strip` + click-to-open `gallery-lightbox`,
   adapted from the existing implementation in `Pages/film.html` (the `#galleryStrip` /
   `#galleryLightbox` markup + its prev/next/Esc JS). Images from `images/research/`.
8. **Footer** — identical to other pages.

## Other edits
- `Pages/about.html` line 402: change `href="#"` → `href="research.html"` for the Research
  `resource-link`.

## Assets the user provides (wired in at build; placeholders used for anything missing)
- `images/research/hero.jpg` — hero field photo (I'll `sips`-optimize like other images).
- Educational video URLs (Sed Rocks 101, Igneous Rocks 101, …).
- Research media URLs (PhD defense recording, elevator pitch).
- Virtual Outcrop URL; 3D models URL.
- Field gallery photos → `images/research/gallery/` (optimized).
Until a given URL/photo is supplied, use the project's established placeholder convention
(video "coming soon" card; `placehold.co` images; `#` links) so the page is shippable now and
assets drop in later.

## Reuse map (do not reinvent)
- Hero: `.info-hero` / `.about-hero` in `Pages/info.html`, `Pages/about.html`.
- Body/intro/lede + `.btn`: `Pages/about.html`, `Pages/info.html`.
- Publications list: `ol.pubs` block in `Pages/cv.html`.
- Video-card iframe embeds: film page Screening Room in `Pages/film.html`.
- Gallery + lightbox: `#galleryStrip` / `#galleryLightbox` + JS in `Pages/film.html`.
- Scroll reveal: `.fade-up` + IntersectionObserver (already in info.html/about.html).

## Deploy / serving (no extra work)
`serve.mjs` already serves any `Pages/*.html` at a clean URL, and the GitHub Actions workflow
copies `Pages/*.html` and `images/` into the published site — so `research.html` and its images
deploy automatically with no workflow change.

## Verification
1. `node serve.mjs` (already running), open `http://localhost:3000/research.html`.
2. Screenshot desktop (1440) + mobile (390); confirm hero legibility, two-column→stack,
   video embeds load, gallery lightbox opens/navigates, fade-ups trigger on scroll.
3. Confirm no console / pageerror output and no 4xx asset requests (puppeteer check).
4. From `http://localhost:3000/about.html`, click **Research →** and confirm it lands on the
   new page; click the hero/back nav to confirm round-trip.
