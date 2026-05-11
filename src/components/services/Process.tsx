"use client";

import { motion } from "framer-motion";
import ProcessStep from "@/components/ProcessStep";
import { processData } from "@/lib/data";

export default function Process() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            How I Work
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-col md:flex-row relative max-w-5xl mx-auto">
          {processData.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="flex-1 flex flex-col items-center"
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
