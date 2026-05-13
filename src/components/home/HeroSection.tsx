"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/data";
import type { SocialLink } from "@/lib/data";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import { SanityPageHome } from "@/sanity/types";

const fallbackHeroData = {
  badge: "✦ Available for freelance work",
  heading: "Full-Stack Developer &\nMobile Engineer",
  subheadline: "I build scalable web apps, mobile apps, and cloud solutions that help startups and businesses grow.",
  ctaPrimary: { label: "View My Work", href: "/works" },
};

const fallbackStatsData = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  }),
};

function SocialIcon({ link }: { link: SocialLink }) {
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="w-10 h-10 rounded-xl bg-surface-2 border border-[var(--color-border)] flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-background hover:border-accent transition-all duration-200"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.93 }}
    >
      <svg
        width="16"
        height="16"
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

export default function HeroSection({ data, stats, socialLinks }: { data?: SanityPageHome, stats?: any[], socialLinks?: any[] }) {
  const badge = data?.heroBadge || fallbackHeroData.badge;
  const heading = data?.heroHeading || fallbackHeroData.heading;
  const subheadline = data?.heroSubheadline || fallbackHeroData.subheadline;
  const ctaPrimary = data?.ctaPrimary || fallbackHeroData.ctaPrimary;
  const displayStats = stats || fallbackStatsData;
  const displaySocials = socialLinks || [];

  return (
    <section id="home" className="min-h-[100svh] flex items-center pb-12 transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto"
        >
          {/* Main text card */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="md:col-span-7 bg-section-alt rounded-2xl p-10 sm:p-12 flex flex-col justify-between min-h-[500px] border border-[var(--color-card-border)]"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div>
              {/* Badge */}
              <span className="hero-badge">
                <span className="pulse-dot text-background" />
                {badge}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-heading font-black text-foreground leading-[1.08] mb-5 whitespace-pre-line">
                {heading}
              </h1>

              <p className="text-muted-foreground text-lg max-w-lg leading-relaxed font-body">
                {subheadline}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={ctaPrimary.href}
                className="btn-primary gap-2.5"
              >
                {ctaPrimary.label}
                <ArrowRight size={15} />
              </Link>
              <div className="flex items-center gap-2.5">
                {displaySocials.map((link: any) => (
                  <SocialIcon key={link.label} link={link} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Portrait card */}
          <motion.div
            custom={1}
            variants={fadeUp}
            className="md:col-span-5 bg-section-alt rounded-2xl overflow-hidden relative group min-h-[500px] border border-[var(--color-card-border)]"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image
                src="/images/headshot.png"
                alt="Portrait of Jeevan Jose"
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                priority
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent opacity-55" />

            {/* Available badge */}
            <div className="absolute top-6 right-6">
              <div className="bg-black/25 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 flex items-center gap-2.5">
                <span className="pulse-dot text-green-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">
                  Available for Hire
                </span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
              <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-2">
                Location
              </p>
              <p className="text-white text-xl font-heading font-bold">
                Based in Vadodara, India
              </p>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            custom={2}
            variants={fadeUp}
            className="md:col-span-12 grid grid-cols-3 gap-5"
          >
            {displayStats.map((stat) => {
              const numericValue = parseInt(stat.value.replace(/\D/g, ""));
              const suffix = stat.value.replace(/[0-9]/g, "");
              return (
                <div
                  key={stat.label}
                  className="bg-section-alt rounded-2xl p-6 sm:p-8 text-center border border-[var(--color-card-border)] hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] transition-all duration-300 group"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <p className="text-3xl sm:text-4xl font-heading font-black text-foreground">
                    <AnimatedNumber value={numericValue} suffix={suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
