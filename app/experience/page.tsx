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
	SiFirebase,
	SiGraphql,
	SiHtml5,
} from "react-icons/si";
import { Calendar, MapPin, GraduationCap, Award, Code, Camera, MapPinIcon, CalendarIcon, ApertureIcon, ZoomInIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { getPhotosByCategory, photographyCategories } from "@/lib/data/photography";
import { useState } from "react";

const professionalExperience = [
	{
		id: 1,
		company: "Local Web Agency",
		position: "Junior Web Developer (Internship)",
		location: "New York, NY",
		period: "Jan 2024 - Apr 2024",
		description: [
			"Built responsive landing pages using HTML, CSS, and JavaScript",
			"Learned React fundamentals and contributed to client projects",
			"Collaborated with senior developers using Git workflow",
			"Participated in daily standups and code review process"
		],
		technologies: ["HTML", "CSS", "JavaScript", "React", "Git", "Figma"]
	},
	{
		id: 2,
		company: "Freelance Projects",
		position: "Web Developer",
		location: "Remote",
		period: "2023 - Present",
		description: [
			"Created 5+ portfolio websites for local small businesses",
			"Built personal projects to learn new technologies",
			"Integrated Firebase for user authentication and data storage",
			"Deployed projects using Vercel and Netlify"
		],
		technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase", "Vercel"]
	},
	{
		id: 3,
		company: "Tech Bootcamp Academy",
		position: "Student Developer",
		location: "Online",
		period: "Sep 2023 - Dec 2023",
		description: [
			"Completed intensive full-stack web development program",
			"Built 3 major projects including a full-stack e-commerce app",
			"Learned agile development practices and pair programming",
			"Graduated with distinction in cohort of 25 students"
		],
		technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git", "Python"]
	}
];

const education = [
	{
		id: 1,
		type: "degree",
		title: "Bachelor of Arts in Digital Media",
		institution: "State University",
		period: "2020 - 2023",
		description: "Studied design principles, digital communication, and basic programming. Discovered passion for web development in final year."
	},
	{
		id: 2,
		type: "bootcamp",
		title: "Full Stack Web Development Bootcamp",
		institution: "Tech Bootcamp Academy",
		period: "Sep 2023 - Dec 2023",
		description: "Intensive 16-week program covering JavaScript, React, Node.js, and database fundamentals. Completed 3 major projects."
	},
	{
		id: 3,
		type: "certification",
		title: "Responsive Web Design Certification",
		institution: "freeCodeCamp",
		period: "2023",
		description: "Completed 300+ hour curriculum covering HTML, CSS, flexbox, grid, and accessibility fundamentals."
	},
	{
		id: 4,
		type: "certification",
		title: "JavaScript Algorithms and Data Structures",
		institution: "freeCodeCamp",
		period: "2023",
		description: "Learned ES6+, functional programming, and solved 100+ coding challenges to build problem-solving skills."
	}
];

const skillCategories = [
	{
		category: "Frontend",
		skills: [
			{ name: "JavaScript", icon: SiJavascript, level: "Intermediate" },
			{ name: "React", icon: SiReact, level: "Intermediate" },
			{ name: "HTML/CSS", icon: SiHtml5, level: "Advanced" },
			{ name: "Tailwind CSS", icon: SiTailwindcss, level: "Intermediate" },
			{ name: "TypeScript", icon: SiTypescript, level: "Beginner" },
			{ name: "Next.js", icon: SiNextdotjs, level: "Beginner" }
		]
	},
	{
		category: "Backend & Database",
		skills: [
			{ name: "Node.js", icon: SiNodedotjs, level: "Beginner" },
			{ name: "Express", icon: SiExpress, level: "Beginner" },
			{ name: "Python", icon: SiPython, level: "Intermediate" },
			{ name: "PostgreSQL", icon: SiPostgresql, level: "Beginner" },
			{ name: "MongoDB", icon: SiMongodb, level: "Beginner" },
			{ name: "Firebase", icon: SiFirebase, level: "Beginner" }
		]
	},
	{
		category: "Tools & Workflow",
		skills: [
			{ name: "Git", icon: SiGit, level: "Intermediate" },
			{ name: "Vercel", icon: SiVercel, level: "Intermediate" },
			{ name: "Linux", icon: SiLinux, level: "Beginner" },
			{ name: "Docker", icon: SiDocker, level: "Learning" }
		]
	},
	{
		category: "Currently Learning",
		skills: [
			{ name: "AWS", icon: SiAmazon, level: "Learning" },
			{ name: "GraphQL", icon: SiGraphql, level: "Learning" },
			{ name: "Testing", icon: Code, level: "Learning" },
			{ name: "System Design", icon: Code, level: "Learning" }
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
	const [selectedCategory, setSelectedCategory] = useState('all');
	const filteredPhotos = getPhotosByCategory(selectedCategory);

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
							<TabsTrigger value="photography">Photography</TabsTrigger>
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

						{/* Photography Tab */}
						<TabsContent value="photography" className="space-y-6">
							{/* Category Filter */}
							<div className="flex flex-wrap justify-center gap-2 mb-8">
								{photographyCategories.map((category) => (
									<button
										key={category.id}
										onClick={() => setSelectedCategory(category.id)}
										className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
											selectedCategory === category.id
												? 'bg-primary text-primary-foreground'
												: 'bg-muted text-muted-foreground hover:bg-muted/80'
										}`}
									>
										{category.name} ({category.count})
									</button>
								))}
							</div>

							{/* Photo Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
								{filteredPhotos.map((photo, index) => (
									<motion.div
										key={photo.id}
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: index * 0.05, duration: 0.3 }}
										className="group cursor-pointer"
									>
										<Dialog>
											<DialogTrigger asChild>
												<div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
													<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
													<div className="absolute bottom-3 left-3 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
														<h3 className="text-sm font-medium">{photo.title}</h3>
														{photo.location && (
															<p className="text-xs opacity-75 flex items-center gap-1">
																<MapPinIcon className="w-3 h-3" />
																{photo.location}
															</p>
														)}
													</div>
													<div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
														<ZoomInIcon className="w-4 h-4 text-white" />
													</div>
													{/* Placeholder for actual image - would use real photos */}
													<div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
														<Camera className="w-8 h-8 text-slate-400 dark:text-slate-500" />
													</div>
												</div>
											</DialogTrigger>

											<DialogContent className="max-w-4xl w-full p-0">
												<div className="grid md:grid-cols-3 gap-0">
													{/* Image */}
													<div className="md:col-span-2 relative aspect-square md:aspect-auto bg-muted">
														{/* Placeholder for actual image */}
														<div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-600 flex items-center justify-center">
															<Camera className="w-16 h-16 text-slate-400 dark:text-slate-500" />
														</div>
													</div>

													{/* Metadata */}
													<div className="p-6 space-y-4">
														<DialogHeader>
															<DialogTitle className="text-xl">{photo.title}</DialogTitle>
														</DialogHeader>

														{photo.description && (
															<p className="text-muted-foreground text-sm leading-relaxed">
																{photo.description}
															</p>
														)}

														<div className="space-y-3">
															{photo.location && (
																<div className="flex items-center gap-2 text-sm">
																	<MapPinIcon className="w-4 h-4 text-muted-foreground" />
																	<span className="text-muted-foreground">{photo.location}</span>
																</div>
															)}

															{photo.date && (
																<div className="flex items-center gap-2 text-sm">
																	<CalendarIcon className="w-4 h-4 text-muted-foreground" />
																	<span className="text-muted-foreground">
																		{new Date(photo.date).toLocaleDateString('en-US', {
																			year: 'numeric',
																			month: 'long',
																			day: 'numeric'
																		})}
																	</span>
																</div>
															)}

															{photo.camera && (
																<div className="flex items-center gap-2 text-sm">
																	<Camera className="w-4 h-4 text-muted-foreground" />
																	<span className="text-muted-foreground">{photo.camera}</span>
																</div>
															)}
														</div>

														{photo.settings && (
															<div className="space-y-2">
																<h4 className="text-sm font-medium flex items-center gap-2">
																	<ApertureIcon className="w-4 h-4" />
																	Camera Settings
																</h4>
																<div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground font-mono">
																	{photo.settings.aperture && <div>f/{photo.settings.aperture.replace('f/', '')}</div>}
																	{photo.settings.shutter && <div>{photo.settings.shutter}</div>}
																	{photo.settings.iso && <div>{photo.settings.iso}</div>}
																	{photo.settings.focal && <div>{photo.settings.focal}</div>}
																</div>
															</div>
														)}

														<div className="pt-4 border-t">
															<Badge variant="secondary" className="capitalize">
																{photo.category}
															</Badge>
														</div>
													</div>
												</div>
											</DialogContent>
										</Dialog>
									</motion.div>
								))}
							</div>

							{/* Photography Statement */}
							<motion.div 
								className="mt-12 p-6 bg-muted/30 rounded-lg text-center"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}
							>
								<h3 className="text-lg font-semibold mb-3 flex items-center justify-center gap-2">
									<Camera className="w-5 h-5" />
									Photography Philosophy
								</h3>
								<p className="text-muted-foreground max-w-2xl mx-auto">
									Photography teaches the same principles I apply to development: attention to detail, 
									composition, lighting, and the patience to capture the perfect moment. Both require 
									technical skill and creative vision working in harmony.
								</p>
							</motion.div>
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
															variant={
																skill.level === 'Advanced' ? 'default' : 
																skill.level === 'Intermediate' ? 'secondary' : 
																skill.level === 'Learning' ? 'destructive' : 'outline'
															}
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