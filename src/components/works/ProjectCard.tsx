"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import type { ProjectItem } from "@/lib/data";

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
    <Link href={`/works/${project.slug}`} className="block h-full outline-none focus:ring-2 focus:ring-accent rounded-2xl group">
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      >
        {/* Image Placeholder */}
        <div className="relative aspect-video bg-gray-100 overflow-hidden">
          {/* Placeholder gradient mimicking an image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm z-10">
            <span className="bg-white text-primary px-6 py-2.5 rounded-full font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Project
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-heading font-bold text-primary mb-2 line-clamp-1">
            {project.title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100 mt-auto">
            {project.liveUrl && (
              <div className="text-gray-500 hover:text-accent transition-colors flex items-center gap-1.5 text-sm font-medium">
                <ExternalLink size={18} />
                Live Demo
              </div>
            )}
            {project.githubUrl && (
              <div className="text-gray-500 hover:text-accent transition-colors flex items-center gap-1.5 text-sm font-medium">
                <GithubIcon size={18} />
                GitHub
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
