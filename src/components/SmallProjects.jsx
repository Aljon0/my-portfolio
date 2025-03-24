import React from "react";
import ProjectCard from "./ProjectCard";

const SmallProjects = ({ projects, handleViewProject }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[#90D5FF] border-b border-gray-700 pb-2 mb-4">
        Small Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            handleViewProject={handleViewProject}
          />
        ))}
      </div>
    </div>
  );
};

export default SmallProjects;
