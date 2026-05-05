"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Scale, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "Honesty & Integrity",
    description: "We honor our commitments and operate with full transparency, doing what we say, when we say it.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Authenticity",
    description: "We believe in genuine transformation, building meaningful ventures that respond to real-world challenges.",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    title: "Ethics",
    description: "As trusted advisors, we act with fairness, responsibility, and the highest standards in service.",
    icon: Scale,
    color: "text-teal-600",
    bgColor: "bg-teal-50"
  },
  {
    title: "Entrepreneurship",
    description: "We utilize our unique combination of skills to provide creative solutions and drive success.",
    icon: Lightbulb,
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  }
];

export function Values() {
  return (
    <section id="about" className="py-32 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[60px] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="BEMAG Team" 
                className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 p-10 bg-white/10 backdrop-blur-xl rounded-[40px] border border-white/20">
                <p className="text-white text-2xl font-medium leading-relaxed italic">
                  "Linking businesses to limitless opportunities through strategic planning, compliance, and customer-oriented solutions."
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/30" />
                  <p className="text-blue-400 font-black text-sm uppercase tracking-widest leading-none">BEMAG VISION</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-500/10 blur-3xl rounded-full" />
          </motion.div>

          <div className="lg:w-1/2 space-y-16">
            <div className="space-y-6">
              <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-sm">Our Values</p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                The Principles that <br />
                <span className="text-slate-400">Define our Bridge</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-6 group"
                >
                  <div className={cn(
                    "w-16 h-16 rounded-[24px] flex items-center justify-center transition-transform group-hover:scale-110",
                    value.bgColor,
                    value.color
                  )}>
                    <value.icon size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">{value.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
