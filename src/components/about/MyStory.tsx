"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import { timelineData, myStoryText } from "@/lib/data";

export default function MyStory() {
  return (
    <section className="bg-white relative py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent text-[10px] font-black uppercase tracking-widest mb-3">
            {"//"} Origins
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary">
            My Journey.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Timeline Column */}
          <div className="lg:col-span-5 bg-gray-50 rounded-lg p-10 border border-gray-100">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-10">Milestones</h3>
            <Timeline items={timelineData} />
          </div>

          {/* Story Text Column — Bento Style Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-lg border border-gray-100 shadow-sm shadow-gray-200/50 h-full relative"
          >
            {/* Background wrapper to clip the blur without breaking sticky positioning */}
            <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
              {/* Abstract background shape from Figma */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-lg blur-3xl opacity-50 -mr-10 -mt-10" />
            </div>

            {/* Sticky Content Wrapper */}
            <div className="sticky top-32 p-10 sm:p-14">
              <h3 className="text-2xl font-heading font-black text-primary mb-8 relative z-10">
                Engineering with <br />
                <span className="text-accent italic font-serif">Intent.</span>
              </h3>
              <div className="space-y-6 relative z-10">
                <p className="text-gray-500 leading-relaxed text-lg font-body italic">
                  &ldquo;{myStoryText.split('.')[0]}.&rdquo;
                </p>
                <p className="text-gray-500 leading-relaxed font-body">
                  {myStoryText.substring(myStoryText.indexOf('.') + 1)}
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <span className="text-accent font-black tracking-widest text-xs">Y N</span>
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-primary">Your Name</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full-Stack Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
