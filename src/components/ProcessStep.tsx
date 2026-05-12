"use client";

import { Search, FileText, Code, Rocket } from "lucide-react";

interface ProcessStepProps {
  number: string;
  iconName: "Search" | "FileText" | "Code" | "Rocket";
  title: string;
  description: string;
  isLast?: boolean;
}

const iconMap = { Search, FileText, Code, Rocket } as const;

export default function ProcessStep({
  number,
  iconName,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  const Icon = iconMap[iconName];

  return (
    <div className="relative flex-1 flex flex-col items-center text-center px-4 transition-colors duration-300">
      {/* Connecting Line from Figma Variation 1/2 */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border dark:bg-border/30 z-0" />
      )}

      {/* Step Circle — Minimalist Style */}
      <div className="relative z-10 w-20 h-20 rounded-lg bg-background border border-border dark:border-accent/30 flex items-center justify-center shadow-xl shadow-black/5 mb-8 group transition-all duration-500 hover:border-accent hover:shadow-accent/5">
        <Icon size={32} className="text-accent group-hover:scale-110 transition-transform" />
        {/* Number Badge — Bold uppercase pill */}
        <div className="absolute -top-3 -right-3 px-3 py-1 rounded-lg bg-accent text-background text-[9px] font-black uppercase tracking-widest border-2 border-background">
          Step {number}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-heading font-black text-foreground mb-4 uppercase tracking-tight transition-colors">
        {title}
      </h3>
      <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-4 opacity-70">
        Execution
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto font-body">
        {description}
      </p>

      {/* Mobile Connector */}
      {!isLast && (
        <div className="md:hidden w-px h-16 bg-border dark:bg-border/30 my-8" />
      )}
    </div>
  );
}
