import { motion } from "framer-motion";
import React from "react";
import { FaChartBar, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAppwrite,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";

const techIcons = {
  React: { icon: FaReact, color: "#61DAFB" },
  "Node.js": { icon: FaNodeJs, color: "#68A063" },
  Tailwind: { icon: SiTailwindcss, color: "#38B2AC" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  "Three.js": { icon: TbBrandThreejs, color: "#000000" },
  "Chart.js": { icon: FaChartBar, color: "#FF6384" },
  MongoDB: { icon: SiMongodb, color: "#4DB33D" },
  Express: { icon: SiExpress, color: "#303030" },
  "Weather API": { icon: FaDatabase, color: "#5F9EA0" },
  Appwrite: { icon: SiAppwrite, color: "#F02E65" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
};

const ProjectCard = ({ project, handleViewProject, accentColor }) => {
  const { theme } = useTheme();

  // Improved card styles with better contrast for both themes
  const cardBackgroundClass = theme === "light" ? "bg-white" : "bg-[#2a2a2a]";

  const textColorClass = theme === "light" ? "text-gray-800" : "text-white";

  const secondaryTextColorClass =
    theme === "light" ? "text-gray-600" : "text-gray-300";

  const techBadgeClass =
    theme === "light"
      ? "bg-gray-100 text-gray-700 border border-gray-200"
      : "bg-[#3a3a3a] text-gray-200 border border-[#444444]";

  return (
    <div
      className={`project-card rounded-lg overflow-hidden shadow-lg ${cardBackgroundClass} border ${
        theme === "light" ? "border-gray-200" : "border-[#444444]"
      }`}
    >
      <div className="h-32 relative overflow-hidden">
        {project.image ? (
          <motion.div
            className="absolute inset-0 w-full h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          <div
            className={`absolute inset-0 opacity-10 ${
              theme === "light"
                ? "bg-[radial-gradient(#333333_1px,transparent_1px)]"
                : "bg-[radial-gradient(#90D5FF_1px,transparent_1px)]"
            } bg-[size:16px_16px]`}
          ></div>
        )}

        <div
          className="absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: accentColor,
            color: theme === "light" ? "white" : "#333333",
          }}
        >
          {project.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className={`text-lg font-semibold mb-2 ${textColorClass}`}>
          {project.title}
        </h3>
        <p className={`text-sm mb-3 line-clamp-2 ${secondaryTextColorClass}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.map((tech, index) => {
            const techIcon = techIcons[tech];
            return (
              <span
                key={index}
                className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${techBadgeClass}`}
              >
                {techIcon && (
                  <techIcon.icon
                    className="mr-0.5"
                    color={techIcon.color}
                    style={{ fontSize: "0.75rem" }}
                  />
                )}
                {tech}
              </span>
            );
          })}
        </div>

        <motion.button
          onClick={(e) => handleViewProject(project, e)}
          className="w-full text-sm px-3 py-1.5 rounded-md font-medium hover:opacity-90 transition-colors"
          style={{
            backgroundColor: accentColor,
            color: theme === "light" ? "white" : "#333333",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Project
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectCard;
