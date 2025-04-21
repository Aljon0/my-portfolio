import React, { useState } from "react";
import {
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaMobileAlt,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAppwrite,
  SiChakraui,
  SiExpress,
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiVite,
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

const Stack = () => {
  const { theme } = useTheme();
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Web Development");

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

  // Function to get appropriate icon color based on theme and icon
  const getIconColor = (baseColor, name) => {
    // Icons that need special handling in dark mode
    if (theme === "dark") {
      if (name === "Three.js") return "#FFFFFF"; // White for Three.js in dark mode
      if (name === "Express") return "#FFFFFF"; // White for Express in dark mode
      if (name === "GitHub") return "#FFFFFF"; // White for GitHub in dark mode
    }
    return baseColor; // Default color for all other cases
  };

  const skillCategories = [
    {
      category: "Web Development",
      title: "FERN Stack",
      description: "Firebase, Express, React, Node.js",
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
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
        { name: "Three.js", icon: SiThreedotjs, color: "#333333" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "Appwrite", icon: SiAppwrite, color: "#F02E65" },
        { name: "GitHub", icon: FaGithub, color: "#333333" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
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
    <section
      id="stack"
      className={`min-h-screen flex flex-col items-center justify-center py-16 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 to-gray-200"
          : "bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]"
      }`}
    >
      <div className="w-full">
        <h2
          className={`text-4xl font-bold mb-10 text-center font-[poppins] ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          Tech Stack
        </h2>

        <div className="container mx-auto px-6 max-w-5xl">
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
              My{" "}
              <span className="text-[#90D5FF] font-semibold">
                technical expertise
              </span>{" "}
              spans across web development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => handleCategoryClick(cat.category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${
                  activeCategory === cat.category
                    ? "border-[#90D5FF]"
                    : theme === "light"
                    ? "border-gray-300"
                    : "border-[#444444]"
                } ${
                  theme === "light"
                    ? activeCategory === cat.category
                      ? "bg-white text-gray-800"
                      : "bg-gray-100 text-gray-700"
                    : activeCategory === cat.category
                    ? "bg-[#1e1e1e] text-white"
                    : "bg-[#2a2a2a] text-gray-300"
                } hover:scale-105`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {skillCategories
            .filter((cat) => cat.category === activeCategory)
            .map((selectedCategory) => (
              <div key={selectedCategory.category} className="space-y-6">
                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      theme === "light" ? "text-gray-800" : "text-white"
                    }`}
                    style={{ color: "#90D5FF" }}
                  >
                    {selectedCategory.title}
                  </h3>
                  <p
                    className={
                      theme === "light" ? "text-gray-600" : "text-gray-300"
                    }
                  >
                    {selectedCategory.description}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                  {selectedCategory.skills.map((skill, index) => {
                    // Get the appropriate color based on theme and icon name
                    const iconColor = getIconColor(skill.color, skill.name);

                    return (
                      <div
                        key={index}
                        className={`group relative flex flex-col items-center justify-center px-4 py-3 rounded-md transition-all duration-300 hover:scale-105 animate-bounce-slow cursor-pointer w-24 h-24 ${
                          theme === "light"
                            ? "bg-white border border-gray-200"
                            : "bg-[#1e1e1e] border border-[#333333]"
                        }`}
                        style={{
                          animationDuration: `${3 + index * 0.2}s`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = `0 0 10px ${skill.color}, 0 0 15px ${skill.color}40`;
                          e.currentTarget.style.border = `1px solid ${skill.color}`;
                          e.currentTarget.style.animationPlayState = "paused";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.border =
                            theme === "light"
                              ? "1px solid #e5e7eb"
                              : "1px solid #333333";
                          e.currentTarget.style.animationPlayState = "running";
                        }}
                        onClick={() => handleSkillClick(skill.name)}
                      >
                        <div className="flex items-center justify-center mb-2">
                          <skill.icon
                            color={iconColor}
                            style={{
                              fontSize: "1.5rem",
                              filter:
                                skill.color === "#FFFFFF"
                                  ? "invert(1)"
                                  : "none",
                            }}
                            size={40}
                          />
                        </div>

                        <span
                          className={`text-xs font-medium text-center ${
                            theme === "light"
                              ? "text-gray-700"
                              : "text-gray-300"
                          }`}
                          style={{
                            color: iconColor,
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {selectedCategory.category === "Web Development" && (
                  <div
                    className={`mt-10 p-4 rounded-lg border-l-4 border-[#90D5FF] ${
                      theme === "light"
                        ? "bg-white border border-gray-200"
                        : "bg-[#1e1e1e] border border-[#333333]"
                    }`}
                  >
                    <p
                      className={`text-center ${
                        theme === "light" ? "text-gray-600" : "text-gray-300"
                      }`}
                    >
                      <span className="text-[#90D5FF] font-semibold">
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
  );
};

export default Stack;
