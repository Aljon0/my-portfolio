/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
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

const Stack = ({ isActive }) => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const introVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.03,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    }),
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { rotate: 0, scale: 1 },
    visible: (i) => ({
      rotate: [0, 10, -10, 10, 0],
      scale: [1, 1.2, 1],
      transition: {
        delay: i * 0.03 + 0.5,
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 1],
      },
    }),
    hover: {
      rotate: [0, 10, -10, 10, 0],
      scale: [1, 1.2, 1.1],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 1],
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
      },
    },
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const tabVariants = {
    inactive: {
      scale: 1,
      opacity: 0.7,
      boxShadow: "0px 0px 0px rgba(144, 213, 255, 0)",
    },
    active: {
      scale: 1.05,
      opacity: 1,
      boxShadow: "0px 0px 10px rgba(144, 213, 255, 0.5)",
    },
    hover: {
      scale: 1.05,
      opacity: 0.9,
    },
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
      <motion.div
        className="w-full"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={containerVariants}
        key={isActive ? "active" : "inactive"}
      >
        <motion.h2
          className={`text-4xl font-bold mb-10 text-center font-[poppins] ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
          variants={headerVariants}
        >
          Tech Stack
        </motion.h2>

        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            className={`p-5 rounded-lg border-l-4 border-[#90D5FF] shadow-md mb-10 w-full ${
              theme === "light"
                ? "bg-gradient-to-r from-gray-100 to-gray-200"
                : "bg-gradient-to-r from-[#2a2a2a] to-[#333333]"
            }`}
            variants={introVariants}
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
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {skillCategories.map((cat) => (
              <motion.button
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
                }`}
                variants={tabVariants}
                animate={
                  activeCategory === cat.category ? "active" : "inactive"
                }
                whileHover="hover"
              >
                {cat.category}
              </motion.button>
            ))}
          </div>

          {skillCategories
            .filter((cat) => cat.category === activeCategory)
            .map((selectedCategory) => (
              <div key={selectedCategory.category} className="space-y-6">
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3
                    className={`text-2xl font-bold text-[#90D5FF] mb-2 ${
                      theme === "light" ? "text-gray-800" : "text-white"
                    }`}
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
                </motion.div>

                <motion.div
                  className="flex flex-wrap justify-center gap-6"
                  variants={rowVariants}
                >
                  {selectedCategory.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={skillVariants}
                      whileHover="hover"
                      className={`group relative flex items-center justify-center px-4 py-3 rounded-md transition-all duration-300 hover:scale-105 ${
                        theme === "light"
                          ? "bg-white border border-gray-200"
                          : "bg-[#1e1e1e] border border-[#333333]"
                      }`}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 10px ${skill.color}, 0 0 15px ${skill.color}40`;
                        e.currentTarget.style.border = `1px solid ${skill.color}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.border =
                          theme === "light"
                            ? "1px solid #e5e7eb"
                            : "1px solid #333333";
                      }}
                      onClick={() => handleSkillClick(skill.name)}
                    >
                      <motion.div
                        custom={index}
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <skill.icon
                          color={skill.color}
                          style={{
                            fontSize: "1.5rem",
                            filter:
                              skill.color === "#FFFFFF" ? "invert(1)" : "none",
                          }}
                          size={40}
                        />
                      </motion.div>

                      <motion.span
                        className={`absolute bg-[#1a1a1a] text-white px-2 py-1 rounded-md -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-50 opacity-100 
                        ${
                          activeSkill === skill.name
                            ? "visible"
                            : "invisible group-hover:visible"
                        }`}
                        style={{
                          boxShadow: `0 0 8px ${skill.color}40`,
                          border: `1px solid ${skill.color}40`,
                        }}
                        variants={tooltipVariants}
                        initial="hidden"
                        animate={
                          activeSkill === skill.name ? "visible" : "hidden"
                        }
                      >
                        {skill.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>

                {selectedCategory.category === "Web Development" && (
                  <motion.div
                    className={`mt-10 p-4 rounded-lg border-l-4 border-[#90D5FF] ${
                      theme === "light"
                        ? "bg-white border border-gray-200"
                        : "bg-[#1e1e1e] border border-[#333333]"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
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
                  </motion.div>
                )}
              </div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stack;
