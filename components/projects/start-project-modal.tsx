"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectInquiryForm } from "./project-inquiry-form";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

interface StartProjectModalProps {
	children: React.ReactNode;
}

export function StartProjectModal({ children }: StartProjectModalProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const handleSuccess = () => {
		setShowSuccess(true);
		// Auto close after showing success
		setTimeout(() => {
			setIsOpen(false);
			setShowSuccess(false);
		}, 3000);
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
				<motion.div
					initial={{ scale: 0.95, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.95, opacity: 0 }}
					transition={{ duration: 0.2 }}
					className="p-6"
				>
					<AnimatePresence mode="wait">
						{!showSuccess ? (
							<motion.div
								key="form"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.2 }}
							>
								<DialogHeader className="space-y-3 mb-6">
									<DialogTitle className="text-2xl font-bold tracking-tight">
										Start Your Project
									</DialogTitle>
									<p className="text-muted-foreground">
										Let&rsquo;s bring your ideas to life. Fill out the form
										below and I&rsquo;ll get back to you within 2-3 business
										days with a detailed proposal.
									</p>
								</DialogHeader>
								<ProjectInquiryForm onSuccess={handleSuccess} />
							</motion.div>
						) : (
							<motion.div
								key="success"
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.8 }}
								transition={{
									duration: 0.5,
									type: "spring",
									bounce: 0.4,
								}}
								className="text-center py-12"
							>
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{
										delay: 0.2,
										duration: 0.6,
										type: "spring",
										bounce: 0.6,
									}}
									className="w-20 h-20 mx-auto mb-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center"
								>
									<Check className="w-10 h-10 text-green-600 dark:text-green-400" />
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
									className="space-y-4"
								>
									<h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
										Inquiry Sent Successfully!
									</h3>
									<div className="space-y-2 text-muted-foreground">
										<p>Thank you for your interest in working together.</p>
										<p>
											I&rsquo;ll review your project details and get back to you
											within 24 hours with next steps.
										</p>
									</div>

									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 0.6 }}
										className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4"
									>
										<Sparkles className="w-4 h-4" />
										<span>Excited to bring your vision to life!</span>
										<Sparkles className="w-4 h-4" />
									</motion.div>
								</motion.div>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</DialogContent>
		</Dialog>
	);
}
