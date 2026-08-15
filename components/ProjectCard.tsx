import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { Project } from '@/lib/data';

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
  index: number;
  isLarge?: boolean;
};

export default function ProjectCard({ project, onClick, index }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col rounded-3xl bg-white/50 border border-white/60 backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.1)] h-full w-full"
    >
      {/* Image Container */}
      <div className="relative w-full h-64 sm:h-72 overflow-hidden shrink-0 bg-slate-100">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 border border-slate-200">
           {/* Fallback pattern in case image fails or isn't loaded */}
           <div className="text-slate-400 text-sm font-mono mb-2">Placeholder</div>
           <div className="text-slate-400 text-xs font-mono opacity-50">{project.image}</div>
        </div>
        {!imgError && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-700 group-hover:scale-105 z-10 relative ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 z-30 relative bg-white/50">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{project.category}</span>
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 border border-indigo-100 shadow-sm">
            <ArrowUpRight size={18} />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
        <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-xs font-semibold text-slate-700 whitespace-nowrap">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-xs font-semibold text-slate-500 shrink-0">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors mt-auto">
          {project.appUrl ? "View on Google Play" : (project.id === "nextjs-animations" ? "View Live Project" : "View Live Website")}
          <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
