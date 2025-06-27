"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectTabsProps {
  children: React.ReactNode;
  onTabChange?: (value: string) => void;
}

const tabItems = [
  { value: "web", label: "Web", icon: "💻" },
  { value: "ui-ux", label: "UI/UX", icon: "🎨" },
  { value: "ios", label: "iOS", icon: "📱" },
];

export function ProjectTabs({ children, onTabChange }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState("web");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onTabChange?.(value);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="grid w-full max-w-md grid-cols-3 bg-muted p-1 h-12">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="relative flex items-center gap-2 text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              <span className="text-base">{tab.icon}</span>
              {tab.label}
              {activeTab === tab.value && (
                <motion.div
                  className="absolute inset-0 bg-background rounded-md shadow-sm"
                  layoutId="activeTab"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                  style={{ zIndex: -1 }}
                />
              )}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <div className="relative">
        {tabItems.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="mt-0 focus-visible:outline-none focus-visible:ring-0"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {children}
            </motion.div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}