import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
import FeaturedWork from '@/components/FeaturedWork';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import TechStack from '@/components/TechStack';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aluxa | Freelance Web Developer',
  description: 'Premium freelance web developer building full-stack digital products.',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 selection:bg-indigo-500/30 selection:text-indigo-900">
      <Hero />
      <Capabilities />
      <FeaturedWork />
      <WhyWorkWithMe />
      <TechStack />
      
      {/* Final Homepage CTA */}
      <section className="py-24 md:py-32 relative border-t border-slate-200 overflow-hidden bg-slate-50">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-200/50 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Ready to build something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">extraordinary?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Let's turn your idea into a production-ready digital product. Open for freelance opportunities and long-term partnerships.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white px-8 py-4 font-semibold hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(15,23,42,0.2)]"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
