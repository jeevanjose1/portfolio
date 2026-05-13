"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Download, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { aboutHeroData } from "@/lib/data";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function AboutHero() {
  return (
    <section className="min-h-[100svh] flex items-center pb-12 transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">

          {/* Text card */}
          <motion.div
            custom={0} variants={fadeUp}
            className="md:col-span-7 bg-section-alt rounded-2xl p-10 sm:p-12 min-h-[500px] border border-[var(--color-card-border)] flex flex-col justify-between"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div>
              <span className="hero-badge">
                <Sparkles size={13} />
                {aboutHeroData.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-black text-foreground leading-[1.08] mb-5">
                Engineer with a product eye and a builder&apos;s pace.
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                {aboutHeroData.paragraphs[0]}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="/resume.pdf" download className="btn-primary gap-2.5">
                Download Resume <Download size={15} />
              </a>
              <Link href="/contact" className="btn-secondary gap-2.5">
                Start a Conversation <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* Portrait card */}
          <motion.div
            custom={1} variants={fadeUp}
            className="md:col-span-5 bg-section-alt rounded-2xl overflow-hidden relative group min-h-[500px] border border-[var(--color-card-border)]"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <Image
              src="/images/headshot.png" alt="Jeevan Jose portrait" fill
              sizes="(min-width: 768px) 420px, 100vw" priority
              className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute top-6 left-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-white backdrop-blur-md">
                <MapPin size={13} />
                <span className="text-[10px] font-black uppercase tracking-widest">Vadodara, India</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
              <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-3">Working Style</p>
              <p className="text-white text-2xl font-heading font-black leading-tight max-w-xs">
                Calm execution, clean systems, thoughtful product decisions.
              </p>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div custom={2} variants={fadeUp} className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {aboutHeroData.stats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="bg-section-alt rounded-2xl p-6 sm:p-8 border border-[var(--color-card-border)] flex items-center justify-between gap-4"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div>
                  <p className="text-3xl sm:text-4xl font-heading font-black text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1.5 font-medium">{stat.label}</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] flex items-center justify-center text-accent shrink-0">
                  <Award size={20} />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
