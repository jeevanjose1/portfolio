"use client";

import { motion } from "framer-motion";
import { Reveal } from "../animations/Reveal";

interface Category {
  name: string;
  count: number;
}

export default function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
}: {
  categories: Category[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}) {
  return (
    <div className="w-full bg-section-alt pt-24 transition-colors duration-300">
      <div className="section-container !py-0">
        <div className="flex flex-col space-y-14">

          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className="space-y-4">
              <Reveal delay={0.1}>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-accent flex items-center gap-2">
                  {"//"} Project Archive
                </p>
              </Reveal>
              <Reveal delay={0.2} blur>
                <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-foreground tracking-tighter leading-[0.9]">
                  Specialized  Expertise
                </h2>
              </Reveal>
            </div>
          </div>

          {/* Filter Actions */}
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat, i) => {
                const isActive = activeFilter === cat.name;
                return (
                  <Reveal key={cat.name} delay={0.3 + (i * 0.05)} y={10} blur>
                    <button
                      onClick={() => onFilterChange(cat.name)}
                      className={`
                        group relative flex items-center gap-4 px-6 py-3 rounded-full transition-all duration-500 ease-out 
                        ${isActive
                          ? "text-background  shadow-xl shadow-foreground/5"
                          : "text-muted-foreground bg-surface-2  hover:text-foreground "}
                      `}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-filter-bg"
                          className="absolute inset-0 bg-foreground rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}

                      <span className="relative z-10 text-[11px] font-extrabold uppercase tracking-[0.15em] leading-none">
                        {cat.name}
                      </span>

                      <span className={`
                      relative z-10 text-[9px] font-extrabold px-2 py-0.5 rounded-md leading-none transition-colors duration-300
                      ${isActive ? "bg-background/20 text-background" : "bg-surface-2 text-muted-foreground group-hover:bg-accent group-hover:text-background"}
                    `}>
                        {cat.count}
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
