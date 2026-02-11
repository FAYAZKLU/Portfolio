import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Home;
