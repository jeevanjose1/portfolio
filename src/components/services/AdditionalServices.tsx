"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Network, BarChart3, Code2, Shield, Zap, Search, Globe, Smartphone, Monitor } from "lucide-react";
import { additionalServicesData } from "@/lib/data";
import { SanityService } from "@/sanity/types";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart, Network, BarChart3, Code2, Shield, Zap, Search, Globe, Smartphone, Monitor
};

function AdditionalServiceCard({ service, index }: { service: SanityService | { title: string; iconName: string; description: string }; index: number }) {
  const Icon = iconMap[service.iconName] || Search;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-section-alt p-8 sm:p-10 rounded-2xl border border-[var(--color-card-border)] group hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] hover:-translate-y-0.5 transition-all duration-500"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="w-12 h-12 rounded-xl bg-background border border-[var(--color-card-border)] flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300">
        <Icon size={24} className="text-accent group-hover:text-background transition-colors" />
      </div>
      <h3 className="text-lg font-heading font-black text-foreground mb-3 uppercase tracking-tight">{service.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed font-body italic">
        &ldquo;{service.description}&rdquo;
      </p>
    </motion.div>
  );
}

export default function AdditionalServices({ services, additionalItems }: { services: SanityService[], additionalItems?: { title: string; iconName: string; description: string }[] }) {
  const displayData = additionalItems && additionalItems.length > 0 ? additionalItems : (services.length > 0 ? services : additionalServicesData);

  return (
    <section className="bg-background relative z-20 transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">{"// "} More Capabilities</p>
          <h2 className="text-3xl font-heading font-black text-foreground">
            Specialized Services.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayData.map((service, i) => (
            <AdditionalServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
