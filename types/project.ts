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