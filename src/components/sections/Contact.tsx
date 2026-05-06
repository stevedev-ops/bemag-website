"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, Share2, ExternalLink, MessageSquare, Briefcase, Users, FileCheck, Plane, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { id: "consultancy", label: "Business Consultancy", icon: Briefcase, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-500/10", border: "border-blue-200 dark:border-blue-500/20" },
  { id: "relations", label: "Customer Relations", icon: Users, color: "text-teal-500", bg: "bg-teal-100 dark:bg-teal-500/10", border: "border-teal-200 dark:border-teal-500/20" },
  { id: "compliance", label: "Documentation & Compliance", icon: FileCheck, color: "text-slate-700 dark:text-slate-300", bg: "bg-slate-200 dark:bg-slate-700/30", border: "border-slate-300 dark:border-slate-600" },
  { id: "tours", label: "Tours & Visas", icon: Plane, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-500/10", border: "border-orange-200 dark:border-orange-500/20" }
];

const subQuestions = {
  consultancy: [
    { id: "new", label: "Starting a new business" },
    { id: "scale", label: "Scaling an existing business" },
    { id: "legal", label: "Legal advisory & restructuring" },
    { id: "other", label: "Other / General Inquiry" }
  ],
  relations: [
    { id: "training", label: "Staff training programs" },
    { id: "retention", label: "Improving client retention" },
    { id: "evaluation", label: "Service quality evaluation" },
    { id: "other", label: "Other / General Inquiry" }
  ],
  compliance: [
    { id: "tax", label: "Tax filing & compliance" },
    { id: "audit", label: "Financial audit preparation" },
    { id: "renewal", label: "Document & permit renewals" },
    { id: "other", label: "Other / General Inquiry" }
  ],
  tours: [
    { id: "corporate", label: "Corporate travel & logistics" },
    { id: "personal", label: "Personal Schengen/Tour visa" },
    { id: "work", label: "Work visa facilitation" },
    { id: "other", label: "Other / General Inquiry" }
  ]
};

export function Contact() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    service: "",
    subIntent: ""
  });

  useEffect(() => {
    const handlePreselect = (e: any) => {
      setFormData(prev => ({ ...prev, service: e.detail }));
      setStep(2);
    };
    window.addEventListener('preselectService', handlePreselect);
    return () => window.removeEventListener('preselectService', handlePreselect);
  }, []);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => {
    if (step === 3 && formData.service === "general") {
      setStep(1);
    } else {
      setStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9db42567-e378-407b-83c9-82d15d32868b", 
          subject: `New Inquiry from BEMAG: ${formData.service}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `
            Service: ${formData.service}
            Interest: ${formData.subIntent}
            Message: ${formData.message}
          `,
          to_email: "bemagholdingltd@gmail.com"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStep(4);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormContent = () => {
    switch(step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-xs mb-2 block">Step 1 of 3</span>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">What do you need help with?</h3>
              <p className="text-slate-500 mt-2">Select the primary area you're looking for assistance with.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, service: service.id, subIntent: "" });
                    handleNext();
                  }}
                  className={cn(
                    "flex flex-col items-center text-center p-6 rounded-3xl border-2 transition-all hover:-translate-y-1 active:scale-95",
                    formData.service === service.id 
                      ? `border-blue-500 bg-blue-50 dark:bg-blue-900/20` 
                      : `border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-blue-300 dark:hover:border-blue-700`
                  )}
                >
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", service.bg, service.color)}>
                    <service.icon size={24} />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{service.label}</span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setFormData({ ...formData, service: "general", subIntent: "general" });
                  setStep(3);
                }}
                className={cn(
                  "sm:col-span-2 flex items-center justify-center gap-3 p-5 rounded-2xl border-2 transition-all hover:-translate-y-1 active:scale-95",
                  formData.service === "general" 
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                    : "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-blue-300 dark:hover:border-blue-700"
                )}
              >
                <MessageSquare size={20} className="text-slate-500" />
                <span className="font-bold text-slate-900 dark:text-white text-sm">General Inquiry / Something Else</span>
              </button>
            </div>
          </motion.div>
        );
      
      case 2:
        const options = subQuestions[formData.service as keyof typeof subQuestions] || [];
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-xs mb-2 block">Step 2 of 3</span>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">Could you be more specific?</h3>
              <p className="text-slate-500 mt-2">This helps us route your inquiry to the right expert.</p>
            </div>
            
            <div className="space-y-3">
              {options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, subIntent: option.id });
                    handleNext();
                  }}
                  className={cn(
                    "w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all text-left group hover:-translate-y-0.5",
                    formData.subIntent === option.id 
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                      : "border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 hover:border-blue-300 dark:hover:border-blue-700"
                  )}
                >
                  <span className="font-bold text-slate-900 dark:text-white">{option.label}</span>
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                    formData.subIntent === option.id ? "border-blue-500 bg-blue-500" : "border-slate-300 dark:border-slate-600 group-hover:border-blue-400"
                  )}>
                    {formData.subIntent === option.id && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-6">
              <button 
                type="button" 
                onClick={handleBack}
                className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft size={16} /> Back
              </button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-xs mb-2 block">Step 3 of 3</span>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">Great! How can we reach you?</h3>
              <p className="text-slate-500 mt-2">Almost done. Just a few details so we can get in touch.</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">First Name</label>
                  <input 
                    required 
                    name="firstName"
                    type="text" 
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Last Name</label>
                  <input 
                    required 
                    name="lastName"
                    type="text" 
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  required 
                  name="email"
                  type="email" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Additional Notes (Optional)</label>
                <textarea 
                  name="message"
                  rows={3} 
                  placeholder="Any specific requirements?" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none" 
                />
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between">
              <button 
                type="button" 
                onClick={handleBack}
                className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft size={16} /> Back
              </button>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "h-14 px-8 bg-blue-600 text-white rounded-2xl text-sm font-black shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2",
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:-translate-y-1"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Request"}
                <Send size={16} className={cn("translate-y-[1px]", isSubmitting && "animate-pulse")} />
              </button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-12"
          >
            <div className="w-24 h-24 bg-green-100 dark:bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Request Sent Successfully!</h3>
            <p className="text-slate-500 leading-relaxed max-w-md mx-auto mb-10">
              Thank you for reaching out. One of our experts will review your request and get back to you within 24 hours.
            </p>
            <button 
              type="button" 
              onClick={() => {
                setStep(1);
                setFormData({ service: "", subIntent: "", firstName: "", lastName: "", email: "", message: "" });
              }}
              className="h-14 px-8 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl text-sm font-black hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
            >
              Start New Request
            </button>
          </motion.div>
        );
    }
  };

  return (
    <section id="contact" className="py-32 bg-slate-50 dark:bg-slate-900/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-sm">Get in Touch</p>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Let's Bridge the Gap <br />
                <span className="text-slate-400">Together.</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                Ready to scale your business or plan your next global journey? Our experts are here to guide you.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email Us", value: "bemagholdingltd@gmail.com", color: "text-blue-600", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
                { icon: Phone, label: "Call Us", value: "+254115598150", color: "text-teal-600", bgColor: "bg-teal-100 dark:bg-teal-900/30" },
                { icon: MapPin, label: "Location", value: "Nairobi, Kenya", color: "text-slate-900 dark:text-white", bgColor: "bg-slate-200 dark:bg-slate-800" }
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-3xl md:rounded-[60px] p-6 md:p-12 shadow-2xl border border-slate-100 dark:border-slate-800 min-h-[500px]"
          >
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {renderFormContent()}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
