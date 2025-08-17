import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {

	return (
		<main className="container mx-auto max-w-4xl px-4 py-8">
			<div className="space-y-8">
				{/* Hero Section */}
				<div className="text-center space-y-4">
					<h1 className="text-4xl font-bold tracking-tight">About Me</h1>
					<p className="mx-auto max-w-2xl text-xl text-muted-foreground">
						Passionate developer creating innovative solutions and meaningful
						user experiences
					</p>
				</div>

				{/* My Story Section */}
				<Card>
					<CardHeader>
						<CardTitle>My Story</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 text-muted-foreground">
						<p>
							I&apos;m a dedicated software developer with a passion for
							creating clean, efficient code and building applications that
							solve real-world problems. My journey in tech started with
							curiosity and has evolved into a career focused on continuous
							learning and innovation.
						</p>
						<p>
							When I&apos;m not coding, you can find me exploring new
							technologies, contributing to open-source projects, or sharing
							knowledge with the developer community.
						</p>
					</CardContent>
				</Card>

				<Separator />

				{/* Experience Overview */}
				<Card>
					<CardHeader>
						<CardTitle>Experience Highlights</CardTitle>
					</CardHeader>
					<CardContent className="space-y-6">
						<Section
							title="Frontend Development"
							text="Specialising in React and Next.js applications with a focus on performance,
              accessibility, and user experience. Experience with modern state
              management, responsive design, and component libraries."
						/>
						<Section
							title="Backend Development"
							text="Building robust APIs and server-side applications using Node.js, Python,
              and various databases. Experience with cloud deployment,
              authentication, and scalable architecture patterns."
						/>
						<Section
							title="Project Management"
							text="Leading development projects from conception to deployment. Experienced
              in Agile methodologies, code reviews, and collaborating with
              cross-functional teams to deliver high-quality software."
						/>
					</CardContent>
				</Card>

				{/* Call to Action */}
				<div className="space-y-4 rounded-lg bg-muted/50 p-8 text-center">
					<h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
					<p className="text-muted-foreground">
						I&apos;1m always interested in new opportunities and collaborations.
						Feel free to reach out if you&apos;d like to discuss a project or
						just chat about tech!
					</p>
				</div>
			</div>
		</main>
	);
}

function Section({ title, text }: { title: string; text: string }) {
	return (
		<div className="space-y-2">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="text-muted-foreground">{text}</p>
		</div>
	);
}
