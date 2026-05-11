"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { aboutHeroData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function AboutHero() {
  const headingLines = aboutHeroData.heading.split("\n");

  return (
    <section className="bg-section-alt">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ─── Photo Placeholder ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto lg:mx-0 max-w-sm w-full"
          >
            <div className="aspect-[3/4] rounded-2xl shadow-lg bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden flex items-center justify-center relative">
              {/* Abstract developer illustration */}
              <svg viewBox="0 0 300 400" fill="none" className="w-full h-full absolute inset-0">
                <rect width="300" height="400" fill="url(#aboutGrad)" />
                <defs>
                  <linearGradient id="aboutGrad" x1="0" y1="0" x2="300" y2="400">
                    <stop offset="0%" stopColor="#E0E7FF" />
                    <stop offset="100%" stopColor="#DBEAFE" />
                  </linearGradient>
                </defs>
                {/* Abstract shapes */}
                <circle cx="150" cy="140" r="60" fill="#BFDBFE" opacity="0.6" />
                <circle cx="150" cy="140" r="40" fill="#93C5FD" opacity="0.4" />
                <rect x="100" y="210" width="100" height="120" rx="12" fill="#BFDBFE" opacity="0.5" />
                <rect x="110" y="230" width="80" height="8" rx="4" fill="#2563EB" opacity="0.3" />
                <rect x="110" y="248" width="60" height="8" rx="4" fill="#2563EB" opacity="0.2" />
                <rect x="110" y="266" width="70" height="8" rx="4" fill="#2563EB" opacity="0.25" />
                <rect x="110" y="284" width="40" height="8" rx="4" fill="#2563EB" opacity="0.15" />
                {/* Code brackets */}
                <path d="M70 180L50 200L70 220" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                <path d="M230 180L250 200L230 220" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
              </svg>
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-white/60 mx-auto flex items-center justify-center mb-3">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-blue-600/60">Your Photo</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-blue-100/50 -z-10" />
          </motion.div>

          {/* ─── Content ─── */}
          <motion.div initial="hidden" animate="visible">
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} className="mb-5">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EFF6FF] text-accent text-sm font-medium">
                {aboutHeroData.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-gray-900 leading-tight mb-6"
            >
              {headingLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headingLines.length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Paragraphs */}
            {aboutHeroData.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                custom={2 + i}
                variants={fadeUp}
                className="text-gray-500 leading-relaxed mb-4"
              >
                {para}
              </motion.p>
            ))}

            {/* Stat Row */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="flex items-center gap-6 mt-6 mb-8"
            >
              {aboutHeroData.stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-heading font-bold text-accent">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                  {i < aboutHeroData.stats.length - 1 && (
                    <div className="w-px h-10 bg-gray-200" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div custom={5} variants={fadeUp}>
              <a
                href="/cv.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
              >
                Download CV
                <Download size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
