"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';

function ServiceCard({ service, index }: { service: any, index: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-4 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-white/50 backdrop-blur-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(99,102,241,0.15)] transition-all duration-300 overflow-hidden cursor-default"
    >
      {/* Spotlight Effect that follows cursor */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99,102,241,0.12), transparent 40%)`,
        }}
      />
      
      {/* Subtle hover gradient inside the card */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-cyan-50/0 group-hover:from-indigo-50/40 group-hover:to-cyan-50/20 transition-colors duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm border border-indigo-100 group-hover:shadow-indigo-200">
          <service.icon className="w-5 h-5 sm:w-7 sm:h-7" />
        </div>
        
        <h3 className="text-[14px] sm:text-xl font-bold text-slate-900 mb-2 sm:mb-4 group-hover:text-indigo-600 transition-colors duration-300 leading-snug">{service.title}</h3>
        <p className="text-slate-600 mb-4 sm:mb-8 text-[11px] sm:text-base leading-relaxed flex-grow line-clamp-3 sm:line-clamp-none">{service.description}</p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-3 sm:pt-4 border-t border-slate-100 group-hover:border-indigo-100/50 transition-colors duration-300">
          {service.tech.map((t: string, i: number) => (
            <span key={i} className="px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg bg-slate-100 text-[9px] sm:text-xs font-semibold text-slate-700 border border-slate-200/60 group-hover:bg-white group-hover:border-indigo-200 group-hover:text-indigo-700 group-hover:shadow-sm transition-all duration-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      {/* Background gradients for light mode glassmorphism */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Build</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            From modern business websites to complex AI-powered applications, I deliver production-ready digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
