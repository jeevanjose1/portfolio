"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft, Activity, BarChart3, Bell, BellRing, Bookmark, BookOpen,
  Calendar, Camera, Clock, CreditCard, Database, DollarSign, Download,
  FileCode, FileText, Filter, Heart, Key, LayoutDashboard, Lock, Map,
  MessageSquare, Package, Search, Shield, ShieldCheck, ShoppingCart,
  Smartphone, TrendingUp, Truck, UserCircle, Users, Zap, Globe
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { projectsData } from "@/lib/data";
import ProjectCard from "@/components/works/ProjectCard";
import CTABanner from "@/components/home/CTABanner";
import type { ProjectItem, ProjectMetric } from "@/lib/data";
import { SanityProject } from "@/sanity/types";
import { urlForImage } from "@/sanity/lib/image";

// --- Types & Helpers ---

interface NormalizedProject {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  publishedDate: string;
  body?: any;
  // Professional Metadata (optional for Sanity projects initially)
  info?: {
    client: string;
    industry: string;
    year: string;
    platform: string;
    duration: string;
    role: string;
    teamSize: string;
    status: string;
  };
  features?: { title: string; description: string; iconName: string }[];
  techStack?: { frontend: string[]; backend: string[]; database: string[]; devops: string[] };
  metrics?: ProjectMetric[];
}

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
    if (isInView) springValue.set(metric.numericValue);
  }, [isInView, springValue, metric.numericValue]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{displayValue}</motion.span>
      {metric.suffix && <span>{metric.suffix}</span>}
    </span>
  );
}

// --- Main Component ---

export default function ProjectDetails({ project }: { project: ProjectItem | SanityProject }) {
  // 1. Normalize Data Structure
  const isSanity = '_id' in project;

  const p: NormalizedProject = isSanity ? {
    id: project._id,
    title: project.title,
    description: project.description,
    image: project.mainImage ? urlForImage(project.mainImage).url() : "/images/project-1.svg",
    categories: project.categories || [],
    tags: project.categories || [],
    liveUrl: project.link,
    githubUrl: project.githubUrl,
    publishedDate: project.publishedAt ? new Date(project.publishedAt).toLocaleDateString() : "2024",
    body: project.body,
    info: project.projectInfo || {
      client: "Private Client",
      industry: "Technology",
      year: project.publishedAt ? new Date(project.publishedAt).getFullYear().toString() : "2024",
      platform: "Web Application",
      duration: "Ongoing",
      role: "Lead Developer",
      teamSize: "1 Person",
      status: "Live"
    },
    features: project.features,
    techStack: project.techStack,
    metrics: project.metrics?.map(m => ({
      ...m,
      value: `${m.numericValue}${m.suffix || ''}`
    }))
  } : {
    id: project.id,
    title: project.title,
    description: project.longDescription,
    image: project.image,
    categories: project.categories,
    tags: project.tags,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    publishedDate: project.projectInfo.year,
    info: project.projectInfo,
    features: project.features,
    techStack: project.techStack,
    metrics: project.metrics
  };

  const otherProjects = projectsData.filter((item) => item.id !== p.id).slice(0, 3);

  return (
    <div className="bg-background transition-colors duration-300">
      {/* HEADER NAVIGATION */}
      <div className="bg-background/80 backdrop-blur-md pt-6 border-b border-border sticky top-0 z-50">
        <div className="section-container flex items-center justify-between h-12">
          <Link href="/works" className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-accent flex items-center gap-2 transition-colors">
            <ArrowLeft size={14} /> Back to Works
          </Link>
          <span className="hidden sm:block text-[10px] font-black text-accent uppercase tracking-widest truncate max-w-xs">
            {p.title}
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-background pt-10 pb-6">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:w-[55%] bg-section-alt rounded-lg p-8 sm:p-12 border border-border shadow-card"
            >
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-1.5 rounded-lg bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest">
                  {p.categories.find(c => c !== "All") || "Project"}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground leading-tight mb-8">
                {p.title.split(' ').map((word, i) => i === 1 ? <span key={i} className="text-accent">{word} </span> : word + ' ')}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-body italic">
                &ldquo;{p.description}&rdquo;
              </p>

              <div className="flex flex-wrap gap-2 mb-16">
                {p.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="text-[10px] font-black uppercase tracking-widest bg-background border border-border text-muted-foreground px-4 py-2 rounded-lg shadow-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-3">
                    Visit Live Site <Globe size={18} />
                  </a>
                )}
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-3 bg-background">
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
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-accent/5" />
                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {p.info && [
                  { label: "Timeline", value: p.info.duration },
                  { label: "Role", value: p.info.role },
                  { label: "Team", value: p.info.teamSize },
                  { label: "Status", value: p.info.status }
                ].map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="bg-section-alt p-6 rounded-lg border border-border"
                  >
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mb-2">{info.label}</p>
                    <p className="text-foreground font-black font-heading tracking-tight">{info.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASE STUDY CONTENT */}
      <section className="py-12 lg:py-16">
        <div className="section-container flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-[62%]">
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-4">{"//"} Strategy</p>
            <h2 className="text-3xl font-heading font-black text-foreground mb-8">Case Study Overview.</h2>
            <div className="prose prose-invert prose-lg text-muted-foreground font-body leading-relaxed max-w-none">
              {p.body ? (
                <PortableText value={p.body} />
              ) : (
                <p>Detailed case study content is being finalized for this project.</p>
              )}
            </div>
          </div>

          <div className="lg:w-[38%]">
            <div className="bg-background border border-border rounded-lg p-8 sm:p-10 shadow-card relative overflow-hidden">
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground mb-8 relative z-10">Project Intelligence</h3>
              <div className="space-y-6 mb-10 relative z-10">
                {p.info && [
                  { label: "Client", value: p.info.client },
                  { label: "Industry", value: p.info.industry },
                  { label: "Year", value: p.info.year },
                  { label: "Platform", value: p.info.platform }
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

      {/* DYNAMIC FEATURES & TECH (IF AVAILABLE) */}
      {p.features && (
        <section className="bg-section-alt py-12 lg:py-16">
          <div className="section-container">
            <h2 className="text-4xl font-heading font-black text-foreground mb-12">Core Features.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {p.features.map((feature, i) => {
                const Icon = iconMap[feature.iconName] || Search;
                return (
                  <div key={feature.title} className="bg-background p-10 rounded-lg border border-border shadow-sm group">
                    <div className="w-12 h-12 rounded-full bg-section-alt border border-border flex items-center justify-center mb-8 group-hover:bg-accent transition-all">
                      <Icon size={24} className="text-accent group-hover:text-background" />
                    </div>
                    <h3 className="text-xl font-heading font-black text-foreground mb-4 uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm font-body">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* METRICS (IF AVAILABLE) */}
      {p.metrics && (
        <section className="py-12 lg:py-16 bg-contrast-bg relative border-y border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="section-container relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {p.metrics.map((metric, i) => (
                <div key={metric.label} className="bg-white/5 backdrop-blur-md rounded-lg p-10 text-center border border-white/10">
                  <div className="text-4xl lg:text-5xl font-heading font-black text-white mb-4">
                    <CountUp metric={metric} />
                  </div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED PROJECTS */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="section-container">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl font-heading font-black text-foreground">Explore More.</h2>
            <Link href="/works" className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
              View All Works →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
