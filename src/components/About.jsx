import React from 'react';
import { Card } from './ui/card';
import { Code, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const LEETCODE_URL = "https://leetcode.com/u/Klu2300032982/"; 

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Card */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center overflow-hidden border-4 border-purple-300 group-hover:border-purple-500 transition-all duration-300 shadow-xl">
                  <div className="text-purple-400 text-center">
                    <GraduationCap size={100} className="mx-auto mb-4" />
                    <p className="text-sm font-medium text-gray-600">
                      Profile Photo
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Pre Final year <span className="text-purple-600 font-semibold">B.Tech student</span>, 
                pursuing Computer science Honours degree at KL University with a strong academic record (CGPA <span className="font-semibold">9.19/10</span>).
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                I enjoy <span className="font-semibold">problem solving and Data Structures & Algorithms</span>,
                and regularly practice coding challenges to improve logic, efficiency, and consistency.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                I have hands-on experience in <span className="font-semibold">full-stack web development</span>,
                 and a foundational understanding of <span className="font-semibold">cloud concepts</span>,
                with a strong interest in learning and growing in scalable system design.
              </p>

              {/* Skill Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {/* Full Stack */}
                <Card className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg">
                  <Code className="text-purple-600 mb-3" size={36} />
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">
                    Full-Stack Development
                  </h3>
                  <p className="text-sm text-gray-600">
                    React, Next.js, Node.js
                  </p>
                </Card>

                {/* LeetCode */}
                <Card
                  onClick={() => window.open(LEETCODE_URL, '_blank')}
                  className="cursor-pointer p-5 bg-gradient-to-br from-yellow-50 to-orange-100 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:shadow-lg"
                >
                  {/* LeetCode logo */}
                  <img
                    src="/assets/Leetcode.png"
                    alt="LeetCode"
                    className="w-10 h-10 mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1 text-lg">
                    DSA & Problem Solving
                  </h3>
                  <p className="text-sm text-gray-600">
                    Active on LeetCode
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
