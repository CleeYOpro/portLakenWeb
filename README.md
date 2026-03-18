# Port Laken — Community First

**Official website for the City of Port Laken.**  
A fictional municipal site built for the **TSA Webmaster** competition (2025–26), demonstrating a full-featured, accessible, and design-forward city portal — with a real-world geographic anchor in **Washington State**.

---

## Table of Contents

- [The Backstory: Why Port Laken?](#the-backstory-why-port-laken)
- [Port Laken: The City](#port-laken-the-city)
- [Maps & Geography: Why We Did It This Way](#maps--geography-why-we-did-it-this-way)
- [Technical Architecture](#technical-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment & Configuration](#environment--configuration)
- [References & Documentation](#references--documentation)
- [License](#license)

---

## The Backstory: Why Port Laken?

This project was created for **TSA (Technology Student Association) Webmaster** — an event where teams design, build, and document a website that meets real-world standards for usability, design, and technical execution. Rather than inventing a generic “fake city” floating in abstract space, we wanted a setting that felt **grounded and believable**.

**We chose to anchor our fictional city in the real world: the state of Washington.**

- **Port Laken does not exist.** It is a completely invented coastal city.
- We **replicated** its look, feel, and geography using **real Washington State communities** as inspiration. That way:
  - The site has a consistent, recognizable **Pacific Northwest** identity.
  - Imagery, copy, and maps can reference real coastlines, harbors, and towns without claiming they *are* Port Laken.
  - Judges and users can “place” the city mentally: *northern Washington, between water and mountains.*

So we use **Port Laken as a fake city because** we wanted to show how a fictional municipality could be presented with the same rigor and sense of place as a real one — by tying its identity to a real region (Washington) while keeping the city itself imaginary. That’s the backstory: **fiction grounded in a real-world place.**

---

## Port Laken: The City

### What Kind of City It Is

Port Laken is a **mid-sized coastal city** in **northern Washington**, stretching from the waters of the **San Juan Strait** to the **Olympic Mountains**. It’s the kind of place where:

- **Maritime heritage** and **working harbors** define the economy and culture.
- **History and innovation** grow side by side — from 1846 docks and timber to modern tech and sustainability.
- **Community first** is the tagline: parks, schools, transit, and civic engagement are central to the narrative.

### What It’s Known For

- **Scenic waterfront:** Harbor District, piers, sailing, and “misty mornings” that echo Pacific Northwest coastlines.
- **Parks and outdoors:** 19 parks and green spaces; Harborview Park, Riverside Park, nature programs, and access to the Olympics.
- **Family-friendly and livable:** Positioned as “#1 Family-Friendly City,” with strong schools, childcare, and work–life balance.
- **Civic pride:** City Hall, council, ordinances, boards & committees, and a “Community First” ethos (including post-2020 equity and resilience themes in the timeline).
- **Innovation and accessibility:** An “AI-powered” resource directory, online permitting, open data, and an in-world “accessibility-focused AI firm.”
- **Awards and identity:** “Most Innovative City,” “Best Winter Festival in a Small City,” “#1 Civic Building Redesign — Port Laken City Hall,” etc.

### By the Numbers (In-World)


| Metric                | Value    |
| --------------------- | -------- |
| Population            | 85,000   |
| Area                  | 45 sq mi |
| Parks & green spaces  | 19       |
| Resident satisfaction | 98%      |
| Local businesses      | 1,500+   |


### History (Timeline)

The About page tells Port Laken’s story in a scroll-driven timeline:

- **1846** — A Harbor Is Born (docks on Laken Bay, fishing/timber, name “Port Laken”).
- **1892** — Rail, trade, population past 1,000.
- **1934** — Weathering the Storm (roads, harbor, relief programs).
- **1958** — Postwar expansion (high school, suburbs, City Hall).
- **1976** — Environmental awakening (coastal preservation, shoreline access).
- **1998** — Downtown renewal (pier, international port, small business incentives).
- **2012** — A city goes digital (permitting, open data).
- **2020** — Community First (emergency coordination, mutual aid, public engagement).
- **2024** — Building Forward (affordable housing, port modernization).

So: **Port Laken is a fictional Washington-style coastal city** — maritime, green, civic-minded, and tech-friendly — built for TSA Webmaster and for portfolio/educational use.

---

## Maps & Geography: Why We Did It This Way

Port Laken is not a real place, so we couldn’t use a real “Port Laken” map. Here’s how we handled maps and why.

### Design Goals

- Give users a **familiar, interactive map** for “Maps & Transport” and for resource locations.
- Keep the experience **realistic** (real streets, real geography) so the site feels like a real city portal.
- Be **honest** that the city is fictional and that we’re using a real location for demonstration.

### Approach: Use a Real Washington City as the Stand-In

We use **Port Angeles, Washington** as the **demo geography** for the main map:

- **Port Angeles** sits on the Strait of Juan de Fuca, has a working harbor, and is backed by the Olympics — very close to the “vibe” of Port Laken.
- On the **Maps & Transport** page (`/maps-transport`), the map is a **full-screen Google Maps embed**.
- The default query is **“Port Angeles WA”**. A **carousel of featured resources** (Harborview Medical Center, Eastlaken Community Center, Port Laken Food Bank, etc.) uses **Port Angeles addresses** (e.g. 123 Main St, Port Angeles, WA 98362). Clicking a carousel item **updates the map query** to that address so users can “navigate” to that spot in the real world.
- This shows how a real city site would let residents click a resource and jump to it on the map — we just map our fictional places to Port Angeles for the demo.

### Map Implementation Details

1. **Maps & Transport page** (`app/maps-transport/page.tsx`)
  - **Google Maps embed** via iframe:  
   `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`
  - State: `mapQuery` (string), `showCarousel`, `isHovering`.
  - **Infinite-scroll carousel** of featured resources; click → `setMapQuery(address)` to pan the embed to that address.
  - Sections below: “How to Use This Map,” “Transportation Routes” (bus 120/240/480/960, intercity rail West/South Peninsula and East/North Sound), then a **disclaimer** and link to References.
2. **Resource Directory popups** (`app/resource-directory/_components/ResourcePopup.tsx`)
  - Each resource has an address and a “Location” block.
  - A **Google Static Maps API** image is used as a background (center `Port Orchard, WA`) with the resource’s address overlaid and a “Get Directions” button. (Static map is currently a single demo center; `resources.ts` stores per-resource `mapCoordinates` for future use.)
3. **Resource data** (`app/resource-directory/resources.ts`)
  - Every `Resource` has `address` and `mapCoordinates: { lat, lng }` (Pacific Northwest–style coordinates). The main map and carousel use **Port Angeles** addresses for the demo; the data model supports future per-resource map centering.

### Why Not Leaflet?

The repo includes **Leaflet** and **react-leaflet** in `package.json` (and `@types/leaflet`). The live UI uses **only Google Maps** (embed + static image). Leaflet was likely considered for custom tiles or offline-style maps; the current choice (Google embed + static) keeps implementation simple and avoids API-key–heavy custom tile setup while still delivering a clear “real place” demo.

### Disclaimer (User-Facing)

The Maps & Transport page and the References page state clearly:

- **Port Laken is a fictional city.**
- The map uses **Port Angeles, Washington** for demonstration.
- Featured places are mapped to the closest related addresses in Port Angeles to show how navigation and interactive maps would work in a real scenario.
- Users should verify real addresses independently.

So: **we did maps this way** to give a realistic, usable map experience anchored in a real Washington city, while being transparent that the city itself is fictional.

---

## Technical Architecture

### Overview


| Layer       | Choice                                  | Purpose                                               |
| ----------- | --------------------------------------- | ----------------------------------------------------- |
| Framework   | **Next.js 16** (App Router)             | SSR, API routes, file-based routing, production build |
| UI          | **React 18**                            | Components, hooks, client state                       |
| Language    | **TypeScript**                          | Type safety and maintainability                       |
| Styling     | **Tailwind CSS**                        | Utility-first CSS, design tokens (Port Laken palette) |
| Auth & data | **Firebase** (Auth, Firestore, Storage) | Users, profiles, alerts, newsletter, admin broadcast  |
| Email       | **Resend** (+ Nodemailer types)         | Contact, broadcasts, verification flows               |
| Maps        | **Google Maps** (embed + Static API)    | Maps & Transport page, resource popup location block  |
| Analytics   | **Vercel Analytics**                    | Optional usage analytics                              |
| Hosting     | **Netlify**                             | Build from repo, publish `.next`                      |


### Core Dependencies

- **Next.js** `^16.1.6`, **React** `^18.3.1` — App Router, RSC where used.
- **Firebase** `^12.10.0` — `lib/firebase.ts` initializes Auth, Firestore, Storage via env config.
- **Resend** `^6.9.3` — `lib/sendEmail.ts` sends transactional/broadcast email; **Nodemailer** present for types/flexibility.
- **Framer Motion** `^12.29.0`, **GSAP** `^3.12.5` — Animations and scroll-driven effects (e.g. About timeline, hero).
- **Lucide React**, **react-icons** — Icons; **Material Symbols Outlined** via `layout.tsx` link for extra icon set.
- **clsx**, **tailwind-merge** — Conditional and merged class names.
- **sharp** `^0.34.5` — Image optimization (Next.js); `next.config.js` sets `unoptimized: true` and `remotePatterns` for external image domains (Unsplash, Pixabay, Cloudinary, Wikimedia, etc.).
- **Leaflet** / **react-leaflet** / **@types/leaflet** — In package.json but **not used** in the app; maps are Google-only.

### Design System

- **Fonts:** Playfair Display (serif, display) and Nunito (sans) via `next/font` in `app/layout.tsx`; CSS variables `--font-playfair`, `--font-nunito-sans`.
- **Colors:** Tailwind theme extends with a **Port Laken** palette in `tailwind.config.ts`:
  - `port-navy`, `port-slate`, `port-steel`, `port-sky`, `port-ice`, `port-mist`, `port-frost`, `port-cream`
- **globals.css** adds CSS variables for primary/secondary and legacy fog-white / deep-navy for compatibility.

### Authentication & User Data

- **Firebase Auth**: Email/password and Google sign-in; used in `context/AuthContext.tsx`.
- **Firestore**: User profiles in `users` collection (e.g. email, `alerts.emergency`, `newsletterSubscribed`, preferences). Used for:
  - Dashboard and profile.
  - **Admin broadcast** API: targets users by `newsletterSubscribed` or `alerts.emergency` and sends email via Resend.

### API Routes


| Route                  | Method | Purpose                                                                                                                                                                               |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/api/send-email`      | POST   | Sends one email (to, subject, html) via `lib/sendEmail` (Resend).                                                                                                                     |
| `/api/spotlight-data`  | GET    | Returns spotlight entries for the home/calendar section (Harbor District, Port Activities, etc.).                                                                                     |
| `/api/admin/broadcast` | POST   | Admin-only (query param `secret` must match `ADMIN_SECRET`). Sends newsletter or alert to users in Firestore (filtered by `newsletterSubscribed` or `alerts.emergency`) using Resend. |


### Hosting & Build

- **Netlify**: `netlify.toml` runs `npm run build`, publishes `.next`, Node 18, with a catch-all redirect `/`* → `/index.html` for SPA-style fallback.
- **Vercel Analytics** is wired in `layout.tsx` for optional analytics.

### Image and External Content

- **next.config.js**: `images.remotePatterns` (and legacy `domains`) allow Unsplash, Pixabay, Cloudinary, Wikimedia, etc.; `unoptimized: true` for flexibility with external URLs.
- Many images (hero, timeline, references) use external URLs to convey Pacific Northwest / Washington-inspired visuals; References page explicitly credits inspiration (e.g. Port Angeles, Bellingham, Sequim, Anacortes).

---

## Project Structure

```
portLakenWeb/
├── app/                          # Next.js App Router
│   ├── layout.tsx                 # Root layout, fonts, metadata, AuthProvider, Analytics
│   ├── page.tsx                  # Home (hero, quick actions, events, spotlight)
│   ├── globals.css               # CSS variables, Tailwind, scrollbar, utilities
│   ├── about/                    # About page + TimelineSection, RollingNumber
│   ├── maps-transport/           # Full-screen Google Map + carousel + routes + disclaimer
│   ├── resource-directory/       # Resource list, search, popup (with static map), submit
│   │   ├── resources.ts          # RESOURCES array (categories, coords, contact)
│   │   └── _components/          # ResourcePopup, cards, search, AI overview
│   ├── references/               # TSA worklog, copyright, sources PDFs + disclaimer
│   ├── events/, news/, forms/, departments/, mayor-council/, ordinances/, boards-committees/
│   ├── environmental/, careers/, sustainability/
│   ├── sign-in/, create-account/, change-password/, dashboard/, profile/, alerts/
│   ├── api/
│   │   ├── send-email/route.ts
│   │   ├── spotlight-data/route.ts
│   │   └── admin/broadcast/route.ts
│   └── components/               # Navbar, Footer, RevealOnScroll, HeroSection, etc.
├── context/
│   └── AuthContext.tsx           # Firebase Auth + Firestore user profile
├── lib/
│   ├── firebase.ts               # Firebase app, auth, firestore, storage
│   └── sendEmail.ts              # Resend wrapper for send-email + broadcast
├── hooks/                        # Custom hooks if any
├── public/                       # Logos, images, worklog.pdf, copyright.pdf, sources.pdf
├── next.config.js
├── tailwind.config.ts
├── netlify.toml
└── package.json
```

---

## Getting Started

1. **Clone and install**
  ```bash
   git clone <repo-url>
   cd portLakenWeb
   npm install
  ```
2. **Environment**
  - Copy `.env.local.example` to `.env.local` (do not commit real keys).
  - Set Firebase and Resend (and optional `ADMIN_SECRET`) as in [Environment & Configuration](#environment--configuration).
3. **Run**
  ```bash
   npm run dev
  ```
   Open [http://localhost:3000](http://localhost:3000).
4. **Build**
  ```bash
   npm run build
   npm start
  ```

---

## Environment & Configuration

Configure these in `.env.local` (and in Netlify env for production):

- **Firebase**  
`NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`, `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`, `NEXT_PUBLIC_FIREBASE_APP_ID` (and optionally `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` for Analytics).
- **Resend**  
`RESEND_API_KEY` — used by `lib/sendEmail.ts` and the send-email / admin broadcast APIs.
- **Admin broadcast**  
`ADMIN_SECRET` — required by `/api/admin/broadcast` as a query parameter for authorization.

Google Maps embed and static map URLs used in the app do not require an API key in the current implementation (embed and static image use public URLs). If you add key-restricted Google APIs later, add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (or similar) and document it here.

**Note:** Replace any placeholder values in `.env.local.example` with your own Firebase project and Resend API key; do not commit real secrets.

### Small UX note

The “Life in Port Laken” page links “Public Transit” to `/map`; the actual route is `/maps-transport`. Updating that link to `/maps-transport` will fix navigation from that page.

---

## References & Documentation

This project is for **TSA Webmaster 2025–26 (Team 2014-2)**. The site’s **References** page (`/references`) links to:

- **Worklog** — TSA Webmaster work log (signed).
- **Copyright checklist** — 25–26 Webmaster copyright checklist (signed).
- **Sources used** — Port Laken images, research, and website links.

It also hosts the **Disclaimer & context**: Port Laken is a fictional city; the aesthetic is inspired by Washington State communities (Port Angeles, Bellingham, Bremerton, Aberdeen, Sequim, Anacortes) and Pacific Northwest coastal imagery. No real people, businesses, or locations are depicted.

---

## License

MIT.

---

*Port Laken — Community First. For over a century, connecting residents, honoring our heritage, and embracing innovation.*