"use client";

import { motion } from "framer-motion";
import type { TimelineItem } from "@/lib/data";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-border dark:bg-accent-20" />

      <div className="space-y-12">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="relative pl-10 group"
          >
            <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-lg bg-background border border-border dark:border-accent-30 flex items-center justify-center group-hover:border-accent transition-colors duration-300">
              <div className="w-[5px] h-[5px] rounded-lg bg-border dark:bg-accent-50 group-hover:bg-accent transition-colors duration-300" />
            </div>

            {/* Content Container */}
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-2 block">
                {item.year}
              </span>
              <h4 className="text-lg font-heading font-black text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
