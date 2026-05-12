"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";

export default function ExperienceCards() {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Professional Path
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            Work History.
          </h2>
        </motion.div>

        <div className="max-w-4xl space-y-12">
          {experienceData.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-12 sm:pl-16 group"
            >
              {/* Vertical Line with Bullet — Inspired by Figma Variation 1/2 */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-hover:bg-accent group-hover:bg-opacity-30 transition-colors" />
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent ring-4 ring-background transition-transform group-hover:scale-125" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <span className="px-3 py-1 rounded-lg bg-section-alt border border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      {exp.dateRange}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-foreground/80 mb-6 font-heading tracking-tight">{exp.role}</p>

                  <ul className="space-y-4 max-w-2xl">
                    {exp.achievements.map((achievement, ai) => (
                      <li key={ai} className="flex gap-4 text-muted-foreground leading-relaxed font-body">
                        <span className="text-accent mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-lg bg-accent/40" />
                        <span className="text-sm sm:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Divider line — Inspired by Figma Variation 1 */}
              <div className="mt-12 h-px bg-border w-full group-hover:bg-accent/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
