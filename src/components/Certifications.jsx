import React from "react";
import { Card } from "./ui/card";
import { Award, Shield, Briefcase, Trophy, Cloud } from "lucide-react";
import { motion } from "framer-motion";


const Certifications = () => {
 const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2024 Certified Architect Associate",
    provider: "Oracle",
    certificate: "/assets/certifications/oci.png"
  },
  {
    title: "MogoDB Certified Associate Developer",
    provider: "MongoDB",
    certificate: "/assets/certifications/mongo.png"
  },
  {
    title: "Aviatrix Certified Multicloud Network Associate",
    provider: "Aviatrix",
    certificate: "/assets/certifications/avi.png"
  },
  {
    title: "Salesforce AI Associate Certification",
    provider: "Salesforce",
    certificate: "/assets/certifications/salesforce.png"
  },
  {
    title: "Automation Anywhere Certified Essentials RPA Professional",
    provider: "Automation Anywhere",
    certificate: "/assets/certifications/auto.png"
  },
  {
    title: "TCS ION Career Edge - Young Professional",
    provider: "TCS",
    certificate: "/assets/certifications/tcs.png"
  },
  {
    title: "LinguaSkill English Proficiency Test",
    provider: "Cambridge English",
    certificate: "/assets/certifications/lin.png"
  },
  {
    title: "Software Engineering Job Simulation",
    provider: "JPMorgan Chase & Co. - Forage",
    certificate: "/assets/certifications/jp.png"
  }
];

  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      specialization: "Cloud Native Software Engineering",
      institution: "KL University, Vijayawada",
      cgpa: "9.19 / 10",
      years: "2023 – 2027",
      logo: "/assets/education/klu.png"
    },
    {
      degree: "Intermediate (MPC)",
      field: "Mathematics, Physics, Chemistry",
      institution: "Narayana Junior College, Kurnool",
      marks: "9.5 / 10",
      years: "2021 – 2023",
      logo: "/assets/education/narayana.avif"
    },
  ];

  return (
    <motion.section
      id="certifications"
      className="py-24 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Certifications */}
        <div className="mb-24">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Certifications & Achievements
            </h2>

            <div className="w-16 h-1 bg-gray-300 mx-auto"></div>

            <p className="text-gray-500 mt-4">
              Professional credentials and accomplishments
            </p>
          </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  {certifications.map((cert, index) => (
    <Card
      key={index}
      className="p-6 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg"
    >

      <h3 className="font-semibold text-gray-900 mb-2 leading-snug">
        {cert.title}
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        {cert.provider}
      </p>

      <a
        href={cert.certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700 transition"
      >
        View Certificate →
      </a>

    </Card>
  ))}

</div>
        </div>

        {/* Education */}
        <div>

          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Education
            </h2>

            <div className="w-16 h-1 bg-gray-300 mx-auto"></div>
          </div>

          <div className="space-y-8">

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-md">

                  <div className="flex items-start gap-5">

                    {/* Logo */}
                    <img
                      src={edu.logo}
                      alt={edu.institution}
                      className="w-14 h-14 object-contain rounded-full border p-1 bg-white"
                    />

                    {/* Text */}
                    <div className="flex-1">

                      <h3 className="text-xl font-semibold text-gray-900">
                        {edu.degree}
                      </h3>

                      <p className="text-gray-600">
                        {edu.field}
                      </p>

                      {edu.specialization && (
                        <p className="text-gray-500 text-sm">
                          Specialization: {edu.specialization}
                        </p>
                      )}

                      <p className="text-gray-500 text-sm mt-1">
                        {edu.institution}
                      </p>

                      <div className="flex justify-between mt-2 text-sm">

                        <span className="font-semibold text-gray-900">
                          CGPA: {edu.cgpa || edu.marks}
                        </span>

                        <span className="text-gray-500">
                          {edu.years}
                        </span>

                      </div>

                    </div>

                  </div>

                </Card>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;