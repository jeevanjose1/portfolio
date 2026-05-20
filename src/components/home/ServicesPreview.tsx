"use client";

import { Monitor, Smartphone, Cloud, ArrowUpRight, Globe, Zap, Shield, Search } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/lib/data";
import type { ServiceItem } from "@/lib/data";
import { SanityService } from "@/sanity/types";
import { Reveal } from "@/components/animations/Reveal";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Smartphone, Cloud, Globe, Zap, Shield, Search
};

// Per-index fallback icons so cards never look identical
const fallbackIcons: React.ElementType[] = [Monitor, Smartphone, Cloud];

const serviceNumbers = ["01", "02", "03"];

function ServiceCard({ service, index }: { service: SanityService | ServiceItem; index: number }) {
  const Icon = iconMap[service.iconName] || fallbackIcons[index % fallbackIcons.length] || Monitor;
  const isSanity = "_id" in service;
  const href = isSanity ? `/services/${service.slug}` : (service as ServiceItem).linkHref;

  return (
    <Reveal
      width="100%"
      delay={index * 0.1}
      y={20}
      className="h-full"
    >
      <article
        className="group bg-section-alt rounded-xl border border-card-border p-5 sm:p-8 shadow-sm transition-all duration-300 hover:border-accent-25 h-full flex flex-col"
      >
        <div className="flex items-start justify-between gap-4 mb-10">
          <div>
            <span className="text-[10px] font-bold text-accent-40 mb-4 block">
              {serviceNumbers[index]}
            </span>
            <div className="h-12 w-12 rounded-lg bg-accent-10 border border-accent-15 text-accent flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:text-background group-hover:border-accent">
              <Icon size={22} />
            </div>
          </div>
          <Link scroll={false}
            href={href}
            aria-label={`Open ${service.title}`}
            className="h-10 w-10 rounded-lg border border-border bg-surface-2 flex items-center justify-center text-muted-foreground transition-all duration-300 group-hover:border-accent group-hover:text-accent group-hover:bg-accent-5"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <h3 className="text-xl font-heading font-bold text-foreground mb-3">
          {service.title}
        </h3>
        <p className="text-sm line-clamp-4 text-muted-foreground leading-relaxed mb-8">
          {service.description}
        </p>

        <div className="pt-5 border-t border-border flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mt-auto">
          <span className="w-3 h-px bg-accent inline-block" />
          <span>Scope, build, ship</span>
        </div>
      </article>
    </Reveal>
  );
}

export default function ServicesPreview({ services }: { services: SanityService[] }) {
  const displayData = services.length > 0 ? services : servicesData;

  return (
    <section id="services" className="transition-colors duration-300">
      <div className="section-container">
        <Reveal
          width="100%"
          className="lg:col-span-4 mb-4"
          y={30}
          duration={1}
        >
          <div
            className="bg-section-alt rounded-xl border border-card-border shadow-card p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full"
          >
            <div>
              <Reveal delay={0.2}>
                <p className="section-label mb-5">What I Build</p>
              </Reveal>
              <Reveal delay={0.3}>
                <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-foreground leading-tight mb-5">
                  Practical software for real business needs.
                </h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-muted-foreground text-sm sm:text-base leading-7 max-w-3xl">
                  I specialize in full-stack web and mobile development, turning complex problems into clean, scalable solutions. Learn more about my journey, technical stack, and approach on the About page.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.5} y={20}>
              <Link scroll={false} href="/about" className="btn-secondary mt-10 gap-2 w-fit">
                About Me
                <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-stretch">
          {/* Service cards */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {displayData.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
