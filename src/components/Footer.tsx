import React from 'react';
import { GlobeIcon, TwitterIcon, InstagramIcon, YoutubeIcon, DiscIcon as DiscordIcon, MailIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <GlobeIcon className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">RGB</span>
            </div>
            <p className="text-neutral-400 mb-6">
              Experience a journey through the spectrum in our visually stunning RGB game.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <YoutubeIcon size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Discord">
                <DiscordIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Game</h3>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Levels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-neutral-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-3 bg-neutral-800 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-black px-4 py-3 rounded-r-lg hover:bg-opacity-90 transition-colors">
                <MailIcon size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} RGB Game. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;