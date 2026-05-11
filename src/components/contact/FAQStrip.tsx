"use client";

import { motion } from "framer-motion";

export default function FAQStrip() {
  return (
    <section className="bg-section-alt py-16 lg:py-24 border-t border-gray-100">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-heading font-bold text-primary mb-2 text-lg">International clients?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Yes, I work with clients worldwide via Upwork, Contra, and direct engagement. Time zones are not an issue.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-heading font-bold text-primary mb-2 text-lg">Response time?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Within 24 hours on weekdays, and 48 hours on weekends. Urgent matters are prioritized.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-heading font-bold text-primary mb-2 text-lg">Sign NDAs?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Absolutely — I am happy to sign an NDA before we start any discussion about your intellectual property.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
