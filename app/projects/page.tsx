"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ProjectTabs } from "@/components/projects/project-tabs";
import { StartProjectModal } from "@/components/projects/start-project-modal";
import { getProjectsByCategory } from "@/lib/data/projects";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("web");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work across web development, UI/UX design, and iOS applications
          </p>
        </div>

        {/* Tabbed Projects */}
        <ProjectTabs onTabChange={setActiveCategory}>
          <ProjectGrid category={activeCategory}>
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={`${activeCategory}-${project.id}`} 
                project={project} 
                index={index}
              />
            ))}
          </ProjectGrid>
        </ProjectTabs>

        {/* Call to Action */}
        <div className="text-center space-y-4 bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold">Let&rsquo;s Work Together</h2>
          <p className="text-muted-foreground">
            Interested in collaborating on a project? I&rsquo;m always open to discussing new opportunities and ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StartProjectModal>
              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Button size="lg">
                  Start a Project
                </Button>
              </motion.div>
            </StartProjectModal>
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="outline" asChild size="lg">
                <Link href="https://github.com/kydogg" target="_blank" rel="noopener noreferrer">
                  View GitHub
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}