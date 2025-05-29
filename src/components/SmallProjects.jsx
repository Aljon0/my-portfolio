import React from "react";
import { useTheme } from "../context/ThemeContext";
import ProjectCard from "./ProjectCard";

const SmallProjects = ({ projects, handleViewProject, accentColor }) => {
  const { theme } = useTheme();

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h2
          className="section-title-3d text-3xl font-bold mb-6 floating-animation text-left"
          style={{ animationDelay: "0.3s" }}
        >
          Small Projects
        </h2>
      </div>

      <div className="projects-container-3d overflow-x-auto pb-6 hide-scrollbar-3d">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-wrapper-3d h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProjectCard
                project={project}
                handleViewProject={handleViewProject}
                accentColor={accentColor}
                isSmall={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallProjects;
