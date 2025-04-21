import React from "react";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col items-center justify-center py-16 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-200"
          : "bg-[#333333]"
      }`}
    >
      <div className="w-full">
        <h2
          className={`text-4xl font-bold mb-10 text-center font-[poppins] ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          About Me
        </h2>

        <div className="container mx-auto px-6 max-w-5xl space-y-6">
          {/* Introduction container with text on left side */}
          <div
            className={`p-5 rounded-lg border-l-4 border-[#90D5FF] shadow-md mb-10 w-full ${
              theme === "light"
                ? "bg-gradient-to-r from-gray-100 to-gray-200"
                : "bg-gradient-to-r from-[#2a2a2a] to-[#333333]"
            }`}
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
          </div>

          {/* Two column layout for Expertise and Background */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expertise Container */}
            <div
              className={`rounded-xl shadow-lg p-6 ${
                theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
              }`}
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
            </div>

            {/* Background Container */}
            <div
              className={`rounded-xl shadow-lg p-6 ${
                theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
              }`}
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
            </div>
          </div>

          {/* Off-Screen Time Container */}
          <div
            className={`rounded-xl shadow-lg p-6 ${
              theme === "light" ? "bg-white" : "bg-[#2a2a2a]"
            }`}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
