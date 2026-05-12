"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonialsData } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16" >
      <div className="section-container ">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">What Clients Say</h2>
          <div className="w-12 h-1 bg-accent rounded-lg mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.45 }}
              className="bg-section-alt rounded-lg p-7 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Avatar + Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-accent">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
