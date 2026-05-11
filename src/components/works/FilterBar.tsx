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
    <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 mb-12">
      <div className="section-container">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => onFilterChange(category)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-white shadow-md shadow-blue-500/20"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent"
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
