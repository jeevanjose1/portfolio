"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight, BarChart3, FolderGit2, Gauge, Sparkles } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function WorksHero({ projects }: { projects: any[] }) {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="min-h-[100svh] flex items-center pb-12 transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">

          {/* Text card */}
          <motion.div
            custom={0} variants={fadeUp}
            className="md:col-span-7 bg-section-alt rounded-2xl p-10 sm:p-12 min-h-[500px] border border-[var(--color-card-border)] flex flex-col justify-between"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div>
              <span className="hero-badge">
                <FolderGit2 size={13} />
                Selected Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-black text-foreground leading-[1.08] mb-5">
                Case studies shaped by product outcomes.
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                A curated collection of full-stack applications, mobile experiences, and technical experiments built with precision and purpose.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary gap-2.5">
                Explore Projects <ArrowDown size={15} />
              </a>
              <Link href="/contact" className="btn-secondary gap-2.5">
                Build Something Similar <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5">
            <motion.div
              custom={1} variants={fadeUp}
              className="bg-section-alt rounded-2xl p-8 sm:p-10 min-h-[220px] border border-[var(--color-card-border)] text-foreground relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px] rounded-2xl" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] flex items-center justify-center mb-8">
                  <Sparkles size={22} className="text-accent" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Portfolio Signal</p>
                <h2 className="text-3xl font-heading font-black leading-tight">Practical builds, measured results.</h2>
              </div>
            </motion.div>

            <motion.div custom={2} variants={fadeUp} className="grid grid-cols-1 gap-3">
              {featuredProjects.map((project) => (
                <Link
                  key={project._id}
                  href={`/works/${project.slug}`}
                  className="bg-section-alt rounded-xl p-4 border border-[var(--color-card-border)] flex items-center justify-between gap-4 group hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] transition-all duration-300"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div>
                    <p className="text-sm font-heading font-black text-foreground leading-snug">{project.title}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">
                      {project.categories?.[0] || "Project"}
                    </p>
                  </div>
                  <ArrowRight size={15} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div custom={3} variants={fadeUp} className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Projects",   value: `${projects.length}+`, icon: FolderGit2 },
              { label: "Core Focus", value: "SaaS / Apps",             icon: Gauge },
              { label: "Outcome",    value: "Launch Ready",            icon: BarChart3 },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-section-alt rounded-2xl p-6 sm:p-8 border border-[var(--color-card-border)] flex items-center justify-between gap-4"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div>
                    <p className="text-2xl sm:text-3xl font-heading font-black text-foreground">{item.value}</p>
                    <p className="text-sm text-muted-foreground mt-1.5 font-medium">{item.label}</p>
                  </div>
                  <div className="h-12 w-12 rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] flex items-center justify-center text-accent shrink-0">
                    <Icon size={20} />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
