"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 border-t dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-xl transition-transform group-hover:scale-110 overflow-hidden">
                <Image src="/bemag-logo.png" alt="BEMAG Logo" width={40} height={40} className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                  BEMAG
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                  Holding
                </span>
              </div>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              Your strategic bridge to success. Linking businesses to limitless opportunities through expertise and integrity.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4">
              {["Business Consultancy", "Customer Relations", "Case Studies", "Tours & Travel"].map((item) => (
                <li key={item}>
                  <Link href={item === "Case Studies" ? "#case-studies" : "#services"} className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm font-bold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Mission", "Process", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm font-bold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Compliance", "Audit Ready"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm font-bold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} BEMAG Holding. All Rights Reserved.
          </p>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Nairobi, Kenya • Strategic Bridge to Success
          </p>
        </div>
      </div>
    </footer>
  );
}
