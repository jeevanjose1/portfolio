"use client";

import { motion } from "framer-motion";
import { Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { NormalizedProject } from "./types";

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

export default function ProjectHero({ project }: { project: NormalizedProject }) {
  return (
    <section className="bg-background pt-32 pb-6">
      <div className="section-container pt-0">
        <div className="mb-8">
          <Link
            href="/works"
            className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-accent flex items-center gap-2 transition-colors w-fit"
          >
            <ArrowLeft size={14} /> Back to Works
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-[55%] bg-section-alt rounded-lg p-8 sm:p-12 border border-border shadow-card"
          >
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-lg bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] text-accent text-[10px] font-black uppercase tracking-widest">
                {project.categories.find((c) => c !== "All") || "Project"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground leading-tight mb-8">
              {project.title.split(" ").map((word, i) =>
                i === 1 ? (
                  <span key={i} className="text-accent">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-body italic">
              &ldquo;{project.description}&rdquo;
            </p>

            <div className="flex flex-wrap gap-2 mb-16">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-[10px] font-black uppercase tracking-widest bg-background border border-border text-muted-foreground px-4 py-2 rounded-lg shadow-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-3"
                >
                  Visit Live Site <Globe size={18} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-3 bg-background"
                >
                  Explore Source <GithubIcon size={18} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Visuals & Quick Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-[45%] w-full flex flex-col gap-6"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-card border border-border bg-section-alt group">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-accent/5" />
              <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.info &&
                [
                  { label: "Timeline", value: project.info.duration },
                  { label: "Role", value: project.info.role },
                  { label: "Team", value: project.info.teamSize },
                  { label: "Status", value: project.info.status },
                ].map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-section-alt p-6 rounded-lg border border-border"
                  >
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-2">
                      {info.label}
                    </p>
                    <p className="text-foreground font-black font-heading tracking-tight">
                      {info.value}
                    </p>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
