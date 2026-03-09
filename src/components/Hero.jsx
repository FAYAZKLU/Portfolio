import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#f6f7ec] flex flex-col justify-center items-center px-6 overflow-hidden pt-20">
      
      {/* Soft background blobs */}
      <div className="absolute w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-50 -top-24 -left-24" />
      <div className="absolute w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-40 bottom-0 right-0" />

      {/* MAIN HERO */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 z-10">

        {/* LEFT: Intro, badges and CTAs */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Hi, I'm <span className="text-purple-700">K FAYAZ</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-xl mx-auto lg:mx-0 text-gray-600"
          >
            Pre-Final year B.Tech student crafting modern web experiences with Cloud, Full‑Stack, and DevOps.
          </motion.p>

          {/* Professional badges */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow border">
              <GraduationCap className="text-purple-600" size={18} />
              <span className="text-sm font-semibold text-gray-900">Computer Science Student</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow border">
              <CheckCircle2 className="text-green-600" size={18} />
              <span className="text-sm font-semibold text-gray-900">Available for Work</span>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex gap-4 flex-wrap justify-center lg:justify-start"
          >
            <Button
              onClick={() => window.open("/Myresume.pdf", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <a
              href="https://github.com/FAYAZKLU"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/k-fayaz-101007343/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >
              <Linkedin />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Overlapping name and photo */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Big name behind image */}
            <div className="absolute inset-x-0 -top-10 text-center select-none pointer-events-none">
              <span className="text-[12vw] md:text-[7rem] lg:text-[8rem] font-extrabold tracking-tight text-gray-900/20">
                KATIKA FAYAZ
              </span>
            </div>

            {/* Image card */}
            <div className="relative">
              <img
                src="/assets/profile.jpeg"
                alt="Profile"
                className="w-72 h-80 md:w-80 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
              />

            </div>
          </motion.div>
        </div>
      </div>

      {/* ROLE / DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 max-w-2xl text-center text-gray-600"
      >
        3th Year B.Tech Student passionate about Software Development, Full-Stack
        Development, DevOps, and building scalable real-world applications.
      </motion.p>

      {/* CTA area moved into left column above */}

      {/* STATS */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat value="7+" label="Projects" />
        <Stat value="5+" label="Certifications" />
        <Stat value="9.0+" label="CGPA" />
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div>
    <h3 className="text-3xl font-bold text-green-600">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default Hero;
