"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { featuredWorksData } from "@/lib/data";
import ImageReveal from "@/components/ImageReveal";

export default function FeaturedWorks() {
  return (
    <section id="works" className="bg-section-alt py-12 lg:py-16 transition-colors duration-300">
      <div className="section-container">
        {/* Header row with "View All" link on right — Figma portfolio style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              My Recent Work
            </h2>
          </div>
          <Link
            href="/works"
            className="text-sm text-muted-foreground font-medium hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            More Projects <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        {/* ── Vertical List Layout (Figma Variation 1 style) ── */}
        <div className="flex flex-col">
          {featuredWorksData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                href={project.linkHref}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-7 gap-4"
              >
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">Design and Development</p>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-background border border-border text-muted-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-all duration-200 flex-shrink-0">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
              {/* Divider line between items */}
              <div className="h-px bg-border" />
            </motion.div>
          ))}
        </div>

        {/* Project image grid (thumbnails below the list — Figma "More Projects" section) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <ImageReveal key={n}>
              <div
                className="aspect-[4/3] rounded-lg bg-section-alt border border-border flex items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
            </ImageReveal>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
