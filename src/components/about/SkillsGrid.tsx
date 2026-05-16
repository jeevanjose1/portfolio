"use client";

import { skillGroups as fallbackSkillGroups } from "@/lib/data";
import type { SkillGroup, SkillItem } from "@/lib/data";
import * as LucideIcons from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

function SkillGroupCard({ group, index }: { group: SkillGroup; index: number }) {
  // @ts-expect-error - indexing LucideIcons with a string
  const Icon = LucideIcons[group.iconName] || LucideIcons.Layout;

  return (
    <Reveal
      width="100%"
      delay={index * 0.1}
      y={40}
      blur
      className="h-full!"
    >
      <div
        className="bg-background rounded-xl p-10 border border-card-border shadow-card hover:border-accent-20 hover:-translate-y-0.5 transition-all duration-500 h-full flex flex-col"
         
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-accent-10 flex items-center justify-center border border-accent-15">
            <Icon size={22} className="text-accent" />
          </div>
          <h3 className="text-xl font-heading font-extrabold text-foreground uppercase tracking-tight">
            {group.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {group.skills.map((skill: SkillItem) => (
            <div
              key={skill.name}
              className="px-4 py-2 bg-surface-2 border border-border rounded-full group/skill hover:border-accent-30 hover:bg-accent-5 transition-all duration-200 cursor-default"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground group-hover/skill:text-accent transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function SkillsGrid({ skillGroups }: { skillGroups?: SkillGroup[] }) {
  const displayGroups = skillGroups || fallbackSkillGroups;
  return (
    <section className="bg-section-alt transition-colors duration-300">
      <div className="section-container">
        <div className="mb-14">
          <Reveal delay={0.1}>
            <p className="section-label mb-4">{"// "} Expertise</p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-foreground">Technical Arsenal.</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {displayGroups.map((group, i) => (
            <SkillGroupCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
