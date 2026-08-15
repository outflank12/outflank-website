"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const workflow = [
    "IDEA",
    "PLANNING",
    "UI / UX",
    "DEVELOPMENT",
    "BACKEND",
    "TESTING",
    "DEPLOYMENT",
    "MAINTENANCE"
  ];

  const stats = [
    { value: "5+", label: "Years Exp" },
    { value: "50+", label: "Projects" },
    { value: "100%", label: "Satisfaction" },
    { value: "24/7", label: "Support" }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Python", "Go"] },
    { category: "Mobile", items: ["React Native", "Flutter"] },
    { category: "DevOps", items: ["AWS", "Docker", "CI/CD"] }
  ];

  return (
    <section id="about" className="pt-4 pb-16 md:py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">
              A developer focused on <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                shipping actual products.
              </span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-slate-600 text-[15px] md:text-lg leading-relaxed">
              <p>
                Hi, I'm Faqr E Alam. I don't just write code — I build digital solutions that solve real business problems. With years of experience across the entire stack, I take ideas from initial concept to production-ready applications.
              </p>
              <p>
                My approach is pragmatic: pick the right tools for the job, prioritize user experience, and write clean, maintainable code that can scale with your business.
              </p>
              <p>
                Whether it's a high-converting e-commerce storefront, a complex SaaS dashboard, or a cross-platform mobile app, I have the expertise to deliver it end-to-end.
              </p>
            </div>
            
            <div className="mt-8 pt-8 md:mt-10 md:pt-10 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/50 rounded-2xl p-4 border border-slate-100 shadow-sm sm:bg-transparent sm:p-0 sm:border-none sm:shadow-none">
                  <div className="text-2xl md:text-3xl font-black text-slate-900 mb-0.5">{stat.value}</div>
                  <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide sm:normal-case sm:tracking-normal">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-4 md:mt-0"
          >
            <div className="aspect-auto sm:aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-[2rem] sm:rounded-[3rem] rotate-3 blur-xl" />
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgb(0,0,0,0.05)] rounded-[2rem] sm:rounded-[3rem] -rotate-3 overflow-hidden" />
              
              <div className="relative z-10 flex flex-col p-6 sm:p-8 h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-10">
                  Technical Arsenal
                </h3>

                <div className="flex-1 grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-12">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx}>
                      <h4 className="text-[11px] sm:text-sm font-bold text-indigo-600 uppercase tracking-wider mb-2 sm:mb-4 flex items-center gap-2">
                        {skillGroup.category}
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-3">
                        {skillGroup.items.map((item, i) => (
                          <li key={i} className="text-slate-600 text-xs sm:text-base font-medium flex items-center gap-1.5 sm:gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-indigo-100/50 rounded-full blur-[40px] sm:blur-[80px] -z-10" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
