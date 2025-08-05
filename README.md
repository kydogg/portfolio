# Kyle Baker - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing web development projects, skills, and professional experience. Features a clean design system with dark/light theme switching and smooth animations.

## ✨ Features

- **🎨 Dual Themes**: Seamless light/dark mode switching with theme-specific backgrounds
- **📱 Fully Responsive**: Optimized for all devices with mobile-first design
- **⚡ Fast Performance**: Built with Next.js 15 and Turbopack for lightning-fast builds
- **🎭 Smooth Animations**: Framer Motion powered animations and transitions
- **📧 Contact Integration**: EmailJS powered contact form for project inquiries
- **🛠️ Modern Stack**: TypeScript, Tailwind CSS, shadcn/ui components
- **♿ Accessible**: Built with accessibility-first component library (Radix UI)

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS 4 with custom design system
- **Components**: shadcn/ui + Radix UI primitives
- **Animations**: Framer Motion
- **Fonts**: Geist Sans, JetBrains Mono
- **Icons**: Lucide React
- **Email**: EmailJS integration
- **Deployment**: Optimized for Vercel

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router pages
├── components/             # Reusable React components
│   ├── ui/                # shadcn/ui component library
│   ├── home/              # Homepage specific components
│   ├── projects/          # Project showcase components
│   └── shared/            # Shared utility components
├── lib/                   # Utilities and data
├── types/                 # TypeScript type definitions
└── public/                # Static assets and images
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-app.git
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional - for contact form)
   ```bash
   cp .env.example .env.local
   # Add your EmailJS credentials
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Type checking
npm run type-check

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Add shadcn/ui components
npx shadcn@latest add [component-name]
```

## 🎨 Design System

The portfolio uses a comprehensive design system with:

- **Colors**: OKLCH color space for better color accuracy
- **Typography**: Professional font pairing (Geist + JetBrains Mono)
- **Components**: Consistent, accessible UI components
- **Themes**: Automatic light/dark mode with custom backgrounds
- **Animations**: Subtle, performance-optimized animations

## 📧 Contact Form Setup

The contact form uses EmailJS for email notifications. See `CLAUDE.md` for detailed setup instructions including:

- EmailJS account setup
- Email template configuration
- Environment variables
- Deployment configuration

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Add environment variables** (if using contact form)
4. **Deploy**

The app is optimized for Vercel deployment with automatic builds and preview deployments.

### Other Platforms

The app can be deployed to any platform supporting Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Kyle Baker**
- Portfolio: [Your Live Site URL]
- Email: [Your Email]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

*Built with ❤️ using Next.js and modern web technologies*