"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonialsData } from "@/lib/data";
import { SanityTestimonial } from "@/sanity/types";

export default function Testimonials({ testimonials }: { testimonials: SanityTestimonial[] }) {
  const displayData =
    testimonials.length > 0
      ? testimonials
      : testimonialsData.map((t) => ({
          _id: t.name, name: t.name, role: t.company, content: t.quote, rating: t.rating,
        }));

  return (
    <section id="testimonials" className="transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">{"// "} Client Feedback</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">What Clients Say.</h2>
          <div className="w-16 h-px bg-[color-mix(in_srgb,var(--color-accent)_25%,transparent)] mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {displayData.map((t, i) => (
            <motion.div
              key={t._id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-section-alt rounded-2xl p-10 sm:p-12 border border-[var(--color-card-border)] flex flex-col justify-between group hover:border-[color-mix(in_srgb,var(--color-accent)_25%,transparent)] transition-all duration-500"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div>
                <div className="flex gap-1.5 mb-8">
                  {Array.from({ length: (t as SanityTestimonial).rating || 5 }).map((_, si) => (
                    <Star key={si} size={13} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-[color-mix(in_srgb,var(--color-text)_75%,transparent)] text-lg leading-relaxed mb-10 italic font-body">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-8 border-t border-[var(--color-border)]/60">
                <div className="w-11 h-11 rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] flex items-center justify-center shrink-0 group-hover:bg-accent transition-all duration-300">
                  <span className="text-sm font-black text-accent group-hover:text-background transition-colors">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-black text-foreground uppercase tracking-tight">{t.name}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
