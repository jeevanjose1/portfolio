"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SanityService } from "@/sanity/types";
import type { MainServiceItem } from "@/lib/data";

export default function ServiceHero({ service }: { service: SanityService | MainServiceItem }) {
  // @ts-expect-error - iconName exists on both types but LucideIcons indexing is dynamic
  const Icon = LucideIcons[service.iconName] || LucideIcons.HelpCircle;
  const relatedCategory = (service as MainServiceItem).relatedCategory || (service.isMain ? "Core Service" : "Specialized Service");
  const heroFeatures = (service as MainServiceItem).heroFeatures || (service as SanityService).features || [];

  return (
    <section className="min-h-[72vh] flex items-center bg-background pt-32 pb-6">
      <div className="section-container w-full pt-0">
        <div className="mb-8">
          <Link
            href="/services"
            className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-accent flex items-center gap-2 transition-colors w-fit"
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>
        </div>
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
            className="md:col-span-8 bg-section-alt rounded-lg p-7 sm:p-10 flex flex-col justify-between min-h-[320px] border border-border shadow-card"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] text-accent text-[10px] font-black uppercase tracking-widest mb-6 border border-[color-mix(in_srgb,var(--color-accent)_20%,transparent)] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                {relatedCategory}
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
                className="inline-flex items-center gap-2 px-6 py-4 rounded-lg font-black uppercase tracking-widest text-sm text-foreground bg-background border border-border hover:border-accent hover:bg-[color-mix(in_srgb,var(--color-accent)_5%,transparent)] transition-all duration-300"
              >
                View {relatedCategory}
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
              className="bg-section-alt rounded-lg p-8 sm:p-10 border border-border flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[220px] shadow-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-50" />
              <div className="absolute inset-0 opacity-[0.045] dark:opacity-[0.06] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px]" />

              <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center mb-4 border border-border group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-sm">
                <Icon size={28} className="text-accent" />
              </div>
              <p className="text-foreground font-heading font-bold text-lg uppercase tracking-widest leading-snug relative z-10 mb-4">
                {service.title.split(' ')[0]} <br /> Excellence
              </p>


            </motion.div>

            {/* Highlights Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-accent rounded-lg p-6 text-background flex flex-col justify-center border border-[color-mix(in_srgb,var(--color-accent)_20%,transparent)] shadow-card"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest bg-[color-mix(in_srgb,var(--color-background)_20%,transparent)] px-3 py-1 rounded-lg backdrop-blur-sm">
                  Highlights
                </span>
              </div>
              <ul className="space-y-3">
                {heroFeatures.slice(0, 3).map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <LucideIcons.CheckCircle2 size={16} className="text-[color-mix(in_srgb,var(--color-background)_80%,transparent)] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body text-[color-mix(in_srgb,var(--color-background)_90%,transparent)] leading-tight">
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
