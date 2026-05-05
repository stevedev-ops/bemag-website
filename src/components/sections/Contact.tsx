"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, Share2, ExternalLink, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-sm">Get in Touch</p>
              <h2 className="text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Let's Bridge the Gap <br />
                <span className="text-slate-400">Together.</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                Ready to scale your business or plan your next global journey? Our experts are here to guide you.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email Us", value: "contact@bemagholding.com", color: "text-blue-600", bgColor: "bg-blue-100" },
                { icon: Phone, label: "Call Us", value: "+254 700 000 000", color: "text-teal-600", bgColor: "bg-teal-100" },
                { icon: MapPin, label: "Location", value: "Nairobi, Kenya", color: "text-slate-900", bgColor: "bg-slate-200" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", item.bgColor, item.color)}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {[Globe, MessageSquare, ExternalLink, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:border-slate-900 dark:hover:border-white hover:text-slate-900 dark:hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-[60px] p-10 lg:p-16 shadow-2xl border border-slate-100 dark:border-slate-800"
          >
            <form 
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been sent successfully.");
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest ml-1">First Name</label>
                  <input required type="text" placeholder="John" className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest ml-1">Last Name</label>
                  <input required type="text" placeholder="Doe" className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest ml-1">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest ml-1">Your Message</label>
                <textarea required rows={4} placeholder="How can we help you?" className="w-full p-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[32px] focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none" />
              </div>
              <button 
                type="submit"
                className="w-full h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[28px] text-lg font-black shadow-xl hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
