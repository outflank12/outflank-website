"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/data';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="py-24 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Featured Work</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              A selection of my best real-world client projects.
            </p>
          </div>
          <Link 
            href="/work"
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
