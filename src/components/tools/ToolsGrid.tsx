"use client";

import { useState, useMemo } from "react";
import { customToolsData } from "@/lib/data";
import { Calculator, Search, Palette, Layers, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, any> = {
  Calculator,
  Search,
  Palette,
  Layers,
};

const categories = ["All", "Planning", "Marketing", "Design", "Development"];

export default function ToolsGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const filteredTools = useMemo(() => {
    return customToolsData.filter((tool) => {
      const matchesSearch =
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <>
      {/* Filter Section */}
      <Reveal width="100%" delay={0.5} y={20} className="relative z-[60] w-full">
        <div className="flex flex-col md:flex-row gap-4 mb-16 items-center justify-between w-full lg:w-1/2">
          {/* Search */}
          <div className="relative w-full md:flex-1 group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-accent transition-colors">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-1 border border-[var(--color-card-border)] rounded-xl py-3 pl-12 pr-4 outline-none focus:border-accent/40 focus:ring-4 focus:ring-accent/5 transition-all text-sm font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full md:w-72">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="w-full md:min-w-[200px] flex items-center justify-between px-6 py-3 rounded-xl bg-surface-1 border border-[var(--color-card-border)] hover:border-accent/30 transition-all text-sm font-black uppercase tracking-widest"
            >
              <span className="flex items-center gap-2">
                <span className="text-muted-foreground">Category:</span>
                <span className="text-accent">{activeCategory}</span>
              </span>
              <motion.div
                animate={{ rotate: isCategoryOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight size={16} className="rotate-90" />
              </motion.div>
            </button>

            <AnimatePresence>
              {isCategoryOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsCategoryOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full mt-2 left-0 right-0 md:left-auto md:w-full bg-surface-1 border border-[var(--color-card-border)] rounded-xl shadow-md p-2 z-50 overflow-hidden"
                  >
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setIsCategoryOpen(false);
                        }}
                        className={`w-full flex items-center px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${activeCategory === category
                          ? "bg-accent text-background"
                          : "hover:bg-surface-2 text-muted-foreground hover:text-foreground"
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredTools.map((tool, index) => {
            const Icon = iconMap[tool.icon] || Layers;

            const gridConfigs = [
              "md:col-span-8 md:h-[420px]",
              "md:col-span-4 md:h-[420px]",
              "md:col-span-4 md:h-[380px]",
              "md:col-span-8 md:h-[380px]",
            ];

            const config = gridConfigs[index % gridConfigs.length];

            return (
              <motion.div
                key={tool.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={config}
              >
                <Reveal width="100%" delay={index * 0.05} y={40} className="h-full">
                  <Link
                    href={tool.href}
                    className="group relative flex flex-col h-full p-8 md:p-10 rounded-xl bg-surface-1 border border-[var(--color-card-border)] overflow-hidden transition-all duration-700 hover:border-accent/40"
                  >
                    {/* Abstract Icon Backdrop */}
                    <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-1000 ease-out pointer-events-none">
                      <Icon size={320} strokeWidth={1} />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-12">
                        <div className="w-16 h-16 rounded-xl bg-surface-2 border border-[var(--color-border)] flex items-center justify-center group-hover:bg-accent group-hover:text-background group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                          <Icon size={32} />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-surface-2 border border-[var(--color-border)] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500">
                          <ArrowUpRight size={24} className="text-accent" />
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="w-8 h-[1px] bg-accent/40" />
                          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-accent">
                            {tool.category}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
                          {tool.title}
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-lg max-w-md leading-relaxed font-medium">
                          {tool.description}
                        </p>
                      </div>
                    </div>

                    {/* Subtle Grain Overlay */}
                    <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none" />

                    {/* Dynamic Gradient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </Link>
                </Reveal>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredTools.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface-2 border border-dashed border-border mb-6">
            <Search size={32} className="text-muted-foreground" />
          </div>
          <h3 className="text-2xl font-heading font-black mb-2">No tools found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter settings.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="mt-6 text-accent font-black uppercase tracking-widest text-[11px] hover:underline"
          >
            Clear all filters
          </button>
        </motion.div>
      )}
    </>
  );
}
