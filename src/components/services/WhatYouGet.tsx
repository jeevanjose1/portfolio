"use client";

import { motion } from "framer-motion";
import { SanityService } from "@/sanity/types";
import type { MainServiceItem } from "@/lib/data";

export default function WhatYouGet({ service }: { service: SanityService | MainServiceItem }) {
  const items = service.whatYouGet || [];
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Value Proposition
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            What&apos;s Included.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: { icon: string; title: string; description: string }, i: number) => {
            // @ts-expect-error - indexing LucideIcons with a string
            const Icon = LucideIcons[item.icon] || LucideIcons.Server;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-section-alt rounded-lg p-8 border border-border hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] hover:shadow-xl hover:shadow-[color-mix(in_srgb,var(--color-accent)_5%,transparent)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  <Icon size={24} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-black text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
