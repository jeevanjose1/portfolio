"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CloudCog, Cpu, Layers3, MonitorSmartphone } from "lucide-react";
import { mainServicesData, servicesHeroData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const serviceIcons = [MonitorSmartphone, Layers3, CloudCog];

export default function ServicesHero() {
  return (
    <section className="min-h-[90vh] flex items-center transition-colors duration-300">
      <div className="section-container w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="md:col-span-7 bg-section-alt rounded-lg p-7 sm:p-10 min-h-[430px] border border-border shadow-card flex flex-col justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-accent text-background text-[10px] font-black uppercase tracking-widest mb-6">
                <Cpu size={14} />
                Product Engineering Services
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-foreground leading-[1.08] mb-5">
                From first scope to shipped, stable product.
              </h1>

              <p className="text-muted-foreground text-base sm:text-lg max-w-xl leading-relaxed">
                {servicesHeroData.subtitle}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary gap-2">
                Discuss a Project
                <ArrowRight size={16} />
              </Link>
              <Link href="/works" className="btn-secondary gap-2">
                View Proof
              </Link>
            </div>
          </motion.div>

          <div className="md:col-span-5 grid grid-cols-1 gap-4">
            <motion.div
              custom={1}
              variants={fadeUp}
              className="bg-primary rounded-lg p-7 sm:p-8 min-h-[210px] border border-border shadow-card text-background relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.28)_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-lg bg-background/10 border border-background/15 flex items-center justify-center mb-8">
                  <CheckCircle2 size={22} className="text-accent" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-background/55 mb-3">
                  Delivery Model
                </p>
                <h2 className="text-3xl font-heading font-black leading-tight">
                  Strategy, build, deploy, iterate.
                </h2>
              </div>
            </motion.div>

            <motion.div
              custom={2}
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4"
            >
              {mainServicesData.map((service, index) => {
                const Icon = serviceIcons[index] ?? Layers3;

                return (
                  <Link
                    key={service.slug}
                    href={service.linkHref}
                    className="bg-section-alt rounded-lg p-5 border border-border shadow-card group hover:border-accent/35 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-background transition-colors">
                      <Icon size={19} />
                    </div>
                    <p className="text-sm font-heading font-black text-foreground leading-snug">
                      {service.title}
                    </p>
                  </Link>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="md:col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {["Discovery first", "Clean architecture", "Deployment ready"].map((item) => (
              <div
                key={item}
                className="bg-section-alt rounded-lg p-5 border border-border shadow-card flex items-center gap-3"
              >
                <CheckCircle2 size={18} className="text-accent shrink-0" />
                <span className="text-sm font-black uppercase tracking-widest text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
