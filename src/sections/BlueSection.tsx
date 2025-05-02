import React, { useEffect, useRef } from 'react';
import { BrainIcon } from 'lucide-react';
import { initScrollAnimation } from '../utils/animations';

const BlueSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    initScrollAnimation();
  }, []);

  return (
    <section 
      id="blue" 
      ref={sectionRef} 
      className="section-container bg-blue"
    >
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <BrainIcon className="h-6 w-6 text-white" />
                <span className="text-lg font-medium tracking-wide">LEVEL THREE</span>
              </div>
              
              <h2 className="section-title">
                Blue — The Wisdom
              </h2>
              
              <p className="section-description text-white/80">
                Enter the cerebral realm of Blue, where intellect and insight prevail. Navigate through complex technological landscapes and solve mind-bending puzzles that challenge your deepest understanding.
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
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="fade-in">
              <div className="image-container">
                <img 
                  src="/Blue.png" 
                  alt="Blue Level Screenshot" 
                  className="level-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue/40 to-transparent mix-blend-multiply"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-semibold text-lg mb-1">Logic Mastery</h3>
                  <p className="text-white/70 text-sm">Mind-bending challenges</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-semibold text-lg mb-1">Digital Realm</h3>
                  <p className="text-white/70 text-sm">Technology-inspired world</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlueSection;