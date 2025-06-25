"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: "In Development" | "Planning" | "Completed";
  category: "UI/UX" | "Web" | "iOS";
  github?: string;
  demo?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
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
              variant={
                project.status === "Completed" ? "default" : 
                project.status === "In Development" ? "secondary" : 
                "outline"
              }
              className="bg-background/90 backdrop-blur-sm"
            >
              {project.status}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
            <Badge variant="outline" className="ml-2 shrink-0">
              {project.category}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          <p className="text-muted-foreground text-sm line-clamp-3">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
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