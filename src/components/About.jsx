import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#333333] py-16"
    >
      <h2 className="text-4xl font-bold text-white mb-10 text-center font-[poppins]">
        About Me
      </h2>

      <div className="container mx-auto px-6 max-w-5xl space-y-6">
        {/* Introduction container with text on left side */}
        <div className="bg-gradient-to-br from-[#333333] to-[#2a2a2a] rounded-xl shadow-lg p-6 flex items-center">
          <div className="border-l-4 border-[#90D5FF] pl-4">
            <p className="text-lg text-white">
              Hello! I'm <span className="text-[#90D5FF]">Al-Jon Santiago</span>
              , a Web Developer from General Trias, Cavite, Philippines.
            </p>
          </div>
        </div>

        {/* Two column layout for Expertise and Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Expertise Container */}
          <div className="bg-[#2a2a2a] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-[#90D5FF] mb-4">
              Expertise
            </h3>
            <p className="text-white leading-relaxed">
              I specialize in building secure, responsive web applications using
              modern technologies like React, Node.js, and implementing best
              practices for web security.
            </p>
          </div>

          {/* Background Container */}
          <div className="bg-[#2a2a2a] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-[#90D5FF] mb-4">
              Background
            </h3>
            <p className="text-white leading-relaxed">
              With a background in both development, I bring a unique
              perspective to projects, ensuring they're not only functional and
              user-friendly.
            </p>
          </div>
        </div>

        {/* Off-Screen Time Container */}
        <div className="bg-[#2a2a2a] rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-[#90D5FF] mb-4">
            Off-Screen Time
          </h3>
          <p className="text-white leading-relaxed">
            When I'm not coding, you can find me researching new security
            trends, contributing to open-source projects, or enjoying the
            beautiful beaches of the Philippines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
