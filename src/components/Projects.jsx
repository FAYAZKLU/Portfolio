import React, { useRef } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'CortexAI – AI Powered Chatbot',
      description:
        'Built a full-stack AI chatbot using Gemini API with Clerk authentication and MongoDB for chat history. Designed a responsive UI with Tailwind CSS and deployed on Vercel for global access.',
      image: '/assets/projects/cortex.png',
      tech: ['React', 'Next.js', 'MongoDB', 'Tailwind CSS', 'Gemini API', 'Clerk'],
      demo: 'https://cortex-ai-three.vercel.app/',
    },
    {
      title: 'Interview Buddy – AI Interview Mocker',
      description:
        'Developed a mock interview app with AI-generated questions, voice recording, and webcam monitoring.',
      image: '/assets/projects/intai.png',
      tech: ['Next.js', 'React', 'Clerk', 'Drizzle ORM', 'Gemini API'],
      demo: 'https://ai-interview-buddy.vercel.app/',
    },
    {
      title: 'Weather-App',
      description:
        'A responsive weather application that fetches real-time weather data using external APIs, displays full-day temperature graphs, air quality index (AQI) details, and provides alert conditions when temperatures rise or drop, all through a clean, modern UI.',
      image: '/assets/projects/weather.png',
      tech: ['HTML', 'CSS', 'React', 'Weather API', 'Javascript'],
      demo: 'https://weather-app-psi-lyart-35.vercel.app/',
    },
    {
      title: 'Nexora – AI Virtual Assistant',
      description:
        'Created a voice-controlled virtual assistant using Gemini and Web Speech APIs.',
      image: '/assets/projects/nex.png',
      tech: ['React', 'Web Speech API', 'Gemini API'],
      demo: 'https://nexora-virtual-assistant.vercel.app/',
    },
    {
      title: 'Tic Tac Toe Game',
      description:
        'An interactive Tic Tac Toe game featuring Player vs Player and Player vs Computer modes, real-time turn indicators, and a clean, modern UI.',
      image: '/assets/projects/game.png',
      tech: ['HTML', 'CSS', 'Javascript'],
      demo: 'https://tic-tac-toe-game-weld-delta.vercel.app/',
    },
    {
      title: 'Automated Job Search Agent',
      description:
        'Designed an n8n workflow that filters LinkedIn jobs and sends Telegram alerts automatically.',
      image: '/assets/projects/n8.png',
      tech: ['n8n', 'Google Sheets API', 'Telegram Bot API'],
      demo: '#',
    },
  ];

  const sliderRef = useRef(null);

  const scrollByPage = (direction = 1) => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * direction, behavior: 'smooth' });
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-white/40 mb-2"></div>
            <p className="text-white/60 text-lg">
              Slide to explore each project
            </p>
          </div>

          <div className="relative">
            {/* Left Arrow (hidden on mobile) */}
            <button
              onClick={() => scrollByPage(-1)}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow border border-white/20"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Right Arrow (hidden on mobile) */}
            <button
              onClick={() => scrollByPage(1)}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow border border-white/20"
            >
              <ChevronRight size={18} />
            </button>

            {/* Slider */}
            <div
              ref={sliderRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory"
            >
              <div className="flex">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="snap-start shrink-0 w-full p-3"
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-white/10 border border-white/15 overflow-hidden rounded-2xl group">
                       {/* Full image without cropping */}
<div className="overflow-hidden bg-black/40">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-auto object-contain transform transition-transform duration-500 group-hover:scale-105"
  />
</div>


                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {project.title}
                          </h3>

                          <p className="text-white/70 mb-4 leading-relaxed">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="bg-white/5 border-white/20 text-white/80"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          {/* Centered button */}
                          <div className="flex justify-center">
                            <Button
                              className="bg-white/15 hover:bg-white/25 text-white px-6"
                              onClick={() => window.open(project.demo, '_blank')}
                            >
                              <ExternalLink size={16} className="mr-2" />
                              View My Project
                            </Button>
                          </div>
                        </div>

                        {/* Bottom hover line */}
                        <div className="h-1 bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
