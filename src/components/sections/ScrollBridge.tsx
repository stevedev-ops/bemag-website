"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollBridge() {
  const { scrollYProgress } = useScroll();
  
  // Create a springy version of the scroll progress for smoothness
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 1000"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* The Base Bridge Path */}
        <path
          d="M 50 0 L 50 1000"
          stroke="currentColor"
          strokeWidth="0.1"
          className="text-slate-200 dark:text-slate-800"
        />
        
        {/* The Animated Bridge Path */}
        <motion.path
          d="M 50 0 L 50 1000"
          stroke="url(#bridge-gradient)"
          strokeWidth="0.5"
          style={{ pathLength }}
          strokeLinecap="round"
        />

        {/* Gradient for the Bridge */}
        <defs>
          <linearGradient id="bridge-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#204570" />
            <stop offset="50%" stopColor="#009975" />
            <stop offset="100%" stopColor="#204570" />
          </linearGradient>
        </defs>

        {/* Connecting Nodes (Circles at key points) */}
        <motion.circle
          cx="50"
          cy={useTransform(pathLength, [0, 1], [0, 1000])}
          r="1"
          className="fill-blue-600 dark:fill-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </svg>
    </div>
  );
}
