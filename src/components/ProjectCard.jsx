import React from "react";
import { FaChartBar, FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

// Map of technology icons with colors
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
};

const ProjectCard = ({ project, handleViewProject }) => (
  <div className="project-card group bg-gradient-to-b from-[#2a2a2a] to-[#333333] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
    <div className="h-32 bg-gradient-to-r from-[#2a2a2a] to-[#444444] relative overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      ) : (
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#90D5FF_1px,transparent_1px)] bg-[size:16px_16px]"></div>
      )}

      {/* Project type badge */}
      <div className="absolute top-2 right-2 bg-[#90D5FF] text-[#333333] text-xs font-bold px-2 py-0.5 rounded-full">
        {project.category}
      </div>
    </div>

    <div className="p-3">
      <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
      <p className="text-gray-300 text-xs mb-2 line-clamp-2">
        {project.description}
      </p>

      {/* Technologies used with colored icons */}
      <div className="flex flex-wrap gap-1 mb-2">
        {project.technologies.map((tech, index) => {
          const techIcon = techIcons[tech];
          return (
            <span
              key={index}
              className="bg-[#444444] text-gray-300 text-xs px-1.5 py-0.5 rounded-full flex items-center gap-1"
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

      {/* Action buttons */}
      <div className="flex space-x-2">
        <button
          onClick={() => handleViewProject(project)}
          className="text-xs bg-[#90D5FF] text-[#333333] px-2 py-1 rounded-md font-medium hover:bg-[#7bc8ff] transition-colors"
        >
          View Project
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;
