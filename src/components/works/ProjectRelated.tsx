"use client";

import Link from "next/link";
import ProjectCard from "@/components/works/ProjectCard";
import { SanityProject } from "@/sanity/types";

export default function ProjectRelated({ projects }: { projects: SanityProject[] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="py-24 lg:py-32 bg-background border-t border-border">
      <div className="section-container !py-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-accent">
                Discovery
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground tracking-tight">
              Explore More.
            </h2>
          </div>
          
          <Link scroll={false}
            href="/works"
            className="group flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground hover:text-accent transition-all"
          >
            View All Works 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
