"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function AvailabilityBanner() {
  return (
    <section className="bg-background relative overflow-hidden transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-section-alt rounded-lg py-16 lg:py-16 px-12 relative overflow-hidden transition-colors duration-300 border border-border flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-background-10 rounded-lg border border-border mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-lg h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-[10px] font-extrabold text-foreground uppercase tracking-[0.16em]">Active Availability</span>
            </div>
            <h2 className="text-3xl sm:text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-foreground leading-tight">
              Currently booking <span className="text-accent font-heading font-semibold">select projects</span>.
            </h2>
          </div>

          <div className="flex-shrink-0">
            <a
              href="mailto:hello@jeevanjose.com?subject=Strategy%20Call%20Request"
              className="bg-accent text-background hover:opacity-90 px-8 py-4 rounded-lg font-extrabold uppercase tracking-[0.16em] text-xs inline-flex items-center gap-3 transition-all duration-300 group "
            >
              <Calendar size={18} />
              Request a Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
