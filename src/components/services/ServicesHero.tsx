"use client";

import { motion } from "framer-motion";
import { servicesHeroData } from "@/lib/data";

export default function ServicesHero() {
  return (
    <section className="bg-primary pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-medium">
              {servicesHeroData.badge}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            {servicesHeroData.heading}
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {servicesHeroData.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
