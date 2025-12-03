import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/mockData';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#1E3A5F]/5 text-[#1E3A5F]/70 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#1E3A5F]/70 hover:text-[#E85D3C] transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="mb-16">
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#1E3A5F] mb-4">
              All Projects
            </h1>
            <p className="text-[#1E3A5F]/70 text-lg max-w-2xl">
              A comprehensive collection of my work across various domains including 
              mobile apps, web applications, and design systems.
            </p>
          </div>

          {/* Filter Tags (Static for now) */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button className="px-5 py-2 bg-[#1E3A5F] text-white rounded-full text-sm font-medium transition-colors">
              All
            </button>
            <button className="px-5 py-2 bg-[#1E3A5F]/5 text-[#1E3A5F] hover:bg-[#1E3A5F]/10 rounded-full text-sm font-medium transition-colors">
              Mobile App
            </button>
            <button className="px-5 py-2 bg-[#1E3A5F]/5 text-[#1E3A5F] hover:bg-[#1E3A5F]/10 rounded-full text-sm font-medium transition-colors">
              Web Design
            </button>
            <button className="px-5 py-2 bg-[#1E3A5F]/5 text-[#1E3A5F] hover:bg-[#1E3A5F]/10 rounded-full text-sm font-medium transition-colors">
              Dashboard
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
