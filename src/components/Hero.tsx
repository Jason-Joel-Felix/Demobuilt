import React from 'react';
import { Triangle, Wrench, Briefcase, Palette } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Background with cityscape */}
      <div className="absolute inset-0">
        {/* Background image */}
        <img 
          src="/src/components/Untitled (44).png" 
          alt="Hero Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient overlays for the exact color matching */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-amber-600/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-800/20 to-amber-600/40"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col pt-16">
        <div className="flex-1 flex items-center min-h-[calc(100vh-160px)]">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
            <div className="max-w-2xl">
              {/* Main heading */}
              <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[0.9] mb-8">
                Building<br />
                Tomorrow.<br />
                Today.
              </h1>
              
              {/* Subheading */}
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-12 max-w-lg">
                Crafting iconic structures since 1977 —<br />
                blending precision engineering, cutting edge<br />
                design, and timeless luxury.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a 
                  href="#portfolio"
                  className="group bg-black/60 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-sm tracking-wider border border-white/20 hover:border-white/40 hover:bg-black/80 transition-all duration-300 text-center"
                >
                  VIEW OUR PORTFOLIO
                </a>
                
                <button
                  onClick={onBookCall}
                  className="group bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full font-medium text-sm tracking-wider hover:from-amber-500 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                >
                  GET A CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services section at bottom */}
        <div className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-center space-x-3 text-white">
                <Triangle className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Architecture</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <Wrench className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Construction</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <Briefcase className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Project Management</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <Palette className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-medium">Interior Design</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="relative z-10 bg-black/60 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-wider mb-4 lg:mb-0">
                FROM VISION TO LANDMARK.
              </h2>
              <div className="text-right">
                <div className="text-sm text-gray-400 font-medium tracking-wider">
                  ESTABLISHED 1977
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;