"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cloud, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/lib/data";
import type { ServiceItem } from "@/lib/data";

const iconMap = { Monitor, Smartphone, Cloud } as const;

const serviceNotes = [
  "Product interfaces, dashboards, portals, and SaaS workflows.",
  "Cross-platform mobile apps with clean flows and reliable releases.",
  "Deployment, infrastructure setup, automation, and production support.",
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = iconMap[service.iconName];

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      className="group bg-section-alt rounded-lg border border-border p-6 sm:p-7 shadow-card transition-colors duration-300 hover:border-accent/35"
    >
      <div className="flex items-start justify-between gap-5 mb-8">
        <div className="h-12 w-12 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center transition-colors duration-300 group-hover:bg-accent group-hover:text-background">
          <Icon size={22} />
        </div>
        <Link
          href={service.linkHref}
          aria-label={`Open ${service.title}`}
          className="h-10 w-10 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-accent"
        >
          <ArrowUpRight size={17} />
        </Link>
      </div>

      <h3 className="text-xl font-heading font-black text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-7">
        {serviceNotes[index] ?? service.description}
      </p>

      <div className="pt-5 border-t border-border flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
        <CheckCircle2 size={14} className="text-accent" />
        <span>Scope, build, ship</span>
      </div>
    </motion.article>
  );
}

export default function ServicesPreview() {
  return (
    <section id="services" className="pb-12 lg:pb-16 transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 bg-section-alt rounded-lg border border-border p-7 sm:p-8 shadow-card flex flex-col justify-between"
          >
            <div>
              <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-4">
                What I Build
              </p>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground leading-tight mb-5">
                Practical software for real business needs.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                The home page stays brief. For the full background, skills, and story, head to the About page.
              </p>
            </div>

            <Link href="/about" className="btn-secondary mt-8 gap-2 w-fit">
              About Me
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {servicesData.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
