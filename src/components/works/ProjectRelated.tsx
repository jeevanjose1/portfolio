"use client";

import Link from "next/link";
import ProjectCard from "@/components/works/ProjectCard";
import { projectsData } from "@/lib/data";
import type { NormalizedProject } from "./types";

export default function ProjectRelated({ project }: { project: NormalizedProject }) {
  const otherProjects = projectsData.filter((item) => item.id !== project.id).slice(0, 3);

  if (otherProjects.length === 0) return null;

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="section-container !py-0">
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl font-heading font-black text-foreground">
            Explore More.
          </h2>
          <Link
            href="/works"
            className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
          >
            View All Works →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
