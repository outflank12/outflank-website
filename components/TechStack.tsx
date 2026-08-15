"use client";

import { motion } from 'framer-motion';
import { techCategories } from '@/lib/data';

export default function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-200/40 rounded-[100%] blur-[100px] pointer-events-none mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Technology Stack</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Modern, production-tested technologies I use to build scalable products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-6 rounded-3xl bg-white/70 border border-white backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] transition-all duration-300"
            >
              <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-6">
                {category.name}
              </h3>
              
              <div className="flex flex-col gap-3">
                {category.techs.map((tech) => (
                  <div key={tech} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="text-slate-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
