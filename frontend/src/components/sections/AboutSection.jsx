import React from 'react';
import { aboutData } from '../../data/mockData';

// Decorative shapes
const SemiCircle = ({ className, rotate = 0 }) => (
  <div
    className={`${className}`}
    style={{
      clipPath: 'ellipse(50% 100% at 50% 100%)',
      transform: `rotate(${rotate}deg)`,
    }}
  />
);

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#F5F3EE] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 hidden lg:block">
        <div className="relative w-full h-full">
          <SemiCircle
            className="absolute top-0 right-0 w-40 h-40 bg-[#1E3A5F]"
            rotate={-90}
          />
          <div className="absolute bottom-0 right-10 w-32 h-32 rounded-full bg-[#E85D3C]" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#1E3A5F] mb-8">
              About Me
            </h2>

            <div className="space-y-5 text-[#1E3A5F]/80 text-lg leading-relaxed">
              <p>{aboutData.intro}</p>
              <p>{aboutData.description}</p>
              <p className="font-medium text-[#1E3A5F]">{aboutData.closing}</p>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold text-[#E85D3C] uppercase tracking-wider mb-4">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {aboutData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#1E3A5F]/5 text-[#1E3A5F] rounded-full text-sm font-medium hover:bg-[#1E3A5F]/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Visual for Mobile */}
          <div className="order-1 lg:order-2 flex justify-center lg:hidden">
            <div className="relative w-48 h-48">
              <SemiCircle
                className="absolute top-0 right-0 w-32 h-32 bg-[#1E3A5F]"
                rotate={-90}
              />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#E85D3C]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
