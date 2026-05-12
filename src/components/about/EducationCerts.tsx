"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { educationData, certificationsData } from "@/lib/data";

const certIconColors: Record<string, string> = {
  AWS: "bg-orange-50 text-orange-600 border-orange-100",
  GCP: "bg-blue-50 text-blue-600 border-blue-100",
  React: "bg-cyan-50 text-cyan-600 border-cyan-100",
};

export default function EducationCerts() {
  return (
    <section className="bg-section-alt py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Academic & Professional
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary">
            Credentials.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education — Bento Style Card (spans 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white rounded-lg p-10 border border-gray-100 shadow-xl shadow-gray-200/50"
          >
            <div className="flex items-center gap-3 mb-10">
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                  <GraduationCap size={20} className="text-accent" />
               </div>
               <h3 className="text-sm font-black uppercase tracking-widest text-primary">
                  Academic Journey
               </h3>
            </div>
            
            <div className="space-y-6">
              {educationData.map((edu) => (
                <div key={edu.degree} className="group">
                  <h4 className="text-xl font-heading font-black text-primary mb-2 group-hover:text-accent transition-colors duration-300">{edu.degree}</h4>
                  <p className="text-sm text-gray-500 font-body mb-3">{edu.university}</p>
                  <span className="inline-block px-3 py-1 rounded-lg bg-gray-50 border border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Class of {edu.year}
                  </span>
                  <div className="mt-6 h-px bg-gray-50 w-full" />
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
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                  <Award size={20} className="text-accent" />
               </div>
               <h3 className="text-sm font-black uppercase tracking-widest text-primary">
                  Professional Certs
               </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert) => {
                const colorClass = certIconColors[cert.iconLabel] ?? "bg-gray-50 text-gray-600 border-gray-100";
                return (
                  <div key={cert.name} className="bg-white rounded-lg p-6 flex items-start gap-5 border border-gray-100 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border ${colorClass} group-hover:scale-110 transition-transform`}>
                      <span className="text-[10px] font-black">{cert.iconLabel}</span>
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-black text-primary leading-tight mb-1 group-hover:text-accent transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{cert.issuer}</p>
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
