"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FilterBar from "@/components/works/FilterBar";
import ProjectCard from "@/components/works/ProjectCard";
import type { ProjectItem } from "@/lib/data";
import { SanityProject } from "@/sanity/types";
import { Reveal } from "@/components/animations/Reveal";

interface ProjectGridProps {
  projects: (ProjectItem | SanityProject)[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Calculate category counts dynamically
  const categoryCounts = projects.reduce((acc: Record<string, number>, p: any) => {
    const cats = p.categories || p.tags || [];
    const normalizedCats = Array.isArray(cats) ? cats.map(c => c.trim()).filter(c => c.length > 0) : [];
    normalizedCats.forEach(cat => {
      acc[cat] = (acc[cat] || 0) + 1;
    });
    return acc;
  }, {});

  const categoriesWithCounts = [
    { name: "All", count: projects.length },
    ...Array.from(new Set(
      projects.flatMap((p: any) => {
        const cats = p.categories || p.tags || [];
        return Array.isArray(cats) ? cats : [];
      })
      .map(cat => cat.trim())
      .filter(cat => cat.length > 0)
    )).map(name => ({
      name,
      count: categoryCounts[name] || 0
    }))
  ];

  const filteredProjects = projects.filter((project: any) => {
    if (activeFilter === "All") return true;
    const projectCategories = project.categories || project.tags || [];
    return projectCategories.includes(activeFilter);
  });

  return (
    <section id="projects" className="bg-section-alt pb-10 relative z-10 transition-colors duration-300">
      <Reveal width="100%" className="w-full" delay={0.1}>
        <FilterBar
          categories={categoriesWithCounts}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </Reveal>

      <div className="section-container">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const projectId = "_id" in project ? project._id : project.id;
              return (
                <Reveal
                  key={projectId}
                  width="100%"
                  delay={i * 0.1}
                  y={30}
                  blur
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </Reveal>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <Reveal delay={0.2} className="text-center py-16 mx-auto">
            <div className="text-muted-foreground">
              No projects found in this category.
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
