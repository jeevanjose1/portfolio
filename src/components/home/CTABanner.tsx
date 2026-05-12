"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { ctaBannerData } from "@/lib/data";

export default function CTABanner() {
  return (
    <section className=" pb-10">
      <div className="section-container ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-slate-950 rounded-lg p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-black/20 border border-white/5"
        >
          {/* Decorative background grid */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -mr-32 -mt-32" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 font-black text-[10px] uppercase tracking-widest mb-8 border border-white/10 backdrop-blur-sm">
              <MessageSquare size={12} className="text-accent" />
              Direct Engagement
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-10">
              Let&apos;s Work<br />
              <span className="text-accent italic font-serif">Together.</span>
            </h2>

            <p className="text-white/60 max-w-lg mx-auto mb-12 text-lg font-body leading-relaxed">
              {ctaBannerData.subtext}
            </p>

            <Link
              href={ctaBannerData.buttonHref}
              className="bg-accent text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs inline-flex items-center gap-3 transition-all duration-300 group shadow-xl shadow-accent/20"
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
