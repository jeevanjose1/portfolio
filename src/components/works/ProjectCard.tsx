"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ProjectItem } from "@/lib/data";
import GradientCard from "@/components/GradientCard";

const GithubIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/works/${project.slug}`} className="block h-full outline-none focus:ring-2 focus:ring-accent rounded-lg group">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className="h-full"
      >
        <GradientCard className="bg-background border border-border overflow-hidden group-hover:border-accent/30 group-hover:shadow-2xl group-hover:shadow-black/5 transition-all duration-500 flex flex-col h-full p-2">
          {/* Image Container — Inspired by Figma Variation 1/2 */}
          <div className="relative aspect-[16/10] bg-section-alt rounded-lg overflow-hidden m-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900" />

            {/* Category Badge on top of image */}
            <div className="absolute top-4 left-4 z-20">
              <span className="px-4 py-1.5 rounded-lg bg-accent text-background text-[10px] font-black uppercase tracking-widest shadow-sm">
                {project.categories[0]}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] z-10">
              <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-accent transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col flex-grow">
            {/* Tags — Small pill tags from Figma */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-wider bg-section-alt text-muted-foreground px-3 py-1 rounded-lg border border-border"
                >
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

            {/* Links Row */}
            <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <div className="text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink size={18} />
                  </div>
                )}
                {project.githubUrl && (
                  <div className="text-muted-foreground hover:text-accent transition-colors">
                    <GithubIcon size={18} />
                  </div>
                )}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-accent group-hover:translate-x-1 transition-transform">
                View Details →
              </div>
            </div>
          </div>
        </GradientCard>
      </motion.div>
    </Link>
  );
}
