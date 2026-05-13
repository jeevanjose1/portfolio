"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/works/ProjectCard";
import { projectsData } from "@/lib/data";
import type { MainServiceItem, FilterCategory } from "@/lib/data";

export default function RelatedWorks({ service }: { service: any }) {
  const relatedCategory = service.relatedCategory || (service.isMain ? "Web Apps" : "Mobile Apps");
  
  // Filter projects based on the related category
  const relatedProjects = projectsData
    .filter((project) => project.categories.includes(relatedCategory as any))
    .slice(0, 3); // Take up to 3 projects

  if (relatedProjects.length === 0) return null;

  return (
    <section className="bg-section-alt py-16 transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
              {"//"} Portfolio
            </p>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
              Relevant Projects.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-foreground font-black uppercase tracking-widest text-sm hover:text-accent transition-colors"
            >
              View All Projects &rarr;
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
