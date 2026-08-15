"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Terminal, Activity, Users, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-32 lg:pt-40 pb-16 overflow-hidden bg-slate-50">
      
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200 backdrop-blur-md mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-700 tracking-wide">AVAILABLE FOR SELECT PROJECTS</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            I Build Digital Products That Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Ready to Ship.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            I design and develop websites, web applications, mobile apps and AI-powered products for businesses and startups — from the first idea to production deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-8 py-4 font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#work" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 border border-slate-200 px-8 py-4 font-semibold hover:bg-slate-50 transition-all duration-300 backdrop-blur-xl w-full sm:w-auto shadow-sm"
            >
              View My Work
            </Link>
          </div>
        </motion.div>

        {/* Right Product Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full h-[500px] lg:h-[600px] rounded-[2rem] bg-white/60 border border-white/80 backdrop-blur-3xl p-4 sm:p-6 overflow-hidden flex flex-col shadow-[0_20px_60px_rgb(0,0,0,0.05)]"
        >
          {/* Mock Window Header */}
          <div className="flex items-center gap-2 mb-6 opacity-80">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <div className="ml-4 px-2.5 py-1 bg-white border border-slate-200 shadow-sm rounded-md text-[10px] font-mono text-slate-500 flex items-center gap-2">
               <Database size={12} className="text-indigo-500" /> production-db-ready
            </div>
          </div>

          <div className="relative flex-1 w-full h-full">
            
            {/* Dashboard Widget 1: Analytics */}
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 lg:-right-4 w-[220px] bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_20px_40px_rgb(0,0,0,0.08)] z-20"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Activity size={16} />
                </div>
                <span className="text-emerald-500 text-xs font-bold flex items-center bg-emerald-50 px-2 py-1 rounded-full">+24.5%</span>
              </div>
              <div className="text-sm font-semibold text-slate-500 mb-1">Active Sessions</div>
              <div className="text-3xl font-black text-slate-900 tracking-tight">8,432</div>
              
              {/* Fake Sparkline */}
              <div className="mt-5 flex items-end gap-1.5 h-12">
                {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-indigo-50 rounded-t-sm transition-all hover:bg-indigo-200" style={{ height: `${h}%` }}>
                    {i === 6 && <div className="w-full h-full bg-indigo-500 rounded-t-sm shadow-[0_0_10px_rgba(99,102,241,0.5)]" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Code Editor Mock */}
            <motion.div 
              className="absolute top-16 left-0 lg:-left-4 right-10 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl z-10"
            >
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-3">
                <Terminal size={14} className="text-slate-500" />
                <span className="text-xs font-mono text-slate-400">deploy.config.ts</span>
              </div>
              <div className="font-mono text-[13px] leading-[1.8]">
                <div className="flex"><span className="text-slate-600 w-6 select-none">1</span><span className="text-pink-400">import</span> <span className="text-slate-300">{"{ deploy }"}</span> <span className="text-pink-400">from</span> <span className="text-emerald-400">'@aluxa/core'</span><span className="text-slate-500">;</span></div>
                <div className="flex"><span className="text-slate-600 w-6 select-none">2</span></div>
                <div className="flex"><span className="text-slate-600 w-6 select-none">3</span><span className="text-cyan-400">const</span> <span className="text-slate-300">config</span> <span className="text-cyan-400">=</span> <span className="text-slate-300">{"{"}</span></div>
                <div className="flex"><span className="text-slate-600 w-6 select-none">4</span><span className="text-slate-300 ml-4">target:</span> <span className="text-emerald-400">'production'</span><span className="text-slate-500">,</span></div>
                <div className="flex"><span className="text-slate-600 w-6 select-none">5</span><span className="text-slate-300 ml-4">scale:</span> <span className="text-purple-400">true</span><span className="text-slate-500">,</span></div>
                <div className="flex"><span className="text-slate-600 w-6 select-none">6</span><span className="text-slate-300 ml-4">optimize:</span> <span className="text-slate-300">{"{ images:"}</span> <span className="text-purple-400">true</span><span className="text-slate-300">{" },"}</span></div>
                <div className="flex"><span className="text-slate-600 w-6 select-none">7</span><span className="text-slate-300">{"};"}</span></div>
                <div className="flex"><span className="text-slate-600 w-6 select-none">8</span></div>
                <div className="flex"><span className="text-slate-600 w-6 select-none">9</span><span className="text-blue-400">deploy</span><span className="text-slate-300">(config).</span><span className="text-blue-400">then</span><span className="text-slate-300">{"(() => {"}</span></div>
                <div className="flex"><span className="text-slate-600 w-6 select-none">10</span><span className="text-slate-300 ml-4">console.</span><span className="text-blue-400">log</span><span className="text-slate-300">(</span><span className="text-emerald-400">'Live! 🚀'</span><span className="text-slate-300">);</span></div>
                <div className="flex"><span className="text-slate-600 w-6 select-none">11</span><span className="text-slate-300">{"});"}</span></div>
              </div>
            </motion.div>

            {/* Dashboard Widget 2: Users */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-4 w-[220px] bg-white border border-slate-200 rounded-2xl p-4 shadow-[0_20px_40px_rgb(0,0,0,0.08)] z-30 flex gap-4 items-center"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                <Users size={20} />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 mb-0.5">New Users</div>
                <div className="text-xl font-black text-slate-900">+1,204</div>
              </div>
            </motion.div>
            
            {/* API Status Widget */}
            <motion.div 
              className="absolute bottom-20 right-4 lg:-right-4 bg-slate-900 border border-slate-800 rounded-full py-2.5 px-5 shadow-2xl z-30 flex items-center gap-3"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
              <span className="text-xs font-mono font-medium text-slate-200 tracking-wide">API Operational</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
