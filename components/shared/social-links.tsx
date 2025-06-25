"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SocialLinksProps {
  variant?: "default" | "minimal";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/kydogg", // Update with your GitHub
    icon: Github,
    color: "#333",
  },
  {
    name: "LinkedIn", 
    href: "https://linkedin.com/in/kylebaker-dev", // Update with your LinkedIn
    icon: Linkedin,
    color: "#0077B5",
  },
  {
    name: "Email",
    href: "mailto:kyle@example.com", // Update with your email
    icon: Mail,
    color: "#EA4335",
  },
];

export function SocialLinks({ 
  variant = "default", 
  size = "md",
  className = "" 
}: SocialLinksProps) {
  const iconSize = {
    sm: "w-4 h-4",
    md: "w-5 h-5", 
    lg: "w-6 h-6"
  }[size];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 3.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (variant === "minimal") {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`flex items-center gap-4 ${className}`}
      >
        {socialLinks.map((link) => (
          <motion.div key={link.name} variants={itemVariants}>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`Visit ${link.name} profile`}
            >
              <link.icon className={iconSize} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex items-center gap-3 ${className}`}
    >
      {socialLinks.map((link) => (
        <motion.div key={link.name} variants={itemVariants}>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hover:scale-105 transition-transform"
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.name} profile`}
            >
              <link.icon className={iconSize} />
              <span className="sr-only">{link.name}</span>
            </Link>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}