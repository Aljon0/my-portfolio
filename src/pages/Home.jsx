/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { FaFileDownload, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  // Define theme-dependent styles
  const textColor = theme === "light" ? "text-gray-800" : "text-white";
  const buttonShadow =
    theme === "light"
      ? "shadow-[0_0_15px_5px_rgba(30,64,175,0.3)]"
      : "shadow-[0_0_15px_5px_rgba(144,213,255,0.5)]";

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden z-0 transition-colors duration-500 ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-200"
          : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]"
      }`}
    >
      {/* Add ParticlesBackground with absolute positioning INSIDE the Home section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <ParticlesBackground theme={theme} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 flex items-center justify-center z-10 relative">
        {/* Centered Introduction */}
        <div className="w-full max-w-lg text-center px-2 sm:px-0">
          {/* Adjusted text sizes and spacing for mobile */}
          <h1
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            Hi, I'm{" "}
            <span
              className={theme === "light" ? "text-blue-800" : "text-[#90D5FF]"}
            >
              Al-jon Santiago
            </span>
          </h1>

          <h2
            className={`mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl ${
              theme === "light" ? "text-blue-800" : "text-[#90D5FF]"
            } font-medium`}
          >
            Full Stack Developer | AI-Integrated Web Solutions
          </h2>

          <p
            className={`mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg ${
              theme === "light" ? "text-gray-700" : "text-white"
            }`}
          >
            Crafting modern web applications with integrated AI features using tools like Hugging Face and Mistral AI.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center mt-3 sm:mt-4 md:mt-6 space-x-3 sm:space-x-4">
            {[FaGithub, FaLinkedin, FaFacebook].map((Icon, index) => (
              <a
                key={`social-${index}`}
                href={
                  [
                    "https://github.com/Aljon0",
                    "https://www.linkedin.com/in/santiago-al-jon-b-31a478281/",
                    "https://www.facebook.com/aljon.santiago.528",
                  ][index]
                }
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors duration-300 text-xl sm:text-2xl ${
                  theme === "light"
                    ? "text-gray-700 hover:text-blue-800"
                    : "text-white hover:text-[#90D5FF]"
                }`}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <button
            className={`mt-4 sm:mt-5 md:mt-6 px-4 sm:px-5 py-1 sm:py-2 shadow-md ${
              theme === "light"
                ? "bg-blue-800 shadow-blue-800/30"
                : "bg-[#90D5FF] shadow-[#7ac1f0]"
            } text-white rounded-lg font-medium flex items-center justify-center group relative overflow-hidden cursor-pointer hover:scale-105 transition-transform mx-auto text-sm sm:text-base`}
          >
            <span className="flex items-center relative z-10">
              <a href="/Aljon Santiago-CV.pdf" download className="flex gap-2 items-center"><FaFileDownload className="mr-2" /> Download CV</a>
            </span>
            {/* Glow effect */}
            <div
              className={`absolute inset-0 ${
                theme === "light" ? "bg-blue-800" : "bg-[#90D5FF]"
              } ${buttonShadow} transition-all duration-300 group-hover:shadow-none`}
            ></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;