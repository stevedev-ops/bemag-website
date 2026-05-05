"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 dark:bg-slate-900 -z-10 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Your Strategic Partner
          </div>

          <h1 className="text-6xl lg:text-8xl font-black leading-[1.1] text-slate-900 dark:text-white">
            The Bridge to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Your Success
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            BEMAG Holding connects raw ideas to fully operational, customer-focused ventures. Built to scale, thrive, and lead in competitive markets.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link 
              href="#contact"
              className="h-16 px-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-lg font-black shadow-2xl shadow-slate-900/20 dark:shadow-white/10 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3 group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#services"
              className="h-16 px-8 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-950 rounded-full flex items-center justify-center text-blue-600">
                <Play className="w-4 h-4 fill-current ml-1" />
              </div>
              How it Works
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t dark:border-slate-800">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800" />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 text-xs font-bold">
                +500
              </div>
            </div>
            <p className="text-sm font-bold text-slate-500">
              Trusted by 500+ global enterprises <br />
              and international organizations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Abstract Bridge Visual */}
          <div className="relative aspect-square w-full max-w-[600px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-500/20 rounded-[80px] rotate-6 blur-2xl" />
            <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[80px] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
               {/* Simplified Mockup Content */}
               <div className="p-8 h-full flex flex-col gap-6">
                 <div className="h-1/2 bg-slate-50 dark:bg-slate-950 rounded-[40px] p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded-full" />
                      <div className="h-4 w-4 bg-teal-500 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 w-full bg-slate-200 dark:bg-slate-800 rounded-xl" />
                      <div className="h-8 w-2/3 bg-slate-200 dark:bg-slate-800 rounded-xl" />
                    </div>
                    <div className="mt-auto flex gap-2">
                      <div className="h-10 flex-1 bg-blue-500/20 rounded-xl" />
                      <div className="h-10 flex-1 bg-teal-500/20 rounded-xl" />
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4 flex-1">
                    <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-lg" />
                      <div className="h-4 w-12 bg-slate-200 dark:bg-slate-800 rounded-full" />
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-4 flex flex-col justify-between">
                      <div className="w-8 h-8 bg-teal-500/10 rounded-lg" />
                      <div className="h-4 w-12 bg-slate-200 dark:bg-slate-800 rounded-full" />
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Floating Tags */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 px-6 py-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 font-black text-blue-600"
          >
            Efficiency +45%
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 px-6 py-4 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 font-black text-teal-600"
          >
            Strategic Growth
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
