import React from "react";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = ({ projects, onViewProject }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[#90D5FF] border-b border-gray-700 pb-2 mb-4">
        Featured Projects
      </h2>

      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-4" style={{ minWidth: "min-content" }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: "300px" }}
            >
              <ProjectCard
                project={project}
                onViewProject={() => onViewProject(project)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
