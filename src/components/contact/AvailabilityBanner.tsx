"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AvailabilityBanner() {
  return (
    <section className="bg-primary border-t border-gray-800">
      <div className="section-container py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
              Currently accepting new projects for June 2025 onwards
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-green-400 uppercase tracking-wide">Available</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 transition-colors group"
            >
              Book a Free 30-min Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
