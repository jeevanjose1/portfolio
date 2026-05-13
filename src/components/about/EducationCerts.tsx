"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Code2, Users, Target } from "lucide-react";
import { educationData as fallbackEducationData, certificationsData as fallbackCertificationsData, beyondCodeData as fallbackBeyondCodeData } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Code2,
  Users,
  Target,
};

const certIconColors: Record<string, string> = {
  AWS: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  GCP: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  React: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
};

export default function EducationCerts({ education, certifications }: { education?: any[], certifications?: any[] }) {
  const displayEdu = education || fallbackEducationData;
  const displayCerts = certifications || fallbackCertificationsData;
  return (
    <section className="bg-section-alt transition-colors duration-300">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="section-label mb-4">
            
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-foreground">
            Credentials.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-background rounded-2xl p-10 border border-[var(--color-card-border)]" style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] flex items-center justify-center border border-[color-mix(in_srgb,var(--color-accent)_20%,transparent)]">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground">
                Academic Journey
              </h3>
            </div>

            <div className="space-y-6">
              {displayEdu.map((edu: any) => (
                <div key={edu.degree} className="group">
                  <h4 className="text-xl font-heading font-black text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{edu.degree}</h4>
                  <p className="text-sm text-muted-foreground font-body mb-3">{edu.university}</p>
                  <span className="inline-block px-3 py-1 rounded-lg bg-section-alt border border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    Class of {edu.year}
                  </span>
                  <div className="mt-6 h-px bg-border w-full" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications — Spans 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] flex items-center justify-center border border-[color-mix(in_srgb,var(--color-accent)_20%,transparent)]">
                <Award size={20} className="text-accent" />
              </div>
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground">
                Professional Certs
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {displayCerts.map((cert: any) => {
                const colorClass = certIconColors[cert.iconLabel] ?? "bg-section-alt text-muted-foreground border-border";
                return (
                  <div key={cert.name} className="bg-background rounded-2xl p-6 flex items-start gap-5 border border-[var(--color-card-border)] hover:border-[color-mix(in_srgb,var(--color-accent)_20%,transparent)] hover:-translate-y-0.5 transition-all duration-300 group" style={{ boxShadow: "var(--shadow-card)" }}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border ${colorClass} group-hover:scale-110 transition-transform`}>
                      <span className="text-[10px] font-black">{cert.iconLabel}</span>
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-black text-foreground leading-tight mb-1 group-hover:text-accent transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{cert.issuer}</p>
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
