"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";
import { SanityExperience } from "@/sanity/types";

export default function ExperienceCards({ experiences }: { experiences: SanityExperience[] }) {
  const displayData =
    experiences.length > 0
      ? experiences.map((exp) => ({
          company: exp.title,
          role: exp.subtitle,
          dateRange: exp.year,
          achievements: exp.description.split("\n").filter((l) => l.trim() !== ""),
        }))
      : experienceData;

  return (
    <section className="bg-background transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label mb-4">{"// "} Professional Path</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">Work History.</h2>
        </motion.div>

        <div className="max-w-4xl space-y-16">
          {displayData.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-12 sm:pl-16 group"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)] group-hover:bg-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] transition-colors duration-500" />
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background transition-transform duration-300 group-hover:scale-125" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <span className="px-3 py-1 rounded-xl bg-surface-2 border border-[var(--color-border)] text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      {exp.dateRange}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-[color-mix(in_srgb,var(--color-text)_70%,transparent)] mb-7 font-heading tracking-tight">{exp.role}</p>

                  <ul className="space-y-4 max-w-2xl">
                    {exp.achievements.map((achievement, ai) => (
                      <li key={ai} className="flex gap-4 text-muted-foreground leading-relaxed">
                        <span className="mt-2.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_40%,transparent)]" />
                        <span className="text-sm sm:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-14 h-px bg-[var(--color-border)] w-full group-hover:bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
