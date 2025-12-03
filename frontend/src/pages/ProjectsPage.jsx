import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/mockData';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Get unique categories from projects
const categories = ['All', ...new Set(projectsData.map(p => p.category))];

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="group cursor-pointer animate-fadeInUp"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
    >
      {/* Project Image */}
      <div
        className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3] transform transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2"
        style={{ backgroundColor: project.color }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Arrow */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <ArrowUpRight size={18} className="text-[#1E3A5F]" />
        </div>

        {/* View Project Text */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
          <span className="text-white font-medium text-sm">View Project</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-[#E85D3C] uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <h3 className="font-serif text-xl font-medium text-[#1E3A5F] group-hover:text-[#E85D3C] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-[#1E3A5F]/70 text-sm leading-relaxed">
          {project.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#1E3A5F]/5 text-[#1E3A5F]/70 rounded-full text-xs font-medium hover:bg-[#E85D3C]/10 hover:text-[#E85D3C] transition-colors duration-200 cursor-default"
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
  const [activeFilter, setActiveFilter] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  const handleFilterChange = (category) => {
    if (category === activeFilter) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveFilter(category);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE]">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#1E3A5F]/70 hover:text-[#E85D3C] transition-colors duration-300 mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform duration-300" />
            Back to Home
          </Link>

          {/* Page Header with Animation */}
          <div className="mb-16 animate-fadeInUp">
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-[#1E3A5F] mb-4">
              All Projects
            </h1>
            <p className="text-[#1E3A5F]/70 text-lg max-w-2xl">
              A comprehensive collection of my work across various domains including 
              mobile apps, web applications, and design systems.
            </p>
          </div>

          {/* Filter Buttons with Animation */}
          <div className="flex flex-wrap gap-3 mb-12 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  activeFilter === category
                    ? 'bg-[#1E3A5F] text-white shadow-lg shadow-[#1E3A5F]/25'
                    : 'bg-[#1E3A5F]/5 text-[#1E3A5F] hover:bg-[#1E3A5F]/15 hover:shadow-md'
                }`}
              >
                {category}
                {activeFilter === category && (
                  <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs bg-white/20 rounded-full">
                    {category === 'All' ? projectsData.length : projectsData.filter(p => p.category === category).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid with Animation */}
          <div 
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-10 transition-opacity duration-200 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 animate-fadeInUp">
              <p className="text-[#1E3A5F]/50 text-lg">No projects found in this category.</p>
            </div>
          )}

          {/* Project Count */}
          <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '300ms' }}>
            <p className="text-[#1E3A5F]/50 text-sm">
              Showing {filteredProjects.length} of {projectsData.length} projects
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
