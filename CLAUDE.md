# CLAUDE.md — Manoj Palanki Portfolio Website

> This file is the single source of truth for any AI model or developer taking over this project. Read it fully before making any changes.

---

## 1. Project Overview

This is **Manoj Palanki's personal portfolio website** — a modern, single-page application built to showcase his work as a Web Developer & Digital Creator. It is designed to be recruiter-friendly, visually premium, and highly performant.

**Live deployment:** `https://manojpalanki.vercel.app/` (via Vercel)
**Local dev:** `http://localhost:3000`

---

## 2. Tech Stack

| Layer          | Technology                          | Version   |
|----------------|-------------------------------------|-----------|
| Framework      | Next.js (App Router)                | 16.1.6    |
| Language       | TypeScript                          | ^5        |
| Styling        | Tailwind CSS v4                     | ^4        |
| Animations     | Framer Motion                       | ^12.36.0  |
| Theme System   | next-themes                         | ^0.4.6    |
| Icons          | react-icons (fa, fa6, hi, hi2, si)  | ^5.6.0    |
| React          | React 19                            | 19.2.3    |
| Fonts          | Google Fonts: Inter + Poppins       | via next/font |
| Form Backend   | Formspree                           | `https://formspree.io/f/mnjgbddo` |

> **Tailwind v4 note:** This project uses Tailwind CSS v4, which uses `@import "tailwindcss"` and `@theme {}` blocks in CSS instead of a `tailwind.config.js`. Do NOT create a `tailwind.config.js` — all theme tokens are defined in `src/app/globals.css`.

---

## 3. Project Structure

```
c:\Modern Portfolio Website\
├── public/                         # Static assets
│   ├── hero-profile.png            # Profile photo for Hero section
│   ├── about-profile.png           # Profile photo for About section
│   ├── project-portfolio.png       # Screenshot: Data Analyst Portfolio project
│   ├── project-agency.png          # Screenshot: Business Agency (Syspree) project
│   └── project-restaurant.png      # Screenshot: Restaurant Landing Page project
├── src/
│   ├── app/
│   │   ├── globals.css             # Global styles + theme CSS variables + Tailwind config
│   │   ├── layout.tsx              # Root layout: fonts, metadata, ThemeProvider wrapper
│   │   └── page.tsx                # Main page: assembles all sections in order
│   └── components/
│       ├── Navbar.tsx              # Floating pill navbar with theme toggle (desktop + mobile)
│       ├── Footer.tsx              # Footer with social links and copyright
│       ├── ThemeProvider.tsx       # Thin wrapper around next-themes ThemeProvider
│       ├── ui/
│       │   └── Button.tsx          # Reusable Button component (primary / secondary variants)
│       └── sections/
│           ├── Hero.tsx            # Hero section with animated profile photo + glow rings
│           ├── About.tsx           # About section with photo, bio, and stats
│           ├── Skills.tsx          # Skills grid with tech icons (8 skills)
│           ├── Projects.tsx        # Featured projects cards (3 projects)
│           ├── Testimonials.tsx    # Client testimonials (3 cards)
│           └── Contact.tsx         # Contact form (Formspree) + social links
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## 4. Theme System

The site supports **light and dark modes** using `next-themes`. The default theme is **dark**.

### How it works

- `ThemeProvider` wraps the entire app in `layout.tsx`, using `attribute="class"` — so dark mode appends the `dark` class to `<html>`.
- **All theme-aware styling is done via CSS custom properties (variables)** defined in `globals.css`.

### CSS Variables (in `globals.css`)

```css
/* Light (default via :root) */
--bg: #F8FAFC;
--card-bg: #FFFFFF;
--text-1: #0F172A;
--text-2: #475569;
--border: rgba(15, 23, 42, 0.1);
--nav-bg: rgba(248, 250, 252, 0.85);

/* Dark (via .dark class on <html>) */
--bg: #0F172A;
--card-bg: #111827;
--text-1: #F8FAFC;
--text-2: #94A3B8;
--border: rgba(148, 163, 184, 0.15);
--nav-bg: rgba(15, 23, 42, 0.85);
```

### Theme-aware utility classes (use these, not arbitrary bg/text colors)

| Class             | Purpose                         |
|-------------------|---------------------------------|
| `bg-dynamic`      | Page/section background         |
| `bg-card-dynamic` | Card & elevated surface bg      |
| `text-dyn-1`      | Primary text color              |
| `text-dyn-2`      | Secondary / muted text color    |
| `border-dynamic`  | Border color                    |
| `nav-bg`          | Navbar backdrop background      |

### Brand colors (Tailwind v4 `@theme` tokens)

| Token             | Value     |
|-------------------|-----------|
| `text-primary`    | `#2563EB` (blue)  |
| `text-secondary`  | `#7C3AED` (violet)|
| `text-hover`      | `#38BDF8` (sky)   |

---

## 5. Page Sections — Content Reference

All sections are in `src/components/sections/`. The page renders them in this order:

### Hero (`Hero.tsx`)
- Section ID: `#home`
- Headline: "Hi, I'm Manoj / Web Developer & Digital Creator"
- CTA buttons: "View Projects" → `#projects`, "Contact Me" → `#contact`
- Profile photo: `/hero-profile.png` (circular, with animated glow rings)

### About (`About.tsx`)
- Section ID: `#about`
- Profile photo: `/about-profile.png` (rounded rectangle, object-top crop)
- Stats: 10+ Projects, 5+ Clients, 3+ Years Learning
- Floating badge animates up/down continuously

### Skills (`Skills.tsx`)
- Section ID: `#skills`
- 8 skills displayed in a 2×4 → 4×2 grid
- Current skills: HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Git, Figma / UI Design

### Projects (`Projects.tsx`)
- Section ID: `#projects`
- **3 projects** — data is defined as an array at the top of the file:
  1. **Data Analyst Portfolio** — Next.js, Tailwind CSS, TypeScript → `https://manojpalanki.vercel.app/`
  2. **Business Agency Website** — WordPress, Digital Marketing, SEO → `https://syspree.com/`
  3. **Restaurant Landing Page** — HTML, CSS, JavaScript → `https://manojpalanki.vercel.app/`
- Images are stored in `/public/`. Each project card has a hover zoom + primary overlay effect.

### Testimonials (`Testimonials.tsx`)
- Section ID: `#testimonials`
- 3 testimonials: Ravi Kumar (Startup Founder), Sarah Jenkins (Product Manager), Alex Dev (Senior Engineer)
- All show 5-star ratings

### Contact (`Contact.tsx`)
- Section ID: `#contact`
- Form uses **Formspree**: `action="https://formspree.io/f/mnjgbddo"` (POST)
- Fields: Name, Email, Message
- Social links: LinkedIn, GitHub, X (Twitter), Instagram

---

## 6. Social / Personal Links

| Platform  | URL |
|-----------|-----|
| LinkedIn  | `https://www.linkedin.com/in/manoj-palanki/` |
| GitHub    | `https://github.com/ManojPalanki` |
| X/Twitter | `https://x.com/manojpalanki9` |
| Instagram | `https://www.instagram.com/manojpalanki/?utm_source=ig_web_button_share_sheet` |

These appear in both the **Contact section** and the **Footer**.

---

## 7. Navbar Details (`Navbar.tsx`)

- **Desktop:** Floating frosted-glass pill, fixed top-5, centered
- **Mobile:** Top-bar with logo pill (left), theme toggle + hamburger (right). Hamburger opens an animated dropdown (`AnimatePresence`)
- Theme toggle button shows sun/moon icon, uses `useTheme()` from `next-themes`
- **Important:** Theme toggle is wrapped in `if (mounted)` guard to prevent hydration mismatch. Never remove this guard.
- Logo text: "MP." in `text-primary` with `font-poppins`

---

## 8. Animation Patterns

All animations use **Framer Motion**. Common patterns used throughout:

- **Entrance on scroll:** `initial={{ opacity: 0, y: 30 }}` + `whileInView={{ opacity: 1, y: 0 }}` + `viewport={{ once: true }}`
- **Hero entrance (immediate):** `initial={{ opacity: 0, x: -50 }}` + `animate={{ opacity: 1, x: 0 }}`
- **Infinite rotation (glow rings):** `animate={{ rotate: 360 }}` + `transition={{ repeat: Infinity, duration: 25, ease: "linear" }}`
- **Hover lift:** `whileHover={{ y: -5, scale: 1.02 }}`
- **Staggered children:** `containerVariants` with `staggerChildren: 0.1` (used in Skills)
- **Mobile menu animation:** `AnimatePresence` + scale + opacity

---

## 9. Common Commands

```bash
# Start development server
npm run dev

# Build for production (check for errors)
npm run build

# Start production build locally
npm start

# Lint
npm run lint
```

---

## 10. Adding / Changing Content — Guidelines

### Adding a new project
Edit the `projects` array in `src/components/sections/Projects.tsx`:
```ts
{
  title: "Project Name",
  description: "Description of the project.",
  image: "/project-yourname.png",   // add image to /public/
  tags: ["Tag1", "Tag2"],
  demoLink: "https://your-url.com",
}
```

### Adding a new skill
Edit the `skills` array in `src/components/sections/Skills.tsx`. Import icons from `react-icons`.

### Changing profile photos
Replace files in `/public/`:
- `hero-profile.png` → circular photo in Hero section (use a square crop ideally)
- `about-profile.png` → rectangular photo in About section (`object-top` crop)

### Updating social links
They appear in **2 places** — update both:
1. `src/components/sections/Contact.tsx` → `socials` array
2. `src/components/Footer.tsx` → `socials` array

### Changing brand colors
Edit `src/app/globals.css` under `@theme {}`:
```css
@theme {
  --color-primary: #2563EB;   /* buttons, links, accents */
  --color-secondary: #7C3AED; /* gradient endpoints */
  --color-hover: #38BDF8;     /* hover states */
}
```

---

## 11. Important Do's and Don'ts

**Do:**
- Use `bg-dynamic`, `bg-card-dynamic`, `text-dyn-1`, `text-dyn-2`, `border-dynamic` for all theme-aware elements — NOT hardcoded colors.
- Use `font-poppins` (`Poppins`) for headings and `font-inter` (`Inter`, default body font) for body text.
- Wrap any code that accesses `theme` from `useTheme()` in a `mounted` guard.
- Keep all images in `/public/` and reference them with a leading slash (e.g., `/hero-profile.png`).
- Use `"use client"` at the top of any component using React hooks or Framer Motion.

**Don't:**
- Do NOT create a `tailwind.config.js`. All Tailwind configuration lives in `globals.css` using `@theme {}`.
- Do NOT use inline `style` props for colors — always use the utility classes or CSS variables.
- Do NOT import `ThemeProvider` from `next-themes` directly in page-level files; use the local `@/components/ThemeProvider` wrapper.
- Do NOT add new pages/routes — this is intentionally a Single Page Application (SPA); navigation is anchor-link scroll-based.

---

## 12. Known Nuances / Gotchas

1. **Tailwind v4 syntax:** No `tailwind.config.js`. Extend the theme in `globals.css` with `@theme {}`.
2. **Hydration mismatch:** The `mounted` state in `Navbar.tsx` is critical. Always gate any client-only (theme-dependent) rendering behind it.
3. **`suppressHydrationWarning`** is set on both `<html>` and `<body>` in `layout.tsx` — required by `next-themes` to avoid class-toggling hydration warnings.
4. **`next/image`** is used everywhere for profile and project photos. Always use `fill` prop with a positioned parent for ratio-controlled containers.
5. **Formspree endpoint** for the contact form: `https://formspree.io/f/mnjgbddo` — this is tied to Manoj's Formspree account.
6. **`temp-app/` and `temp-app2/`** folders exist at the project root — these are old scaffolding remnants. Do not touch them.

---

## 13. Version History

### Version 1 — Initial Build
- Next.js App Router project scaffolded with Tailwind CSS v4 + Framer Motion
- All 7 sections built: Hero, About, Skills, Projects, Testimonials, Contact, Footer
- Dark/light mode via `next-themes` (default: dark)
- Profile photos updated: `hero-profile.png`, `about-profile.png`

---

### Version 2 — Design Polish & Refinements (March 2026)

#### `globals.css`
- Added `--glow-primary` / `--glow-secondary` CSS variables for consistent glow effects in both light and dark themes
- Added `.section-label` utility — uppercase eyebrow label with a left gradient accent line (used on all section headings)
- Added `.card-hover` — CSS class for card lift animation + primary glow shadow on hover (replaces inline Tailwind hover classes)
- Added `.btn-glow` — box-shadow glow on hover for primary buttons
- Added `.gradient-text` — blue → purple → sky gradient text (used in Hero headline)
- Added custom webkit scrollbar styling (6px, primary color thumb)
- Added `::selection` color override

#### `layout.tsx`
- **Title changed:** `"Manoj | Web Developer & Digital Creator"` → `"Manoj Palanki | Frontend Developer"`
- **Favicon added:** `icons: { icon: "/favicon-mp.svg" }` — MP logo in browser tab

#### `public/favicon-mp.svg` *(new file)*
- Blue-to-purple gradient rounded square with bold "MP" text in white
- Referenced via `metadata.icons` in `layout.tsx`

#### `Navbar.tsx`
- Added `IntersectionObserver`-based **active section tracking** — watches all 7 section IDs
- Active nav link turns `text-primary`; animated dot underline uses Framer Motion `layoutId="nav-dot"`
- Improved `hover:opacity-80` on the MP. logo

#### `Hero.tsx`
- **Headline redesigned** to three-line structure:
  - Line 1: `Hi, I'm Manoj`
  - Line 2: `Frontend Developer` (gradient-text)
  - Line 3: `Building Modern & High-Performance Websites` (muted, smaller `text-2xl–4xl`)
- **Section label** added: `AVAILABLE FOR WORK` (using `.section-label`)
- **Staggered entrance animation** via `containerVariants` + `itemVariants` (Framer Motion `Variants` type)
- **Subheadline updated:** "I build modern, responsive websites that help students and professionals showcase their skills and stand out online."
- **Trust line added** below CTA buttons: `10+ Projects Built · 3+ Years Learning` (inline stat row)
- Floating badge changed to: `"Open to" / "New Opportunities"`

#### `About.tsx`
- Section label: `About Me` eyebrow + heading changed to `"Crafting Digital Experiences"`
- Added third paragraph: "My focus is on performance, clean UI design, and user-friendly experiences."
- Stat cards (`10+`, `5+`, `3+`) now use `bg-card-dynamic` with `border + shadow` hover highlight instead of plain dividers

#### `Skills.tsx`
- Reorganised 8 skills into **3 named categories** with horizontal dividers:
  - `Frontend` — HTML, CSS, JavaScript, React
  - `Frameworks` — Next.js, Tailwind CSS
  - `Tools` — Git, Figma / UI Design
- Each card has a per-skill coloured glow shadow on hover (`shadow-orange-500/20` etc.)
- Section label: `What I Use`, heading: `My Tech Stack`

#### `Projects.tsx`
- **Titles updated** to more professional names:
  - `"Professional Data Analyst Portfolio"`
  - `"Digital Marketing Agency Website"`
  - `"Premium Restaurant Landing Page"`
- Descriptions rewritten to clearly explain the purpose of each project
- `card-hover` CSS class applied for consistent lift + glow
- Gradient image overlay (`from-black/60`) on hover replaces flat primary tint
- Section label: `My Work`

#### `Testimonials.tsx`
- Cards use `flex flex-col` + `flex-grow` on the quote for **consistent card height**
- Added **gradient avatar circles** (initials) per client instead of no avatar:
  - Ravi Kumar → blue-indigo gradient
  - Sarah Jenkins → violet-purple gradient
  - Alex Dev → cyan-teal gradient
- Updated Ravi Kumar quote to match spec
- Section label: `Testimonials`, heading: `What Clients Say`
- `card-hover` applied

#### `Contact.tsx`
- Section label: `Get in Touch`
- Label styling improved: `font-semibold` + `tracking-wide`
- Input padding increased: `py-3.5` (was `py-3`)
- Send Message button has `btn-glow` class for hover glow effect
- Social section now shows label text: **"Or connect with me on"**
- **Form placeholders updated to Indian names:**
  - Name: `John Doe` → `Rahul Sharma`
  - Email: `john@example.com` → `rahul@example.com`

#### `Footer.tsx`
- Added **"MP." brand logo** above copyright text
- Social icons now use **circular button style** (`w-10 h-10` bordered rounded-full) with hover lift
- Footer no longer has `mt-20` (sections handle their own bottom padding)

