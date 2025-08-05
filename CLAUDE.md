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

- **Hero section** with theme-based backgrounds (white marble/orange gradient), animated typewriter, social links
- **About page** with skills badges, experience highlights, and personal story
- **Projects page** with project cards, technology badges, and category filtering
- **Contact page** with EmailJS-powered contact form
- **Responsive navigation** with desktop and mobile layouts
- **Complete design system** using shadcn/ui components
- **Dark/Light theme switching** with seamless transitions across entire app
- **Developer-focused aesthetic** with JetBrains Mono font

## Optimized File Structure

```
portfolio-app/
├── README.md
├── CLAUDE.md                     # This file - project documentation
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
├── components.json               # shadcn/ui configuration
├── .env.local                    # Environment variables (not in repo)
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with fonts & theme provider
│   ├── page.tsx                 # Homepage (Hero component)
│   ├── globals.css              # Global styles & theme variables
│   ├── favicon.ico
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── projects/
│   │   └── page.tsx            # Projects showcase
│   ├── contact/
│   │   └── page.tsx            # Contact form page
│   ├── experience/
│   │   └── page.tsx            # Experience page
│   └── api/
│       └── send-inquiry/
│           └── route.ts         # EmailJS API endpoint
│
├── components/                   # Reusable React components
│   ├── navigation.tsx           # Main navigation with theme toggle
│   ├── theme-provider.tsx       # Next-themes provider wrapper
│   ├── mode-toggle.tsx          # Light/Dark theme toggle dropdown
│   ├── home/
│   │   └── hero.tsx            # Hero section with theme-based backgrounds
│   ├── shared/
│   │   ├── typewriter.tsx      # Typewriter animation component
│   │   └── social-links.tsx    # Social media links
│   ├── projects/
│   │   ├── project-card.tsx    # Individual project display cards
│   │   ├── project-grid.tsx    # Grid layout wrapper
│   │   ├── project-tabs.tsx    # Category filtering tabs
│   │   ├── start-project-modal.tsx      # Contact/inquiry modal
│   │   └── project-inquiry-form.tsx     # Contact form within modal
│   ├── assets/
│   │   └── hellooo.png         # Logo/avatar image
│   └── ui/                      # shadcn/ui components
│       ├── accordion.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── tabs.tsx
│       └── textarea.tsx
│
├── lib/                          # Utility functions and data
│   ├── utils.ts                 # Utility functions (cn, etc.)
│   ├── emailjs.ts              # EmailJS integration
│   ├── constants.ts            # App constants
│   └── data/
│       └── projects.ts         # Project data (filler content)
│
├── types/                        # TypeScript type definitions
│   ├── index.ts                # General types
│   └── project.ts              # Project-specific types
│
└── public/                       # Static assets
    ├── images/
    │   ├── hero-light.jpg      # White marble texture (light theme)
    │   ├── hero-dark.jpg       # Orange texture (dark theme)
    │   └── hero-pattern.svg    # Geometric background pattern
    └── [other static files]
```

## EmailJS Setup Guide

The contact form uses EmailJS for email notifications. Follow these steps to configure:

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up
2. Verify your email address

### 2. Set Up Email Service
1. In EmailJS dashboard → **Email Services** → **Add New Service**
2. Choose your email provider (Gmail recommended)
3. Connect your email and **save the Service ID**

### 3. Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Use this template:

**Subject Line:**
```
New Project Inquiry from {{from_name}}
```

**Email Body:**
```
New Project Inquiry

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Project Details:
- Type: {{project_type}}
- Budget: {{budget_range}}
- Timeline: {{timeline}}
- Services Needed: {{services_needed}}

Project Description:
{{project_description}}

---
Reply directly to this email to respond to {{from_name}}.
```

3. **Save the Template ID**

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### 5. Add Environment Variables
Create `.env.local` in project root:
```bash
EMAILJS_SERVICE_ID=your_service_id_here
EMAILJS_TEMPLATE_ID=your_template_id_here
EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Deploy Configuration
For Vercel deployment:
1. Go to Vercel dashboard → your project → **Settings** → **Environment Variables**
2. Add all three variables (without `NEXT_PUBLIC_` prefix)
3. Redeploy your site

### Template Variables Reference
- `{{from_name}}` - Contact's name
- `{{from_email}}` - Contact's email  
- `{{company}}` - Company name
- `{{project_type}}` - Project type
- `{{budget_range}}` - Budget range
- `{{timeline}}` - Project timeline
- `{{services_needed}}` - Required services
- `{{project_description}}` - Full description

**Free Tier:** 200 emails/month (sufficient for portfolio contact form)