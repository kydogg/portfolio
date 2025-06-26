"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [showAllTech, setShowAllTech] = useState(false);
  const maxVisibleTech = 4;
  const hasMoreTech = project.technologies.length > maxVisibleTech;
  const visibleTech = showAllTech ? project.technologies : project.technologies.slice(0, maxVisibleTech);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300 p-0">
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 overflow-hidden rounded-t-lg">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary/20 rounded" />
                </div>
                <p className="text-sm text-muted-foreground font-mono">
                  {project.category} Project
                </p>
              </div>
            </div>
          )}
          
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <Badge 
              variant="secondary"
              className={`backdrop-blur-sm border-0 font-medium ${
                project.status === "Completed" 
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300" 
                  : project.status === "In Development"
                  ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                  : "bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-300"
              }`}
            >
              {project.status}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-3 px-6 pt-6">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
            <Badge variant="outline" className="ml-2 shrink-0">
              {project.category}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex-1 space-y-4 px-6 pb-6">
          <p className="text-muted-foreground text-sm line-clamp-3">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            <AnimatePresence mode="popLayout">
              {visibleTech.map((tech) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              {hasMoreTech && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs cursor-pointer hover:bg-secondary/80 transition-colors"
                    onClick={() => setShowAllTech(!showAllTech)}
                  >
                    {showAllTech 
                      ? "Show less" 
                      : `+${project.technologies.length - maxVisibleTech}`
                    }
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            {project.github && (
              <Button variant="outline" size="sm" asChild className="flex-1">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <GitBranch className="w-4 h-4 mr-2" />
                  Code
                </Link>
              </Button>
            )}
            {project.demo && (
              <Button size="sm" asChild className="flex-1">
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}