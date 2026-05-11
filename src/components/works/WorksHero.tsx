"use client";

import { motion } from "framer-motion";

export default function WorksHero() {
  return (
    <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-20 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-accent font-semibold text-sm">
              My Portfolio
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-6">
            Projects I&apos;ve Built
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl">
            A showcase of real-world applications across web, mobile, and cloud
          </p>
        </motion.div>
      </div>
    </section>
  );
}
