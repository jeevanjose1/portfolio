"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterBar from "@/components/works/FilterBar";
import ProjectCard from "@/components/works/ProjectCard";
import type { ProjectItem } from "@/lib/data";
import { SanityProject } from "@/sanity/types";

interface ProjectGridProps {
  projects: (ProjectItem | SanityProject)[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(projects.flatMap((p) => p.categories || [])))];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return (project.categories as string[])?.includes(activeFilter);
  });

  return (
    <section id="projects" className="bg-section-alt pb-10 relative z-10 transition-colors duration-300">
      <FilterBar
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="section-container">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const projectId = "_id" in project ? project._id : project.id;
              return <ProjectCard key={projectId} project={project} />;
            })}
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
