import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/src/components/Mainlogo.png" 
                alt="Intermass Groups" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Since 1977, we've been crafting architectural masterpieces that define the UAE's skyline. 
              From vision to landmark, we build tomorrow today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Home</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Portfolio</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-red-400 transition-colors duration-300">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-400 mt-1" size={20} />
                <div className="text-gray-300">
                  Business Bay, Dubai<br />
                  United Arab Emirates
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-400" size={20} />
                <div className="text-gray-300">+971 4 123 4567</div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-400" size={20} />
                <div className="text-gray-300">info@intermassgroups.ae</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            © 2025 Intermass Groups. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;