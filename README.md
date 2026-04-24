# tt-marketing

Marketing site for **Sunbrd LLC** — lives at **sunbrd.com**.

Separate from the main app repo (`tt`, which powers gifts.sunbrd.com) so the marketing site can be deployed, iterated, and crawled independently of the authenticated product.

## Tech stack

- **Next.js 15** (App Router, React Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS** with the Sunbrd brand design system
- **MDX** for blog content (filesystem-based, no CMS)
- **Resend** for the waitlist form
- Deployed on **Vercel**

## Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Set up env vars
cp .env.example .env.local
# Fill in RESEND_API_KEY and RESEND_WAITLIST_AUDIENCE_ID
# (Site will run without them — waitlist form just won't persist)

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. Build + preview production
npm run build
npm start
```

## Project structure

```
tt-marketing/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout — nav, footer, fonts, metadata
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx            # About page
│   ├── blog/
│   │   ├── page.tsx              # Blog index
│   │   └── [slug]/page.tsx       # Individual posts — renders MDX
│   ├── api/
│   │   └── waitlist/route.ts     # POST /api/waitlist — adds email to Resend
│   ├── sitemap.ts                # Auto-generated /sitemap.xml
│   ├── robots.ts                 # Auto-generated /robots.txt
│   └── not-found.tsx             # 404 page
├── components/                   # Shared React components
│   ├── SunbrdLogo.tsx            # Brand lockup component (mark + wordmark)
│   └── WaitlistForm.tsx          # Client-side form with light/dark variants
├── content/
│   └── blog/                     # ← Blog posts live here as MDX files
│       ├── reminder-system.mdx
│       ├── in-defense-of-the-gift-card.mdx
│       └── the-15-day-rule.mdx
├── lib/
│   └── posts.ts                  # MDX loader + metadata utilities
├── styles/
│   └── globals.css               # Tailwind + brand prose + utilities
├── public/
│   ├── logo-mark.svg             # The sunbird — official brand mark
│   └── logo-app-icon.svg         # App icon variant
└── tailwind.config.ts            # Design tokens (palette, typography, spacing)
```

## Sunbrd Brand System

The site follows the official Sunbrd brand guidelines (v3.0). All tokens are locked in `tailwind.config.ts` and `styles/globals.css`.

### Palette

**Midnight Indigo** — the primary brand canvas. Used for hero sections, footer, and dark CTAs.
- `indigo-9` (#0D0A2E) — hero background (the "Midnight" point)
- `indigo-8` through `indigo-1` — scale for text, borders, and subtle backgrounds on dark
- `indigo-0` (#F2F0FD) — lightest tint

**Coral / Persimmon** — secondary, warmth, and CTAs.
- `logo-coral` (#ED704D) — primary coral, used in the wordmark's "gifts"
- `coral-5` (#FF5C35) — hover/emphasis
- `coral-4` (#FF7A5A) — mid

**Saffron / Gold** — accent, tagline color.
- `logo-saffron` (#ED9C43) — "Technically Thoughtful" tagline
- `gold-5` (#F0B429) — brighter gold
- `gold-4` (#F7CB58) — lighter

**Logo-specific locks** — do not use these colors anywhere except logo contexts:
- `logo-indigo` (#302D7B) — "sunbrd" in the wordmark, always
- `logo-coral` (#ED704D) — "gifts" in the wordmark, always

### Typography

- **font-display** — Avenir Next (with DM Sans fallback). Used for headlines and logo contexts.
- **font-sans** — DM Sans. Body copy, UI.
- **font-mono** — Space Mono. Eyebrow labels, code, technical accents.

If you don't have an Avenir Next license, the site falls back cleanly to DM Sans. Both are on-brand.

### Utility classes worth knowing

```tsx
// Buttons
<button className="btn-primary">    // Indigo bg, white text
<button className="btn-coral">      // Coral bg, white text (primary CTA)
<button className="btn-secondary">  // Transparent bg, indigo border

// Eyebrow labels (mono, tracked, uppercase)
<p className="eyebrow">01 · Foundation</p>         // Saffron
<p className="eyebrow-dim">On dark backgrounds</p> // Muted indigo

// Indigo atmosphere — the branded dark hero/CTA background
<section className="bg-indigo-atmosphere">

// Prose styling for MDX content
<div className="prose-sunbrd">{content}</div>
```

### Logo usage

Always use the `<SunbrdLogo />` component. **Never recreate the mark from scratch.**

```tsx
import SunbrdLogo from '@/components/SunbrdLogo';

// Mark alone
<SunbrdLogo size={40} />

// Mark + wordmark
<SunbrdLogo withWordmark size={32} />

// Full lockup with sub-brand
<SunbrdLogo withWordmark subBrand="gifts" withTagline size={48} />

// On dark backgrounds
<SunbrdLogo withWordmark variant="dark" size={32} />
```

### Brand rules (from the guidelines)

- Never apply gradients to the wordmark text
- Never place the logo on unapproved background colors
- Never retype the wordmark in a different font
- Never distort, skew, or stretch any element
- Never reduce opacity — use approved low-contrast variants
- Never swap wordmark colors — indigo is always "sunbrd", coral is always "gifts"

## Writing a new blog post

1. Create `content/blog/your-post-slug.mdx`
2. Add frontmatter:

```mdx
---
title: "Your Post Title"
dek: "Optional subtitle / tagline, shown under the headline."
description: "SEO description — shows up in Google results and social previews."
publishedAt: "2026-02-05"
author: "Phillip Brooks"
draft: false
---

Your content here, in standard Markdown + MDX.
```

3. The post automatically appears at `/blog/your-post-slug` and in the blog index.
4. `draft: true` hides the post in production but shows it in dev — use for in-progress drafts.

### Cross-linking between posts

Use standard Markdown: `[anchor text](/blog/other-slug)`. These internal links matter for SEO.

## Deployment

Auto-deploys from `main` branch via Vercel.

1. Push to `main` → Vercel builds and deploys
2. Set env vars in **Vercel project settings** → Environment Variables:
   - `RESEND_API_KEY`
   - `RESEND_WAITLIST_AUDIENCE_ID`
3. Point the apex domain `sunbrd.com` at the Vercel project

## DNS setup (one-time)

The apex domain `sunbrd.com` needs to point to this Vercel project. In your DNS provider:

- `sunbrd.com` → Vercel A record `76.76.21.21` (or use Vercel's nameservers)
- `www.sunbrd.com` → CNAME `cname.vercel-dns.com` (redirect to apex in Vercel settings)

`gifts.sunbrd.com` stays on the existing TT app deployment — **do not touch.**

## What's not here yet

These pages are intentionally not built in v1. Add when needed:

- `/privacy` — privacy policy (use Termly or draft manually — **required before Walmart affiliate application**)
- `/terms` — terms of service (ditto)
- `/pricing` — public pricing page (add when moving off invite-only)
- `/contact` — dedicated contact page (currently just `mailto:` links)
- Open Graph share image — create `public/og-image.png` at 1200×630 with the logo + tagline

## Code conventions

- Server components by default. Only add `'use client'` when you need interactivity (forms, hooks, browser APIs).
- Use absolute imports with `@/` prefix — configured in `tsconfig.json`.
- No CSS-in-JS — all styling through Tailwind utility classes + `globals.css`.
- Follow the brand system. If you're tempted to add a new color, check the guidelines first.

## Questions?

phillip@sunbrd.com or andrew@sunbrd.com.
# tt-marketing
