# Yousef Ochiai - Portfolio

This repository contains the source code for Yousef Ochiai's professional portfolio, built with React, TypeScript, and Vite.

## Project Architecture

The project follows this directory structure to maintain separation of concerns and a scalable codebase:

```text
src/
├── assets/          # Static media (svgs, local fonts, icons)
├── components/      # UI building blocks
│   ├── ui/          # Primitives / design system (Button, Modal, Card)
│   ├── layout/      # Shell elements (Navbar, Footer, Container)
│   └── sections/    # Page-level sections (Hero, ProjectsGrid, ContactForm)
├── data/            # Static JSON / TS constants (projects.json, skills.ts)
├── hooks/           # Reusable custom hooks (useTheme, useScroll)
├── lib/ or utils/   # Helper functions (cn(), formatters, client init)
├── types/           # Global TypeScript definitions
└── pages/ or app/   # Routing layer (e.g. react-router pages)
```

## Development

### Setup
```bash
npm install
```

### Running Locally
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```
