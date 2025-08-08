"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const currentTheme = mounted ? resolvedTheme : 'light';

	return (
		<section 
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
			role="banner"
			aria-label="Kyle Baker - Full Stack Developer introduction"
		>
			{/* Simplified Background */}
			<div className="absolute inset-0">
				{/* Light Theme - White Marble */}
				{currentTheme === 'light' && (
					<motion.div 
						className="absolute inset-0"
						initial={{ opacity: 0, scale: 1.05 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<Image
							src="/images/hero-light.jpg"
							alt="White marble texture background"
							fill
							className="object-cover object-center"
							priority
							sizes="100vw"
						/>
						{/* Strong overlay for text readability */}
						<motion.div 
							className="absolute inset-0 bg-white/75" 
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.3 }}
						/>
					</motion.div>
				)}

				{/* Dark Theme - Moody Dark Image */}
				{currentTheme === 'dark' && (
					<motion.div 
						className="absolute inset-0"
						initial={{ opacity: 0, scale: 1.05 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<Image
							src="/images/hero-dark.jpg"
							alt="Dark moody rocks and water texture background"
							fill
							className="object-cover object-center"
							priority
							sizes="100vw"
						/>
						{/* Subtle overlay for text readability */}
						<motion.div 
							className="absolute inset-0 bg-black/40" 
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.3 }}
						/>
					</motion.div>
				)}
			</div>

			<div className="container mx-auto px-4 py-8 relative z-10">
				<div className="max-w-4xl mx-auto text-center space-y-8">
					{/* Greeting */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
						className="space-y-2"
					>
						<p className={`text-lg font-mono ${
							currentTheme === 'dark' 
								? 'text-slate-200' 
								: 'text-gray-800'
						}`}>
							👋 Hi, I&rsquo;m
						</p>
					</motion.div>

					{/* Name */}
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
						className={`text-5xl md:text-7xl font-bold tracking-tight leading-[1.2] pb-1 ${
							currentTheme === 'dark' 
								? 'text-white' 
								: 'text-gray-900'
						}`}
					>
						Kyle&nbsp;Baker
					</motion.h1>

					{/* Title */}
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
						className={`text-2xl md:text-3xl font-semibold ${
							currentTheme === 'dark' 
								? 'text-slate-100' 
								: 'text-gray-700'
						}`}
					>
						Full Stack Developer
					</motion.h2>

					{/* Typewriter Animation */}
					<motion.div 
						className="h-8 flex items-center justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 2.3 }}
					>
						<Typewriter
							phrases={typewriterPhrases}
							className={`text-xl md:text-2xl font-mono ${
								currentTheme === 'dark' 
									? 'text-blue-200' 
									: 'text-gray-600'
							}`}
							speed={80}
							deleteSpeed={40}
							pauseDuration={2000}
						/>
					</motion.div>

					{/* CTA Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 4.5, ease: "easeOut" }}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
					>
						<Button
							size="lg"
							className={`font-semibold px-8 py-3 text-lg hover:scale-105 transition-all duration-200 ${
								currentTheme === 'dark'
									? 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
									: 'bg-gray-800 hover:bg-gray-900 text-white'
							}`}
							asChild
						>
							<Link href="/projects" aria-label="View Kyle Baker's portfolio projects">View My Work</Link>
						</Button>

						<Button
							variant="outline"
							size="lg"
							className={`font-semibold px-8 py-3 text-lg hover:scale-105 transition-all duration-200 ${
								currentTheme === 'dark'
									? 'border-slate-400 text-slate-200 hover:bg-slate-800/30'
									: 'border-gray-600 text-gray-800 hover:bg-gray-50'
							}`}
							asChild
						>
							<Link href="/contact" aria-label="Contact Kyle Baker for collaboration">Get In Touch</Link>
						</Button>
					</motion.div>

					{/* Social Links */}
					<motion.div 
						className="pt-8 flex justify-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 5.0 }}
					>
						<SocialLinks variant="minimal" />
					</motion.div>

					{/* Scroll Indicator */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 5.5, duration: 0.8, ease: "easeOut" }}
						className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
					>
						<motion.div
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
							className={`flex flex-col items-center space-y-2 ${
								currentTheme === 'dark' 
									? 'text-slate-400' 
									: 'text-gray-500'
							}`}
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