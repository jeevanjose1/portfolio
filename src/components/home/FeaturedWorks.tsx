"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { featuredWorksData } from "@/lib/data";

export default function FeaturedWorks() {
  return (
    <section id="works" className="bg-section-alt py-12 lg:py-16 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/works"
            className="text-sm text-muted-foreground font-bold hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            More Projects <ArrowUpRight size={14} />
          </Link>
        </motion.div>

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
                  <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{project.description}</p>
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
              <div className="h-px bg-border" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
