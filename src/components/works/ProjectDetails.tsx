"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Activity, BarChart3, Bell, BellRing, Bookmark, BookOpen, Calendar, Camera, Clock, CreditCard, Database, DollarSign, Download, FileCode, FileText, Filter, Heart, Key, LayoutDashboard, Lock, Map, MessageSquare, Package, Search, Shield, ShieldCheck, ShoppingCart, Smartphone, TrendingUp, Truck, UserCircle, Users, Zap } from "lucide-react";
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
    <div className="bg-white">
      {/* SECTION 1 — BACK NAVIGATION */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4">
        <div className="section-container flex items-center justify-between">
          <Link href="/works" className="text-gray-600 hover:text-accent font-medium flex items-center gap-2 transition-colors">
            <ArrowLeft size={18} />
            Back to Works
          </Link>
          <span className="hidden sm:block text-sm font-semibold text-gray-400 truncate max-w-xs">
            {project.title}
          </span>
        </div>
      </div>

      {/* SECTION 2 — PROJECT HERO */}
      <section className="bg-gray-50 pt-16 pb-20">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-[55%]"
            >
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  {project.categories.filter(c => c !== "All").join(" · ")}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map(tag => (
                  <span key={tag} className="text-sm font-semibold bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                    Live Demo
                    <ExternalLink size={18} />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 bg-white">
                    View Code
                    <GithubIcon size={18} />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-[45%] w-full"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 mb-6 bg-gray-200 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Timeline</p>
                  <p className="text-primary font-medium">{project.projectInfo.duration}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Role</p>
                  <p className="text-primary font-medium">{project.projectInfo.role}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Team Size</p>
                  <p className="text-primary font-medium">{project.projectInfo.teamSize}</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Status</p>
                  <p className="text-primary font-medium">{project.projectInfo.status}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROJECT OVERVIEW */}
      <section className="py-20 lg:py-24 border-b border-gray-100">
        <div className="section-container flex flex-col lg:flex-row gap-16">
          <div className="lg:w-[65%]">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Project Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                When {project.projectInfo.client} approached us, they were struggling with legacy infrastructure that couldn&apos;t keep up with their rapid growth. The problem was clear: their existing platform was slow, prone to downtime, and difficult to scale.
              </p>
              <p className="mb-6">
                Our solution was to architect a modern, scalable application from the ground up. We focused on decoupling the frontend from the backend to ensure high performance and flexibility. By leveraging modern cloud services, we built a resilient system capable of handling traffic spikes effortlessly.
              </p>
              <p>
                The biggest challenge was migrating data without any downtime. We solved this by implementing a dual-write strategy and carefully orchestrating the transition over a weekend. The result is a lightning-fast, robust platform that sets them up for future success.
              </p>
            </div>
          </div>
          
          <div className="lg:w-[35%]">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-lg font-heading font-bold text-primary mb-6">Project Info</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-500">Client</span>
                  <span className="font-medium text-primary text-right">{project.projectInfo.client}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-500">Industry</span>
                  <span className="font-medium text-primary text-right">{project.projectInfo.industry}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-4">
                  <span className="text-gray-500">Year</span>
                  <span className="font-medium text-primary text-right">{project.projectInfo.year}</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-gray-500">Platform</span>
                  <span className="font-medium text-primary text-right">{project.projectInfo.platform}</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-sm text-gray-600 mb-4 font-medium">Interested in a similar project?</p>
                <Link href="/contact" className="btn-primary w-full inline-flex justify-center">
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — KEY FEATURES */}
      <section className="bg-gray-50 py-20 lg:py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Key Features</h2>
            <div className="w-12 h-1 bg-accent rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feature, i) => {
              const Icon = iconMap[feature.iconName] || Search;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-accent">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — TECH STACK DEEP DIVE */}
      <section className="py-20 lg:py-24">
        <div className="section-container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Technologies Used</h2>
            <div className="w-12 h-1 bg-accent rounded-full mx-auto" />
          </div>
          <div className="space-y-12">
            {project.techStack.frontend.length > 0 && (
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  Frontend Layer
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.frontend.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 font-medium text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">We chose these frontend technologies to ensure a highly responsive, accessible, and fast user interface, delivering a premium user experience across all devices.</p>
              </div>
            )}

            {project.techStack.backend.length > 0 && (
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  Backend Layer
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.backend.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-green-50 text-green-700 font-medium text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">The backend architecture was designed for high throughput and scalability. These technologies allow us to handle complex business logic and secure API routing efficiently.</p>
              </div>
            )}

            {project.techStack.database.length > 0 && (
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-500" />
                  Database Layer
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.database.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-orange-50 text-orange-700 font-medium text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">A robust database strategy was crucial. We utilized these systems to guarantee data integrity, fast query times, and reliable caching for frequently accessed resources.</p>
              </div>
            )}

            {project.techStack.devops.length > 0 && (
              <div>
                <h3 className="text-xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500" />
                  DevOps & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.devops.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-purple-50 text-purple-700 font-medium text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">Automated CI/CD pipelines and containerized deployments ensure that we can ship features rapidly and reliably with zero downtime.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 6 — RESULTS / METRICS */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 lg:py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Project Results</h2>
            <div className="w-12 h-1 bg-blue-400 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {project.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-xl shadow-blue-900/30"
              >
                <div className="text-4xl lg:text-5xl font-heading font-bold text-accent mb-2">
                  <CountUp metric={metric} />
                </div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{metric.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-blue-100 max-w-2xl mx-auto text-lg">
            The launch was highly successful, exceeding all initial performance and user adoption KPIs. The scalable architecture ensures the platform is ready for the next phase of exponential growth.
          </p>
        </div>
      </section>

      {/* SECTION 7 — MORE PROJECTS */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="section-container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Other Projects You Might Like</h2>
              <div className="w-12 h-1 bg-accent rounded-full" />
            </div>
            <Link href="/works" className="hidden sm:inline-flex text-accent font-semibold hover:text-blue-700 transition-colors">
              View All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/works" className="inline-flex text-accent font-semibold hover:text-blue-700 transition-colors">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>
      
      <CTABanner />
    </div>
  );
}
