"use client";

import { ShoppingCart, Network, BarChart3, Code2, Shield, Zap, Search, Globe, Smartphone, Monitor } from "lucide-react";
import { additionalServicesData } from "@/lib/data";
import { SanityService } from "@/sanity/types";
import { Reveal } from "@/components/animations/Reveal";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart, Network, BarChart3, Code2, Shield, Zap, Search, Globe, Smartphone, Monitor
};

function AdditionalServiceCard({ service, index }: { service: SanityService | { title: string; iconName: string; description: string }; index: number }) {
  const Icon = iconMap[service.iconName] || Search;

  return (
    <Reveal
      width="100%"
      delay={index * 0.1}
      y={30}
      blur
      className="h-full"
    >
      <div
        className="bg-section-alt p-8 sm:p-10 rounded-xl border border-[var(--color-card-border)] group hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] hover:-translate-y-0.5 transition-all duration-500 h-full flex flex-col"
         
      >
        <div className="w-12 h-12 rounded-xl bg-background border border-[var(--color-card-border)] flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300 shrink-0">
          <Icon size={24} className="text-accent group-hover:text-background transition-colors" />
        </div>
        <h3 className="text-lg font-heading font-black text-foreground mb-3 uppercase tracking-tight">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed font-body italic flex-grow">
          &ldquo;{service.description}&rdquo;
        </p>
      </div>
    </Reveal>
  );
}

export default function AdditionalServices({ services, additionalItems }: { services: SanityService[], additionalItems?: { title: string; iconName: string; description: string }[] }) {
  const displayData = additionalItems && additionalItems.length > 0 ? additionalItems : (services.length > 0 ? services : additionalServicesData);

  return (
    <section className="bg-background relative z-20 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-14">
          <Reveal delay={0.1}>
            <p className="section-label mb-4">{"// "} More Capabilities</p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-3xl font-heading font-black text-foreground">
              Specialized Services.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayData.map((service, i) => (
            <AdditionalServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
