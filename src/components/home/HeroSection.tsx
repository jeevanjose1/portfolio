"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { heroData, statsData, socialLinks } from "@/lib/data";
import type { SocialLink } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const statFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.6 + i * 0.15, duration: 0.45, ease: "easeOut" as const },
  }),
};

function SocialIcon({ link }: { link: SocialLink }) {
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="p-2.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-accent transition-colors duration-200"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="20"
        height="20"
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
        {link.svgExtras?.map((extra, i) => {
          if (extra.type === "rect") {
            return <rect key={`e-${i}`} {...extra.attrs} />;
          }
          if (extra.type === "circle") {
            return <circle key={`e-${i}`} {...extra.attrs} />;
          }
          return null;
        })}
      </svg>
    </motion.a>
  );
}

export default function HeroSection() {
  const headingLines = heroData.heading.split("\n");

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Background gradient orb */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-500/3 blur-3xl pointer-events-none" />

      <div className="section-container min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center w-full">
          {/* ─── Left Column (3/5 = 60%) ─── */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="lg:col-span-3"
          >
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#EFF6FF] text-accent text-sm font-medium">
                {heroData.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-5xl font-heading font-bold text-gray-900 leading-tight mb-6"
            >
              {headingLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headingLines.length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-gray-500 text-lg max-w-lg mb-8 leading-relaxed"
            >
              {heroData.subheadline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href={heroData.ctaPrimary.href}
                className="btn-primary inline-flex items-center gap-2"
              >
                {heroData.ctaPrimary.label}
                <ArrowRight size={16} />
              </Link>
              <a
                href={heroData.ctaSecondary.href}
                download
                className="btn-secondary inline-flex items-center gap-2"
              >
                {heroData.ctaSecondary.label}
                <Download size={16} />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              {socialLinks.map((link) => (
                <SocialIcon key={link.label} link={link} />
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Right Column (2/5 = 40%) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 relative hidden lg:block"
          >
            {/* Code-themed SVG Illustration */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
                {/* Background circle */}
                <circle cx="200" cy="200" r="180" fill="#EFF6FF" opacity="0.5" />
                <circle cx="200" cy="200" r="140" fill="#DBEAFE" opacity="0.4" />

                {/* Code bracket left < */}
                <path
                  d="M140 160L100 200L140 240"
                  stroke="#2563EB"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.8"
                />

                {/* Code bracket right > */}
                <path
                  d="M260 160L300 200L260 240"
                  stroke="#2563EB"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.8"
                />

                {/* Forward slash / */}
                <path
                  d="M220 140L180 260"
                  stroke="#93C5FD"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.7"
                />

                {/* Decorative dots */}
                <circle cx="120" cy="120" r="6" fill="#2563EB" opacity="0.3" />
                <circle cx="300" cy="130" r="4" fill="#93C5FD" opacity="0.5" />
                <circle cx="80" cy="280" r="5" fill="#BFDBFE" opacity="0.6" />
                <circle cx="320" cy="290" r="7" fill="#2563EB" opacity="0.2" />

                {/* Decorative rectangles (code blocks) */}
                <rect x="150" y="290" width="100" height="8" rx="4" fill="#BFDBFE" opacity="0.5" />
                <rect x="170" y="306" width="60" height="8" rx="4" fill="#DBEAFE" opacity="0.4" />
                <rect x="150" y="90" width="80" height="8" rx="4" fill="#BFDBFE" opacity="0.4" />
                <rect x="165" y="106" width="50" height="8" rx="4" fill="#DBEAFE" opacity="0.3" />

                {/* Floating geometric shapes */}
                <rect x="60" cy="180" y="180" width="24" height="24" rx="4" fill="#2563EB" opacity="0.15" transform="rotate(15 72 192)" />
                <rect x="310" y="170" width="20" height="20" rx="4" fill="#93C5FD" opacity="0.25" transform="rotate(-10 320 180)" />

                {/* Terminal-like element */}
                <rect x="160" y="170" width="80" height="60" rx="8" fill="white" stroke="#DBEAFE" strokeWidth="2" />
                <circle cx="175" cy="183" r="3" fill="#EF4444" opacity="0.6" />
                <circle cx="187" cy="183" r="3" fill="#F59E0B" opacity="0.6" />
                <circle cx="199" cy="183" r="3" fill="#22C55E" opacity="0.6" />
                <rect x="170" y="198" width="30" height="4" rx="2" fill="#2563EB" opacity="0.4" />
                <rect x="170" y="208" width="50" height="4" rx="2" fill="#93C5FD" opacity="0.3" />
                <rect x="170" y="218" width="20" height="4" rx="2" fill="#BFDBFE" opacity="0.3" />
              </svg>

              {/* Floating Stat Cards */}
              {statsData.map((stat, i) => {
                const positions = [
                  "top-4 -left-4",
                  "top-1/2 -right-6 -translate-y-1/2",
                  "bottom-8 -left-2",
                ];
                return (
                  <motion.div
                    key={stat.label}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={statFade}
                    className={`absolute ${positions[i]} bg-white rounded-xl shadow-lg border border-gray-100 px-5 py-3.5`}
                  >
                    <p className="text-2xl font-heading font-bold text-accent">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Mobile Stats Row */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="lg:hidden col-span-1 grid grid-cols-3 gap-4"
          >
            {statsData.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={statFade}
                className="bg-white rounded-xl shadow-md border border-gray-100 px-4 py-4 text-center"
              >
                <p className="text-2xl font-heading font-bold text-accent">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
