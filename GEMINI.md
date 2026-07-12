# Fig & Flour Restaurant Web Application - Developer Guidelines & System Instructions

Welcome to the **Fig & Flour** codebase. This project is a modern, responsive, visually polished single-page application (SPA) designed for an artisanal restaurant/cafe. It is optimized for visual appeal, clean structured components, and high performance.

This document serves as the foundational instruction manual and context for all future AI agent interactions and development in this repository.

---

## 1. Project Overview

**Fig & Flour** is built on modern web technologies focusing on performance-first, responsive, and visually aesthetic components.

### Core Stack
*   **React 19**: Leverages modern hook-based architecture, functional components, lazy-loading, and suspended rendering.
*   **Vite 8**: Serves as the ultra-fast build tool and development server, utilizing native ESM and Hot Module Replacement (HMR).
*   **Tailwind CSS v4**: High-performance compiler via `@tailwindcss/vite` plugin utilizing modern `@import "tailwindcss"` syntax for styles.
*   **React Leaflet & Leaflet**: Standard library for interactive, mobile-friendly map components. Used to render the restaurant's physical location map.

### Key Architectural Concepts
1.  **SEO-First Marketing Content**: Essential text, descriptive sections, and forms (Navbar, Hero, Menu, OurStory, Reservations, Visit, Footer) are imported statically and rendered immediately on initial paint. This guarantees complete search engine indexing (SEO), zero skeleton cascades, and absolute layout stability (zero CLS).
2.  **Targeted Lazy Loading**: Heavy, third-party libraries (specifically `leaflet` and `react-leaflet`) and interactive map features (`ContactMap`) are split into their own separate chunks via `React.lazy()` and rendered only when the parent section scrolled into view.
3.  **Viewport-Aware Mounting (`src/ui/VisibilityLoader.jsx`)**: Defer chunk fetching and rendering of off-screen modules like `ContactMap` until they enter within `100px` of the viewport using the `IntersectionObserver`-based `VisibilityLoader`. A precise pulsing skeleton matches the map's exact dimensions to eliminate layout shifts completely.
4.  **Aesthetic Visual Language**: Design theme utilizes a warm, earthy, and organic palette (`#FBF2E4`, `#F3E6D2`, `#C1613B`, `#3A2A1E`, `#6B7A4F`) with sophisticated serif typography based on the "Fraunces" font family loaded from Google Fonts.

---

## 2. Directory Structure

```
/home/mohammed/Development/react-practice/
├── eslint.config.js            # ESLint flat configuration (v10)
├── index.html                  # HTML entry page, smooth scroll and font imports
├── package.json                # Project script registry & dependency tracking
├── vite.config.js              # Vite bundler, React, and Tailwind v4 plugin config
└── src/
    ├── App.css                 # Global custom styles and overrides
    ├── App.jsx                 # Main application structure rendering standard static sections
    ├── index.css               # Imports tailwindcss directives
    ├── main.jsx                # Application root mount file, mounts leaflet styles
    ├── assets/                 # Optimized brand and menu images (png, jpg, svg)
    ├── components/             # Page sectional modules (Self-contained templates)
    │   ├── Footer.jsx          # Global brand footer with copyright
    │   ├── Hero.jsx            # Immersive splash panel with custom graphics
    │   ├── Map.jsx             # React-leaflet interactive map component centering Gaza
    │   ├── Menu.jsx            # Responsive category selectors and menu cards grid
    │   ├── Navbar.jsx          # Adaptive, mobile-responsive top navigation header
    │   ├── OurStory.jsx        # Contextual narrative layout
    │   ├── Reservations.jsx    # Table reservation system, date selectors, and confirmation toast
    │   └── Visit.jsx           # Location hours, contact details, and lazy-loaded map wrapper
    └── ui/                     # Atoms, reusable styled components
        ├── Input.jsx           # Form inputs with inline label support
        ├── MenuCard.jsx        # Menu cards featuring high-performance hover translate & scale animations
        ├── NavItem.jsx         # Section scrolling anchor tags
        └── VisibilityLoader.jsx# IntersectionObserver-based lazy viewport renderer
```

---

## 3. Building and Running

Use the following commands to install dependencies, run code locally, run lints, and compile files.

### Installing Dependencies
```bash
npm install
```

### Local Development Server
Launches the local Vite development environment with Hot Module Replacement:
```bash
npm run dev
```
By default, the server runs at `http://localhost:5173`.

### Code Quality & Static Linting
Checks code syntax, unused variables, and style guidelines using the flat ESLint 10 standards:
```bash
npm run lint
```

### Production Bundling
Creates optimized, minified chunk structures in the `dist/` directory ready for deployment:
```bash
npm run build
```

### Local Production Preview
Serves the built production assets in a local preview server:
```bash
npm run preview
```

---

## 4. Development Conventions

All subsequent additions, refactors, and styling adjustments must strictly adhere to the following code patterns:

### A. Styling & Theme
*   **Tailwind Utility Priority**: Write utility classes in elements. Use arbitrary colors (`text-[#C1613B]`, `bg-[#FBF2E4]`) consistent with the warm brand guidelines.
*   **Aesthetic Transitions**: When updating interactive items, always include smooth feedback transitions (`transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]`).
*   **Serif Fonts**: Rely on the "Fraunces" serif font loaded globally via `index.html`.

### B. Code Performance
*   **Keep Marketing Content Static**: Ensure standard textural components (Menu, OurStory, Reservations, Visit, Footer) remain statically imported to maintain optimal SEO indexability and avoid CLS.
*   **Lazy Load Heavy Libraries**: Any heavy libraries (e.g. charts, GIS maps, calendars) must be split into separate dynamic chunks using `React.lazy()` and rendered only when scrolled near.
*   **Viewport Deferrals with Skeletons**: Wrap heavy dynamic modules inside `<VisibilityLoader>` to defer rendering. Always supply a `fallback` wrapper that mirrors the exact vertical and horizontal dimensions of the loaded element to prevent layout shift.
*   **Optimized Assets**: Image assets must be highly compressed before deployment. Ensure images utilize native `loading="lazy"` attributes where applicable (e.g., in `MenuCard.jsx`).

### C. React 19 & JS Conventions
*   **React 19 Functional Code**: Strictly use functional components and modern React hooks (`useState`, `useEffect`, `useRef`).
*   **Component Separation**: Reusable atoms belong in `src/ui/`. Page/feature sections belong in `src/components/`. All component files must end in `.jsx`.
*   **Controlled Inputs**: For forms (like `Reservations.jsx`), keep fields controlled or bind simple standard events securely without unneeded global state managers.
*   **Map Configs**: When working with the Leaflet Map in `src/components/Map.jsx`, handle default marker override icons carefully so standard Leaflet assets load reliably.
