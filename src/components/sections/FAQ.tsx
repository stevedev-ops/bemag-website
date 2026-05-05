"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does business registration take?",
    answer: "Typically, local business registration takes between 7 to 14 working days, depending on the structure (Sole Proprietorship vs. Limited Company). We handle all the paperwork and government portal submissions to ensure no delays."
  },
  {
    question: "What is required for Schengen visa facilitation?",
    answer: "Requirements usually include a valid passport, travel insurance, proof of accommodation, and financial statements. BEMAG provides a customized checklist and handles the documentation review to ensure a 100% compliant application."
  },
  {
    question: "How does BEMAG ensure 100% legal compliance?",
    answer: "We assign a dedicated compliance officer to your account who monitors tax filings, regulatory renewals, and financial audits. We use a proactive framework to notify you of upcoming deadlines 30 days in advance."
  },
  {
    question: "Do you provide ongoing tax and audit support?",
    answer: "Yes. Our Documentation & Compliance pillar is designed for ongoing support. We can manage your monthly returns, annual audits, and any regulatory changes that might impact your specific industry."
  },
  {
    question: "Can BEMAG help with rebranding an existing business?",
    answer: "Absolutely. Our Business Consultancy team specializes in strategic rebranding. We help you modernize your brand identity, update your legal documentation, and realign your customer engagement strategies."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-sm">Common Questions</p>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
                Everything You <br />
                <span className="text-slate-400">Need to Know.</span>
              </h2>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Can't find the answer you're looking for? Reach out to our expert consultants for a personalized session.
            </p>
            <div className="pt-8">
              <div className="inline-flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 dark:text-white">Still have questions?</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email: support@bemag.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={cn(
                  "rounded-[32px] border transition-all duration-300 overflow-hidden",
                  openIndex === index 
                    ? "bg-white dark:bg-slate-900 border-blue-500/30 shadow-2xl shadow-blue-500/5" 
                    : "bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                )}
              >
                <button
                  className="w-full px-8 py-8 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={cn(
                    "text-lg font-black transition-colors",
                    openIndex === index ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                    openIndex === index ? "bg-blue-600 text-white rotate-0" : "bg-white dark:bg-slate-800 text-slate-400"
                  )}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
