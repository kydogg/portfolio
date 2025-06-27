"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  description: z.string().min(10, "Please provide more details about your project"),
});

type FormData = z.infer<typeof formSchema>;

interface ProjectInquiryFormProps {
  onSuccess: () => void;
  onError?: (error: string) => void;
}

const projectTypes = [
  { value: "web", label: "Web Development" },
  { value: "uiux", label: "UI/UX Design" },
  { value: "ios", label: "iOS App Development" },
  { value: "fullstack", label: "Full-Stack Solution" },
  { value: "ecommerce", label: "E-commerce Platform" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
  { value: "discuss", label: "Let's Discuss" },
];

const timelines = [
  { value: "asap", label: "ASAP (Rush Project)" },
  { value: "1-3months", label: "1-3 Months" },
  { value: "3-6months", label: "3-6 Months" },
  { value: "6months+", label: "6+ Months" },
  { value: "flexible", label: "Flexible Timeline" },
];

const services = [
  { id: "design", label: "UI/UX Design" },
  { id: "frontend", label: "Frontend Development" },
  { id: "backend", label: "Backend Development" },
  { id: "mobile", label: "Mobile Development" },
  { id: "consultation", label: "Technical Consultation" },
  { id: "maintenance", label: "Ongoing Maintenance" },
];

export function ProjectInquiryForm({ onSuccess, onError }: ProjectInquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitError, setSubmitError] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Send to API route
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send inquiry');
      }

      onSuccess();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send inquiry";
      setSubmitError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    let updatedServices;
    if (checked) {
      updatedServices = [...selectedServices, serviceId];
    } else {
      updatedServices = selectedServices.filter((id) => id !== serviceId);
    }
    setSelectedServices(updatedServices);
    setValue("services", updatedServices);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, staggerChildren: 0.1 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
        >
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Your full name"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-2"
        >
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="your.email@example.com"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <Label htmlFor="company">Company (Optional)</Label>
        <Input
          id="company"
          {...register("company")}
          placeholder="Your company name"
        />
      </motion.div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          <Label>Project Type *</Label>
          <Select onValueChange={(value) => setValue("projectType", value)}>
            <SelectTrigger className={errors.projectType ? "border-red-500" : ""}>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.projectType && (
            <p className="text-sm text-red-500">{errors.projectType.message}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <Label>Budget Range *</Label>
          <Select onValueChange={(value) => setValue("budget", value)}>
            <SelectTrigger className={errors.budget ? "border-red-500" : ""}>
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((budget) => (
                <SelectItem key={budget.value} value={budget.value}>
                  {budget.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budget && (
            <p className="text-sm text-red-500">{errors.budget.message}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-2"
        >
          <Label>Timeline *</Label>
          <Select onValueChange={(value) => setValue("timeline", value)}>
            <SelectTrigger className={errors.timeline ? "border-red-500" : ""}>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map((timeline) => (
                <SelectItem key={timeline.value} value={timeline.value}>
                  {timeline.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.timeline && (
            <p className="text-sm text-red-500">{errors.timeline.message}</p>
          )}
        </motion.div>
      </div>

      {/* Services Needed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="space-y-3"
      >
        <Label>Services Needed *</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={service.id}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={(checked) =>
                  handleServiceChange(service.id, checked as boolean)
                }
              />
              <Label
                htmlFor={service.id}
                className="text-sm font-normal cursor-pointer"
              >
                {service.label}
              </Label>
            </div>
          ))}
        </div>
        {errors.services && (
          <p className="text-sm text-red-500">{errors.services.message}</p>
        )}
      </motion.div>

      {/* Project Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="space-y-2"
      >
        <Label htmlFor="description">Project Description *</Label>
        <Textarea
          id="description"
          {...register("description")}
          placeholder="Tell us about your project goals, requirements, and any specific features you have in mind..."
          rows={4}
          className={errors.description ? "border-red-500" : ""}
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </motion.div>

      {/* Error Message */}
      {submitError && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
        >
          <p className="text-sm text-red-600 dark:text-red-400">
            {submitError}
          </p>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex justify-end pt-4"
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-w-[140px]"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Inquiry
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
}