"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CaseStudyCallout() {
  return (
    <section className="bg-accent text-background mb-10 transition-colors duration-300">
      <div className="section-container py-16 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="opacity-60 text-sm font-black tracking-widest uppercase mb-3 block">
              Featured Case Study
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black mb-6">
              Scaling an E-commerce Platform to 2,000+ Daily Users
            </h2>
            <p className="opacity-80 text-lg leading-relaxed mb-8 font-body">
              Discover how I completely re-architected a legacy monolith into a modern,
              scalable microservices architecture, improving performance by 40% and
              significantly reducing infrastructure costs.
            </p>
            <button className="bg-background text-foreground hover:bg-background/90 px-8 py-3.5 rounded-lg font-black uppercase tracking-widest text-xs inline-flex items-center gap-2 transition-colors">
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
            {[
              { label: "Daily Users", value: "2,000+" },
              { label: "Lighthouse", value: "98/100" },
              { label: "Uptime", value: "99.9%" },
              { label: "Load Time", value: "1.2s" }
            ].map((metric) => (
              <div key={metric.label} className="bg-background rounded-lg p-6 shadow-xl shadow-black/20 text-center border border-white/5">
                <p className="text-4xl font-black font-heading text-accent mb-1">{metric.value}</p>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
