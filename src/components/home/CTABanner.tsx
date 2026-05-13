"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { ctaBannerData } from "@/lib/data";

export default function CTABanner({ data }: { data?: { heading?: string; subtext?: string; buttonLabel?: string; buttonHref?: string } }) {
  const heading = data?.heading || ctaBannerData.heading;
  const subtext = data?.subtext || ctaBannerData.subtext;
  const buttonLabel = data?.buttonLabel || ctaBannerData.buttonLabel;
  const buttonHref = data?.buttonHref || ctaBannerData.buttonHref;

  return (
    <section id="contact-cta" className="transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl py-20 lg:py-24 px-10 sm:px-16 overflow-hidden border border-[var(--color-card-border)] bg-section-alt flex flex-col lg:flex-row items-center justify-between gap-10"
          style={{ boxShadow: "var(--shadow-lg)" }}
        >
          {/* Grid texture */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:32px_32px] rounded-2xl" />

          {/* Ambient glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-[0.08] blur-3xl"
            style={{ backgroundColor: "var(--color-accent)" }}
          />

          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] text-accent font-black text-[10px] uppercase tracking-widest mb-8 border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)]">
              <MessageSquare size={11} />
              Direct Engagement
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground leading-tight mb-6 whitespace-pre-line">
              {heading}
            </h2>

            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 text-base sm:text-lg font-body leading-relaxed">
              {subtext}
            </p>

            <Link
              href={buttonHref}
              className="btn-primary gap-3 px-10 py-5 text-xs group"
            >
              {buttonLabel}
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
