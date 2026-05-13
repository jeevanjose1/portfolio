"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cloud, ArrowUpRight, CheckCircle2, Globe, Zap, Shield, Search } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/lib/data";
import type { ServiceItem } from "@/lib/data";
import { SanityService } from "@/sanity/types";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Smartphone, Cloud, Globe, Zap, Shield, Search
};

const serviceNumbers = ["01", "02", "03"];

function ServiceCard({ service, index }: { service: SanityService | ServiceItem; index: number }) {
  const Icon = iconMap[service.iconName] || Monitor;
  const isSanity = "_id" in service;
  const href = isSanity ? `/services/${service.slug}` : (service as ServiceItem).linkHref;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="group bg-section-alt rounded-2xl border border-[var(--color-card-border)] p-8 sm:p-10 transition-all duration-500 hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] hover:-translate-y-0.5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-start justify-between gap-4 mb-10">
        <div>
          <span className="text-[10px] font-black text-[color-mix(in_srgb,var(--color-accent)_40%,transparent)] mb-4 block">
            {serviceNumbers[index]}
          </span>
          <div className="h-12 w-12 rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] text-accent flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:text-background group-hover:border-accent">
            <Icon size={22} />
          </div>
        </div>
        <Link
          href={href}
          aria-label={`Open ${service.title}`}
          className="h-10 w-10 rounded-xl border border-[var(--color-border)] bg-surface-2 flex items-center justify-center text-muted-foreground transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:bg-[color-mix(in_srgb,var(--color-accent)_5%,transparent)]"
        >
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <h3 className="text-xl font-heading font-black text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        {service.description}
      </p>

      <div className="pt-5 border-t border-[var(--color-border)] flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
        <CheckCircle2 size={13} className="text-accent" />
        <span>Scope, build, ship</span>
      </div>
    </motion.article>
  );
}

export default function ServicesPreview({ services }: { services: SanityService[] }) {
  const displayData = services.length > 0 ? services : servicesData;

  return (
    <section id="services" className="transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left label panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-section-alt rounded-2xl border border-[var(--color-card-border)] p-10 sm:p-12 flex flex-col justify-between"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div>
              <p className="section-label mb-5">What I Build</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground leading-tight mb-6">
                Practical software for real business needs.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                The home page stays brief. For the full background, skills, and story, head to the About page.
              </p>
            </div>

            <Link href="/about" className="btn-secondary mt-10 gap-2 w-fit">
              About Me
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          {/* Service cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {displayData.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
