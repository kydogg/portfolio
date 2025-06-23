# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack (fast bundling)
npm run dev

# Production build
npm run build

# Production server (after build)
npm run start

# ESLint checking
npm run lint
```

## Project Architecture

This is a Next.js 15 portfolio application using the App Router pattern with the following key architectural decisions:

### Tech Stack
- **Next.js 15.3.4** with App Router
- **React 19** with TypeScript 5 (strict mode)
- **Tailwind CSS 4** for styling
- **ESLint 9** with Next.js configuration
- **Turbopack** for fast development builds

### File Structure
- `app/` - Next.js App Router directory containing pages and layouts
- `app/layout.tsx` - Root layout with Geist font integration and global CSS
- `app/page.tsx` - Homepage (currently showing "Coming Soon")
- `app/globals.css` - Global styles with Tailwind imports and CSS custom properties
- `public/` - Static assets including SVG icons

### Styling System
- **Tailwind CSS 4** with utility-first approach
- **CSS custom properties** for theming in `globals.css`
- **Dark mode support** via `prefers-color-scheme`
- **Geist font family** (sans and mono) integrated via Next.js fonts

### TypeScript Configuration
- **Strict mode enabled** with modern ES2017 target
- **Path mapping** configured with `@/*` alias for root imports
- **Next.js plugin integration** for optimal development experience

### Current State
The project is in early development with a "Coming Soon" placeholder page. The foundation is set up for a modern portfolio website with all necessary build tools and configurations in place.