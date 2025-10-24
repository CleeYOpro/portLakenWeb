# Port Laken Landing Page

A beautiful, modern landing page built with Next.js, React, TypeScript, and Tailwind CSS featuring glassmorphic design elements.

## Features

- ✨ Glassmorphic navigation bar with blur effects
- 🔍 Functional search bar
- 📱 Fully responsive design
- 🎨 Custom fonts (Playfair Display & Nunito Sans)
- 🎯 React Icons integration
- 🌊 Beautiful background imagery

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Fonts:** Google Fonts (Playfair Display, Nunito Sans)

## Project Structure

```
prjt/
├── app/
│   ├── layout.tsx      # Root layout with font configuration
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles and glassmorphic utilities
├── public/
│   └── dundee.png      # Background image
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Fonts
The project uses two Google Fonts:
- **Playfair Display** - For elegant headings
- **Nunito Sans** - For body text

### Glassmorphic Effects
Custom glassmorphic classes are defined in `globals.css`:
- `.glassmorphic` - Light blur effect
- `.glassmorphic-strong` - Stronger blur effect

## Features Implemented

- ✅ Glassmorphic navigation bar
- ✅ Working search functionality
- ✅ Responsive menu
- ✅ Social media links
- ✅ Additional sections (Services, Events)
- ✅ Beautiful hero section
- ✅ Footer with branding

## License

MIT
