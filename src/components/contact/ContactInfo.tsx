"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Briefcase, ExternalLink } from "lucide-react";

const GithubIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const UpworkIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.6,9.1c-1.8,0-3.1,1.1-3.6,2.9L12,12l-1.5-4H7.8v7.4c0,1.5-1.2,2.7-2.7,2.7S2.4,16.9,2.4,15.4V8H0v7.4c0,2.8,2.3,5.1,5.1,5.1 s5.1-2.3,5.1-5.1v-3.7l1.3,3.7h2.5l1-2.9c0.7,1.8,2.3,3.2,4.6,3.2c3.5,0,5.4-2.5,5.4-6.5C24.9,10.6,22.1,9.1,17.6,9.1z M17.6,13.6 c-1,0-1.8-0.9-1.8-2s0.8-2,1.8-2s1.8,0.9,1.8,2S18.6,13.6,17.6,13.6z"/>
  </svg>
);

const LinkedinIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
    >
      <h2 className="text-2xl font-heading font-bold text-primary mb-6">Contact Details</h2>
      
      <div className="space-y-6 mb-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent shrink-0">
            <Mail size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Email</p>
            <a href="mailto:hello@yourname.com" className="text-primary font-medium hover:text-accent transition-colors">
              hello@yourname.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent shrink-0">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Location</p>
            <p className="text-primary font-medium">Vadodara, Gujarat, India</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent shrink-0">
            <Clock size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Response Time</p>
            <p className="text-primary font-medium">Within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent shrink-0">
            <Briefcase size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-1">Status</p>
            <p className="text-primary font-medium">Open to freelance projects</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 my-8" />

      <h2 className="text-xl font-heading font-bold text-primary mb-6">Find Me On</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <a href="#" className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-accent hover:text-accent text-gray-700 transition-colors group">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <UpworkIcon size={16} className="text-green-600 group-hover:text-accent" />
            Upwork
          </span>
          <ExternalLink size={14} className="text-gray-400 group-hover:text-accent" />
        </a>
        <a href="#" className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-accent hover:text-accent text-gray-700 transition-colors group">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <LinkedinIcon size={16} className="text-blue-700 group-hover:text-accent" />
            LinkedIn
          </span>
          <ExternalLink size={14} className="text-gray-400 group-hover:text-accent" />
        </a>
        <a href="#" className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-accent hover:text-accent text-gray-700 transition-colors group">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <GithubIcon size={16} className="text-gray-900 group-hover:text-accent" />
            GitHub
          </span>
          <ExternalLink size={14} className="text-gray-400 group-hover:text-accent" />
        </a>
        <a href="#" className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-accent hover:text-accent text-gray-700 transition-colors group">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px] group-hover:bg-accent">C</span>
            Contra
          </span>
          <ExternalLink size={14} className="text-gray-400 group-hover:text-accent" />
        </a>
      </div>

      <div className="border-t border-gray-100 my-8" />

      <h2 className="text-xl font-heading font-bold text-primary mb-4">Working Hours</h2>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        Mon–Fri 6PM–10PM IST<br />
        + Weekends fully available
      </p>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        <span className="text-xs font-bold text-green-700 uppercase tracking-wide">Currently Available</span>
      </div>
    </motion.div>
  );
}
