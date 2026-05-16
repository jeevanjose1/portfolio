"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import type { MainServiceItem } from "@/lib/data";
import { Reveal } from "@/components/animations/Reveal";

export default function PricingPackages({ service }: { service: MainServiceItem }) {
  return (
    <section className="bg-section-alt py-24 transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16 text-center">
          <Reveal delay={0.1} className="mx-auto">
            <p className="text-accent text-[10px] font-extrabold uppercase tracking-[0.16em] mb-3">
              {"//"} Investment
            </p>
          </Reveal>
          <Reveal delay={0.2} blur className="mx-auto">
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold text-foreground">
              Pricing & Packages.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {service.packages.map((pkg, i) => (
            <Reveal
              key={pkg.name}
              width="100%"
              delay={i * 0.1}
              y={30}
              blur
              className="h-full"
            >
              <div
                className={`relative rounded-xl flex flex-col transition-transform duration-500 hover:-translate-y-2 h-full ${pkg.highlighted
                  ? "bg-accent text-white shadow-2xl shadow-accent-20 scale-105 z-10 border border-white/20"
                  : pkg.name === "Enterprise"
                    ? "bg-primary text-background  border border-border"
                    : "bg-background text-foreground border border-border shadow-lg"
                  }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent dark:bg-white dark:text-accent text-white px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.16em]">
                    Most Popular
                  </div>
                )}

                <div className="p-8 border-b border-border/50 shrink-0">
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] mb-2 opacity-80">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-heading font-extrabold">{pkg.price}</span>
                  </div>
                  <p className="text-sm font-body italic opacity-80">{pkg.label}</p>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check size={18} className={pkg.highlighted ? "text-white/80" : "text-green-500"} />
                        ) : (
                          <X size={18} className="text-muted-foreground opacity-50" />
                        )}
                        <span className={`text-sm font-body ${feature.included ? 'opacity-90' : 'opacity-50'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full py-4 rounded-lg font-extrabold uppercase tracking-[0.16em] text-xs text-center transition-all duration-300 ${pkg.highlighted
                      ? "bg-white text-slate-900 hover:bg-gray-100 dark:bg-white dark:text-accent"
                      : pkg.name === "Enterprise"
                        ? "bg-accent text-white hover:bg-blue-600"
                        : "bg-background text-foreground border border-border hover:border-accent hover:bg-accent-5"
                      }`}
                  >
                    {pkg.name === "Enterprise" ? "Let's Talk" : "Get Started"}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.6} y={20} className="text-center mt-16 mx-auto">
          <div>
            <p className="text-muted-foreground font-body mb-4">
              Not sure which package is right for you? Let&apos;s discuss your requirements first.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-accent font-extrabold uppercase tracking-[0.16em] text-sm hover:text-foreground transition-colors"
            >
              Book a Free Call &rarr;
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
