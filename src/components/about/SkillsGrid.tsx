"use client";

import { motion } from "framer-motion";
import { Layout, Server, Smartphone, Cloud } from "lucide-react";
import { skillGroups } from "@/lib/data";
import type { SkillGroup } from "@/lib/data";

const iconMap = { Layout, Server, Smartphone, Cloud } as const;

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = iconMap[group.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-lg p-8 border border-gray-100 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
          <Icon size={22} className="text-accent" />
        </div>
        <h3 className="text-xl font-heading font-black text-primary uppercase tracking-tight">
          {group.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {group.skills.map((skill) => (
          <div
            key={skill.name}
            className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg group/skill hover:border-accent/30 transition-colors"
          >
            <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover/skill:text-accent transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsGrid() {
  return (
    <section className="bg-section-alt py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary">
            Technical Arsenal.
          </h2>
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
