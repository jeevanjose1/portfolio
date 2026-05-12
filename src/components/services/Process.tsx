"use client";

import { motion } from "framer-motion";
import ProcessStep from "@/components/ProcessStep";
import { processData } from "@/lib/data";

export default function Process() {
  return (
    <section className="bg-background py-16 lg:py-24 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Strategy
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            Execution Flow.
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row relative max-w-6xl mx-auto items-start">
          {processData.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex-1"
            >
              <ProcessStep
                number={step.number}
                iconName={step.iconName}
                title={step.title}
                description={step.description}
                isLast={i === processData.length - 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
