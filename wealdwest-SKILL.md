---
name: wealdwest-website
description: >
  Build, update, or extend the Weald West brand website. Use this skill whenever
  the user asks to build a new page, update an existing page, add a section, change
  content, or create any frontend for the Weald West brand. This skill encodes the
  complete Weald West design system — colors, typography, layout structure, logo
  embedding, and component library — so every output is pixel-consistent with the
  established brand. Trigger for any request mentioning "Weald West", "our website",
  "brand site", "add a page", "update the homepage", or any frontend/UI task
  related to this brand. Also trigger when user uploads the Weald West centaur logo
  or references the dark forest green + cream color palette.
---

# Weald West — Website Skill

This skill produces **production-grade, single-file HTML pages** for the Weald West
brand, consistent with the design system established in the reference homepage.

---

## 1. Brand Identity

| Property | Value |
|---|---|
| Brand name | **Weald West** |
| Established | **Est. 2023** |
| Brand personality | Heritage · Wilderness · Craftsmanship · Premium |
| Tagline direction | Poetic, nature-rooted, terse ("Where the ancient forest meets the wild west") |
| Logo | Centaur (half-human, half-horse) holding a pickaxe, inside an arched badge frame |
| Logo format | JPEG — embed as base64 `data:image/jpeg;base64,...` in `<img>` tags |
| Logo filter | `filter: brightness(0) invert(1) sepia(1) saturate(0.6) hue-rotate(5deg)` — applies warm cream tint on dark backgrounds |

### Logo Embedding Pattern

Always embed the logo as a base64 data URI so the HTML is fully self-contained:

```python
# Read logo file → base64
import base64
with open('logo.jpg', 'rb') as f:
    logo_b64 = base64.b64encode(f.read()).decode()
logo_uri = f"data:image/jpeg;base64,{logo_b64}"
```

Then inject via Python string replace (never use shell for this — avoids escaping issues):

```python
with open('index.html', 'r') as f:
    html = f.read()
html = html.replace('LOGO_PLACEHOLDER', logo_uri)
with open('index.html', 'w') as f:
    f.write(html)
```

---

## 2. Design System

### Color Palette

```css
:root {
  --green:        #1a3626;   /* Primary — nav, buttons, headings */
  --green-dark:   #0f2118;   /* Darkest — utility bar, footer, dark sections */
  --green-mid:    #24472f;   /* Hover states for green elements */
  --cream:        #d4c49a;   /* Primary accent — links, highlights, dots */
  --cream-light:  #f0e9d6;   /* Light backgrounds, card fills */
  --cream-dark:   #b8a87a;   /* Secondary accent — muted labels, stat labels */
  --white:        #faf8f2;   /* Page background (warm white, not pure) */
  --text:         #1a1a1a;   /* Body text */
  --muted:        #6b7363;   /* Secondary text, labels, descriptions */
}
```

**Rules:**
- NEVER use pure `#ffffff` or `#000000` — always use `--white` and `--text`
- NEVER use purple, blue, or cool-toned accents — the palette is forest green + warm cream only
- Dark sections always use `--green-dark` background with `--cream-light` text

### Typography

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@300;400;500&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
```

| Role | Font | Usage |
|---|---|---|
| Display / Hero headlines | `Playfair Display` | H1, H2, hero titles, section titles |
| Editorial / Body long-form | `Cormorant Garamond` | Paragraphs, about text, pull quotes |
| UI / Labels / Nav | `Lato` | Nav links, buttons, eyebrows, captions, utility text |

**Type scale:**
```css
/* Eyebrow labels */
font-family: 'Lato'; font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase;

/* Section titles */
font-family: 'Playfair Display'; font-size: clamp(1.7rem, 3vw, 2.5rem); font-weight: 600;

/* Hero titles */
font-family: 'Playfair Display'; font-size: clamp(2rem, 4.5vw, 3.8rem); font-weight: 600;

/* Body / editorial */
font-family: 'Cormorant Garamond'; font-size: 1.1rem; line-height: 1.85;

/* Nav / buttons */
font-family: 'Lato'; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700;
```

---

## 3. Page Architecture

Every Weald West page follows this exact shell:

```
┌─────────────────────────────────────────────────────┐
│  UTILITY BAR  (36px, green-dark)                    │
│  → Investors | Sustainability | Careers | News | Blogs │
├─────────────────────────────────────────────────────┤
│  STICKY NAV   (64px, green)                         │
│  → Logo + "WEALD WEST / Est. 2023" | Nav links | CTA │
├─────────────────────────────────────────────────────┤
│                                                     │
│  PAGE-SPECIFIC CONTENT                              │
│  (see Section 5 for component library)              │
│                                                     │
├─────────────────────────────────────────────────────┤
│  FOOTER  (green-dark)                               │
│  → Logo + brand name | Policy links | Social icons  │
│  → © Copyright 2025, Weald West                     │
└─────────────────────────────────────────────────────┘
```

---

## 4. Reusable Components (copy-paste ready)

### 4.1 Utility Bar
```html
<div class="utility-bar">
  <a href="#">Investors</a>
  <a href="#">Sustainability</a>
  <a href="#">Careers</a>
  <a href="#">In the News</a>
  <a href="#">Blogs</a>
</div>
```
```css
.utility-bar {
  background: var(--green-dark); height: 36px;
  display: flex; align-items: center; justify-content: flex-end;
  padding: 0 2.5rem; gap: 2rem;
}
.utility-bar a {
  color: var(--cream); font-family: 'Lato', sans-serif;
  font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;
  opacity: 0.75; transition: opacity 0.2s;
}
.utility-bar a:hover { opacity: 1; }
```

### 4.2 Navigation
```html
<nav id="mainNav">
  <a href="/" class="nav-logo">
    <img id="navLogo" src="LOGO_PLACEHOLDER" alt="Weald West" />
    <div class="nav-logo-text">WEALD WEST<small>Est. 2023</small></div>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="#">About Us</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Heritage</a></li>
    <li><a href="#">Sustainability</a></li>
    <li><a href="#" class="nav-cta">Contact Us</a></li>
  </ul>
  <div class="hamburger" id="hamburger" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </div>
</nav>
```
```css
nav {
  background: var(--green); height: 64px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 2.5rem; position: sticky; top: 0; z-index: 100;
  transition: box-shadow 0.3s;
}
nav.scrolled { box-shadow: 0 4px 28px rgba(0,0,0,0.4); }
.nav-logo { display: flex; align-items: center; gap: 0.8rem; }
.nav-logo img { height: 44px; width: auto; }
.nav-logo-text {
  font-family: 'Playfair Display', serif; font-size: 1.15rem;
  color: var(--cream-light); font-weight: 600; letter-spacing: 0.06em; line-height: 1.1;
}
.nav-logo-text small {
  display: block; font-size: 0.6rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--cream-dark);
  font-family: 'Lato', sans-serif; font-weight: 400;
}
.nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
.nav-links a {
  color: var(--cream-light); font-family: 'Lato', sans-serif;
  font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 700;
  position: relative; transition: color 0.2s;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: -4px; left: 0;
  width: 0; height: 1px; background: var(--cream); transition: width 0.3s;
}
.nav-links a:hover { color: var(--cream); }
.nav-links a:hover::after { width: 100%; }
.nav-cta { background: var(--cream) !important; color: var(--green-dark) !important; padding: 0.4rem 1.1rem; border-radius: 2px; }
.nav-cta::after { display: none !important; }
.hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
.hamburger span { width: 24px; height: 2px; background: var(--cream); }
```
```javascript
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 10);
});
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
```

### 4.3 Hero Slider
```html
<section class="hero">
  <div class="slide active" style="background-image:url('IMAGE_URL')">
    <div class="slide-overlay"></div>
    <div class="slide-content">
      <p class="slide-eyebrow">EYEBROW TEXT</p>
      <h2 class="slide-title">Headline<br>Second Line</h2>
      <a href="#" class="slide-cta">CTA text →</a>
    </div>
  </div>
  <!-- repeat .slide for each slide -->
  <div class="slider-dots" id="sliderDots">
    <div class="dot active" onclick="goToSlide(0)"></div>
  </div>
</section>
```
```css
.hero { position: relative; height: calc(100vh - 64px - 36px); min-height: 560px; overflow: hidden; }
.slide { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0; transition: opacity 1.4s ease; display: flex; align-items: flex-end; }
.slide.active { opacity: 1; }
.slide-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,25,15,0.8) 0%, rgba(10,25,15,0.25) 50%, rgba(10,25,15,0.08) 100%); }
.slide-content { position: relative; z-index: 2; padding: 0 5rem 4.5rem; max-width: 740px; }
.slide-eyebrow { font-family: 'Lato'; font-size: 0.72rem; letter-spacing: 0.28em; text-transform: uppercase; color: var(--cream); margin-bottom: 0.9rem; opacity: 0.85; }
.slide-title { font-family: 'Playfair Display'; font-size: clamp(2rem,4.5vw,3.8rem); color: var(--cream-light); line-height: 1.15; margin-bottom: 1.4rem; font-weight: 600; }
.slide-cta { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--cream); font-family: 'Lato'; font-size: 0.78rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 700; border-bottom: 1px solid rgba(212,196,154,0.5); padding-bottom: 2px; transition: gap 0.3s; }
.slide-cta:hover { gap: 1rem; }
.slider-dots { position: absolute; bottom: 1.8rem; right: 2.5rem; display: flex; gap: 0.5rem; z-index: 10; }
.dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(212,196,154,0.35); cursor: pointer; transition: background 0.3s, transform 0.3s; }
.dot.active { background: var(--cream); transform: scale(1.5); }
```
```javascript
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let current = 0, timer;
function goToSlide(n) {
  slides[current].classList.remove('active'); dots[current].classList.remove('active');
  current = n;
  slides[current].classList.add('active'); dots[current].classList.add('active');
  clearInterval(timer);
  timer = setInterval(() => goToSlide((current + 1) % slides.length), 5500);
}
timer = setInterval(() => goToSlide((current + 1) % slides.length), 5500);
```

### 4.4 Product / Category Cards Grid
```html
<section class="products-section">
  <p class="section-label">What we offer</p>
  <h2 class="section-title">Our Finest Collections</h2>
  <div class="products-grid">
    <a href="#" class="product-card">
      <div class="product-icon-wrap">🌿</div>
      <span class="product-name">Product Name</span>
      <span class="product-desc">Subtitle</span>
    </a>
  </div>
</section>
```
```css
.products-section { background: var(--white); padding: 5.5rem 2rem; text-align: center; }
.products-grid { display: flex; justify-content: center; gap: 4rem; flex-wrap: wrap; max-width: 960px; margin: 0 auto; }
.product-card { display: flex; flex-direction: column; align-items: center; gap: 1.2rem; cursor: pointer; transition: transform 0.35s cubic-bezier(.22,.68,0,1.2); width: 180px; }
.product-card:hover { transform: translateY(-12px); }
.product-icon-wrap { width: 148px; height: 148px; border-radius: 50%; background: var(--cream-light); display: flex; align-items: center; justify-content: center; font-size: 3rem; border: 2px solid rgba(212,196,154,0.35); transition: border-color 0.3s, box-shadow 0.3s; }
.product-card:hover .product-icon-wrap { border-color: var(--cream-dark); box-shadow: 0 14px 40px rgba(26,54,38,0.14); }
.product-name { font-family: 'Playfair Display'; font-size: 1.05rem; color: var(--green); font-weight: 600; }
.product-desc { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; }
```

### 4.5 Values Strip
```html
<div class="values-strip">
  <div class="value-item">
    <div class="value-icon">🌱</div>
    <div class="value-title">Value Name</div>
    <div class="value-text">Short descriptor</div>
  </div>
</div>
```
```css
.values-strip { background: var(--cream-light); padding: 3.5rem 2rem; display: flex; justify-content: center; flex-wrap: wrap; }
.value-item { text-align: center; padding: 0 3rem; border-right: 1px solid rgba(180,160,100,0.5); min-width: 190px; }
.value-item:last-child { border-right: none; }
.value-icon { font-size: 1.9rem; margin-bottom: 0.7rem; }
.value-title { font-family: 'Playfair Display'; font-size: 1rem; color: var(--green); font-weight: 600; margin-bottom: 0.3rem; }
.value-text { font-size: 0.72rem; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; }
```

### 4.6 Dark Global / Stats Section
```html
<section class="global-section">
  <div style="position:relative;z-index:1">
    <p class="section-label">Our Reach</p>
    <h2 class="section-title">Heading here</h2>
    <p class="global-subtitle">Italic subtext here</p>
    <div class="stats-row">
      <div class="stat"><span class="stat-number">20+</span><span class="stat-label">Countries</span></div>
    </div>
  </div>
</section>
```
```css
.global-section { background: var(--green-dark); padding: 5.5rem 2rem; text-align: center; position: relative; overflow: hidden; }
.global-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(36,71,47,0.55) 0%, transparent 70%); }
.global-section .section-label { color: var(--cream-dark); }
.global-section .section-title { color: var(--cream-light); margin-bottom: 1rem; }
.global-subtitle { font-family: 'Cormorant Garamond'; font-size: 1.15rem; color: var(--cream); opacity: 0.7; margin-bottom: 2.5rem; font-style: italic; }
.stats-row { display: flex; justify-content: center; gap: 5rem; flex-wrap: wrap; position: relative; z-index: 1; margin-top: 3rem; }
.stat-number { font-family: 'Playfair Display'; font-size: 3.2rem; color: var(--cream); font-weight: 700; display: block; line-height: 1; }
.stat-label { font-family: 'Lato'; font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--cream-dark); margin-top: 0.4rem; display: block; }
```

### 4.7 About / Split Section
```html
<section class="about-section">
  <div class="about-image" style="background-image:url('IMAGE_URL')"></div>
  <div class="about-text">
    <p class="section-label">Our Heritage</p>
    <h2 class="section-title">About Weald West</h2>
    <p>Body copy here...</p>
    <a href="#" class="btn-primary">Learn More →</a>
  </div>
</section>
```
```css
.about-section { display: flex; align-items: stretch; min-height: 520px; overflow: hidden; }
.about-image { flex: 0 0 45%; background-size: cover; background-position: center; position: relative; }
.about-image::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to right, transparent 65%, var(--white) 100%); }
.about-text { flex: 1; background: var(--white); padding: 5rem 4.5rem; display: flex; flex-direction: column; justify-content: center; }
.about-text p { font-family: 'Cormorant Garamond'; font-size: 1.1rem; line-height: 1.85; color: #3a3a3a; margin-bottom: 1.2rem; }
.btn-primary { display: inline-block; margin-top: 1rem; padding: 0.72rem 2rem; background: var(--green); color: var(--cream-light); font-family: 'Lato'; font-size: 0.76rem; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 700; border-radius: 2px; transition: background 0.2s, transform 0.2s; }
.btn-primary:hover { background: var(--green-mid); transform: translateY(-2px); }
```

### 4.8 Section Label + Title (shared helper classes)
```css
.section-label { font-family: 'Lato'; font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.6rem; }
.section-title { font-family: 'Playfair Display'; font-size: clamp(1.7rem,3vw,2.5rem); color: var(--green); margin-bottom: 3.5rem; font-weight: 600; }
```

### 4.9 Footer
```html
<footer>
  <div class="footer-top">
    <div class="footer-logo">
      <img id="footerLogo" src="LOGO_PLACEHOLDER" alt="Weald West" />
      <span class="footer-logo-text">WEALD WEST</span>
    </div>
    <div class="footer-links">
      <a href="#">Cookie Policy</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Sitemap</a>
    </div>
    <div class="footer-social">
      <!-- SVG icons for Instagram, LinkedIn -->
    </div>
  </div>
  <div class="footer-bottom">© Copyright 2025, Weald West. All Rights Reserved.</div>
</footer>
```
```css
footer { background: var(--green-dark); padding: 2.5rem 2.5rem 1.5rem; }
.footer-top { display: flex; align-items: center; justify-content: space-between; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(212,196,154,0.12); flex-wrap: wrap; gap: 1.5rem; }
.footer-logo { display: flex; align-items: center; gap: 0.8rem; }
.footer-logo img { height: 48px; }
.footer-logo-text { font-family: 'Playfair Display'; font-size: 1rem; color: var(--cream-light); font-weight: 600; }
.footer-links { display: flex; gap: 2rem; flex-wrap: wrap; }
.footer-links a { color: var(--cream); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.6; transition: opacity 0.2s; }
.footer-links a:hover { opacity: 1; }
.footer-bottom { padding-top: 1.2rem; text-align: center; font-size: 0.68rem; color: var(--cream-dark); opacity: 0.45; letter-spacing: 0.12em; }
```

---

## 5. Responsive Rules

```css
@media (max-width: 768px) {
  .utility-bar { display: none; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .nav-links.open {
    display: flex; flex-direction: column;
    position: absolute; top: 64px; left: 0; right: 0;
    background: var(--green-dark); padding: 1.5rem 2rem; gap: 1.2rem;
  }
  .slide-content { padding: 0 1.8rem 3rem; }
  .products-grid { gap: 2rem; }
  .about-section { flex-direction: column; }
  .about-image { flex: none; height: 280px; }
  .about-image::after { display: none; }
  .about-text { padding: 2.5rem 1.5rem; }
  .value-item { border-right: none; border-bottom: 1px solid rgba(212,196,154,0.4); padding: 1.2rem 2rem; width: 100%; }
  .value-item:last-child { border-bottom: none; }
  .stats-row { gap: 2.5rem; }
  .footer-top { flex-direction: column; align-items: flex-start; }
}
```

---

## 6. Deliverable Checklist

Before outputting any page, verify:

- [ ] Google Fonts `<link>` in `<head>`
- [ ] CSS variables declared in `:root`
- [ ] Utility bar present and correct
- [ ] Sticky nav with logo (base64 injected), brand name, Est. 2023, nav links, CTA
- [ ] Nav scrolled shadow via JS
- [ ] Hamburger mobile menu works (pure CSS toggle)
- [ ] Page content uses only brand colors (no blue, purple, grey-blue)
- [ ] Headings use `Playfair Display`, body uses `Cormorant Garamond`, UI uses `Lato`
- [ ] Footer present with logo (base64), brand name, links, copyright
- [ ] Mobile responsive
- [ ] Single self-contained `.html` file
- [ ] Saved to `/mnt/user-data/outputs/` and shared via `present_files`

---

## 7. Unsplash Image Keywords for Weald West

Use these Unsplash queries for placeholder imagery that matches the brand:

| Section | Query URL |
|---|---|
| Hero — Forest | `https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80` |
| Hero — Mountains | `https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80` |
| Hero — Fields | `https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80` |
| About section | `https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80` |

Generic Unsplash pattern: `https://images.unsplash.com/photo-{ID}?w=1600&q=80`

Good keyword searches: `forest wilderness`, `ancient woodland`, `wild landscape`, `handcrafted artisan`, `mountain nature`, `green meadow`.

---

## 8. Writing Tone Guide

All copy must match the Weald West brand voice:

| ✅ Do | ❌ Don't |
|---|---|
| Short, poetic lines ("Rooted in nature, forged by hand") | Corporate jargon ("leveraging synergies") |
| Nature metaphors (weald, roots, wild, forge, harvest) | Generic e-commerce language |
| Heritage references (ancient, est., centuries) | Trendy slang |
| Terse CTAs ("Discover →", "Our story →") | Wordy CTAs ("Click here to learn more about us") |
| Second-person, intimate ("your hands", "your table") | Third-person brand speak |

---

## 9. Quick-Start Template

When building a new page, start from this shell and fill in the `<!-- PAGE CONTENT -->` section using components from Section 4:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>PAGE TITLE — Weald West</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@300;400;500&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
<style>
  /* 1. Paste :root variables */
  /* 2. Paste reset: *, body, a, img */
  /* 3. Paste utility-bar CSS */
  /* 4. Paste nav CSS */
  /* 5. Paste page-specific component CSS */
  /* 6. Paste footer CSS */
  /* 7. Paste responsive CSS */
</style>
</head>
<body>

<!-- UTILITY BAR -->
<!-- MAIN NAV -->
<!-- PAGE CONTENT -->
<!-- FOOTER -->

<script>
  const LOGO = "LOGO_PLACEHOLDER"; // replace via Python inject
  document.getElementById('navLogo').src = LOGO;
  document.getElementById('footerLogo').src = LOGO;
  // + nav scroll + hamburger + any page JS
</script>
</body>
</html>
```
