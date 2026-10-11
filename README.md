# Mohsin Ali — Portfolio Website

Personal portfolio for **Mohsin Ali**, Shopify Theme Developer & Frontend Developer based in Lahore, Pakistan, and available for remote and on-site work.

Built with **HTML5, CSS3 and vanilla JavaScript**: no frameworks, no build step and no npm packages. The only external resource is Google Fonts (Inter and Space Grotesk), which falls back to system fonts when offline.

## Project structure

```
/
├── index.html              Page content, SEO metadata, structured data
├── 404.html                "Page not found" page (used by Netlify and GitHub Pages)
├── site.webmanifest        App name, colours and icons for mobile home screens
├── robots.txt              Allows search engines to index the site
├── .nojekyll               Tells GitHub Pages to serve files as-is
├── style.css               Design tokens, components, animations, breakpoints
├── script.js               Menu, scroll spy, typewriter, filters, modal, tabs, FAQ, form
├── assets/
│   ├── Mohsin-Ali-Resume.pdf      Resume (exported from Mohsin_Ali_Resume.docx)
│   ├── images/
│   │   ├── mohsin-ali-profile.webp   Hero photo (800×800)
│   │   ├── mohsin-ali-logo.webp      Header, footer and contact-card photo
│   │   ├── og-image.png              Link-preview image (1200×630)
│   │   ├── certificates/             Certificate images (Advance Python)
│   │   └── projects/                 Project screenshots (16:10 WebP)
│   │       └── full/                 Full-page homepage screenshots
│   └── icons/
│       ├── favicon.ico / favicon.svg / favicon-32.png
│       ├── apple-touch-icon.png
│       └── icon-192.png / icon-512.png
└── README.md
```

## Run it locally

Open the folder in VS Code, then either:

- **Double-click `index.html`.** Everything works, including the menu, filters, project details, tabs, FAQ and form.
- **Or serve the folder** (closer to how it runs online):
  ```bash
  python3 -m http.server 8000     # then open http://localhost:8000
  ```
  or use VS Code's **Live Server** extension (right-click `index.html` → *Open with Live Server*).

## Deploy

The site is static, so upload the folder's contents as they are. No build command is needed.

| Host | Steps |
|---|---|
| **Netlify** | Open app.netlify.com/drop and drag the project folder onto the page. |
| **Vercel** | Import the repo or folder. Framework preset: **Other**. Build command: *none*. Output directory: `./` |
| **GitHub Pages** | Create a repository, upload the **contents** of this folder (so `index.html` sits at the top level), then go to Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save. The site goes live at `https://<username>.github.io/<repo>/` after a minute or two. |

### After your first deploy (recommended for SEO)

Link previews on LinkedIn, WhatsApp and Facebook need full URLs. Once you know your live address (for example `https://mohsinali.netlify.app/`), edit the `<head>` of `index.html`:

1. Uncomment the canonical link and set your URL:
   `<link rel="canonical" href="https://YOUR-DOMAIN/">`
2. Add `<meta property="og:url" content="https://YOUR-DOMAIN/">`
3. Change both image tags to full URLs:
   `og:image` and `twitter:image` → `https://YOUR-DOMAIN/assets/images/og-image.png`

## Contact form

By default, **Send Message** checks the fields and then opens the visitor's email app with the message filled in, addressed to mohsinrajpout72@outlook.com. It never claims a message was sent when it wasn't.

To receive messages directly in your inbox instead:

1. Create a free form at https://formspree.io.
2. Copy its form ID (the part after `/f/`).
3. Paste it into `CONTACT_CONFIG.formspreeId` at the top of `script.js`.

## Common edits

- **Photo sizes:** change `--logo-size` and `--contact-photo-size` near the top of `style.css`.
- **Projects:** each card is in `index.html` under `PORTFOLIO`. The text in the **View Details** window comes from the `PROJECTS` object in `script.js`; its key must match the button's `data-project` value. Filters use the card's `data-category` (`shopify`, `live`, `demo`, `custom`, `academic`).
- **Store visuals (MineForever, SNUGYZ, Mod Office):** each card uses the top of the store's homepage screenshot (`assets/images/projects/<name>.webp`). The details window shows the full homepage in a scrollable browser frame (`assets/images/projects/full/<name>-homepage.webp`), plus the store's own banner images loaded from its Shopify CDN. Banners that can't load are hidden automatically. For sharper visuals, replace these files with larger screenshots (1440px wide or more) under the same names.
- **Images:** to replace an image, keep the same file name. Use WebP, and a 16:10 shape for project screenshots.
- **Resume:** replace `assets/Mohsin-Ali-Resume.pdf` and keep the same file name.
- **Experience & certifications:** in `index.html` under `CAREER (tabs)`. Experience cards go in `panel-exp`. To add a certificate, copy the `<article class="card cert">` block in `panel-cert` and put its image in `assets/images/certificates/`.
- **Blog section:** add `hidden` to `<section id="insights">`. The Blog links in the menu and footer hide automatically.
- **Testimonials:** the section is built but hidden. Add real client reviews (with permission), then remove `hidden` from `<section id="testimonials">`.

## Features

- Sticky header with a photo logo and an accessible mobile menu (Esc closes it, and it closes after a link is tapped)
- Smooth scrolling, with the menu highlighting the section you're viewing
- Typewriter role animation, animated stat counters and scroll-reveal animations
- Project filters and a project-details window (native `<dialog>`)
- Career tabs with arrow-key support, and an accessible FAQ accordion
- Contact form with validation and spam protection, plus a Formspree or email fallback
- Scroll-to-top button and an automatically updating copyright year
- Responsive from 320px phones to 2560px screens
- Respects reduced-motion settings, with visible focus outlines and a skip link
- SEO: title and description, Open Graph and Twitter cards, Person structured data, favicons and a web manifest
