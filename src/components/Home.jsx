import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaFileDownload,
} from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-[#fefffe]"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#12130F]">
          Hi, I'm <span>Al-jon Santiago</span>
        </h1>
        <p className="mt-4 text-xl text-[#12130F] max-w-lg mx-auto">
          Full Stack Web Developer passionate about creating responsive and
          interactive web experiences with modern technologies.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#12130F] hover:text-[#226CE0] transition-colors duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#12130F] hover:text-[#226CE0] transition-colors duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#12130F] hover:text-[#226CE0] transition-colors duration-300 text-2xl"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Download CV Button */}
        <button className="mt-8 px-6 py-3 shadow-xl shadow-[#0062FF] hover:shadow-none bg-[#226CE0] text-white rounded-lg font-semibold flex items-center justify-center mx-auto group relative overflow-hidden cursor-pointer">
          <span className="flex items-center relative z-10">
            <FaFileDownload className="mr-2" /> Download CV
          </span>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-[#226CE0] shadow-[0_0_15px_5px_rgba(34,108,224,0.5)] transition-all duration-300 group-hover:shadow-none"></div>
        </button>
      </div>
    </section>
  );
};

export default Home;
