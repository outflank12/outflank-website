"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Project } from '@/lib/data';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [imgError, setImgError] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, type: "spring", bounce: 0 }}
          className="relative w-full max-w-5xl max-h-full bg-white/60 backdrop-blur-3xl border border-white/60 rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-white/80 hover:bg-white text-slate-900 rounded-full backdrop-blur-md transition-colors shadow-sm border border-slate-200"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="overflow-y-auto w-full h-full custom-scrollbar flex flex-col md:flex-row relative z-10">
            
            {/* Left side: Image */}
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full bg-slate-50 border-r border-slate-200">
              <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center z-0">
                 <div className="text-slate-400 text-sm font-mono mb-2">Placeholder</div>
                 <div className="text-slate-400 text-xs font-mono">{project.image}</div>
              </div>
              {!imgError && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover z-10"
                  onError={() => setImgError(true)}
                />
              )}
            </div>

            {/* Right side: Details */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col bg-transparent relative z-10">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
                {project.type}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                {project.title}
              </h2>
              
              <div className="space-y-8 flex-1">
                
                {/* Description */}
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Overview</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Role */}
                {project.role && (
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Role</h3>
                    <p className="text-slate-700 font-medium">{project.role}</p>
                  </div>
                )}

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Key Features</h3>
                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-1.5">
                      {project.features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex gap-4 pt-6 border-t border-slate-100">
                <a 
                  href={project.appUrl || project.liveUrl || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-6 py-4 font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  {project.appUrl ? "View on Google Play" : "View Live Website"}
                  <ExternalLink size={18} />
                </a>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
