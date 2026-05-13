"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCTAProps {
  title: string;
}

export default function ServiceCTA({ title }: ServiceCTAProps) {
  return (
    <section className="bg-background pb-10 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-section-alt rounded-lg p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-card border border-[var(--color-card-border)]"
        >
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black mb-6 text-foreground leading-tight">
              Ready to Build Your <br />
              <span className="text-accent italic font-serif">{title}?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 font-body max-w-lg mx-auto leading-relaxed">
              Let&apos;s turn your idea into a real product. Free consultation, no commitment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Start a Project &rarr;
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download Service Brief
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
