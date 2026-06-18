"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2, Globe2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    category: "Financial Strategy",
    title: "International Investment Readiness",
    client: "Regional Manufacturing Firm",
    description: "Successfully restructured internal financial operations and legal compliance, leading to a $2M international investment round.",
    results: ["+45% Operational Efficiency", "Audit-Ready in 90 Days", "100% Tax Compliance"],
    icon: TrendingUp,
    color: "bg-blue-600"
  },
  {
    category: "Corporate Mobility",
    title: "Schengen Mobility Program",
    client: "Executive Logistics Team",
    description: "Facilitated seamless global mobility for a 12-person executive team, including all documentation and Schengen visa facilitations.",
    results: ["100% Visa Approval Rate", "Custom Itinerary Planning", "Zero Travel Delays"],
    icon: Globe2,
    color: "bg-teal-500"
  },
  {
    category: "Digital Transformation",
    title: "End-to-End Business Relaunch",
    client: "Emerging Tech Startup",
    description: "Developed a comprehensive branding and operational roadmap that pivoted a local startup into a regional market leader.",
    results: ["3x Market Reach", "Established Brand Identity", "Strategic Growth Path"],
    icon: CheckCircle2,
    color: "bg-slate-900"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-sm">Case Studies</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white">
            Proven Results, <br />
            <span className="text-slate-400">Measured Success.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col p-10 bg-slate-50 dark:bg-slate-900 rounded-[50px] border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex justify-between items-start mb-10">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", project.color)}>
                  <project.icon size={28} />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white dark:bg-slate-800 group-hover:bg-slate-50 dark:group-hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-colors">
                  {project.category}
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{project.client}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              <div className="mt-10 pt-10 border-t dark:border-slate-800 space-y-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Key Results</p>
                <div className="space-y-3">
                  {project.results.map((result, rIndex) => (
                    <div key={rIndex} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#contact" className="mt-10 w-full py-5 bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 rounded-3xl text-sm font-black text-slate-900 dark:text-white flex items-center justify-center gap-2 hover:!bg-slate-900 dark:hover:!bg-white hover:!text-white dark:hover:!text-slate-900 transition-all group/btn">
                Read Full Story
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
