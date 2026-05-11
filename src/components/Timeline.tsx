"use client";

import { motion } from "framer-motion";
import type { TimelineItem } from "@/lib/data";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-gray-200" />

      <div className="space-y-10">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
            className="relative pl-12"
          >
            {/* Dot */}
            <div className="absolute left-2.5 top-1 w-4 h-4 rounded-full bg-accent border-[3px] border-white shadow-sm" />

            {/* Year label */}
            <span className="inline-block px-3 py-0.5 rounded-full bg-blue-50 text-accent text-xs font-semibold mb-2">
              {item.year}
            </span>

            <h4 className="text-base font-heading font-semibold text-primary mb-1">
              {item.title}
            </h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
