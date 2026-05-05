"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, TrendingUp, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const missionItems = [
  {
    title: "Seamless Setup",
    description: "Connect entrepreneurs to the right structures and pathways.",
    icon: Zap,
    color: "text-blue-600"
  },
  {
    title: "Digital Readiness",
    description: "Equipping ventures with modern tools and digital brand strategies.",
    icon: Target,
    color: "text-teal-600"
  },
  {
    title: "Global Compliance",
    description: "Ensuring smooth, legal, and legally compliant operations.",
    icon: Shield,
    color: "text-slate-900"
  },
  {
    title: "Sustainable Growth",
    description: "Unlocking business potential for growth beyond borders.",
    icon: TrendingUp,
    color: "text-orange-600"
  }
];

export function Mission() {
  return (
    <section id="mission" className="py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[60px] p-12 lg:p-24 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-teal-500/10 blur-[100px] rounded-full" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-tight">
                To connect businesses to <br />
                <span className="text-blue-400 font-serif italic font-medium">limitless opportunities.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
                We deliver seamless business setup, digital readiness, and travel facilitation to enable sustainable operations beyond borders.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8">
                {missionItems.slice(0, 2).map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className={cn("w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center", item.color)}>
                      <item.icon size={20} />
                    </div>
                    <h4 className="text-white font-bold">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-6 pt-12 sm:pt-0">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[40px] border border-white/10 hover:bg-white/10 transition-colors">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2">100%</h3>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Legal Compliance</p>
                  </div>
                  <div className="bg-blue-600 p-8 rounded-[40px] shadow-2xl shadow-blue-600/20">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2">24/7</h3>
                    <p className="text-blue-100 font-bold uppercase tracking-widest text-xs">Expert Guidance</p>
                  </div>
               </div>
               <div className="space-y-6 pt-0 sm:pt-12">
                  <div className="bg-white p-8 rounded-[40px] shadow-2xl">
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">8+</h3>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Service Domains</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[40px] border border-white/10 hover:bg-white/10 transition-colors">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2">5k+</h3>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Documentations</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
