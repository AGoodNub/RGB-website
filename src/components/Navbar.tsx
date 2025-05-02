import React, { useState, useEffect } from 'react';
import { GlobeIcon } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine if page is scrolled
      setIsScrolled(window.scrollY > 50);
      
      // Get current section
      const sections = ['hero', 'red', 'green', 'blue'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getNavbarStyle = () => {
    let bgColor = 'transparent';
    let textColor = 'text-white';
    
    if (isScrolled) {
      switch (activeSection) {
        case 'red':
          bgColor = 'bg-red-dark/90 backdrop-blur-md';
          break;
        case 'green':
          bgColor = 'bg-green-dark/90 backdrop-blur-md';
          break;
        case 'blue':
          bgColor = 'bg-blue-dark/90 backdrop-blur-md';
          break;
        default:
          bgColor = 'bg-black/90 backdrop-blur-md';
          break;
      }
    }
    
    return `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${bgColor} ${textColor}`;
  };

  return (
    <nav className={getNavbarStyle()}>
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <GlobeIcon className="h-8 w-8 mr-2" />
          <span className="text-2xl font-bold">RGB</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('red')}
            className={`nav-link ${activeSection === 'red' ? 'text-red-light font-medium' : 'text-white/80 hover:text-white'}`}
          >
            Red
          </button>
          <button 
            onClick={() => scrollToSection('green')}
            className={`nav-link ${activeSection === 'green' ? 'text-green-light font-medium' : 'text-white/80 hover:text-white'}`}
          >
            Green
          </button>
          <button 
            onClick={() => scrollToSection('blue')}
            className={`nav-link ${activeSection === 'blue' ? 'text-blue-light font-medium' : 'text-white/80 hover:text-white'}`}
          >
            Blue
          </button>
        </div>
        
        <button className="btn px-5 py-2 bg-white text-black text-sm rounded-full hover:bg-opacity-90">
          Play Game
        </button>
      </div>
    </nav>
  );
};

export default Navbar;