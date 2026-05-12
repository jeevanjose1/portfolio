"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight, CheckCircle2, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "Web App",
    budget: "$1000–$3000",
    timeline: "1–3 months",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted successfully:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-background rounded-lg p-10 sm:p-14 border border-border shadow-2xl shadow-black/5 relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center bg-background z-10"
          >
            <div className="w-24 h-24 rounded-lg bg-green-500/10 flex items-center justify-center mb-8 border border-green-500/20">
              <CheckCircle2 size={48} className="text-green-500" />
            </div>
            <h3 className="text-3xl font-heading font-black text-foreground mb-4">Transmission Success!</h3>
            <p className="text-muted-foreground text-lg mb-10 max-w-sm font-body">
              Your brief has been received. Expect a response within the next 24 business hours.
            </p>
            <button
              onClick={() => {
                setFormData({ ...formData, message: "" });
                setIsSuccess(false);
              }}
              className="px-8 py-4 rounded-lg bg-accent text-white font-black uppercase tracking-widest text-xs hover:bg-accent/80 transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full"
          >
            <div className="mb-16">
              <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">{"//"} The Brief</p>
              <h2 className="text-3xl font-heading font-black text-foreground">Describe Your Project.</h2>
            </div>

            <div className="space-y-6 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 ml-1">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-6 py-4 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border focus:border-accent focus:ring-accent'} outline-none focus:ring-4 focus:ring-accent/5 transition-all bg-section-alt font-medium text-foreground placeholder:text-muted-foreground/50`}
                    aria-label="Full Name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-2 ml-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 ml-1">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-6 py-4 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border focus:border-accent focus:ring-accent'} outline-none focus:ring-4 focus:ring-accent/5 transition-all bg-section-alt font-medium text-foreground placeholder:text-muted-foreground/50`}
                    aria-label="Email Address"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-2 ml-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 ml-1">Project Type</label>
                  <div className="relative">
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-6 py-4 rounded-lg border border-border focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all bg-section-alt font-medium text-foreground appearance-none cursor-pointer"
                      aria-label="Project Type"
                    >
                      <option className="bg-background">Web App</option>
                      <option className="bg-background">Mobile App</option>
                      <option className="bg-background">E-commerce</option>
                      <option className="bg-background">DevOps</option>
                      <option className="bg-background">Consulting</option>
                      <option className="bg-background">Other</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                      <ArrowRight size={14} className="rotate-90" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 ml-1">Timeline</label>
                  <div className="relative">
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-6 py-4 rounded-lg border border-border focus:border-accent focus:ring-4 focus:ring-accent/5 outline-none transition-all bg-section-alt font-medium text-foreground appearance-none cursor-pointer"
                      aria-label="Project Timeline"
                    >
                      <option className="bg-background">ASAP</option>
                      <option className="bg-background">1 month</option>
                      <option className="bg-background">1–3 months</option>
                      <option className="bg-background">3+ months</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                      <ArrowRight size={14} className="rotate-90" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 ml-1">Message *</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-6 py-4 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border focus:border-accent focus:ring-accent'} outline-none focus:ring-4 focus:ring-accent/5 transition-all bg-section-alt font-medium text-foreground resize-none placeholder:text-muted-foreground/50`}
                  aria-label="Message"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-2 ml-1">{errors.message}</p>}
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-5 rounded-lg bg-accent text-white font-black uppercase tracking-widest text-xs flex justify-center items-center gap-3 hover:bg-accent/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-accent/10"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-lg animate-spin" />
                ) : (
                  <>
                    Deploy Message
                    <Send size={16} />
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <Lock size={12} />
                <span>Encrypted Transmission</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
