import React, { useState } from "react";
import {
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaMobileAlt,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiPostman,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

// Mock theme context
const useTheme = () => ({ theme: "dark" });

// Custom Mistral AI icon
const MistralIcon = ({ color, size, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      style={style}
    >
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.3L18 8v8l-6 3-6-3V8l6-3.7zm0 1.7L7 9v6l5 2.5L17 15V9l-5-3z" />
    </svg>
  );
};

// Custom Hugging Face icon
const HuggingFaceIcon = ({ color, size, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      style={style}
    >
      <path d="M7.5 5c-.8 0-1.5.7-1.5 1.5S6.7 8 7.5 8 9 7.3 9 6.5 8.3 5 7.5 5zm9 0c-.8 0-1.5.7-1.5 1.5S15.7 8 16.5 8 18 7.3 18 6.5 17.3 5 16.5 5zm-9 12c-.8 0-1.5.7-1.5 1.5S6.7 20 7.5 20 9 19.3 9 18.5 8.3 17 7.5 17zm9 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM12 10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
    </svg>
  );
};

const Stack = () => {
  const { theme } = useTheme();
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const accentColor = theme === "light" ? "#1E40AF" : "#90D5FF";

  const ReactNativeIcon = ({ color, size, style }) => {
    return (
      <div className="relative">
        <FaReact color={color} size={size} style={style} />
        <FaMobileAlt
          color={color}
          size={size * 0.4}
          style={{
            position: "absolute",
            bottom: -2,
            right: -4,
            ...style,
          }}
        />
      </div>
    );
  };

  const getIconColor = (baseColor, name) => {
    if (theme === "dark") {
      if (name === "Express") return "#FFFFFF";
      if (name === "GitHub") return "#FFFFFF";
    }
    return baseColor;
  };

  const skillCategories = [
    {
      category: "Web Development",
      title: "FERN Stack",
      skills: [
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Express", icon: SiExpress, color: "#333333" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      ],
    },
    {
      category: "Other Technologies",
      title: "Other Tech I Use",
      description: "Additional technologies in my toolkit",
      skills: [
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Hugging Face", icon: HuggingFaceIcon, color: "#FFD21E" },
        { name: "Mistral AI", icon: MistralIcon, color: "#6352D9" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "GitHub", icon: FaGithub, color: "#333333" },
        { name: "Git", icon: FaGit, color: "#F05032" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ],
    },
  ];

  const handleSkillClick = (skillName) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <style jsx>{`
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

        .skill-container-3d {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .skill-card-3d {
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
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          backdrop-filter: blur(10px);
        }

        .skill-card-3d::before {
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

        .skill-card-3d:hover::before {
          opacity: 1;
        }

        .skill-card-3d:hover {
          transform: translateY(-15px) rotateX(10deg) rotateY(5deg) scale(1.05);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8),
            0 10px 30px rgba(0, 0, 0, 0.6),
            0 0 40px var(--glow-color, rgba(144, 213, 255, 0.4)),
            inset 0 2px 0 rgba(255, 255, 255, 0.2),
            inset 0 -2px 0 rgba(0, 0, 0, 0.4);
        }

        .skill-icon-3d {
          transform-style: preserve-3d;
          transition: all 0.3s ease;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        .skill-card-3d:hover .skill-icon-3d {
          transform: translateZ(20px) rotateY(15deg);
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5));
        }

        .category-button-3d {
          background: linear-gradient(
            135deg,
            rgba(30, 30, 30, 0.9) 0%,
            rgba(45, 45, 45, 0.95) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform-style: preserve-3d;
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .category-button-3d:hover {
          transform: translateY(-5px) rotateX(5deg);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(144, 213, 255, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .category-button-3d.active {
          background: linear-gradient(
            135deg,
            rgba(144, 213, 255, 0.2) 0%,
            rgba(30, 64, 175, 0.3) 100%
          );
          border-color: rgba(144, 213, 255, 0.6);
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .info-panel-3d {
          background: linear-gradient(
            135deg,
            rgba(20, 20, 20, 0.95) 0%,
            rgba(35, 35, 35, 0.98) 100%
          );
          border: 1px solid rgba(144, 213, 255, 0.3);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6),
            0 6px 20px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 30px rgba(144, 213, 255, 0.1);
          backdrop-filter: blur(15px);
          transform-style: preserve-3d;
        }

        .floating-animation {
          animation: float-3d 6s ease-in-out infinite;
        }
      `}</style>

      <section
        id="stack"
        className="min-h-screen flex flex-col items-center justify-center py-16 transition-colors duration-300"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
        }}
      >
        <div className="w-full">
          <h2
            className="text-5xl font-bold mb-10 text-center text-white floating-animation"
            style={{
              textShadow:
                "0 0 20px rgba(144, 213, 255, 0.5), 0 0 40px rgba(144, 213, 255, 0.3)",
              background: "linear-gradient(45deg, #90D5FF, #ffffff, #90D5FF)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tech Stack
          </h2>

          <div className="container mx-auto px-6 max-w-5xl">
            <div
              className="info-panel-3d p-6 rounded-2xl mb-10 w-full border-l-4 floating-animation"
              style={{ borderColor: accentColor, animationDelay: "0.5s" }}
            >
              <p className="text-lg leading-relaxed text-center text-gray-300">
                My{" "}
                <span className="font-semibold text-blue-300">
                  technical expertise
                </span>{" "}
                spans across web development and AI technologies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {skillCategories.map((cat, index) => (
                <button
                  key={cat.category}
                  onClick={() => handleCategoryClick(cat.category)}
                  className={`category-button-3d px-6 py-3 rounded-xl font-medium cursor-pointer ${
                    activeCategory === cat.category ? "active" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <span className="text-gray-200">{cat.category}</span>
                </button>
              ))}
            </div>

            {skillCategories
              .filter((cat) => cat.category === activeCategory)
              .map((selectedCategory) => (
                <div key={selectedCategory.category} className="space-y-8">
                  <div className="text-center mb-10">
                    <h3
                      className="text-3xl font-bold mb-3 text-blue-300 floating-animation"
                      style={{ animationDelay: "1s" }}
                    >
                      {selectedCategory.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {selectedCategory.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-8 skill-container-3d">
                    {selectedCategory.skills.map((skill, index) => {
                      const iconColor = getIconColor(skill.color, skill.name);

                      return (
                        <div
                          key={index}
                          className="skill-card-3d group flex flex-col items-center justify-center px-6 py-6 rounded-2xl w-32 h-32 cursor-pointer"
                          style={{
                            "--glow-color": `${skill.color}40`,
                            animationDelay: `${index * 0.1}s`,
                          }}
                          onClick={() => handleSkillClick(skill.name)}
                        >
                          <div className="skill-icon-3d flex items-center justify-center mb-3">
                            <skill.icon
                              color={iconColor}
                              size={48}
                              style={{
                                filter:
                                  skill.color === "#FFFFFF"
                                    ? "invert(1)"
                                    : "none",
                              }}
                            />
                          </div>

                          <span className="text-sm font-semibold text-center text-gray-200 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {selectedCategory.category === "Web Development" && (
                    <div
                      className="info-panel-3d mt-12 p-6 rounded-2xl border-l-4 floating-animation"
                      style={{ borderColor: accentColor, animationDelay: "2s" }}
                    >
                      <p className="text-center text-gray-300 text-lg">
                        <span className="font-semibold text-blue-300">
                          FERN Stack
                        </span>{" "}
                        provides a powerful foundation for building scalable,
                        real-time web applications.
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;
