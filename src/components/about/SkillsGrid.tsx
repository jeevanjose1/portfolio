"use client";

import { motion } from "framer-motion";
import { skillGroups as fallbackSkillGroups } from "@/lib/data";
import type { SkillGroup, SkillItem } from "@/lib/data";
import * as LucideIcons from "lucide-react";

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  // @ts-expect-error - indexing LucideIcons with a string
  const Icon = LucideIcons[group.iconName] || LucideIcons.Layout;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-background rounded-2xl p-10 border border-[var(--color-card-border)] hover:border-[color-mix(in_srgb,var(--color-accent)_20%,transparent)] hover:-translate-y-0.5 transition-all duration-500"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] flex items-center justify-center border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)]">
          <Icon size={22} className="text-accent" />
        </div>
        <h3 className="text-xl font-heading font-black text-foreground uppercase tracking-tight">
          {group.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {group.skills.map((skill: SkillItem) => (
          <div
            key={skill.name}
            className="px-4 py-2 bg-surface-2 border border-[var(--color-border)] rounded-full group/skill hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] hover:bg-[color-mix(in_srgb,var(--color-accent)_5%,transparent)] transition-all duration-200 cursor-default"
          >
            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground group-hover/skill:text-accent transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsGrid({ skillGroups }: { skillGroups?: SkillGroup[] }) {
  const displayGroups = skillGroups || fallbackSkillGroups;
  return (
    <section className="bg-section-alt transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">{"// "} Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">Technical Arsenal.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {displayGroups.map((group, i) => (
            <SkillGroupCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
