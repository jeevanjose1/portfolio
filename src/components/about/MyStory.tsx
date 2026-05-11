"use client";

import { motion } from "framer-motion";
import Timeline from "@/components/Timeline";
import { timelineData, myStoryText } from "@/lib/data";

export default function MyStory() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-medium uppercase tracking-wide mb-2">
            My Story
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary">
            My Journey
          </h2>
          <div className="w-12 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Timeline */}
          <Timeline items={timelineData} />

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-heading font-semibold text-primary mb-4">
              My Approach
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {myStoryText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
