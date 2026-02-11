import React from 'react';
import { Card } from './ui/card';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
       { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        ],
    },
    {
      title: 'Tools and Others',
      skills: [
         { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
         { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
        { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
        { name: 'n8n', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-sage mx-auto mb-4"></div>
            <p className="text-forest/60 text-lg">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-white border-sage/20 hover:border-sage transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                <h3 className="font-bold text-forest text-lg mb-4">{category.title}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-cream transition-all duration-300 group/skill" title={skill.name}>
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain transition-transform group-hover/skill:scale-110 duration-300" />
                      </div>
                      <span className="text-xs text-forest/80 text-center font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

         
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
