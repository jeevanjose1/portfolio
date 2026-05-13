"use client";

import { Search, Globe, Smartphone, Shield, Zap, LayoutDashboard, Lock, ShoppingCart, BarChart3, Database } from "lucide-react";
import type { NormalizedProject } from "./types";

const iconMap: Record<string, React.ElementType> = {
  Search, Globe, Smartphone, Shield, Zap, LayoutDashboard, Lock, ShoppingCart, BarChart3, Database
};

export default function ProjectFeatures({ project }: { project: NormalizedProject }) {
  if (!project.features || project.features.length === 0) return null;

  return (
    <section className="bg-section-alt py-12 lg:py-16">
      <div className="section-container">
        <h2 className="text-4xl font-heading font-black text-foreground mb-12">
          Core Features.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.features.map((feature) => {
            const Icon = iconMap[feature.iconName] || Search;
            return (
              <div
                key={feature.title}
                className="bg-background p-10 rounded-lg border border-border shadow-sm group"
              >
                <div className="w-12 h-12 rounded-full bg-section-alt border border-border flex items-center justify-center mb-8 group-hover:bg-accent transition-all">
                  <Icon size={24} className="text-accent group-hover:text-background" />
                </div>
                <h3 className="text-xl font-heading font-black text-foreground mb-4 uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
