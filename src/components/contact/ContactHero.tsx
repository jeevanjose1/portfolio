"use client";

import { motion } from "framer-motion";
import { ArrowDown, Calendar, Clock3, Mail, MapPin, MessageSquare } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ContactHero() {
  return (
    <section className="min-h-[84vh] flex items-center pb-8 transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="md:col-span-7 bg-section-alt rounded-lg p-7 sm:p-10 min-h-[430px] border border-border shadow-card flex flex-col justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-accent text-background text-[10px] font-black uppercase tracking-widest mb-6">
                <MessageSquare size={14} />
                Get in Touch
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground leading-[1.08] mb-5">
                Tell me what you&apos;re building. I&apos;ll help shape the next step.
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                Have a project in mind? Send the brief, timeline, and goal. I typically respond within 24 hours with clear next steps.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact-form" className="btn-primary gap-2">
                Send Project Brief
                <ArrowDown size={16} />
              </a>
              <a href="mailto:hello@jeevanjose.com" className="btn-secondary gap-2">
                Email Directly
                <Mail size={16} />
              </a>
            </div>
          </motion.div>

          <div className="md:col-span-5 grid grid-cols-1 gap-4">
            <motion.div
              custom={1}
              variants={fadeUp}
              className="bg-primary rounded-lg p-7 sm:p-8 min-h-[210px] border border-border shadow-card text-background relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.28)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-lg bg-background/10 border border-background/15 flex items-center justify-center mb-8">
                  <Calendar size={22} className="text-accent" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-background/55 mb-3">
                  Availability
                </p>
                <h2 className="text-3xl font-heading font-black leading-tight">
                  Open for thoughtful freelance work.
                </h2>
              </div>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4"
            >
              {[
                { label: "Response", value: "24 hours", icon: Clock3 },
                { label: "Location", value: "India", icon: MapPin },
                { label: "Channel", value: "Email", icon: Mail },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="bg-section-alt rounded-lg p-5 border border-border shadow-card"
                  >
                    <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
                      <Icon size={19} />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-heading font-black text-foreground">
                      {item.value}
                    </p>
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
