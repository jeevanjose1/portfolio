"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";

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
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white z-10"
          >
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
              <CheckCircle2 size={40} className="text-green-500" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">Message Sent!</h3>
            <p className="text-gray-600 text-lg mb-8 max-w-sm">
              Thank you for reaching out. I&apos;ve received your message and will get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setFormData({ ...formData, message: "" });
                setIsSuccess(false);
              }}
              className="btn-secondary"
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
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Tell me about your project</h2>
            
            <div className="space-y-5 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-accent focus:ring-accent'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all bg-gray-50 focus:bg-white`}
                    aria-label="Full Name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-accent focus:ring-accent'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all bg-gray-50 focus:bg-white`}
                    aria-label="Email Address"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1.5">Project Type</label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
                    aria-label="Project Type"
                  >
                    <option>Web App</option>
                    <option>Mobile App</option>
                    <option>E-commerce</option>
                    <option>DevOps</option>
                    <option>Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1.5">Timeline</label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
                    aria-label="Project Timeline"
                  >
                    <option>ASAP</option>
                    <option>1 month</option>
                    <option>1–3 months</option>
                    <option>3+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">Budget Range</label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-20 outline-none transition-all bg-gray-50 focus:bg-white appearance-none"
                  aria-label="Budget Range"
                >
                  <option>Under $500</option>
                  <option>$500–$1000</option>
                  <option>$1000–$3000</option>
                  <option>$3000+</option>
                  <option>Let&apos;s discuss</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-accent focus:ring-accent'} outline-none focus:ring-2 focus:ring-opacity-20 transition-all bg-gray-50 focus:bg-white resize-none`}
                  aria-label="Message"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-base flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Lock size={14} />
                <span>Your information is safe and never shared</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
