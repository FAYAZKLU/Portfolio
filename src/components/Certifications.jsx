import React from 'react';
import { Card } from './ui/card';
import { Award, Shield, Briefcase, Trophy, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    { title: 'Oracle Cloud Infrastructure 2024 Certified Architect Associate', provider: 'Oracle', icon: <Cloud size={32} />, color: 'text-red-600' },
    { title: 'Aviatrix Certified Multicloud Network Associate', provider: 'Aviatrix', icon: <Shield size={32} />, color: 'text-blue-600' },
    { title: 'Salesforce AI Associate Certification', provider: 'Salesforce', icon: <Award size={32} />, color: 'text-sage' },
    { title: 'TCS ION Career Edge - Young Professional', provider: 'TCS', icon: <Trophy size={32} />, color: 'text-purple-600' },
    { title: 'Software Engineering Job Simulation', provider: 'JPMorgan Chase & Co. - Forage', icon: <Briefcase size={32} />, color: 'text-forest' },
  ];

  const education = [
    { degree: 'Bachelor of Technology', field: 'Computer Science and Engineering', specialization: 'Cloud Native Software Engineering', institution: 'KL University, Vijayawada', cgpa: '9.19 / 10', years: '2023 – 2027' },
    { degree: 'Intermediate (MPC)', field: 'Mathematics, Physics, Chemistry', institution: 'Narayana Junior College, Kurnool', marks: '953 / 1000', years: '2021 – 2023' },
  ];

  return (
    <motion.section
      id="certifications"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Certifications & Achievements</h2>
              <div className="w-20 h-1 bg-sage mx-auto mb-4"></div>
              <p className="text-forest/60 text-lg">Professional credentials and accomplishments</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 bg-white border-sage/20 hover:border-sage transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                  <div className={`${cert.color} mb-4 group-hover:scale-110 transition-transform`}>{cert.icon}</div>
                  <h3 className="font-bold text-forest text-lg mb-2">{cert.title}</h3>
                  <p className="text-sage text-sm">{cert.provider}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-forest mb-4">Education</h2>
              <div className="w-20 h-1 bg-sage mx-auto"></div>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-8 bg-cream border-sage/20 hover:border-sage transition-all duration-300 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-forest mb-2">{edu.degree}</h3>
                      <p className="text-lg text-sage mb-2">{edu.field}</p>
                      {edu.specialization && <p className="text-forest/70 mb-2">Specialization: {edu.specialization}</p>}
                      <p className="text-forest/60">{edu.institution}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="inline-block bg-sage/10 px-4 py-2 rounded-lg border border-sage/30 mb-2">
                        <p className="text-forest font-bold text-lg">{edu.cgpa || edu.marks}</p>
                      </div>
                      <p className="text-forest/60">{edu.years}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
