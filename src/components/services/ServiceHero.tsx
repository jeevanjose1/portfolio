"use client";

import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SanityService } from "@/sanity/types";
import type { MainServiceItem } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

export default function ServiceHero({ service }: { service: SanityService | MainServiceItem }) {
  // @ts-expect-error - iconName exists on both types but LucideIcons indexing is dynamic
  const Icon = LucideIcons[service.iconName] || LucideIcons.HelpCircle;
  const relatedCategory = (service as MainServiceItem).relatedCategory || (service.isMain ? "Core Service" : "Specialized Service");
  // @ts-expect-error - highlight is a new field
  const rawHighlight = service.highlight;
  const highlightsList = typeof rawHighlight === 'string' && rawHighlight.trim()
    ? rawHighlight.split('\n').filter((l: string) => l.trim())
    : (service as MainServiceItem).heroFeatures || (service as SanityService).features || [];

  return (
    <section className="min-h-[72vh] flex items-center bg-background pt-20 md:pt-32 ">
      <div className="section-container w-full pt-0">
        <div className="mb-8">
          <Reveal delay={0.1}>
            <Link scroll={false}
              href="/services"
              className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground hover:text-accent flex items-center gap-2 transition-colors w-fit"
            >
              <ArrowLeft size={14} /> Back to Services
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
          {/* Main Title Card */}
          <Reveal
            width="100%"
            className="md:col-span-8"
            y={60}
            duration={1}
          >
            <div
              className="bg-section-alt rounded-lg p-7 sm:p-10 flex flex-col justify-between min-h-[320px] border border-border  h-full"
            >
              <div>
                <Reveal delay={0.2}>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-accent-10 text-accent text-[10px] font-extrabold uppercase tracking-[0.16em] mb-6 border border-accent-20 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    {relatedCategory}
                  </span>
                </Reveal>

                <Reveal delay={0.3} blur>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-[1.1] mb-6">
                    {service.title}
                  </h1>
                </Reveal>

                <Reveal delay={0.4} y={20}>
                  <p className="text-xl text-foreground font-serif italic mb-4 max-w-lg">
                    {service.tagline}
                  </p>
                </Reveal>

                <Reveal delay={0.5} y={20}>
                  <div className="space-y-4 max-w-lg">
                    <p className="text-muted-foreground text-lg leading-relaxed font-body">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal width="100%" delay={0.6} y={20}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link scroll={false}
                    href="/contact"
                    className="btn-primary w-full md:w-fit inline-flex items-center gap-2"
                  >
                    Start a Project
                    <ArrowRight size={18} />
                  </Link>
                  <Link scroll={false}
                    href="/works"
                    className="inline-flex w-full md:w-fit items-center justify-center gap-2 px-6 py-4 rounded-lg font-extrabold uppercase tracking-[0.16em] text-sm text-foreground bg-background border border-border hover:border-accent hover:bg-accent-5 transition-all duration-300"
                  >
                    View {relatedCategory}
                  </Link>
                </div>
              </Reveal>
            </div>
          </Reveal>

          {/* Right Column Stacked Cards */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {/* Visual/Icon Card */}
            <Reveal
              width="100%"
              delay={0.2}
              y={40}
              duration={1}
              className="flex-1"
            >
              <div
                className="bg-section-alt rounded-lg p-8 sm:p-10 border border-border flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[220px]  h-full"
              >
                <div className="absolute inset-0 opacity-[0.045] dark:opacity-[0.06] pattern-grid bg-[size:28px_28px]" />

                <div className="w-16 h-16 rounded-lg bg-background flex items-center justify-center mb-4 border border-border group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-sm shrink-0">
                  <Icon size={28} className="text-accent" />
                </div>
                <p className="text-foreground font-heading font-bold text-lg uppercase tracking-[0.16em] leading-snug relative z-10 mb-4">
                  {service.title.split(' ')[0]} <br /> Excellence
                </p>
              </div>
            </Reveal>

            {/* Highlights Card */}
            <Reveal
              width="100%"
              delay={0.4}
              y={20}
              duration={1}
            >
              <div
                className="bg-accent rounded-lg p-6 text-background flex flex-col justify-center border border-accent-20  h-full"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] bg-background-20 px-3 py-1 rounded-lg backdrop-blur-sm">
                    Highlights
                  </span>
                </div>
                <ul className="space-y-3">
                  {highlightsList.slice(0, 3).map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <LucideIcons.CheckCircle2 size={16} className="text-background-80 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-body text-background-90 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
