import React, { useState } from "react";
import {
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReplit,
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

// Custom Make.com icon
const MakeIcon = ({ color, size, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      style={style}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      <circle cx="8" cy="8" r="1.5" />
      <circle cx="16" cy="8" r="1.5" />
      <circle cx="8" cy="16" r="1.5" />
      <circle cx="16" cy="16" r="1.5" />
      <path d="M8 12h8M12 8v8" stroke={color} strokeWidth="1" fill="none" />
    </svg>
  );
};

// Custom n8n icon
const N8nIcon = ({ color, size, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      style={style}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      <circle cx="6" cy="9" r="1" />
      <circle cx="18" cy="9" r="1" />
      <circle cx="6" cy="15" r="1" />
      <circle cx="18" cy="15" r="1" />
    </svg>
  );
};

// Custom Lovable AI icon
const LovableIcon = ({ color, size, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      style={style}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      <circle cx="12" cy="12" r="3" fill="white" />
      <path d="M12 10v4M10 12h4" stroke={color} strokeWidth="0.5" fill="none" />
    </svg>
  );
};

const Stack = () => {
  const { theme } = useTheme();
  const [activeSkill, setActiveSkill] = useState(null);
  const accentColor = theme === "light" ? "#1E40AF" : "#90D5FF";

  const getIconColor = (baseColor, name) => {
    if (theme === "dark") {
      if (name === "Express") return "#FFFFFF";
      if (name === "GitHub") return "#FFFFFF";
    }
    return baseColor;
  };

  const skillCategories = [
    {
      category: "Front End",
      skills: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
        { name: "Express", icon: SiExpress, color: "#333333" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ],
    },
    {
      category: "AI & Automation Tools",
      skills: [
        { name: "Hugging Face", icon: HuggingFaceIcon, color: "#FFD21E" },
        { name: "Mistral AI", icon: MistralIcon, color: "#6352D9" },
        { name: "Lovable AI", icon: LovableIcon, color: "#FF6B9D" },
        { name: "Make.com", icon: MakeIcon, color: "#6B46F2" },
        { name: "n8n", icon: N8nIcon, color: "#EA4B71" },
      ],
    },
    {
      category: "Development Tools",
      skills: [
        { name: "GitHub", icon: FaGithub, color: "#333333" },
        { name: "Git", icon: FaGit, color: "#F05032" },
        { name: "Replit", icon: SiReplit, color: "#F26207" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ],
    },
  ];

  const handleSkillClick = (skillName) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  return (
    <div>
      <section
        id="stack"
        className="min-h-screen flex flex-col items-center justify-center py-16 transition-colors duration-300"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
        }}
      >
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          .floating-animation {
            animation: float 3s ease-in-out infinite;
          }

          .skill-card-3d {
            background: linear-gradient(
              145deg,
              rgba(30, 30, 30, 0.8),
              rgba(20, 20, 20, 0.9)
            );
            border: 1px solid rgba(144, 213, 255, 0.1);
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .skill-card-3d:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 10px 30px var(--glow-color),
              0 0 20px var(--glow-color);
            border-color: rgba(144, 213, 255, 0.4);
          }

          .skill-icon-3d {
            transition: all 0.3s ease;
          }

          .skill-card-3d:hover .skill-icon-3d {
            transform: scale(1.2) rotateY(180deg);
          }

          .info-panel-3d {
            background: linear-gradient(
              145deg,
              rgba(30, 30, 30, 0.6),
              rgba(20, 20, 20, 0.8)
            );
            border: 1px solid rgba(144, 213, 255, 0.2);
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(144, 213, 255, 0.1);
          }
        `}</style>

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
                spans across web development, AI technologies, and automation
                tools.
              </p>
            </div>

            {/* Display all categories vertically */}
            <div className="space-y-16">
              {skillCategories.map((category, categoryIndex) => (
                <div key={category.category} className="space-y-8">
                  {/* Category Title */}
                  <h3
                    className="text-3xl font-bold text-center text-white mb-8 floating-animation"
                    style={{
                      textShadow: "0 0 15px rgba(144, 213, 255, 0.4)",
                      background: "linear-gradient(45deg, #90D5FF, #ffffff)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animationDelay: `${categoryIndex * 0.3}s`,
                    }}
                  >
                    {category.category}
                  </h3>

                  {/* Skills for this category */}
                  <div className="flex flex-wrap justify-center gap-8">
                    {category.skills.map((skill, index) => {
                      const iconColor = getIconColor(skill.color, skill.name);

                      return (
                        <div
                          key={index}
                          className="skill-card-3d group flex flex-col items-center justify-center px-6 py-6 rounded-2xl w-32 h-32 cursor-pointer"
                          style={{
                            "--glow-color": `${skill.color}40`,
                            animationDelay: `${
                              categoryIndex * 0.3 + index * 0.1
                            }s`,
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stack;
