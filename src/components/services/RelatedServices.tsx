"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Smartphone, Cloud, ArrowUpRight } from "lucide-react";
import { mainServicesData } from "@/lib/data";
import type { MainServiceItem } from "@/lib/data";
import GradientCard from "@/components/GradientCard";

const iconMap = { Monitor, Smartphone, Cloud } as const;

export default function RelatedServices({ currentService }: { currentService: MainServiceItem }) {
  const otherServices = mainServicesData.filter(s => s.slug !== currentService.slug);

  return (
    <section className="bg-background py-16 transition-colors duration-300">
      <div className="section-container !py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Keep Exploring
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            You Might Also Need.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {otherServices.map((service, i) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="h-full"
              >
                <GradientCard className="h-full border border-border p-8 flex flex-col bg-background transition-all duration-500 hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] hover:shadow-xl hover:shadow-[color-mix(in_srgb,var(--color-accent)_5%,transparent)] group">
                  <div className="w-12 h-12 rounded-lg bg-section-alt border border-border flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300">
                    <Icon size={24} className="text-accent group-hover:text-background transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-black text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow font-body">
                    {service.description}
                  </p>

                  <div className="pt-6 border-t border-border mt-auto flex items-center justify-between relative z-10">
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                      {service.startingPrice}
                    </span>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group/btn flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent hover:text-foreground transition-colors duration-300"
                    >
                      Learn More
                      <ArrowUpRight size={16} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                    </Link>
                  </div>
                </GradientCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
