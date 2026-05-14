"use client";

import { useState } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { featuredWorksData } from "@/lib/data";
import { SanityProject } from "@/sanity/types";
import { urlForImage } from "@/sanity/lib/image";
import { Reveal } from "@/components/animations/Reveal";

export default function FeaturedWorks({ projects }: { projects: SanityProject[] }) {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 20, mass: 0.6 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX + 24);
    mouseY.set(e.clientY - 130);
  };

  const displayData = projects.length > 0 ? projects : featuredWorksData;

  return (
    <section
      id="works"
      className="bg-section-alt transition-colors duration-300 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-5">
          <div>
            <Reveal delay={0.1}>
              <p className="section-label mb-4">{"// "} Recent Artifacts</p>
            </Reveal>
            <Reveal delay={0.2} blur>
              <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
                Featured Projects.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.3} x={20}>
            <Link href="/works" className="group btn-secondary gap-2 shrink-0">
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

            return (
              <Reveal
                key={title}
                width="100%"
                delay={i * 0.1}
                y={30}
                className="relative"
              >
                <div
                  onMouseEnter={() => setActiveProject(i)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <Link
                    href={`/works/${slug}`}
                    className="group flex flex-col md:flex-row md:items-center justify-between py-10 gap-8 border-t border-[var(--color-border)]/50 transition-all duration-500 hover:px-5"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-5 mb-5">
                        <span className="text-[11px] font-black text-accent opacity-40 tabular-nums">
                          0{i + 1}
                        </span>
                        <div className="flex gap-2">
                          {tags.slice(0, 2).map((tag: string) => (
                            <span
                              key={tag}
                              className="text-[9px] font-black uppercase tracking-tight text-muted-foreground border border-[var(--color-border)] px-2.5 py-1 rounded-lg"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground group-hover:text-accent group-hover:italic transition-all duration-500 tracking-tighter">
                        {title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-8">
                      <p className="hidden lg:block text-sm text-muted-foreground max-w-xs text-right leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {description}
                      </p>
                      <div className="w-16 h-16 rounded-full border border-[var(--color-border)] flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-all duration-500 rotate-[-45deg] group-hover:rotate-0 shrink-0">
                        <ArrowUpRight size={22} />
                      </div>
                    </div>
                  </Link>
                </div>
              </Reveal>
            );
          })}
          <div className="h-px bg-[var(--color-border)]/50 w-full" />
        </div>
      </div>

      {/* Floating cursor preview */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.82, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.82, rotate: 4 }}
            style={{
              x: floatX,
              y: floatY,
              position: "fixed",
              top: 0,
              left: 0,
              pointerEvents: "none",
              zIndex: 1000,
              boxShadow: "var(--shadow-xl)",
            }}
            className="hidden md:block w-[340px] h-[210px] rounded-2xl overflow-hidden border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] bg-section-alt"
          >
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full"
            >
              <Image
                src={
                  "_id" in displayData[activeProject]
                    ? (displayData[activeProject] as SanityProject).thumbnail?.asset
                      ? urlForImage((displayData[activeProject] as SanityProject).thumbnail!).url()
                      : "/images/project-1.svg"
                    : (displayData[activeProject] as { image: string }).image || "/images/project-1.svg"
                }
                alt={displayData[activeProject].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
