import React, { useEffect, useRef } from 'react';
import { LeafIcon } from 'lucide-react';
import { initScrollAnimation } from '../utils/animations';

const GreenSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <section 
      id="green" 
      ref={sectionRef} 
      className="section-container bg-green"
    >
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="fade-in">
              <div className="image-container">
                <img 
                  src="/Green.png" 
                  alt="Green Level Screenshot" 
                  className="level-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green/40 to-transparent mix-blend-multiply"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-semibold text-lg mb-1">Healing Powers</h3>
                  <p className="text-white/70 text-sm">Restore and regenerate</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-semibold text-lg mb-1">Natural Harmony</h3>
                  <p className="text-white/70 text-sm">Balance-based puzzles</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <LeafIcon className="h-6 w-6 text-white" />
                <span className="text-lg font-medium tracking-wide">LEVEL TWO</span>
              </div>
              
              <h2 className="section-title">
                Green — The Growth
              </h2>
              
              <p className="section-description text-white/80">
                Discover the lush world of Green, where growth and harmony flourish. Master the art of balance while navigating dense forests and solving nature-inspired puzzles that test your adaptability.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="btn btn-primary">
                  Play Demo
                </button>
                <button className="btn btn-outline">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenSection;