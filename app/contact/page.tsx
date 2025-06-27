
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send } from "lucide-react";
import { SocialLinks } from "@/components/shared/social-links";

export default function ContactPage() {
	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<div className="space-y-8">
				{/* Header */}
				<div className="text-center space-y-4">
					<h1 className="text-4xl font-bold tracking-tight">Get In Touch</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						I&rsquo;d love to hear from you. Send me a message and I&rsquo;ll
						respond as soon as possible.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2">
					{/* Contact Form */}
					<Card>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<MessageCircle className="w-5 h-5" />
								Send a Message
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="name" className="text-sm font-medium">
									Name
								</label>
								<Input id="name" placeholder="Your name" />
							</div>

							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium">
									Email
								</label>
								<Input
									id="email"
									type="email"
									placeholder="your.email@example.com"
								/>
							</div>

							<div className="space-y-2">
								<label htmlFor="subject" className="text-sm font-medium">
									Subject
								</label>
								<Input id="subject" placeholder="What's this about?" />
							</div>

							<div className="space-y-2">
								<label htmlFor="message" className="text-sm font-medium">
									Message
								</label>
								<Textarea
									id="message"
									placeholder="Tell me about your project or just say hello!"
									rows={6}
								/>
							</div>

							<Button className="w-full">
								<Send className="w-4 h-4 mr-2" />
								Send Message
							</Button>

							<p className="text-xs text-muted-foreground text-center">
								This form is not yet connected to a backend. Please use the
								email below for now.
							</p>
						</CardContent>
					</Card>

					{/* Contact Info */}
					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Mail className="w-5 h-5" />
									Contact Information
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h3 className="font-semibold mb-2">Email</h3>
									<p className="text-muted-foreground">kyle@example.com</p>
								</div>

								<div>
									<h3 className="font-semibold mb-2">Response Time</h3>
									<p className="text-muted-foreground">
										Usually within 24 hours
									</p>
								</div>

								<div>
									<h3 className="font-semibold mb-2">Best For</h3>
									<ul className="text-muted-foreground space-y-1">
										<li> Project collaborations</li>
										<li> Freelance opportunities</li>
										<li> Technical discussions</li>
										<li> General inquiries</li>
									</ul>
								</div>
							</CardContent>
						</Card>

						{/* Social Links */}
						<Card>
							<CardHeader>
								<CardTitle>Connect With Me</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex justify-center">
									<SocialLinks variant="default" />
								</div>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Additional CTA */}
				<div className="text-center space-y-4 bg-muted/50 rounded-lg p-8">
					<h2 className="text-2xl font-semibold">
						Let&rsquo;s Build Something Together
					</h2>
					<p className="text-muted-foreground">
						Whether you have a project in mind or just want to chat about
						technology, I&rsquo;m always open to new conversations and
						opportunities.
					</p>
				</div>
			</div>
		</div>
	);
}
