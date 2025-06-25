# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with Turbopack (fast bundling)
npm run dev

# TypeScript type checking
npm run type-check

# Production build
npm run build

# Production server (after build)
npm run start

# ESLint checking
npm run lint

# Add new shadcn/ui components
npx shadcn@latest add [component-name]
```

## Project Architecture

This is a Next.js 15 portfolio application using the App Router pattern with the following key architectural decisions:

### Tech Stack

- **Next.js 15.3.4** with App Router
- **React 19** with TypeScript 5 (strict mode)
- **Framer Motion** for animations
- **shadcn/ui** + **Radix UI** for component library
- **Tailwind CSS 4** for styling
- **JetBrains Mono** font for developer aesthetic
- **Lucide React** for icons
- **ESLint 9** with Next.js configuration
- **Turbopack** for fast development builds

### File Structure

- `app/` - Next.js App Router directory containing pages and layouts
- `app/layout.tsx` - Root layout with Geist and JetBrains Mono fonts
- `app/page.tsx` - Homepage with Hero component
- `app/about/page.tsx` - About page with skills and experience
- `app/projects/page.tsx` - Projects showcase page
- `app/contact/page.tsx` - Contact form and information
- `app/globals.css` - Global styles with Tailwind imports and CSS custom properties
- `components/home/hero.tsx` - Landing page hero section with animations
- `components/shared/typewriter.tsx` - Typewriter animation component
- `components/shared/social-links.tsx` - Social media links component
- `components/ui/` - shadcn/ui components (accordion, avatar, badge, button, card, hover-card, navigation-menu, separator, sheet, tabs)
- `lib/utils.ts` - Utility functions including `cn()` for class merging
- `public/images/hero-pattern.svg` - Abstract geometric background pattern
- `public/` - Static assets including SVG icons
- `components.json` - shadcn/ui configuration

### Styling System

- **shadcn/ui + Tailwind CSS 4** design system approach
- **Component variants** managed via `class-variance-authority`
- **CSS custom properties** for comprehensive theming with OKLCH color space
- **Dark mode support** via `.dark` class with full theme switching
- **Font system**: Geist (sans), JetBrains Mono (monospace for developer aesthetic)
- **Framer Motion animations** with staggered entrance effects
- **Utility functions**: `cn()` for conditional class merging with `clsx` and `tailwind-merge`

### TypeScript Configuration
- **Strict mode enabled** with modern ES2017 target
- **Path mapping** configured with `@/*` alias for root imports
- **Next.js plugin integration** for optimal development experience

### shadcn/ui Components

**Installed Components:**
- `accordion` - Collapsible content sections
- `avatar` - User profile images with fallbacks  
- `badge` - Status indicators and labels
- `button` - Interactive buttons with multiple variants
- `card` - Content containers with headers/footers
- `hover-card` - Hover-triggered popover content
- `navigation-menu` - Complex navigation with dropdowns
- `separator` - Visual dividers
- `sheet` - Slide-out panels/drawers
- `tabs` - Tabbed content interfaces

**Component Architecture:**
- Built on Radix UI primitives for accessibility
- Composition-based design with TypeScript support
- Systematic variant system using `class-variance-authority`
- Consistent styling with CSS variables and OKLCH color space

### Animation Features

- **Framer Motion typewriter effect** with rotating developer phrases
- **Staggered entrance animations** for hero section elements
- **Hover and scale effects** on interactive elements
- **Smooth page transitions** and component animations

### Current State

Professional portfolio website with complete navigation and core pages:

- **Hero section** with animated typewriter, social links, and geometric background
- **About page** with skills badges, experience highlights, and personal story
- **Projects page** with project cards and technology badges
- **Contact page** with contact form and information
- **Responsive navigation** with desktop and mobile layouts
- **Complete design system** using shadcn/ui components
- **Developer-focused aesthetic** with JetBrains Mono font