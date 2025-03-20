import React from "react";
import { FaChartBar, FaCode, FaNodeJs, FaReact } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const SmallProjects = ({ projects, onViewProject }) => {
  // Map of technology icons with colors
  const techIcons = {
    React: { icon: FaReact, color: "#61DAFB" },
    "Node.js": { icon: FaNodeJs, color: "#68A063" },
    Tailwind: { icon: SiTailwindcss, color: "#38B2AC" },
    Firebase: { icon: SiFirebase, color: "#FFCA28" },
    "Three.js": { icon: TbBrandThreejs, color: "#000000" },
    "Chart.js": { icon: FaChartBar, color: "#FF6384" },
    MongoDB: { icon: SiMongodb, color: "#4DB33D" },
    Express: { icon: FaCode, color: "#303030" },
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-[#90D5FF] border-b border-gray-700 pb-2 mb-4">
        Small Projects
      </h2>

      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: "250px" }}
            >
              <SmallProjectCard
                project={project}
                techIcons={techIcons}
                onViewProject={() => onViewProject(project)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Small project card component
const SmallProjectCard = ({ project, techIcons, onViewProject }) => {
  return (
    <div
      className="small-project-card group bg-gradient-to-b from-[#2a2a2a] to-[#333333] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full cursor-pointer"
      onClick={onViewProject}
    >
      <div className="h-28 bg-gradient-to-r from-[#2a2a2a] to-[#444444] relative overflow-hidden">
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
        <div className="absolute top-2 right-2 bg-[#90D5FF] text-[#333333] text-xs font-bold px-2 py-1 rounded-full">
          {project.type}
        </div>
      </div>

      <div className="p-3 flex-grow flex flex-col">
        <h3 className="text-sm font-semibold text-white mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-300 text-xs mb-2 line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Technologies used with colored icons - limit to 3 */}
        <div className="flex flex-wrap gap-1 mt-1">
          {project.technologies.slice(0, 3).map((tech, index) => {
            const techIcon = techIcons[tech];
            return (
              <span
                key={index}
                className="bg-[#444444] text-gray-300 text-xs px-2 py-1 rounded-full flex items-center gap-1"
              >
                {techIcon && (
                  <techIcon.icon
                    className="mr-0.5"
                    color={techIcon.color}
                    size={12}
                  />
                )}
                <span className="text-xs">{tech}</span>
              </span>
            );
          })}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-400 ml-1">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallProjects;
