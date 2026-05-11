"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ctaBannerData } from "@/lib/data";

export default function CTABanner() {
  return (
    <section className="bg-blue-600">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            {ctaBannerData.heading}
          </h2>
          <p className="text-blue-100 max-w-lg mx-auto mb-8">
            {ctaBannerData.subtext}
          </p>
          <Link
            href={ctaBannerData.buttonHref}
            className="inline-flex items-center gap-2 bg-white text-blue-600 rounded-lg px-8 py-3 font-semibold hover:bg-blue-50 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-blue-700/20"
          >
            {ctaBannerData.buttonLabel}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
