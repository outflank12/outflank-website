"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitBranch, Briefcase, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    // Reset after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: GitBranch, label: "GitHub", value: "Follow", href: siteConfig.github },
    { icon: MessageCircle, label: "WhatsApp", value: "+91-8447334407", href: siteConfig.whatsapp },
  ];

  return (
    <section id="contact" className="pt-20 pb-12 md:py-24 relative overflow-hidden bg-slate-50 border-t border-slate-200">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large CTA Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4 md:mb-6"
          >
            Let's build something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">incredible together.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Currently accepting new projects. Let's discuss your requirements and see how we can turn your idea into a production-ready product.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a 
                  key={index}
                  href={method.href}
                  target={method.label !== "Email" ? "_blank" : undefined}
                  rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 hover:border-indigo-200 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">{method.label}</h4>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-8 bg-white/80 border border-slate-200 rounded-[2rem] p-8 sm:p-12 backdrop-blur-xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-100/50 rounded-full blur-[80px] pointer-events-none" />

            <h3 className="text-3xl font-bold text-slate-900 mb-2 relative z-10">Start a Project</h3>
            <p className="text-slate-600 mb-10 relative z-10">
              Tell me what you're building and where you need help.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Name</label>
                  <input required type="text" id="name" name="name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600/50 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input required type="email" id="email" name="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600/50 transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="mobile" className="text-sm font-bold text-slate-700 ml-1">Mobile Number</label>
                  <input required type="tel" id="mobile" name="mobile" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600/50 transition-all" placeholder="+91 98765 43210" />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="company" className="text-sm font-bold text-slate-700 ml-1">Company / Business (Optional)</label>
                  <input type="text" id="company" name="company" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600/50 transition-all" placeholder="Your Company" />
                </div>
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="projectType" className="text-sm font-bold text-slate-700 ml-1">Project Type</label>
                <select id="projectType" name="projectType" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600/50 transition-all appearance-none cursor-pointer">
                  <option>Website</option>
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>E-commerce</option>
                  <option>AI Application</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Project Description</label>
                <textarea required id="message" name="message" rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/50 focus:border-indigo-600/50 transition-all resize-none custom-scrollbar" placeholder="Tell me about your goals and what you want to build..."></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-4 mt-2 font-semibold hover:bg-slate-800 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                {status === 'idle' && <>Send Message <Send size={18} /></>}
                {status === 'loading' && <span className="animate-pulse">Sending...</span>}
                {status === 'success' && <>Message Sent <CheckCircle2 size={18} className="text-emerald-400" /></>}
                {status === 'error' && <>Error <AlertCircle size={18} className="text-rose-400" /></>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
