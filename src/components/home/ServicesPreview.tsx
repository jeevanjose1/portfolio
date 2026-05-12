"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cloud, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/lib/data";
import type { ServiceItem } from "@/lib/data";

const iconMap = { Monitor, Smartphone, Cloud } as const;

const projectCounts = ["24 projects", "18 projects", "12 projects"];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = iconMap[service.iconName];
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      className="bg-background rounded-lg border border-border p-8 group hover:border-accent/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row: icon + arrow */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
            <Icon size={26} className="text-accent group-hover:text-white transition-colors" />
          </div>
          <Link
            href={service.linkHref}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-200"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
      </div>

      {/* Bottom: project count pill */}
      <div className="flex items-center justify-between pt-5 border-t border-border">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {projectCounts[index]}
        </span>
        <Link href={service.linkHref} className="text-sm font-medium text-accent hover:underline">
          Learn More
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesPreview() {
  return (
    <section id="services" className="py-12 lg:py-16 transition-colors duration-300">
      <div className="section-container">
        {/* Header — left-aligned like Figma Variation 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">Services</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            I am Specialized In...
          </h2>
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
