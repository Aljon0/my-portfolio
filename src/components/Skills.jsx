import React, { useState } from "react";
import {
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAppwrite,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiVite,
} from "react-icons/si";

const Skills = () => {
  // Add state to track which skill is active on mobile
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
        { name: "Three.js", icon: SiThreedotjs, color: "#000000" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
        { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Appwrite", icon: SiAppwrite, color: "#F02E65" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "Appwrite", icon: SiAppwrite, color: "#F02E65" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
      ],
    },
  ];

  // Flatten all skills into a single array and remove duplicates
  const allSkills = skillCategories.flatMap((category) => category.skills);

  // Remove duplicate skills (like JavaScript appearing in both Frontend and Backend)
  const uniqueSkills = allSkills.filter(
    (skill, index, self) =>
      index === self.findIndex((s) => s.name === skill.name)
  );

  // Split skills into two rows of 9 each
  const firstRowSkills = uniqueSkills.slice(0, 9);
  const secondRowSkills = uniqueSkills.slice(9, 18);

  // Handle click on skill icon
  const handleSkillClick = (skillName) => {
    // Toggle active skill
    setActiveSkill(activeSkill === skillName ? null : skillName);
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-[#333333] py-16"
    >
      <h2 className="text-4xl font-bold text-white mb-10 text-center font-[poppins]">
        Tech Stack
      </h2>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-gradient-to-r from-[#2a2a2a] to-[#333333] p-5 rounded-lg border-l-4 border-[#90D5FF] shadow-md mb-10 w-full">
          <p className="text-lg leading-relaxed text-gray-300 text-center">
            My{" "}
            <span className="text-[#90D5FF] font-semibold">
              technical expertise
            </span>{" "}
            spans across multiple domains of web development.
          </p>
        </div>

        <div className="space-y-10">
          {/* First row of 9 icons */}
          <div className="flex flex-wrap justify-center gap-6">
            {firstRowSkills.map((skill, index) => (
              <div
                key={index}
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
                <skill.icon
                  color={skill.color}
                  style={{ fontSize: "1.5rem" }}
                  size={40}
                />

                <span
                  className={`absolute bg-[#1a1a1a] text-white px-2 py-1 rounded-md -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-200 z-50
                  ${
                    activeSkill === skill.name
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 pointer-events-none"
                  }`}
                  style={{
                    boxShadow: `0 0 8px ${skill.color}40`,
                    border: `1px solid ${skill.color}40`,
                  }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second row of remaining icons */}
          <div className="flex flex-wrap justify-center gap-6">
            {secondRowSkills.map((skill, index) => (
              <div
                key={index}
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
                <skill.icon
                  color={skill.color}
                  style={{ fontSize: "1.5rem" }}
                  size={40}
                />

                <span
                  className={`absolute bg-[#1a1a1a] text-white px-2 py-1 rounded-md -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-200 z-50
                  ${
                    activeSkill === skill.name
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 md:group-hover:opacity-100 pointer-events-none"
                  }`}
                  style={{
                    boxShadow: `0 0 8px ${skill.color}40`,
                    border: `1px solid ${skill.color}40`,
                  }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
