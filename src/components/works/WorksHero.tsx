"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight, BarChart3, FolderGit2, Gauge, Sparkles } from "lucide-react";
import { projectsData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function WorksHero() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="min-h-[84vh] flex items-center  pb-8 transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="md:col-span-7 bg-section-alt rounded-lg p-7 sm:p-10 min-h-[430px] border border-border shadow-card flex flex-col justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-accent text-background text-[10px] font-black uppercase tracking-widest mb-6">
                <FolderGit2 size={14} />
                Selected Portfolio
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground leading-[1.08] mb-5">
                Case studies shaped by product outcomes.
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                A curated collection of full-stack applications, mobile experiences, and technical experiments built with precision and purpose.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary gap-2">
                Explore Projects
                <ArrowDown size={16} />
              </a>
              <Link href="/contact" className="btn-secondary gap-2">
                Build Something Similar
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <div className="md:col-span-5 grid grid-cols-1 gap-4">
            <motion.div
              custom={1}
              variants={fadeUp}
              className="bg-primary rounded-lg p-7 sm:p-8 min-h-[210px] border border-border shadow-card text-background relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.28)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-lg bg-background/10 border border-background/15 flex items-center justify-center mb-8">
                  <Sparkles size={22} className="text-accent" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-background/55 mb-3">
                  Portfolio Signal
                </p>
                <h2 className="text-3xl font-heading font-black leading-tight">
                  Practical builds, measured results.
                </h2>
              </div>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              className="grid grid-cols-1 gap-3"
            >
              {featuredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/works/${project.slug}`}
                  className="bg-section-alt rounded-lg p-4 border border-border shadow-card flex items-center justify-between gap-4 group hover:border-accent/35 transition-colors"
                >
                  <div>
                    <p className="text-sm font-heading font-black text-foreground leading-snug">
                      {project.title}
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">
                      {project.categories.filter((category) => category !== "All")[0]}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { label: "Projects", value: `${projectsData.length}+`, icon: FolderGit2 },
              { label: "Core Focus", value: "SaaS / Apps", icon: Gauge },
              { label: "Outcome", value: "Launch Ready", icon: BarChart3 },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="bg-section-alt rounded-lg p-5 sm:p-6 border border-border shadow-card flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-2xl sm:text-3xl font-heading font-black text-foreground">
                      {item.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">{item.label}</p>
                  </div>
                  <div className="h-11 w-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
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
