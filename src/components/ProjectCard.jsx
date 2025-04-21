import React from "react";
import { FaChartBar, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiAppwrite,
  SiSupabase,
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

const ProjectCard = ({ project, handleViewProject }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`project-card group rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.03] ${
        theme === "light"
          ? "bg-gradient-to-b from-gray-100 to-gray-200"
          : "bg-gradient-to-b from-[#2a2a2a] to-[#333333]"
      }`}
    >
      <div
        className={`h-32 relative overflow-hidden ${
          theme === "light"
            ? "bg-gradient-to-r from-gray-100 to-gray-200"
            : "bg-gradient-to-r from-[#2a2a2a] to-[#444444]"
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.1] transition-transform duration-300"
          />
        ) : (
          <div
            className={`absolute inset-0 opacity-10 ${
              theme === "light"
                ? "bg-[radial-gradient(#333333_1px,transparent_1px)]"
                : "bg-[radial-gradient(#90D5FF_1px,transparent_1px)]"
            } bg-[size:16px_16px]`}
          ></div>
        )}

        <div className="absolute top-2 right-2 bg-[#90D5FF] text-[#333333] text-xs font-bold px-2 py-0.5 rounded-full hover:scale-[1.05] transition-transform">
          {project.category}
        </div>
      </div>

      <div className="p-3">
        <h3
          className={`text-lg font-semibold mb-1 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-xs mb-2 line-clamp-2 ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-2">
          {project.technologies.map((tech, index) => {
            const techIcon = techIcons[tech];
            return (
              <span
                key={index}
                className={`text-xs px-1.5 py-0.5 rounded-full flex items-center gap-1 hover:scale-[1.05] transition-transform ${
                  theme === "light"
                    ? "bg-gray-200 text-gray-700"
                    : "bg-[#444444] text-gray-300"
                }`}
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

        <div className="flex space-x-2">
          <button
            onClick={() => handleViewProject(project)}
            className="text-xs bg-[#90D5FF] text-[#333333] px-2 py-1 rounded-md font-medium hover:bg-[#7bc8ff] transition-colors hover:scale-[1.05]"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
