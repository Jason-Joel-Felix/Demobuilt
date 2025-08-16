import React from 'react';
import { Building2, Ruler, Settings, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Architecture",
      description: "Innovative architectural designs that blend functionality with aesthetic excellence"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Construction",
      description: "World-class construction services delivering projects of exceptional quality"
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Project Management", 
      description: "Comprehensive project oversight ensuring timely delivery and budget control"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Interior Design",
      description: "Luxury interior solutions that create extraordinary living and working spaces"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            FROM VISION TO{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              LANDMARK
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We transform ambitious visions into architectural marvels that define skylines and inspire generations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-red-500/50 hover:bg-gradient-to-br hover:from-red-500/10 hover:to-orange-500/10 transition-all duration-500 hover:scale-105"
            >
              <div className="text-red-500 group-hover:text-orange-400 transition-colors duration-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 rounded-full px-6 py-3 border border-white/10">
            <span className="text-gray-300 font-medium">ESTABLISHED 1977</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;