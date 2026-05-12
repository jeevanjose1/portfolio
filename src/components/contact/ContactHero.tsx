"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Calendar } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ContactHero() {
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
                <MessageSquare size={14} />
                Get In Touch
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-foreground leading-[1.1] mb-6">
                Let&apos;s Build <br />
                <span className="text-accent italic font-serif">Something</span> Great.
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg leading-relaxed font-body">
                Have a project in mind? I&apos;d love to hear about it. I typically respond to all inquiries within 24 hours.
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
                <Mail size={28} className="text-white" />
              </div>
              <p className="text-white font-heading font-bold text-lg uppercase tracking-widest leading-snug relative z-10">
                Always <br /> Online
              </p>
            </motion.div>

            {/* Quick action Card */}
            <motion.div
              custom={2}
              variants={fadeUp}
              className="bg-slate-900 rounded-lg p-6 flex items-center justify-between border border-white/10 text-white"
            >
              <div>
                <p className="font-black uppercase tracking-widest text-xs">Book a Call</p>
                <p className="text-white/60 text-sm mt-1">Schedule directly</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Calendar size={18} className="text-accent" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
