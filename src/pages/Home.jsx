import React from "react";
import {
  FaFacebook,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className={`h-screen flex items-center justify-center relative overflow-hidden z-0 transition-colors duration-500 ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-200"
          : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]"
      }`}
    >
      {/* Add ParticlesBackground with absolute positioning INSIDE the Home section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <ParticlesBackground theme={theme} />
      </div>

      <div className="text-center z-10 relative">
        <h1
          className={`text-5xl font-bold ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Hi, I'm <span className="text-[#90D5FF]">Al-jon Santiago</span>
        </h1>

        <h2 className="mt-4 text-xl text-[#90D5FF] font-medium max-w-lg mx-auto">
          Web Developer
        </h2>

        <p
          className={`mt-4 text-xl max-w-lg mx-auto ${
            theme === "light" ? "text-gray-700" : "text-white"
          }`}
        >
          Crafting responsive web applications with modern technologies.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center mt-6 space-x-4">
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
              className={`transition-colors duration-300 text-3xl ${
                theme === "light"
                  ? "text-gray-700 hover:text-[#90D5FF]"
                  : "text-white hover:text-[#90D5FF]"
              }`}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Download CV Button */}
        <button className="mt-8 px-6 py-3 shadow-md shadow-[#7ac1f0] bg-[#90D5FF] text-white rounded-lg font-semibold flex items-center justify-center mx-auto group relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
          <span className="flex items-center relative z-10">
            <FaFileDownload className="mr-2" /> Download CV
          </span>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#90D5FF] shadow-[0_0_15px_5px_rgba(34,108,224,0.5)] transition-all duration-300 group-hover:shadow-none"></div>
        </button>
      </div>
    </section>
  );
};

export default Home;
