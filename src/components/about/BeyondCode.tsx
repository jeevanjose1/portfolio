"use client";

import { motion } from "framer-motion";
import { beyondCodeData as fallbackBeyondCodeData } from "@/lib/data";
import type { BeyondCodeItem } from "@/lib/data";
import * as LucideIcons from "lucide-react";

function BeyondCard({ item, index }: { item: any; index: number }) {
  // @ts-ignore
  const Icon = LucideIcons[item.iconName] || LucideIcons.Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-background rounded-2xl p-10 border border-[var(--color-card-border)] hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] hover:-translate-y-0.5 transition-all duration-500 group relative overflow-hidden"
    >
      <LucideIcons.Sparkles size={48} className="absolute -top-4 -right-4 text-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

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

export default function BeyondCode({ items }: { items?: any[] }) {
  const displayItems = items || fallbackBeyondCodeData;
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
          {displayItems.map((item, i) => (
            <BeyondCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
