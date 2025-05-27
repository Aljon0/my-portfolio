import React from "react";
import { useTheme } from "../context/ThemeContext";
import ProjectCard from "./ProjectCard";

const FeaturedProjects = ({ projects, handleViewProject, accentColor }) => {
  const { theme } = useTheme();

  return (
    <>
      <style jsx>{`
        @keyframes float-3d {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: translateY(-10px) rotateX(5deg) rotateY(-2deg);
          }
          50% {
            transform: translateY(-15px) rotateX(0deg) rotateY(2deg);
          }
          75% {
            transform: translateY(-8px) rotateX(-3deg) rotateY(-1deg);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(144, 213, 255, 0.3),
              0 0 40px rgba(144, 213, 255, 0.2),
              inset 0 0 20px rgba(144, 213, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(144, 213, 255, 0.5),
              0 0 60px rgba(144, 213, 255, 0.3),
              inset 0 0 30px rgba(144, 213, 255, 0.2);
          }
        }

        .section-title-3d {
          background: linear-gradient(45deg, #90d5ff, #ffffff, #90d5ff);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(144, 213, 255, 0.5);
          position: relative;
        }

        .section-title-3d::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #90d5ff, transparent);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(144, 213, 255, 0.6);
        }

        .projects-container-3d {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .project-grid-3d {
          display: flex;
          gap: 2rem;
          padding: 1rem 0;
          min-width: min-content;
        }

        .project-wrapper-3d {
          flex-shrink: 0;
          width: 320px;
          transform-style: preserve-3d;
        }

        .floating-animation {
          animation: float-3d 6s ease-in-out infinite;
        }

        .hide-scrollbar-3d {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .hide-scrollbar-3d::-webkit-scrollbar {
          display: none;
        }
      `}</style>

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
          <div className="project-grid-3d">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-wrapper-3d"
                style={{ animationDelay: `${index * 0.1}s` }}
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
    </>
  );
};

export default FeaturedProjects;
