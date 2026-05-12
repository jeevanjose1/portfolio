"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Activity, BarChart3, Bell, BellRing, Bookmark, BookOpen, Calendar, Camera, Clock, CreditCard, Database, DollarSign, Download, FileCode, FileText, Filter, Heart, Key, LayoutDashboard, Lock, Map, MessageSquare, Package, Search, Shield, ShieldCheck, ShoppingCart, Smartphone, TrendingUp, Truck, UserCircle, Users, Zap, Globe } from "lucide-react";
import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/works/ProjectCard";
import CTABanner from "@/components/home/CTABanner";
import type { ProjectItem, ProjectMetric } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Activity, BarChart3, Bell, BellRing, Bookmark, BookOpen, Calendar, Camera, Clock, CreditCard, Database, DollarSign, Download, FileCode, FileText, Filter, Heart, Key, LayoutDashboard, Lock, Map, MessageSquare, Package, Search, Shield, ShieldCheck, ShoppingCart, Smartphone, TrendingUp, Truck, UserCircle, Users, Zap
};

const GithubIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function CountUp({ metric }: { metric: ProjectMetric }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { duration: 2500, bounce: 0 });
  const displayValue = useTransform(springValue, (current) =>
    Number.isInteger(metric.numericValue) ? Math.floor(current).toString() : current.toFixed(2).replace(/\.?0+$/, '')
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(metric.numericValue);
    }
  }, [isInView, springValue, metric.numericValue]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{displayValue}</motion.span>
      {metric.suffix && <span>{metric.suffix}</span>}
    </span>
  );
}

export default function ProjectDetails({ project }: { project: ProjectItem }) {
  const otherProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="bg-background transition-colors duration-300">
      {/* SECTION 1 — BACK NAVIGATION */}
      <div className="bg-background/80 backdrop-blur-md pt-6 border-b border-border">
        <div className="section-container flex items-center justify-between">
          <Link href="/works" className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-accent flex items-center gap-2 transition-colors">
            <ArrowLeft size={14} />
            Back to Works
          </Link>
          <span className="hidden sm:block text-[10px] font-black text-accent uppercase tracking-widest truncate max-w-xs">
            {project.title}
          </span>
        </div>
      </div>

      {/* SECTION 2 — PROJECT HERO */}
      <section className="bg-background pt-10 pb-6">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Column — Info Card Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-[55%] bg-section-alt rounded-lg p-10 sm:p-14 border border-border"
            >
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-1.5 rounded-lg bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest">
                  {project.categories.filter(c => c !== "All")[0]}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground leading-tight mb-8">
                {project.title.split(' ').map((word, i) => i === 1 ? <span key={i} className="text-accent">{word} </span> : word + ' ')}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-body italic">
                &ldquo;{project.longDescription}&rdquo;
              </p>

              <div className="flex flex-wrap gap-2 mb-16">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-background border border-border text-muted-foreground px-4 py-2 rounded-lg shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
                    Visit Live Site
                    <Globe size={18} />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-3 bg-background">
                    Explore Source
                    <GithubIcon size={18} />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right Column — Bento Visuals */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-[45%] w-full flex flex-col gap-6"
            >
              {/* Main Visual */}
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl shadow-black/5 border border-border bg-section-alt group">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Timeline", value: project.projectInfo.duration },
                  { label: "Role", value: project.projectInfo.role },
                  { label: "Team Size", value: project.projectInfo.teamSize },
                  { label: "Status", value: project.projectInfo.status }
                ].map((info) => (
                  <div key={info.label} className="bg-section-alt p-6 rounded-lg border border-border">
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-2">{info.label}</p>
                    <p className="text-foreground font-black font-heading tracking-tight">{info.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROJECT OVERVIEW */}
      <section className="py-12 lg:py-16">
        <div className="section-container flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-[60%]">
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-4">{"//"} Case Study</p>
            <h2 className="text-3xl font-heading font-black text-foreground mb-8">Strategic Overview.</h2>
            <div className="prose prose-lg text-muted-foreground font-body leading-relaxed max-w-none">
              <p className="mb-8 text-xl text-foreground font-medium italic">
                Developing a solution that bridges the gap between complex engineering and seamless user experience.
              </p>
              <p className="mb-8">
                The objective for <span className="font-bold text-foreground">{project.projectInfo.client}</span> was to transform their digital footprint. We identified critical bottlenecks in their existing workflow that were impeding operational efficiency.
              </p>
              <p className="mb-8">
                Our approach prioritized modularity and performance. By architecting a unified system, we eliminated data silos and provided a singular, high-performance interface for both internal stakeholders and end-users.
              </p>
            </div>
          </div>

          <div className="lg:w-[40%]">
            <div className="bg-background border border-border rounded-lg p-10 shadow-2xl shadow-black/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-lg blur-3xl opacity-50 -mr-16 -mt-16" />

              <h3 className="text-sm font-black uppercase tracking-widest text-foreground mb-8 relative z-10">Project Intelligence</h3>
              <div className="space-y-6 mb-10 relative z-10">
                {[
                  { label: "Client", value: project.projectInfo.client },
                  { label: "Industry", value: project.projectInfo.industry },
                  { label: "Year", value: project.projectInfo.year },
                  { label: "Platform", value: project.projectInfo.platform }
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
                    <span className="font-black text-foreground font-heading tracking-tight">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="bg-section-alt p-8 rounded-lg text-center relative z-10 border border-border">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6">Partner with me</p>
                <Link href="/contact" className="btn-primary w-full inline-flex justify-center uppercase tracking-widest text-xs font-black py-4">
                  START PROJECT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — KEY FEATURES */}
      <section className="bg-section-alt py-12 lg:py-16">
        <div className="section-container">
          <div className="mb-20">
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">{"//"} Features</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">Key Modules.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, i) => {
              const Icon = iconMap[feature.iconName] || Search;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-background p-10 rounded-lg border border-border shadow-sm hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-full bg-section-alt border border-border flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-background transition-all duration-300">
                    <Icon size={24} className="text-accent group-hover:text-background transition-colors" />
                  </div>
                  <h3 className="text-xl font-heading font-black text-foreground mb-4 group-hover:text-accent transition-colors duration-300 uppercase tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — TECH STACK */}
      <section className="py-12 lg:py-16">
        <div className="section-container max-w-5xl">
          <div className="mb-20">
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">{"//"} Architecture</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">The Tech Stack.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { title: "Frontend Layer", tech: project.techStack.frontend, color: "bg-blue-500" },
              { title: "Backend Layer", tech: project.techStack.backend, color: "bg-green-500" },
              { title: "Database Layer", tech: project.techStack.database, color: "bg-orange-500" },
              { title: "DevOps & Infrastructure", tech: project.techStack.devops, color: "bg-purple-500" }
            ].map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-3 h-3 rounded-full ${layer.color} shadow-[0_0_10px_rgba(0,0,0,0.1)]`} />
                  <h3 className="text-sm font-black uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">{layer.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {layer.tech.map(t => (
                    <span key={t} className="px-4 py-2 bg-section-alt text-muted-foreground font-bold text-[10px] uppercase tracking-widest rounded-lg border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="h-px bg-border w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — RESULTS / METRICS — Redesigned for impact */}
      <section
        className="py-12 lg:py-16 relative overflow-hidden transition-colors duration-300 border-y border-white/5"
        style={{ backgroundColor: 'var(--color-contrast-bg)' }}
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-4 opacity-80">{"//"} Outcomes</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-white">Impact Delivered.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {project.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-md rounded-lg p-10 text-center border border-white/10 group hover:border-accent/50 transition-all duration-300"
              >
                <div className="text-4xl lg:text-5xl font-heading font-black text-white mb-4 group-hover:text-accent transition-colors">
                  <CountUp metric={metric} />
                </div>
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">{metric.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-body leading-relaxed italic">
              &ldquo;The architecture designed for this project provides a robust foundation for future scalability, ensuring consistent performance even under heavy loads.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — MORE PROJECTS */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">{"//"} More Projects</p>
              <h2 className="text-4xl font-heading font-black text-foreground">Discover Further.</h2>
            </div>
            <Link href="/works" className="text-sm font-black uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
              View All Portfolio <ArrowLeft size={16} className="rotate-180" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
