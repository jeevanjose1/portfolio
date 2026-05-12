"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
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
      className="w-10 h-10 rounded-full bg-section-alt border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-background hover:border-accent transition-all duration-200"
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
    <section id="home" className="min-h-screen flex items-center pb-10 transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="md:col-span-7 bg-section-alt rounded-lg p-7 sm:p-10 flex flex-col justify-between min-h-[430px] border border-border shadow-card"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-accent text-background text-[10px] font-black uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
                  <span className="relative inline-flex rounded-lg h-2 w-2 bg-background"></span>
                </span>
                {heroData.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground leading-[1.1] mb-4">
                Full-Stack Developer & <br />
                <span className="text-accent italic font-serif">
                  Mobile Engineer
                </span>
              </h1>

              <div className="text-muted-foreground text-lg max-w-lg leading-relaxed font-body">
                {heroData.subheadline}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={heroData.ctaPrimary.href}
                className="btn-primary flex items-center justify-center gap-2"
              >
                {heroData.ctaPrimary.label}
                <ArrowRight size={16} />
              </Link>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <SocialIcon key={link.label} link={link} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            className="md:col-span-5 bg-section-alt rounded-lg overflow-hidden relative group min-h-[430px] border border-border shadow-card"
          >
            <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image
                src="/images/headshot.png"
                alt="Portrait"
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                priority
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

            <div className="absolute top-6 right-6">
              <div className="bg-black/20 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Available for Hire</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-2">Location</p>
              <p className="text-white text-lg font-heading font-bold">Based in Vadodara, India</p>
            </div>
          </motion.div>

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
                  className="bg-section-alt rounded-lg p-5 sm:p-6 text-center border border-border hover:border-accent/30 transition-colors shadow-card"
                >
                  <p className="text-3xl sm:text-4xl font-heading font-black text-foreground">
                    <AnimatedNumber value={numericValue} suffix={suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
