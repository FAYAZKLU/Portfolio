import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
           
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Projects</button>
          </div>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection('contact')} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all">Contact Here</Button>
          </div>

          <button className="md:hidden text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">About</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Projects</button>
            <button onClick={() => scrollToSection('certifications')} className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Certifications</button>
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all">Contact Here</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
