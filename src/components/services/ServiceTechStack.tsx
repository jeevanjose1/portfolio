"use client";

import { motion } from "framer-motion";
import type { MainServiceItem } from "@/lib/data";

export default function ServiceTechStack({ service }: { service: MainServiceItem }) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} The Stack
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary mb-6">
            Technologies I Use.
          </h2>
          <p className="text-gray-500 font-body max-w-2xl text-lg">
            I choose the right tools for the job. This modern, battle-tested stack ensures your product is fast, secure, and ready to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.techStack.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm"
            >
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech) => (
                  <div
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-sm font-black text-primary shadow-sm hover:border-accent/30 hover:text-accent transition-colors duration-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
