"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Download, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { aboutHeroData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function AboutHero() {
  return (
    <section className="min-h-[84vh] flex items-center pb-8 transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="md:col-span-7 bg-section-alt rounded-lg p-7 sm:p-10 min-h-[430px] border border-border shadow-card flex flex-col justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-accent text-background text-[10px] font-black uppercase tracking-widest mb-6">
                <Sparkles size={14} />
                {aboutHeroData.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground leading-[1.08] mb-5">
                Engineer with a product eye and a builder&apos;s pace.
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                {aboutHeroData.paragraphs[0]}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/resume.pdf" download className="btn-primary gap-2">
                Download Resume
                <Download size={16} />
              </a>
              <Link href="/contact" className="btn-secondary gap-2">
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUp}
            className="md:col-span-5 bg-section-alt rounded-lg overflow-hidden relative group min-h-[430px] border border-border shadow-card"
          >
            <Image
              src="/images/headshot.png"
              alt="Jeevan Jose portrait"
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              priority
              className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute top-6 left-6 right-6 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black/25 px-4 py-2 text-white backdrop-blur-md">
                <MapPin size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Vadodara, India</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
              <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-3">
                Working Style
              </p>
              <p className="text-white text-2xl font-heading font-black leading-tight max-w-xs">
                Calm execution, clean systems, thoughtful product decisions.
              </p>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUp}
            className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {aboutHeroData.stats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="bg-section-alt rounded-lg p-5 sm:p-6 border border-border shadow-card flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-3xl sm:text-4xl font-heading font-black text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
                </div>
                <div className="h-11 w-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
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
