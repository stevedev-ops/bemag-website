"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Target, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Years of Excellence", value: "10+" },
  { label: "Global Partners", value: "50+" },
  { label: "Successful Ventures", value: "500+" },
  { label: "Client Satisfaction", value: "100%" }
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-slate-900/50 rounded-l-[100px] -z-10" />
      <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Image & Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-[60px] rotate-3 group-hover:rotate-6 transition-transform duration-700 blur-xl opacity-30" />
              <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[60px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="BEMAG Holdings Corporate Office"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <Globe size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Global Reach</p>
                      <p className="text-sm text-slate-300">Local Expertise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stat Card */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-20 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Target size={28} />
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-900 dark:text-white">100%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Compliance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                About Us
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1]">
                We Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  Business Growth.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              <p>
                At BEMAG Holdings, we don&apos;t just consult; we bridge the gap between your raw vision and a fully operational, compliant reality. From corporate structuring to global mobility, we are the architects of your success.
              </p>
              <p>
                Our team of dedicated experts navigates the complexities of modern business landscapes, ensuring that you can focus on what you do best while we handle the intricate details of registration, compliance, and strategic expansion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="#values" className="inline-flex h-14 px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-sm font-black shadow-xl hover:-translate-y-1 transition-all active:scale-95 items-center gap-3 group">
                Discover Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
