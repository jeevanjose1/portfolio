"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Network, BarChart3, Code2 } from "lucide-react";
import { additionalServicesData } from "@/lib/data";

const iconMap = { ShoppingCart, Network, BarChart3, Code2 } as const;

export default function AdditionalServices() {
  return (
    <section className="bg-section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            Also Available
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServicesData.map((service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="card p-6 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center shadow-sm mb-4 group-hover:border-blue-200 transition-colors duration-300">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="text-base font-heading font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
