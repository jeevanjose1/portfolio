"use client";

import { motion } from "framer-motion";
import Accordion from "@/components/Accordion";
import type { MainServiceItem } from "@/lib/data";

export default function ServiceFAQ({ service }: { service: MainServiceItem }) {
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Queries
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            Frequently Asked Questions.
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {service.faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Accordion question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
