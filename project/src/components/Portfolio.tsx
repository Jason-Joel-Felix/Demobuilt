import React from 'react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Burj Al Futuro",
      location: "Downtown Dubai",
      year: "2023",
      category: "Commercial Tower",
      image: "https://images.pexels.com/photos/374023/pexels-photo-374023.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "A 80-story mixed-use tower featuring cutting-edge sustainable technology and luxury amenities.",
      value: "AED 2.8B"
    },
    {
      id: 2,
      title: "Marina Luxe Residences",
      location: "Dubai Marina",
      year: "2022",
      category: "Residential Complex",
      image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Ultra-luxury waterfront residences with panoramic views and world-class facilities.",
      value: "AED 1.5B"
    },
    {
      id: 3,
      title: "Emirates Business Hub",
      location: "Business Bay",
      year: "2023",
      category: "Corporate Headquarters",
      image: "https://images.pexels.com/photos/2117416/pexels-photo-2117416.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "State-of-the-art corporate complex designed for the future of work.",
      value: "AED 3.2B"
    },
    {
      id: 4,
      title: "Al Noor Cultural Center",
      location: "Abu Dhabi",
      year: "2022",
      category: "Cultural Institution",
      image: "https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Iconic cultural landmark celebrating heritage through innovative architecture.",
      value: "AED 800M"
    },
    {
      id: 5,
      title: "Sky Gardens Mall",
      location: "Sharjah",
      year: "2023",
      category: "Retail & Entertainment",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Revolutionary retail experience combining nature, technology, and luxury shopping.",
      value: "AED 1.1B"
    },
    {
      id: 6,
      title: "Oasis Resort & Spa",
      location: "Ras Al Khaimah",
      year: "2022",
      category: "Hospitality",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Luxury resort destination featuring innovative sustainable design and world-class amenities.",
      value: "AED 950M"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            ICONIC{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our portfolio of landmark developments that have redefined the UAE's architectural landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-2xl font-bold text-white mb-1">{project.title}</div>
                  <div className="flex items-center gap-4 text-gray-300 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    {project.value}
                  </div>
                  <button className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors duration-300">
                    View Details
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300">
            View Complete Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;