"use client";

import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { mainServicesData } from "@/lib/data";
import { SanityService } from "@/sanity/types";
import type { MainServiceItem } from "@/lib/data";
import GradientCard from "@/components/ui/GradientCard";
import { Reveal } from "@/components/animations/Reveal";
const iconMap: Record<string, React.ElementType> = {
  Monitor: LucideIcons.Monitor,
  Smartphone: LucideIcons.Smartphone,
  Cloud: LucideIcons.Cloud,
  Globe: LucideIcons.Globe,
  Zap: LucideIcons.Zap,
  Shield: LucideIcons.Shield,
  Search: LucideIcons.Search,
};

export default function RelatedServices({
  currentService,
  allServices
}: {
  currentService: SanityService | MainServiceItem;
  allServices?: (SanityService | MainServiceItem)[];
}) {
  const source = allServices && allServices.length > 0 ? allServices : mainServicesData;
  const otherServices = source
    .filter(s => s.slug !== (typeof currentService.slug === 'string' ? currentService.slug : (currentService as any).slug))
    .slice(0, 2); // Show top 2 related services

  return (
    <section className="bg-background py-24 transition-colors duration-300">
      <div className="section-container !py-0">
        <div className="mb-14">
          <Reveal delay={0.1}>
            <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
              {"//"} Keep Exploring
            </p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
              You Might Also Need.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {otherServices.map((service, i) => {
            const Icon = iconMap[service.iconName] || LucideIcons.Server;
            const isSanity = '_id' in service;
            const features = isSanity
              ? (service as SanityService).features || []
              : (service as MainServiceItem).features;

            return (
              <Reveal
                key={typeof service.slug === 'string' ? service.slug : (service as any).slug}
                width="100%"
                delay={i * 0.15}
                y={30}
                blur
                className="h-full"
              >
                <GradientCard className="h-full border border-card-border p-8 sm:p-10 flex flex-col bg-background transition-all duration-500 hover:border-accent-25 hover:-translate-y-0.5 group" >
                  <div className="w-14 h-14 rounded-xl bg-surface-2 border border-border flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300 shrink-0">
                    <Icon size={26} className="text-accent group-hover:text-background transition-colors" />
                  </div>

                  <h3 className="text-2xl font-heading font-black text-foreground mb-3 group-hover:text-accent transition-colors duration-300 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 leading-relaxed mb-8 flex-grow font-body italic text-sm">
                    &ldquo;{service.description}&rdquo;
                  </p>

                  {features.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {features.slice(0, 2).map((feature: any, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <LucideIcons.CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-xs font-black uppercase tracking-widest text-muted-foreground line-clamp-1">{typeof feature === 'string' ? feature : feature.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="pt-6 border-t border-border mt-auto flex items-center justify-between relative z-10">
                    <Link
                      href={`/services/${typeof service.slug === 'string' ? service.slug : (service as any).slug}`}
                      className="group/btn flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent hover:text-foreground transition-colors duration-300"
                    >
                      Learn More
                      <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                    </Link>
                  </div>
                </GradientCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
