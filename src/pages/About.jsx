/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./About.module.css";

const About = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Define the accent color for dark theme
  const accentColor = "#90D5FF";

  return (
    <div>
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
        }}
      >
        <div className="w-full py-8 relative z-10">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center font-[poppins] ${styles.floatingAnimation} text-white`}
            style={{
              textShadow:
                "0 0 20px rgba(144, 213, 255, 0.5), 0 0 40px rgba(144, 213, 255, 0.3)",
              background: "linear-gradient(45deg, #90D5FF, #ffffff, #90D5FF)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transform: `perspective(1000px) rotateX(${
                mousePosition.y * 3
              }deg) rotateY(${mousePosition.x * 3}deg)`,
            }}
          >
            About Me
          </h2>

          <div className="px-4 sm:px-6 max-w-5xl mx-auto">
            {/* Introduction Section */}
            <div className="mb-12">
              <div
                className={`${styles.introCard3d} p-6 rounded-2xl`}
                style={{
                  transform: `perspective(800px) rotateX(${
                    mousePosition.y * 2
                  }deg) rotateY(${mousePosition.x * 2}deg)`,
                  borderLeftColor: accentColor,
                  borderLeftWidth: "6px",
                }}
              >
                <p className="text-lg md:text-xl leading-relaxed text-gray-300">
                  Hello! I'm{" "}
                  <span
                    className="font-bold text-xl"
                    style={{
                      color: accentColor,
                      textShadow: `0 0 10px ${accentColor}50`,
                    }}
                  >
                    Al-Jon Santiago
                  </span>{" "}
                  , a Full Stack Web Developer from General Trias, Cavite,
                  Philippines.
                </p>
              </div>
            </div>

            {/* Main Content - Reverse Triangle Layout */}
            <div className="space-y-8">
              {/* Top Row - Two Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* AI Focus */}
                <div
                  className={`${styles.aboutCard3d} rounded-2xl p-6 min-h-[200px]`}
                  style={{
                    transform: `perspective(600px) rotateX(${
                      mousePosition.y * 1.5
                    }deg) rotateY(${mousePosition.x * 1.5}deg)`,
                    borderTopColor: accentColor,
                    borderTopWidth: "3px",
                  }}
                >
                  <div className="flex items-start space-x-4 h-full">
                    <span
                      className={`${styles.emoji3d} text-3xl flex-shrink-0`}
                      style={{ color: accentColor }}
                    >
                      🔍
                    </span>
                    <div className="flex-1">
                      <h3
                        className="text-xl md:text-2xl font-bold mb-3"
                        style={{
                          color: accentColor,
                          textShadow: `0 0 15px ${accentColor}40`,
                        }}
                      >
                        AI Integration Focus
                      </h3>
                      <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                        Recently, I've been focusing on integrating AI and
                        automation into web apps — building smart, responsive
                        systems using tools like Hugging Face APIs, Mistral AI,
                        and low-code platforms like Make.com and n8n. From an
                        AI-powered resume builder to a healthcare companion bot,
                        and now automating workflows for business operations, I
                        enjoy creating applications that go beyond CRUD and
                        deliver real user intelligence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expertise */}
                <div
                  className={`${styles.aboutCard3d} rounded-2xl p-6 min-h-[200px]`}
                  style={{
                    transform: `perspective(600px) rotateX(${
                      mousePosition.y * 1.2
                    }deg) rotateY(${mousePosition.x * 1.2}deg)`,
                  }}
                >
                  <div className="flex items-start space-x-4 h-full">
                    <span
                      className={`${styles.emoji3d} text-3xl flex-shrink-0`}
                      style={{ color: accentColor }}
                    >
                      ⚡
                    </span>
                    <div className="flex-1">
                      <h3
                        className="text-xl md:text-2xl font-bold mb-3"
                        style={{
                          color: accentColor,
                          textShadow: `0 0 15px ${accentColor}40`,
                        }}
                      >
                        Expertise
                      </h3>
                      <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                        I specialize in building secure, responsive web
                        applications and workflow automations using modern
                        technologies like React, Express.js, Node.js, Make.com,
                        and n8n. I apply best practices for security,
                        performance, and business process automation, enabling
                        clients to scale with minimal overhead.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - One Centered Card */}
              <div className="flex justify-center">
                <div
                  className={`${styles.aboutCard3d} rounded-2xl p-6 min-h-[200px] w-full max-w-2xl`}
                  style={{
                    transform: `perspective(600px) rotateX(${
                      mousePosition.y * 1.8
                    }deg) rotateY(${mousePosition.x * 1.8}deg)`,
                  }}
                >
                  <div className="flex items-start space-x-4 h-full">
                    <span
                      className={`${styles.emoji3d} text-3xl flex-shrink-0`}
                      style={{ color: accentColor }}
                    >
                      🚀
                    </span>
                    <div className="flex-1">
                      <h3
                        className="text-xl md:text-2xl font-bold mb-3"
                        style={{
                          color: accentColor,
                          textShadow: `0 0 15px ${accentColor}40`,
                        }}
                      >
                        Background
                      </h3>
                      <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                        With a background in web development, I bring a
                        versatile skillset to projects, ensuring they're not
                        only functional but also deliver seamless experiences
                        across all devices and platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
