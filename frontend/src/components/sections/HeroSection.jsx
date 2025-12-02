import React from 'react';
import { personalInfo } from '../../data/mockData';
import { ArrowDown } from 'lucide-react';

// Decorative SVG Components
const BlobShape = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <path
      fill="currentColor"
      d="M47.5,-57.2C59.9,-45.8,67.3,-29.2,70.2,-11.6C73.1,6,71.6,24.6,62.6,38.4C53.6,52.2,37.2,61.2,19.6,66.6C2,72,-16.8,73.8,-33.2,67.4C-49.6,61,-63.6,46.4,-71.1,28.8C-78.6,11.2,-79.6,-9.4,-72.5,-26.4C-65.4,-43.4,-50.2,-56.8,-34.4,-67C-18.6,-77.2,-2.2,-84.2,12.8,-79.8C27.8,-75.4,35.1,-68.6,47.5,-57.2Z"
      transform="translate(100 100)"
    />
  </svg>
);

const StarShape = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      fill="currentColor"
      d="M50 0 L54 42 L96 50 L54 58 L50 100 L46 58 L4 50 L46 42 Z"
    />
  </svg>
);

const CircleShape = ({ className }) => (
  <div className={`rounded-full ${className}`} />
);

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#F5F3EE] relative overflow-hidden flex items-center"
    >
      {/* Decorative Elements */}
      <BlobShape className="absolute top-20 right-20 w-32 h-32 text-[#4A7AB8] opacity-80 animate-float hidden lg:block" />
      <StarShape className="absolute top-32 right-56 w-12 h-12 text-[#D4A72C] animate-spin-slow hidden lg:block" />
      <CircleShape className="absolute bottom-40 left-10 w-48 h-48 bg-[#E85D3C] opacity-90 hidden lg:block" />
      <BlobShape className="absolute bottom-20 right-40 w-24 h-24 text-[#4A7AB8] opacity-60 hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-[#1E3A5F] mb-6 leading-tight">
            Hi, I&apos;m {personalInfo.name}.
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-[#1E3A5F]/80 mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 text-[#E85D3C] font-semibold text-lg hover:gap-3 transition-all duration-300"
          >
            <span className="border-b-2 border-[#E85D3C]">Selected Projects</span>
            <ArrowDown
              size={20}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#1E3A5F]/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#1E3A5F]/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
