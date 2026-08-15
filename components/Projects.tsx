"use client";

import { useState } from 'react';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Restaurant", "E-commerce", "Mobile", "Corporate", "UI / Frontend"];

  const filteredProjects = projects.filter((project) => 
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <section id="work" className="py-24 md:py-32 relative overflow-hidden bg-slate-50">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-200/50 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
            A comprehensive look at digital products, websites, and systems I've built for real clients and businesses.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 w-full flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="inline-flex bg-white/70 border border-slate-200 p-1.5 rounded-full backdrop-blur-md shadow-sm mx-auto md:mx-0 min-w-max">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="col-span-1"
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
