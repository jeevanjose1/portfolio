"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cloud, CheckCircle2, CheckCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { mainServicesData } from "@/lib/data";
import type { MainServiceItem } from "@/lib/data";
import GradientCard from "@/components/GradientCard";

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
      className="h-full"
    >
      <GradientCard className="h-full border border-border p-8 flex flex-col bg-background transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5">
        <div className="w-14 h-14 rounded-lg bg-section-alt border border-border flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300">
          <Icon size={28} className="text-accent group-hover:text-background transition-colors" />
        </div>
        
        <h3 className="text-2xl font-heading font-black text-foreground mb-3 group-hover:text-accent transition-colors duration-300 uppercase tracking-tight">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8 flex-grow font-body italic text-sm">
          &ldquo;{service.description}&rdquo;
        </p>

        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckIcon size={16} className="text-accent mt-0.5 flex-shrink-0" />
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-border mt-auto flex items-center justify-between relative z-10">
          <span className="text-sm font-black uppercase tracking-widest text-foreground">Starts at {service.startingPrice}</span>
          <Link
            href={`/services/${service.slug}`}
            className="group/btn flex items-center gap-2 text-sm font-black uppercase tracking-widest text-accent hover:text-foreground transition-colors duration-300"
          >
            Learn More
            <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </GradientCard>
    </motion.div>
  );
}

export default function MainServices() {
  return (
    <section className="bg-background py-16 relative z-20 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            Core Solutions.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainServicesData.map((service, i) => (
            <MainServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
