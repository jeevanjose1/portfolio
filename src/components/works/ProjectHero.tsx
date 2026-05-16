"use client";

import { Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { NormalizedProject } from "./types";
import { Reveal } from "@/components/animations/Reveal";
import ImageLightbox from "@/components/ui/ImageLightbox";

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
    <section className="bg-background">
      <div className="section-container">
        <div className="mb-8">
          <Reveal delay={0.1}>
            <Link
              href="/works"
              className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground hover:text-accent flex items-center gap-2 transition-colors w-fit"
            >
              <ArrowLeft size={14} /> Back to Works
            </Link>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Info Card */}
          <Reveal
            width="100%"
            className="lg:w-[55%]"
            y={60}
            duration={1}
          >
            <div
              className="bg-section-alt rounded-lg p-8 sm:p-12 border border-border h-full flex flex-col"
            >
              <div className="mb-8">
                <Reveal delay={0.2} y={10}>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-lg bg-accent-10 text-accent text-[10px] font-extrabold uppercase tracking-[0.16em]">
                    {project.categories.find((c) => c !== "All") || "Project"}
                  </span>
                </Reveal>
              </div>
              <Reveal delay={0.3} blur>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-tight mb-8">

                  {project.title}

                </h1>
              </Reveal>
              <Reveal delay={0.4} y={20}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-body italic">
                  &ldquo;{project.description}&rdquo;
                </p>
              </Reveal>

              <div className="flex flex-wrap gap-2 mb-16">
                {project.tags.map((tag, i) => (
                  <Reveal
                    key={tag}
                    delay={0.5 + i * 0.1}
                    y={10}
                    scale={0.9}
                  >
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-[0.16em] bg-background border border-border text-muted-foreground px-4 py-2 rounded-lg shadow-sm block"
                    >
                      {tag}
                    </span>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.6} y={20}>
                <div className="flex flex-wrap items-center gap-4 mt-auto">
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
              </Reveal>
            </div>
          </Reveal>

          {/* Visuals & Quick Info */}
          <div className="lg:w-[45%] w-full flex flex-col gap-6">
            <Reveal
              width="100%"
              delay={0.3}
              scale={1.05}
              duration={1.2}
            >
              <ImageLightbox src={project.image} alt={project.title}>
                <div className="relative aspect-video rounded-lg overflow-hidden  border border-border bg-section-alt group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-accent/5" />
                  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px]" />
                </div>
              </ImageLightbox>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {project.info &&
                [
                  { label: "Timeline", value: project.info.duration },
                  { label: "Role", value: project.info.role },
                  { label: "Team", value: project.info.teamSize },
                  { label: "Status", value: project.info.status },
                ].map((info, i) => (
                  <Reveal
                    key={info.label}
                    width="100%"
                    delay={0.5 + i * 0.1}
                    y={20}
                    blur
                  >
                    <div
                      className="bg-section-alt p-6 rounded-lg border border-border h-full"
                    >
                      <p className="text-[10px] text-muted-foreground uppercase font-extrabold tracking-[0.16em] mb-2">
                        {info.label}
                      </p>
                      <p className="text-foreground font-extrabold font-heading tracking-tight">
                        {info.value}
                      </p>
                    </div>
                  </Reveal>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
