"use client";

import { beyondCodeData as fallbackBeyondCodeData } from "@/lib/data";
import type { BeyondCodeItem } from "@/lib/data";
import type { ElementType } from "react";
import * as LucideIcons from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

function BeyondCard({ item, index }: { item: BeyondCodeItem; index: number }) {
  const Icon = (LucideIcons[item.iconName as keyof typeof LucideIcons] || LucideIcons.Sparkles) as ElementType;
  return (
    <Reveal
      width="100%"
      delay={index * 0.1}
      y={30}
      blur
      className="h-full"
    >
      <div
        className="bg-background rounded-xl p-6 sm:p-10 border border-card-border shadow-card hover:border-accent-30 hover:-translate-y-0.5 transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
      >
        <LucideIcons.Sparkles size={48} className="absolute -top-4 -right-4 text-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

        <div className="w-14 h-14 rounded-xl bg-section-alt flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-300 border border-border shrink-0">
          <Icon  size={26} className="text-accent group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-xl font-heading font-extrabold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed font-body">
          {item.description}
        </p>
      </div>
    </Reveal>
  );
}

export default function BeyondCode({ items }: { items?: BeyondCodeItem[] }) {
  const displayItems = items || fallbackBeyondCodeData;
  return (
    <section className="bg-background transition-colors duration-300">
      <div className="section-container">
        <div className="mb-14">
          <Reveal delay={0.1}>
            <p className="section-label mb-4">{"// "} Personal</p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground">
              Beyond the IDE.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {displayItems.map((item, i) => (
            <BeyondCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
