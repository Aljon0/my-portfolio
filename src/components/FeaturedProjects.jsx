import React from "react";
import ProjectCard from "./ProjectCard";
import { useTheme } from "../context/ThemeContext";

const FeaturedProjects = ({ projects, handleViewProject, accentColor }) => {
  const { theme } = useTheme();

  return (
    <div className="mb-8">
      <h2
        className={`text-xl font-bold border-b pb-2 mb-4 ${
          theme === "light" ? "border-gray-300" : "border-gray-700"
        }`}
        style={{ color: accentColor }}
      >
        Featured Projects
      </h2>

      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 hover:scale-[1.03] transition-transform"
              style={{ width: "300px" }}
            >
              <ProjectCard
                project={project}
                handleViewProject={handleViewProject}
                accentColor={accentColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
