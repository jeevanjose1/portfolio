"use client";

import { motion } from "framer-motion";
import { servicesHeroData } from "@/lib/data";
import { Cpu, Zap, ArrowRight, Activity } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ServicesHero() {
  return (
    <section className="min-h-[80vh] flex items-center transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto"
        >
          {/* Main Title Card */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="md:col-span-8 bg-section-alt rounded-lg p-8 sm:p-10 flex flex-col justify-between min-h-[320px] border border-border"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest mb-6 border border-accent/20 shadow-sm">
                <Cpu size={14} />
                Expert Capabilities
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-foreground leading-[1.1] mb-6">
                Core <br />
                <span className="text-accent italic font-serif">Engines.</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg leading-relaxed font-body">
                {servicesHeroData.subtitle}
              </p>
            </div>
          </motion.div>

          {/* Right Column Stacked Cards */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {/* Visual/Icon Card */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="bg-accent rounded-lg p-8 sm:p-10 flex-1 flex flex-col items-center justify-center text-center shadow-lg border border-accent/20 relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
              <div className="w-16 h-16 rounded-lg bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 backdrop-blur-md">
                <Zap size={28} className="text-white" />
              </div>
              <p className="text-white font-heading font-bold text-lg uppercase tracking-widest leading-snug relative z-10">
                Performance <br /> Driven
              </p>
            </motion.div>

            {/* Sub-feature Card */}
            <motion.div
              custom={2}
              variants={fadeUp}
              className="bg-slate-900 rounded-lg p-6 flex flex-col justify-center border border-white/5 text-white"
            >
              <div className="flex items-center justify-between mb-2">
                <Activity size={20} className="text-accent" />
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowRight size={14} />
                </div>
              </div>
              <p className="font-black uppercase tracking-widest text-xs mt-2">End-to-End Solutions</p>
              <p className="text-white/60 text-sm mt-1">From architecture to deployment</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
