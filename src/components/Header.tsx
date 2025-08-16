import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Mainlogo from '/Mainlogo.png';

interface HeaderProps {
  onBookCall: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookCall }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {/* <img 
                src="/components/Mainlogo.png" 
                alt="Intermass Groups" 
                className="h-8 w-auto"
              />*/}
              <img 
               src={Mainlogo} 
               alt="Intermass Groups" 
               className="h-8 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <a 
              href="#portfolio" 
              className="text-white text-sm font-medium tracking-wider hover:text-red-400 transition-colors duration-300 relative group"
            >
              PORTFOLIO
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#services" 
              className="text-white text-sm font-medium tracking-wider hover:text-red-400 transition-colors duration-300 relative group"
            >
              SERVICES
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-white text-sm font-medium tracking-wider hover:text-red-400 transition-colors duration-300 relative group"
            >
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 shadow-2xl">
            <nav className="flex flex-col space-y-6 p-8">
              <a 
                href="#portfolio" 
                className="text-white text-sm font-medium tracking-wider hover:text-red-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                PORTFOLIO
              </a>
              <a 
                href="#services" 
                className="text-white text-sm font-medium tracking-wider hover:text-red-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                SERVICES
              </a>
              <a 
                href="#contact" 
                className="text-white text-sm font-medium tracking-wider hover:text-red-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
