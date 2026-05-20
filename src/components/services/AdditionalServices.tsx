"use client";

import * as LucideIcons from "lucide-react";
import { additionalServicesData } from "@/lib/data";
import { SanityService } from "@/sanity/types";
import { Reveal } from "@/components/animations/Reveal";

function AdditionalServiceCard({ service, index }: { service: SanityService | { title: string; iconName: string; description: string }; index: number }) {
  // @ts-expect-error - dynamic indexing LucideIcons
  const Icon = LucideIcons[service.iconName] || LucideIcons.Code2;

  return (
    <Reveal
      width="100%"
      delay={index * 0.08}
      y={20}
      className="h-full"
    >
      <div
        className="bg-section-alt p-8 sm:p-10 rounded-xl border border-card-border group hover:border-accent-30 hover:-translate-y-0.5 transition-all duration-500 h-full flex flex-col"
      >
        <div className="w-12 h-12 rounded-xl bg-background border border-card-border flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300 shrink-0">
          <Icon size={24} className="text-accent group-hover:text-background transition-colors" />
        </div>
        <h3 className="text-lg font-heading font-extrabold text-foreground mb-3 uppercase tracking-tight">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
          {service.description}
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
            <p className="section-label mb-4">More Capabilities</p>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground">
              Additional Services.
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
