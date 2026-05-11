"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/lib/data";

export default function ExperienceCards() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experienceData.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              className="card p-7 border-l-4 border-l-blue-600"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-heading font-semibold text-primary">
                    {exp.company}
                  </h3>
                  <p className="text-accent text-sm font-medium">{exp.role}</p>
                </div>
                <span className="text-xs text-gray-400 font-medium mt-1 sm:mt-0 bg-gray-50 px-3 py-1 rounded-full">
                  {exp.dateRange}
                </span>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.achievements.map((achievement, ai) => (
                  <li key={ai} className="flex gap-2.5 text-sm text-gray-500 leading-relaxed">
                    <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
