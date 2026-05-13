"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterBar from "@/components/works/FilterBar";
import ProjectCard from "@/components/works/ProjectCard";
import { filterCategoriesData } from "@/lib/data";
import type { FilterCategory, ProjectItem } from "@/lib/data";
import { SanityProject } from "@/sanity/types";

interface ProjectGridProps {
  projects: (ProjectItem | SanityProject)[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.categories.includes(activeFilter as string);
  });

  return (
    <section id="projects" className="bg-section-alt pb-10 relative z-10 transition-colors duration-300">
      <FilterBar
        categories={filterCategoriesData}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="section-container">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-muted-foreground"
          >
            No projects found in this category.
          </motion.div>
        )}
      </div>
    </section>
  );
}
