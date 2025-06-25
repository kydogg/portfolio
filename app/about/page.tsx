import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
	SiFigma,
	SiPostgresql,
} from "react-icons/si";
import { Database } from "lucide-react";

export default function AboutPage() {
	const skills = [
		{ name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
		{ name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
		{ name: "React", icon: SiReact, color: "#61DAFB" },
		{ name: "Next.js", icon: SiNextdotjs, color: "#000000" },
		{ name: "Node.js", icon: SiNodedotjs, color: "#339933" },
		{ name: "Python", icon: SiPython, color: "#3776AB" },
		{ name: "SQL", icon: Database, color: "#336791" },
		{ name: "Git", icon: SiGit, color: "#F05032" },
		{ name: "AWS", icon: SiAmazon, color: "#FF9900" },
		{ name: "Docker", icon: SiDocker, color: "#2496ED" },
		{ name: "Figma", icon: SiFigma, color: "#F24E1E" },
		{ name: "Postgres", icon: SiPostgresql, color: "#336791" },
	];

	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<div className="space-y-8">
				{/* Hero Section */}
				<div className="text-center space-y-4">
					<h1 className="text-4xl font-bold tracking-tight">About Me</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Passionate developer creating innovative solutions and meaningful
						user experiences
					</p>
				</div>

				{/* Main Content */}
				<div className="grid gap-8 md:grid-cols-2">
					{/* Bio Card */}
					<Card>
						<CardHeader>
							<CardTitle>My Story</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-muted-foreground">
								I&rsquo;m a dedicated software developer with a passion for
								creating clean, efficient code and building applications that
								solve real-world problems. My journey in tech started with
								curiosity and has evolved into a career focused on continuous
								learning and innovation.
							</p>
							<p className="text-muted-foreground">
								When I&rsquo;m not coding, you can find me exploring new
								technologies, contributing to open-source projects, or sharing
								knowledge with the developer community.
							</p>
						</CardContent>
					</Card>

					{/* Skills Card */}
					<Card>
						<CardHeader>
							<CardTitle>Technical Skills</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-wrap gap-3">
								{skills.map((skill) => (
									<Badge
										key={skill.name}
										variant="secondary"
										className="flex items-center gap-2 px-3 py-2"
									>
										<skill.icon
											className="w-4 h-4"
											style={{ color: skill.color }}
										/>
										{skill.name}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				<Separator />

				{/* Experience Overview */}
				<Card>
					<CardHeader>
						<CardTitle>Experience Highlights</CardTitle>
					</CardHeader>
					<CardContent className="space-y-6">
						<div className="space-y-2">
							<h3 className="text-lg font-semibold">Frontend Development</h3>
							<p className="text-muted-foreground">
								Specializing in React and Next.js applications with a focus on
								performance, accessibility, and user experience. Experience with
								modern state management, responsive design, and component
								libraries.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="text-lg font-semibold">Backend Development</h3>
							<p className="text-muted-foreground">
								Building robust APIs and server-side applications using Node.js,
								Python, and various databases. Experience with cloud deployment,
								authentication, and scalable architecture patterns.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="text-lg font-semibold">Project Management</h3>
							<p className="text-muted-foreground">
								Leading development projects from conception to deployment.
								Experienced in Agile methodologies, code reviews, and
								collaborating with cross-functional teams to deliver
								high-quality software.
							</p>
						</div>
					</CardContent>
				</Card>

				{/* Call to Action */}
				<div className="text-center space-y-4 bg-muted/50 rounded-lg p-8">
					<h2 className="text-2xl font-semibold">Let&rsquo;s Connect</h2>
					<p className="text-muted-foreground">
						I&rsquo;m always interested in new opportunities and collaborations.
						Feel free to reach out if you&rsquo;d like to discuss a project or
						just chat about tech!
					</p>
				</div>
			</div>
		</div>
	);
}
