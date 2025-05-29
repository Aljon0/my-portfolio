import React from "react";
import { useTheme } from "../context/ThemeContext";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = ({ projects, handleViewProject, accentColor }) => {
  const { theme } = useTheme();

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h2
          className="section-title-3d text-3xl font-bold mb-6 floating-animation text-left"
          style={{ animationDelay: "0.2s" }}
        >
          Featured Projects
        </h2>
      </div>

      <div className="projects-container-3d overflow-x-auto pb-6 hide-scrollbar-3d">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-wrapper-3d h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                project={project}
                handleViewProject={handleViewProject}
                accentColor={accentColor}
                isSmall={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
