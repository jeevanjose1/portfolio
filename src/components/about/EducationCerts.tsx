"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { educationData, certificationsData } from "@/lib/data";

const certIconColors: Record<string, string> = {
  AWS: "bg-orange-50 text-orange-600",
  GCP: "bg-blue-50 text-blue-600",
  React: "bg-cyan-50 text-cyan-600",
};

export default function EducationCerts() {
  return (
    <section className="bg-section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            Education & Certifications
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
          >
            <h3 className="text-lg font-heading font-semibold text-primary mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-accent" />
              Education
            </h3>
            {educationData.map((edu) => (
              <div key={edu.degree} className="card p-6">
                <h4 className="font-semibold text-primary mb-1">{edu.degree}</h4>
                <p className="text-sm text-gray-500">{edu.university}</p>
                <span className="inline-block mt-3 px-3 py-0.5 rounded-full bg-blue-50 text-accent text-xs font-semibold">
                  Class of {edu.year}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.45 }}
          >
            <h3 className="text-lg font-heading font-semibold text-primary mb-4 flex items-center gap-2">
              <Award size={20} className="text-accent" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
              {certificationsData.map((cert) => {
                const colorClass = certIconColors[cert.iconLabel] ?? "bg-gray-50 text-gray-600";
                return (
                  <div key={cert.name} className="card p-5 flex items-start gap-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                      <span className="text-xs font-bold">{cert.iconLabel}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
