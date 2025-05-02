import React, { useEffect } from 'react';
import { MonitorSmartphoneIcon } from 'lucide-react';
import { initScrollAnimation } from '../utils/animations';

const HeroSection = () => {
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-red-dark/50 via-green-dark/50 to-blue-dark/50"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10 py-20 md:py-0">
        <div className="fade-in">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <MonitorSmartphoneIcon size={16} className="mr-2" />
            <span>Available on all platforms</span>
          </div>
          
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experience the 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red via-green to-blue"> Spectrum</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-10">
            Journey through three unique worlds in RGB, where each level transforms your experience through color, mood, and challenge.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="btn btn-primary">
              Play Demo
            </button>
            <button className="btn btn-outline">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="fade-in delay-300 mt-12 relative">
          <div className="image-container floating">
            <img 
              src="src/sections/Hero.png" 
              alt="RGB Game Overview" 
              className="level-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={() => document.getElementById('red')?.scrollIntoView({ behavior: 'smooth' })}
            className="bounce flex flex-col items-center text-white/70 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;