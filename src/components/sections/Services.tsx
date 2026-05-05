"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Users, FileCheck, Plane, ArrowUpRight, X, CheckCircle2, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "consultancy",
    title: "Business Consultancy",
    description: "Business registration, structuring, legal advisory, and strategic growth planning for your venture.",
    longDescription: "BEMAG Holdings provides end-to-end consultancy services designed to turn complex business ideas into profitable realities. We handle everything from the initial legal registration and tax structuring to long-term strategic planning and market positioning. Our goal is to provide a solid foundation upon which your business can scale sustainably.",
    icon: Briefcase,
    color: "bg-blue-600",
    features: [
      { title: "Registration & Structuring", detail: "End-to-end support in registering your entity and designing an optimal corporate structure for tax and legal benefits." },
      { title: "Legal Advisory", detail: "Comprehensive legal guidance to ensure compliance and protect your business interests in all transactions." },
      { title: "Strategic Planning", detail: "Developing actionable roadmaps to align your operational capabilities with your long-term business goals." },
      { title: "Branding & Rebranding", detail: "Crafting a compelling brand identity that resonates with your target market and differentiates you from competitors." }
    ],
    reasons: [
      "Expert consultants with deep industry experience",
      "Proven methodologies and frameworks",
      "Measurable results and ROI",
      "Collaborative partnership approach"
    ]
  },
  {
    id: "relations",
    title: "Customer Relations",
    description: "Improving customer experiences through expert training and tailored engagement strategies.",
    longDescription: "We believe that customers are the heartbeat of any business. Our Customer Relations support goes beyond simple 'support'—we help you build a culture of excellence. Through specialized staff training, customer journey mapping, and proactive engagement frameworks, we ensure your clients become your strongest advocates.",
    icon: Users,
    color: "bg-teal-500",
    features: [
      { title: "Staff Training", detail: "Empowering your team with the skills and knowledge needed to deliver exceptional customer experiences." },
      { title: "Engagement Strategies", detail: "Designing tailored interaction models that build meaningful relationships with your client base." },
      { title: "Retention Support", detail: "Implementing proven techniques to reduce churn and increase customer lifetime value." },
      { title: "Service Evaluation", detail: "Continuous monitoring and assessment of your service delivery to identify areas for improvement." }
    ],
    reasons: [
      "Tailored engagement frameworks",
      "Focus on long-term client retention",
      "Data-driven service evaluation",
      "Transforming customers into advocates"
    ]
  },
  {
    id: "compliance",
    title: "Documentation & Compliance",
    description: "Ensuring your operations are smooth, records current, and your business is always market-ready.",
    longDescription: "In a rapidly changing regulatory environment, staying compliant is a full-time job. BEMAG acts as your compliance shield, managing tax filings, financial audits, and regulatory renewals. We ensure your documentation is always audit-ready, allowing you to focus on growth without the fear of legal or financial hurdles.",
    icon: FileCheck,
    color: "bg-slate-900",
    features: [
      { title: "Tax Compliance", detail: "Ensuring accurate and timely filing of all tax obligations to avoid penalties and maintain good standing." },
      { title: "Financial Audits", detail: "Rigorous financial reviews to guarantee transparency, accuracy, and readiness for external audits." },
      { title: "Record Maintenance", detail: "Systematic organization and secure storage of critical business documentation." },
      { title: "Document Renewal", detail: "Proactive management of licenses, permits, and certifications to ensure continuous operational legality." }
    ],
    reasons: [
      "100% Audit-ready documentation",
      "Proactive regulatory monitoring",
      "Elimination of compliance risks",
      "Seamless operational continuity"
    ]
  },
  {
    id: "tours",
    title: "Tours & Travel",
    description: "Personalized travel itinerary planning and facilitation for Schengen, tour, and work visas.",
    longDescription: "Our Tours & Travel Consulting is built for the global entrepreneur. We specialize in complex travel logistics, including personalized itinerary planning for business scouting and dedicated facilitation for Schengen, tour, and work visas. We bridge the gap between where you are and where you need to be, globally.",
    icon: Plane,
    color: "bg-orange-500",
    features: [
      { title: "Schengen, Tour & Work Visas", detail: "Expert navigation of complex visa application processes for seamless international travel and work." },
      { title: "Itinerary Planning", detail: "Customized travel schedules tailored to your business objectives or leisure preferences." },
      { title: "Travel Documentation", detail: "Comprehensive assistance with all necessary travel papers, including passports and health certificates." },
      { title: "Global Logistics", detail: "Coordination of flights, accommodations, and ground transportation for stress-free global mobility." }
    ],
    reasons: [
      "High success rate for visa facilitation",
      "Personalized executive itineraries",
      "Hassle-free global mobility",
      "Dedicated logistics support team"
    ]
  }
];



export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest text-sm">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Comprehensive Solutions for <br />
              <span className="text-slate-400">Your Business Lifecycle</span>
            </h2>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
            Whether launching or scaling a company, BEMAG provides the roadmap, the tools, and the momentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[40px] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 cursor-pointer"
              onClick={() => { setSelectedService(service); setExpandedFeature(null); }}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3",
                service.color
              )}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                {service.title}
                <ArrowUpRight size={20} className="text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-all group-hover:scale-125" />
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    {feature.title}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-[50px] shadow-2xl p-8 md:p-12"
            >
              <button
                className="absolute top-8 right-8 p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                onClick={() => setSelectedService(null)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                <div className={cn(
                  "w-24 h-24 rounded-3xl flex items-center justify-center text-white shrink-0 shadow-2xl",
                  selectedService.color
                )}>
                  <selectedService.icon size={48} />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
                    {selectedService.title}
                  </h2>
                  <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {selectedService.longDescription}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">Service Highlights</h3>
                  <div className="grid gap-4">
                    {selectedService.features.map((feature, i) => {
                      const isExpanded = expandedFeature === i;
                      return (
                        <div 
                          key={i} 
                          className="flex flex-col p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 cursor-pointer transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
                          onClick={() => setExpandedFeature(isExpanded ? null : i)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <CheckCircle2 className="text-blue-600 shrink-0" />
                              <span className="font-bold text-slate-800 dark:text-slate-200">{feature.title}</span>
                            </div>
                            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} className="text-slate-400">
                              <ChevronDown size={20} />
                            </motion.div>
                          </div>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <p className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                  {feature.detail}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="p-10 rounded-[40px] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
                  
                  <h3 className="text-2xl font-black mb-8 relative z-10">
                    Why Partner With BEMAG for {selectedService.title}
                  </h3>
                  <div className="space-y-4 relative z-10">
                    {selectedService.reasons?.map((reason, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                        <p className="text-sm font-medium text-slate-300">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t dark:border-slate-800 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  className="px-10 h-16 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl text-lg font-black hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
                  onClick={() => setSelectedService(null)}
                >
                  Close Report
                </button>
                <a
                  href="#contact"
                  className="px-10 h-16 bg-blue-600 text-white rounded-2xl text-lg font-black shadow-xl hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center"
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('preselectService', { detail: selectedService.id }));
                    setSelectedService(null);
                  }}
                >
                  Consult Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
