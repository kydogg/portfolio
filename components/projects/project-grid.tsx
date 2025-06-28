"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface ProjectGridProps {
  children: ReactNode;
  category?: string;
}

export function ProjectGrid({ children, category }: ProjectGridProps) {
  const containerVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={category}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        layout
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}