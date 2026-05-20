"use client";

import { Monitor, Smartphone, Cloud, CheckCircle2, ArrowUpRight, Globe, Zap, Shield, Search } from "lucide-react";
import Link from "next/link";
import { mainServicesData } from "@/lib/data";
import type { MainServiceItem } from "@/lib/data";
import { SanityService } from "@/sanity/types";
import GradientCard from "@/components/ui/GradientCard";
import { Reveal } from "@/components/animations/Reveal";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Smartphone, Cloud, Globe, Zap, Shield, Search
};

// Per-index fallback icons so cards never look identical
const fallbackIcons: React.ElementType[] = [Monitor, Smartphone, Cloud];

function MainServiceCard({ service, index }: { service: SanityService | MainServiceItem; index: number }) {
  const Icon = iconMap[service.iconName] || fallbackIcons[index % fallbackIcons.length] || Monitor;
  const isSanity = '_id' in service;

  const features = isSanity
    ? (service as SanityService).features || (service.tagline ? [service.tagline] : [])
    : (service as MainServiceItem).features;

  return (
    <Reveal
      width="100%"
      delay={index * 0.1}
      y={20}
      className="h-full"
    >
      <GradientCard className="h-full border border-card-border p-8 sm:p-10 flex flex-col bg-background transition-all duration-500 hover:border-accent-25 group">
        <div className="w-14 h-14 rounded-xl bg-surface-2 border border-border flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300 shrink-0">
          <Icon size={26} className="text-accent group-hover:text-background transition-colors" />
        </div>

        <h3 className="text-2xl font-heading font-extrabold text-foreground mb-3 group-hover:text-accent transition-colors duration-300 uppercase tracking-tight">
          {service.title}
        </h3>
        <p className="text-muted-foreground line-clamp-4 leading-relaxed mb-8 text-sm">
          {service.description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-3 mb-8">
            {features.slice(0, 3).map((feature: string | { title: string }, i: number) => {
              const text = typeof feature === 'string' ? feature : feature.title;
              return (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">{text}</span>
                </li>
              );
            })}
          </ul>
        )}

        <div className="pt-6 border-t border-border mt-auto flex items-center justify-between relative z-10">
          <Link scroll={false}
            href={`/services/${service.slug}`}
            className="group/btn flex items-center hover:underline gap-2 text-sm font-extrabold uppercase tracking-[0.16em] text-accent hover:text-foreground transition-colors duration-300"
          >
            Learn More
            <ArrowUpRight size={18} className="group-hover/btn:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </GradientCard>
    </Reveal>
  );
}

export default function MainServices({ services }: { services: SanityService[] }) {
  const displayData = services.length > 0 ? services : mainServicesData;

  return (
    <section className="bg-background relative z-20 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-14">
          <Reveal delay={0.1}>
            <p className="section-label mb-4">Expertise</p>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground">
              Core Solutions.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {displayData.map((service, i) => (
            <MainServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
