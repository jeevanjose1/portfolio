"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { ctaBannerData } from "@/lib/data";

export default function CTABanner() {
  return (
    <section id="contact-cta" className="pb-8">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-section-alt rounded-lg py-12 lg:py-14 px-6 sm:px-10 lg:px-12 relative overflow-hidden transition-colors duration-300 border border-border flex flex-col lg:flex-row items-center justify-between gap-10 shadow-card"
        >
          <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-background/10 text-foreground font-black text-[10px] uppercase tracking-widest mb-8 border border-border backdrop-blur-sm">
              <MessageSquare size={12} className="text-accent" />
              Direct Engagement
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground leading-tight mb-8">
              Let&apos;s Work<br />
              <span className="text-accent italic font-serif">Together.</span>
            </h2>

            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 text-base sm:text-lg font-body leading-relaxed">
              {ctaBannerData.subtext}
            </p>

            <Link
              href={ctaBannerData.buttonHref}
              className="bg-accent text-background hover:opacity-90 px-10 py-5 rounded-lg font-black uppercase tracking-widest text-xs inline-flex items-center gap-3 transition-all duration-300 group shadow-xl shadow-accent/10"
            >
              {ctaBannerData.buttonLabel}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
