"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiPython,
	SiGit,
	SiAmazon,
	SiDocker,
	SiPostgresql,
	SiMongodb,
	SiTailwindcss,
	SiVercel,
	SiLinux,
	SiExpress,
	SiSupabase,
	SiFirebase,
	SiGraphql,
} from "react-icons/si";
import { Calendar, MapPin, ExternalLink, GraduationCap, Award, Code } from "lucide-react";

const professionalExperience = [
	{
		id: 1,
		company: "Tech Startup Inc.",
		position: "Senior Full Stack Developer",
		location: "Remote",
		period: "2023 - Present",
		description: [
			"Led development of React-based SaaS platform serving 10k+ users",
			"Architected scalable Node.js microservices with 99.9% uptime",
			"Implemented CI/CD pipelines reducing deployment time by 70%",
			"Mentored junior developers and conducted code reviews"
		],
		technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"]
	},
	{
		id: 2,
		company: "Digital Agency Co.",
		position: "Frontend Developer",
		location: "San Francisco, CA",
		period: "2022 - 2023",
		description: [
			"Built responsive web applications for Fortune 500 clients",
			"Optimized application performance improving load times by 40%",
			"Collaborated with design team to implement pixel-perfect UIs",
			"Integrated third-party APIs and payment processing systems"
		],
		technologies: ["React", "JavaScript", "Tailwind CSS", "Figma", "Git", "Vercel"]
	},
	{
		id: 3,
		company: "Freelance Development",
		position: "Full Stack Developer",
		location: "Remote",
		period: "2021 - 2022",
		description: [
			"Delivered 15+ custom web applications for small businesses",
			"Specialized in e-commerce and booking systems",
			"Provided ongoing maintenance and feature development",
			"Built long-term client relationships with 95% retention rate"
		],
		technologies: ["Python", "Django", "JavaScript", "PostgreSQL", "Linux"]
	}
];

const notableProjects = [
	{
		id: 1,
		title: "E-commerce Analytics Dashboard",
		description: "Real-time analytics platform processing 1M+ transactions daily with advanced reporting and AI-powered insights.",
		impact: "Increased client revenue by 35% through data-driven decisions",
		technologies: ["React", "Node.js", "GraphQL", "MongoDB", "AWS"],
		link: "https://github.com/kydogg"
	},
	{
		id: 2,
		title: "Healthcare Management System",
		description: "HIPAA-compliant patient management system with appointment scheduling and telemedicine integration.",
		impact: "Streamlined operations for 50+ healthcare providers",
		technologies: ["Next.js", "TypeScript", "Supabase", "Stripe"],
		link: "https://github.com/kydogg"
	},
	{
		id: 3,
		title: "AI-Powered Content Platform",
		description: "Content generation and management platform using GPT integration with custom fine-tuning.",
		impact: "Reduced content creation time by 60% for marketing teams",
		technologies: ["Python", "FastAPI", "OpenAI API", "PostgreSQL"],
		link: "https://github.com/kydogg"
	}
];

const education = [
	{
		id: 1,
		type: "degree",
		title: "Bachelor of Science in Computer Science",
		institution: "University of Technology",
		period: "2018 - 2021",
		description: "Focus on software engineering, data structures, and algorithms. Graduated with honors."
	},
	{
		id: 2,
		type: "certification",
		title: "AWS Certified Solutions Architect",
		institution: "Amazon Web Services",
		period: "2023",
		description: "Professional-level certification for designing distributed systems on AWS."
	},
	{
		id: 3,
		type: "bootcamp",
		title: "Full Stack Web Development",
		institution: "Tech Bootcamp Academy",
		period: "2020",
		description: "Intensive 6-month program covering modern web development stack and best practices."
	}
];

const skillCategories = [
	{
		category: "Frontend",
		skills: [
			{ name: "React", icon: SiReact, level: "Expert" },
			{ name: "Next.js", icon: SiNextdotjs, level: "Expert" },
			{ name: "TypeScript", icon: SiTypescript, level: "Advanced" },
			{ name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
			{ name: "JavaScript", icon: SiJavascript, level: "Expert" }
		]
	},
	{
		category: "Backend",
		skills: [
			{ name: "Node.js", icon: SiNodedotjs, level: "Advanced" },
			{ name: "Python", icon: SiPython, level: "Advanced" },
			{ name: "Express", icon: SiExpress, level: "Advanced" },
			{ name: "GraphQL", icon: SiGraphql, level: "Intermediate" }
		]
	},
	{
		category: "Database",
		skills: [
			{ name: "PostgreSQL", icon: SiPostgresql, level: "Advanced" },
			{ name: "MongoDB", icon: SiMongodb, level: "Advanced" },
			{ name: "Supabase", icon: SiSupabase, level: "Intermediate" },
			{ name: "Firebase", icon: SiFirebase, level: "Intermediate" }
		]
	},
	{
		category: "DevOps & Tools",
		skills: [
			{ name: "AWS", icon: SiAmazon, level: "Advanced" },
			{ name: "Docker", icon: SiDocker, level: "Intermediate" },
			{ name: "Git", icon: SiGit, level: "Expert" },
			{ name: "Linux", icon: SiLinux, level: "Advanced" },
			{ name: "Vercel", icon: SiVercel, level: "Advanced" }
		]
	}
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5
		}
	}
};

export default function ExperiencePage() {
	return (
		<main className="container mx-auto max-w-6xl px-4 py-8">
			<motion.div 
				className="space-y-8"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				{/* Header */}
				<motion.div className="text-center space-y-4" variants={itemVariants}>
					<h1 className="text-4xl font-bold tracking-tight">Professional Experience</h1>
					<p className="mx-auto max-w-2xl text-xl text-muted-foreground">
						A comprehensive overview of my professional journey, projects, and technical expertise
					</p>
				</motion.div>

				{/* Experience Tabs */}
				<motion.div variants={itemVariants}>
					<Tabs defaultValue="professional" className="w-full">
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="professional">Professional</TabsTrigger>
							<TabsTrigger value="projects">Projects</TabsTrigger>
							<TabsTrigger value="education">Education</TabsTrigger>
							<TabsTrigger value="skills">Skills</TabsTrigger>
						</TabsList>

						{/* Professional Experience Tab */}
						<TabsContent value="professional" className="space-y-6">
							<div className="space-y-6">
								{professionalExperience.map((job, index) => (
									<motion.div
										key={job.id}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Card className="relative">
											{/* Timeline indicator */}
											<div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full" />
											
											<CardHeader className="pl-8">
												<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
													<div>
														<CardTitle className="text-xl">{job.position}</CardTitle>
														<p className="text-lg font-semibold text-primary">{job.company}</p>
													</div>
													<div className="flex items-center gap-4 text-muted-foreground">
														<div className="flex items-center gap-1">
															<MapPin className="w-4 h-4" />
															<span>{job.location}</span>
														</div>
														<div className="flex items-center gap-1">
															<Calendar className="w-4 h-4" />
															<span>{job.period}</span>
														</div>
													</div>
												</div>
											</CardHeader>
											
											<CardContent className="pl-8 space-y-4">
												<ul className="space-y-2">
													{job.description.map((item, i) => (
														<li key={i} className="text-muted-foreground flex items-start gap-2">
															<span className="text-primary mt-2 text-xs">▸</span>
															{item}
														</li>
													))}
												</ul>
												
												<div className="flex flex-wrap gap-2">
													{job.technologies.map((tech) => (
														<Badge key={tech} variant="secondary" className="font-mono text-xs">
															{tech}
														</Badge>
													))}
												</div>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>
						</TabsContent>

						{/* Notable Projects Tab */}
						<TabsContent value="projects" className="space-y-6">
							<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
								{notableProjects.map((project, index) => (
									<motion.div
										key={project.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Card className="h-full hover:shadow-lg transition-shadow">
											<CardHeader>
												<div className="flex items-start justify-between">
													<CardTitle className="text-lg">{project.title}</CardTitle>
													<a 
														href={project.link} 
														target="_blank" 
														rel="noopener noreferrer"
														className="text-muted-foreground hover:text-primary transition-colors"
													>
														<ExternalLink className="w-4 h-4" />
													</a>
												</div>
											</CardHeader>
											
											<CardContent className="space-y-4">
												<p className="text-muted-foreground text-sm leading-relaxed">
													{project.description}
												</p>
												
												<div className="p-3 bg-muted rounded-md">
													<p className="text-sm font-medium text-primary">
														💡 Impact: {project.impact}
													</p>
												</div>
												
												<div className="flex flex-wrap gap-1">
													{project.technologies.map((tech) => (
														<Badge key={tech} variant="outline" className="text-xs font-mono">
															{tech}
														</Badge>
													))}
												</div>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>
						</TabsContent>

						{/* Education Tab */}
						<TabsContent value="education" className="space-y-6">
							<div className="space-y-4">
								{education.map((item, index) => (
									<motion.div
										key={item.id}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Card>
											<CardHeader>
												<div className="flex items-start gap-3">
													<div className="p-2 bg-primary/10 rounded-full">
														{item.type === "degree" && <GraduationCap className="w-5 h-5 text-primary" />}
														{item.type === "certification" && <Award className="w-5 h-5 text-primary" />}
														{item.type === "bootcamp" && <Code className="w-5 h-5 text-primary" />}
													</div>
													<div className="flex-1">
														<CardTitle className="text-lg">{item.title}</CardTitle>
														<p className="text-primary font-medium">{item.institution}</p>
														<p className="text-muted-foreground text-sm">{item.period}</p>
													</div>
												</div>
											</CardHeader>
											<CardContent>
												<p className="text-muted-foreground">{item.description}</p>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>
						</TabsContent>

						{/* Skills Tab */}
						<TabsContent value="skills" className="space-y-6">
							<div className="grid gap-6 md:grid-cols-2">
								{skillCategories.map((category, index) => (
									<motion.div
										key={category.category}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										<Card>
											<CardHeader>
												<CardTitle className="text-xl">{category.category}</CardTitle>
											</CardHeader>
											<CardContent className="space-y-3">
												{category.skills.map((skill) => (
													<div key={skill.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
														<div className="flex items-center gap-2">
															<skill.icon className="w-5 h-5" />
															<span className="font-medium">{skill.name}</span>
														</div>
														<Badge 
															variant={skill.level === 'Expert' ? 'default' : skill.level === 'Advanced' ? 'secondary' : 'outline'}
															className="text-xs font-mono"
														>
															{skill.level}
														</Badge>
													</div>
												))}
											</CardContent>
										</Card>
									</motion.div>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</motion.div>

				{/* Call to Action */}
				<motion.div 
					className="space-y-4 rounded-lg bg-muted/50 p-8 text-center"
					variants={itemVariants}
				>
					<h2 className="text-2xl font-semibold">Ready to Collaborate?</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						I&apos;m always interested in challenging projects and great teams. 
						Let&apos;s discuss how my experience can contribute to your next big idea.
					</p>
				</motion.div>
			</motion.div>
		</main>
	);
}