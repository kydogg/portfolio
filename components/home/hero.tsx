"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/shared/typewriter";
import { SocialLinks } from "@/components/shared/social-links";
import { ArrowDown } from "lucide-react";

const typewriterPhrases = [
	"Building modern web applications...",
	"Crafting seamless user experiences...",
	"Writing clean, scalable code...",
	"Turning ideas into digital reality...",
];

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
			{/* Background Pattern - Abstract geometric pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-repeat" />
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
			</div>

			<div className="container mx-auto px-4 py-8 relative z-10">
				<div className="max-w-4xl mx-auto text-center space-y-8">
					{/* Greeting */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="space-y-2"
					>
						<p className="text-lg text-muted-foreground font-mono">
							👋 Hi, I&rsquo;m
						</p>
					</motion.div>

					{/* Name */}
					{/* <motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground 
						to-foreground/70 bg-clip-text text-transparent"
					>
						Kyle Baker
					</motion.h1> */}

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="
							text-5xl md:text-7xl font-bold tracking-tight
							bg-gradient-to-r from-foreground to-foreground/70
							bg-clip-text text-transparent
							leading-[1.2]  /* I changed the value to 1.2 for more padding */         
							pb-1                    
						"
						>
						Kyle&nbsp;Baker
					</motion.h1>

					{/* Title */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="text-2xl md:text-3xl font-semibold text-foreground/90"
					>
						Full Stack Developer
					</motion.h2>

					{/* Typewriter Animation */}
					<div className="h-8 flex items-center justify-center">
						<Typewriter
							phrases={typewriterPhrases}
							className="text-xl md:text-2xl font-mono text-primary"
							speed={80}
							deleteSpeed={40}
							pauseDuration={2000}
						/>
					</div>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 3.0 }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
					>
						<Button
							size="lg"
							className="font-semibold px-8 py-3 text-lg hover:scale-105 transition-transform"
							asChild
						>
							<Link href="/projects">View My Work</Link>
						</Button>

						<Button
							variant="outline"
							size="lg"
							className="font-semibold px-8 py-3 text-lg hover:scale-105 transition-transform"
							asChild
						>
							<Link href="/contact">Get In Touch</Link>
						</Button>
					</motion.div>

					{/* Social Links */}
					<div className="pt-8 flex justify-center">
						<SocialLinks variant="minimal" />
					</div>

					{/* Scroll Indicator */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 4.0, duration: 1 }}
						className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
					>
						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
							className="flex flex-col items-center space-y-2 text-muted-foreground"
						>
							<span className="text-sm font-mono"></span>
							<ArrowDown className="w-4 h-4" />
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
