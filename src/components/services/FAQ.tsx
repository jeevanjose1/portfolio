"use client";

import { motion } from "framer-motion";
import Accordion from "@/components/Accordion";
import { faqData } from "@/lib/data";
import { SanityFAQ } from "@/sanity/types";

export default function FAQ({ faqs }: { faqs: SanityFAQ[] }) {
  const displayData = faqs.length > 0 ? faqs : faqData;

  return (
    <section className="bg-section-alt py-12 transition-colors duration-300">
      <div className="section-container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Questions
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            Curated FAQ.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-4"
        >
          {displayData.map((faq, i) => (
            <Accordion
              key={i}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
