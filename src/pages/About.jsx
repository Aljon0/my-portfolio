/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

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
      <style jsx>{`
        @keyframes float-shape-about {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-15px) rotate(45deg) scale(1.1);
          }
          50% {
            transform: translateY(-30px) rotate(90deg) scale(0.9);
          }
          75% {
            transform: translateY(-15px) rotate(135deg) scale(1.05);
          }
        }

        @keyframes float-shape-reverse-about {
          0%,
          100% {
            transform: translateY(0px) rotate(360deg) scale(1);
          }
          25% {
            transform: translateY(-20px) rotate(270deg) scale(0.8);
          }
          50% {
            transform: translateY(-40px) rotate(180deg) scale(1.2);
          }
          75% {
            transform: translateY(-20px) rotate(90deg) scale(1);
          }
        }

        @keyframes grid-pulse-about {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes card-glow {
          0%,
          100% {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
              0 4px 16px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.8),
              0 6px 20px rgba(0, 0, 0, 0.6), 0 0 30px rgba(144, 213, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -1px 0 rgba(0, 0, 0, 0.4);
          }
        }

        @keyframes float-3d {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: translateY(-10px) rotateX(5deg) rotateY(-2deg);
          }
          50% {
            transform: translateY(-15px) rotateX(0deg) rotateY(2deg);
          }
          75% {
            transform: translateY(-8px) rotateX(-3deg) rotateY(-1deg);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(144, 213, 255, 0.3),
              0 0 40px rgba(144, 213, 255, 0.2),
              inset 0 0 20px rgba(144, 213, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(144, 213, 255, 0.5),
              0 0 60px rgba(144, 213, 255, 0.3),
              inset 0 0 30px rgba(144, 213, 255, 0.2);
          }
        }

        .floating-shape-about {
          position: absolute;
          border-radius: 30% 70% 60% 40%;
          background: linear-gradient(
            60deg,
            rgba(144, 213, 255, 0.15),
            rgba(30, 64, 175, 0.25)
          );
          border: 1px solid rgba(144, 213, 255, 0.4);
          backdrop-filter: blur(15px);
        }

        .floating-shape-about:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 15%;
          left: 8%;
          animation: float-shape-about 7s ease-in-out infinite;
          animation-delay: 0s;
        }

        .floating-shape-about:nth-child(2) {
          width: 120px;
          height: 120px;
          top: 50%;
          right: 10%;
          animation: float-shape-reverse-about 9s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .floating-shape-about:nth-child(3) {
          width: 100px;
          height: 100px;
          bottom: 25%;
          left: 12%;
          animation: float-shape-about 11s ease-in-out infinite;
          animation-delay: 3s;
        }

        .floating-shape-about:nth-child(4) {
          width: 70px;
          height: 70px;
          top: 25%;
          right: 25%;
          animation: float-shape-reverse-about 8s ease-in-out infinite;
          animation-delay: 4.5s;
        }

        .floating-shape-about:nth-child(5) {
          width: 110px;
          height: 110px;
          bottom: 15%;
          right: 8%;
          animation: float-shape-about 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        .floating-shape-about:nth-child(6) {
          width: 60px;
          height: 60px;
          top: 70%;
          left: 20%;
          animation: float-shape-reverse-about 6s ease-in-out infinite;
          animation-delay: 5s;
        }

        .grid-background-about {
          background-image: linear-gradient(
              rgba(144, 213, 255, 0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(144, 213, 255, 0.12) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          animation: grid-pulse-about 5s ease-in-out infinite;
        }

        .about-card-3d {
          background: linear-gradient(
            135deg,
            rgba(30, 30, 30, 0.9) 0%,
            rgba(45, 45, 45, 0.95) 50%,
            rgba(60, 60, 60, 0.9) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
            0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.3);
          transform-style: preserve-3d;
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          position: relative;
        }

        .about-card-3d::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(144, 213, 255, 0.1),
            transparent
          );
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .about-card-3d:hover::before {
          opacity: 1;
        }

        .about-card-3d:hover {
          transform: translateY(-10px) translateZ(20px) rotateX(5deg);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8),
            0 10px 30px rgba(0, 0, 0, 0.6), 0 0 40px rgba(144, 213, 255, 0.4),
            inset 0 2px 0 rgba(255, 255, 255, 0.2),
            inset 0 -2px 0 rgba(0, 0, 0, 0.4);
        }

        .intro-card-3d {
          background: linear-gradient(
            135deg,
            rgba(20, 20, 20, 0.95) 0%,
            rgba(35, 35, 35, 0.98) 100%
          );
          border: 2px solid rgba(144, 213, 255, 0.4);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6),
            0 6px 20px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 30px rgba(144, 213, 255, 0.1);
          transform-style: preserve-3d;
          transition: all 0.4s ease;
          backdrop-filter: blur(15px);
        }

        .intro-card-3d:hover {
          transform: translateY(-8px) translateZ(15px) rotateX(3deg);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.7),
            0 0 40px rgba(144, 213, 255, 0.5);
        }

        .floating-animation {
          animation: float-3d 6s ease-in-out infinite;
        }

        .emoji-3d {
          display: inline-block;
          font-size: 1.5em;
          transform-style: preserve-3d;
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 10px rgba(144, 213, 255, 0.5));
        }

        .emoji-3d:hover {
          transform: translateZ(10px) rotateY(20deg) scale(1.2);
          filter: drop-shadow(0 0 20px rgba(144, 213, 255, 0.8));
        }
      `}</style>

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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center font-[poppins] floating-animation text-white"
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

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            {/* Top Intro Section */}
            <div className="mb-8">
              {/* Introduction */}
              <div
                className="intro-card-3d p-6 rounded-2xl"
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

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Side: Information Containers */}
              <div className="space-y-6">
                {/* AI Focus */}
                <div
                  className="about-card-3d rounded-2xl p-6"
                  style={{
                    transform: `perspective(600px) rotateX(${
                      mousePosition.y * 1.5
                    }deg) rotateY(${mousePosition.x * 1.5}deg)`,
                    borderTopColor: accentColor,
                    borderTopWidth: "3px",
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <span
                      className="emoji-3d text-3xl"
                      style={{ color: accentColor }}
                    >
                      🔍
                    </span>
                    <div>
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
                        Recently, I've been focusing on integrating AI into web
                        apps — building smart, responsive systems using tools
                        like Hugging Face APIs and Mistral AI. From an
                        AI-powered resume builder to a healthcare companion bot,
                        I enjoy creating applications that go beyond CRUD and
                        deliver real user intelligence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expertise Container */}
                <div
                  className="about-card-3d rounded-2xl p-6"
                  style={{
                    transform: `perspective(600px) rotateX(${
                      mousePosition.y * 1.2
                    }deg) rotateY(${mousePosition.x * 1.2}deg)`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <span
                      className="emoji-3d text-3xl"
                      style={{ color: accentColor }}
                    >
                      ⚡
                    </span>
                    <div>
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
                        applications solutions using modern technologies like
                        React, Express.js, Node.js, and implementing best
                        practices for application security and performance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Background Container */}
                <div
                  className="about-card-3d rounded-2xl p-6"
                  style={{
                    transform: `perspective(600px) rotateX(${
                      mousePosition.y * 1.8
                    }deg) rotateY(${mousePosition.x * 1.8}deg)`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <span
                      className="emoji-3d text-3xl"
                      style={{ color: accentColor }}
                    >
                      🚀
                    </span>
                    <div>
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

              {/* Right Side: Additional Content */}
              <div className="space-y-6">
                {/* Passion Card */}
                <div
                  className="about-card-3d rounded-2xl p-6"
                  style={{
                    transform: `perspective(600px) rotateX(${
                      mousePosition.y * -1.5
                    }deg) rotateY(${mousePosition.x * -1.5}deg)`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <span
                      className="emoji-3d text-3xl"
                      style={{ color: accentColor }}
                    >
                      💡
                    </span>
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold mb-3"
                        style={{
                          color: accentColor,
                          textShadow: `0 0 15px ${accentColor}40`,
                        }}
                      >
                        Innovation Drive
                      </h3>
                      <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                        I'm passionate about pushing the boundaries of what's
                        possible in web development, constantly exploring new
                        technologies and methodologies to create cutting-edge
                        solutions that make a real impact.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mission Card */}
                <div
                  className="about-card-3d rounded-2xl p-6"
                  style={{
                    transform: `perspective(600px) rotateX(${
                      mousePosition.y * -1.2
                    }deg) rotateY(${mousePosition.x * -1.2}deg)`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <span
                      className="emoji-3d text-3xl"
                      style={{ color: accentColor }}
                    >
                      🎯
                    </span>
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold mb-3"
                        style={{
                          color: accentColor,
                          textShadow: `0 0 15px ${accentColor}40`,
                        }}
                      >
                        Mission
                      </h3>
                      <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                        My mission is to bridge the gap between complex
                        technology and user-friendly experiences, creating
                        digital solutions that are both powerful and accessible
                        to everyone.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Values Card */}
                <div
                  className="about-card-3d rounded-2xl p-6"
                  style={{
                    transform: `perspective(600px) rotateX(${
                      mousePosition.y * -1.8
                    }deg) rotateY(${mousePosition.x * -1.8}deg)`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <span
                      className="emoji-3d text-3xl"
                      style={{ color: accentColor }}
                    >
                      ⭐
                    </span>
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-bold mb-3"
                        style={{
                          color: accentColor,
                          textShadow: `0 0 15px ${accentColor}40`,
                        }}
                      >
                        Core Values
                      </h3>
                      <p className="leading-relaxed text-gray-300 text-sm md:text-base">
                        Quality, innovation, and user-centric design are at the
                        heart of everything I do. I believe in writing clean,
                        maintainable code and creating experiences that truly
                        serve the end user.
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
