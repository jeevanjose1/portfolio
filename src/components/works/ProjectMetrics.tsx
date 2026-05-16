"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import type { ProjectMetric } from "@/lib/data";
import type { NormalizedProject } from "./types";
import { Reveal } from "@/components/animations/Reveal";

function CountUp({ metric }: { metric: ProjectMetric }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { duration: 2500, bounce: 0 });
  const displayValue = useTransform(springValue, (current) =>
    Number.isInteger(metric.numericValue)
      ? Math.floor(current).toString()
      : current.toFixed(2).replace(/\.?0+$/, "")
  );

  useEffect(() => {
    if (isInView) springValue.set(metric.numericValue);
  }, [isInView, springValue, metric.numericValue]);

  return (
    <span ref={ref} className="inline-flex items-center">
      <motion.span>{displayValue}</motion.span>
      {metric.suffix && <span>{metric.suffix}</span>}
    </span>
  );
}

export default function ProjectMetrics({ project }: { project: NormalizedProject }) {
  if (!project.metrics || project.metrics.length === 0) return null;

  return (
    <section className="py-12 lg:py-16 bg-contrast-bg relative border-y border-border overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {project.metrics.map((metric, i) => (
            <Reveal
              key={metric.label}
              width="100%"
              delay={i * 0.1}
              y={20}
              blur
              className="h-full"
            >
              <div
                className="bg-white/5 backdrop-blur-md rounded-lg p-10 text-center border border-white/10 h-full"
              >
                <div className="text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4">
                  <CountUp metric={metric} />
                </div>
                <p className="text-[10px] font-extrabold text-white/40 uppercase tracking-[0.16em]">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
