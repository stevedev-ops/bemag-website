"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Map, Rocket, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Consult & Diagnose",
    description: "We start with a deep dive into your business vision or travel goals. We identify the gaps and opportunities in your current setup.",
    icon: Search,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    number: "02",
    title: "Strategic Mapping",
    description: "Our experts design a custom framework for your registration, compliance, or travel logistics, ensuring every legal detail is bridge-perfect.",
    icon: Map,
    color: "text-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-900/20"
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description: "We execute the strategy, handle all the heavy lifting, and provide ongoing support to ensure your business thrives beyond the launch.",
    icon: Rocket,
    color: "text-slate-900 dark:text-white",
    bgColor: "bg-slate-100 dark:bg-slate-800"
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-sm">
              The BEMAG Method
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Your Path from <br />
              <span className="text-slate-400">Raw Idea to Ready Business</span>
            </h2>
          </div>
          <div className="hidden lg:block w-32 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mb-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connecting Line Desktop */}
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 hidden lg:block -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative space-y-8"
            >
              <div className="flex items-center gap-6">
                <div className={cn(
                  "w-20 h-20 rounded-[32px] flex items-center justify-center shadow-2xl relative z-10",
                  step.bgColor,
                  step.color
                )}>
                  <step.icon size={36} />
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-white dark:bg-slate-900 rounded-full border-4 border-slate-50 dark:border-slate-950 flex items-center justify-center text-xs font-black text-slate-900 dark:text-white shadow-lg">
                    {step.number}
                  </div>
                </div>
                {index < 2 && (
                  <ArrowRight className="text-slate-300 dark:text-slate-700 hidden lg:block" size={32} />
                )}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              {index === 2 && (
                <div className="pt-6">
                  <div className="p-6 bg-blue-600 rounded-3xl shadow-xl shadow-blue-600/20 text-white">
                    <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Final Result</p>
                    <p className="text-xl font-black">Audit-Ready Venture</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
