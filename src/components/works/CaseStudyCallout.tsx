"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CaseStudyCallout() {
  return (
    <section className="bg-accent text-white">
      <div className="section-container py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-200 text-sm font-semibold tracking-wider uppercase mb-3 block">
              Featured Case Study
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Scaling an E-commerce Platform to 2,000+ Daily Users
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Discover how I completely re-architected a legacy monolith into a modern, 
              scalable microservices architecture, improving performance by 40% and 
              significantly reducing infrastructure costs.
            </p>
            <button className="bg-white text-accent hover:bg-gray-50 px-8 py-3.5 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
              Read Full Case Study
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Right Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-900/20 text-center">
              <p className="text-4xl font-bold font-heading text-accent mb-1">2,000+</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Daily Users</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-900/20 text-center">
              <p className="text-4xl font-bold font-heading text-accent mb-1">98/100</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Lighthouse</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-900/20 text-center">
              <p className="text-4xl font-bold font-heading text-accent mb-1">99.9%</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Uptime</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-900/20 text-center">
              <p className="text-4xl font-bold font-heading text-accent mb-1">1.2s</p>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Load Time</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
