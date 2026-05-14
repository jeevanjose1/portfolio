"use client";

import { Search, Globe, Smartphone, Shield, Zap, LayoutDashboard, Lock, ShoppingCart, BarChart3, Database } from "lucide-react";
import type { NormalizedProject } from "./types";
import { Reveal } from "@/components/animations/Reveal";

const iconMap: Record<string, React.ElementType> = {
  Search, Globe, Smartphone, Shield, Zap, LayoutDashboard, Lock, ShoppingCart, BarChart3, Database
};

export default function ProjectFeatures({ project }: { project: NormalizedProject }) {
  if (!project.features || project.features.length === 0) return null;

  return (
    <section className="bg-section-alt py-12 lg:py-16">
      <div className="section-container">
        <Reveal delay={0.1} blur>
          <h2 className="text-4xl font-heading font-black text-foreground mb-12">
            Core Features.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.features.map((feature, i) => {
            const Icon = iconMap[feature.iconName] || Search;
            return (
              <Reveal
                key={feature.title}
                width="100%"
                delay={i * 0.1}
                y={30}
                blur
                className="h-full"
              >
                <div
                  className="bg-background p-10 rounded-lg border border-border shadow-sm group h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-full bg-section-alt border border-border flex items-center justify-center mb-8 group-hover:bg-accent transition-all shrink-0">
                    <Icon size={24} className="text-accent group-hover:text-background" />
                  </div>
                  <h3 className="text-xl font-heading font-black text-foreground mb-4 uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body flex-grow">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
