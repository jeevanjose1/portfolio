"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

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

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const data = await response.json();
        alert(data.error || "Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Reveal
      width="100%"
      delay={0.2}
      y={30}
      duration={1}
    >
      <div
        className="bg-background rounded-xl p-10 sm:p-12 border border-card-border shadow-card relative overflow-hidden min-h-[600px]"
      >
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center bg-background z-10"
            >
              <div className="w-20 h-20 rounded-lg bg-accent-10 flex items-center justify-center mb-8 border border-accent-20">
                <CheckCircle2 size={42} className="text-accent" />
              </div>
              <h3 className="text-3xl font-heading font-extrabold text-foreground mb-4">Message Sent</h3>
              <p className="text-muted-foreground text-base sm:text-lg mb-10 max-w-sm font-body">
                Thanks for sharing the brief. I&apos;ll review it and respond within 24 business hours.
              </p>
              <button
                onClick={() => {
                  setFormData({ ...formData, message: "" });
                  setIsSuccess(false);
                }}
                className="px-8 py-4 rounded-lg bg-accent text-background font-extrabold uppercase tracking-[0.16em] text-xs hover:bg-accent-80 transition-colors"
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
              <div className="mb-10 sm:mb-12">
                <Reveal delay={0.1}>
                  <p className="text-accent text-[10px] font-extrabold uppercase tracking-[0.16em] mb-3">{"//"} Project Brief</p>
                </Reveal>
                <Reveal delay={0.2} blur>
                  <h2 className="text-3xl font-heading font-extrabold text-foreground">Tell me what you need.</h2>
                </Reveal>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-2 ml-1">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-400 focus:ring-red-400/20' : 'border-border focus:border-accent focus:ring-accent/10'} outline-none focus:ring-4 transition-all bg-surface-2 font-medium text-foreground placeholder:text-muted-foreground-40 text-sm`}
                      aria-label="Full Name"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] font-extrabold uppercase tracking-[0.16em] mt-2 ml-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-2 ml-1">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-400/20' : 'border-border focus:border-accent focus:ring-accent/10'} outline-none focus:ring-4 transition-all bg-surface-2 font-medium text-foreground placeholder:text-muted-foreground-40 text-sm`}
                      aria-label="Email Address"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-extrabold uppercase tracking-[0.16em] mt-2 ml-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-2 ml-1">Project Type</label>
                    <div className="relative">
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-border focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-surface-2 font-medium text-foreground appearance-none cursor-pointer text-sm"
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
                    <label htmlFor="timeline" className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-2 ml-1">Timeline</label>
                    <div className="relative">
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-border focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all bg-surface-2 font-medium text-foreground appearance-none cursor-pointer text-sm"
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
                  <label htmlFor="message" className="block text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground mb-2 ml-1">Message *</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-5 py-4 rounded-xl border ${errors.message ? 'border-red-400 focus:ring-red-400/20' : 'border-border focus:border-accent focus:ring-accent/10'} outline-none focus:ring-4 transition-all bg-surface-2 font-medium text-foreground resize-none placeholder:text-muted-foreground-40 text-sm`}
                    aria-label="Message"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="text-red-500 text-[10px] font-extrabold uppercase tracking-[0.16em] mt-2 ml-1">{errors.message}</p>}
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-5 rounded-lg bg-accent text-background font-extrabold uppercase tracking-[0.16em] text-xs flex justify-center items-center gap-3 hover:bg-accent-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-accent-10"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-lg animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                  No spam. Just a practical reply.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
