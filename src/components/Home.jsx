/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import {
  FaFacebook,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ParticlesBackground from "./ParticlesBackground";

const Home = ({ isActive }) => {
  // Animation variants (unchanged from previous code)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
  };

  const buttonVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 15px 5px rgba(144, 213, 255, 0.7)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] font-[] relative overflow-hidden z-0"
    >
      {/* Add ParticlesBackground with absolute positioning INSIDE the Home section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <ParticlesBackground />
      </div>

      <motion.div
        className="text-center z-10 relative" // Add z-10 to ensure content is above particles
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={containerVariants}
        key={isActive ? "active" : "inactive"}
      >
        {/* Rest of the component remains the same */}
        <motion.h1
          className="text-5xl font-bold text-white"
          variants={itemVariants}
        >
          Hi, I'm <span>Al-jon Santiago</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-white max-w-lg mx-auto"
          variants={itemVariants}
        >
          Full Stack Web Developer passionate about creating responsive and
          interactive web experiences with modern technologies.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center mt-6 space-x-4"
          variants={itemVariants}
        >
          {[FaGithub, FaLinkedin, FaFacebook].map((Icon, index) => (
            <motion.a
              key={`social-${index}`}
              custom={index}
              variants={socialVariants}
              initial="hidden"
              animate={isActive ? "visible" : "hidden"}
              href={
                [
                  "https://github.com",
                  "https://linkedin.com",
                  "https://facebook.com",
                ][index]
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#90D5FF] transition-colors duration-300 text-3xl"
              whileHover={{ y: -5, color: "#90D5FF" }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Download CV Button */}
        <motion.button
          className="mt-8 px-6 py-3 shadow-md shadow-[#7ac1f0] bg-[#90D5FF] text-white rounded-lg font-semibold flex items-center justify-center mx-auto group relative overflow-hidden cursor-pointer"
          variants={buttonVariants}
          whileHover="hover"
        >
          <span className="flex items-center relative z-10">
            <FaFileDownload className="mr-2" /> Download CV
          </span>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#90D5FF] shadow-[0_0_15px_5px_rgba(34,108,224,0.5)] transition-all duration-300 group-hover:shadow-none"></div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Home;
