"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function AvailabilityBanner() {
  return (
    <section className="bg-primary relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="section-container py-16 lg:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-lg border border-accent/20 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-lg h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-[10px] font-black text-accent uppercase tracking-widest">Active Availability</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-tight">
              Booking for <span className="text-accent italic font-serif">June 2025</span> onwards.
            </h2>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary hover:bg-accent hover:text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest text-xs inline-flex items-center gap-3 transition-all duration-300 group shadow-2xl shadow-primary/20"
            >
              <Calendar size={18} />
              Book a Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
