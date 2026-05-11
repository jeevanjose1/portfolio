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
    <div className="relative flex-1 flex flex-col items-center text-center">
      {/* Connecting Line (hidden on mobile, visible on desktop) */}
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] border-t-2 border-dashed border-gray-200 z-0" />
      )}

      {/* Step Circle */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6 group transition-transform duration-300 hover:scale-110">
        <Icon size={28} className="text-white" />
        {/* Number Badge */}
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
          {number}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-heading font-semibold text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">
        {description}
      </p>

      {/* Mobile Connector (visible only on mobile) */}
      {!isLast && (
        <div className="md:hidden w-[2px] h-12 border-l-2 border-dashed border-gray-200 my-4" />
      )}
    </div>
  );
}
