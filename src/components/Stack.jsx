/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaPython,
} from "react-icons/fa";
import {
  SiAppwrite,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiVite,
} from "react-icons/si";

const Stack = ({ isActive }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Three.js", icon: SiThreedotjs, color: "#FAFAFA" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
        { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
        { name: "Express", icon: SiExpress, color: "#FAFAFA" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Appwrite", icon: SiAppwrite, color: "#F02E65" },
        { name: "Python", icon: FaPython, color: "#3776AB" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "Appwrite", icon: SiAppwrite, color: "#F02E65" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "GitHub", icon: FaGithub, color: "#FAFAFA" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
      ],
    },
  ];

  const allSkills = skillCategories.flatMap((category) => category.skills);
  const uniqueSkills = allSkills.filter(
    (skill, index, self) =>
      index === self.findIndex((s) => s.name === skill.name)
  );

  const firstRowSkills = uniqueSkills.slice(
    0,
    Math.ceil(uniqueSkills.length / 2)
  );
  const secondRowSkills = uniqueSkills.slice(
    Math.ceil(uniqueSkills.length / 2)
  );

  const handleSkillClick = (skillName) => {
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  // Animation variants
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

  // New icon animation variants
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

  // Floating animation for tooltip
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

  return (
    <section
      id="stack"
      className="min-h-screen flex flex-col items-center justify-center bg-[#333333] py-16"
    >
      <motion.div
        className="w-full"
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={containerVariants}
        key={isActive ? "active" : "inactive"}
      >
        <motion.h2
          className="text-4xl font-bold text-white mb-10 text-center font-[poppins]"
          variants={headerVariants}
        >
          Tech Stack
        </motion.h2>

        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            className="bg-gradient-to-r from-[#2a2a2a] to-[#333333] p-5 rounded-lg border-l-4 border-[#90D5FF] shadow-md mb-10 w-full"
            variants={introVariants}
          >
            <p className="text-lg leading-relaxed text-gray-300 text-center">
              My{" "}
              <span className="text-[#90D5FF] font-semibold">
                technical expertise
              </span>{" "}
              spans across multiple domains of web development.
            </p>
          </motion.div>

          <div className="space-y-10">
            {/* First row of skills */}
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={rowVariants}
            >
              {firstRowSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={skillVariants}
                  whileHover="hover"
                  className="group relative flex items-center justify-center bg-[#1e1e1e] text-gray-300 px-4 py-3 rounded-md transition-all duration-300 hover:scale-105"
                  style={{
                    border: "1px solid #333333",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 10px ${skill.color}, 0 0 15px ${skill.color}40`;
                    e.currentTarget.style.border = `1px solid ${skill.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.border = "1px solid #333333";
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
                    animate={activeSkill === skill.name ? "visible" : "hidden"}
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            {/* Second row of skills */}
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={rowVariants}
            >
              {secondRowSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  custom={index + firstRowSkills.length}
                  variants={skillVariants}
                  whileHover="hover"
                  className="group relative flex items-center justify-center bg-[#1e1e1e] text-gray-300 px-4 py-3 rounded-md transition-all duration-300 hover:scale-105"
                  style={{
                    border: "1px solid #333333",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 10px ${skill.color}, 0 0 15px ${skill.color}40`;
                    e.currentTarget.style.border = `1px solid ${skill.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.border = "1px solid #333333";
                  }}
                  onClick={() => handleSkillClick(skill.name)}
                >
                  <motion.div
                    custom={index + firstRowSkills.length}
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
                    animate={activeSkill === skill.name ? "visible" : "hidden"}
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Stack;
