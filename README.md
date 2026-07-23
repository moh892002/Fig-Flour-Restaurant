<div align="center">
  <br/>
  <img src="public/favicon.svg" alt="Fig & Flour" width="80" height="80"/>
  <h1 align="center">Fig & Flour</h1>
  <p align="center"><strong>A warm, responsive restaurant website — built with React 19, Vite, and Tailwind CSS v4.</strong></p>
  <p align="center">
    <a href="#-overview">Overview</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Project Structure</a>
  </p>
  <br/>
</div>

---

## 🍽️ Overview

**Fig & Flour** is a single-page application for a fictional neighborhood cafe and bakery. It showcases a warm, earthy design aesthetic with a focus on performance, responsive layout, and smooth interactions.

The site features a menu browser, reservation form, interactive map, and a storytelling section — all packaged into a fast, SEO-friendly static site built with modern React patterns.

> **Live demo:** [Link coming soon](#)

---

## 📸 Screenshots

> 🖼️ Screenshots coming soon — run `npm run dev` to explore the site locally.

---

## ✨ Features

### 🎨 Design
- **Warm, earthy palette** — Cream, rust, olive, and deep brown tones (`#FBF2E4`, `#C1613B`, `#3A2A1E`, `#6B7A4F`)
- **Fraunces serif typography** — Loaded from Google Fonts for a refined, editorial feel
- **Smooth micro-interactions** — Hover transitions, scaling cards, and subtle motion throughout
- **Fully responsive** — Adapts seamlessly from mobile to widescreen

### ⚡ Performance
- **Static marketing content** — All text and images are rendered immediately for zero layout shift (CLS) and full SEO indexability
- **Lazy-loaded map** — The Leaflet map and its heavy dependencies are code-split via `React.lazy()` and only fetched when scrolled into view
- **IntersectionObserver-based rendering** — A custom `VisibilityLoader` defers off-screen chunk loading until within 100px of the viewport, with precise skeleton placeholders to eliminate layout jumps
- **Optimized assets** — Images use native `loading="lazy"` and compressed formats

### 🧩 Interactivity
- **Controlled reservation form** — Date, time, and guest count inputs with state management, native browser validation (`required`), and a conditional success alert with a dynamically generated confirmation message
- **Reusable UI components** — `Input`, `MenuCard`, `NavItem`, `Alert`, and `VisibilityLoader` atoms in `src/ui/`
- **Interactive map** — Powered by React Leaflet with custom markers and the restaurant's location

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) — Hooks, functional components, lazy loading |
| **Build Tool** | [Vite 8](https://vite.dev/) — Fast HMR, native ESM, optimized production builds |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS with `@tailwindcss/vite` plugin |
| **Linting** | [ESLint 10](https://eslint.org/) — Flat config with React-specific rules |
| **Map** | [React Leaflet](https://react-leaflet.js.org/) + [Leaflet](https://leafletjs.com/) — Interactive, mobile-friendly map |
| **Fonts** | [Fraunces](https://fonts.google.com/specimen/Fraunces) — Google Fonts serif typeface |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) >= 18
- npm (ships with Node.js)

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm run dev
```
Opens at [http://localhost:5173](http://localhost:5173) with hot module replacement.

### Build for production
```bash
npm run build
```
Outputs optimized, minified assets to the `dist/` directory.

### Preview the production build
```bash
npm run preview
```

### Lint the code
```bash
npm run lint
```

---

## 📁 Project Structure

```
src/
├── main.jsx                   # App entry point
├── App.jsx                    # Root layout — assembles all sections
├── index.css                  # Tailwind directives
├── App.css                    # Global custom styles
├── assets/images/             # Optimized brand & menu images
├── components/                # Page sections (self-contained)
│   ├── Hero.jsx               # Immersive splash panel with stats
│   ├── Menu.jsx               # Category filter + menu card grid
│   ├── OurStory.jsx           # Brand narrative with founder card
│   ├── Reservations.jsx       # Booking form with controlled inputs
│   ├── Visit.jsx              # Contact info + lazy-loaded map wrapper
│   ├── Map.jsx                # React Leaflet map
│   ├── Navbar.jsx             # Responsive navigation header
│   └── Footer.jsx             # Global footer with links
├── ui/                        # Reusable atomic components
│   ├── Input.jsx              # Labeled form input
│   ├── Alert.jsx              # Dismissible success/error banner
│   ├── MenuCard.jsx           # Menu item card with hover animation
│   ├── NavItem.jsx            # Anchor link for smooth scrolling
│   └── VisibilityLoader.jsx   # IntersectionObserver viewport detector
└── data/                      # Static content & configuration
    ├── hero.js
    ├── story.js
    ├── menuItems.js
    ├── contact.js
    └── footer.js
```

---

## 🧠 Architecture Notes

- **SEO-first rendering**: All marketing content (Hero, Menu, OurStory, etc.) is statically imported and rendered on first paint — no data fetching waterfalls, no skeleton cascades.
- **Targeted lazy loading**: Only the interactive map (Leaflet) is deferred via `React.lazy()`. The `VisibilityLoader` wrapper ensures the map chunk isn't requested until the user scrolls near it.
- **Controlled forms**: The reservation form uses `useState` for all fields. Submission triggers a conditional success `Alert` with a message dynamically built from the form values. Native `required` attributes provide browser-level validation before the submit handler fires.
- **Design system**: Colors, typography, and spacing follow a cohesive warm-brand theme applied through Tailwind utility classes with arbitrary values for brand-specific hues.

---

## 📄 License

This project is for demonstration and portfolio purposes.
