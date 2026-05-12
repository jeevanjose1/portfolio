"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Network, BarChart3, Code2 } from "lucide-react";
import { additionalServicesData } from "@/lib/data";

const iconMap = { ShoppingCart, Network, BarChart3, Code2 } as const;

export default function AdditionalServices() {
  return (
    <section className="bg-section-alt py-16 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Extensions
          </p>
          <h2 className="text-4xl font-heading font-black text-foreground">
            Niche Expertise.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServicesData.map((service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="bg-background rounded-lg p-10 flex flex-col items-start border border-border hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-full bg-section-alt border border-border flex items-center justify-center mb-8 group-hover:bg-accent transition-all duration-300">
                  <Icon size={24} className="text-accent group-hover:text-background transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-black text-foreground mb-3 uppercase tracking-tight group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
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
