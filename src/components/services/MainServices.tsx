"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cloud, CheckCircle2, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { mainServicesData } from "@/lib/data";
import type { MainServiceItem } from "@/lib/data";

// Fallback to CheckCircle if CheckCircle2 is missing in this lucide-react version
const CheckIcon = CheckCircle2 || CheckCircle;
const iconMap = { Monitor, Smartphone, Cloud } as const;

function MainServiceCard({ service, index }: { service: MainServiceItem; index: number }) {
  const Icon = iconMap[service.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col h-full relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-t-4 hover:border-t-accent"
    >
      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} className="text-accent" />
      </div>
      
      <h3 className="text-2xl font-heading font-bold text-primary mb-3">
        {service.title}
      </h3>
      <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>

      <ul className="space-y-3 mb-8">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckIcon size={18} className="text-accent mt-0.5 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="pt-6 border-t border-gray-100 mt-auto">
        <p className="text-sm text-gray-500 mb-4">
          Starting at <span className="text-lg font-bold text-accent">{service.startingPrice}</span>
        </p>
        <Link
          href={service.linkHref}
          className="w-full btn-primary inline-flex items-center justify-center gap-2 group-hover:bg-blue-700"
        >
          Get a Quote
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function MainServices() {
  return (
    <section className="bg-white -mt-10 relative z-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">
            What I Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            Core Services
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServicesData.map((service, i) => (
            <MainServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
