"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="min-h-[calc(100vh-64px)] lg:min-h-screen flex items-center pt-20 lg:pt-0">
      <div className="container-custom">
        <div className="max-w-4xl">
          {/* Line 1: Eyebrow */}
          <div className="flex items-center gap-2 mb-8">
            <p className="text-label font-mono text-accent uppercase tracking-[0.15em]">
              Full-Stack & Mobile Developer
            </p>
            <span className="w-2 h-5 bg-accent animate-cursor" />
          </div>

          {/* Line 2: Display Headline */}
          <h1 className="text-display font-extrabold text-primary mb-10 tracking-tighter">
            Building products <br />
            <span className="italic font-normal">that ship</span>
            <span className="text-accent">.</span>
          </h1>

          {/* Line 3: Description */}
          <p className="text-body text-secondary max-w-md mb-12 leading-[1.75]">
            4 years building web apps, mobile apps, and cloud systems
            for startups and businesses. Based in India, working globally.
          </p>

          {/* Line 4: CTA Row */}
          <div className="flex items-center gap-8 mb-16">
            <Link
              href="/works"
              className="group flex items-center gap-2 text-primary font-medium transition-colors"
            >
              <span className="border-b border-transparent group-hover:border-primary transition-all">
                View my work
              </span>
              <motion.span
                className="inline-block"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </Link>
            <Link
              href="/contact"
              className="text-muted hover:text-secondary transition-colors"
            >
              Get in touch
            </Link>
          </div>

          {/* Below CTA: Subtle footer */}
          <div className="flex items-center gap-4">
            <div className="h-[1px] bg-subtle w-16" />
            <p className="text-small text-muted font-mono">
              Currently working at Freelance · Projects on the side
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Availability Status (Desktop 1280px+) */}
      <div className="hidden xl:block absolute right-20 top-[40%] translate-x-1/2">
        <div className="bg-secondary border border-subtle p-6 rounded-radius-card shadow-card">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-label text-primary font-mono uppercase">Available for projects</span>
          </div>
          <p className="text-label text-muted font-mono uppercase tracking-wider">Response in 24 hrs</p>
        </div>
      </div>
    </section>
  );
}
