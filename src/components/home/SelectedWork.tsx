"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";

export default function SelectedWork() {
  // Take only first 4 projects for "Selected Work"
  const selectedProjects = projectsData.slice(0, 4);

  return (
    <section className="section-padding border-t border-subtle">
      <div className="container-custom">
        <div className="flex flex-col gap-12">
          <header className="space-y-4">
            <p className="text-label font-mono text-muted uppercase tracking-[0.12em]">
              Selected Work
            </p>
            <div className="h-px bg-subtle w-full" />
          </header>

          <div className="flex flex-col">
            {selectedProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/works/${project.slug || project.id}`}
                className="group relative -mx-6 px-6 py-8 border-b border-subtle hover:bg-secondary transition-all duration-300 flex items-center gap-8"
              >
                {/* Number */}
                <span className="w-12 font-mono text-small text-muted group-hover:text-accent transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Project Name */}
                <h3 className="flex-1 text-h3 font-semibold text-primary group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>

                {/* Tech Stack (Desktop) */}
                <div className="hidden md:block">
                  <p className="text-label font-mono text-muted uppercase">
                    {project.tech.slice(0, 2).join(" · ")}
                  </p>
                </div>

                {/* Year */}
                <span className="text-label font-mono text-muted uppercase">
                  2024
                </span>

                {/* Arrow */}
                <span className="text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/works"
              className="text-accent text-small hover:underline font-medium inline-flex items-center gap-2"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
