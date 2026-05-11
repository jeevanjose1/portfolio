"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="bg-gray-50 pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-gray-100">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-6">
            Let&apos;s Build Something Together
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. I&apos;ll respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
