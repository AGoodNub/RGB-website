import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import RedSection from './sections/RedSection';
import GreenSection from './sections/GreenSection';
import BlueSection from './sections/BlueSection';

function App() {
  return (
    <div className="font-pixel relative bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <RedSection />
        <GreenSection />
        <BlueSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;