"use client";

import { motion } from "framer-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ImageReveal({ children, className = "" }: ImageRevealProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
