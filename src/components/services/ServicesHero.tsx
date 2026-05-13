"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CloudCog, Cpu, Layers3, MonitorSmartphone } from "lucide-react";
import { mainServicesData, servicesHeroData } from "@/lib/data";

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" as const },
  }),
};

const serviceIcons = [MonitorSmartphone, Layers3, CloudCog];

export default function ServicesHero() {
  return (
    <section className="min-h-[100svh] flex items-center pb-12 transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">

          {/* Text card */}
          <motion.div
            custom={0} variants={fadeUp}
            className="md:col-span-7 bg-section-alt rounded-2xl p-10 sm:p-12 min-h-[500px] border border-[var(--color-card-border)] flex flex-col justify-between"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div>
              <span className="hero-badge">
                <Cpu size={13} />
                Product Engineering Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-black text-foreground leading-[1.08] mb-5">
                From first scope to shipped, stable product.
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                {servicesHeroData.subtitle}
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary gap-2.5">
                Discuss a Project <ArrowRight size={15} />
              </Link>
              <Link href="/works" className="btn-secondary gap-2.5">
                View Proof
              </Link>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5">
            <motion.div
              custom={1} variants={fadeUp}
              className="bg-section-alt rounded-2xl p-8 sm:p-10 min-h-[220px] border border-[var(--color-card-border)] text-foreground relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] [background-size:28px_28px] rounded-2xl" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] flex items-center justify-center mb-8">
                  <CheckCircle2 size={22} className="text-accent" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Delivery Model</p>
                <h2 className="text-3xl font-heading font-black leading-tight">Strategy, build, deploy, iterate.</h2>
              </div>
            </motion.div>

            <motion.div
              custom={2} variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4"
            >
              {mainServicesData.map((service, index) => {
                const Icon = serviceIcons[index] ?? Layers3;
                return (
                  <Link
                    key={service.slug}
                    href={service.linkHref}
                    className="bg-section-alt rounded-xl p-5 border border-[var(--color-card-border)] group hover:border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] transition-all duration-300"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    <div className="h-10 w-10 rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-background transition-all duration-300">
                      <Icon size={18} />
                    </div>
                    <p className="text-sm font-heading font-black text-foreground leading-snug">{service.title}</p>
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom row */}
          <motion.div custom={3} variants={fadeUp} className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {["Discovery first", "Clean architecture", "Deployment ready"].map((item) => (
              <div
                key={item}
                className="bg-section-alt rounded-2xl p-6 border border-[var(--color-card-border)] flex items-center gap-3"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <CheckCircle2 size={17} className="text-accent shrink-0" />
                <span className="text-sm font-black uppercase tracking-widest text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
