"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Content (55%) */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-label font-mono text-accent uppercase tracking-[0.12em]">
              About Me
            </p>
            <h1 className="text-h1 font-extrabold text-primary tracking-tighter">
              Developer by profession. <br />
              Builder by nature.
            </h1>
            <div className="space-y-6 text-body text-secondary max-w-xl leading-[1.75]">
              <p>
                My journey in development started with a curiosity about how things work 
                on the web. Today, I specialize in building complex applications that 
                bridge the gap between beautiful design and robust engineering.
              </p>
              <p>
                Over the past 4 years, I&apos;ve collaborated with startups and established 
                businesses to ship products that are scalable, maintainable, and 
                user-centric. I believe in clean code, clear architecture, and 
                relentless iteration.
              </p>
              <p>
                When I&apos;m not writing code, you&apos;ll find me exploring new technologies, 
                contributing to open source, or sharing what I&apos;ve learned with the 
                developer community.
              </p>
            </div>
          </div>

          {/* Right: Image (45%) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="aspect-[4/5] relative overflow-hidden rounded-radius-img border border-subtle">
                <Image
                  src="/images/profile.jpg" // Assuming this exists or using a placeholder
                  alt="Jeevan Jose"
                  fill
                  className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 scale-105 group-hover:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
