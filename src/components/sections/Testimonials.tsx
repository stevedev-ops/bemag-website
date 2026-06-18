"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "BEMAG didn't just register our business; they mapped out our entire corporate structure. Their strategic planning was the key to our successful series A funding.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow Innovations",
    rating: 5,
    color: "bg-blue-600"
  },
  {
    id: 2,
    quote: "Navigating the Schengen visa process for our executive team was a nightmare before we partnered with BEMAG. They achieved a 100% approval rate effortlessly.",
    author: "David Chen",
    role: "Director of Operations, Global Logistics Inc.",
    rating: 5,
    color: "bg-orange-500"
  },
  {
    id: 3,
    quote: "Their team took our chaotic financial records and made us completely audit-ready in less than 90 days. The peace of mind they provide is simply invaluable.",
    author: "Elena Rodriguez",
    role: "Founder, Zenith Manufacturing",
    rating: 5,
    color: "bg-teal-500"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-blue-400 font-black uppercase tracking-widest text-sm">Client Success</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Trusted by Leaders <br />
            <span className="text-slate-500">Worldwide.</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="mb-8">
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto shadow-2xl", testimonials[currentIndex].color)}>
                    <Quote size={28} className="fill-current" />
                  </div>
                </div>

                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-current" />
                  ))}
                </div>

                <p className="text-2xl md:text-3xl font-bold text-slate-200 leading-relaxed mb-10 max-w-3xl">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>

                <div>
                  <h4 className="text-lg font-black text-white">{testimonials[currentIndex].author}</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(i);
                  }}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentIndex === i ? "bg-blue-500 scale-125" : "bg-slate-700 hover:bg-slate-600"
                  )}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
