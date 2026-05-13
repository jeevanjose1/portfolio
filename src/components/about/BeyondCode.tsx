"use client";

import { motion } from "framer-motion";
import { GitBranch, Users, BookOpen, Sparkles } from "lucide-react";
import { beyondCodeData } from "@/lib/data";
import type { BeyondCodeItem } from "@/lib/data";

const iconMap = { GitBranch, Users, BookOpen } as const;

function BeyondCard({ item, index }: { item: BeyondCodeItem; index: number }) {
  const Icon = iconMap[item.iconName];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-background rounded-2xl p-10 border border-[var(--color-card-border)] hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] hover:-translate-y-0.5 transition-all duration-500 group relative overflow-hidden"
    >
      <Sparkles size={48} className="absolute -top-4 -right-4 text-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

      <div className="w-14 h-14 rounded-xl bg-section-alt flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300 border border-[var(--color-border)]">
        <Icon size={26} className="text-accent group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-heading font-black text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed font-body">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function BeyondCode() {
  return (
    <section className="bg-background transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">{"// "} Personal</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            Beyond the IDE.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {beyondCodeData.map((item, i) => (
            <BeyondCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
