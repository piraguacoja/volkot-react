# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

Single-page portfolio site for Volkot Labs (Juan Calderon, cloud/DevOps consulting). Built with React 19 + Vite, no routing library, no state management library, no API calls — all content is static.

**Entry point:** `index.html` → `src/main.jsx` → `src/App.jsx`

`App.jsx` renders all sections in order: `Cursor → Nav → Hero → Services → Process → About → Contact → Footer`. Each section lives in `src/components/`.

Navigation is hash-based anchor links (`#services`, `#process`, `#about`, `#contact`) with smooth scroll.

**Custom hook:** `src/hooks/useScrollReveal.js` — uses `IntersectionObserver` to add a `.visible` class to elements with `.reveal`. Used in nearly every component for scroll-triggered fade-in animations.

**Styling:** Single large CSS file at `src/index.css` (~784 lines). No CSS preprocessor or CSS-in-JS. CSS variables define the color palette:
- `--primary`: `#00e5ff` (cyan — all accents/glows)
- Background layers: `#050d1a`, `#0a1628`, `#0f2040`
- Fonts: `Rajdhani` (primary), `Space Mono` (monospace), loaded from Google Fonts in `index.html`

**Visual effects** are all CSS-driven: grid background, scanlines overlay, glitch text on hero headline, floating badge animations, custom cursor (`Cursor.jsx` tracks `mousemove` with `requestAnimationFrame`).

The `components/` directory at the project root (not `src/components/`) is unused — ignore it.
