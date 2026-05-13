"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Timeline from "@/components/Timeline";
import { timelineData as fallbackTimelineData, myStoryText as fallbackMyStoryText } from "@/lib/data";

export default function MyStory({ storyText, timeline }: { storyText?: string, timeline?: any[] }) {
  const text = storyText || fallbackMyStoryText;
  const items = timeline || fallbackTimelineData;
  return (
    <section className="bg-background relative transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">{"// "} Origins</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            My Journey.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Timeline Column */}
          <div className="lg:col-span-5 bg-section-alt rounded-2xl p-10 border border-[var(--color-card-border)]" style={{ boxShadow: "var(--shadow-card)" }}>
            <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-10">Milestones</h3>
            <Timeline items={items} />
          </div>

          {/* Story Text Column — Bento Style Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-7 bg-section-alt rounded-2xl border border-[var(--color-card-border)] h-full relative" style={{ boxShadow: "var(--shadow-card)" }}
          >
            {/* Background wrapper to clip the image */}


            {/* Sticky Content Wrapper */}
            <div className="sticky top-32 p-10 sm:p-14">
              <h3 className="text-2xl font-heading font-black text-foreground mb-8 relative z-10">
                Engineering with <br />
                <span className="text-accent italic font-serif">Intent.</span>
              </h3>
              <div className="space-y-6 relative z-10">
                <p className="text-muted-foreground leading-relaxed text-lg font-body italic">
                  &ldquo;{text.split('.')[0]}.&rdquo;
                </p>
                <p className="text-muted-foreground leading-relaxed font-body">
                  {text.substring(text.indexOf('.') + 1)}
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-border flex items-center justify-center">
                  <Image src="/images/headshot.png" alt="Avatar" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-foreground">Jeevan Jose</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Full-Stack Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
