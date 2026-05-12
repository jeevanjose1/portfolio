"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonialsData } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-4">{"//"} Client Feedback</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">What Clients Say.</h2>
          <div className="w-16 h-px bg-accent/30 mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-section-alt rounded-lg p-10 border border-border flex flex-col justify-between group hover:border-accent/30 transition-all duration-300"
            >
              <div>
                {/* Stars — Now using accent color for theme consistency */}
                <div className="flex gap-1.5 mb-8">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={14} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote — Editorial typography */}
                <p className="text-foreground/80 text-lg leading-relaxed mb-10 italic font-body">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Avatar + Info */}
              <div className="flex items-center gap-4 pt-8 border-t border-border/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-background transition-colors duration-300">
                  <span className="text-sm font-black text-accent group-hover:text-background">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-black text-foreground uppercase tracking-tight">{t.name}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
