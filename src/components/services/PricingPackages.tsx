"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X } from "lucide-react";
import type { MainServiceItem } from "@/lib/data";

export default function PricingPackages({ service }: { service: MainServiceItem }) {
  return (
    <section className="bg-gray-50 py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Investment
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary">
            Pricing & Packages.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {service.packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl flex flex-col transition-transform duration-500 hover:-translate-y-2 ${
                pkg.highlighted
                  ? "bg-primary text-white shadow-2xl shadow-primary/20 scale-105 z-10 border border-gray-800"
                  : pkg.name === "Enterprise"
                  ? "bg-gray-900 text-white shadow-xl border border-gray-800"
                  : "bg-white text-primary border border-gray-200 shadow-lg"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="p-8 border-b border-gray-200/20">
                <h3 className="text-sm font-black uppercase tracking-widest mb-2 opacity-80">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-heading font-black">{pkg.price}</span>
                </div>
                <p className="text-sm font-body italic opacity-80">{pkg.label}</p>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check size={18} className={pkg.highlighted ? "text-accent" : "text-green-500"} />
                      ) : (
                        <X size={18} className="text-gray-400 opacity-50" />
                      )}
                      <span className={`text-sm font-body ${feature.included ? 'opacity-90' : 'opacity-50'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`w-full py-4 rounded-lg font-black uppercase tracking-widest text-xs text-center transition-all duration-300 ${
                    pkg.highlighted
                      ? "bg-white text-primary hover:bg-gray-100"
                      : pkg.name === "Enterprise"
                      ? "bg-accent text-white hover:bg-blue-600"
                      : "bg-white text-primary border border-gray-200 hover:border-primary hover:bg-gray-50"
                  }`}
                >
                  {pkg.name === "Enterprise" ? "Let's Talk" : "Get Started"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-500 font-body mb-4">
            Not sure which package is right for you? Let&apos;s discuss your requirements first.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-accent font-black uppercase tracking-widest text-sm hover:text-primary transition-colors"
          >
            Book a Free Call &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
