"use client";

import { motion } from "framer-motion";
import { GitBranch, Users, BookOpen } from "lucide-react";
import { beyondCodeData } from "@/lib/data";
import type { BeyondCodeItem } from "@/lib/data";

const iconMap = { GitBranch, Users, BookOpen } as const;

function BeyondCard({ item, index }: { item: BeyondCodeItem; index: number }) {
  const Icon = iconMap[item.iconName];
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      className="card p-7 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300">
        <Icon size={24} className="text-accent" />
      </div>
      <h3 className="text-lg font-heading font-semibold text-primary mb-3">
        {item.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function BeyondCode() {
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
            Interests
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            Beyond Code
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beyondCodeData.map((item, i) => (
            <BeyondCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
