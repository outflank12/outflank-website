"use client";

import { motion } from 'framer-motion';
import { clientFit } from '@/lib/data';

export default function ClientFit() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-between">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Who I Work With</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Whether you need a website, internal system, mobile app or AI-powered product, I can help turn the idea into a working product.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {clientFit.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="py-6 px-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all text-center"
              >
                <span className="font-semibold text-slate-700">{client}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
