# GreenLoop Bio Resources: Marketing Website

A premium, conversion-focused corporate website for GreenLoop Bio Resources, a used
cooking oil (UCO) collection company serving hotels, cloud kitchens, food courts,
caterers, and institutional cafeterias across Indore, Madhya Pradesh.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

> **Fonts:** the site loads Archivo, Inter, and IBM Plex Mono via `next/font/google`.
> This requires outbound access to `fonts.googleapis.com` at build time. If you're
> building in a network-restricted environment (CI, sandbox, offline), that step will
> fail. It will build normally on a standard machine or hosting provider (Vercel,
> Netlify, etc.) with normal internet access.

## Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, SEO metadata, JSON-LD structured data
    page.tsx           Assembles all page sections
    globals.css         Design tokens (brand colors, fonts), base styles, animations
  components/
    Navbar.tsx           Sticky nav, mobile menu, persistent pickup CTA
    Hero.tsx             Hero section + entrance animation
    LoopGraphic.tsx     Signature circular "loop" diagram used in the hero
    WhoWeServe.tsx        Segment cards (hotels, cloud kitchens, etc.)
    HowItWorks.tsx        4-step process with an animated connecting loop line
    WhyGreenLoop.tsx       Trust / value proposition cards
    SustainabilityImpact.tsx  Dark impact section with animated stat counters
    ServiceArea.tsx        Stylized radial "service area" graphic (not a map embed)
    PickupForm.tsx         Pickup request form
    Footer.tsx             Footer: logo, nav, contact, copyright
    Logo.tsx                Wordmark + loop mark
    Reveal.tsx              Reusable scroll-reveal animation wrapper
    Counter.tsx              Reusable animated count-up component
  lib/
    content.ts             All site copy and data in one place (see below)
```

## Editing content

Nearly all copy, statistics, service segments, process steps, and service-area
phases live in **`src/lib/content.ts`**. Update values there rather than hunting
through components. For example, the sustainability impact numbers:

```ts
export const impactStats: ImpactStat[] = [
  { id: "liters", value: 10000, suffix: "+", label: "Litres Processed" },
  { id: "partners", value: 500, suffix: "+", label: "Business Partners" },
  ...
];
```

Contact details (phone, email, address, hours) live in the `site` object at the
top of the same file. They are placeholder values and should be replaced with
GreenLoop's real details before launch.

## Brand tokens

Color and font tokens are defined once in `src/app/globals.css` under `@theme`,
matching the supplied brand palette:

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#0E7A3E` | Primary actions, headings accents |
| `--color-secondary` | `#5DBB2F` | Eyebrows, secondary accents |
| `--color-gold` | `#F4C542` | Energy accent, stat highlights |
| `--color-ink` | `#111827` | Body text |
| `--color-night` | `#07150F` | Dark sections (impact, footer) |

## Connecting the pickup form

The pickup request form (`PickupForm.tsx`) currently simulates a submission on
the client only. There is no backend wired up yet. To receive real requests,
replace the `handleSubmit` function with a call to an API route, form service
(e.g. Formspree, Resend), or CRM webhook.

## Notes

- Fully responsive, mobile-first, keyboard-accessible (visible focus states,
  `prefers-reduced-motion` respected throughout).
- SEO: per-page metadata, Open Graph tags, and `LocalBusiness` JSON-LD structured
  data are set in `layout.tsx`.
- The "Service Area" graphic is an original, stylized radial diagram rather than
  a Google Maps embed, per the design brief.
