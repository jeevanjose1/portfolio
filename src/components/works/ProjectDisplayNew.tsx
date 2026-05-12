"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/lib/data";

const categories = ["All", "Web", "Mobile", "E-commerce", "APIs"];

export default function ProjectDisplay() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    return project.categories.some(cat => cat.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  const featuredProject = filteredProjects[0];
  const otherProjects = filteredProjects.slice(1);

  return (
    <section className="section-padding border-t border-subtle">
      <div className="container-custom">
        {/* Filter */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-16 font-mono text-small">
          {categories.map((cat, index) => (
            <div key={cat} className="flex items-center gap-6">
              <button
                onClick={() => setActiveFilter(cat)}
                className={`transition-colors ${activeFilter === cat ? "text-primary font-bold" : "text-muted hover:text-secondary"}`}
              >
                {cat}
              </button>
              {index !== categories.length - 1 && (
                <span className="text-muted/30">·</span>
              )}
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-24"
            >
              {/* Featured Project */}
              {featuredProject && (
                <div className="group relative space-y-8">
                  <div className="flex items-center justify-between font-mono text-muted text-small">
                    <span>01</span>
                    <span className="uppercase tracking-widest">Featured Project</span>
                  </div>
                  <Link href={`/works/${featuredProject.slug || featuredProject.id}`} className="block relative aspect-[16/9] overflow-hidden rounded-radius-img border border-subtle">
                    <Image
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-primary bg-secondary/80 backdrop-blur-md px-8 py-3 rounded-radius-btn font-mono text-label uppercase tracking-widest border border-subtle">
                        View Project →
                      </span>
                    </div>
                  </Link>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                      <h2 className="text-h2 font-bold text-primary tracking-tight">
                        {featuredProject.title}
                      </h2>
                      <p className="text-small text-secondary max-w-xl">
                        {featuredProject.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 font-mono text-label text-muted">
                      <span>{featuredProject.tech.join(" · ")}</span>
                      <span>2024</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Other Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                {otherProjects.map((project, index) => (
                  <Link
                    key={project.id}
                    href={`/works/${project.slug || project.id}`}
                    className="group space-y-6"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-radius-img border border-subtle">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <span className="text-primary bg-secondary/80 backdrop-blur-md w-10 h-10 flex items-center justify-center rounded-radius-btn border border-subtle">
                          →
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-h3 font-bold text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between font-mono text-label text-muted">
                        <span>{project.tech.slice(0, 3).join(" · ")}</span>
                        <span>2024</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
