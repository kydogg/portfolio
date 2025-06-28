import { Project } from "@/types/project";

export const projectsData: Project[] = [
  // Web Projects
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js 15, TypeScript, and shadcn/ui components featuring responsive design, smooth animations, and a professional developer aesthetic.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    status: "In Development",
    category: "Web",
    github: "https://github.com/kydogg/portfolio",
    demo: "https://portfolio-demo.vercel.app",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    status: "Completed",
    category: "Web",
    github: "https://github.com/kydogg/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team workspaces, and advanced filtering capabilities.",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
    status: "Planning",
    category: "Web",
    github: "https://github.com/kydogg/task-manager",
    demo: "https://task-manager-demo.vercel.app",
  },

  // UI/UX Projects
  {
    id: 4,
    title: "Banking App Redesign",
    description: "Complete UX overhaul of a mobile banking application focusing on accessibility, user flow optimization, and modern design principles.",
    technologies: ["Figma", "Adobe XD", "Principle", "User Research"],
    status: "Completed",
    category: "UI/UX",
    demo: "https://figma.com/banking-redesign",
  },
  {
    id: 5,
    title: "SaaS Dashboard Design",
    description: "Design system and dashboard interface for a B2B SaaS platform with complex data visualization and user management features.",
    technologies: ["Figma", "Design Systems", "Prototyping", "User Testing"],
    status: "Completed",
    category: "UI/UX",
    demo: "https://figma.com/saas-dashboard",
  },
  {
    id: 6,
    title: "Food Delivery App",
    description: "Mobile-first design for a food delivery platform with focus on quick ordering, real-time tracking, and personalized recommendations.",
    technologies: ["Sketch", "InVision", "User Journey Mapping"],
    status: "In Development",
    category: "UI/UX",
    demo: "https://invision.com/food-app",
  },

  // iOS Projects
  {
    id: 7,
    title: "Fitness Tracker iOS App",
    description: "Native iOS application for fitness tracking with Apple Health integration, custom workout plans, and social features.",
    technologies: ["Swift", "SwiftUI", "Core Data", "HealthKit", "CloudKit"],
    status: "In Development",
    category: "iOS",
    github: "https://github.com/kydogg/fitness-tracker",
    demo: "https://testflight.apple.com/fitness-tracker",
  },
  {
    id: 8,
    title: "Personal Finance Manager",
    description: "Secure iOS app for personal finance management with spending analytics, budget tracking, and investment portfolio monitoring.",
    technologies: ["Swift", "UIKit", "Core Data", "CryptoKit", "Charts"],
    status: "Planning",
    category: "iOS",
    github: "https://github.com/kydogg/finance-manager",
    demo: "https://testflight.apple.com/finance-manager",
  },
  {
    id: 9,
    title: "Language Learning App",
    description: "Interactive language learning iOS app with speech recognition, gamification, and offline content support.",
    technologies: ["Swift", "SwiftUI", "Speech Framework", "AVFoundation"],
    status: "Completed",
    category: "iOS",
    github: "https://github.com/kydogg/language-app",
    demo: "https://apps.apple.com/language-learning",
  },
];

export function getProjectsByCategory(category: string): Project[] {
  const categoryMap: Record<string, Project["category"]> = {
    "web": "Web",
    "ui-ux": "UI/UX", 
    "ios": "iOS",
  };
  
  const mappedCategory = categoryMap[category];
  if (!mappedCategory) return projectsData;
  
  return projectsData.filter(project => project.category === mappedCategory);
}