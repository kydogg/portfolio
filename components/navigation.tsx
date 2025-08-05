"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
// import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	NavigationMenu,
	// NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	// NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "./assets/hellooo.png";
import { ModeToggle } from "@/components/mode-toggle";

const navigationItems = [
	{ name: "About", href: "/about" },
	{ name: "Projects", href: "/projects" },
	{ name: "Experience", href: "/experience" },
	{ name: "Contact", href: "/contact" },
];

export function Navigation() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="flex h-14 items-center justify-between px-6" suppressHydrationWarning>
				{/* Logo */}
				<Link href="/" className="flex items-center ml-6">
					{/* logo */}
					<Image
					src={Logo}
					alt="Portfolio logo"
					width={36}          
					height={36}
					priority          
					className="h-fit w-auto"
					/>
				</Link>
				{/* Desktop Navigation */}
				<div className="flex items-center space-x-4">
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							{navigationItems.map((item) => (
								<NavigationMenuItem key={item.name}>
									<NavigationMenuLink
										href={item.href}
										className={cn(
											"group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-muted hover:text-foreground hover:scale-105 focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
										)}
									>
										{item.name}
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
					<ModeToggle />
				</div>

				{/* Mobile Navigation */}
				<div className="flex items-center space-x-2 md:hidden">
					<ModeToggle />
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="sm"
								aria-label="Toggle navigation menu"
							>
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[300px] sm:w-[400px]">
							<div className="flex flex-col space-y-4 mt-4">
								<Link
									href="/"
									className="flex items-center space-x-2 text-lg font-semibold transition-all duration-200 hover:text-foreground hover:bg-muted px-3 py-2 rounded-md hover:scale-105"
									onClick={() => setIsOpen(false)}
								>
									Portfolio
								</Link>
								<div className="flex flex-col space-y-3">
									{navigationItems.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className="text-sm font-medium transition-all duration-200 hover:text-foreground hover:bg-muted px-3 py-2 rounded-md hover:scale-105"
											onClick={() => setIsOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
