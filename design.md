# Port Laken — Design Philosophy

## Overview

Port Laken's design language is built around a **coastal civic identity** — clean, trustworthy, and approachable. The aesthetic balances the warmth of a small waterfront city with the clarity expected of a government platform. Every decision leans into calm blues, soft whites, and generous whitespace to communicate transparency and accessibility.

---

## Typography

Two typefaces carry the entire system:

| Role | Font | Usage |
|---|---|---|
| Display / Headings | **Playfair Display** (serif) | Hero titles, section headers, footer nav links |
| Body / UI | **Nunito** (sans-serif) | Body copy, nav links, buttons, labels, form text |

The pairing is intentional — Playfair brings editorial gravitas and a sense of heritage, while Nunito keeps the UI friendly and legible at small sizes. Headings often mix upright and italic Playfair for visual rhythm (e.g. "Community *First*").

CSS variables:
```css
--font-playfair: "Playfair Display", serif;
--font-nunito: "Nunito", sans-serif;
```

Tailwind classes: `font-playfair`, `font-display`, `font-nunito`

---

## Color Palette

### Primary Palette — "Port" Scale

A full coastal blue ramp, from deep navy to near-white frost:

| Token | Hex | Usage |
|---|---|---|
| `port-navy` | `#1e3a5f` | Primary text, dark backgrounds, hero overlays |
| `port-slate` | `#2d4a6f` | Hover states on navy elements |
| `port-steel` | `#4a6d8c` | Mid-tone accents |
| `port-sky` | `#6b9bc3` | Highlights, icon fills |
| `port-ice` | `#a8c5db` | Scrollbar thumb, subtle borders |
| `port-mist` | `#d4e4ed` | Button borders, dividers |
| `port-frost` | `#eef4f8` | Card backgrounds |
| `port-cream` | `#f8fafb` | Page background |

### Legacy Variables (still in use)

| Variable | Hex | Notes |
|---|---|---|
| `--color-primary` | `#708aa3` | Used directly in footer bg, icon fills, `text-primary` |
| `--color-primary-shade` | `#244c5c` | Scrollbar hover, deeper accents |
| `--color-fog-white` | `#f7f9fb` | Scrollbar track |
| `--color-deep-navy` | `#32424f` | Navbar text, body-level dark text |

### Text Colors

| Context | Color |
|---|---|
| Default body text | `#1e3a5f` (port-navy) |
| Navbar links | `deep-navy` (`#32424f`) |
| Muted / secondary text | `text-gray-600`, `text-gray-700` |
| On dark / hero backgrounds | `text-white`, `text-white/90` |
| Accent / interactive | `text-primary` (`#708aa3`) |

### Background Colors

| Context | Color |
|---|---|
| Page default | `#f8fafb` (port-cream) |
| Sections alternating | `white` → `gray-50` gradients |
| Hero / CTA sections | `--color-primary` (`#708aa3`) |
| Footer | `#708aa3` |
| Navbar | `rgba(241, 245, 249, 0.75)` + `backdrop-blur` |

---

## Spacing & Layout

- Max content width: `max-w-7xl` (80rem)
- Section vertical padding: `py-16` to `py-24`
- Horizontal padding: `px-6` → `md:px-20`
- Rounded corners are generous: `rounded-2xl`, `rounded-3xl`, `rounded-[40px]` — softness is a deliberate choice

---

## Motion & Animation

Animations are subtle and purposeful — they guide attention, not distract:

- `fadeInUp` — standard reveal (0.8s, ease-out)
- `ScrollReveal` / `ScrollRevealStagger` — intersection-observer driven entrance animations
- `WeightedScroll` / `ParallaxLayer` — depth on hero images
- Card hover: `translateY(-8px)` + shadow deepening
- Button hover: `translateY(-2px)` + scale
- Hero slides: horizontal translate + opacity crossfade (700ms)

---

## Component Patterns

### Buttons
Two core styles via `InvertButton`:
- `light-to-dark` — starts white/outlined, fills with primary on hover
- `dark-to-light` — starts filled, inverts to white on hover
- Shape: always `rounded-full`

### Cards
- White background, `rounded-2xl`, subtle `shadow-sm`
- Hover: lift (`-translate-y-0.5`) + shadow increase
- Spotlight grid effect: siblings dim on sibling hover

### Navbar
- Frosted glass: `rgba(241, 245, 249, 0.75)` + `backdrop-blur-3xl`
- Always `rounded-b-3xl`
- Links use animated underline on hover (width transition from 0 → full)

### Footer
- Solid `#708aa3` background
- Giant Playfair nav links (up to `5.5rem`) — editorial, magazine-style
- Social links as pill buttons with icon + label

---

## Design Principles

1. **Coastal calm** — blues and whites evoke the waterfront setting without being literal
2. **Civic clarity** — information hierarchy is always clear; nothing competes with content
3. **Warmth through curves** — rounded corners everywhere signal approachability
4. **Motion with restraint** — animations enhance, never distract
5. **Accessible contrast** — dark navy on light backgrounds, white on primary-colored sections
