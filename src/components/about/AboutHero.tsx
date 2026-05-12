"use client";

import { motion } from "framer-motion";
import { Download, Info, Zap, Award } from "lucide-react";
import { aboutHeroData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" as const },
  }),
};

export default function AboutHero() {
  return (
    <section className="min-h-[80vh] flex items-center  pb-10">
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
                <Info size={14} />
                {aboutHeroData.badge}
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-foreground leading-[1.1] mb-6">
                Turning Ideas into <br />
                <span className="text-accent italic font-serif">Scalable Reality.</span>
              </h1>
              <div className="space-y-4 max-w-lg">
                {aboutHeroData.paragraphs.slice(0, 1).map((para, i) => (
                  <p key={i} className="text-muted-foreground text-lg leading-relaxed font-body">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/cv.pdf"
                download
                className="btn-primary inline-flex items-center gap-3"
              >
                Download My Story
                <Download size={18} />
              </a>
            </div>
          </motion.div>

          {/* ── Personal Photo Card ── */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="bg-slate-900 rounded-lg overflow-hidden relative group min-h-[300px] border border-border"
            >
              <img 
                src="/images/headshot.png" 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                 <p className="text-white font-heading font-bold text-lg uppercase tracking-widest leading-tight">
                    Focusing on <br /> Result.
                 </p>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              custom={0}
              variants={fadeUp}
              className="bg-accent rounded-lg p-6 text-white flex flex-col justify-center border border-accent/20 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <Award size={24} className="text-white/80" />
                <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1 rounded-lg backdrop-blur-md">
                  Milestones
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                {aboutHeroData.stats.slice(0, 3).map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-heading font-black">{stat.value}</p>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/70 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
