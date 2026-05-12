"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function FAQStrip() {
  return (
    <section className="bg-background py-16 border-t border-border transition-colors duration-300">
      <div className="section-container">
        <div className="mb-16">
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">{"//"} Quick Answers</p>
          <h2 className="text-4xl font-heading font-black text-foreground">Common Inquiries.</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[{ q: "International clients?", a: "Yes, I work with clients worldwide via Upwork, Contra, and direct engagement. Time zones are not an issue." },
          { q: "Response time?", a: "Within 24 hours on weekdays, and 48 hours on weekends. Urgent matters are prioritized." },
          { q: "Sign NDAs?", a: "Absolutely — I am happy to sign an NDA before we start any discussion about your intellectual property." }
          ].map((item) => (
            <div key={item.q} className="bg-section-alt p-10 rounded-lg border border-border hover:border-accent/20 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background transition-colors">
                <HelpCircle size={18} className="text-accent group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-heading font-black text-foreground mb-4 text-xl tracking-tight">{item.q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {item.a}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
