"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import type { MainServiceItem } from "@/lib/data";

export default function ProcessTimeline({ service }: { service: MainServiceItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-background py-16 transition-colors duration-300" ref={containerRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Step by Step
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            My Working Process.
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Vertical Line (Background) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 rounded-full" />
          
          {/* Timeline Vertical Line (Animated Progress) */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-accent -translate-x-1/2 rounded-full origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-12">
            {service.process.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-background border-4 border-border flex items-center justify-center -translate-x-1/2 z-10 font-black text-foreground shadow-sm">
                    {step.step}
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full md:w-1/2 pl-20 md:pl-0"
                  >
                    <div className={`bg-background rounded-lg p-8 border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                      <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-black uppercase tracking-widest rounded-lg mb-4">
                        {step.duration}
                      </div>
                      <h3 className="text-2xl font-heading font-black text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-body leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
