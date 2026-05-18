"use client";

import { SanityService } from "@/sanity/types";
import type { MainServiceItem } from "@/lib/data";
import * as LucideIcons from 'lucide-react';
import { Reveal } from "@/components/animations/Reveal";

export default function WhatYouGet({ service }: { service: SanityService | MainServiceItem }) {
  const items = service.whatYouGet || [];
  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16">
          <Reveal delay={0.1}>
            <p className="text-accent text-[10px] font-extrabold uppercase tracking-[0.16em] mb-3">
              {"//"} Value Proposition
            </p>
          </Reveal>
          <Reveal delay={0.2} blur>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-foreground">
              What&apos;s Included.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: { icon: string; title: string; description: string }, i: number) => {
            // @ts-expect-error - indexing LucideIcons with a string
            const Icon = LucideIcons[item.icon] || LucideIcons.Server;
            return (
              <Reveal
                key={i}
                width="100%"
                delay={i * 0.1}
                y={30}
                blur
                className="h-full"
              >
                <div
                  className="bg-section-alt rounded-lg p-8 border border-border hover:border-accent-30 hover:shadow-xl hover:shadow-accent-5 transition-all duration-300 group h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-background border border-border shadow-sm flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-colors duration-300 shrink-0">
                    <Icon size={24} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-heading font-extrabold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed flex-grow">
                    {item.description}
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
