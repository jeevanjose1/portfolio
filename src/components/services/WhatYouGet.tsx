"use client";

import { motion } from "framer-motion";
import { Palette, Smartphone, Server, Shield, Bell, Upload, Box, Workflow, Activity, Database, Gauge, Zap } from "lucide-react";
import type { MainServiceItem } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Palette, Smartphone, Server, Shield, Bell, Upload, Box, Workflow, Activity, Database, Gauge, Zap
};

export default function WhatYouGet({ service }: { service: MainServiceItem }) {
  return (
    <section className="bg-white py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Value Proposition
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary">
            What&apos;s Included.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.whatYouGet.map((item, i) => {
            const Icon = iconMap[item.icon] || Server;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gray-50 rounded-lg p-8 border border-gray-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                  <Icon size={24} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-black text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
