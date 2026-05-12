"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase, Code2, Palette } from "lucide-react";
import Link from "next/link";
import { heroData, statsData, socialLinks } from "@/lib/data";
import type { SocialLink } from "@/lib/data";
import AnimatedNumber from "@/components/AnimatedNumber";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

function SocialIcon({ link }: { link: SocialLink }) {
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={link.label === "Upwork" ? "currentColor" : "none"}
        stroke={link.label === "Upwork" ? "none" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {link.svgPaths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    </motion.a>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className=" min-h-screen flex items-center  pb-10">
      <div className="section-container w-full">
        {/* ─── Bento Grid Layout (Figma Portfolio Style) ─── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto"
        >
          {/* ── Main Intro Card (large, spans 8 cols) ── */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="md:col-span-8 bg-section-alt rounded-lg p-8 sm:p-10 flex flex-col justify-between min-h-[320px] border border-gray-100"
          >
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-blue-50 text-accent text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-lg h-2 w-2 bg-accent"></span>
                </span>
                {heroData.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-primary leading-[1.1] mb-4">
                Full-Stack Developer & <br />
                <span className="text-accent italic font-serif">
                  Mobile Engineer
                </span>
              </h1>

              <div className="text-gray-500 text-lg max-w-lg leading-relaxed font-body">
                {heroData.subheadline}
              </div>
            </div>

            {/* Social Row */}
            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((link) => (
                <SocialIcon key={link.label} link={link} />
              ))}
            </div>
          </motion.div>

          {/* ── Right Column — stacked cards ── */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {/* Nav-style action card */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="bg-primary rounded-lg p-6 flex flex-col gap-3 border border-gray-800"
            >
              <Link
                href="/works"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-medium"
              >
                <Palette size={16} />
                Latest Work
              </Link>
              <Link
                href="/about"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-medium"
              >
                <Code2 size={16} />
                About Me
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-medium"
              >
                <Briefcase size={16} />
                Book A Call
              </Link>
            </motion.div>

            {/* CTA Buttons card */}
            <motion.div
              custom={2}
              variants={fadeUp}
              className="bg-section-alt rounded-lg p-6 flex flex-col gap-3 border border-gray-100"
            >
              <Link
                href={heroData.ctaPrimary.href}
                className="btn-primary text-center flex items-center justify-center gap-2"
              >
                {heroData.ctaPrimary.label}
                <ArrowRight size={16} />
              </Link>
              <a
                href={heroData.ctaSecondary.href}
                download
                className="btn-secondary text-center flex items-center justify-center gap-2"
              >
                {heroData.ctaSecondary.label}
                <Download size={16} />
              </a>
            </motion.div>
          </div>

          {/* ── Bottom Stat Bar ── */}
          <motion.div
            custom={3}
            variants={fadeUp}
            className="md:col-span-12 grid grid-cols-3 gap-4"
          >
            {statsData.map((stat) => {
              const numericValue = parseInt(stat.value.replace(/\D/g, ''));
              const suffix = stat.value.replace(/[0-9]/g, '');

              return (
                <div
                  key={stat.label}
                  className="bg-section-alt rounded-lg p-6 text-center border border-gray-100 hover:border-accent/30 transition-colors"
                >
                  <p className="text-3xl sm:text-4xl font-heading font-black text-primary">
                    <AnimatedNumber value={numericValue} suffix={suffix} />
                  </p>
                  <p className="text-sm text-gray-400 mt-1 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
