import React from 'react';
import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">KATIKA FAYAZ</h3>
              <p className="text-white/70 mb-4">Full-Stack Developer & Cloud Enthusiast</p>
              <div className="flex gap-4">
                <a href="https://github.com/FAYAZKLU" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-sage transition-colors hover:-translate-y-1 transform duration-300"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/k-fayaz-101007343/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-sage transition-colors hover:-translate-y-1 transform duration-300"><Linkedin size={24} /></a>
                   </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-sage transition-colors hover:translate-x-1 transform duration-300 inline-block">About</button></li>
                <li><button onClick={() => scrollToSection('skills')} className="text-white/70 hover:text-sage transition-colors hover:translate-x-1 transform duration-300 inline-block">Skills</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="text-white/70 hover:text-sage transition-colors hover:translate-x-1 transform duration-300 inline-block">Projects</button></li>
                <li><button onClick={() => scrollToSection('certifications')} className="text-white/70 hover:text-sage transition-colors hover:translate-x-1 transform duration-300 inline-block">Certifications</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-white/70 hover:text-sage transition-colors hover:translate-x-1 transform duration-300 inline-block">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Get In Touch</h4>
              <p className="text-white/70 mb-2">Vijayawada, Andhra Pradesh</p>
              <p className="text-white/70 mb-4">India</p>
              <a href="mailto:contact@katikafayaz.dev" className="text-sage hover:text-white transition-colors">katikafayaz.ai@gmail.com</a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">© {currentYear} Katika Fayaz. All rights reserved.</p>
              <p className="text-white/60 text-sm flex items-center gap-2">Built with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-sage hover:bg-sage/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50" aria-label="Scroll to top">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </footer>
  );
};

export default Footer;
