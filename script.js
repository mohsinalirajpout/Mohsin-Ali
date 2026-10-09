/* =========================================================
   Mohsin Ali — Portfolio scripts
   Vanilla JavaScript, no dependencies. Loaded with `defer`.
   ========================================================= */

/* ================================
   CONFIG
   ================================ */
const CONTACT_CONFIG = {
  // Optional: create a free form at https://formspree.io and paste its ID
  // (the part after /f/ in the endpoint, e.g. "xyzabcd"). Leave empty to
  // fall back to opening the visitor's email app with the message pre-filled.
  formspreeId: '',
  email: 'mohsinrajpout72@outlook.com',
};

const PROJECTS = {
  'musically-unhinged': {
    title: 'Musically Unhinged',
    category: 'Shopify Store · Humour apparel & gifts for musicians',
    status: { label: 'Live', mod: 'live' },
    theme: 'Dawn',
    image: 'assets/images/projects/musically-unhinged.webp',
    url: 'https://www.musicallyunhinged.com/',
    overview: 'A humour-led T-shirt and gift store for fiddlers, cellists, violinists, music teachers, band directors and "survivors of string players". The brand line is "Serious about the music, not overly serious about ourselves."',
    challenge: 'A wide catalogue had to stay easy to browse. Shoppers needed to reach the right instrument or audience in a couple of clicks, and product cards had to show pricing, discounts and ratings without clutter.',
    role: 'Shopify developer: theme customization, navigation, collection and product experience, content sections and store metadata.',
    built: 'Customized the Dawn theme with a mega menu grouped By Instrument, By Audience and By Shopping Style, a "Shop by Musical Interest" category grid, richer product cards, product tabs and homepage content sections.',
    features: [
      'Multi-group mega menu (instrument, audience, shopping style) with nested links',
      'Predictive search in the header',
      'Product cards with colour swatches, compare-at pricing, discount badges and ratings',
      'Add to cart directly from collection pages',
      '"Shop by Musical Interest" illustrated category grid',
      'Product tabs, collection grids, brand story, reviews, blog and newsletter',
      'SEO and social-sharing metadata',
    ],
    tech: ['Shopify', 'Dawn', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
  },
  bedevia: {
    title: 'Bedevia',
    category: 'Shopify Store · Pet supplies',
    status: { label: 'Live', mod: 'live' },
    theme: 'Elixir',
    image: 'assets/images/projects/bedevia.webp',
    url: 'https://bedevia.com/',
    overview: 'A pet store ("Happy Pets, Healthy Lives") selling carriers, toys, bowls and travel gear, organized into dog toys, cat toys, carriers, feeding, walks and travel collections.',
    challenge: 'Pet owners shop by need, so the homepage had to route them to the right category quickly and build trust with ratings, delivery and returns information before they buy.',
    role: 'Shopify developer: Elixir theme setup and customization, homepage sections, catalog structure and payment setup.',
    built: 'Set up the Elixir theme with a scrolling announcement bar, a hero with a floating bestseller card and trust points, category shortcuts, featured-category cards, product spotlight sections and a best-seller grid with ratings and quick add.',
    features: [
      'Scrolling announcement bar',
      'Hero with a floating bestseller product card and trust points',
      'Category shortcuts and six featured-category cards',
      'Product spotlight sections (ball launcher, cat tunnel, travel gear, walk essentials)',
      'Best-seller grid with ratings, sale pricing, quick add and variant selection',
      'Trust badges: free shipping, 30-day returns, secure checkout, support',
      'Store reviews, newsletter and policy pages',
      'Wallet / express payments (Shop Pay, PayPal)',
    ],
    tech: ['Shopify', 'Elixir', 'Liquid', 'Responsive Design'],
  },
  spydrguard: {
    title: 'SpydrGuard',
    category: 'Shopify Store · Custom-coded single page',
    status: { label: 'Live', mod: 'live' },
    theme: 'Dawn + custom-coded sections',
    image: 'assets/images/projects/spydrguard.webp',
    url: 'https://spydrguard.com/',
    overview: 'A single-page storefront for enzyme laundry sheets made for combat-sports athletes, with the tagline "Fight the funk. Engineered for high-performance athletes." It is built on Dawn with custom-coded sections.',
    challenge: 'The whole product story had to live on one page and stay easy to navigate: the problem, the 3-step protocol, the four enzymes, two editions, subscription pricing and a comparison with regular detergent.',
    role: 'Shopify developer: custom section development, page structure, navigation, pricing presentation and payment setup.',
    built: 'Built multiple custom Liquid sections on Dawn in a bold dark, technical style, with sticky anchor navigation (Shop, The Science, Subscription, Reviews, FAQ), an edition selector, subscription pricing, a comparison table and currency selection.',
    features: [
      'Single-page storefront with sticky anchor navigation',
      'Multiple custom-coded Liquid sections (problem, protocol, molecular breakdown)',
      'Enzyme / ingredient cards',
      'Edition selector ("Two boxes. One formula.")',
      'Subscription pricing',
      '"How it stacks up" comparison against regular detergent',
      'Currency selection and conversion',
      'Testimonials, FAQ, newsletter offer and payment setup',
    ],
    tech: ['Shopify', 'Dawn', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
  },
  kosmeo: {
    title: 'Kosmeo',
    category: 'Shopify Store · Leather sandals with interchangeable Klips',
    status: { label: 'Live', mod: 'live' },
    theme: 'Dawn',
    image: 'assets/images/projects/kosmeo.webp',
    url: 'https://kosmeo.com.au/',
    overview: 'An Australian store for genuine leather sandals with interchangeable Klips ("One sandal. Endless possibilities."), sold as sandals, Klips and bundles.',
    challenge: 'The interchangeable product system had to be clear, so shoppers understand how sandals and Klips combine and why a bundle is better value before they buy.',
    role: 'Shopify developer: catalog structure, navigation, homepage sections and store policies.',
    built: 'Structured the catalog into Sandals, Klips and Bundles on Dawn, with dropdown navigation, a scrolling announcement bar, a lifestyle hero, category cards, a "Pick your sandal" section, bundle sections and black/brown look sections.',
    features: [
      'Sandals / Klips / Bundles catalog structure',
      'Dropdown navigation and scrolling announcement bar',
      'Lifestyle hero and shop-by-category cards',
      'Product-system explanation and colour comparison (black vs brown looks)',
      'Bundle and shop-the-look sections',
      'Customer reviews section',
      'Market and language selectors, size guide, returns, shipping and brand story pages',
    ],
    tech: ['Shopify', 'Dawn', 'Liquid', 'CSS'],
  },
  'haven-forged': {
    title: 'Haven Forged',
    category: 'Shopify Store · Handmade knives & outdoor gear',
    status: { label: 'Live', mod: 'live' },
    theme: 'Dawn',
    image: 'assets/images/projects/haven-forged.webp',
    url: 'https://www.havenforged.com/',
    overview: 'An outdoor gear store for handmade Damascus hunting knives, skinners and Viking axes, each with a hand-stitched leather sheath.',
    challenge: 'Shoppers browse by blade type, so the homepage and collections had to surface categories and trending products quickly and show what makes each handmade piece different.',
    role: 'Shopify developer: homepage, navigation, category and product page setup.',
    built: 'Set up Dawn with a rotating announcement bar, dropdown menus for Hunting Knife and Viking Axe, a hero slideshow, a shop-by-category grid, trending product tabs, an add-to-cart product grid and a brand story section.',
    features: [
      'Rotating announcement bar (free shipping and easy returns)',
      'Dropdown navigation for knife and axe collections',
      'Hero slideshow banners',
      'Shop-by-category grid and trending product tabs',
      'Product grid with add to cart, product galleries and sold-out states',
      'Brand story, trust badges, blog and newsletter',
    ],
    tech: ['Shopify', 'Dawn', 'Liquid', 'Responsive Design'],
  },
  'mine-forever': {
    title: 'MineForever Jewelry',
    category: 'Shopify Store · Everyday fine jewellery',
    status: { label: 'Live', mod: 'live' },
    theme: '',
    image: 'assets/images/projects/mine-forever.webp',
    fullpage: { src: 'assets/images/projects/full/mine-forever-homepage.webp', width: 345, height: 2000 },
    gallery: [
      { src: 'https://mineforeverjewelry.com/cdn/shop/files/ban_6.png?v=1776782962&width=1200', alt: 'MineForever hero slide promoting the sale' },
      { src: 'https://mineforeverjewelry.com/cdn/shop/files/ban_1.png?v=1776783129&width=1200', alt: 'MineForever Gilded Luxury hero slide' },
      { src: 'https://mineforeverjewelry.com/cdn/shop/files/ban_4.png?v=1776781191&width=1200', alt: 'MineForever Lab Diamonds banner' },
    ],
    url: 'https://mineforeverjewelry.com/',
    overview: 'A fine jewellery store for everyday wear with about 80 products: rings, necklaces, earrings, bracelets and sets in 14K and 18K gold and silver, including lab diamond and moissanite pieces and named collections.',
    challenge: 'A large catalogue had to be browsable several ways at once (by product type, by line such as Everyday Fine Jewelry, Modern Classics and Lab Diamonds, and by named collection) and filterable by metal, carat and ring size.',
    role: 'Shopify developer: storefront build, navigation, homepage sections, collection filtering and product presentation.',
    built: 'A storefront with a multi-level menu, a three-slide "Gilded Luxury" hero, category and collection sections, a filterable collection page and product cards with metal swatches, ratings and quick buy.',
    features: [
      'Announcement bar: free shipping over $80 with subscription, plus a store-credit signup offer',
      'Multi-level menu: Everyday Fine Jewelry, Modern Classics, Lab Diamonds and named collections (Del Mar Links, La Jolla Sol, Hermosa Alma, The Half-time Collection)',
      'Three-slide hero banner, shop-by-category tiles and a Lab Diamonds feature',
      'Brand value pillars and a GRA-certified tennis jewellery section',
      'Collection filters: category, metal type, price range, carat weight, ring size and colour, with 9 sort options',
      'Product cards with gold/silver swatches, ratings and quick buy',
      'New arrivals carousel, wishlist and newsletter signup with a first-order discount',
      'Policy pages and payment icons (Shop Pay, PayPal, Apple Pay, Google Pay and cards)',
    ],
    tech: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
  },
  snugyz: {
    title: 'SNUGYZ',
    category: 'Shopify Store · Baby care & parenting essentials',
    status: { label: 'Live', mod: 'live' },
    theme: '',
    image: 'assets/images/projects/snugyz.webp',
    fullpage: { src: 'assets/images/projects/full/snugyz-homepage.webp', width: 379, height: 2000 },
    gallery: [
      { src: 'https://snugyz.com/cdn/shop/files/banner_d8fa245e-e11d-4d13-9942-7869c71ad957.png?v=1777036835&width=1200', alt: 'SNUGYZ hero banner: Carry Your Baby With Comfort & Love' },
      { src: 'https://snugyz.com/cdn/shop/files/banner3_5a75d6ab-45b0-4ff0-a326-fe3f52597520.png?v=1777035936&width=1200', alt: 'SNUGYZ hero banner: Protect Every Step As They Grow' },
      { src: 'https://snugyz.com/cdn/shop/files/banner4_616387df-f50f-4a61-816b-fb8828ac77ae.png?v=1777388754&width=1200', alt: 'SNUGYZ feature banner' },
      { src: 'https://snugyz.com/cdn/shop/files/banner5.png?v=1777037986&width=1200', alt: 'SNUGYZ feature banner' },
    ],
    url: 'https://snugyz.com/',
    overview: 'A baby care store ("Smart Parenting Made Simple") selling changing pads, sling carriers, knee pads, teething sticks, nasal aspirators and other everyday essentials. The footer credits the build to HiveNexis.',
    challenge: 'Parents need reassurance on safety and convenience before buying, so the store had to combine product merchandising with trust signals and answers to common questions.',
    role: 'Shopify developer at HiveNexis: storefront build, homepage sections, product pages and content setup.',
    built: 'A storefront with a three-banner hero, product feature sections, trust badges, a trending products grid with sale and new badges, product pages with FAQ accordions, a blog and newsletter signup.',
    features: [
      'Three hero banners: changing pad, baby carrying and safe first steps',
      'Trust badges: free shipping, 24/7 support, secure payment and money-back guarantee',
      'New & Trending grid with "New" and sale badges and compare-at pricing',
      'Product pages with image carousel and zoom, colour and size options, and FAQ accordions',
      '"Fast Shipping" and "Exchanges Accepted" badges on product pages',
      'Homepage FAQ covering safety, travel, newborn suitability and payments',
      'Blog with guides on hip seat carriers, crib toys and diaper bags',
      'Newsletter signup and policy pages (delivery, privacy, shipping & returns, terms)',
    ],
    tech: ['Shopify', 'Liquid', 'HTML', 'CSS'],
  },
  'mod-office': {
    title: 'Mod Office',
    category: 'Shopify Store · B2B workspace furniture',
    status: { label: 'Live', mod: 'live' },
    theme: '',
    image: 'assets/images/projects/mod-office.webp',
    fullpage: { src: 'assets/images/projects/full/mod-office-homepage.webp', width: 319, height: 2000 },
    gallery: [
      { src: 'https://shopmodoffice.com/cdn/shop/files/2nd.png?v=1775344680&width=1000', alt: 'Mod Office nursing pod spotlight' },
      { src: 'https://shopmodoffice.com/cdn/shop/files/podcast-pod-lifestyle-CnBkS_pP.png?v=1775344194&width=1200', alt: 'Mod Office podcast studio pod' },
      { src: 'https://shopmodoffice.com/cdn/shop/files/31.jpg?v=1775349176&width=1200', alt: 'Mod Office conference table set-up' },
    ],
    url: 'https://shopmodoffice.com/',
    overview: 'A quote-led B2B store for coworking and flex-space operators, selling office pods, nursing pods, podcast studios, conference tables, cubicles, acoustics and chairs.',
    challenge: 'Most buyers need a recommendation and a quote rather than a cart checkout, so the store had to work as a consultation funnel while still offering a browsable shop.',
    role: 'Shopify developer: storefront build, navigation, homepage sections and quote request flow.',
    built: 'A strategy-led Shopify homepage with a Shop dropdown, signature solution spotlights, a "Get a Quote in 24 Hours" request flow, a four-step process section and calls to action.',
    features: [
      'Navigation: Strategy, Solutions, Why Us, How It Works, Shop and Blogs',
      'Shop dropdown: Office Pods, Cubicles, Portable Offices, Tables, Acoustics, Office Chair, AV & Hybrid Meeting Planning',
      '"Get a Quote in 24 Hours" call to action with a request-a-quote form',
      'Hero over a furnished coworking space, plus an icon row of use cases',
      'Spotlights for nursing pods, 3-in-1 conference tables and podcast studios',
      'Four-step process section (Audit, Strategy, Quote, Delivery) and a testimonial',
      'Collection pages with sorting and quote requests by variant',
    ],
    tech: ['Shopify', 'Liquid', 'HTML', 'CSS'],
  },
  'clocked-blocked': {
    title: 'Clocked & Blocked',
    category: "Shopify Store · Women's print-to-order apparel",
    status: { label: 'Demo Store', mod: 'demo' },
    theme: 'Essence',
    image: 'assets/images/projects/clocked-blocked.webp',
    url: 'https://gjx16i-gh.myshopify.com/',
    urlLabel: 'View Demo Store',
    overview: 'A demo store for women\'s tees, hoodies, tanks and accessories "that say the quiet part out loud", printed to order and organized into capsule collections.',
    challenge: 'Six slogan capsules and several hero campaigns had to look right on desktop and mobile while keeping navigation simple.',
    role: 'Shopify developer: theme setup, navigation, homepage merchandising and customer features.',
    built: 'Configured the Essence theme with Shop and Capsules dropdown navigation, a four-slide hero with separate desktop/mobile imagery, a slogan marquee, "Shop the essentials" and "Shop by capsule" grids and a bestsellers carousel.',
    features: [
      'Shop and Capsules mega navigation',
      'Four-slide hero with separate desktop/mobile images',
      'Scrolling slogan marquee',
      '"Shop the essentials" and "Shop by capsule" grids',
      'Bestsellers product carousel with reviews',
      'Wishlist, cart drawer and customer accounts',
      'Newsletter signup',
    ],
    tech: ['Shopify', 'Essence', 'Liquid', 'Responsive Design'],
  },
  'sibtain-javed': {
    title: 'Muhammad Sibtain Javed',
    category: 'Custom Website · Shia Islamic content creator portfolio',
    status: { label: 'Live', mod: 'live' },
    theme: '',
    image: 'assets/images/projects/sibtain-javed.webp',
    fullpage: { src: 'assets/images/projects/full/sibtain-javed-homepage.webp', width: 294, height: 2000 },
    gallery: [
      { src: 'assets/images/projects/sibtain-javed-videos.webp', alt: 'Featured Videos section with platform filters and video cards' },
      { src: 'assets/images/projects/sibtain-javed-content.webp', alt: 'What I Share section with content category cards' },
      { src: 'assets/images/projects/sibtain-javed-journey.webp', alt: 'Channel Overview section with Channels, Platforms and Voices tabs' },
    ],
    url: 'https://mohsinalirajpout.github.io/Muhammad-Sibtain-Javed/',
    urlLabel: 'Visit Website',
    visualsLabel: 'Website Visuals',
    galleryLabel: 'Page sections',
    repo: 'https://github.com/mohsinalirajpout/Muhammad-Sibtain-Javed',
    overview: 'A portfolio for Muhammad Sibtain Javed (@sjrajpout14), a Shia Islamic content creator from Lahore who shares majlis and bayan clips, nohay, manqabat, WhatsApp status videos and procession footage across YouTube, TikTok, Facebook, Instagram and WhatsApp.',
    challenge: 'His work is spread across five platforms, with 383 YouTube videos alone. The site had to gather the best clips in one place, let visitors filter and play them without leaving the page, and show his reach with real, dated public numbers.',
    role: 'Frontend developer: design, development, content structure and GitHub Pages deployment.',
    built: 'A hand-coded, dark red-and-black site in HTML, CSS and vanilla JavaScript with no frameworks or build step. All content (bio, stats, 33 videos, journey, FAQ and links) lives in a single data.js file, and fonts, thumbnails and icons are stored locally so the site also works offline.',
    features: [
      'Hero with typewriter roles, calligraphy logo with a spinning ring and floating tags',
      'Endless "Latest Uploads" strip of vertical clips that pauses on hover',
      'Count-up stats: 1.54K subscribers, 270,255 YouTube views, 383 videos and 140.7K TikTok likes',
      'Featured Videos grid with All / YouTube / Shorts / TikTok / Facebook / Instagram filters and "Show all"',
      'Video window that plays clips with each platform\'s official player, with a thumbnail fallback',
      'Topics and "What I Share" content sections',
      'Channel Overview tabs (Channels, Platforms, Voices) with keyboard support',
      'FAQ accordion, contact form that opens the visitor\'s email app, and a WhatsApp Channel link',
      'Sticky header, scroll spy, scroll reveal, back to top and reduced-motion support',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'GitHub Pages'],
  },
  'complaint-portal': {
    title: 'Complaint Registration & Management System',
    category: 'Final-year project · BS Information Technology',
    status: { label: 'Academic', mod: 'academic' },
    theme: '',
    image: 'assets/images/projects/complaint-portal.webp',
    gallery: [
      { src: 'assets/images/projects/complaint-portal.webp', alt: 'Principal dashboard with stat cards, filters and the complaint table' },
      { src: 'assets/images/projects/complaint-portal-login.webp', alt: 'Sign-in screen for students and staff' },
    ],
    url: '',
    repo: 'https://github.com/mohsinalirajpout/Complaint-registration-management-system',
    overview: 'A role-based complaint portal for Govt. M.A.O Graduate College, Lahore. Students submit and track complaints (optionally anonymously), heads of department manage their department, and the principal oversees everything.',
    challenge: 'Anonymous complaints had to stay masked, even from administrators, unless deliberately unmasked with an audit trail. The whole system also had to run on free, open-source components.',
    role: 'Final-year project: design and development of the web application.',
    built: 'A Django 5.2 application with role-based access control, a complaint state machine, email notifications, analytics dashboards and PDF/CSV reports.',
    features: [
      'Student, HOD and Principal roles with role-based access',
      'Anonymous complaints with audited unmasking',
      'Workflow: Submitted → Assigned → In Progress → Resolved → Closed',
      'Search, filter and sort across status, category, department and dates',
      'Evidence attachments (PDF/JPG/PNG)',
      'Dashboards with Chart.js, PDF and CSV reports',
      'Email notifications and activity logs',
      '284 automated tests, 93.4% coverage (per repository README)',
    ],
    tech: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Chart.js'],
  },
};

document.documentElement.classList.add('js');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ================================
   OPTIONAL FEATURES (blog)
   If the Insights section is hidden, hide its links too.
   ================================ */
function initFeatures() {
  const blog = $('#insights');
  if (blog && blog.hidden) {
    $$('li[data-feature="blog"]').forEach((li) => { li.hidden = true; });
  }
}

/* ================================
   HEADER + MOBILE NAVIGATION
   ================================ */
function initNav() {
  const header = $('#header');
  const toggle = $('#nav-toggle');
  const nav = $('#primary-nav');
  const desktop = window.matchMedia('(min-width: 1024px)');

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('no-scroll', open);
    header.classList.toggle('is-scrolled', open || window.scrollY > 10);
  };

  // Hide the mobile panel from assistive tech / tab order while closed.
  const syncInert = () => {
    const closedOnMobile = !desktop.matches && !nav.classList.contains('is-open');
    nav.inert = closedOnMobile;
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    syncInert();
  });

  nav.addEventListener('click', (e) => {
    if (e.target.closest('a') && !desktop.matches) { setOpen(false); syncInert(); }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false); syncInert(); toggle.focus();
    }
  });

  desktop.addEventListener('change', () => { setOpen(false); syncInert(); });
  syncInert();

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10 || nav.classList.contains('is-open'));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ================================
   ACTIVE SECTION IN NAV
   ================================ */
function initScrollSpy() {
  const links = $$('.nav__link');
  const map = new Map();
  links.forEach((link) => {
    const section = $(link.getAttribute('href'));
    if (section) map.set(section, link);
  });
  // Sections not in the nav highlight their nearest parent item.
  const extras = { skills: 'home', testimonials: 'insights' };
  Object.entries(extras).forEach(([id, target]) => {
    const section = document.getElementById(id);
    const link = links.find((l) => l.getAttribute('href') === `#${target}`);
    if (section && link) map.set(section, link);
  });

  const setActive = (link) => {
    links.forEach((l) => {
      const on = l === link;
      l.classList.toggle('is-active', on);
      if (on) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(map.get(entry.target));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  map.forEach((_, section) => observer.observe(section));
}

/* ================================
   TYPEWRITER ROLES
   ================================ */
function initTyped() {
  const el = $('#typed');
  if (!el) return;
  let roles;
  try { roles = JSON.parse(el.dataset.roles); } catch { return; }
  if (prefersReducedMotion || !roles.length) return; // static first role

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = true;

  const tick = () => {
    const word = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    el.textContent = word.slice(0, charIndex);

    let delay = deleting ? 45 : 85;
    if (!deleting && charIndex === word.length) { deleting = true; delay = 1800; }
    else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 350;
    }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2200);
}

/* ================================
   STAT COUNTERS
   ================================ */
function initCounters() {
  const counters = $$('[data-count]');
  if (prefersReducedMotion) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const start = performance.now();
      const duration = 1100;
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      el.textContent = '0';
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => observer.observe(c));
}

/* ================================
   SCROLL REVEAL
   ================================ */
function initReveal() {
  const items = $$('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      obs.unobserve(el);
      // Once revealed, drop the reveal classes so hover transforms work normally.
      setTimeout(() => {
        el.classList.remove('reveal', 'is-visible');
        el.style.transitionDelay = '';
      }, 1100);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Small stagger for siblings in grids.
  items.forEach((el) => {
    const siblings = el.parentElement ? $$(':scope > .reveal', el.parentElement) : [];
    const i = siblings.indexOf(el);
    if (i > 0) el.style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
    observer.observe(el);
  });
}

/* ================================
   PORTFOLIO FILTER
   ================================ */
function initFilters() {
  const buttons = $$('.filter');
  const cards = $$('.project');
  const status = $('#filter-status');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      buttons.forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });

      let shown = 0;
      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        if (match) {
          shown += 1;
          card.hidden = false;
          card.classList.add('is-visible');
          requestAnimationFrame(() => card.classList.remove('is-hiding'));
        } else if (prefersReducedMotion) {
          card.hidden = true;
        } else {
          card.classList.add('is-hiding');
          setTimeout(() => { if (card.classList.contains('is-hiding')) card.hidden = true; }, 250);
        }
      });
      status.textContent = `${shown} project${shown === 1 ? '' : 's'} shown`;
    });
  });
}

/* ================================
   PROJECT MODAL
   ================================ */
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function galleryItems(list) {
  const e = escapeHTML;
  return list.map((g) => `<a href="${e(g.src)}" target="_blank" rel="noopener"><img src="${e(g.src)}" alt="${e(g.alt)}" width="1200" height="750" loading="lazy" referrerpolicy="no-referrer" data-hide-on-error></a>`).join('');
}

/* Full-page homepage screenshot in a browser frame, plus banner shots. */
function renderStoreVisuals(p) {
  const e = escapeHTML;
  const f = p.fullpage;
  const domain = p.url ? new URL(p.url).hostname.replace(/^www\./, '') : '';
  const shots = p.gallery && p.gallery.length
    ? `<div class="media__shots"><p class="media__label">${e(p.galleryLabel || 'Homepage banners')}</p><div class="modal__gallery media__grid">${galleryItems(p.gallery)}</div></div>`
    : '';
  return `
      <div class="modal__block">
        <h3>${e(p.visualsLabel || 'Store Visuals')}</h3>
        <div class="media${shots ? '' : ' media--single'}">
          <figure class="media__page">
            <div class="browser">
              <div class="browser__bar" aria-hidden="true"><span class="browser__dots"><i></i><i></i><i></i></span><span class="browser__url">${e(domain)}</span></div>
              <div class="browser__viewport" tabindex="0" role="region" aria-label="${e(p.title)} full homepage screenshot. Scroll to explore.">
                <img src="${e(f.src)}" alt="Full homepage of ${e(p.title)}, from header to footer" width="${f.width}" height="${f.height}" loading="lazy" decoding="async">
              </div>
            </div>
            <figcaption class="media__caption">Full homepage · scroll to explore · <a href="${e(f.src)}" target="_blank" rel="noopener">Open full size</a></figcaption>
          </figure>
          ${shots}
        </div>
      </div>`;
}

function renderProject(p) {
  const e = escapeHTML;
  const links = [];
  if (p.url) links.push(`<a class="btn btn--primary" href="${e(p.url)}" target="_blank" rel="noopener">${e(p.urlLabel || 'Visit Live Store')} <svg class="icon" aria-hidden="true"><use href="#i-external"/></svg></a>`);
  if (p.repo) links.push(`<a class="btn btn--primary" href="${e(p.repo)}" target="_blank" rel="noopener">View on GitHub <svg class="icon" aria-hidden="true"><use href="#i-github"/></svg></a>`);
  links.push('<a class="btn btn--outline" href="#contact" data-close>Discuss a Similar Project</a>');

  return `
    <div class="modal__hero"><img src="${e(p.image)}"${p.fallback ? ` data-fallback="${e(p.fallback)}" referrerpolicy="no-referrer"` : ''} alt="${e(p.title)} screenshot" width="1200" height="750"></div>
    <div class="modal__body">
      <div class="modal__top">
        <p class="project__cat">${e(p.category)}</p>
        <h2 class="modal__title" id="modal-title">${e(p.title)}</h2>
        <div class="modal__meta">
          <span class="status status--${e(p.status.mod)}">${e(p.status.label)}</span>
          ${p.theme ? `<span class="pill">Theme: ${e(p.theme)}</span>` : ''}
        </div>
      </div>
      <div class="modal__block"><h3>Overview</h3><p>${e(p.overview)}</p></div>
      <div class="modal__grid">
        <div class="modal__block"><h3>Challenge</h3><p>${e(p.challenge)}</p></div>
        <div class="modal__block"><h3>My Role</h3><p>${e(p.role)}</p></div>
      </div>
      <div class="modal__block"><h3>What I Built</h3><p>${e(p.built)}</p></div>
      <div class="modal__block"><h3>Key Features</h3><ul class="checklist modal__features">${p.features.map((f) => `<li>${e(f)}</li>`).join('')}</ul></div>
      ${p.fullpage ? renderStoreVisuals(p) : ''}
      ${p.gallery && !p.fullpage ? `<div class="modal__block"><h3>Screenshots</h3><div class="modal__gallery">${galleryItems(p.gallery)}</div></div>` : ''}
      <div class="modal__block"><h3>Technology</h3><ul class="tags tags--lg">${p.tech.map((t) => `<li>${e(t)}</li>`).join('')}</ul></div>
      ${!p.url && !p.repo ? '<p class="modal__note">This is a demo / in-development store without a public link. Walkthroughs are available on request.</p>' : ''}
      <div class="modal__actions">${links.join('')}</div>
    </div>`;
}

/* Gently auto-scroll the full-page screenshot while hovered (desktop only). */
function initAutoScroll(root) {
  if (prefersReducedMotion || !window.matchMedia('(hover: hover)').matches) return;
  root.querySelectorAll('.browser__viewport').forEach((vp) => {
    let raf = 0;
    let last = 0;
    const step = (t) => {
      if (last) vp.scrollTop += (t - last) * 0.12; // ~120px per second
      last = t;
      if (vp.scrollTop + vp.clientHeight < vp.scrollHeight - 1) raf = requestAnimationFrame(step);
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; last = 0; };
    vp.addEventListener('mouseenter', () => { stop(); raf = requestAnimationFrame(step); });
    vp.addEventListener('mouseleave', stop);
    vp.addEventListener('wheel', stop, { passive: true });
  });
}

function initModal() {
  const modal = $('#project-modal');
  const content = $('#modal-content');
  if (!modal || typeof modal.showModal !== 'function') return;
  let opener = null;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-project]');
    if (!trigger) return;
    const project = PROJECTS[trigger.dataset.project];
    if (!project) return;
    opener = trigger;
    content.innerHTML = renderProject(project);
    initAutoScroll(content);
    modal.showModal();
    document.body.classList.add('no-scroll');
    $('.modal__inner', modal).scrollTop = 0;
    $('.modal__close', modal).focus();
  });

  modal.addEventListener('click', (e) => {
    // Close on backdrop click or any [data-close] element.
    if (e.target === modal || e.target.closest('[data-close]')) modal.close();
  });

  modal.addEventListener('close', () => {
    document.body.classList.remove('no-scroll');
    if (opener) opener.focus({ preventScroll: true });
  });
}

/* ================================
   CAREER TABS (WAI-ARIA tabs pattern)
   ================================ */
function initTabs() {
  const tabs = $$('[role="tab"]');
  const activate = (tab, focus = true) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(tab, false));
    tab.addEventListener('keydown', (e) => {
      let next = null;
      if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') next = tabs[0];
      if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); activate(next); }
    });
  });
}

/* ================================
   FAQ ACCORDION
   ================================ */
function initAccordion() {
  $$('.accordion__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
      btn.closest('.accordion__item').classList.toggle('is-open', !open);
    });
  });
}

/* ================================
   CONTACT FORM
   ================================ */
function initForm() {
  const form = $('#contact-form');
  if (!form) return;
  const status = $('#form-status');
  const submitBtn = $('button[type="submit"]', form);
  const label = $('.form__btn-label', form);

  const rules = {
    name: (v) => (v.length < 2 ? 'Please enter your name.' : ''),
    email: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? 'Please enter a valid email address.' : ''),
    phone: (v) => (v && !/^[+\d][\d\s()-]{6,19}$/.test(v) ? 'Please enter a valid phone number or leave it empty.' : ''),
    subject: (v) => (v.length < 3 ? 'Please add a short subject.' : ''),
    message: (v) => (v.length < 20 ? 'Please write at least 20 characters about your project.' : ''),
  };

  const validateField = (input) => {
    const rule = rules[input.name];
    if (!rule) return true;
    const msg = rule(input.value.trim());
    const field = input.closest('.field');
    field.classList.toggle('has-error', Boolean(msg));
    input.setAttribute('aria-invalid', String(Boolean(msg)));
    $('.field__error', field).textContent = msg;
    return !msg;
  };

  Object.keys(rules).forEach((name) => {
    const input = form.elements[name];
    input.addEventListener('blur', () => { if (input.value) validateField(input); });
    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('has-error')) validateField(input);
    });
  });

  const setStatus = (msg, type) => {
    status.textContent = msg;
    status.className = `form__status ${type ? `is-${type}` : ''}`;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputs = Object.keys(rules).map((n) => form.elements[n]);
    const results = inputs.map(validateField);
    const firstInvalid = inputs[results.indexOf(false)];
    if (firstInvalid) {
      firstInvalid.focus();
      setStatus('Please fix the highlighted fields.', 'error');
      return;
    }
    if (form.elements._gotcha.value) return; // spam bot

    const data = Object.fromEntries(new FormData(form));

    // --- Option A: Formspree (only when configured) ---
    if (CONTACT_CONFIG.formspreeId) {
      submitBtn.disabled = true;
      label.textContent = 'Sending…';
      try {
        const res = await fetch(`https://formspree.io/f/${CONTACT_CONFIG.formspreeId}`, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        });
        if (!res.ok) throw new Error('Request failed');
        form.reset();
        setStatus('Thanks! Your message has been sent — I\'ll reply by email.', 'success');
      } catch {
        setStatus('Sorry, the message could not be sent. Please email or WhatsApp me directly.', 'error');
      } finally {
        submitBtn.disabled = false;
        label.textContent = 'Send Message';
      }
      return;
    }

    // --- Option B: mailto fallback (default, no backend) ---
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : '',
      '',
      data.message,
    ].filter((line, i) => line !== '' || i === 3).join('\n');
    const href = `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus('Your email app should open with the message ready to send. If nothing happens, email mohsinrajpout72@outlook.com directly.', 'success');
  });
}

/* ================================
   SCROLL TO TOP
   ================================ */
function initToTop() {
  const btn = $('#to-top');
  const onScroll = () => btn.classList.toggle('is-visible', window.scrollY > 700);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    $('.brand').focus({ preventScroll: true });
  });
}

/* ================================
   IMAGE FALLBACKS
   Project visuals loaded from a store's own CDN fall back to the local
   cover image (data-fallback) or are hidden (data-hide-on-error).
   ================================ */
function handleImageError(img) {
  if (img.dataset.fallback && !img.src.includes(img.dataset.fallback)) {
    img.src = img.dataset.fallback;
  } else if (img.hasAttribute('data-hide-on-error')) {
    (img.closest('a') || img).hidden = true;
    // Hide the whole gallery block if none of its images could load.
    const gallery = img.closest('.modal__gallery');
    if (gallery && ![...gallery.children].some((el) => !el.hidden)) {
      const media = gallery.closest('.media');
      if (media) {
        gallery.closest('.media__shots').hidden = true;
        media.classList.add('media--single');
      } else {
        gallery.closest('.modal__block').hidden = true;
      }
    }
  }
}

function initImageFallbacks() {
  document.addEventListener('error', (e) => {
    if (e.target instanceof HTMLImageElement) handleImageError(e.target);
  }, true);
  // Images that already failed before this script ran.
  $$('img[data-fallback], img[data-hide-on-error]').forEach((img) => {
    if (img.complete && img.naturalWidth === 0 && img.currentSrc) handleImageError(img);
  });
}

/* ================================
   FOOTER YEAR
   ================================ */
function initYear() {
  const el = $('#year');
  if (el) el.textContent = String(new Date().getFullYear());
}

/* ================================
   INIT
   ================================ */
initFeatures();
initNav();
initScrollSpy();
initTyped();
initCounters();
initReveal();
initFilters();
initModal();
initTabs();
initAccordion();
initForm();
initToTop();
initImageFallbacks();
initYear();
