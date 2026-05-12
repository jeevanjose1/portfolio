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
          className="bg-slate-950 rounded-lg p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-black/20 border border-white/5"
        >
          {/* Decorative background grid */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] -mr-32 -mt-32" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black mb-8 text-white leading-tight">
              Ready to Build Your <br />
              <span className="text-accent italic font-serif">{title}?</span>
            </h2>
            <p className="text-lg text-white/60 mb-12 font-body max-w-lg mx-auto leading-relaxed">
              Let&apos;s turn your idea into a real product. Free consultation, no commitment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-accent text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl shadow-accent/20"
              >
                Start a Project &rarr;
              </Link>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all duration-300"
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
