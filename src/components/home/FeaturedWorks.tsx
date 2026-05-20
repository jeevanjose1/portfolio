"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { featuredWorksData } from "@/lib/data";
import { SanityProject } from "@/sanity/types";
import { urlForImage } from "@/sanity/lib/image";
import { Reveal } from "@/components/animations/Reveal";

export default function FeaturedWorks({ projects }: { projects: SanityProject[] }) {
  const displayData = projects.length > 0 ? projects : featuredWorksData;

  return (
    <section
      id="works"
      className="bg-section-alt transition-colors duration-300"
    >
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-5">
          <div>
            <Reveal delay={0.1}>
              <p className="section-label mb-4">Selected Work</p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground leading-tight">
                Featured Projects.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.3} x={20}>
            <Link scroll={false} href="/works" className="group btn-secondary gap-2 shrink-0">
              All Case Studies
              <ArrowUpRight size={17} className="group-hover:rotate-45 transition-transform" />
            </Link>
          </Reveal>
        </div>

        {/* Project list */}
        <div className="flex flex-col">
          {displayData.map((project, i) => {
            const isSanity = "_id" in project;
            const title = project.title;
            const slug = isSanity
              ? project.slug
              : (project as { linkHref: string }).linkHref.split("/").pop();
            const tags = isSanity
              ? (project as SanityProject).categories
              : (project as { tags: string[] }).tags;
            const description = project.description;

            // Thumbnail for inline preview
            const thumbnailUrl = isSanity
              ? (project as SanityProject).thumbnail?.asset
                ? urlForImage((project as SanityProject).thumbnail!).url()
                : null
              : (project as { image: string }).image || null;

            return (
              <Reveal
                key={title}
                width="100%"
                delay={i * 0.08}
                y={20}
                className="relative"
              >
                <Link scroll={false}
                  href={`/works/${slug}`}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-9 gap-8 border-t border-border transition-all duration-300 hover:pl-4 hover:bg-background/50 rounded-r-xl"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-5 mb-5">
                      <span className="text-[11px] font-bold text-accent opacity-45 tabular-nums">
                        0{i + 1}
                      </span>
                      <div className="flex gap-2">
                        {tags.slice(0, 2).map((tag: string) => (
                          <span
                            key={tag}
                            className="text-[9px] font-bold uppercase tracking-[0.12em] text-muted-foreground border border-border px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-3xl lg:text-3xl font-heading font-extrabold text-foreground group-hover:text-accent transition-all duration-300">
                      {title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    {/* Inline thumbnail — visible on hover, desktop only */}
                    {thumbnailUrl && (
                      <div className="hidden lg:block w-[160px] h-[100px] rounded-lg overflow-hidden border border-border shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <Image
                          src={thumbnailUrl}
                          alt={title}
                          width={160}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <p className="hidden lg:line-clamp-2 text-sm text-muted-foreground max-w-xs text-right leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      {description}
                    </p>
                    <div className="w-14 h-14 rounded-lg border border-border bg-section-alt flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-all duration-300 rotate-[-45deg] group-hover:rotate-0 shrink-0">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
          <div className="h-px bg-border/50 w-full" />
        </div>
      </div>
    </section>
  );
}
