"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Smartphone, Cloud, CheckCircle2, ArrowRight } from "lucide-react";
import type { MainServiceItem } from "@/lib/data";

const iconMap = { Monitor, Smartphone, Cloud } as const;

export default function ServiceHero({ service }: { service: MainServiceItem }) {
  const Icon = iconMap[service.iconName];

  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="section-container w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto"
        >
          {/* Main Title Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 bg-section-alt rounded-lg p-8 sm:p-10 flex flex-col justify-between min-h-[320px] border border-border"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest mb-6 border border-accent/20 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                {service.relatedCategory}
              </span>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-foreground leading-[1.1] mb-6">
                {service.title}
              </h1>
              
              <p className="text-xl text-foreground font-serif italic mb-4 max-w-lg">
                {service.tagline}
              </p>
              
              <div className="space-y-4 max-w-lg">
                <p className="text-muted-foreground text-lg leading-relaxed font-body">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-lg font-black uppercase tracking-widest text-sm text-foreground bg-background border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                View {service.relatedCategory}
              </Link>
            </div>
          </motion.div>

          {/* Right Column Stacked Cards */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {/* Visual/Icon Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900 rounded-lg p-8 sm:p-10 border border-white/5 flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[220px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-accent/10 opacity-50" />
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
              
              <div className="w-16 h-16 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 group-hover:scale-110 transition-transform duration-500 relative z-10">
                <Icon size={28} className="text-accent" />
              </div>
              <p className="text-white font-heading font-bold text-lg uppercase tracking-widest leading-snug relative z-10 mb-4">
                {service.title.split(' ')[0]} <br /> Excellence
              </p>
              
              <div className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg font-black uppercase tracking-widest text-xs relative z-10 border border-white/10">
                {service.startingPrice}
              </div>
            </motion.div>

            {/* Highlights Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-accent rounded-lg p-6 text-white flex flex-col justify-center border border-accent/20 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-lg backdrop-blur-md">
                  Highlights
                </span>
              </div>
              <ul className="space-y-3">
                {service.heroFeatures.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-white/80 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body text-white/90 leading-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
