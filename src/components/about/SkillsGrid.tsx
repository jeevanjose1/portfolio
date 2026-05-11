"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layout, Server, Smartphone, Cloud } from "lucide-react";
import { skillGroups } from "@/lib/data";
import type { SkillGroup, SkillItem } from "@/lib/data";

const iconMap = { Layout, Server, Smartphone, Cloud } as const;

function SkillBar({ skill, inView }: { skill: SkillItem; inView: boolean }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-xs font-semibold text-accent">{skill.proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-accent rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </div>
  );
}

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = iconMap[group.iconName];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.45 }}
      className="card p-7"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
          <Icon size={20} className="text-accent" />
        </div>
        <h3 className="text-lg font-heading font-semibold text-primary">
          {group.title}
        </h3>
      </div>
      {group.skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} inView={inView} />
      ))}
    </motion.div>
  );
}

export default function SkillsGrid() {
  return (
    <section className="bg-section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
