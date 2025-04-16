/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const About = ({ isActive }) => {
  const { theme } = useTheme();

  // Animation variants for the About section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const introVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: custom * 0.2 + 0.5 },
    }),
  };

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col items-center justify-center py-16 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-200"
          : "bg-[#333333]"
      }`}
    >
      <motion.div
        className="w-full"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={sectionVariants}
        key={isActive ? "active" : "inactive"}
      >
        <motion.h2
          className={`text-4xl font-bold mb-10 text-center font-[poppins] ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
          variants={titleVariants}
        >
          About Me
        </motion.h2>

        <div className="container mx-auto px-6 max-w-5xl space-y-6">
          {/* Introduction container with text on left side */}
          <motion.div
            className={`p-5 rounded-lg border-l-4 border-[#90D5FF] shadow-md mb-10 w-full ${
              theme === "light"
                ? "bg-gradient-to-r from-gray-100 to-gray-200"
                : "bg-gradient-to-r from-[#2a2a2a] to-[#333333]"
            }`}
            variants={introVariants}
          >
            <p
              className={`text-lg leading-relaxed text-center ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Hello! I'm{" "}
              <span className="text-[#90D5FF] font-semibold">
                Al-Jon Santiago
              </span>{" "}
              , a Full Stack Web Developer from General Trias, Cavite,
              Philippines.
            </p>
          </motion.div>

          {/* Two column layout for Expertise and Background */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expertise Container */}
            <motion.div
              className={`rounded-xl shadow-lg p-6 ${
                theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
              }`}
              variants={cardVariants}
              custom={0}
            >
              <h3 className="text-xl font-semibold text-[#90D5FF] mb-4">
                Expertise
              </h3>
              <p
                className={`leading-relaxed ${
                  theme === "light" ? "text-gray-700" : "text-white"
                }`}
              >
                I specialize in building secure, responsive web applications
                solutions using modern technologies like React, Express.js,
                Node.js, and implementing best practices for application
                security and performance.
              </p>
            </motion.div>

            {/* Background Container */}
            <motion.div
              className={`rounded-xl shadow-lg p-6 ${
                theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
              }`}
              variants={cardVariants}
              custom={1}
            >
              <h3 className="text-xl font-semibold text-[#90D5FF] mb-4">
                Background
              </h3>
              <p
                className={`leading-relaxed ${
                  theme === "light" ? "text-gray-700" : "text-white"
                }`}
              >
                With a background in web development, I bring a versatile
                skillset to projects, ensuring they're not only functional but
                also deliver seamless experiences across all devices and
                platforms.
              </p>
            </motion.div>
          </div>

          {/* Off-Screen Time Container */}
          <motion.div
            className={`rounded-xl shadow-lg p-6 ${
              theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
            }`}
            variants={cardVariants}
            custom={2}
          >
            <h3 className="text-xl font-semibold text-[#90D5FF] mb-4">
              Off-Screen Time
            </h3>
            <p
              className={`leading-relaxed ${
                theme === "light" ? "text-gray-700" : "text-white"
              }`}
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying the beautiful
              beaches of the Philippines while sketching ideas for my next
              application.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
