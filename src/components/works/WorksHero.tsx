"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, BarChart3, FolderGit2, Gauge, Sparkles } from "lucide-react";

import { SanityProject } from "@/sanity/types";
import type { ProjectItem } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

export default function WorksHero({ projects }: { projects: (SanityProject | ProjectItem)[] }) {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="min-h-[100svh] flex items-center pb-12 transition-colors duration-300">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">

          {/* Text card */}
          <Reveal
            width="100%"
            className="md:col-span-7"
            y={60}
            duration={1}
          >
            <div
              className="bg-section-alt rounded-xl p-10 sm:p-12 min-h-[500px] border border-card-border shadow-card flex flex-col justify-between h-full"
               
            >
              <div>
                <Reveal delay={0.2}>
                  <span className="hero-badge">
                    <FolderGit2 size={13} />
                    Selected Portfolio
                  </span>
                </Reveal>
                <Reveal delay={0.3} blur>
                  <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-extrabold text-foreground leading-[1.08] mb-5">
                    Case studies shaped by product outcomes.
                  </h1>
                </Reveal>
                <Reveal delay={0.4} y={20}>
                  <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                    A curated collection of full-stack applications, mobile experiences, and technical experiments built with precision and purpose.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.5} y={20}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="#projects" className="btn-primary gap-2.5">
                    Explore Projects <ArrowDown size={15} />
                  </a>
                  <Link href="/contact" className="btn-secondary gap-2.5">
                    Build Something Similar <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* Right column */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5">
            <Reveal
              width="100%"
              delay={0.3}
              y={40}
              duration={1}
              className="h-full"
            >
              <div
                className="bg-section-alt rounded-xl p-8 sm:p-10 min-h-[220px] border border-card-border shadow-card text-foreground relative overflow-hidden h-full"
                 
              >
                <div className="absolute inset-0 opacity-[0.04] pattern-grid bg-[size:28px_28px] rounded-xl" />
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-accent-10 border border-accent-15 flex items-center justify-center mb-8">
                    <Sparkles size={22} className="text-accent" />
                  </div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-3">Portfolio Signal</p>
                  <h2 className="text-3xl font-heading font-extrabold leading-tight">Practical builds, measured results.</h2>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-3">
              {featuredProjects.map((project, i) => (
                <Reveal
                  key={('_id' in project ? project._id : project.title) as string}
                  width="100%"
                  delay={0.5 + i * 0.1}
                  y={20}
                >
                  <Link
                    href={`/works/${project.slug}`}
                    className="bg-section-alt rounded-xl p-4 border border-card-border shadow-card flex items-center justify-between gap-4 group hover:border-accent-30 transition-all duration-300 block"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-heading font-extrabold text-foreground leading-snug">{project.title}</p>
                        <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mt-1">
                          {project.categories?.[0] || "Project"}
                        </p>
                      </div>
                      <ArrowRight size={15} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Projects",   value: `${projects.length}+`, icon: FolderGit2 },
              { label: "Core Focus", value: "SaaS / Apps",             icon: Gauge },
              { label: "Outcome",    value: "Launch Ready",            icon: BarChart3 },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.label}
                  width="100%"
                  delay={0.7 + i * 0.1}
                  y={20}
                  blur
                >
                  <div
                    className="bg-section-alt rounded-xl p-6 sm:p-8 border border-card-border shadow-card flex items-center justify-between gap-4 h-full"
                     
                  >
                    <div>
                      <p className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground">{item.value}</p>
                      <p className="text-sm text-muted-foreground mt-1.5 font-medium">{item.label}</p>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-accent-10 border border-accent-15 flex items-center justify-center text-accent shrink-0">
                      <Icon size={20} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
