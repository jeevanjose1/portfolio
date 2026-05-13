"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectItem } from "@/lib/data";
import { SanityProject } from "@/sanity/types";
import { urlForImage } from "@/sanity/lib/image";
import GradientCard from "@/components/ui/GradientCard";

const GithubIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectVisuals: Record<string, string> = {
  "ecommerce-platform": "/images/project-1.svg",
  "saas-analytics":     "/images/project-2.svg",
  "flutter-shopping":   "/images/project-3.svg",
};

export default function ProjectCard({ project }: { project: ProjectItem | SanityProject }) {
  const isSanityProject = "_id" in project;
  const visualSrc = isSanityProject && project.mainImage
    ? urlForImage(project.mainImage).url()
    : (projectVisuals[project.slug] ?? "/images/project-1.svg");

  return (
    <Link href={`/works/${project.slug}`} className="block h-full outline-none focus:ring-2 focus:ring-accent rounded-2xl group">
      <motion.div layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4 }} className="h-full">
        <GradientCard className="bg-background border border-[var(--color-card-border)] overflow-hidden group-hover:border-[color-mix(in_srgb,var(--color-accent)_25%,transparent)] transition-all duration-500 flex flex-col h-full p-2" style={{ boxShadow: "var(--shadow-card)" } as React.CSSProperties}>

          {/* Image */}
          <div className="relative aspect-video bg-section-alt rounded-xl overflow-hidden">
            <Image src={visualSrc} alt={`${project.title} preview`} fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-accent/10" />

            {/* Category badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3.5 py-1.5 rounded-full bg-accent text-background text-[10px] font-black uppercase tracking-widest">
                {project.categories[0]}
              </span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--color-accent)_55%,transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] z-10">
              <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-accent transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                <ArrowUpRight size={22} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 sm:p-10 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-5">
              {project.categories.slice(0, 3).map((tag) => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-surface-2 text-muted-foreground px-3 py-1 rounded-full border border-[var(--color-border)]">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-heading font-black text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-8 flex-grow font-body">
              {project.description}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-[var(--color-border)] mt-auto">
              <div className="flex items-center gap-4">
                {isSanityProject
                  ? project.link && <div className="text-muted-foreground hover:text-accent transition-colors"><ExternalLink size={17} /></div>
                  : (project as ProjectItem).liveUrl && <div className="text-muted-foreground hover:text-accent transition-colors"><ExternalLink size={17} /></div>
                }
                {"githubUrl" in project && project.githubUrl && (
                  <div className="text-muted-foreground hover:text-accent transition-colors">
                    <GithubIcon size={17} />
                  </div>
                )}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-accent group-hover:translate-x-1 transition-transform">
                View Details →
              </div>
            </div>
          </div>
        </GradientCard>
      </motion.div>
    </Link>
  );
}
