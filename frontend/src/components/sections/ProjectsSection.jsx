import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/mockData';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const ProjectCard = ({ project }) => {
  return (
    <div className="group cursor-pointer">
      {/* Project Image */}
      <div
        className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]"
        style={{ backgroundColor: project.color }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-[#1E3A5F]/0 group-hover:bg-[#1E3A5F]/20 transition-colors duration-300" />
        
        {/* Hover Arrow */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={18} className="text-[#1E3A5F]" />
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#E85D3C] uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <h3 className="font-serif text-xl font-medium text-[#1E3A5F] group-hover:text-[#E85D3C] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#1E3A5F]/70 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 bg-[#F5F3EE]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#1E3A5F]">
            My Work
          </h2>
          <p className="mt-4 text-[#1E3A5F]/70 text-lg max-w-xl">
            A selection of projects I&apos;ve worked on, from mobile apps to web experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projectsData.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-16">
          <Button
            onClick={() => navigate('/projects')}
            className="group bg-[#1E3A5F] hover:bg-[#2A4A6F] text-white font-medium px-8 py-6 rounded-full transition-all duration-300 flex items-center gap-3 text-base"
          >
            View All Projects
            <ArrowRight 
              size={18} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
