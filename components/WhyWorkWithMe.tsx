"use client";

import { motion } from 'framer-motion';

const reasons = [
  {
    number: "01",
    title: "One developer, complete product",
    description: "I handle everything from UI design to frontend code, backend systems, and deployment. No need to manage a team of specialists."
  },
  {
    number: "02",
    title: "Modern technology",
    description: "Built using Next.js, React, and Supabase. The same stack used by modern, high-growth startups."
  },
  {
    number: "03",
    title: "Built for production",
    description: "I don't just build MVPs. I build scalable, secure, and performant applications ready for real users."
  },
  {
    number: "04",
    title: "Direct communication",
    description: "You work directly with the person writing the code. No project managers or account executives in between."
  }
];

export default function WhyWorkWithMe() {
  return (
    <section className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Why Work With Me</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl font-black text-indigo-400 font-mono">
                {reason.number}
              </div>
              <div>
                <h3 className="text-[13px] sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2 leading-snug">{reason.title}</h3>
                <p className="text-slate-600 text-[11px] sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
