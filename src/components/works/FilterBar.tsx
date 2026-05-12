"use client";

import type { FilterCategory } from "@/lib/data";

interface FilterBarProps {
  categories: FilterCategory[];
  activeFilter: FilterCategory;
  onFilterChange: (category: FilterCategory) => void;
}

export default function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className="z-40 bg-background/80 backdrop-blur-md border-b border-border mb-5 transition-colors duration-300">
      <div className="section-container py-4">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide no-scrollbar">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => onFilterChange(category)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${isActive
                  ? "bg-accent text-white border border-accent shadow-lg shadow-accent/20"
                  : "bg-background border border-border text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
