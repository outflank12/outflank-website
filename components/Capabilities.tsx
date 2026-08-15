"use client";

import { motion } from 'framer-motion';
import { Layers, Smartphone, Bot, Database, Rocket, PenTool } from 'lucide-react';

const capabilities = [
  { name: "FULL-STACK DEVELOPMENT", icon: Layers },
  { name: "MOBILE APPS", icon: Smartphone },
  { name: "AI & AUTOMATION", icon: Bot },
  { name: "BACKEND SYSTEMS", icon: Database },
  { name: "DEPLOYMENT", icon: Rocket },
  { name: "UI/UX IMPLEMENTATION", icon: PenTool },
];

export default function Capabilities() {
  return (
    <section className="py-10 border-y border-slate-200 bg-slate-50 overflow-hidden">
      <div className="flex overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center gap-16 pr-16"
        >
          {[...capabilities, ...capabilities, ...capabilities].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-6">
                <span className="text-xl sm:text-2xl font-black text-slate-800 uppercase tracking-widest">{item.name}</span>
                <span className="text-indigo-400 font-serif italic text-2xl">*</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
