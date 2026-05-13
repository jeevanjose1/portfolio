"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar, Clock3, Mail, MapPin, MessageSquare } from "lucide-react";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function ContactHero() {
  return (
    <section className="min-h-[100svh] flex items-center pb-12 transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">

          {/* Text card */}
          <motion.div
            custom={0} variants={fadeUp}
            className="md:col-span-7 bg-section-alt rounded-2xl p-10 sm:p-12 min-h-[500px] border border-[var(--color-card-border)] flex flex-col justify-between"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div>
              <span className="hero-badge">
                <MessageSquare size={13} />
                Get in Touch
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-black text-foreground leading-[1.08] mb-5">
                Tell me what you&apos;re building. I&apos;ll help shape the next step.
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                Have a project in mind? Send the brief, timeline, and goal. I typically respond within 24 hours with clear next steps.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact-form" className="btn-primary gap-2.5">
                Send Project Brief <ArrowDown size={15} />
              </a>
              <a href="mailto:hello@jeevanjose.com" className="btn-secondary gap-2.5">
                Email Directly <Mail size={15} />
              </a>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5">
            <motion.div
              custom={1} variants={fadeUp}
              className="bg-section-alt rounded-2xl p-8 sm:p-10 min-h-[220px] border border-[var(--color-card-border)] text-foreground relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px] rounded-2xl" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] flex items-center justify-center mb-8">
                  <Calendar size={22} className="text-accent" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Availability</p>
                <h2 className="text-3xl font-heading font-black leading-tight">Open for thoughtful freelance work.</h2>
              </div>
            </motion.div>

            <motion.div
              custom={2} variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4"
            >
              {[
                { label: "Response", value: "24 hours", icon: Clock3 },
                { label: "Location", value: "India",    icon: MapPin },
                { label: "Channel",  value: "Email",    icon: Mail },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="bg-section-alt rounded-xl p-5 border border-[var(--color-card-border)]"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    <div className="h-10 w-10 rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] flex items-center justify-center text-accent mb-5">
                      <Icon size={18} />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-heading font-black text-foreground">{item.value}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
