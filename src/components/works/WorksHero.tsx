"use client";

import { motion } from "framer-motion";
import { FolderGit2, Sparkles, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function WorksHero() {
  return (
    <section className="min-h-[80vh] flex items-center pt-24 pb-10">
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
            className="md:col-span-8 bg-section-alt rounded-lg p-8 sm:p-10 flex flex-col justify-between min-h-[320px] border border-gray-100"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-blue-50 text-accent text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-100 shadow-sm">
                <FolderGit2 size={14} />
                Selected Works
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-primary leading-[1.1] mb-6">
                Digital <br />
                <span className="text-accent italic font-serif">Artifacts.</span>
              </h1>
              <p className="text-gray-500 text-lg max-w-lg leading-relaxed font-body">
                A curated collection of full-stack applications, mobile experiences, and technical experiments built with precision and purpose.
              </p>
            </div>
          </motion.div>

          {/* Right Column Stacked Cards */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {/* Visual/Icon Card */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="bg-primary rounded-lg p-8 sm:p-10 border border-gray-800 flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 border border-white/20 backdrop-blur-md">
                <Sparkles size={28} className="text-accent" />
              </div>
              <p className="text-white font-heading font-bold text-lg uppercase tracking-widest leading-snug relative z-10">
                Tech meets <br /> Creativity
              </p>
            </motion.div>

            {/* Scroll/Action Card */}
            <motion.div
              custom={2}
              variants={fadeUp}
              className="bg-accent rounded-lg p-6 flex items-center justify-between border border-accent/20 shadow-lg text-white"
            >
              <div>
                <p className="font-black uppercase tracking-widest text-xs">Explore Below</p>
                <p className="text-white/70 text-sm mt-1">Scroll to view projects</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <ArrowRight size={18} className="rotate-90" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
