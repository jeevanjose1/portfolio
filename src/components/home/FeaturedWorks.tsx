"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { featuredWorksData } from "@/lib/data";

export default function FeaturedWorks() {
  return (
    <section id="works" className="bg-section-alt">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">Recent Projects</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWorksData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.15, duration: 0.45 }}
              className="card overflow-hidden group"
            >
              {/* Image Placeholder */}
              <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-white/80 flex items-center justify-center mx-auto mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-400">{project.title}</p>
                </div>
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-blue-50 text-accent text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={project.linkHref} className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all duration-200">
                  View Project <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.4 }} className="text-center mt-12">
          <Link href="/works" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-200">
            View All Projects <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
