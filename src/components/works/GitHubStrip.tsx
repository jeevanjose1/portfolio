"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const GithubIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function GitHubStrip() {
  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="section-container py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl font-heading font-bold text-primary mb-2 flex items-center justify-center md:justify-start gap-3">
              <GithubIcon size={28} className="text-gray-900" />
              Want to see more of my work?
            </h2>
            <p className="text-gray-500">
              Check out my GitHub for open-source contributions, experiments, and code samples.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-1">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm">
              30+ Repositories
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm">
              500+ Contributions
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 shadow-sm">
              Open Source Contributor
            </span>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 group"
            >
              View GitHub Profile
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
