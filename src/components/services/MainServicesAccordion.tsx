"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { mainServicesData } from "@/lib/data";

export default function MainServicesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="section-padding border-t border-subtle">
      <div className="container-custom">
        <div className="flex flex-col">
          {mainServicesData.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.title}
                className="border-b border-subtle last:border-b-0"
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full py-10 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="font-mono text-small text-muted group-hover:text-accent transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className={`text-h2 font-bold tracking-tight transition-all ${isExpanded ? "text-accent" : "text-primary group-hover:text-secondary"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="hidden md:block text-label font-mono text-muted uppercase tracking-wider">
                      ──────────────
                    </span>
                    <span className="text-label font-mono text-muted uppercase">
                      From $500
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 md:pl-28 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <p className="text-body text-secondary leading-relaxed">
                            {service.description}
                          </p>
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-block text-accent font-medium hover:underline underline-offset-4"
                          >
                            Start this project →
                          </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                          <div>
                            <p className="text-label font-mono text-muted uppercase mb-4 tracking-widest">Included</p>
                            <ul className="grid grid-cols-1 gap-2">
                              {service.features.slice(0, 4).map((feature) => (
                                <li key={feature} className="text-small text-secondary flex items-center gap-2">
                                  <span className="text-accent">✓</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
