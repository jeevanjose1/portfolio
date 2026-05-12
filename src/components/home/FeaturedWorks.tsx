"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { featuredWorksData } from "@/lib/data";

export default function FeaturedWorks() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // Mouse position for the floating preview
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth following
  const springConfig = { stiffness: 100, damping: 20, mass: 0.6 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    // Offset the preview slightly from the cursor
    mouseX.set(clientX + 20);
    mouseY.set(clientY - 120);
  };

  return (
    <section 
      id="works" 
      className="bg-section-alt py-24 lg:py-32 transition-colors duration-300 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4"
        >
          <div>
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">{"//"} Recent Artifacts</p>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
              Featured Projects.
            </h2>
          </div>
          <Link
            href="/works"
            className="group btn-secondary gap-2"
          >
            All Case Studies
            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>

        <div className="flex flex-col">
          {featuredWorksData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={() => setActiveProject(i)}
              onMouseLeave={() => setActiveProject(null)}
              className="relative"
            >
              <Link
                href={project.linkHref}
                className="group flex flex-col md:flex-row md:items-center justify-between py-10 sm:py-12 gap-8 border-t border-border/60 transition-all duration-500 hover:px-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black text-accent opacity-50">0{i + 1}</span>
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-tighter text-muted-foreground border border-border px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground group-hover:text-accent group-hover:italic transition-all duration-500 tracking-tighter">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-6">
                   <p className="hidden lg:block text-sm text-muted-foreground max-w-xs text-right leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.description}
                  </p>
                  <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-background group-hover:border-accent transition-all duration-500 rotate-[-45deg] group-hover:rotate-0">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="h-px bg-border/60 w-full" />
        </div>
      </div>

      {/* Floating Cursor Preview */}
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            style={{ 
              x: floatX, 
              y: floatY,
              position: "fixed",
              top: 0,
              left: 0,
              pointerEvents: "none",
              zIndex: 1000,
            }}
            className="hidden md:block w-[320px] h-[200px] rounded-xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border-2 border-accent/20 bg-section-alt"
          >
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
               <Image
                  src={featuredWorksData[activeProject].image || "/images/works/project-1.png"}
                  alt={featuredWorksData[activeProject].title}
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
