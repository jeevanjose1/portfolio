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
    <div className="z-40 bg-white/80 backdrop-blur-md border-b border-gray-100  mb-5">
      <div className="section-container py-1!">
        <div className="flex items-center gap-3 overflow-x-auto  scrollbar-hide no-scrollbar">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => onFilterChange(category)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${isActive
                  ? "bg-accent text-white  border border-accent"
                  : "bg-white border border-gray-100 text-gray-400 hover:border-accent hover:text-accent"
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
