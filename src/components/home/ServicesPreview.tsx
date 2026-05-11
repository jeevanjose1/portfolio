"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cloud, ArrowRight } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/lib/data";
import type { ServiceItem } from "@/lib/data";

const iconMap = { Monitor, Smartphone, Cloud } as const;

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = iconMap[service.iconName];
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      className="card p-8 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300">
        <Icon size={24} className="text-accent" />
      </div>
      <h3 className="text-lg font-heading font-semibold text-primary mb-3">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
      <Link href={service.linkHref} className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all duration-200">
        Learn More <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
}

export default function ServicesPreview() {
  return (
    <section id="services" className="bg-white">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="text-center mb-14">
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">Services</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">What I Do</h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
